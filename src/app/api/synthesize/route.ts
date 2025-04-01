import {
  PollyClient,
  SynthesizeSpeechCommand,
  Engine,
  OutputFormat,
  VoiceId,
  TextType,
} from "@aws-sdk/client-polly";
import { SdkStreamMixin, StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { IncomingMessage } from "http";
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";

// Type guard to check for a web ReadableStream (has getReader)
function isWebReadableStream(
  stream: unknown
): stream is ReadableStream<Uint8Array> {
  return (
    stream !== null &&
    typeof stream === "object" &&
    "getReader" in stream &&
    typeof (stream as { getReader: () => unknown }).getReader === "function"
  );
}

function isNodeReadable(stream: unknown): stream is Readable {
  return (
    stream !== null &&
    typeof stream === "object" &&
    "on" in stream &&
    typeof (
      stream as {
        on: (event: string, listener: (...args: unknown[]) => void) => unknown;
      }
    ).on === "function"
  );
}

const streamToBuffer = async (
  stream:
    | Blob
    | StreamingBlobPayloadOutputTypes
    | (IncomingMessage & SdkStreamMixin)
): Promise<Buffer> => {
  if (!stream) {
    throw new Error("AudioStream is undefined");
  }

  // Check if the stream has a getReader method (web ReadableStream or Blob)
  if (isWebReadableStream(stream)) {
    // If it's a Blob, convert it to a web ReadableStream first
    const readableStream = stream instanceof Blob ? stream.stream() : stream;
    const reader = readableStream.getReader();
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    return Buffer.concat(chunks);
  }
  // Otherwise, assume it's a Node.js Readable stream (e.g. IncomingMessage & SdkStreamMixin)
  else if (isNodeReadable(stream)) {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      (stream as Readable).on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });
      (stream as Readable).on("end", () => {
        resolve(Buffer.concat(chunks));
      });
      (stream as Readable).on("error", (err: Error) => {
        reject(err);
      });
    });
  } else {
    throw new Error("Unsupported stream type");
  }
};

const polly = new PollyClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

async function generatePollyAudio(text: string) {
  const param = {
    Engine: Engine.NEURAL,
    Text: text,
    OutputFormat: OutputFormat.MP3,
    TextType: TextType.SSML,
    VoiceId: VoiceId.Matthew,
  };

  const command = new SynthesizeSpeechCommand(param);

  try {
    const data = await polly.send(command);
    if (data.AudioStream) {
      // Convert the ReadableStream to a Buffer
      return await streamToBuffer(data.AudioStream);
    } else {
      throw new Error("AudioStream is missing.");
    }
  } catch (err) {
    console.error("Polly Error:", err);
    throw err; // Re-throw the error to be handled in the POST request
  }
}

export async function POST(req: NextRequest) {
  try {
    const { Text } = await req.json();

    if (!Text) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const audio = await generatePollyAudio(Text);

    return new NextResponse(audio, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    console.error("Polly Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

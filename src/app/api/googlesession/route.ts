// app/api/googlesession/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// https://science-graph-api-724566382524.northamerica-northeast1.run.app
// make request to API to create session cookie
export async function POST(request: NextRequest) {
  const { token } = await request.json();
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) {
    console.error("Missing google client in environment");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }
  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 400 });
  }

  try {
    const oauth2Client = new google.auth.OAuth2();
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });

    const payload = ticket.getPayload();

    return NextResponse.json({ status: "ok", user: payload });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}

// make request to API to delete session cookie
export async function DELETE(request: Request) {
  // You can handle session clearing or token invalidation here
  // If you're using cookies, clear the Google session cookie
  request.json();
  // Respond with a success message
  return NextResponse.json({ message: "Logged out successfully" });
}

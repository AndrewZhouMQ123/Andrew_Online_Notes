"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import HTTPStable from "@/app/devNotes/components/HTTPStable";
import { handle2TSave } from "@/lib/generatePDF";
import Image from "next/image";
import Link from "next/link";
import buttonStyles from "@/app/ui/buttons.module.css";

interface Https {
  http: string;
  desc: string;
}

interface Cheatsheet {
  name: string;
  datasheet: Https[];
}

const HTTPSpage = () => {
  const [httpData, setHttpData] = useState<Cheatsheet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHttpData = async () => {
      try {
        const { data, error } = await supabase
          .from("devnotes")
          .select("name, datasheet") // Ensure both 'name' and 'datasheet' are selected
          .in("name", [
            "httpMethods",
            "httpStatusCodes",
            "httpProperties",
            "httpHeaders",
          ]);

        if (error) {
          console.error("Error fetching HTTP data:", error);
          setHttpData([]);
        } else {
          // Map the response to fit the Cheatsheet interface
          const formattedData: Cheatsheet[] =
            data?.map((item) => ({
              name: item.name,
              datasheet: item.datasheet,
            })) || [];

          setHttpData(formattedData);
        }
      } catch (err) {
        console.error("Error fetching HTTP data:", err);
        setHttpData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHttpData();
  }, []);

  if (loading) {
    return <div className="page-wrap">Loading...</div>;
  }

  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">HTTPS CHEAT SHEET</h1>
      <Image
        src="/Client-server-model.png"
        height={500}
        width={800}
        alt="client server model"
      />
      <p>Here are some useful links.</p>
      <div>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
        >
          HTTP
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTTPS"
        >
          HTTPS
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://axios-http.com/"
        >
          Axios
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://fetch.spec.whatwg.org/"
        >
          WHATWG Fetch
        </Link>
      </div>
      <div>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://xhr.spec.whatwg.org/"
        >
          WHATWG XMLHttpRequest
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://websockets.spec.whatwg.org/"
        >
          WHATWG WebSocket
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://mimesniff.spec.whatwg.org/"
        >
          WHATWG MIME
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://encoding.spec.whatwg.org/"
        >
          WHATWG Encoding
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://compression.spec.whatwg.org/"
        >
          WHATWG Compression
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://streams.spec.whatwg.org/"
        >
          WHATWG Streams
        </Link>
      </div>
      {httpData.map((httpGroup, index) => (
        <HTTPStable
          key={index}
          data={httpGroup.datasheet}
          title={httpGroup.name}
          onSave={handle2TSave}
        />
      ))}
    </div>
  );
};

export default HTTPSpage;

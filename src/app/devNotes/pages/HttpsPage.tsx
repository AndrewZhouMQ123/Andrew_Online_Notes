"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import HTTPStable from "@/app/devNotes/components/HTTPStable";
import { handle2TSave } from "@/app/api/generatePDF";
import Image from "next/image";

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

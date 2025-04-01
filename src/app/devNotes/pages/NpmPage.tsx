"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import NPMTable from "../components/NPMTable";
import { handle2TSave } from "@/app/api/generatePDF";

// Type definition for npmCommands
interface NpmCommand {
  command: string;
  desc: string;
}

const NpmPage = () => {
  const [npmCommands, setNpmCommands] = useState<NpmCommand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch NPM Commands from the database
        const { data, error } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "npmCommands")
          .single();

        if (error) {
          console.error("Error fetching NPM Commands:", error);
          setNpmCommands([]);
        } else {
          setNpmCommands(data?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching NPM Commands:", err);
        setNpmCommands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="page-wrap">Loading...</div>;
  }

  return (
    <div className="page-wrap">
      <span className="blog-title glitter-title">NPM Cheat Sheet</span>
      <NPMTable data={npmCommands} title="NPM Commands" onSave={handle2TSave} />
    </div>
  );
};

export default NpmPage;

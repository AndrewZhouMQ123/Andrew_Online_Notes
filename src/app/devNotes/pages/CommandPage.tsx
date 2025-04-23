"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import CMDTable from "@/app/devnotes/components/CMDTable";
import { handle2TSave } from "@/lib/generatePDF";

interface Commands {
  cmd: string;
  desc: string;
}

interface Cheatsheet {
  name: string;
  datasheet: Commands[];
}

const CommandsPage = () => {
  const [commandsData, setCommandsData] = useState<Cheatsheet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommandsData = async () => {
      try {
        const { data, error } = await supabase
          .from("devnotes")
          .select("name, datasheet")
          .in("name", [
            "generalCMD",
            "readWriteCMD",
            "executablesCMD",
            "taskManageMCD",
            "networkCMD",
            "findgrepCMD",
            "directoryCommands",
            "fileCMD",
            "brewCMD",
            "scpcommands",
          ]);

        if (error) {
          console.error("Error fetching command data:", error);
          setCommandsData([]);
        } else {
          // Map the data to ensure it fits the expected structure
          const formattedData: Cheatsheet[] =
            data?.map((item) => ({
              name: item.name,
              datasheet: item.datasheet,
            })) || [];

          setCommandsData(formattedData);
        }
      } catch (err) {
        console.error("Error fetching command data:", err);
        setCommandsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCommandsData();
  }, []);

  if (loading) {
    return <div className="page-wrap">Loading...</div>;
  }

  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">Computer Commands</h1>
      {commandsData.map((commandGroup, index) => (
        <CMDTable
          key={index}
          data={commandGroup.datasheet}
          title={commandGroup.name}
          onSave={handle2TSave}
        />
      ))}
    </div>
  );
};

export default CommandsPage;

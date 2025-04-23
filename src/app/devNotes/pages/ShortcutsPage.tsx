"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import CMDTable from "@/app/DevNotes/components/CMDTable";
import { handle2TSave } from "@/lib/generatePDF";

interface Commands {
  cmd: string;
  desc: string;
}

interface Cheatsheet {
  name: string;
  datasheet: Commands[];
}

const ShortCutsPage = () => {
  const [shortcutsData, setShortcutsData] = useState<Cheatsheet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShortcutsData = async () => {
      try {
        const { data, error } = await supabase
          .from("devnotes")
          .select("name, datasheet") // Fetch both 'name' and 'datasheet'
          .in("name", ["vscodecmd", "vimcommands", "gitCommands", "shortcuts"]);

        if (error) {
          console.error("Error fetching shortcut data:", error);
          setShortcutsData([]);
        } else {
          // Map the response to fit the Cheatsheet interface
          const formattedData: Cheatsheet[] =
            data?.map((item) => ({
              name: item.name,
              datasheet: item.datasheet,
            })) || [];

          setShortcutsData(formattedData);
        }
      } catch (err) {
        console.error("Error fetching shortcut data:", err);
        setShortcutsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchShortcutsData();
  }, []);

  if (loading) {
    return <div className="page-wrap">Loading...</div>;
  }

  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">Computer Shortcuts</h1>
      {shortcutsData.map((shortcutGroup, index) => (
        <CMDTable
          key={index}
          data={shortcutGroup.datasheet}
          title={shortcutGroup.name}
          onSave={handle2TSave}
        />
      ))}
    </div>
  );
};

export default ShortCutsPage;

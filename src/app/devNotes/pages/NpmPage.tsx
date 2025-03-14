"use client";
import NPMTable from "../components/NPMTable";
import npmCommands from "../data/npmCMD";
import { handle2TSave } from "@/app/api/generatePDF";
import PlayButton from "@/components/textToSpeechBtn";

const NpmPage = () => {
  return (
    <div className="page-wrap">
      <span className="blog-title glitter-title">NPM Cheat Sheet</span>
      <PlayButton />
      <NPMTable data={npmCommands} title="NPM Commands" onSave={handle2TSave} />
    </div>
  );
};

export default NpmPage;

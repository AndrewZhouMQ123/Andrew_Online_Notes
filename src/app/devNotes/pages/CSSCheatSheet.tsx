"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import SelectorsTable from "../components/SelectorsTable";
import PropertiesTable from "../components/PropertiesTable";
import DataTable from "../components/dataTable";
import FuncTable from "../components/funcTable";
import AtRuleTable from "../components/AtRuleTable";
import KeyWordTable from "../components/KeyWordTable";
import {
  cssSelectors,
  cssProperties,
  pseudoClasses,
  pseudoElements,
  cssDatatype,
  cssFunctions,
  cssAtRules,
  cssKeywords,
} from "../data/cssdoc";
import { handle2TSave, handle3TSave } from "@/app/api/generatePDF";
import PlayButton from "@/components/textToSpeechBtn";
import SyntaxDiagram from "../components/SyntaxDiagram";
import BoxModelDiagram from "../components/BoxModelDiagram";
import Image from "next/image";

const IntroPage = () => {
  const code = `
    1 body {
    2   font-family: Arial, sans-serif;
    3   background-color: red;
    4   margin: 0;
    5   padding: 0;
    6 }
    7 .center-box{
    8   display: flex;
    9   justify-content: center;
    10  align-items: center;
    11 }
  `;

  return (
    <div className="page-wrap">
      <span className="blog-title glitter-title">CSS Cheat Sheet</span>
      <div className="white-board">
        <PlayButton />
        <p style={{ textTransform: "none", textShadow: "none" }}>
          CSS {"("}Cascading Style Sheets{")"}: A core web language used to
          define the presentation of HTML or XML documents across various media.
          It is standardized by the W3C and now developed modularly, with
          individual CSS modules having version numbers {"("}e.g., CSS Color
          Module Level 5{")"}. Versioning like CSS3 has been replaced by
          periodic W3C snapshots of stable module states.
        </p>
      </div>
      <SyntaxDiagram />
      <div className="white-board">
        <span className="blog-title">Example Code Snippet</span>
        <SyntaxHighlighter
          language="css"
          style={vscDarkPlus}
          customStyle={{ textTransform: "none", textShadow: "none" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="horizontal-wrap">
        <div>
          <span className="blog-title">Box Model</span>
          <BoxModelDiagram />
        </div>
        <div className="flex flex-col w-full">
          <div className="m-2.5">
            <span className="blog-title text-center block">
              Main Axis Column
            </span>
            <Image
              src="/mainaxiscol.png"
              className="w-full"
              width={600}
              height={400}
              alt="html page main axis col"
            />
          </div>
          <div className="m-2.5">
            <span className="blog-title text-center block">Main Axis Row</span>
            <Image
              src="/mainaxisrow.png"
              className="w-full"
              width={600}
              height={400}
              alt="html page main axis row"
            />
          </div>
        </div>
      </div>
      <p className="italic text-right text-sm mt-5">
        Built with <span className="glitter-title">Canvas API</span>
      </p>
    </div>
  );
};

const SelectorsPage = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <SelectorsTable
        data={cssSelectors}
        title="CSS Selectors"
        onSave={handle2TSave}
      />
      <PropertiesTable
        data={cssProperties}
        title="CSS Properties"
        onSave={handle3TSave}
      />
      <SelectorsTable
        data={pseudoClasses}
        title="Pseudo-classes"
        onSave={handle2TSave}
      />
      <SelectorsTable
        data={pseudoElements}
        title="Pseudo-elements"
        onSave={handle2TSave}
      />
    </div>
  );
};

const LogicsPage = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <DataTable
        data={cssDatatype}
        title="CSS Data Types"
        onSave={handle2TSave}
      />
      <FuncTable
        data={cssFunctions}
        title="CSS Functions"
        onSave={handle3TSave}
      />
      <AtRuleTable
        data={cssAtRules}
        title="CSS At-rules"
        onSave={handle2TSave}
      />
      <KeyWordTable
        data={cssKeywords}
        title="CSS Keywords"
        onSave={handle2TSave}
      />
    </div>
  );
};

export default function CSSCore() {
  return (
    <div>
      <IntroPage />
      <SelectorsPage />
      <LogicsPage />
    </div>
  );
}

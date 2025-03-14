"use client";
import Section from "../components/Section";
import { javascriptCheatSheetData } from "../data/CheatJS";
import PlayButton from "@/components/textToSpeechBtn";
import CodeBlock from "../components/CodeBlock";
import GPropTable from "../components/PropTable";
import PrimitivesTable from "../components/PrimitivesTable";
import GmethodTable from "../components/MethodTable";
import GobjectTable from "../components/ObjectTable";
import APITable from "../components/APITables";
import {
  globalProperties,
  primitiveDataTypes,
  builtInFunctions,
  builtInObjects,
  domBomAPI,
} from "../data/dataJS";
import { handle2TSave, handle3TSave } from "@/app/api/generatePDF";

export default function JSCore() {
  const legacyMethods = [
    'document.createElement("<html_element>");',
    'document.documentElement.setAttribute("attr", "value");',
    '<html_element>.getElementById("id");',
    '<html_element>.getElementsByTagName("tag");',
    '<html_element>.querySelector("#classname");',
    "<parent_element>.appendChild(<child_element>);",
    "Object.hasOwn(<html_element>, match);",
    'window.location.replace("filename.html");',
    '<link rel="stylesheet" href="filepath_to_css">;',
  ];
  const legacySnippets = [
    "const dataArray = [];",
    'const headerArray = ["header1", "header2"];',
    'const page = document.querySelector("#classname") as HTMLDivElement;',
    'const table = page.querySelector("table") as HTMLTableElement;',
    'const thead = table.querySelector("thead") as HTMLTableSectionElement;',
    'const tbody = table.querySelector("tbody") as HTMLTableSectionElement;',
    'const cap = document.createElement("caption") as HTMLTableCaptionElement;',
    'cap.innerHTML = "captions";',
    "table.appendChild(cap);",
    'const trow = document.createElement("tr") as HTMLTableRowElement;',
    "thead.appendChild(trow);",
    "for (let str of headerArray) {",
    '  const head = document.createElement("th");',
    "  head.innerHTML = str;",
    "  trow.appendChild(head);",
    "}",
  ];
  const falsyValues = [
    "false",
    "0",
    "-0",
    "0n",
    '""',
    "''",
    "``",
    "null",
    "undefined",
    "NaN",
  ];

  const truthyValues = [
    "true",
    "any number other than 0",
    "any non-empty string",
    "Infinity",
    "-Infinity",
    "Symbol",
    "BigInt",
    "objects",
  ];
  return (
    <div>
      <div className="page-wrap">
        <span className="blog-title glitter-title">JavaScript Cheat Sheet</span>
        <PlayButton />
        <ul className="white-board">
          <span>Falsy Values</span>
          <CodeBlock code={falsyValues.join("\n")} />
          <span>Truthy Values</span>
          <CodeBlock code={truthyValues.join("\n")} />
          {javascriptCheatSheetData.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
          <span>
            General Idea of Legacy Code I used before switching to NextJS
          </span>
          <CodeBlock code={legacyMethods.join("\n")} />
          <CodeBlock code={legacySnippets.join("\n")} />
        </ul>

        <GPropTable
          data={globalProperties}
          title="Global Properties"
          onSave={handle2TSave}
        />
        <PrimitivesTable
          data={primitiveDataTypes}
          title="Primitives"
          onSave={handle3TSave}
        />
        <GmethodTable
          data={builtInFunctions}
          title="Built In Functions"
          onSave={handle2TSave}
        />
        <GobjectTable
          data={builtInObjects}
          title="Built In Objects"
          onSave={handle2TSave}
        />
        <APITable data={domBomAPI} title="DOM APIs" onSave={handle3TSave} />
      </div>
    </div>
  );
}

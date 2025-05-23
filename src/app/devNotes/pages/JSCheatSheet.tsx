"use client";
import Section from "../components/Section";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import { javascriptCheatSheetData } from "../components/CheatJS";
import CodeBlock from "../components/CodeBlock";
import GPropTable from "../components/PropTable";
import PrimitivesTable from "../components/PrimitivesTable";
import GmethodTable from "../components/MethodTable";
import GobjectTable from "../components/ObjectTable";
import APITable from "../components/APITables";
import { handle2TSave, handle3TSave } from "@/lib/generatePDF";
import Link from "next/link";
import buttonStyles from "@/app/ui/buttons.module.css";

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
        <span>Example of Legacy Code I used before switching to NextJS</span>
        <CodeBlock code={legacyMethods.join("\n")} />
        <CodeBlock code={legacySnippets.join("\n")} />

        <p>Here are some useful links.</p>
        <div>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            MDN Web Docs JavaScript
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://javascript.info/"
          >
            Modern JavaScript Tutorial
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://www.w3schools.com/js/"
          >
            W3Schools JavaScript Tutorial
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://react.dev/"
          >
            React
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://legacy.reactjs.org/"
          >
            Old React
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://babeljs.io/"
          >
            Babel JS
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://webpack.js.org/"
          >
            Webpack JS
          </Link>
        </div>
        <div>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://nodejs.org/en"
          >
            Node JS
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://v8.dev/"
          >
            V8 Engine
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection"
          >
            Tour of V8
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://survivejs.com/"
          >
            Survive JS
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://notifications.spec.whatwg.org/"
          >
            WHATWG Notify
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://storage.spec.whatwg.org/"
          >
            WHATWG Storage
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://console.spec.whatwg.org/"
          >
            WHATWG Console
          </Link>
          <Link
            className={buttonStyles.link + " " + buttonStyles.wideBtn}
            href="https://fs.spec.whatwg.org/"
          >
            WHATWG File System
          </Link>
        </div>
      </div>
      <Tables />
    </div>
  );
}

interface GlobalPropertyItem {
  prop: string;
  desc: string;
}

interface PrimitiveDataTypeItem {
  identifier: string;
  literal: string;
  description: string;
}

interface BuiltInFunctionItem {
  method: string;
  desc: string;
}
interface BuiltInObjectItem {
  object: string;
  methodsValues: string;
}

interface DomBomAPIItem {
  interface: string;
  description: string;
  methods_properties: string;
}

const Tables = () => {
  const [globalProperties, setGlobalProperties] = useState<
    GlobalPropertyItem[]
  >([]);
  const [primitiveDataTypes, setPrimitiveDataTypes] = useState<
    PrimitiveDataTypeItem[]
  >([]);
  const [builtInFunctions, setBuiltInFunctions] = useState<
    BuiltInFunctionItem[]
  >([]);
  const [builtInObjects, setBuiltInObjects] = useState<BuiltInObjectItem[]>([]);
  const [domBomAPI, setDomBomAPI] = useState<DomBomAPIItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: globalPropsData, error: globalPropsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "globalProperties")
            .single();
        const { data: primitivesData, error: primitivesError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "primitiveDataTypes")
          .single();
        const { data: builtInFuncsData, error: builtInFuncsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "builtInFunctions")
            .single();
        const { data: builtInObjsData, error: builtInObjsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "builtInObjects")
            .single();
        const { data: domBomAPIData, error: domBomAPIError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "domBomAPI")
          .single();

        // Error handling
        if (
          globalPropsError ||
          primitivesError ||
          builtInFuncsError ||
          builtInObjsError ||
          domBomAPIError
        ) {
          console.error(
            "Error fetching data:",
            globalPropsError ||
              primitivesError ||
              builtInFuncsError ||
              builtInObjsError ||
              domBomAPIError
          );
          setGlobalProperties([]);
          setPrimitiveDataTypes([]);
          setBuiltInFunctions([]);
          setBuiltInObjects([]);
          setDomBomAPI([]);
        } else {
          // Set fetched data into state
          setGlobalProperties(globalPropsData?.datasheet || []);
          setPrimitiveDataTypes(primitivesData?.datasheet || []);
          setBuiltInFunctions(builtInFuncsData?.datasheet || []);
          setBuiltInObjects(builtInObjsData?.datasheet || []);
          setDomBomAPI(domBomAPIData?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setGlobalProperties([]);
        setPrimitiveDataTypes([]);
        setBuiltInFunctions([]);
        setBuiltInObjects([]);
        setDomBomAPI([]);
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
  );
};

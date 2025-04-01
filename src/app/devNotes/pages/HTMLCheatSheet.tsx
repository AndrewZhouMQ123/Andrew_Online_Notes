"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import HTMLelTable from "../components/HTMLelTable";
import HTMLEntitesTable from "../components/HTMLEntitiesTable";
import {
  AdditionalAttributesSection,
  EventHandlerAttributesSection,
} from "../components/Extras";
import HTMLGlobalsTable from "../components/HTMLGlobalsTable";
import { handle2TSave, handle3TSave } from "@/app/api/generatePDF";
import SyntaxHighlighter from "react-syntax-highlighter";

// Type definitions for the data structure
interface ElementItem {
  element: string;
  attributes: string;
  desc: string;
}

interface HTMLGlobalAttributeItem {
  attribute: string;
  desc: string;
}

interface HTMLEntityItem {
  entity: string;
  unicode: string;
  htmlCode: string;
}

const ElPage = () => {
  const [metadata, setMetadata] = useState<ElementItem[]>([]);
  const [sectionHeadings, setSectionHeadings] = useState<ElementItem[]>([]);
  const [inlines, setInlines] = useState<ElementItem[]>([]);
  const [formElements, setFormElements] = useState<ElementItem[]>([]);
  const [mediaElements, setMediaElements] = useState<ElementItem[]>([]);
  const [tableElements, setTableElements] = useState<ElementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: metadataData, error: metadataError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "metadata")
          .single();
        const { data: sectionHeadingsData, error: sectionHeadingsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "sectionheadings")
            .single();
        const { data: inlinesData, error: inlinesError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "inlines")
          .single();
        const { data: formElementsData, error: formElementsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "formElements")
            .single();
        const { data: mediaElementsData, error: mediaElementsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "mediaElements")
            .single();
        const { data: tableElementsData, error: tableElementsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "tableElements")
            .single();

        // Error handling for each fetch
        if (
          metadataError ||
          sectionHeadingsError ||
          inlinesError ||
          formElementsError ||
          mediaElementsError ||
          tableElementsError
        ) {
          console.error(
            "Error fetching data:",
            metadataError ||
              sectionHeadingsError ||
              inlinesError ||
              formElementsError ||
              mediaElementsError ||
              tableElementsError
          );
          setMetadata([]);
          setSectionHeadings([]);
          setInlines([]);
          setFormElements([]);
          setMediaElements([]);
          setTableElements([]);
        } else {
          // Set fetched data into state
          setMetadata(metadataData?.datasheet || []);
          setSectionHeadings(sectionHeadingsData?.datasheet || []);
          setInlines(inlinesData?.datasheet || []);
          setFormElements(formElementsData?.datasheet || []);
          setMediaElements(mediaElementsData?.datasheet || []);
          setTableElements(tableElementsData?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setMetadata([]);
        setSectionHeadings([]);
        setInlines([]);
        setFormElements([]);
        setMediaElements([]);
        setTableElements([]);
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
      <HTMLelTable
        data={metadata}
        title="HTML Metadata"
        onSave={handle3TSave}
      />
      <HTMLelTable
        data={sectionHeadings}
        title="HTML Section Headings"
        onSave={handle3TSave}
      />
      <HTMLelTable data={inlines} title="HTML Inlines" onSave={handle3TSave} />
      <HTMLelTable
        data={formElements}
        title="HTML Form Elements"
        onSave={handle3TSave}
      />
      <HTMLelTable
        data={mediaElements}
        title="HTML Media Elements"
        onSave={handle3TSave}
      />
      <HTMLelTable
        data={tableElements}
        title="HTML Table Elements"
        onSave={handle3TSave}
      />
    </div>
  );
};

// GlobalsPage Component
const GlobalsPage = () => {
  const [htmlEntities, setHtmlEntities] = useState<HTMLEntityItem[]>([]);
  const [globalAttributes, setGlobalAttributes] = useState<
    HTMLGlobalAttributeItem[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data for globals
        const { data: htmlEntitiesData, error: htmlEntitiesError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "htmlEntities")
            .single();
        const { data: globalAttributesData, error: globalAttributesError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "globalAttributes")
            .single();

        if (htmlEntitiesError || globalAttributesError) {
          console.error(
            "Error fetching data:",
            htmlEntitiesError || globalAttributesError
          );
          setHtmlEntities([]);
          setGlobalAttributes([]);
        } else {
          setHtmlEntities(htmlEntitiesData?.datasheet || []);
          setGlobalAttributes(globalAttributesData?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setHtmlEntities([]);
        setGlobalAttributes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-wrap">
      <HTMLEntitesTable
        data={htmlEntities}
        title="HTML Entities"
        onSave={handle3TSave}
      />
      <HTMLGlobalsTable
        data={globalAttributes}
        title="HTML Global Attributes"
        onSave={handle2TSave}
      />
    </div>
  );
};

const AttriPage = () => {
  return (
    <div className="page-wrap">
      <AdditionalAttributesSection />
      <EventHandlerAttributesSection />
    </div>
  );
};

const IntroPage = () => {
  const code = `
    1 <div>
    2   <h1>Title</h1>
    3   <p>This is a paragraph inside a div.</p>
    4 </div>
  `;

  return (
    <div className="page-wrap">
      <span className="blog-title glitter-title">HTML Cheat Sheet</span>
      <div className="white-board">
        <p style={{ textTransform: "none", textShadow: "none" }}>
          HTML (HyperText Markup Language) is the most basic building block of
          the Web. It defines the meaning and structure of web content.
          &quot;Hypertext&quot; refers to links that connect web pages to one
          another, either within a single website or between websites.
        </p>
      </div>

      <div className="white-board">
        <h2>HTML Syntax</h2>
        <ul>
          <li>
            <SyntaxHighlighter
              language="html"
              customStyle={{ textShadow: "none" }}
            >
              {`<!DOCTYPE html>`}
            </SyntaxHighlighter>
            at the top level declares the document type and version of HTML.
          </li>
          <li>
            Space and indentation in code are ignored in HTML. They only affect
            readability.
          </li>
          <li>
            HTML elements are the building blocks of HTML. Each element begins
            with an opening tag and ends with a closing tag
          </li>
          <li>
            Void elements have self-enclosing tags (no closing tag) and no
            content.
            <SyntaxHighlighter
              language="html"
              customStyle={{ textTransform: "none", textShadow: "none" }}
            >
              {`<img src="image.jpg" alt="Description">`}
            </SyntaxHighlighter>
          </li>
          <li>
            The head section is for code that will not be displayed in the
            browser.
          </li>
          <li>
            The body section is for code that will be rendered as content in the
            browser.
          </li>
          <li>
            HTML enables elements to be nested within other elements.
            <SyntaxHighlighter
              language="html"
              customStyle={{ textTransform: "none", textShadow: "none" }}
            >
              {code}
            </SyntaxHighlighter>
          </li>
          <li>
            Comments are written like this:
            <SyntaxHighlighter
              language="html"
              customStyle={{ textTransform: "none", textShadow: "none" }}
            >
              {`<!-- This is a comment -->`}
            </SyntaxHighlighter>
          </li>
          <li>
            JavaScript scripts are preferably imported at the end of the body so
            that HTML is rendered first. Otherwise, loading scripts could delay
            HTML content, and the web page may appear disoriented.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function HTMLCore() {
  return (
    <div>
      <IntroPage />
      <ElPage />
      <GlobalsPage />
      <AttriPage />
    </div>
  );
}

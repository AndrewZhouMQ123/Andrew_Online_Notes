"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";
import SelectorsTable from "../components/SelectorsTable";
import PropertiesTable from "../components/PropertiesTable";
import DataTable from "../components/dataTable";
import FuncTable from "../components/funcTable";
import AtRuleTable from "../components/AtRuleTable";
import KeyWordTable from "../components/KeyWordTable";
import { handle2TSave, handle3TSave } from "@/lib/generatePDF";
import Link from "next/link";
import buttonStyles from "@/app/ui/buttons.module.css";

// Type definitions for the data structure
interface CssSelectorItem {
  selector: string;
  desc: string;
}

interface CssPropertiesItem {
  prop: string;
  desc: string;
  val: string;
}

interface CssDataTypeItem {
  datatype: string;
  def: string;
}

interface CssFunctionItem {
  func: string;
  desc: string;
  params: string;
}

interface CssAtRuleItem {
  atRule: string;
  desc: string;
}

interface CssKeywordItem {
  keyword: string;
  desc: string;
}

// SelectorsPage Component
const SelectorsPage = () => {
  const [cssSelectors, setCssSelectors] = useState<CssSelectorItem[]>([]);
  const [cssProperties, setCssProperties] = useState<CssPropertiesItem[]>([]);
  const [pseudoClasses, setPseudoClasses] = useState<CssSelectorItem[]>([]);
  const [pseudoElements, setPseudoElements] = useState<CssSelectorItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data for CSS Selectors, Properties, Pseudo-classes, and Pseudo-elements
        const { data: selectorsData, error: selectorsError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "cssSelectors")
          .single();
        const { data: propertiesData, error: propertiesError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "cssProperties")
          .single();
        const { data: pseudoClassesData, error: pseudoClassesError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "pseudoClasses")
            .single();
        const { data: pseudoElementsData, error: pseudoElementsError } =
          await supabase
            .from("devnotes")
            .select("datasheet")
            .eq("name", "pseudoElements")
            .single();

        // Error handling
        if (
          selectorsError ||
          propertiesError ||
          pseudoClassesError ||
          pseudoElementsError
        ) {
          console.error(
            "Error fetching data:",
            selectorsError ||
              propertiesError ||
              pseudoClassesError ||
              pseudoElementsError
          );
          setCssSelectors([]);
          setCssProperties([]);
          setPseudoClasses([]);
          setPseudoElements([]);
        } else {
          // Set fetched data into state
          setCssSelectors(selectorsData?.datasheet || []);
          setCssProperties(propertiesData?.datasheet || []);
          setPseudoClasses(pseudoClassesData?.datasheet || []);
          setPseudoElements(pseudoElementsData?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setCssSelectors([]);
        setCssProperties([]);
        setPseudoClasses([]);
        setPseudoElements([]);
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

// LogicsPage Component
const LogicsPage = () => {
  const [cssDatatype, setCssDatatype] = useState<CssDataTypeItem[]>([]);
  const [cssFunctions, setCssFunctions] = useState<CssFunctionItem[]>([]);
  const [cssAtRules, setCssAtRules] = useState<CssAtRuleItem[]>([]);
  const [cssKeywords, setCssKeywords] = useState<CssKeywordItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data for CSS Data Types, Functions, At-rules, and Keywords
        const { data: datatypeData, error: datatypeError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "cssDatatype")
          .single();
        const { data: functionsData, error: functionsError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "cssFunctions")
          .single();
        const { data: atRulesData, error: atRulesError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "cssAtRules")
          .single();
        const { data: keywordsData, error: keywordsError } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "cssKeywords")
          .single();

        // Error handling
        if (datatypeError || functionsError || atRulesError || keywordsError) {
          console.error(
            "Error fetching data:",
            datatypeError || functionsError || atRulesError || keywordsError
          );
          setCssDatatype([]);
          setCssFunctions([]);
          setCssAtRules([]);
          setCssKeywords([]);
        } else {
          // Set fetched data into state
          setCssDatatype(datatypeData?.datasheet || []);
          setCssFunctions(functionsData?.datasheet || []);
          setCssAtRules(atRulesData?.datasheet || []);
          setCssKeywords(keywordsData?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setCssDatatype([]);
        setCssFunctions([]);
        setCssAtRules([]);
        setCssKeywords([]);
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

const IntroPage = () => {
  return (
    <div className="page-wrap">
      <span className="blog-title glitter-title">CSS Cheat Sheet</span>
      <p style={{ textTransform: "none", textShadow: "none" }}>
        CSS {"("}Cascading Style Sheets{")"}: A core web language used to define
        the presentation of HTML or XML documents across various media. It is
        standardized by the W3C and now developed modularly, with individual CSS
        modules having version numbers {"("}e.g., CSS Color Module Level 5{")"}.
        Versioning like CSS3 has been replaced by periodic W3C snapshots of
        stable module states.
      </p>
      <p>Here are some useful links.</p>
      <div>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://css-tricks.com/"
        >
          CSS Tricks
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          MDN Web Docs CSS
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://www.w3schools.com/css/"
        >
          W3Schools CSS
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://getbootstrap.com/"
        >
          Bootstrap
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://quirks.spec.whatwg.org/"
        >
          WHATWG Quirks
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://compat.spec.whatwg.org/"
        >
          WHATWG Compat
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://www.rapidtables.com/web/color/RGB_Color.html"
        >
          rgb colors
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://hslpicker.com/#000dff"
        >
          hsl colors
        </Link>
        <Link
          className={buttonStyles.link + " " + buttonStyles.wideBtn}
          href="https://lch.oklch.com/"
        >
          lch colors
        </Link>
      </div>
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

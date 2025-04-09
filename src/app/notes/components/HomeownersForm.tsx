"use client";
import { useState, useEffect, useMemo } from "react";
import buttonStyles from "@/app/ui/buttons.module.css";

interface InsuranceTerms {
  term: string;
  def: string | string[];
}

interface CoverageItem {
  name: string;
  def: string;
  items: InsuranceTerms[];
}

interface HomeownersFormSection {
  name: string;
  coverages: CoverageItem[] | InsuranceTerms[];
}

interface HomeownersForm {
  name: string;
  coverages: string[] | InsuranceTerms[];
  exclusions: string[] | InsuranceTerms[];
}

interface HomeResponse {
  datasheet: HomeownersFormSection[];
}

interface FormResponse {
  datasheet: HomeownersForm[];
}

const MAX_HOME_RETRIES = 3;
const HOME_RETRY_DELAY = 1000;

export default function HomeownersViewer() {
  const [homeItems, setHomeItems] = useState<HomeownersFormSection[]>([]);
  const [formItems, setFormItems] = useState<HomeownersForm[]>([]);
  const [activeHome, setActiveHome] = useState<number>(0);
  const [activeForm, setActiveForm] = useState<number>(0);
  const [isHomeLoading, setIsHomeLoading] = useState<boolean>(false);
  const [homeError, setHomeError] = useState<string | null>(null);
  const [homeRetryCount, setHomeRetryCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const fetchCategories = async () => {
      try {
        if (isMounted) {
          setIsHomeLoading(true);
          setHomeError(null);
        }

        const homeResponse = await fetch(
          `/api/notes?name=HomeownersFormElements`
        );
        const formResponse = await fetch(`/api/notes?name=HomeownersForms`);

        if (!homeResponse.ok || !formResponse.ok) {
          throw new Error(
            `Failed to fetch: ${homeResponse.status} ${formResponse.status}`
          );
        }

        const homeData: HomeResponse = await homeResponse.json();
        const formData: FormResponse = await formResponse.json();

        console.log("Fetched Home Data: ", homeData);
        console.log("Fetched Form Data: ", formData);

        if (!homeData?.datasheet?.length || !formData?.datasheet?.length) {
          throw new Error("No data available");
        }

        if (isMounted) {
          setHomeItems(homeData.datasheet);
          setFormItems(formData.datasheet);
          setHomeRetryCount(0);
        }
      } catch (err) {
        if (isMounted && homeRetryCount < MAX_HOME_RETRIES) {
          timeoutId = setTimeout(() => {
            setHomeRetryCount((prev) => prev + 1);
          }, HOME_RETRY_DELAY);
        } else if (isMounted) {
          setHomeError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        if (isMounted) {
          setIsHomeLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [homeRetryCount]);

  const handleHomeChange = (homeIndex: number) => {
    setActiveHome(homeIndex);
  };

  const handleFormChange = (formIndex: number) => {
    setActiveForm(formIndex);
  };

  const handleRetry = () => {
    setHomeRetryCount(0);
  };

  const currentHome = useMemo(() => {
    return homeItems[activeHome] || null;
  }, [homeItems, activeHome]);

  const currentForm = useMemo(() => {
    return formItems[activeForm] || null;
  }, [formItems, activeForm]);

  if (isHomeLoading && !homeItems.length) {
    return (
      <div>
        <div className="loading-spinner"></div>
        <p className="blog-description">Loading insurance data...</p>
        {homeRetryCount > 0 && (
          <p>
            Attempt {homeRetryCount} of {MAX_HOME_RETRIES}
          </p>
        )}
      </div>
    );
  }

  if (homeError) {
    return (
      <div style={{ margin: "10px", padding: "10px" }}>
        <p className="blog-description">Error: {homeError}</p>
        <button
          onClick={handleRetry}
          className={buttonStyles.wideBtn + " " + buttonStyles.warning}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!homeItems.length) {
    return <div className="blog-description">No insurance data available</div>;
  }

  return (
    <div className="page-wrap">
      <div className="content-layout">
        <aside className="sidebar">
          {homeItems.map((home, homeIndex) => (
            <section key={home.name}>
              <h3
                onClick={() => handleHomeChange(homeIndex)}
                className={activeHome === homeIndex ? "active" : ""}
              >
                {home.name}
              </h3>
            </section>
          ))}
        </aside>

        <main className="content">
          {currentHome && (
            <>
              <h2 className="topic-subtitle">{currentHome.name}</h2>
              {currentHome.coverages.map((term, termIndex) => (
                <CoverageSection key={termIndex} term={term} />
              ))}
            </>
          )}
        </main>
      </div>

      <div className="content-layout">
        <aside className="sidebar">
          {formItems.map((form, formIndex) => (
            <section key={form.name}>
              <h3
                onClick={() => handleFormChange(formIndex)}
                className={activeForm === formIndex ? "active" : ""}
              >
                {form.name}
              </h3>
            </section>
          ))}
        </aside>

        <main className="content">
          {currentForm && (
            <>
              <h2 className="topic-subtitle">{currentForm.name}</h2>
              {currentForm.coverages.map((term, termIndex) => (
                <CoverageSection key={termIndex} term={term} />
              ))}
              {currentForm.exclusions.map((term, termIndex) => (
                <CoverageSection key={termIndex} term={term} />
              ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

interface CoverageSectionProps {
  term: string | InsuranceTerms | CoverageItem;
}

const CoverageSection = ({ term }: CoverageSectionProps) => {
  if (typeof term === "string") {
    return (
      <article className="section-content">
        <span className="def-text">{term}</span>
      </article>
    );
  }

  if ("name" in term && Array.isArray(term.items)) {
    return (
      <article className="section-content">
        <h3>{term.name}</h3>
        <span className="def-text">{term.def}</span>
        {term.items.map((insuranceTerm, itemIndex) => (
          <div key={itemIndex}>
            <span className="name-text">{insuranceTerm.term}: </span>
            {Array.isArray(insuranceTerm.def) ? (
              <ul>
                {insuranceTerm.def.map((def, defIndex) => (
                  <li className="def-text" key={defIndex}>
                    {def}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{insuranceTerm.def}</p>
            )}
          </div>
        ))}
      </article>
    );
  }

  if (
    "term" in term &&
    typeof term.term === "string" &&
    (typeof term.def === "string" || Array.isArray(term.def))
  ) {
    return (
      <article className="section-content">
        <span className="name-text">{term.term}: </span>
        {Array.isArray(term.def) ? (
          <ul>
            {term.def.map((def, defIndex) => (
              <li className="def-text" key={defIndex}>
                {def}
              </li>
            ))}
          </ul>
        ) : (
          <p className="def-text">{term.def}</p>
        )}
      </article>
    );
  }
};

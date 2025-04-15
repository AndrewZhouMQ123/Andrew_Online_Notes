"use client";
import { useState, useEffect, useMemo } from "react";
import buttonStyles from "@/app/ui/buttons.module.css";

interface InsuranceActItem {
  name: string;
  def: string | string[];
}

interface ContextSection {
  section: string;
  items: InsuranceActItem[];
}

interface InsuranceActTopic {
  name: string;
  description: string;
  context: ContextSection[];
}

interface DatasheetResponse {
  datasheet: InsuranceActTopic[];
}

const IA_MAX_RETRIES = 3;
const IA_RETRY_DELAY = 1000;

export default function InsuranceActViewer() {
  const [insuranceAct, setInsuranceAct] = useState<InsuranceActTopic[]>([]);
  const [activeTopic, setActiveTopic] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isIALoading, setIsIALoading] = useState<boolean>(false);
  const [IAerror, setIAError] = useState<string | null>(null);
  const [IAretryCount, setIARetryCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const fetchInsuranceAct = async () => {
      try {
        if (isMounted) {
          setIsIALoading(true);
          setIAError(null);
        }

        const IAresponse = await fetch(`/api/notes?name=InsuranceAct`);
        if (!IAresponse.ok) {
          throw new Error(`Failed to fetch: ${IAresponse.status}`);
        }

        const IAdata: DatasheetResponse = await IAresponse.json();

        console.log("Fetched Insurance Act Data: ", IAdata);

        if (!IAdata?.datasheet?.length) {
          throw new Error("No data available");
        }

        if (isMounted) {
          setInsuranceAct(IAdata.datasheet);
          setIARetryCount(0);
        }
      } catch (err) {
        if (isMounted && IAretryCount < IA_MAX_RETRIES) {
          timeoutId = setTimeout(() => {
            setIARetryCount((prev) => prev + 1);
          }, IA_RETRY_DELAY);
        } else if (isMounted) {
          setIAError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        if (isMounted) {
          setIsIALoading(false);
        }
      }
    };

    fetchInsuranceAct();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [IAretryCount]); // Only retryCount as dependency

  const handleTopicChange = (topicIndex: number) => {
    setActiveTopic(topicIndex);
    setActiveSection(0);
  };

  const handleSectionChange = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
  };

  const handleRetry = () => {
    setIARetryCount(0); // Reset retry count for manual retry
  };

  const currentTopic = useMemo(() => {
    return insuranceAct[activeTopic] || null;
  }, [insuranceAct, activeTopic]);

  const currentSection = useMemo(() => {
    return currentTopic?.context[activeSection] || null;
  }, [currentTopic, activeSection]);

  if (isIALoading && !insuranceAct.length) {
    return (
      <div>
        <div className="loading-spinner"></div>
        <p className="blog-description">Loading insurance data...</p>
        {IAretryCount > 0 && (
          <p>
            Attempt {IAretryCount} of {IA_MAX_RETRIES}
          </p>
        )}
      </div>
    );
  }

  if (IAerror) {
    return (
      <div style={{ margin: "10px", padding: "10px" }}>
        <p className="blog-description">Error: {IAerror}</p>
        <button
          onClick={handleRetry}
          className={buttonStyles.wideBtn + " " + buttonStyles.warning}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!insuranceAct.length) {
    return <div className="blog-description">No insurance data available</div>;
  }

  return (
    <div className="page-wrap">
      <h1 className="blog-title">Insurance Act</h1>
      <p>
        The main piece of legislation governing insurance here in Canada. Each
        province has their own version.
      </p>
      <div className="content-layout">
        <aside className="sidebar">
          {insuranceAct.map((topic, topicIndex) => (
            <section key={topic.name}>
              <h3
                onClick={() => handleTopicChange(topicIndex)}
                className={activeTopic === topicIndex ? "active" : ""}
              >
                {topic.name}
              </h3>
              {activeTopic === topicIndex && (
                <nav className="sections">
                  {topic.context.map((section, sectionIndex) => (
                    <div
                      key={section.section}
                      onClick={() => handleSectionChange(sectionIndex)}
                      className={activeSection === sectionIndex ? "active" : ""}
                    >
                      {section.section}
                    </div>
                  ))}
                </nav>
              )}
            </section>
          ))}
        </aside>

        <main className="content">
          {currentTopic && (
            <>
              <h2 className="topic-subtitle">{currentTopic.name}</h2>
              <p className="topic-description">{currentTopic.description}</p>
            </>
          )}

          {currentSection && (
            <article className="section-content">
              <h3>{currentSection.section}</h3>
              <ul>
                {currentSection.items.map((item) => (
                  <li key={item.name}>
                    <span className="name-text">{item.name}: </span>
                    {Array.isArray(item.def) ? (
                      <ul>
                        {item.def.map((point, j) => (
                          <li className="def-text" key={j}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="def-text"> {item.def}</span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          )}
        </main>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect, useMemo } from "react";
import buttonStyles from "@/app/ui/buttons.module.css";

interface HabItem {
  name: string;
  def: string;
  coverage: string | string[];
}

interface DatasheetResponse {
  datasheet: HabItem[];
}

const MAX_HAB_RETRIES = 3;
const HAB_RETRY_DELAY = 1000;

export default function HabViewer() {
  const [habItems, setHabItems] = useState<HabItem[]>([]);
  const [activeHab, setActiveHab] = useState<number>(0);
  const [isHabLoading, setIsHabLoading] = useState<boolean>(false);
  const [habError, setHabError] = useState<string | null>(null);
  const [habRetryCount, setHabRetryCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const fetchCategories = async () => {
      try {
        if (isMounted) {
          setIsHabLoading(true);
          setHabError(null);
        }

        const HabResponse = await fetch(`/api/notes?name=OtherHabitationForms`);
        if (!HabResponse.ok) {
          throw new Error(`Failed to fetch: ${HabResponse.status}`);
        }

        const habData: DatasheetResponse = await HabResponse.json();

        console.log("Fetched OtherHabitationForms Data: ", habData);

        if (!habData?.datasheet?.length) {
          throw new Error("No data available");
        }

        if (isMounted) {
          setHabItems(habData.datasheet);
          setHabRetryCount(0);
        }
      } catch (err) {
        if (isMounted && habRetryCount < MAX_HAB_RETRIES) {
          timeoutId = setTimeout(() => {
            setHabRetryCount((prev) => prev + 1);
          }, HAB_RETRY_DELAY);
        } else if (isMounted) {
          setHabError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        if (isMounted) {
          setIsHabLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [habRetryCount]);

  const handleHabChange = (habIndex: number) => {
    setActiveHab(habIndex);
  };

  const handleRetry = () => {
    setHabRetryCount(0);
  };

  const currentHab = useMemo(() => {
    return habItems[activeHab] || null;
  }, [habItems, activeHab]);

  if (isHabLoading && !habItems.length) {
    return (
      <div>
        <div className="loading-spinner"></div>
        <p className="blog-description">Loading insurance data...</p>
        {habRetryCount > 0 && (
          <p>
            Attempt {habRetryCount} of {MAX_HAB_RETRIES}
          </p>
        )}
      </div>
    );
  }

  if (habError) {
    return (
      <div style={{ margin: "10px", padding: "10px" }}>
        <p className="blog-description">Error: {habError}</p>
        <button
          onClick={handleRetry}
          className={buttonStyles.wideBtn + " " + buttonStyles.warning}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!habItems.length) {
    return <div className="blog-description">No insurance data available</div>;
  }

  return (
    <div className="page-wrap">
      <div className="content-layout">
        <aside className="sidebar">
          {habItems.map((habItem, habIndex) => (
            <section key={habItem.name}>
              <h3
                onClick={() => handleHabChange(habIndex)}
                className={activeHab === habIndex ? "active" : ""}
              >
                {habItem.name}
              </h3>
            </section>
          ))}
        </aside>

        <main className="content">
          {currentHab && (
            <>
              <h2 className="topic-subtitle">{currentHab.name}</h2>
              <h3 className="name-text">{currentHab.def}</h3>
            </>
          )}
          <article className="section-content">
            {Array.isArray(currentHab.coverage) ? (
              <ul>
                {currentHab.coverage.map((item, index) => (
                  <li className="def-text" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="def-text">{currentHab.coverage}</p>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}

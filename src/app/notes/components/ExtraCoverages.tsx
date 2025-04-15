"use client";
import { useState, useEffect, useMemo } from "react";
import buttonStyles from "@/app/ui/buttons.module.css";

interface CoverageItem {
  name: string;
  def: string;
  items: string[];
}

interface DatasheetResponse {
  datasheet: CoverageItem[];
}

const MAX_COV_RETRIES = 3;
const COV_RETRY_DELAY = 1000;

export default function ExtraCoverages() {
  const [coverageItems, setCoverageItems] = useState<CoverageItem[]>([]);
  const [activeCov, setActiveCov] = useState<number>(0);
  const [isCovLoading, setIsCovLoading] = useState<boolean>(false);
  const [covError, setCovError] = useState<string | null>(null);
  const [covRetryCount, setCovRetryCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const fetchCategories = async () => {
      try {
        if (isMounted) {
          setIsCovLoading(true);
          setCovError(null);
        }

        const CovResponse = await fetch(`/api/notes?name=ExtraCoverage`);
        if (!CovResponse.ok) {
          throw new Error(`Failed to fetch: ${CovResponse.status}`);
        }

        const covData: DatasheetResponse = await CovResponse.json();

        console.log("Fetched OtherHabitationForms Data: ", covData);

        if (!covData?.datasheet?.length) {
          throw new Error("No data available");
        }

        if (isMounted) {
          setCoverageItems(covData.datasheet);
          setCovRetryCount(0);
        }
      } catch (err) {
        if (isMounted && covRetryCount < MAX_COV_RETRIES) {
          timeoutId = setTimeout(() => {
            setCovRetryCount((prev) => prev + 1);
          }, COV_RETRY_DELAY);
        } else if (isMounted) {
          setCovError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        if (isMounted) {
          setIsCovLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [covRetryCount]);

  const handleCovChange = (covIndex: number) => {
    setActiveCov(covIndex);
  };

  const handleRetry = () => {
    setCovRetryCount(0);
  };

  const currentCov = useMemo(() => {
    return coverageItems[activeCov] || null;
  }, [coverageItems, activeCov]);

  if (isCovLoading && !coverageItems.length) {
    return (
      <div>
        <div className="loading-spinner"></div>
        <p className="blog-description">Loading insurance data...</p>
        {covRetryCount > 0 && (
          <p>
            Attempt {covRetryCount} of {MAX_COV_RETRIES}
          </p>
        )}
      </div>
    );
  }

  if (covError) {
    return (
      <div style={{ margin: "10px", padding: "10px" }}>
        <p className="blog-description">Error: {covError}</p>
        <button
          onClick={handleRetry}
          className={buttonStyles.wideBtn + " " + buttonStyles.warning}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!coverageItems.length) {
    return <div className="blog-description">No insurance data available</div>;
  }

  return (
    <div className="page-wrap">
      <div className="content-layout">
        <aside className="sidebar">
          {coverageItems.map((covItem, covIndex) => (
            <section key={covItem.name}>
              <h3
                onClick={() => handleCovChange(covIndex)}
                className={activeCov === covIndex ? "active" : ""}
              >
                {covItem.name}
              </h3>
            </section>
          ))}
        </aside>

        <main className="content">
          {currentCov && (
            <>
              <h2 className="topic-subtitle">{currentCov.name}</h2>
              <h3 className="def-text">{currentCov.def}</h3>
            </>
          )}
          <article className="section-content">
            <ul>
              {currentCov.items.map((item, index) => (
                <li className="name-text" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </main>
      </div>
    </div>
  );
}

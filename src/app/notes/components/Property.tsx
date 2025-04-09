"use client";
import { useState, useEffect, useMemo } from "react";
import buttonStyles from "@/app/ui/buttons.module.css";

interface InsuranceTerms {
  term: string;
  def: string | string[];
}

interface PropertyItem {
  category: string;
  items: InsuranceTerms[];
}

interface DatasheetResponse {
  datasheet: PropertyItem[];
}

const MAX_PROP_RETRIES = 3;
const PROP_RETRY_DELAY = 1000;

export default function PropertyViewer() {
  const [propItems, setPropItems] = useState<PropertyItem[]>([]);
  const [activeProperty, setActiveProperty] = useState<number>(0);
  const [isPropLoading, setIsPropLoading] = useState<boolean>(false);
  const [propError, setPropError] = useState<string | null>(null);
  const [propRetryCount, setPropRetryCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const fetchCategories = async () => {
      try {
        if (isMounted) {
          setIsPropLoading(true);
          setPropError(null);
        }

        const propertyResponse = await fetch(
          `/api/notes?name=PropertyInsurance`
        );
        if (!propertyResponse.ok) {
          throw new Error(`Failed to fetch: ${propertyResponse.status}`);
        }

        const propertyData: DatasheetResponse = await propertyResponse.json();

        console.log("Fetched Property Data: ", propertyData);

        if (!propertyData?.datasheet?.length) {
          throw new Error("No data available");
        }

        if (isMounted) {
          setPropItems(propertyData.datasheet);
          setPropRetryCount(0);
        }
      } catch (err) {
        if (isMounted && propRetryCount < MAX_PROP_RETRIES) {
          timeoutId = setTimeout(() => {
            setPropRetryCount((prev) => prev + 1);
          }, PROP_RETRY_DELAY);
        } else if (isMounted) {
          setPropError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        if (isMounted) {
          setIsPropLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [propRetryCount]);

  const handlePropChange = (propIndex: number) => {
    setActiveProperty(propIndex);
  };

  const handleRetry = () => {
    setPropRetryCount(0);
  };

  const currentProperty = useMemo(() => {
    return propItems[activeProperty] || null;
  }, [propItems, activeProperty]);

  const currentTerms = useMemo(() => {
    return currentProperty?.items || null;
  }, [currentProperty]);

  if (isPropLoading && !propItems.length) {
    return (
      <div>
        <div className="loading-spinner"></div>
        <p className="blog-description">Loading insurance data...</p>
        {propRetryCount > 0 && (
          <p>
            Attempt {propRetryCount} of {MAX_PROP_RETRIES}
          </p>
        )}
      </div>
    );
  }

  if (propError) {
    return (
      <div style={{ margin: "10px", padding: "10px" }}>
        <p className="blog-description">Error: {propError}</p>
        <button
          onClick={handleRetry}
          className={buttonStyles.wideBtn + " " + buttonStyles.warning}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!propItems.length) {
    return <div className="blog-description">No insurance data available</div>;
  }

  return (
    <div className="page-wrap">
      <div className="content-layout">
        <aside className="sidebar">
          {propItems.map((property, propertyIndex) => (
            <section key={property.category}>
              <h3
                onClick={() => handlePropChange(propertyIndex)}
                className={activeProperty === propertyIndex ? "active" : ""}
              >
                {property.category}
              </h3>
            </section>
          ))}
        </aside>

        <main className="content">
          {currentProperty && (
            <>
              <h2 className="topic-subtitle">{currentProperty.category}</h2>
            </>
          )}

          {currentTerms &&
            currentTerms.map((term, termIndex) => (
              <article key={termIndex} className="section-content">
                <h3>{term.term}</h3>
                <span className="def-text">{term.def}</span>
              </article>
            ))}
        </main>
      </div>
    </div>
  );
}

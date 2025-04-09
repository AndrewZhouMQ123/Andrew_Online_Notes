"use client";
import { useState, useEffect, useMemo } from "react";
import buttonStyles from "@/app/ui/buttons.module.css";

interface CategoryItem {
  name: string;
  remarks: string | string[];
}

interface Category {
  name: string;
  items: CategoryItem[];
}

interface DatasheetResponse {
  datasheet: Category[];
}

const MAX_CATEGORIES_RETRIES = 3;
const CATEGORIES_RETRY_DELAY = 1000;

export default function CategoriesViewer() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<number>(0);
  const [isCategoriesLoading, setIsCategoriesLoading] =
    useState<boolean>(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [categoriesRetryCount, setCategoriesRetryCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const fetchCategories = async () => {
      try {
        if (isMounted) {
          setIsCategoriesLoading(true);
          setCategoriesError(null);
        }

        const categoryResponse = await fetch(`/api/notes?name=Categories`);
        if (!categoryResponse.ok) {
          throw new Error(`Failed to fetch: ${categoryResponse.status}`);
        }

        const categoryData: DatasheetResponse = await categoryResponse.json();

        console.log("Fetched Categories Data: ", categoryData);

        if (!categoryData?.datasheet?.length) {
          throw new Error("No data available");
        }

        if (isMounted) {
          setCategories(categoryData.datasheet);
          setCategoriesRetryCount(0);
        }
      } catch (err) {
        if (isMounted && categoriesRetryCount < MAX_CATEGORIES_RETRIES) {
          timeoutId = setTimeout(() => {
            setCategoriesRetryCount((prev) => prev + 1);
          }, CATEGORIES_RETRY_DELAY);
        } else if (isMounted) {
          setCategoriesError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        if (isMounted) {
          setIsCategoriesLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [categoriesRetryCount]);

  const handleCategoryChange = (categoryIndex: number) => {
    setActiveCategory(categoryIndex);
    setActiveItem(0);
  };

  const handleItemChange = (itemIndex: number) => {
    setActiveItem(itemIndex);
  };

  const handleRetry = () => {
    setCategoriesRetryCount(0); // Reset retry count for manual retry
  };

  const currentCategory = useMemo(() => {
    return categories[activeCategory] || null;
  }, [categories, activeCategory]);

  const currentItem = useMemo(() => {
    return currentCategory?.items[activeItem] || null;
  }, [currentCategory, activeItem]);

  if (isCategoriesLoading && !categories.length) {
    return (
      <div>
        <div className="loading-spinner"></div>
        <p className="blog-description">Loading insurance data...</p>
        {categoriesRetryCount > 0 && (
          <p>
            Attempt {categoriesRetryCount} of {MAX_CATEGORIES_RETRIES}
          </p>
        )}
      </div>
    );
  }

  if (categoriesError) {
    return (
      <div style={{ margin: "10px", padding: "10px" }}>
        <p className="blog-description">Error: {categoriesError}</p>
        <button
          onClick={handleRetry}
          className={buttonStyles.wideBtn + " " + buttonStyles.warning}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!categories.length) {
    return <div className="blog-description">No insurance data available</div>;
  }

  return (
    <div className="page-wrap">
      <div className="content-layout">
        <aside className="sidebar">
          {categories.map((category, categoryIndex) => (
            <section key={category.name}>
              <h3
                onClick={() => handleCategoryChange(categoryIndex)}
                className={activeCategory === categoryIndex ? "active" : ""}
              >
                {category.name}
              </h3>
              {activeCategory === categoryIndex && (
                <nav className="sections">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      onClick={() => handleItemChange(itemIndex)}
                      className={activeItem === itemIndex ? "active" : ""}
                    >
                      {item.name}
                    </div>
                  ))}
                </nav>
              )}
            </section>
          ))}
        </aside>

        <main className="content">
          {currentCategory && (
            <>
              <h2 className="topic-subtitle">{currentCategory.name}</h2>
              <p className="topic-description">
                {currentCategory.items[activeItem]?.name}
              </p>
            </>
          )}

          {currentItem && (
            <article className="section-content">
              <h3>{currentItem.name}</h3>
              <ul>
                {Array.isArray(currentItem.remarks) ? (
                  currentItem.remarks.map((remark, index) => (
                    <li key={index} className="def-text">
                      {remark}
                    </li>
                  ))
                ) : (
                  <li className="def-text">{currentItem.remarks}</li>
                )}
              </ul>
            </article>
          )}
        </main>
      </div>
    </div>
  );
}

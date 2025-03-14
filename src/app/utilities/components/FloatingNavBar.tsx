"use client";
const FloatingNavBar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        width: "220px",
        height: "600px",
        fontFamily: "'Arial', sans-serif",
        maxHeight: "90vh", // Ensure it doesn't exceed 90% of the viewport height
        overflowY: "auto", // Make it scrollable if content overflows
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {[
          { id: "graph-intro", label: "Graph Intro" },
          { id: "scatter-xy", label: "Scatter XY" },
          { id: "err-bar-1x", label: "Error Bar 1X" },
          { id: "err-bar-1y", label: "Error Bar 1Y" },
          { id: "err-bar-2xy", label: "Error Bar 2XY" },
          { id: "bar", label: "Bar Graph" },
          { id: "pie", label: "Pie Graph" },
          { id: "box", label: "Boxplot" },
          { id: "eq-hist", label: "Eq-Histogram" },
          { id: "vary-hist", label: "Var-Histogram" },
          { id: "uniform-hmap-imshow", label: "Heatmap (imshow)" },
          {
            id: "uniform-hmap-pcolormesh",
            label: "Heatmap (pcolormesh)",
          },
          {
            id: "custom-hmap-pcolormesh",
            label: "Heatmap (coordinate)",
          },
          { id: "custom-hmap-pmf", label: "Heatmap (function)" },
          { id: "contour-map", label: "Contour Map" },
        ].map((item) => (
          <li
            key={item.id}
            style={{
              margin: "0.5rem 0",
              padding: "0.5rem",
              borderRadius: "8px",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(167, 203, 253, 0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <button
              onClick={() => scrollToSection(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#333",
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "left",
                width: "100%",
                padding: "0",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingNavBar;

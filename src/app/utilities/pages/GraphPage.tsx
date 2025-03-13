import styles from "@/app/ui/calculator.module.css";
import buttonstyles from "@/app/ui/buttons.module.css";

export const GraphPage = () => {
  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">Scientific Graph Utilities</h1>
      <div className={styles.rightParagraph}>
        <p>
          The API that works behind the scenes:
          <a
            className={buttonstyles.link}
            href="https://github.com/AndrewZhouMQ123/Sci_Graph_API"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            https://github.com/AndrewZhouMQ123/Sci_Graph_API
          </a>
        </p>
        <p>Feel free to go through the code if you are interested.</p>
      </div>
    </div>
  );
};

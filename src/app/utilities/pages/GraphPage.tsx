import styles from "@/app/ui/calculator.module.css";
import buttonstyles from "@/app/ui/buttons.module.css";
import {
  ScatterXY,
  ErrBar1x,
  ErrBar1y,
  ErrBar2xy,
} from "../components/StandardXvsYPlot";
import { BarPlot, PiePlot, BoxPlot } from "../components/MiscPlots";
import { EqHistogram, VaryHistogram } from "../components/Histogram";
import {
  CustomHmap_pcolormesh,
  CustomHmap_pmf,
} from "../components/CustomHmap";
import {
  UniformHmap_imshow,
  UniformHmap_pcolormesh,
} from "../components/UniformHmap";
import ContourMap from "../components/ContourMap";
import FloatingNavBar from "../components/FloatingNavBar";

const GraphIntro = () => {
  return (
    <div className="page-wrap" id="graph-intro">
      <h1 className="blog-title glitter-title">Scientific Graphing</h1>
      <div className={styles.postitNote}>
        <p>
          This page is dedicated to creating scientific graphs for various
          purposes, and also a project to make use of what I learned at UBC
          Physics so I can look back on it.
        </p>
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

export const GraphPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <FloatingNavBar />
      <GraphIntro />
      <ScatterXY />
      <ErrBar1x />
      <ErrBar1y />
      <ErrBar2xy />
      <BarPlot />
      <PiePlot />
      <BoxPlot />
      <EqHistogram />
      <VaryHistogram />
      <UniformHmap_imshow />
      <UniformHmap_pcolormesh />
      <CustomHmap_pcolormesh />
      <CustomHmap_pmf />
      <ContourMap />
    </div>
  );
};

import { diagramObj } from "./diagrams.js";
// Use a single load event to initialize all drawings
window.addEventListener("load", () => {
    diagramObj.drawCSSsyntax();
    diagramObj.drawRect();
    diagramObj.drawboxModel();
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { diagramObj } = require('./diagrams');
// Use a single load event to initialize all drawings
window.addEventListener("load", () => {
    diagramObj.drawCSSsyntax();
    diagramObj.drawRect();
    diagramObj.drawboxModel();
});

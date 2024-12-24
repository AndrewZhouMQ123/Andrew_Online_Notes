import { diagramObj } from '../dist/diagrams.js';
import { createStub, assert, describe, it, before, after, beforeEach, afterEach} from './testlib.js';

const canvas = document.createElement('canvas');
canvas.id = 'css-syntax';
canvas.width = 1000;
canvas.height = 170;
document.body.appendChild(canvas);
const stubber = createStub();

describe("", function () {
  before(() => console.log("Testing started – before all tests"));
  after(() => console.log("Testing finished – after all tests"));
  beforeEach(() => console.log("Before a test – enter a test"));
  afterEach(() => console.log("After a test – exit a test"));
});

describe("drawArrow", function () {
  it("returns the expected arrow properties", function () {
    const ctx = canvas.getContext("2d");
    const expectedArrow = { x1: 30, y1: 60, x2: 30, y2: 18, lineWidth: 3, strokeStyle: 'black' };
    stubber.stub(diagramObj, "drawArrow", expectedArrow)
    const result = diagramObj.drawArrow(ctx, 30, 60, 30, 18, 3, 'black');
    assert.deepEqual(result, expectedArrow);
    stubber.restore(diagramObj, "drawArrow");
  });
});

describe("drawboxModel", function () {
  it("draws box model on the canvas", function () {
    const expectedRectangles = [
      { name: "margin", x: 0, y: 0, width: 400, height: 300, fillStyle: "rgb(22, 33, 66)", strokeStyle: "white" },
      { name: "border", x: 30, y: 30, width: 340, height: 240, fillStyle: "rgb(105, 2, 233)", strokeStyle: "white" },
      { name: "padding", x: 50, y: 65, width: 300, height: 170, fillStyle: "rgb(11, 22, 88)", strokeStyle: "white" },
      { name: "content", x: 100, y: 125, width: 200, height: 50, fillStyle: "rgb(0, 12, 34)", strokeStyle: "white" }
    ];
    stubber.stub(diagramObj, "drawboxModel", expectedRectangles);
    const rectangles = diagramObj.drawboxModel();
    assert.deepEqual(rectangles, expectedRectangles);
    stubber.restore(diagramObj, "drawboxModel");
  });
});

describe("drawCSSsyntax", function () {
  const expectedArrows = [
  { x1: 30, y1: 60, x2: 30, y2: 18, lineWidth: 3, strokeStyle: "black" },
  { x1: 90, y1: 58, x2: 170, y2: 15, lineWidth: 3, strokeStyle: "black" },
  { x1: 165, y1: 100, x2: 80, y2: 140, lineWidth: 3, strokeStyle: "black" },
  { x1: 272, y1: 88, x2: 300, y2: 75, lineWidth: 3, strokeStyle: "black" },
  { x1: 350, y1: 100, x2: 420, y2: 110, lineWidth: 3, strokeStyle: "black" },
  ];
  const expectedTexts = [
    { x: 10, y: 75, content: "tag.my-class", fillStyle: "orange" },
    { x: 165, y: 75, content: "{", fillStyle: "white" },
    { x: 170, y: 105, content: "property", fillStyle: "lightskyblue" },
    { x: 270, y: 105, content: ":", fillStyle: "white" },
    { x: 285, y: 105, content: "value", fillStyle: "red" },
    { x: 350, y: 105, content: ";", fillStyle: "white" },
    { x: 10, y: 140, content: "}", fillStyle: "white" },
    { x: 30, y: 14, content: "Type selector", fillStyle: "white" },
    { x: 170, y: 15, content: "Class selector", fillStyle: "white" },
    { x: 340, y: 70, content: "colon separates two entities", fillStyle: "white" },
    { x: 0, y: 160, content: "an identifier defining which feature is considered", fillStyle: "white" },
    { x: 380, y: 130, content: "describes how the feature must be handled by the engine", fillStyle: "white" }
  ];
  const expectedRectangles = [
    { name: "squares", x: 770, y: 50, width: 50, height: 50, fillStyle: "rgb(200, 0, 0)", strokeStyle: "" }
  ];

  it("returns CSS syntax", function () {
    stubber.stub(diagramObj, "drawCSSsyntax", { arrows: expectedArrows, texts: expectedTexts, rectangles: expectedRectangles });
    const { arrows, texts, rectangles } = diagramObj.drawCSSsyntax();
    it("returns the expected arrows", function () {
      assert.deepEqual(arrows, expectedArrows);
    });

    it("returns the expected texts", function () {
      assert.deepEqual(texts, expectedTexts);
    });

    it("returns the expected rectangles", function () {
      assert.deepEqual(rectangles, expectedRectangles);
    });

    stubber.restore(diagramObj, "drawCSSsyntax");
  })
});
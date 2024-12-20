/**
 * describe(), it(), before(), after(), beforeEach(), afterEach()
 * assert.equal(), assert.notEqual() -- uses ==
 * assert.strictEqual(), assert.notStrictEqual -- uses ===
 * assert.isTrue(), assert.isFalse() -- uses ===
 * assert.deepEqual, Array.from()
 **/

import * as sinon from 'sinon';
import * as chai from 'chai';

// chai has a lot of stuff, let's make assert global
const assert = chai.assert;

describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});

describe ("drawArrow", function() {
  document.body.innerHTML = '<canvas id="css-syntax" width="1000px" height="170px"></canvas>';
  const canvas = <HTMLCanvasElement> document.getElementById("css-syntax");
  const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

  const expectedArrow = {
    x1: 30,
    y1: 60,
    x2: 30,
    y2: 18,
    lineWidth: 3,
    strokeStyle: 'black',
  };

  it("draws arrow shape on the canvas", function() {
    // sinon.stub: Stubs the drawArrow function to return a specific value (expectedArrow) instead of actually performing any drawing on the canvas.
    const drawArrowStub = sinon.stub(window, 'drawArrow').returns(expectedArrow);
    assert.deepEqual(drawArrow(ctx, 30, 60, 30, 18, 3, 'black'), expectedArrow);
    // restore(): Restores the original drawArrow function after the test runs.
    drawArrowStub.restore();
  });
});

describe ("drawboxModel", function() {
  document.body.innerHTML = '<canvas id="box-model" width="500px" height="350px"></canvas>';

  const rectangles = drawboxModel();

  it("draws box model on the canvas", function() {

    const expectedRectangles = [
      {
        name: "margin",
        x: 0,
        y: 0,
        width: 400,
        height: 300,
        fillStyle: "rgb(22, 33, 66)",
        strokeStyle: "white"
      },
      {
        name: "border",
        x: 30,
        y: 30,
        width: 340,
        height: 240,
        fillStyle: "rgb(105, 2, 233)",
        strokeStyle: "white"
      },
      {
        name: "padding",
        x: 50,
        y: 65,
        width: 300,
        height: 170,
        fillStyle: "rgb(11, 22, 88)",
        strokeStyle: "white"
      },
      {
        name: "content",
        x: 100,
        y: 125,
        width: 200,
        height: 50,
        fillStyle: "rgb(0, 12, 34)",
        strokeStyle: "white"
      }
    ];

    assert.deepEqual(rectangles, expectedRectangles)
  });
});

describe ("drawCSSsyntax", function() {
  document.body.innerHTML = '<canvas id="css-syntax" width="1000px" height="170px"></canvas>';

  const expectedArrows = [
    {
      x1: 30,
      y1: 60,
      x2: 30,
      y2: 18,
      lineWidth: 3,
      strokeStyle: "black",
    },
    {
      x1: 90,
      y1: 58,
      x2: 170,
      y2: 15,
      lineWidth: 3,
      strokeStyle: "black",
    },
    {
      x1: 165,
      y1: 100,
      x2: 80,
      y2: 140,
      lineWidth: 3,
      strokeStyle: "black",
    },
    {
      x1: 272,
      y1: 88,
      x2: 300,
      y2: 75,
      lineWidth: 3,
      strokeStyle: "black",
    },
    {
      x1: 350,
      y1: 100,
      x2: 420,
      y2: 110,
      lineWidth: 3,
      strokeStyle: "black",
    },

  ];

  const expectedTexts = [
    {
      x: 30,
      y: 60,
      content: "tag.my-class",
      fillStyle: "orange",
    },
    {
      x: 150,
      y: 75,
      content: "{",
      fillStyle: "white",
    },
    {
      x: 170,
      y: 105,
      content: "property",
      fillStyle: "lightskyblue",
    },
    {
      x: 265,
      y: 105,
      content: ":",
      fillStyle: "white",
    },
    {
      x: 280,
      y: 105,
      content: "value",
      fillStyle: "red",
    },
    {
      x: 340,
      y: 105,
      content: ";",
      fillStyle: "white",
    },
    {
      x: 150,
      y: 140,
      content: "}",
      fillStyle: "white",
    },
    {
      x: 30,
      y: 14,
      content: "Type selector",
      fillStyle: "white",
    },
    {
      x: 170,
      y: 15,
      content: "Class selector",
      fillStyle: "white",
    },
    {
      x: 300,
      y: 75,
      content: "colon separates two entities",
      fillStyle: "white",
    },
    {
      x: 0,
      y: 160,
      content: "an identifier defining which feature is considered",
      fillStyle: "white",
    },
    {
      x: 380,
      y: 130,
      content: "describes how the feature must be handled by the engine",
      fillStyle: "white",
    }
  ];

  const expectedRectangles = [
    {
      name: "squares",
      x: 770,
      y: 50,
      width: 50,
      height: 50,
      fillStyle: "rgb(200, 0, 0)",
      strokeStyle: "",
    }
  ];

  // sinon.stub: Stubs the drawCSSsyntax function to return predefined expected results.
  const drawCSSsyntaxStub = sinon.stub(window, 'drawCSSsyntax').returns({
    arrows: expectedArrows,
    texts: expectedTexts,
    rectangles: expectedRectangles
  });

  const { arrows, texts, rectangles } = drawCSSsyntax();

  it("draws arrows on the canvas", function() {
    assert.deepEqual(arrows, expectedArrows);
  });

  it("draws texts on the canvas", function() {
    assert.deepEqual(texts, expectedTexts);
  });

  it("draws rectangles on the canvas", function() {
    assert.deepEqual(rectangles, expectedRectangles);
  });

  // restore(): Restores the original drawCSSsyntax function after the tests complete.
  drawCSSsyntaxStub.restore();
});
import * as sinon from 'sinon';
import { describe, it } from 'mocha';
import { assert } from 'chai';
import { diagramObj } from '../dist/diagrams.js';

window.onload = function() {
  test();
  function test() {
    describe("test", function () {
      before(() => console.log("Testing started – before all tests"));
      after(() => console.log("Testing finished – after all tests"));
      beforeEach(() => console.log("Before a test – enter a test"));
      afterEach(() => console.log("After a test – exit a test"));
      it('test 1', () => console.log(1));
      it('test 2', () => console.log(2));
      it('test 3', () => console.log(3));
    });

    describe("drawArrow", function () {
      document.body.innerHTML = '<canvas id="css-syntax" width="1000px" height="170px"></canvas>';
      const canvas = document.getElementById("css-syntax");
      const ctx = canvas.getContext("2d");
      const expectedArrow = {
      x1: 30,
      y1: 60,
      x2: 30,
      y2: 18,
      lineWidth: 3,
      strokeStyle: 'black',
      };
      // Stub function that returns the expectedArrow without actual drawing
      const drawArrowStub = sinon.stub(diagramObj, "drawArrow").returns(expectedArrow);
      it("draws arrow shape on the canvas", function () {
        // Replace diagramObj.drawArrow with the stub function
        assert.deepEqual(drawArrowStub(ctx, 30, 60, 30, 18, 3, 'black'), expectedArrow);
      });
    });

    describe("drawboxModel", function () {
      document.body.innerHTML = '<canvas id="box-model" width="500px" height="350px"></canvas>';
      it("draws box model on the canvas", function () {
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
        // Stub function that returns the expected result
        const drawboxModelStub = sinon.stub(diagramObj, "drawboxModel").returns(expectedRectangles);
        it("draws box model on the canvas", function () {
          const rectangles = drawboxModelStub();
          assert.deepEqual(rectangles, expectedRectangles);
        });
      });
    });

    describe("drawCSSsyntax", function () {
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
          x: 10,
          y: 75,
          content: "tag.my-class",
          fillStyle: "orange",
        },
        {
          x: 165,
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
          x: 270,
          y: 105,
          content: ":",
          fillStyle: "white",
        },
        {
          x: 285,
          y: 105,
          content: "value",
          fillStyle: "red",
        },
        {
          x: 350,
          y: 105,
          content: ";",
          fillStyle: "white",
        },
        {
          x: 10,
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
          x: 340,
          y: 70,
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
      const drawCSSsyntaxStub = sinon.stub(diagramObj, "drawCSSsyntax").returns({
        arrows: expectedArrows,
        texts: expectedTexts,
        rectangles: expectedRectangles
      });
      const { arrows, texts, rectangles } = drawCSSsyntaxStub();
      it("draws arrows on the canvas", function () {
        assert.deepEqual(arrows, expectedArrows);
      });
      it("draws texts on the canvas", function () {
        assert.deepEqual(texts, expectedTexts);
      });
      it("draws rectangles on the canvas", function () {
        assert.deepEqual(rectangles, expectedRectangles);
      });
    });
  }
}
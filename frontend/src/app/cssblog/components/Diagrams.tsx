"use client";
import React, { useEffect } from 'react';

const DiagramComponent = () => {
  useEffect(() => {
    const diagramObj = {
      drawArrow(ctx: CanvasRenderingContext2D, fromx: number, fromy: number, tox: number, toy: number, arrowWidth: number, color: string) {
        const headlen = 10;
        const angle = Math.atan2(toy - fromy, tox - fromx);

        ctx.save();
        ctx.strokeStyle = color;

        ctx.beginPath();
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        ctx.lineWidth = arrowWidth;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(tox, toy);
        ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));

        ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 7), toy - headlen * Math.sin(angle + Math.PI / 7));
        ctx.lineTo(tox, toy);
        ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));

        ctx.stroke();
        ctx.restore();
      },

      drawCSSsyntax() {
        const canvas = document.getElementById("css-syntax") as HTMLCanvasElement;
        if (canvas && canvas.getContext) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "italic bold 20pt Roboto";

            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fillRect(770, 50, 50, 50);
            ctx.fillStyle = "white";
            ctx.fillText("squares", 830, 100);

            ctx.fillStyle = "orange";
            ctx.fillText("tag.my-class", 10, 75);

            ctx.fillStyle = "white";
            ctx.fillText("{", 165, 75);

            ctx.fillStyle = "lightskyblue";
            ctx.fillText("property", 170, 105);

            ctx.fillStyle = "white";
            ctx.fillText(":", 270, 105);

            ctx.fillStyle = "red";
            ctx.fillText("value", 285, 105);

            ctx.fillStyle = "white";
            ctx.fillText(";", 350, 105);

            ctx.fillStyle = "white";
            ctx.fillText("}", 10, 140);

            ctx.font = "italic bold 12pt Roboto";
            ctx.fillText("Type selector", 30, 14);
            ctx.fillText("Class selector", 170, 15);
            ctx.fillText("colon separates two entities", 340, 70);
            ctx.fillText("an identifier defining which feature is considered", 0, 160);
            ctx.fillText("describes how the feature must be handled by the engine", 380, 130);
          }
        }
      },

      drawboxModel() {
        const canvas = document.getElementById("box-model") as HTMLCanvasElement;

        if (canvas && canvas.getContext) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "italic bold 20pt Roboto";
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.setLineDash([10, 5]);

            ctx.fillStyle = "rgb(22, 33, 66)";
            ctx.fillRect(0, 0, 400, 300);
            ctx.strokeRect(0, 0, 400, 300);
            ctx.fillStyle = "white";
            ctx.fillText("margin", 10, 20);

            ctx.fillStyle = "rgb(105, 2, 233)";
            ctx.fillRect(30, 30, 340, 240);
            ctx.strokeRect(30, 30, 340, 240);
            ctx.fillStyle = "white";
            ctx.fillText("border", 40, 55);

            ctx.fillStyle = "rgb(11, 22, 88)";
            ctx.fillRect(50, 65, 300, 170);
            ctx.strokeRect(50, 65, 300, 170);
            ctx.fillStyle = "white";
            ctx.fillText("padding", 60, 90);

            ctx.fillStyle = "rgb(0, 12, 34)";
            ctx.fillRect(100, 125, 200, 50);
            ctx.strokeRect(100, 125, 200, 50);
            ctx.fillStyle = "white";
            ctx.fillText("content", 155, 155);

            ctx.strokeRect(100, 125, 200, 50);
            ctx.fillStyle = "white";
            ctx.fillText("content", 155, 155);
          }
        }
      }
    };

    // Call the draw methods after the component mounts
    diagramObj.drawCSSsyntax();
    diagramObj.drawboxModel();
  }, []);

  return (
    <div>
      <canvas id="css-syntax" width="1000" height="200"></canvas>
      <canvas id="box-model" width="500" height="400"></canvas>
    </div>
  );
};

export default DiagramComponent;

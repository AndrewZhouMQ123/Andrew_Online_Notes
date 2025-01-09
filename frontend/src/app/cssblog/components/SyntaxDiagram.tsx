import React, { useRef, useEffect } from 'react';

const SyntaxDiagram: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
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
  }, []);

  return <canvas ref={canvasRef} id="css-syntax" width="1000" height="170"></canvas>;
};

export default SyntaxDiagram;
import React, { useRef, useEffect } from 'react';

const SyntaxDiagram = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Set the new font and styles
        ctx.font = "700 20px Montserrat, sans-serif"; // Bold and modern font
        ctx.letterSpacing = "2px"; // Increased letter spacin

        // Draw the red square
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(770, 50, 50, 50);

        // Draw "squares" text
        ctx.fillStyle = "white";
        ctx.fillText("squares", 830, 100);

        // Draw "tag.my-class" text
        ctx.fillStyle = "orange";
        ctx.fillText("tag.my-class", 10, 75);

        // Draw "{" text
        ctx.fillStyle = "white";
        ctx.fillText("{", 165, 75);

        // Draw "property" text
        ctx.fillStyle = "lightskyblue";
        ctx.fillText("property", 170, 105);

        // Draw ":" text
        ctx.fillStyle = "white";
        ctx.fillText(":", 270, 105);

        // Draw "value" text
        ctx.fillStyle = "red";
        ctx.fillText("value", 285, 105);

        // Draw ";" text
        ctx.fillStyle = "white";
        ctx.fillText(";", 350, 105);

        // Draw "}" text
        ctx.fillStyle = "white";
        ctx.fillText("}", 10, 140);

        // Draw smaller annotations
        ctx.font = "700 12px Montserrat, sans-serif"; // Smaller font for annotations
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
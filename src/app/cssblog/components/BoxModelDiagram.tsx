import React, { useRef, useEffect } from 'react';

const BoxModelDiagram = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.font = 'italic bold 20pt Roboto';
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 5]); // Dash pattern: 10px dash, 5px gap

        // Draw margin
        ctx.fillStyle = 'rgb(22, 33, 66)';
        ctx.fillRect(0, 0, 400, 300);
        ctx.strokeRect(0, 0, 400, 300);
        ctx.fillStyle = 'white';
        ctx.fillText('margin', 10, 20);

        // Draw border
        ctx.fillStyle = 'rgb(105, 2, 233)';
        ctx.fillRect(30, 30, 340, 240);
        ctx.strokeRect(30, 30, 340, 240);
        ctx.fillStyle = 'white';
        ctx.fillText('border', 40, 55);

        // Draw padding
        ctx.fillStyle = 'rgb(11, 22, 88)';
        ctx.fillRect(50, 65, 300, 170);
        ctx.strokeRect(50, 65, 300, 170);
        ctx.fillStyle = 'white';
        ctx.fillText('padding', 60, 90);

        // Draw content
        ctx.fillStyle = 'rgb(0, 12, 34)';
        ctx.fillRect(100, 125, 200, 50);
        ctx.strokeRect(100, 125, 200, 50);
        ctx.fillStyle = 'white';
        ctx.fillText('content', 155, 155);
      }
    }
  }, []);

  return <canvas ref={canvasRef} id="box-model" width="500" height="350"></canvas>;
};

export default BoxModelDiagram;
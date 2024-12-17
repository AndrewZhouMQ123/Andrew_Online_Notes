function drawRect() {
  const canvas = document.getElementById("rect-loop");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let t = 0; // Time variable
    const A = 200; // Horizontal radius
    const B = 50;  // Vertical radius

    function rectloop() {
      requestAnimationFrame(rectloop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const x = A * Math.cos(t);
      const y = B * Math.sin(2 * t);
      // Set the shadow effect (glow)
      ctx.shadowColor = "rgba(0, 255, 255, 0.8)";  // Glow color (cyan)
      ctx.shadowBlur = 20;                         // Blur radius for the glow
      ctx.shadowOffsetX = 0;                       // No horizontal offset
      ctx.shadowOffsetY = 0;                       // No vertical offset
      ctx.fillStyle = "rgb(0 0 200)";
      ctx.fillRect(x + 560, y + 75, 50, 50);
      ctx.strokeRect(x + 560, y + 75, 50, 50);
      t += 0.01; // Increment time
    }

    // Start the animation
    rectloop();
  }
}

function drawSyntax() {
  const canvas = document.getElementById("css-syntax");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.font = "italic bold 20pt Roboto";

    ctx.fillStyle = "orange";
    ctx.fillText("tag.my-class", 10, 75);
    drawArrow(ctx, 30, 60, 30, 18, 3, 'black');
    drawArrow(ctx, 90, 58, 170, 15, 3, 'black');

    ctx.fillStyle = "white";
    ctx.fillText("{", 150, 75);

    ctx.fillStyle = "lightskyblue";
    ctx.fillText("property", 170, 105);
    drawArrow(ctx, 165, 100, 80, 140, 3, 'black');

    ctx.fillStyle = "white";
    ctx.fillText(":", 265, 105);
    drawArrow(ctx, 272, 88, 300, 75, 3, 'black');

    ctx.fillStyle = "red";
    ctx.fillText("value", 280, 105);
    drawArrow(ctx, 350, 100, 420, 110, 3, 'black');

    ctx.fillStyle = "white";
    ctx.fillText(";", 340, 105);

    ctx.fillStyle = "yellow";
    ctx.fillText("}", 150, 140);

    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(770, 50, 50, 50);
    ctx.fillStyle = "white";
    ctx.fillText("squares", 830, 100);

    ctx.font = "italic bold 12pt Roboto";
    ctx.fillText("Type selector", 30, 14);
    ctx.fillText("Class selector", 170, 15);
    ctx.fillText("colon separates two entities", 300, 75);
    ctx.fillText("an identifier defining which feature is considered", 0, 160);
    ctx.fillText("describes how the feature must be handled by the engine", 380, 130);
  }
}

function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color){
  //variables to be used when creating the arrow
  let headlen = 10;
  let angle = Math.atan2(toy-fromy,tox-fromx);

  ctx.save();
  ctx.strokeStyle = color;

  //starting path of the arrow from the start square to the end square
  //and drawing the stroke
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = arrowWidth;
  ctx.stroke();

  //starting a new path from the head of the arrow to one of the sides of
  //the point
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
             toy-headlen*Math.sin(angle-Math.PI/7));

  //path from the side point of the arrow, to the other side point
  ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),
             toy-headlen*Math.sin(angle+Math.PI/7));

  //path from the side point back to the tip of the arrow, and then
  //again to the opposite side point
  ctx.lineTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
             toy-headlen*Math.sin(angle-Math.PI/7));

  //draws the paths created above
  ctx.stroke();
  ctx.restore();
}

function drawboxModel() {
  const canvas = document.getElementById("box-model");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.font = "italic bold 20pt Roboto";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);  // Dash pattern: 10px dash, 5px gap

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
  }
}

// Use a single load event to initialize all drawings
window.addEventListener("load", () => {
  drawSyntax();
  drawRect();
  drawboxModel();
});

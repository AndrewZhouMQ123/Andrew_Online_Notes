function drawRect() {
  const canvas = document.getElementById("rect-loop");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let t = 0; // Time variable
    const A = 350; // Horizontal radius
    const B = 70;  // Vertical radius

    function rectloop() {
      requestAnimationFrame(rectloop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const x = A * Math.cos(t);
      const y = B * Math.sin(2 * t);
      ctx.fillStyle = "rgb(0 0 200 / 50%)";
      ctx.fillRect(550 + x, 75 + y, 50, 50);
      ctx.strokeRect(550 + x, 75 + y, 50, 50);
      t += 0.02; // Increment time
    }

    // Start the animation
    rectloop();
  }
}

function drawSyntax() {
  const canvas = document.getElementById("css-syntax");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.font = "italic bold 20pt Roboto";
    ctx.fillText("tag.my-class", 0, 75);
    ctx.fillStyle = "white";
    ctx.fillText("{", 140, 75);
    ctx.fillStyle = "lightskyblue";
    ctx.fillText("property", 160, 105);
    ctx.fillStyle = "white";
    ctx.fillText(":", 255, 105);
    ctx.fillStyle = "red";
    ctx.fillText("value", 270, 105);
    ctx.fillStyle = "white";
    ctx.fillText(";", 330, 105);
    ctx.fillStyle = "yellow";
    ctx.fillText("}", 140, 140);

    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(750, 60, 50, 50);
    ctx.fillStyle = "white";
    ctx.fillText("squares", 820, 100);

    // Create a smoother gradient with fade-out effects
    const grad = ctx.createLinearGradient(-50, 0, 250, 0); // Extend boundaries for smoother fade
    grad.addColorStop(0, "rgba(255, 0, 0, 0)");   // Fully transparent red
    grad.addColorStop(0.2, "rgba(255, 0, 0, 1)"); // Fully opaque red
    grad.addColorStop(0.5, "rgba(0, 255, 0, 1)"); // Fully opaque green
    grad.addColorStop(0.8, "rgba(0, 0, 255, 1)"); // Fully opaque blue
    grad.addColorStop(1, "rgba(0, 0, 255, 0)");   // Fully transparent blue
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 400, 30);
  }
}

function drawboxModel() {
  const canvas = document.getElementById("box-model");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 100, 100);
    ctx.clearRect(20, 20, 60, 60);
    ctx.strokeRect(25, 25, 50, 50);
  }
}

// Use a single load event to initialize all drawings
window.addEventListener("load", () => {
  drawSyntax();
  drawRect();
  drawboxModel();
});

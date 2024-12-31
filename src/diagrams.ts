type LineProperties = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  lineWidth: number;
  strokeStyle: string;
};

type TextProperties = {
  x: number;
  y: number;
  content: string;
  fillStyle: string;
};

type RectProperties = {
  name: string,
  x: number,
  y: number,
  width: number,
  height: number,
  fillStyle: string,
  strokeStyle: string,
};

export const diagramObj = {
  drawArrow(ctx: CanvasRenderingContext2D,
    fromx: number, fromy: number, tox: number, toy: number, arrowWidth: number, color: string){
    //variables to be used when creating the arrow
    const headlen = 10;
    const angle = Math.atan2(toy-fromy,tox-fromx);
  
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
  
    return {
      x1: fromx,
      y1: fromy,
      x2: tox,
      y2: toy,
      lineWidth: arrowWidth,
      strokeStyle: color,
    };
  },
  
  drawCSSsyntax() {
    const canvas = <HTMLCanvasElement> document.getElementById("css-syntax");
    const rectangles: RectProperties[] = [];
    const arrows: LineProperties[] = [];
    const texts: TextProperties[] = [];
    if (canvas != null && canvas.getContext) {
      const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.font = "italic bold 20pt Roboto";
  
      const a1 = this.drawArrow(ctx, 30, 60, 30, 18, 3, 'black');
      arrows.push(a1);
  
      const a2 = this.drawArrow(ctx, 90, 58, 170, 15, 3, 'black');
      arrows.push(a2);
  
      const a3 = this.drawArrow(ctx, 165, 100, 80, 140, 3, 'black');
      arrows.push(a3);
  
      const a4 = this.drawArrow(ctx, 280, 88, 340, 70, 3, 'black');
      arrows.push(a4);
  
      const a5 = this.drawArrow(ctx, 360, 100, 420, 110, 3, 'black');
      arrows.push(a5);
  
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(770, 50, 50, 50);
      ctx.fillStyle = "white";
      ctx.fillText("squares", 830, 100);
      rectangles.push({
        name: "squares",
        x: 770,
        y: 50,
        width: 50,
        height: 50,
        fillStyle: "rgb(200, 0, 0)",
        strokeStyle: "",
      });
  
      ctx.fillStyle = "orange";
      ctx.fillText("tag.my-class", 10, 75);
      texts.push({
        x: 10,
        y: 75,
        content: "tag.my-class",
        fillStyle: "orange",
      });

      ctx.fillStyle = "white";
      ctx.fillText("{", 165, 75);
      texts.push({
        x: 165,
        y: 75,
        content: "{",
        fillStyle: "white",
      });
  
      ctx.fillStyle = "lightskyblue";
      ctx.fillText("property", 170, 105);
      texts.push({
        x: 170,
        y: 105,
        content: "property",
        fillStyle: "lightskyblue",
      });
  
      ctx.fillStyle = "white";
      ctx.fillText(":", 270, 105);
      texts.push({
        x: 270,
        y: 105,
        content: ":",
        fillStyle: "white",
      });
  
      ctx.fillStyle = "red";
      ctx.fillText("value", 285, 105);
      texts.push({
        x: 285,
        y: 105,
        content: "value",
        fillStyle: "red",
      });
  
      ctx.fillStyle = "white";
      ctx.fillText(";", 350, 105);
      texts.push({
        x: 350,
        y: 105,
        content: ";",
        fillStyle: "white",
      });
  
      ctx.fillStyle = "white";
      ctx.fillText("}", 10, 140);
      texts.push({
        x: 10,
        y: 140,
        content: "}",
        fillStyle: "white",
      });
  
      ctx.font = "italic bold 12pt Roboto";
      ctx.fillText("Type selector", 30, 14);
      texts.push({
        x: 30,
        y: 14,
        content: "Type selector",
        fillStyle: "white",
      });
      ctx.fillText("Class selector", 170, 15);
      texts.push({
        x: 170,
        y: 15,
        content: "Class selector",
        fillStyle: "white",
      });
      ctx.fillText("colon separates two entities", 340, 70);
      texts.push({
        x: 340,
        y: 70,
        content: "colon separates two entities",
        fillStyle: "white",
      });
      ctx.fillText("an identifier defining which feature is considered", 0, 160);
      texts.push({
        x: 0,
        y: 160,
        content: "an identifier defining which feature is considered",
        fillStyle: "white",
      });
      ctx.fillText("describes how the feature must be handled by the engine", 380, 130);
      texts.push({
        x: 380,
        y: 130,
        content: "describes how the feature must be handled by the engine",
        fillStyle: "white",
      });
    }
    
    return {arrows, texts, rectangles};
  },
  
  drawboxModel() {
    const canvas = <HTMLCanvasElement> document.getElementById("box-model");
    const rectangles:RectProperties[] = []; // Array to store rectangle details
    
    if (canvas != null && canvas.getContext) {
      const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.font = "italic bold 20pt Roboto";
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 5]);  // Dash pattern: 10px dash, 5px gap
  
      ctx.fillStyle = "rgb(22, 33, 66)";
      ctx.fillRect(0, 0, 400, 300);
      ctx.strokeRect(0, 0, 400, 300);
      ctx.fillStyle = "white";
      ctx.fillText("margin", 10, 20);
      rectangles.push({
        name: "margin",
        x: 0,
        y: 0,
        width: 400,
        height: 300,
        fillStyle: "rgb(22, 33, 66)",
        strokeStyle: "white",
      });
  
      ctx.fillStyle = "rgb(105, 2, 233)";
      ctx.fillRect(30, 30, 340, 240);
      ctx.strokeRect(30, 30, 340, 240);
      ctx.fillStyle = "white";
      ctx.fillText("border", 40, 55);
      rectangles.push({
        name: "border",
        x: 30,
        y: 30,
        width: 340,
        height: 240,
        fillStyle: "rgb(105, 2, 233)",
        strokeStyle: "white",
      });
  
      ctx.fillStyle = "rgb(11, 22, 88)";
      ctx.fillRect(50, 65, 300, 170);
      ctx.strokeRect(50, 65, 300, 170);
      ctx.fillStyle = "white";
      ctx.fillText("padding", 60, 90);
      rectangles.push({
        name: "padding",
        x: 50,
        y: 65,
        width: 300,
        height: 170,
        fillStyle: "rgb(11, 22, 88)",
        strokeStyle: "white",
      });
  
      ctx.fillStyle = "rgb(0, 12, 34)";
      ctx.fillRect(100, 125, 200, 50);
      ctx.strokeRect(100, 125, 200, 50);
      ctx.fillStyle = "white";
      ctx.fillText("content", 155, 155);
      rectangles.push({
        name: "content",
        x: 100,
        y: 125,
        width: 200,
        height: 50,
        fillStyle: "rgb(0, 12, 34)",
        strokeStyle: "white",
      });
      ctx.strokeRect(100, 125, 200, 50);
      ctx.fillStyle = "white";
      ctx.fillText("content", 155, 155);
    }
  
    return rectangles;
  }
}

// Use a single load event to initialize all drawings
window.addEventListener("load", () => {
  diagramObj.drawCSSsyntax();
  diagramObj.drawboxModel();
});
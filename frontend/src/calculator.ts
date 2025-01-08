const context = {
  log: Math.log,
  sqrt: Math.sqrt,
  e: Math.E,
  pi: Math.PI,
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  arcsin: Math.asin,
  arccos: Math.acos,
  arctan: Math.atan,
};

const calculate = {
  ans: 0,
  parse(expression: string) {
    // Replace variables and functions with context bindings
    const safeExpression = expression.replace(/\b[a-zA-Z]+\b/g, (match) => {
      if (!Object.hasOwn(context, match)) {
          throw new Error(`Undefined variable or function: ${match}`);
      }
      return `context.${match}`;
    });

    // Evaluate the modified expression
    const result = new Function("context", `return ${safeExpression}`)(context);
    this.ans = result;
    return result;
  }
}

const calculator = document.querySelector("#calculator") as HTMLDivElement;
const top = calculator.querySelector('#top-section') as HTMLDivElement;
const configs = calculator.querySelector('#configs-bar') as HTMLDivElement;
const funcgrid = calculator.querySelector('#func-grid') as HTMLDivElement;
const numgrid = calculator.querySelector('#num-grid') as HTMLDivElement;

type gapText = {
  shift: string;
  alpha: string;
}

// Function to create a grid item with gap text
function createGridItem(text: string, gapText: gapText) {
  const gridItem = document.createElement("button");
  gridItem.classList.add("grid-item");
  gridItem.textContent = text;

  if (gapText) {
    const gapTextElement = document.createElement("div");
    gapTextElement.classList.add("gap-text");

    // Add shift and alpha text if provided
    if (gapText.shift) {
      const shiftText = document.createElement("span");
      shiftText.classList.add("shift-text");
      shiftText.textContent = gapText.shift;
      gapTextElement.appendChild(shiftText);
    }

    if (gapText.alpha) {
      const alphaText = document.createElement("span");
      alphaText.classList.add("alpha-text");
      alphaText.textContent = gapText.alpha;
      gapTextElement.appendChild(alphaText);
    }

    gridItem.appendChild(gapTextElement);
  }

  return gridItem;
}

// Function to fill the func-grid
function fillFuncGrid() {

  // Clear existing content
  funcgrid.innerHTML = "";

  // Define the grid items for func-grid
  const funcGridItems = [
    { text: "Abs", gapText: { shift: "&divide;R", alpha: "" } },
    { text: "X<sup>3</sup>", gapText: { shift: "", alpha: ":" } },
    { text: "X^<sup>-1</sup>", gapText: { shift: "X!", alpha: "" } },
    { text: "sqrt", gapText: { shift: "cube-root", alpha: "" } },
    { text: "X^<sup>2</sup>", gapText: { shift: "", alpha: "" } },
    { text: "X^<sup>y</sup>", gapText: { shift: "power-root", alpha: "" } },
    { text: "log10", gapText: { shift: "10<sup>x</sup>", alpha: "" } },
    { text: "ln", gapText: { shift: "e<sup>x</sup>", alpha: "" } },
    { text: "log2", gapText: { shift: "2<sup>x</sup>", alpha: "" } },
    { text: "&Sigma;", gapText: { shift: "", alpha: "" } },
    { text: "sin", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: "cos", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: "tan", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: "(", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: ")", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: "DEL", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: "AC", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: "ANS", gapText: { shift: "Shift", alpha: "Alpha" } },
    { text: "=", gapText: { shift: "Shift", alpha: "Alpha" } },
  ];

  // Add grid items to func-grid
  funcGridItems.forEach((item) => {
    const gridItem = createGridItem(item.text, item.gapText);
    funcgrid.appendChild(gridItem);
  });
}

// Function to fill the num-grid
function fillNumGrid() {
  // Clear existing content
  numgrid.innerHTML = "";

  // Define the grid items for num-grid
  const numGridItems = [
    { text: "7", gapText: { shift: "", alpha: "" } },
    { text: "8", gapText: { shift: "", alpha: "" } },
    { text: "9", gapText: { shift: "CLR", alpha: "" } },
    { text: "DEL", gapText: { shift: "INS", alpha: "" } },
    { text: "AC", gapText: { shift: "OFF", alpha: "" } },
    { text: "4", gapText: { shift: "", alpha: "" } },
    { text: "5", gapText: { shift: "", alpha: "" } },
    { text: "6", gapText: { shift: "", alpha: "" } },
    { text: "&times;", gapText: { shift: "nPr", alpha: "GCD" } },
    { text: "&divide;", gapText: { shift: "nCr", alpha: "LCM" } },
    { text: "1", gapText: { shift: "STAT", alpha: "" } },
    { text: "2", gapText: { shift: "", alpha: "" } },
    { text: "3", gapText: { shift: "", alpha: "" } },
    { text: "+", gapText: { shift: "Pol", alpha: "Int" } },
    { text: "-", gapText: { shift: "Rec", alpha: "Intg" } },
    { text: "0", gapText: { shift: "Rnd", alpha: "" } },
    { text: ".", gapText: { shift: "Ran#", alpha: "RanInt" } },
    { text: "&times;10<sup>x</sup>", gapText: { shift: "&Pi;", alpha: "e" } },
    { text: "Ans", gapText: { shift: "DRG", alpha: "PreAns" } },
    { text: "=", gapText: { shift: "", alpha: "" } },
  ];

  // Add grid items to num-grid
  numGridItems.forEach((item) => {
    const gridItem = createGridItem(item.text, item.gapText);
    numgrid.appendChild(gridItem);
  });
}

// Call the functions to fill the grids
fillFuncGrid();
fillNumGrid();
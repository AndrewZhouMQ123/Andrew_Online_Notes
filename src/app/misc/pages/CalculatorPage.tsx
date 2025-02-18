"use client"
import React, { useState } from 'react';
import styles from "@/app/ui/calculator.module.css"

type ButtonAction = {
  onClick: () => void; 
};

type GridItemProps = {
  text: string;
  action: ButtonAction;
};

const GridItem = ({ text, action }: GridItemProps) => {
  return (
    <button className={styles.gridButton} onClick={action.onClick}>
      {text}
    </button>
  );
};

const sigmaFunction = (end: number, start: number = 0, step: number = 1): number => {
  if (step === 0) throw new Error("Step cannot be zero");
  if ((step > 0 && start > end) || (step < 0 && start < end)) return 0;
  const numberOfTerms = Math.floor((end - start) / step) + 1;
  const lastTerm = start + (numberOfTerms - 1) * step;
  return (numberOfTerms * (start + lastTerm)) / 2;
};

const Factorial = (n: number): number => {
  if (n === 0) return 1;  // Base case: 0! = 1
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const randint = (min: number, max: number): number => {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Both min and max must be integers");
  }
  if (min > max) {
    throw new Error("min must be less than or equal to max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const nthRoot = (x: number, n: number): number => {
  if (typeof x !== "number" || typeof n !== "number" || isNaN(x) || isNaN(n)) {
    throw new Error("Both x and n must be valid numbers");
  }
  if (n === 0) {
    throw new Error("n cannot be zero");
  }
  if (x < 0 && n % 2 === 0) {
    throw new Error("Even roots of negative numbers are not real");
  }
  return x ** (1 / n);
};

const nthLog = (n: number, x: number): number => {
  // Validate inputs
  if (typeof x !== "number" || typeof n !== "number" || isNaN(x) || isNaN(n)) {
    throw new Error("Both x and n must be valid numbers");
  }
  if (x <= 0) {
    throw new Error("x must be a positive number");
  }
  if (n <= 0 || n === 1) {
    throw new Error("n must be a positive number greater than 1");
  }
  return Math.log(x) / Math.log(n);
}

const permutations = (n: number, r: number): number => {
  if (n < 0 || r < 0) throw new Error("n and r must be non-negative integers");
  if (r > n) throw new Error("r cannot be greater than n");
  return Factorial(n) / Factorial(n - r);
};

const combinations = (n: number, r: number): number => {
  if (n < 0 || r < 0) throw new Error("n and r must be non-negative integers");
  if (r > n) throw new Error("r cannot be greater than n");
  return Factorial(n) / (Factorial(r) * Factorial(n - r));
};

const binaryGCD = (a: number, b: number): number => {
  if (a == 0) return b;
  if (b == 0) return a;

  let shift = 0;
  while (((a | b) & 1) === 0) {
    a >>= 1;
    b >>= 1;
    shift++;
  }

  while ((a & 1) === 0) {
    a >>= 1;
  }

  while (b !== 0) {
    while ((b & 1) === 0) {
      b >>= 1;
    }

    if (a > b) {
      [a, b] = [b, a];
    }

    b = b - a;
  }

  return a << shift;
}

const findLCM = (a: number, b: number): number => {
  return Math.abs(a * b) / binaryGCD(a, b);
}

const context = {
  "abs": Math.abs,
  "exp": Math.pow,
  "ln": Math.log,
  "log10": Math.log10,
  "log2": Math.log2,
  "sqrt": Math.sqrt,
  "cbrt": Math.cbrt,
  "nrt": nthRoot,
  "e": Math.E,
  "pi": Math.PI,
  "sin": Math.sin,
  "cos": Math.cos,
  "tan": Math.tan,
  "sinh": Math.sinh,
  "cosh": Math.cosh,
  "tanh": Math.tanh,
  "arcsin": Math.asin,
  "arccos": Math.acos,
  "arctan": Math.atan,
  "arcsinh": Math.asinh,
  "arccosh": Math.acosh,
  "arctanh": Math.atanh,
  "rand": Math.random,
  "Σ": sigmaFunction,
  "!": Factorial,
  "floor": Math.floor,
  "ceil": Math.ceil,
  "RandInt": randint,
  "lognY": nthLog,
  "P": permutations,
  "C": combinations,
  "GCD": binaryGCD,
  "LCM": findLCM,
};

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shift, setShift] = useState(false);

  const calculate = () => {
    try {
      const safeExpression = input.replace(/[\p{L}]+/gu, (match) => {
        if (!Object.hasOwn(context, match)) {
          throw new Error(`Undefined variable or function: ${match}`);
        }
        return `context.${match}`;
      });
      
      console.log("Safe Expression:", safeExpression);

      const calculationResult = new Function("context", `return ${safeExpression}`)(context);

      if (typeof calculationResult !== 'number' || isNaN(calculationResult)) {
        throw new Error('Invalid calculation result');
      }

      setResult(calculationResult);
      setInput(calculationResult.toString())
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid expression');
      setResult(null);
    }
  }

  const write = (value: string) => {
    setInput(input + value);
  };

  const handleClearClick = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  const handlePowClick = (y: number) => {
    setInput('exp(' + input + ', ' + y + ')')
  }

  const handleDeleteClick = () => {
    setInput(input.slice(0, -1));
  };

  const funcGridItems: GridItemProps[] = [
    { text: "Abs", action: { onClick: () => write('abs(') } },
    { text: "X^3", action: { onClick: () => handlePowClick(3,) } },
    { text: "X^-1", action: { onClick: () => handlePowClick(-1) } },
    { text: "sqrt", action: { onClick: () => write('sqrt(') } }, 
    { text: "X^2", action: { onClick: () => handlePowClick(2) } },
    { text: "X^y", action: { onClick: () => setInput('exp(' + input + ', )') } },
    { text: "log10", action: { onClick: () => write('log10(') } },
    { text: "ln", action: { onClick: () => write('ln(') } },
    { text: "log2", action: { onClick: () => write('log2(') } },
    { text: "sin", action: { onClick: () => write('sin(') } },
    { text: "cos", action: { onClick: () => write('cos(') } },
    { text: "tan", action: { onClick: () => write('tan(') } },
    { text: "π", action: { onClick: () => write('pi')}},
    { text: "e", action: { onClick: () => write('e')}},
    { text: "(", action: { onClick: () => write('(') } },
    { text: ")", action: { onClick: () => write(')') } },
    { text: "floor", action: { onClick: () => setInput('floor(' + input + ')') } },
    { text: "ceil", action: { onClick: () => setInput('ceil(' + input + ')') } },
    { text: "Σ", action: { onClick: () => write("Σ(") } },
    { text: "X!", action: { onClick: () => write("!") }},
    { text: "sinh", action: { onClick: () => write('sinh(') } },
    { text: "cosh", action: { onClick: () => write('cosh(') } },
    { text: "tanh", action: { onClick: () => write('tanh(') } },
    { text: "binary", action: { onClick: () => {
      try { 
        const n = parseFloat(input);
        if (isNaN(n) || !Number.isInteger(n) || n < 0) {
          throw new Error("Input must be a non-negative integer");
        }
        setInput(n.toString(2));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Invalid expression');
        setResult(null);
      }
    } } },
  ];

  const numGridItems: GridItemProps[] = [
    { text: "×", action: { onClick: () => write('*') } },
    { text: "÷", action: { onClick: () => write('/') } },
    { text: "+", action: { onClick: () => write('+') } },
    { text: "-", action: { onClick: () => write('-') } },
    { text: "7", action: { onClick: () => write('7') } },
    { text: "8", action: { onClick: () => write('8') } },
    { text: "9", action: { onClick: () => write('9') } },
    { text: "DEL", action: { onClick: handleDeleteClick } },
    { text: "4", action: { onClick: () => write('4') } },
    { text: "5", action: { onClick: () => write('5') } },
    { text: "6", action: { onClick: () => write('6') } },
    { text: "AC", action: { onClick: handleClearClick } },
    { text: "1", action: { onClick: () => write('1') } },
    { text: "2", action: { onClick: () => write('2') } },
    { text: "3", action: { onClick: () => write('3') } },
    { text: ".", action: { onClick: () => write('.') } },
    { text: "0", action: { onClick: () => write('0') } },
    { text: "%", action: { onClick: () => write("%") } },
    { text: "Ans", action: { onClick: () => setInput(result?.toString() || '') } },
  ];

  const altGridItems: GridItemProps[] = [
    { text: "³√x", action: { onClick: () => setInput(`cbrt(${input})`) } },
    { text: "ⁿ√x", action: { onClick: () => setInput(`nrt(${input}, )`) } },
    { text: "10^x", action: { onClick: () => write("exp(10, ") } },
    { text: "e^x", action: { onClick: () => write( "exp(e, ") } },
    { text: "2^x", action: { onClick: () => write("exp(2, ") } },
    { text: "nPr", action: { onClick: () => write("P( , )") } },
    { text: "nCr", action: { onClick: () => write("C( , )") } },
    { text: "lognY", action: { onClick: () => write("lognY( , )") } },
    { text: "sin^-1", action: { onClick: () => write('arcsin(') } },
    { text: "cos^-1", action: { onClick: () => write('arccos(') } },
    { text: "tan^-1", action: { onClick: () => write('arctan(') } },
    { text: "mod", action: { onClick: () => write("%") } },
    { text: "asinh", action: { onClick: () => write('arcsinh(') } },
    { text: "acosh", action: { onClick: () => write('arccosh(') } },
    { text: "atanh", action: { onClick: () => write('arctanh(') } },
    { text: "hex", action: { onClick: () => {
      try {
        const n = parseFloat(input);
        if (isNaN(n) || !Number.isInteger(n) || n < 0) {
          throw new Error("Input must be a non-negative integer");
        }
        setInput(n.toString(16).toUpperCase());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Invalid expression');
        setResult(null);
      }
    } } },
    { text: "RanInt", action: { onClick: () => write("RandInt( , )") } },
    { text: "Ran#", action: { onClick: () => write("rand()") } },
    { text: "GCD", action: { onClick: () => write("GCD( , )") } },
    { text: "LCM", action: { onClick: () => write("LCM( , )") } },
    { text: "×10^x", action: { onClick: () => write('e+') } },
    { text: "×10^-x", action: { onClick: () => write('e-') } },
    { text: "%-dec", action: { onClick: () => {
      setInput(input.trim());
      const isPercentage = input.endsWith("%");
      const numericValue = parseFloat(isPercentage ? input.slice(0, -1) : input);
      try {
        if (isNaN(numericValue)) {
          throw new Error("Invalid input: Please enter a valid number");
        }
        if (isPercentage) {
          if (numericValue < 0 || numericValue > 100) {
            throw new Error("Percentage must be between 0% and 100%");
          }
          return (numericValue / 100).toString();
        } else {
          if (numericValue < 0 || numericValue > 1) {
            throw new Error("Decimal must be between 0 and 1");
          }
          return (numericValue * 100).toString() + "%";
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Invalid expression');
        setResult(null);
      }
    } } },
    { text: "sci", action: { onClick: () => {
      const numberValue = parseFloat(input);
      try {
        if (isNaN(numberValue)) {
          throw new Error("Invalid input: Please enter a valid number");
        }
        setInput(numberValue.toExponential().toString());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Invalid expression');
        setResult(null);
      }
    } } },
  ]

  return (
    <div className={styles.calculatorCasing}>
      <div className={styles.section}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputScreen}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Expression"
          />
          <button className={styles.calculateButton} onClick={calculate}>
            =
          </button>
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={shift} onChange={() => setShift(prev => !prev)} />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={`${styles.section} ${styles.gridItemContainer}`}>
        {(shift ? altGridItems : funcGridItems).map((item, index) => (
          <GridItem
            key={`${shift ? 'alt' : 'func'}-${index}`}
            text={item.text}
            action={item.action}
          />
        ))}
      </div>
      <div className={`${styles.section} ${styles.gridItemContainer}`}>
        {numGridItems.map((item, index) => (
          <GridItem
            key={`func-${index}`}
            text={item.text}
            action={item.action}
          />
        ))}
      </div>
    </div>
  )
}

const CalculatorPage = () => {
  return (
    <div className="page-wrap">
      <div className={styles.flexPage}>
        <Calculator/>
        <div className={styles.rightParagraph}>
          Notes for Users
          <ol className="list-decimal list-inside pl-5">
            <li>X^-1 (Reciprocal): Computes (1/x).</li>
            <li>Σ(end ,start, step): summation over a range </li>
            <li>nPr(n, r): Permutations n! / (n - r)!.</li>
            <li>nCr(n, r): Combinations n! / (r!(n - r)!).</li>
            <li>ⁿ√x (Nth Root): nrt(x, n).</li>
            <li>lognY (Custom Logarithm): lognY(base, y).</li>
            <li>
              %-dec (Percentage/Decimal Toggle): Converts between decimal and percentage.
              <ul className="list-disc list-inside pl-5">
                <li>Fails if input is outside 0–100% or 0–1 decimal.</li>
                <li>User Beware, % percentage and % modulo uses the same symbol</li>
              </ul>
            </li>
            <li>sci (Scientific Notation): Converts the current input to exponential format</li>
            <li>×10^x/×10^-x (Scientific Exponent): Appends e+ or e- to the input.</li>
            <li>
              binary/hex: Converts the input to binary/hexadecimal.
              <ul className="list-disc list-inside pl-5">
                <li>Requires a non-negative integer.</li>
              </ul>
            </li>
            <li>Inverse Hyperbolic Functions (asinh, acosh, atanh): Compute the inverse of hyperbolic functions</li>
            <li>floor: Round down to the nearest integer.</li>
            <li>ceil: Round up to the nearest integer.</li>
            <li>mod: Modulo operator %, computes the remainder.</li>
            <li>RanInt(start, end): Random Integer in a range.</li>
            <li>Ran#: Random number between 0 to 1.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
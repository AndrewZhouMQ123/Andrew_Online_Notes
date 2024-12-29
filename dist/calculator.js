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
const calculator = {
    ans: 0,
    parse(expression) {
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
};
export {};
//# sourceMappingURL=calculator.js.map
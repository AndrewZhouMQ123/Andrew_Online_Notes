import CodeBlock from "../components/CodeBlock";
export const javascriptCheatSheetData = [
  {
    title: 'Variables (let, const, var)',
    content: (
      <ul>
        {['let (block-scoped, mutable)', 'const (block-scoped, immutable)', 'var (function-scoped, discouraged)'].map((value) => (
          <li key={value}>
            <code>{value}</code>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Loops',
    content: (
      <ul>
        <li>
          <CodeBlock code={`while (condition) {\n  // do something\n}`} />
        </li>
        <li>
          <CodeBlock code={`do \n  statement\nwhile (condition);`} />
        </li>
        <li>
          <CodeBlock code={`for (initialize; condition; increment) {\n  // do something\n}`} />
        </li>
        <li>
          <CodeBlock code={`for (let key in object) {\n  // do something\n}`} />
        </li>
        <li>
          <CodeBlock code={`for (variable of iterable) {\n  // do something\n}`} />
        </li>
      </ul>
    ),
  },
  {
    title: 'Objects',
    content: (
      <ul>
        <li>
          <CodeBlock
            code={`const user = {
  id: "1",
  name: "Andrew",
  role: "Admin",
};`}
          />
        </li>
        <li>
          <CodeBlock code={`const keys = Object.keys(user); // [id, name, role]`} />
        </li>
      </ul>
    ),
  },
  {
    title: 'Arrays',
    content: (
      <ul>
        <li>
          <CodeBlock code={`let arr = new Array();\nlet arr = [];`} />
        </li>
        <li>
          <CodeBlock
            code={`let arr = ["Apple", "Banana", "Pear"];\nlet arr = ["Apple", { name: "Andrew" }, true, function() { console.log("Hello World") } ];`}
          />
        </li>
      </ul>
    ),
  },
  {
    title: 'Functions',
    content: (
      <ul>
        <li>
          <CodeBlock code={`function greet(name) {\n  return \`Hello, \${name}!\`;\n}`} />
        </li>
        <li>
          <CodeBlock code={`const greet = function(name) {\n  return \`Hello, \${name}!\`;\n}`} />
        </li>
        <li>
          <CodeBlock code={`const greet = (name) => {\n  return \`Hello, \${name}!\`;\n}`} />
        </li>
      </ul>
    ),
  },
  {
    title: 'Error Handling',
    content: (
      <ul>
        {['Error', 'AggregateError', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'].map(
          (error) => (
            <li key={error}>
              <code>{error}</code>
            </li>
          )
        )}
      </ul>
    ),
  },
];
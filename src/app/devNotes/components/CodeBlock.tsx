// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = 'javascript' }: CodeBlockProps) => (
  <SyntaxHighlighter language={language} style={vscDarkPlus}>
    {code}
  </SyntaxHighlighter>
);

export default CodeBlock;
"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SelectorsTable from './components/SelectorsTable';
import PropertiesTable from './components/PropertiesTable';
import DataTable from './components/dataTable';
import FuncTable from './components/funcTable';
import AtRuleTable from './components/AtRuleTable';
import KeyWordTable from './components/KeyWordTable';
import { cssSelectors, cssProperties, pseudoClasses, pseudoElements, cssDatatype, cssFunctions, cssAtRules, cssKeywords } from './data/cssdoc';
import { handleSave } from '@/api/generatePDF';
import PlayButton from '@/components/textToSpeechBtn';
import SyntaxDiagram from './components/SyntaxDiagram';
import BoxModelDiagram from './components/BoxModelDiagram';
import Image from 'next/image';

const IntroPage = () => {
  const code = `
    1 body {
    2   font-family: Arial, sans-serif;
    3   background-color: red;
    4   margin: 0;
    5   padding: 0;
    6 }
    7 .center-box{
    8   display: flex;
    9   justify-content: center;
    10  align-items: center;
    11 }
  `;

  return (
    <div className="page-wrap">
      <PlayButton/>
      <div className="white-board">
        <span className="blog-title">CSS Cheat Sheet</span>
        <p style={{textTransform: "none", textShadow: "none"}}>
          CSS {'('}Cascading Style Sheets{')'}: A core web language used to define the presentation of HTML
          or XML documents across various media. It is standardized by the W3C and now developed modularly,
          with individual CSS modules having version numbers {'('}e.g., CSS Color Module Level 5{')'}.
          Versioning like CSS3 has been replaced by periodic W3C snapshots of stable module states.
        </p>
      </div>
      <SyntaxDiagram/>
      <div className="white-board">
        <span className='blog-title'>Example Code Snippet</span>
        <SyntaxHighlighter language="css" style={vscDarkPlus} customStyle={{ textTransform: "none", textShadow: "none" }}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className='horizontal-wrap'>
        <div>
          <span className="blog-title">Box Model</span>
          <BoxModelDiagram/>
        </div>
        <div style={ {display: 'flex', flexDirection: 'column', width: '100%',}}>
          <div style={{margin: 10,}}>
            <span className="blog-title" style={{textAlign: 'center',}}>Main Axis Column</span>
            <Image src="/mainaxiscol.png" style={{width: '100%'}} width={600} height={400} alt="html page main axis col"/>
          </div>
          <div style={{margin: 10,}}>
            <span className="blog-title" style={{textAlign: 'center',}}>Main Axis Row</span>
            <Image src="/mainaxisrow.png" style={{width: '100%'}} width={600} height={400} alt="html page main axis row"/>
          </div>
        </div>
      </div>
      <p style={{ fontStyle: 'italic', textAlign: 'right', fontSize: '0.8em', marginTop: '20px' }}>
        Built with <span className="glitter-title">Canvas API</span>
      </p>
    </div>
  );
}

const SelectorsPage = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <SelectorsTable data={cssSelectors} title="CSS Selectors" onSave={handleSave} />
      <PropertiesTable data={cssProperties} title="CSS Properties" onSave={handleSave} />
      <SelectorsTable data={pseudoClasses} title="Pseudo-classes" onSave={handleSave} />
      <SelectorsTable data={pseudoElements} title="Pseudo-elements" onSave={handleSave} />
    </div>
  );
};

const LogicsPage = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <DataTable data={cssDatatype} title="CSS Data Types" onSave={handleSave} />
      <FuncTable data={cssFunctions} title="CSS Functions" onSave={handleSave} />
      <AtRuleTable data={cssAtRules} title="CSS At-rules" onSave={handleSave} />
      <KeyWordTable data={cssKeywords} title="CSS Keywords" onSave={handleSave} />
    </div>
  );
}

export default function CSSCore() {
  return (
    <div>
      <IntroPage />
      <SelectorsPage />
      <LogicsPage />
    </div>
  );
}
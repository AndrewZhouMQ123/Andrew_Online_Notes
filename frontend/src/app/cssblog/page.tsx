"use client";
import Image from 'next/image';
import React from 'react';
import SelectorsTable from './components/SelectorsTable';
import PropertiesTable from './components/PropertiesTable';
import { cssSelectors, cssProperties } from './data/cssdoc';
import { handleSave } from '@/api/generatePDF';
import PlayButton from '@/app/components/textToSpeechBtn';
import DiagramComponent from './components/Diagrams';

const SelectorsPage: React.FC = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <span className="blog-title">CSS Cheat Sheet</span>
      <h2>CSS Syntax</h2>
      <p className="white-board">
        CSS {'('}ascading Style Sheets{')'}: A core web language used to define the presentation of HTML
        or XML documents across various media. It is standardized by the W3C and now developed modularly,
        with individual CSS modules having version numbers {'('}e.g., CSS Color Module Level 5{')'}.
        Versioning like CSS3 has been replaced by periodic W3C snapshots of stable module states.
      </p>
      <DiagramComponent />
      <canvas id="css-syntax" width="1000px" height="170px"></canvas>
      <p style={{ fontStyle: 'italic', textAlign: 'right', fontSize: '0.8em', marginTop: '20px' }}>
        Built with <span className="blog-title">Canvas API</span>
      </p>

      <div className="horizontal-wrap">
        <div>
          <h2>Box Model</h2>
          <canvas id="box-model" width="500px" height="350px"></canvas>
        </div>
        <div className="images-container">
        <div className="image-block">
          <h2>Main Axis Column</h2>
          <Image src="/mainaxiscol.png" alt="html page main axis col"/>
        </div>
        <div className="image-block">
          <h2>Main Axis Row</h2>
          <Image src="/mainaxisrow.png" alt="html page main axis row"/>
        </div>
        </div>
      </div>
      <SelectorsTable data={cssSelectors} title="CSS Selectors" onSave={handleSave} />
      <PropertiesTable data={cssProperties} title="CSS Properties" onSave={handleSave} />
    </div>
  );
};

const CodeSnippet = () => {
  return (
    <div className="page-wrap">
      <h2>Code Snippet</h2> 
      <pre className="language-css">
        <code>
          <span className="line-number">1</span> body {'{'}<br/>
          <span className="line-number">2</span>   font-family: Arial, sans-serif;<br/>
          <span className="line-number">3</span>   background-color: red;<br/>
          <span className="line-number">4</span>   margin: 0;<br/>
          <span className="line-number">5</span>   padding: 0;<br/>
          <span className="line-number">6</span> {'}'}<br/>
          <span className="line-number">7</span> .center-box{' {'}<br/>
          <span className="line-number">8</span>   display: flex;<br/>
          <span className="line-number">9</span>   justify-content: center;<br/>
          <span className="line-number">10</span>   align-items: center;<br/>
          <span className="line-number">11</span> {'}'}<br/>
        </code>
      </pre>          
    </div>
  );
}

export default function CSSBlog() {
  return (
    <div>
      <SelectorsPage />
      <CodeSnippet />
    </div>
  );
}
"use client";
import HTMLelTable from '../components/HTMLelTable';
import { metadata, sectionheadings, inlines, formElements, mediaElements, tableElements } from '../data/htmldata';
import htmlEntities from '../data/htmlentities';
import HTMLEntitesTable from '../components/HTMLEntitiesTable';
import { globalAttributes } from '../data/extras';
import { AdditionalAttributesSection, EventHandlerAttributesSection } from '../components/Extras';
import HTMLGlobalsTable from '../components/HTMLGlobalsTable';
import PlayButton from '@/components/textToSpeechBtn';
import { handle2TSave, handle3TSave } from '@/app/api/generatePDF';
import SyntaxHighlighter from 'react-syntax-highlighter';

const IntroPage = () => {
  const code = `
    1 <div>
    2   <h1>Title</h1>
    3   <p>This is a paragraph inside a div.</p>
    4 </div>
  `;

  return (
    <div className="page-wrap">
      <span className="blog-title">HTML Cheat Sheet</span>
      <PlayButton />
      <div className="white-board">
        <p style={{ textTransform: "none", textShadow: "none" }}>
          HTML (HyperText Markup Language) is the most basic building block of the Web.
          It defines the meaning and structure of web content.
          &quot;Hypertext&quot; refers to links that connect web pages to one another,
          either within a single website or between websites.
        </p>
      </div>

      <div className="white-board">
        <h2>HTML Syntax</h2>
        <ul>
          <li>
            <SyntaxHighlighter language="html" customStyle={{ textShadow: "none" }}>
              {`<!DOCTYPE html>`}
            </SyntaxHighlighter>
            at the top level declares the document type and version of HTML.
          </li>
          <li>Space and indentation in code are ignored in HTML. They only affect readability.</li>
          <li>HTML elements are the building blocks of HTML. Each element begins with an opening tag and ends with a closing tag</li>
          <li>
            Void elements have self-enclosing tags (no closing tag) and no content.
            <SyntaxHighlighter language="html" customStyle={{ textTransform: "none", textShadow: "none" }}>
              {`<img src="image.jpg" alt="Description">`}
            </SyntaxHighlighter>
          </li>
          <li>
            The head section is for code that will not be displayed in the browser.
          </li>
          <li>
            The body section is for code that will be rendered as content in the browser.
          </li>
          <li>
            HTML enables elements to be nested within other elements.
            <SyntaxHighlighter language="html" customStyle={{ textTransform: "none", textShadow: "none" }}>
              {code}
            </SyntaxHighlighter>
          </li>
          <li>
            Comments are written like this:
            <SyntaxHighlighter language="html" customStyle={{ textTransform: "none", textShadow: "none" }}>
              {`<!-- This is a comment -->`}
            </SyntaxHighlighter>
          </li>
          <li>
            JavaScript scripts are preferably imported at the end of the body so that HTML is rendered first.
            Otherwise, loading scripts could delay HTML content, and the web page may appear disoriented.
          </li>
        </ul>
      </div>
    </div>
  );
};

const ElPage = () => {

  return (
    <div className="page-wrap">
      <HTMLelTable data={metadata} title="HTML metadata" onSave={handle3TSave}/>
      <HTMLelTable data={sectionheadings} title="HTML Section Headings" onSave={handle3TSave}/>
      <HTMLelTable data={inlines} title="HTML Inlines" onSave={handle3TSave}/>
      <HTMLelTable data={formElements} title="HTML Form Elements" onSave={handle3TSave}/>
      <HTMLelTable data={mediaElements} title="HTML Media Elements" onSave={handle3TSave}/>
      <HTMLelTable data={tableElements} title="HTML Table Elements" onSave={handle3TSave}/>
    </div>
  );
};

const GlobalsPage = () => {
  return (
    <div className="page-wrap">
      <HTMLEntitesTable data={htmlEntities} title="HTML Entities" onSave={handle3TSave}/>
      <HTMLGlobalsTable data={globalAttributes} title="HTML Global Attributes" onSave={handle2TSave}/>
    </div>
  );
};

const AttriPage = () => {

  return (
    <div className="page-wrap">
      <AdditionalAttributesSection/>
      <EventHandlerAttributesSection/>
    </div>
  );
};

export default function HTMLCore() {
  return (
    <div>
      <IntroPage/>
      <ElPage/>
      <GlobalsPage/>
      <AttriPage/>
    </div>
  );
}
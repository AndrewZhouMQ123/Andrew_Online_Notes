const pageWrapDiv = document.querySelector('#html-elements') as HTMLDivElement;

const metadata = [
  {
    element: "&lt;html&gt;",
    attributes: "global attributes, xmlns",
    desc: "Root element of an HTML document. All other elements must be descendants.",
  },
  {
    element: "&lthead&gt;",
    attributes: "global attributes",
    desc: "Contains metadata and info not displayed in the browser: title, JS, CSS, favicons.",
  },
  {
    element: "&lt;title&gt;",
    attributes: "global attributes",
    desc: "Defines the document’s title shown in the browser’s title bar or tab.",
  },
  {
    element: "&lt;base&gt;",
    attributes: "global attributes, href, target",
    desc: "Specifies the base URL for relative URLs in the document. Only one per document.",
  },
  {
    element: "&lt;link&gt;",
    attributes: "global attributes, href, hreflang, rel, disabled, title, type, media, sizes, imagesizes, crossorigin, imagesrcset, integrity, as, blocking, fetchpriority, referrerpolicy",
    desc: "Defines relationships with external resources: stylesheets, favicons, icons, etc.",
  },
  {
    element: "&lt;meta&gt;",
    attributes: "global attributes, charset, content, http-equiv, media, name",
    desc: "Represents metadata that other HTML elements cannot represent: <base>, <link>, <script>, <style>, or <title>.",
  },
  {
    element: "&lt;style&gt;",
    attributes: "global attributes, blocking, media, nonce, title",
    desc: "Contains CSS for the document or part of it.",
  },
  {
    element: "&lt;script&gt;",
    attributes: "global attributes, async, attributionsrc, blocking, crossorigin, defer, fetchpriority, integrity, nomodule, nonce, referrerpolicy, src, type",
    desc: "Contains executable code, usually JavaScript. Can also contain WebGL, JSON, etc.",
  },
];

const metatable = pageWrapDiv.querySelector('#metadata') as HTMLTableElement;
const metatbody = metatable.querySelector('tbody') as HTMLTableSectionElement;

metadata.forEach(({element, attributes, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${element}</code></td>
  <td>${attributes}</td>
  <td>${desc}</td>
  `;
  metatbody.appendChild(row);
});

const sectionheadings = [
  {
    element: "&lt;h1&gt; - &lt;h6&gt;",
    attributes: "global attributes",
    desc: "Defines section headings, from largest to smallest.",
  },
  {
    element: "&lt;p&gt;",
    attributes: "global attributes",
    desc: "Groups related content like text, images, or form fields.",
  },
  {
    element: "&lt;blockquote&gt;",
    attributes: "global attributes, cite",
    desc: "Indicates a quotation, often with indentation. Use the `cite` attribute for the source.",
  },
  {
    element: "&lt;cite&gt;",
    attributes: "global attributes",
    desc: "Marks the title of a cited work.",
  },
  {
    element: "&lt;ol&gt;",
    attributes: "global attributes",
    desc: "Defines an ordered list of items.",
  },
  {
    element: "&lt;ul&gt;",
    attributes: "global attributes",
    desc: "Defines an unordered list of items.",
  },
  {
    element: "&lt;li&gt;",
    attributes: "global attributes",
    desc: "Defines an item in an ordered or unordered list.",
  },
  {
    element: "&lt;dl&gt;",
    attributes: "global attributes",
    desc: "Defines a description list for terms and their definitions.",
  },
  {
    element: "&lt;dt&gt;",
    attributes: "global attributes",
    desc: "Defines a term in a description list.",
  },
  {
    element: "&lt;dd&gt;",
    attributes: "global attributes",
    desc: "Defines the description for the preceding term in a description list.",
  },
];

const headingtable = pageWrapDiv.querySelector('#headings') as HTMLTableElement;
const headingtbody = headingtable.querySelector('tbody') as HTMLTableSectionElement;

sectionheadings.forEach(({element, attributes, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${element}</code></td>
  <td>${attributes}</td>
  <td>${desc}</td>
  `;
  headingtbody.appendChild(row);
});

const inlines = [
  {
    element: "&lt;a&gt;",
    attributes: "global attributes",
    desc: "Anchor element, with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.",
  },
  {
    element: "&lt;strong&gt;",
    attributes: "global attributes",
    desc: "Indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.",
  },
  {
    element: "&lt;em&gt;",
    attributes: "global attributes",
    desc: "Marks text that has stress emphasis. Can be nested, with each level of nesting indicating a greater degree of emphasis.",
  },
  {
    element: "&lt;mark&gt;",
    attributes: "global attributes",
    desc: "Represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.",
  },
  {
    element: "&lt;abbr&gt;",
    attributes: "global attributes",
    desc: "Represents an abbreviation or acronym.",
  },
  {
    element: "&lt;code&gt;",
    attributes: "global attributes",
    desc: "Displays code snippets.",
  },
  {
    element: "&lt;pre&gt;",
    attributes: "global attributes",
    desc: "Represents preformatted text which is to be presented exactly as written in the HTML file. By default, it is a block-level element, i.e., its default display value is block.",
  },
  {
    element: "&lt;span&gt;",
    attributes: "global attributes",
    desc: "Generic inline container for phrasing content, which does not inherently represent anything. Inline-level element.",
  },
  {
    element: "&lt;br&gt;",
    attributes: "global attributes",
    desc: "Produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.",
  },
];

const inlinetable = pageWrapDiv.querySelector('#inline') as HTMLTableElement;
const inlinetbody = inlinetable.querySelector('tbody') as HTMLTableSectionElement;

inlines.forEach(({element, attributes, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${element}</code></td>
  <td>${attributes}</td>
  <td>${desc}</td>
  `;
  inlinetbody.appendChild(row);
});

const formElements = [
  {
    element: "&lt;form&gt;",
    attributes: "global attributes, accept-charset, autocapitalize, autocomplete, name, rel, action, enctype, method, novalidate, target",
    desc: "Represents a document section for taking user input using interactive controls.",
  },
  {
    element: "&lt;input&gt;",
    attributes: "global attributes, type: {button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week}",
    desc: "Used to create interactive controls for web-based forms.",
  },
  {
    element: "&lt;button&gt;",
    attributes: "global attributes, autofocus, command, commandfor, disabled, form, formaction, formenctype, formmethod, formnovalidate, formtarget, name, popovertarget, popovertargetaction, type, value",
    desc: "A button can be pressed and it performs an action when pressed.",
  },
  {
    element: "&lt;label&gt;",
    attributes: "global attributes, for",
    desc: "Represents a caption for an item in a user interface.",
  },
  {
    element: "&lt;textarea&gt;",
    attributes: "global attributes, autocapitalize, autocomplete, autocorrect, autofocus, cols, dirname, disabled, form, maxlength, minlength, name, placeholder, readonly, required, rows, spellcheck, wrap",
    desc: "Represents a multi-line plain-text editing control, free-form text.",
  },
  {
    element: "&lt;select&gt;",
    attributes: "global attributes, autocomplete, autofocus, disabled, form, multiple, name, required, size",
    desc: "Represents a control that provides a menu of options.",
  },
  {
    element: "&lt;option&gt;",
    attributes: "global attributes, disabled, label, selected, value",
    desc: "Used to define an item contained in a &lt;select&gt;, a &lt;optgroup&gt;, or a &lt;datalist&gt; element.",
  },
  {
    element: "&lt;fieldset&gt;",
    attributes: "global attributes, disabled, form, name",
    desc: "Used to group several controls as well as labels within a web form.",
  },
];

const formtable = pageWrapDiv.querySelector('#forms') as HTMLTableElement;
const formtbody = formtable.querySelector('tbody') as HTMLTableSectionElement;

formElements.forEach(({element, attributes, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${element}</code></td>
  <td>${attributes}</td>
  <td>${desc}</td>
  `;
  formtbody.appendChild(row);
});

const mediaElements = [
  {
    element: "&lt;img&gt;",
    attributes: "global attributes, alt, attribution, src, crossorigin, decoding, elementtiming, fetchpriority, height, ismap, loading, referrerpolicy, sizes, srcset, width, usemap",
    desc: "Embeds an image into the document.",
  },
  {
    element: "&lt;audio&gt;",
    attributes: "global attributes, autoplay, controls, controlslist, crossorigin, disableremoteplayback, loop, muted, preload, src",
    desc: "Used to embed sound content in documents.",
  },
  {
    element: "&lt;video&gt;",
    attributes: "global attributes, autoplay, controls, controlslist, crossorigin, disablepictureinpicture, disableremoteplayback, height, loop, muted, playsinline, poster, preload, src, width",
    desc: "Embeds a media player which supports video playback into the document.",
  },
  {
    element: "&lt;source&gt;",
    attributes: "global attributes, type, src, srcset, sizes, media, height, width",
    desc: "Specifies one or more media resources for the &lt;picture&gt;, &lt;audio&gt;, and &lt;video&gt; elements. It is a void element, which means that it has no content and does not require a closing tag.",
  },
  {
    element: "&lt;picture&gt;",
    attributes: "global attributes",
    desc: "Contains zero or more &lt;source&gt; elements and one &lt;img&gt; element to offer alternative versions of an image for different display/device scenarios.",
  },
  {
    element: "&lt;track&gt;",
    attributes: "global attributes, default, kind, label, src, srclang",
    desc: "Used as a child of the media elements, &lt;audio&gt; and &lt;video&gt;. Each &lt;track&gt; element lets you specify a timed text track (or time-based data) that can be displayed in parallel with the media element, for example to overlay subtitles or closed captions on top of a video or alongside audio tracks.",
  },
  {
    element: "&lt;iframe&gt;",
    attributes: "global attributes, allow, allowfullscreen, allowpaymentrequest, browsingtopics, credentialless, csp, height, loading, name, referrerpolicy, sandbox, src, srcdoc, width",
    desc: "Represents a nested browsing context, embedding another HTML page into the current one. Consumes significant memory and other computing resources — check for performance issues.",
  },
  {
    element: "&lt;canvas&gt;",
    attributes: "global attributes, height, width",
    desc: "Use with either the canvas scripting API or the WebGL API to draw graphics and animations.",
  },
];

const mediatable = pageWrapDiv.querySelector('#media') as HTMLTableElement;
const mediatbody = mediatable.querySelector('tbody') as HTMLTableSectionElement;

mediaElements.forEach(({element, attributes, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${element}</code></td>
  <td>${attributes}</td>
  <td>${desc}</td>
  `;
  mediatbody.appendChild(row);
});

const tableElements = [
  {
    element: "&lt;table&gt;",
    attributes: "global attributes",
    desc: "Represents 2D tabular data: rows × columns.",
  },
  {
    element: "&lt;thead&gt;",
    attributes: "global attributes",
    desc: "Encapsulates a set of table rows (&lt;tr&gt; elements), indicating that they comprise the head of a table with information about the table's columns.",
  },
  {
    element: "&lt;tbody&gt;",
    attributes: "global attributes",
    desc: "Encapsulates a set of table rows (&lt;tr&gt; elements), indicating that they comprise the body of a table's (main) data.",
  },
  {
    element: "&lt;tfoot&gt;",
    attributes: "global attributes",
    desc: "Encapsulates a set of table rows (&lt;tr&gt; elements), indicating that they comprise the foot of a table with information about the table's columns.",
  },
  {
    element: "&lt;tr&gt;",
    attributes: "global attributes",
    desc: "Defines a row of cells in a table. The row's cells can then be established using a mix of &lt;td&gt; (data cell) and &lt;th&gt; (header cell) elements.",
  },
  {
    element: "&lt;th&gt;",
    attributes: "global attributes, abbr, colspan, headers, rowspan, scope",
    desc: "Defines a cell as the header of a group of table cells and may be used as a child of the &lt;tr&gt; element.",
  },
  {
    element: "&lt;td&gt;",
    attributes: "global attributes, colspan, headers, rowspan",
    desc: "Defines a cell of a table that contains data and may be used as a child of the &lt;tr&gt; element.",
  },
  {
    element: "&lt;caption&gt;",
    attributes: "global attributes",
    desc: "Specifies the caption (or title) of a table, providing the table an accessible description.",
  },
];

const tablestable = pageWrapDiv.querySelector('#tables') as HTMLTableElement;
const tablestbody = tablestable.querySelector('tbody') as HTMLTableSectionElement;

tableElements.forEach(({element, attributes, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${element}</code></td>
  <td>${attributes}</td>
  <td>${desc}</td>
  `;
  tablestbody.appendChild(row);
});

const globalAttributes = [
  {
    attribute: "accesskey",
    desc: "Hint for keyboard shortcuts; space-separated list of characters.",
  },
  {
    attribute: "anchor",
    desc: "Anchors a positioned element to another using its ID.",
  },
  {
    attribute: "autocapitalize",
    desc: "Controls automatic capitalization of input text.",
  },
  {
    attribute: "autocorrect",
    desc: "Enables or disables automatic spelling corrections.",
  },
  {
    attribute: "autofocus",
    desc: "Automatically focuses the element on page load (boolean).",
  },
  {
    attribute: "class",
    desc: "Space-separated list of classes for CSS/JavaScript targeting.",
  },
  {
    attribute: "contenteditable",
    desc: "Specifies if the element is editable by the user.",
  },
  {
    attribute: "data-*",
    desc: "Custom data attributes for passing proprietary data between HTML and DOM.",
  },
  {
    attribute: "dir",
    desc: "Specifies text direction: <code>ltr</code>, <code>rtl</code>, or <code>auto</code>.",
  },
  {
    attribute: "draggable",
    desc: "Indicates whether the element can be dragged (true/false) using the Drag and Drop API.",
  },
  {
    attribute: "enterkeyhint",
    desc: "Hints what action label (or icon) to present for the enter key on virtual keyboards.",
  },
  {
    attribute: "exportparts",
    desc: "Exports shadow parts from a nested shadow tree into a containing light tree.",
  },
  {
    attribute: "hidden",
    desc: "Indicates the element is not relevant or hidden from the user (e.g., during login).",
  },
  {
    attribute: "id",
    desc: "Defines a unique identifier, which must be unique within the document.",
  },
  {
    attribute: "inert",
    desc: "Prevents user input events from interacting with the element (boolean).",
  },
  {
    attribute: "inputmode",
    desc: "Specifies the virtual keyboard configuration for editable content (e.g., <input> elements).",
  },
  {
    attribute: "is",
    desc: "Specifies that an element should behave like a registered custom-built element.",
  },
  {
    attribute: "itemid",
    desc: "Unique, global identifier for an item in the HTML Microdata feature.",
  },
  {
    attribute: "itemprop",
    desc: "Used to add properties to an item in HTML Microdata.",
  },
  {
    attribute: "itemref",
    desc: "Associates properties with items that are not direct descendants of an element with the itemscope attribute.",
  },
  {
    attribute: "itemscope",
    desc: "Specifies the scope of an item in HTML Microdata and the vocabulary used.",
  },
  {
    attribute: "itemtype",
    desc: "Defines the vocabulary URL used to describe item properties in HTML Microdata.",
  },
  {
    attribute: "lang",
    desc: "Defines the language for non-editable elements or for editable content (BCP 47 format).",
  },
  {
    attribute: "nonce",
    desc: "Cryptographic nonce used by Content Security Policy (CSP) to determine fetch permissions.",
  },
  {
    attribute: "part",
    desc: "Specifies the part names of an element for use with shadow DOM styling.",
  },
  {
    attribute: "popover",
    desc: "Designates an element as a popover (invisible until triggered by another element or API call).",
  },
  {
    attribute: "role",
    desc: "Defines the semantic meaning of content for assistive technologies like screen readers (ARIA role).",
  },
  {
    attribute: "slot",
    desc: "Assigns an element to a slot in a shadow DOM.",
  },
  {
    attribute: "spellcheck",
    desc: "Defines whether an element's text should be checked for spelling errors (true/false).",
  },
  {
    attribute: "style",
    desc: "Contains CSS styling declarations for the element.",
  },
  {
    attribute: "tabindex",
    desc: "Defines the element's focusability and keyboard navigation order.",
  },
  {
    attribute: "title",
    desc: "Contains advisory information related to the element, often displayed as a tooltip.",
  },
  {
    attribute: "translate",
    desc: "Specifies if an element's text should be translated when the page is localized (yes/no).",
  },
  {
    attribute: "virtualkeyboardpolicy",
    desc: "Controls virtual keyboard behavior for editable content on devices without hardware keyboards (auto/manual).",
  },
  {
    attribute: "writingsuggestions",
    desc: "Controls the browser's writing suggestions in input fields (true/false).",
  },
];

const extraDiv = document.querySelector('#extras') as HTMLDivElement;
const globaltable = extraDiv.querySelector('#globals') as HTMLTableElement;
const globaltbody = globaltable.querySelector('tbody') as HTMLTableSectionElement;

globalAttributes.forEach(({attribute, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${attribute}</code></td>
  <td>${desc}</td>
  `;
  globaltbody.appendChild(row);
});

// Create and append the "Additional attributes" section
const additionalAttributesTitle = document.createElement('span');
additionalAttributesTitle.className = 'blog-title';
additionalAttributesTitle.textContent = 'Additional attributes';
extraDiv.appendChild(additionalAttributesTitle);

const additionalAttributesTextbox = document.createElement('div');
additionalAttributesTextbox.className = 'textbox';

// XML attributes
const xmlAttributesGroup = document.createElement('span');
xmlAttributesGroup.className = 'attribute-group';
xmlAttributesGroup.innerHTML = `
  <strong>XML attributes:</strong>
  <code class="element">xml:lang</code> (specifies the language of the element's content), 
  <code class="element">xml:base</code> (defines a base URI for relative URLs).
`;
additionalAttributesTextbox.appendChild(xmlAttributesGroup);

// ARIA roles
const ariaRolesGroup = document.createElement('span');
ariaRolesGroup.className = 'attribute-group';
ariaRolesGroup.innerHTML = `
  <strong>ARIA roles:</strong>
  <code class="element">role</code> (defines an element's role in the accessibility tree).
`;
additionalAttributesTextbox.appendChild(ariaRolesGroup);

// ARIA attributes
const ariaAttributesGroup = document.createElement('span');
ariaAttributesGroup.className = 'attribute-group';
ariaAttributesGroup.innerHTML = `
  <strong>ARIA attributes:</strong>
  <code class="element">aria-label</code>, <code class="element">aria-labelledby</code>, 
  <code class="element">aria-hidden</code>, <code class="element">aria-expanded</code>, 
  <code class="element">aria-controls</code>, <code class="element">aria-live</code>, 
  <code class="element">aria-disabled</code>, <code class="element">aria-selected</code>, 
  <code class="element">aria-checked</code>, <code class="element">aria-required</code>, 
  <code class="element">aria-invalid</code>.
`;
additionalAttributesTextbox.appendChild(ariaAttributesGroup);

extraDiv.appendChild(additionalAttributesTextbox);

// Create and append the "Event handler attributes" section
const eventHandlerTitle = document.createElement('span');
eventHandlerTitle.className = 'blog-title';
eventHandlerTitle.textContent = 'Event handler attributes';
extraDiv.appendChild(eventHandlerTitle);

const eventHandlerTextbox = document.createElement('div');
eventHandlerTextbox.className = 'textbox';

// Form events
const formEventsGroup = document.createElement('span');
formEventsGroup.className = 'event-group';
formEventsGroup.innerHTML = `
  <strong>Form events:</strong>
  <code class="element">onblur</code>, <code class="element">onchange</code>, <code class="element">onfocus</code>, <code class="element">oninput</code>, 
  <code class="element">oninvalid</code>, <code class="element">onreset</code>, <code class="element">onsubmit</code>
`;
eventHandlerTextbox.appendChild(formEventsGroup);

// Mouse events
const mouseEventsGroup = document.createElement('span');
mouseEventsGroup.className = 'event-group';
mouseEventsGroup.innerHTML = `
  <strong>Mouse events:</strong>
  <code class="element">onclick</code>, <code class="element">ondblclick</code>, <code class="element">onmousedown</code>, <code class="element">onmouseenter</code>, 
  <code class="element">onmouseleave</code>, <code class="element">onmousemove</code>, <code class="element">onmouseover</code>, <code class="element">onmouseout</code>, 
  <code class="element">onmouseup</code>, <code class="element">onmousewheel</code>
`;
eventHandlerTextbox.appendChild(mouseEventsGroup);

// Keyboard events
const keyboardEventsGroup = document.createElement('span');
keyboardEventsGroup.className = 'event-group';
keyboardEventsGroup.innerHTML = `
  <strong>Keyboard events:</strong>
  <code class="element">onkeydown</code>, <code class="element">onkeypress</code>, <code class="element">onkeyup</code>
`;
eventHandlerTextbox.appendChild(keyboardEventsGroup);

// Media events
const mediaEventsGroup = document.createElement('span');
mediaEventsGroup.className = 'event-group';
mediaEventsGroup.innerHTML = `
  <strong>Media events:</strong>
  <code class="element">onabort</code>, <code class="element">oncanplay</code>, <code class="element">oncanplaythrough</code>, <code class="element">ondurationchange</code>, 
  <code class="element">onemptied</code>, <code class="element">onended</code>, <code class="element">onerror</code>, <code class="element">onloadeddata</code>, 
  <code class="element">onloadedmetadata</code>, <code class="element">onloadstart</code>, <code class="element">onpause</code>, <code class="element">onplay</code>, 
  <code class="element">onplaying</code>, <code class="element">onprogress</code>, <code class="element">onratechange</code>, <code class="element">onseeked</code>, 
  <code class="element">onseeking</code>, <code class="element">onstalled</code>, <code class="element">onsuspend</code>, <code class="element">ontimeupdate</code>, 
  <code class="element">onvolumechange</code>, <code class="element">onwaiting</code>
`;
eventHandlerTextbox.appendChild(mediaEventsGroup);

// Drag and drop events
const dragDropEventsGroup = document.createElement('span');
dragDropEventsGroup.className = 'event-group';
dragDropEventsGroup.innerHTML = `
  <strong>Drag and drop events:</strong>
  <code class="element">ondrag</code>, <code class="element">ondragend</code>, <code class="element">ondragenter</code>, 
  <code class="element">ondragleave</code>, <code class="element">ondragover</code>, <code class="element">ondragstart</code>, <code class="element">ondrop</code>
`;
eventHandlerTextbox.appendChild(dragDropEventsGroup);

// Window events
const windowEventsGroup = document.createElement('span');
windowEventsGroup.className = 'event-group';
windowEventsGroup.innerHTML = `
  <strong>Window events:</strong>
  <code class="element">onresize</code>, <code class="element">onscroll</code>, <code class="element">onload</code>, 
  <code class="element">onunload</code>, <code class="element">onshow</code>, <code class="element">ontoggle</code>
`;
eventHandlerTextbox.appendChild(windowEventsGroup);

extraDiv.appendChild(eventHandlerTextbox);

const htmlEntities = [
  { entity: "&amp;", unicode: "&#38;", htmlCode: "&amp;#38;" },
  { entity: "&lt;", unicode: "&#60;", htmlCode: "&amp;#60;" },
  { entity: "&gt;", unicode: "&#62;", htmlCode: "&amp;#62;" },
  { entity: "&quot;", unicode: "&#34;", htmlCode: "&amp;#34;" },
  { entity: "&apos;", unicode: "&#39;", htmlCode: "&amp;#39;" },
  { entity: "&nbsp;", unicode: "&#160;", htmlCode: "&amp;#160;" },
  { entity: "&copy;", unicode: "&#169;", htmlCode: "&amp;#169;" },
  { entity: "&reg;", unicode: "&#174;", htmlCode: "&amp;#174;" },
  { entity: "&eacute;", unicode: "&#233;", htmlCode: "&amp;#233;" },
  { entity: "&deg;", unicode: "&#176;", htmlCode: "&amp;#176;" },
  { entity: "&hellip;", unicode: "&#8230;", htmlCode: "&amp;#8230;" },
  { entity: "&mdash;", unicode: "&#8212;", htmlCode: "&amp;#8212;" },
  { entity: "&times;", unicode: "&#215;", htmlCode: "&amp;#215;" },
  { entity: "&divide;", unicode: "&#247;", htmlCode: "&amp;#247;" },
  { entity: "&laquo;", unicode: "&#171;", htmlCode: "&amp;#171;" },
  { entity: "&raquo;", unicode: "&#187;", htmlCode: "&amp;#187;" },
  { entity: "&bull;", unicode: "&#8226;", htmlCode: "&amp;#8226;" },
];

const entitiesDiv = document.querySelector('#HTML-entities') as HTMLDivElement;
const entitiestable = entitiesDiv.querySelector('#entities') as HTMLTableElement;
const entitiestbody = entitiestable.querySelector('tbody') as HTMLTableSectionElement;

htmlEntities.forEach(({ entity, unicode, htmlCode }) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${entity}</td>
    <td>${unicode}</td>
    <td>${htmlCode}</td>
  `;
  entitiestbody.appendChild(row);
});
export const metadata = [
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

export const sectionheadings = [
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

export const inlines = [
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

export const formElements = [
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

export const mediaElements = [
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

export const tableElements = [
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



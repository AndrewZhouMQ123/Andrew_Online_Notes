export const globalAttributes = [
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

export const additionalAttributesData = [
  {
    title: "XML attributes",
    items: [
      { code: "xml:lang"},
      { code: "xml:base"},
    ],
  },
  {
    title: "ARIA roles",
    items: [
      { code: "role"},
    ],
  },
  {
    title: "ARIA attributes",
    items: [
      { code: "aria-label" },
      { code: "aria-labelledby" },
      { code: "aria-hidden" },
      { code: "aria-expanded" },
      { code: "aria-controls" },
      { code: "aria-live" },
      { code: "aria-disabled" },
      { code: "aria-selected" },
      { code: "aria-checked" },
      { code: "aria-required" },
      { code: "aria-invalid" },
    ],
  },
];

export const eventHandlerAttributesData = [
  {
    title: "Form events",
    items: [
      { code: "onblur" },
      { code: "onchange" },
      { code: "onfocus" },
      { code: "oninput" },
      { code: "oninvalid" },
      { code: "onreset" },
      { code: "onsubmit" },
    ],
  },
  {
    title: "Mouse events",
    items: [
      { code: "onclick" },
      { code: "ondblclick" },
      { code: "onmousedown" },
      { code: "onmouseenter" },
      { code: "onmouseleave" },
      { code: "onmousemove" },
      { code: "onmouseover" },
      { code: "onmouseout" },
      { code: "onmouseup" },
      { code: "onmousewheel" },
    ],
  },
  {
    title: "Keyboard events",
    items: [
      { code: "onkeydown" },
      { code: "onkeypress" },
      { code: "onkeyup" },
    ],
  },
  {
    title: "Media events",
    items: [
      { code: "onabort" },
      { code: "oncanplay" },
      { code: "oncanplaythrough" },
      { code: "ondurationchange" },
      { code: "onemptied" },
      { code: "onended" },
      { code: "onerror" },
      { code: "onloadeddata" },
      { code: "onloadedmetadata" },
      { code: "onloadstart" },
      { code: "onpause" },
      { code: "onplay" },
      { code: "onplaying" },
      { code: "onprogress" },
      { code: "onratechange" },
      { code: "onseeked" },
      { code: "onseeking" },
      { code: "onstalled" },
      { code: "onsuspend" },
      { code: "ontimeupdate" },
      { code: "onvolumechange" },
      { code: "onwaiting" },
    ],
  },
  {
    title: "Drag and drop events",
    items: [
      { code: "ondrag" },
      { code: "ondragend" },
      { code: "ondragenter" },
      { code: "ondragleave" },
      { code: "ondragover" },
      { code: "ondragstart" },
      { code: "ondrop" },
    ],
  },
  {
    title: "Window events",
    items: [
      { code: "onresize" },
      { code: "onscroll" },
      { code: "onload" },
      { code: "onunload" },
      { code: "onshow" },
      { code: "ontoggle" },
    ],
  },
];
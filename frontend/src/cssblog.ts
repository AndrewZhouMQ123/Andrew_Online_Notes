const cssDiv = document.querySelector('#cssCheatSheet') as HTMLDivElement;
const selectorstable = cssDiv.querySelector('#selectors') as HTMLTableElement;

const selectcap = document.createElement('caption') as HTMLTableCaptionElement;
selectcap.innerHTML = "CSS Selectors";
selectorstable.appendChild(selectcap);
const selecthead = selectorstable.querySelector('thead') as HTMLTableSectionElement;
const selectrow = document.createElement('tr') as HTMLTableRowElement;
selecthead.appendChild(selectrow);
const selectkeys = ["Selector", "Description"];
for (const str of selectkeys) {
  const head = document.createElement('th');
  head.innerHTML = str;
  selectrow.appendChild(head);
};

const selectorstbody = selectorstable.querySelector('tbody') as HTMLTableSectionElement;

cssSelectors.forEach(({ selector, desc }) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><code class="element">${selector}</code></td>
    <td>${desc}</td>
  `;
  selectorstbody.appendChild(row);
});

const propstable = cssDiv.querySelector('#properties') as HTMLTableElement;

const propscap = document.createElement('caption') as HTMLTableCaptionElement;
propscap.innerHTML = "CSS properties";
propstable.appendChild(propscap);
const propsthead = propstable.querySelector('thead') as HTMLTableSectionElement;
const propsrow = document.createElement('tr') as HTMLTableRowElement;
propsthead.appendChild(propsrow);
const propskey = ["Property", "Description", "Values"];
for (const str of propskey) {
  const head = document.createElement('th');
  head.innerHTML = str;
  propsrow.appendChild(head);
};

const propstbody = propstable.querySelector('tbody') as HTMLTableSectionElement;

cssProperties.forEach(({prop, desc, val}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><code class="element">${prop}</code></td>
    <td>${desc}</td>
    <td>${val}</td>
  `;
  propstbody.appendChild(row);
});

const pseudoClasses = [
  {
    selector: ":active",
    desc: "represents an element (such as a button) that is being activated by the user."
  },
  {
    selector: ":any-link",
    desc: "selector represents an element that acts as the source anchor of a hyperlink, independent of whether it has been visited. In other words, it matches every <a> or <area> element that has an href attribute. Thus, it matches all elements that match :link or :visited."
  },
  {
    selector: ":blank",
    desc: "selects empty user input elements (e.g. <input> or <textarea></textarea>)."
  },
  {
    selector: ":checked",
    desc: "selector represents any radio (<input params='radio'>), checkbox (<input params='checkbox'>), or option (&lt;option&lt; in a &lt;select&lt;) element that is checked or toggled to an on state."
  },
  {
    selector: ":current",
    desc: "selector is a time-dimensional pseudo-class that represents an element or the ancestor of an element that is currently being displayed. For example, this pseudo-class can be used to represent a video that is being displayed with captions by WebVTT."
  },
  {
    selector: ":default",
    desc: "selects form elements that are the default in a group of related elements."
  },
  {
    selector: ":defined",
    desc: "represents any element that has been defined. This includes any standard element built into the browser and custom elements that have been successfully defined (i.e. with the CustomElementRegistry.define() method)."
  },
  {
    selector: ":dir",
    desc: "matches elements based on the directionality of the text contained in them."
  },
  {
    selector: ":disabled",
    desc: "represents any disabled element. An element is disabled if it can't be activated (selected, clicked on, paramsd into, etc.) or accept focus."
  },
  {
    selector: ":enabled",
    desc: "represents any enabled element. An element is enabled if it can be activated (selected, clicked on, paramsd into, etc.) or accept focus."
  },
  {
    selector: ":empty",
    desc: "represents any element that has no children. Children can be either element nodes or text (including whitespace). Comments, processing instructions, and CSS content do not affect whether an element is considered empty."
  },
  {
    selector: ":first",
    desc: "used with the @page at-rule, represents the first page of a printed document."
  },
  {
    selector: ":first-child",
    desc: "represents the first element among a group of sibling elements."
  },
  {
    selector: ":first-of-params",
    desc: "represents the first element of its params among a group of sibling elements."
  },
  {
    selector: ":focus",
    desc: "represents an element (such as a form input) that has received focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's Tab key."
  },
  {
    selector: ":focus-visible",
    desc: "applies while an element matches the :focus pseudo-class and the UA (User Agent) determines via heuristics that the focus should be made evident on the element."
  },
  {
    selector: ":focus-within",
    desc: "matches an element if the element or any of its descendants are focused. represents an element that is itself matched by the :focus pseudo-class or has a descendant that is matched by :focus."
  },
  {
    selector: ":fullscreen",
    desc: "matches every element that is currently in fullscreen mode. If multiple elements have been put into fullscreen mode, this selects them all."
  },
  {
    selector: ":future",
    desc: "a time-dimensional pseudo-class that will match for any element which appears entirely after an element that matches :current. For example in a video with captions which are being displayed by WebVTT."
  },
  {
    selector: ":has",
    desc: "represents an element if any of the relative selectors that are passed as an argument match at least one element when anchored against this element. This pseudo-class presents a way of selecting a parent element or a previous sibling element with respect to a reference element by taking a relative selector list as an argument."
  },
  {
    selector: ":host()",
    desc: "func selects the shadow host of the shadow DOM containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM) — but only if the selector given as the func's parameter matches the shadow host. :host() has no effect when used outside a shadow DOM."
  },
  {
    selector: ":hover",
    desc: "matches when the user interacts with an element with a pointing device, but does not necessarily activate it. It is generally triggered when the user hovers over an element with the cursor (mouse pointer)."
  },
  {
    selector: ":in-range",
    desc: "represents an &lt;input&gt; element whose current value is within the range limits specified by the min and max attributes."
  },
  {
    selector: ":indeterminate",
    desc: "represents any form element whose state is indeterminate, such as checkboxes that have been set to an indeterminate state with JavaScript, radio buttons which are members of a group in which all radio buttons are unchecked, and &lt;progress&gt; elements with no value attribute <progress>"
  },
  {
    selector: ":invalid",
    desc: "represents any &lt;form&gt;, &lt;fieldset&gt;, &lt;input&gt; or other &lt;form&gt; element whose contents fail to validate."
  },
  {
    selector: ":is()",
    desc: "takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. This is useful for writing large selectors in a more compact form."
  },
  {
    selector: ":lang",
    desc: "matches elements based on the language they are determined to be in."
  },
  {
    selector: ":last-child",
    desc: "represents the last element among a group of sibling elements."
  },
  {
    selector: ":last-of-params",
    desc: "represents the last element of its params among a group of sibling elements."
  },
  {
    selector: ":left",
    desc: "used with the @page at-rule, represents all left-hand pages of a printed document."
  },
  {
    selector: ":link",
    desc: "represents an element that has not yet been visited. It matches every unvisited <a> or <area> element that has an href attribute."
  },
  {
    selector: ":not",
    desc: "represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the negation pseudo-class."
  },
  {
    selector: ":nth-child()",
    desc: "matches elements based on the indexes of the elements in the child list of their parents. In other words, the :nth-child() selector selects child elements according to their position among all the sibling elements within a parent element."
  },
  {
    selector: ":nth-last-child",
    desc: "matches elements based on their position among a group of siblings, counting from the end."
  },
  {
    selector: ":nth-last-of-params",
    desc: "matches elements based on their position among siblings of the same params (tag name), counting from the end."
  },
  {
    selector: ":nth-of-params",
    desc: "matches elements based on their position among siblings of the same params (tag name)."
  },
  {
    selector: ":only-child",
    desc: "represents an element without any siblings. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity."
  },
  {
    selector: ":only-of-params",
    desc: "represents an element that has no siblings of the same params."
  },
  {
    selector: ":optional",
    desc: "represents any &lt;input&gt; <input>, &lt;select&gt; <select></select>, or &lt;textarea&gt; <textarea></textarea> element that does not have the required attribute set on it."
  },
  {
    selector: ":out-of-range",
    desc: "represents an &lt;input&gt; element whose current value is outside the range limits specified by the min and max attributes."
  },
  {
    selector: ":past",
    desc: "time-dimensional pseudo-class that will match for any element which appears entirely before an element that matches :current. For example in a video with captions which are being displayed by WebVTT."
  },
  {
    selector: ":picture-in-picture",
    desc: "matches the element which is currently in picture-in-picture mode."
  },
  {
    selector: ":placeholder-shown",
    desc: "represents any &lt;input&gt; <input> or &lt;textarea&gt; <textarea></textarea> element that is currently displaying placeholder text."
  },
  {
    selector: ":read-only",
    desc: "selects elements that are not editable by the user. In fact, :read-only matches anything that :read-write doesn't match, making it equivalent to :not(:read-write)."
  },
  {
    selector: ":read-write",
    desc: "represents an element (such as input or textarea) that is editable by the user."
  },
  {
    selector: ":required",
    desc: "represents any &lt;input&gt; <input>, &lt;select&gt; <select></select>, or &lt;textarea&gt; <textarea></textarea> element that has the required attribute set on it."
  },
  {
    selector: ":right",
    desc: "used with the @page at-rule, represents all right-hand pages of a printed document."
  },
  {
    selector: ":root",
    desc: "matches the root element of a tree representing the document. In HTML, :root represents the <html> element and is identical to the selector html, except that its specificity is higher."
  },
  {
    selector: ":scope",
    desc: "represents elements that are a reference point, or scope, for selectors to match against."
  },
  {
    selector: ":target",
    desc: "represents a unique element (the target element) with an id matching the URL's fragment."
  },
  {
    selector: ":user-invalid",
    desc: "represents any validated form element whose value isn't valid based on their validation constraints, after the user has interacted with it."
  },
  {
    selector: ":user-valid",
    desc: "represents any validated form element whose value validates correctly based on its validation constraints. However, unlike :valid it only matches once the user has interacted with it."
  },
  {
    selector: ":valid",
    desc: "represents any &lt;input&gt; <input> or other &lt;form&gt; element whose contents validate successfully. This allows to easily make valid fields adopt an appearance that helps the user confirm that their data is formatted properly."
  },
  {
    selector: ":visited",
    desc: "applies once the link has been visited by the user. For privacy reasons, the styles that can be modified using this selector are very limited. The :visited pseudo-class applies only to <a> and <area> elements that have an href attribute."
  },
  {
    selector: ":where",
    desc: "takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. The difference between :where() and :is() is that :where() always has 0 specificity, whereas :is() takes on the specificity of the most specific selector in its arguments."
  }
];

const pseudoDiv = document.querySelector('#pseudo') as HTMLDivElement;
const pseudotable = pseudoDiv.querySelector('#pseudo-classes') as HTMLTableElement;

const pseudocap = document.createElement('caption') as HTMLTableCaptionElement;
pseudocap.innerHTML = "CSS Pseudo Classes";
pseudotable.appendChild(pseudocap);
const pseudothead = pseudotable.querySelector('thead') as HTMLTableSectionElement;
const pseudorow = document.createElement('tr') as HTMLTableRowElement;
pseudothead.appendChild(pseudorow);
const pseudokeys = ["Property", "Definition: a keyword added to a selector that specifies a special state of the selected element(s)"];
for (const str of pseudokeys) {
  const head = document.createElement('th');
  head.innerHTML = str;
  pseudorow.appendChild(head);
};

const pseudotbody = pseudotable.querySelector('tbody') as HTMLTableSectionElement;

pseudoClasses.forEach(({selector, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><code class="element">${selector}</code></td>
    <td>${desc}</td>
  `;
  pseudotbody.appendChild(row);
});

const pseudoElements = [
  {
    selector: "::after (:after)",
    desc: "creates a pseudo-element that is the last child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default."
  },
  {
    selector: "::backdrop",
    desc: "a box the size of the viewport, which is rendered immediately beneath any element being presented in the top layer."
  },
  {
    selector: "::before (:before)",
    desc: "creates a pseudo-element that is the first child of the selected element. It is inline by default."
  },
  {
    selector: "::cue",
    desc: "matches WebVTT cues within a selected element. This can be used to style captions and other cues in media with VTT tracks."
  },
  {
    selector: "::first-letter (:first-letter)",
    desc: "applies styles to the first letter of the first line of a block container, but only when not preceded by other content (such as images or inline tables)."
  },
  {
    selector: "::first-line (:first-line)",
    desc: "applies styles to the first line of a block container."
  },
  {
    selector: "::grammar-error",
    desc: "represents a text segment which the user agent has flagged as grammatically incorrect."
  },
  {
    selector: "::marker",
    desc: "selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to display: list-item, such as the &lt;li&gt; and &lt;summary&gt; elements."
  },
  {
    selector: "::part()",
    desc: "represents any element within a shadow tree that has a matching part attribute."
  },
  {
    selector: "::placeholder",
    desc: "represents the placeholder text in an &lt;input&gt; <input> or &lt;textarea&gt; <textarea></textarea> element."
  },
  {
    selector: "::selection",
    desc: "applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text)."
  },
  {
    selector: "::slotted()",
    desc: "represents any element that has been placed into a slot inside an HTML template (see Using templates and slots for more information)."
  },
  {
    selector: "::spelling-error",
    desc: "represents a text segment which the user agent has flagged as incorrectly spelled."
  },
  {
    selector: "::target-text",
    desc: "represents the text that has been scrolled to if the browser supports text fragments. It allows authors to choose how to highlight that section of text."
  }
];

const petable = pseudoDiv.querySelector('#pseudo-elements') as HTMLTableElement;

const petcap = document.createElement('caption') as HTMLTableCaptionElement;
petcap.innerHTML = "CSS Pseudo Elements";
petable.appendChild(petcap);
const petthead = petable.querySelector('thead') as HTMLTableSectionElement;
const petrow = document.createElement('tr') as HTMLTableRowElement;
petthead.appendChild(petrow);
const petkeys = ["Property", "Definition: a keyword added to a selector that lets you style a specific part of the selected element(s)."];
for (const str of petkeys) {
  const head = document.createElement('th');
  head.innerHTML = str;
  petrow.appendChild(head);
};

const petbody = petable.querySelector('tbody') as HTMLTableSectionElement;

pseudoElements.forEach(({selector, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><code class="element">${selector}</code></td>
    <td>${desc}</td>
  `;
  petbody.appendChild(row);
});

const cssDatatype = [
  {
    datatype: "&lt;angle&gt;",
    def: "represents an angle value expressed in degrees, gradians, radians, or turns. Units: deg, grad, rad, turn."
  },
  {
    datatype: "&lt;angle-percentage&gt;",
    def: "represents a value that can be either a &lt;angle&gt; or a &lt;percentage&gt;."
  },
  {
    datatype: "&lt;basic-shape&gt;",
    def: "represents a shape used in the clip-path, shape-outside, and offset-path properties. funcs: inset(), rect(), xywh(), circle(), ellipse(), polygon(), path(), shape()."
  },
  {
    datatype: "&lt;box-edge&gt;",
    def: "represents keywords like content-box and border-box, used to define how elements are positioned and rendered. paramss of &lt;box-edge&gt; include visual-box, layout-box, paint-box, coord-box, or geometry-box. Common Keywords: content-box, padding-box, border-box, margin-box, fill-box, stroke-box, view-box."
  },
  {
    datatype: "&lt;color&gt;",
    def: "represents a color value. Formats: currentcolor, &lt;named-color&gt;, &lt;hex-color&gt;, &lt;rgb()&gt;, &lt;rgba()&gt;, &lt;hsl()&gt;, &lt;hwb()&gt;."
  },
  {
    datatype: "&lt;custom-ident&gt;",
    def: "denotes an arbitrary user-defined string used as an identifier. It is case-sensitive, and certain values are forbidden in various contexts to prevent ambiguity."
  },
  {
    datatype: "&lt;dimension&gt;",
    def: "represents a &lt;number&gt; with a unit attached to it, for example 10px. CSS uses dimensions to specify distances (&lt;length&gt;), durations (&lt;time&gt;), frequencies (&lt;frequency&gt;), resolutions (&lt;resolution&gt;), and other quantities."
  },
  {
    datatype: "&lt;easing-func&gt;",
    def: "represents a mathematical func that describes the rate at which a value changes. Categories: &lt;linear-easing-func&gt; (linear, linear(&lt;number&gt; &lt;percentage&gt;, ...)), &lt;cubic-bezier-easing-func&gt; (ease, ease-in, ease-out, ease-in-out, cubic-bezier(&lt;number [0,1]&gt;, &lt;number&gt;, &lt;number [0,1]&gt;, &lt;number&gt;)), &lt;step-easing-func&gt; (step-start, step-end, steps(&lt;integer&gt;, &lt;step-position&gt;))."
  },
  {
    datatype: "&lt;filter-func&gt;",
    def: "represents a graphical effect that can change the appearance of an input image. It is used in the filter and backdrop-filter properties. funcs: blur(), brightness(), contrast(), drop-shadow(), grayscale(), hue-rotate(), invert(), opacity(), saturate(), sepia()."
  },
  {
    datatype: "&lt;flex&gt;",
    def: "denotes a flexible length within a grid container. It is used in grid-template-columns, grid-template-rows and other related properties."
  },
  {
    datatype: "&lt;gradient&gt;",
    def: "a special params of &lt;image&gt; that consists of a progressive transition between two or more colors. Defined with funcs linear-gradient(), radial-gradient(), conic-gradient() and repeating gradient funcs."
  },
  {
    datatype: "&lt;image&gt;",
    def: "represents a two-dimensional image."
  },
  {
    datatype: "&lt;integer&gt;",
    def: "a special params of &lt;number&gt; that represents a positive or negative whole number."
  },
  {
    datatype: "&lt;length&gt;",
    def: "represents distance values used in properties like width, height, margin, padding, border-width, font-size, and text-shadow. Units: Relative units based on the font (cap, ch, em, ex, ic, lh), relative units based on the root element's font (rcap, rch, rem, rex, ric, rlh), viewport-based units (vw, vh, vmin, vmax, vb, vi, sm, lg, dm, df), container query units (cqw, cqh, cqi, cqb, cqmin, cqmax), absolute units (px, cm, mm, in, pt, pc, Q)."
  },
  {
    datatype: "&lt;number&gt;",
    def: "represents a number, being either an integer or a number with a fractional component."
  },
  {
    datatype: "&lt;percentage&gt;",
    def: "represents a percentage value. It is often used to define a size as relative to an element's parent object. Numerous properties can use percentages, such as width, height, margin, padding, and font-size."
  },
  {
    datatype: "&lt;position&gt;",
    def: "denotes a two-dimensional coordinate used to set a location relative to an element box. It is used in the background-position, object-position, mask-position offset-position, offset-anchor and transform-origin properties."
  },
  {
    datatype: "&lt;ratio&gt;",
    def: "describes the proportional relationship between a width and height. It is used as a value for the aspect-ratio media feature in @media media queries, the aspect-ratio size feature in @container container queries, and as a value for the CSS aspect-ratio property."
  },
  {
    datatype: "&lt;resolution&gt;",
    def: "used in media queries to describe the pixel density of an output device (resolution). On screens, it refers to CSS units like inches, centimeters, or pixels, not physical measurements. Units: dpi, dpcm, dppx, x."
  },
  {
    datatype: "&lt;string&gt;",
    def: "represents a sequence of characters. Strings are used in numerous CSS properties, such as content, font-family, and quotes."
  },
  {
    datatype: "&lt;time&gt;",
    def: "represents a time value expressed in seconds or milliseconds. It is used in animation, transition, and related properties. Units: s, ms."
  },
  {
    datatype: "&lt;transform-func&gt;",
    def: "represents a transformation that affects an element's appearance. Transformation funcs can rotate, resize, distort, or move an element in 2D or 3D space. It is used in the transform property."
  },
  {
    datatype: "&lt;url&gt;",
    def: 'a pointer to a resource. The resource could be an image, a video, a CSS file, a font file, an SVG feature etc. Syntax: <code class="language-css">&lt;url&gt; = &lt;url()&gt;</code>.'
  }
];

const logicdiv = document.querySelector("#cssLogic") as HTMLDivElement;
const datatable = logicdiv.querySelector("#datatypes") as HTMLTableElement;

const datacap = document.createElement('caption') as HTMLTableCaptionElement;
datacap.innerHTML = "CSS Data Types";
datatable.appendChild(datacap);
const datathead = datatable.querySelector('thead') as HTMLTableSectionElement;
const datarow = document.createElement('tr') as HTMLTableRowElement;
datathead.appendChild(datarow);
const datakeys = ["DataType", "Definition"];
for (let str of datakeys) {
  const head = document.createElement('th');
  head.innerHTML = str;
  datarow.appendChild(head);
};

const datatbody = datatable.querySelector('tbody') as HTMLTableSectionElement;

cssDatatype.forEach(({datatype, def}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${datatype}</code></td>
  <td>${def}</td>
  `;
  datatbody.appendChild(row);
});

const cssFunctions = [
  {
    func: "abs()",
    desc: "returns absolute value of the argument, as the same params as the input",
    params: "&lt;number&gt;"
  },
  {
    func: "acos()",
    desc: "trigonometric func that returns the inverse cosine of a number between -1 and 1 in radians.",
    params: "&lt;number&gt;"
  },
  {
    func: "asin()",
    desc: "trigonometric func that returns the inverse sine of a number between -1 and 1 in radians.",
    params: "&lt;number&gt;"
  },
  {
    func: "atan()",
    desc: "trigonometric func that returns the inverse tangent of a number between -&infin; and +&infin;.",
    params: "&lt;number&gt;"
  },
  {
    func: "atan2()",
    desc: "trigonometric func that returns the inverse tangent of two values between -infinity and infinity.",
    params: "&lt;number&gt;"
  },
  {
    func: "attr()",
    desc: "used to retrieve the value of an attribute of the selected element and use it in the stylesheet.",
    params: "attribute-name, &lt;params-or-unit&gt;: string, color, url, integer, number, length, em, ex, px, rem, vw, vh, vmin, vmax, cm, in, pt, pc, angle, deg, grad, rad, time, s, ms, frequency, Hz, kHz, %, &lt;fall-back&gt;"
  },
  {
    func: "blur()",
    desc: "applies a Gaussian blur to the input image. Its result is a &lt;filter-func&gt;.",
    params: "radius in &lt;length&gt;"
  },
  {
    func: "brightness()",
    desc: "&lt;filter-func&gt; applies a linear multiplier value on an element or an input image, making the image appear brighter or darker.",
    params: "&lt;percentage&gt;, &lt;number&gt;"
  },
  {
    func: "calc()",
    desc: "lets you perform calculations when specifying CSS property values.",
    params: "&lt;length&gt;, &lt;frequency&gt;, &lt;angle&gt;, &lt;time&gt;, &lt;percentage&gt;, &lt;number&gt;, &lt;integer&gt;, &lt;color-func&gt;"
  },
  {
    func: "clamp()",
    desc: "clamps a middle value within a range of values between a defined minimum bound and a maximum bound. The func takes three parameters: a minimum value, a preferred value, and a maximum allowed value.",
    params: "&lt;length&gt;, &lt;frequency&gt;, &lt;angle&gt;, &lt;time&gt;, &lt;percentage&gt;, &lt;number&gt;, &lt;integer&gt;"
  },
  {
    func: "conic-gradient()",
    desc: "creates a gradient with color transitions rotated around a center point, rather than radiating from it. Examples include pie charts and color wheels. Its result is a &lt;gradient&gt; data params.",
    params: "&lt;angle&gt;, &lt;position&gt;, &lt;angular-color-stop&gt;, &lt;color-hint&gt;"
  },
  {
    func: "contrast()",
    desc: "adjusts the contrast of the input image. Its result is a &lt;filter-func&gt;.",
    params: "&lt;percentage&gt;, &lt;number&gt;"
  },
  {
    func: "cos()",
    desc: "a trigonometric func that returns the cosine of a number, which is a value between -1 and 1.",
    params: "&lt;number&gt;"
  },
  {
    func: "counter()",
    desc: "returns a string representing the current value of the named counter, if there is one.",
    params: "&lt;counter-name&gt;, &lt;counter-style&gt;"
  },
  {
    func: "counters()",
    desc: "combines markers when nesting counters. It returns a string that concatenates the current values of named and nested counters, along with a provided string. An optional third parameter defines the list style.",
    params: "&lt;counter-name&gt;, &lt;string&gt;, &lt;counter-style&gt;"
  },
  {
    func: "drop-shadow()",
    desc: "applies a drop shadow effect to the input image. Its result is a &lt;filter-func&gt;.",
    params: "&lt;length&gt;, &lt;color&gt;"
  },
  {
    func: "env()",
    desc: "can be used to insert the value of a user-agent defined environment variable into your CSS.",
    params: "safe-area-inset-top, safe-area-inset-right, safe-area-inset-bottom, safe-area-inset-left, titlebar-area-x, titlebar-area-y, titlebar-area-width, titlebar-area-height, keyboard-inset-top, keyboard-inset-right, keyboard-inset-bottom, keyboard-inset-left, keyboard-inset-width, keyboard-inset-height"
  },
  {
    func: "exp()",
    desc: "is an exponential func that takes a number as an argument and returns the mathematical constant e raised to the power of the given number.",
    params: "&lt;number&gt;"
  },
  {
    func: "fit-content()",
    desc: "clamps a given size to an available size according to the formula min(maximum size, max(minimum size, argument)).",
    params: "&lt;length&gt;, &lt;percentage&gt;"
  },
  {
    func: "hsl()",
    desc: "expresses a color in the sRGB color space according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.",
    params: "none, &lt;number&gt;, &lt;angle&gt;, &lt;percentage&gt;, &lt;alpha-value&gt;"
  },
  {
    func: "hue-rotate()",
    desc: "rotates the hue of an element and its contents. Its result is a &lt;filter-func&gt;.",
    params: "&lt;angle&gt;"
  },
  {
    func: "hwb()",
    desc: "expresses a color in the sRGB color space according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency.",
    params: "none, &lt;number&gt;, &lt;angle&gt;, &lt;percentage&gt;, &lt;alpha-value&gt;"
  },
  {
    func: "hypot()",
    desc: "is an exponential func that returns the square root of the sum of squares of its parameters.",
    params: "&lt;number&gt;, &lt;dimension&gt;, &lt;percentage&gt;"
  },
  {
    func: "image-set()",
    desc: "lets the browser pick the most appropriate CSS image from a given set, primarily for high pixel density screens.",
    params: "&lt;image&gt;, &lt;string&gt;, &lt;resolution&gt;, params(&lt;string&gt;)"
  },
  {
    func: "invert()",
    desc: "inverts the color samples in the input image. Its result is a &lt;filter-func&gt;.",
    params: "amount: &lt;number&gt;, &lt;percentage&gt;"
  },
  {
    func: "lab()",
    desc: "expresses a given color in the CIELAB color space. Lab represents the entire range of colors that humans can see by specifying the color's lightness, a red/green axis value, a blue/yellow axis value, and an optional alpha transparency value.",
    params: "none, &lt;number&gt;, &lt;percentage&gt;, &lt;alpha-value&gt;"
  },
  {
    func: "lch()",
    desc: "expresses a given color using the LCH color space, which represents lightness, chroma, and hue. It uses the same L axis as the lab() color func of the CIELab color space, but it uses the polar coordinates C (Chroma) and H (Hue).",
    params: "none, &lt;number&gt;, &lt;angle&gt;, &lt;percentage&gt;, &lt;alpha-value&gt;"
  },
  {
    func: "light-dark()",
    desc: "sets two colors based on the user's light or dark theme preference, detecting the preferred color scheme without needing a prefers-color-scheme media query. It requires the color-scheme value (light dark) usually set on the :root pseudo-class for support.",
    params: "light-color: &lt;color&gt;, dark-color: &lt;color&gt;"
  },
  {
    func: "log()",
    desc: "an exponential func that returns the logarithm of a number.",
    params: "value: &lt;number&gt;, base: &lt;number&gt;"
  },
  {
    func: "matrix()",
    desc: "defines a homogeneous 2D transformation matrix. Its result is a &lt;transform-func&gt; data params.",
    params: "a b c d tx ty: &lt;number&gt;..."
  },
  {
    func: "matrix3d()",
    desc: "defines a 3D transformation as a 4x4 homogeneous matrix. Its result is a &lt;transform-func&gt; data params.",
    params: "a1 b1 c1 d1 a2 b2 c2 d2 a3 b3 c3 d3 a4 b4 c4 d4: &lt;number&gt;..."
  },
  {
    func: "max()",
    desc: "lets you set the largest (most positive) value from a list of comma-separated expressions as the value of a CSS property value.",
    params: "&lt;length&gt;, &lt;frequency&gt;, &lt;angle&gt;, &lt;time&gt;, &lt;percentage&gt;, &lt;number&gt;, &lt;integer&gt;"
  },
  {
    func: "min()",
    desc: "lets you set the smallest (most negative) value from a list of comma-separated expressions as the value of a CSS property value.",
    params: "&lt;length&gt;, &lt;frequency&gt;, &lt;angle&gt;, &lt;time&gt;, &lt;percentage&gt;, &lt;number&gt;, &lt;integer&gt;"
  },
  {
    func: "minmax()",
    desc: "defines a size range greater than or equal to min and less than or equal to max. It is used with CSS grids.",
    params: "&lt;length&gt;, &lt;percentage&gt;, &lt;flex&gt;, max-content, min-content, auto"
  },
  {
    func: "mod()",
    desc: "returns a modulus left over when the first parameter is divided by the second parameter, similar to the JavaScript remainder operator (%).",
    params: "&lt;number&gt;, &lt;percentage&gt;, &lt;dimension&gt;"
  },
  {
    func: "oklab()",
    desc: "expresses a given color in the Oklab color space, which attempts to mimic how color is perceived by the human eye.",
    params: "none, &lt;number&gt;, &lt;percentage&gt;, &lt;alpha-value&gt;"
  },
  {
    func: "oklch()",
    desc: "expresses a given color in the Oklab color space. oklch() is the cylindrical form of oklab(), using the same L axis, but with polar Chroma (C) and Hue (h) coordinates.",
    params: "none, &lt;number&gt;, &lt;percentage&gt;, &lt;angle&gt;, &lt;alpha-value&gt;"
  },
  {
    func: "opacity()",
    desc: "applies transparency to the samples in the input image. Its result is a &lt;filter-func&gt;.",
    params: "&lt;number&gt;, &lt;percentage&gt;"
  },
  {
    func: "path()",
    desc: "accepts an SVG path string, and is used in the CSS shapes and CSS motion path modules to enable a shape to be drawn.",
    params: "&lt;string&gt;, &lt;fill-rule&gt;: nonzero, evenodd"
  },
  {
    func: "perspective()",
    desc: "defines a transformation that sets the viewer's distance from the z=0 plane, creating a 3D perspective effect. Its result is a &lt;transform-func&gt; data params.",
    params: "none, &lt;length&gt;"
  },
  {
    func: "pow()",
    desc: "an exponential func that returns the value of a base raised to the power of a number.",
    params: "&lt;number&gt;"
  },
  {
    func: "radial-gradient()",
    desc: "creates a smooth transition between two or more colors radiating from an origin, forming a circular or elliptical shape. Its result is a &lt;gradient&gt; data params.",
    params: "&lt;position&gt;, &lt;ending-shape&gt;, &lt;size&gt;, &lt;linear-color-stop&gt;, &lt;color-hint&gt;"
  },
  {
    func: "ray()",
    desc: "defines a line segment starting from an offset position and extending in a specified direction (angle). The length can be constrained by specifying a size and using the contain keyword.",
    params: "&lt;angle&gt;, &lt;size&gt;, contain, at &lt;position&gt;"
  },
  {
    func: "rem()",
    desc: "The rem() CSS func returns the remainder of a division operation, similar to the JavaScript % operator, and retains the sign of the dividend. This func is useful for situations where you need to calculate the leftover portion of a division operation in CSS.",
    params: "&lt;number&gt;, &lt;dimension&gt;, &lt;percentage&gt;"
  },
  {
    func: "repeat()",
    desc: "represents a repeated fragment of the track list, allowing patterns of columns or rows to be written more compactly.",
    params: "&lt;length&gt;, &lt;percentage&gt;, &lt;flex&gt;, &lt;line-names&gt;, auto, auto-fill, auto-fit, max-content, min-content"
  },
  {
    func: "repeating-conic-gradient()",
    desc: "creates a repeating gradient with color transitions rotated around a center point instead of radiating from the center.",
    params: "&lt;angle&gt;, &lt;position&gt;, &lt;angular-color-stop&gt;, &lt;color-hint&gt;"
  },
  {
    func: "repeating-linear-gradient()",
    desc: "creates infinitely repeating linear gradients, similar to linear-gradient(), and results in a &lt;gradient&gt; data params.",
    params: "&lt;side-or-corner&gt;, &lt;angle&gt;, &lt;linear-color-stop&gt;, &lt;color-hint&gt;"
  },
  {
    func: "repeating-radial-gradient()",
    desc: "creates infinitely repeating gradients radiating from an origin, similar to repeating-linear-gradient(), and results in a &lt;gradient&gt; data params.",
    params: "&lt;position&gt;, &lt;shape&gt;, &lt;extent-keyword&gt;, &lt;color-stop&gt;"
  },
  {
    func: "rgb()",
    desc: "expresses a color in the sRGB color space according to its red, green, and blue components. An optional alpha component represents the color's transparency.",
    params: "&lt;number&gt;, &lt;percentage&gt;, &lt;alpha-value&gt;"
  },
  {
    func: "rotate()",
    desc: "defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;"
  },
  {
    func: "rotate3d()",
    desc: "defines a transformation that rotates an element around a fixed axis in 3D space, without deforming it. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;, &lt;number&gt;"
  },
  {
    func: "rotateX()",
    desc: "defines a transformation that rotates an element around the x-axis (horizontal) without deforming it. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;"
  },
  {
    func: "rotateY()",
    desc: "defines a transformation that rotates an element around the y-axis (vertical) without deforming it. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;"
  },
  {
    func: "rotateZ()",
    desc: "defines a transformation that rotates an element around the z-axis without deforming it. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;"
  },
  {
    func: "round()",
    desc: "returns a rounded number based on a selected rounding strategy.",
    params: "&lt;rounding-strategy&gt;, &lt;number&gt;, &lt;dimension&gt;, &lt;percentage&gt;"
  },
  {
    func: "saturate()",
    desc: "super-saturates or desaturates the input image. Its result is a &lt;filter-func&gt;.",
    params: "&lt;number&gt;, &lt;percentage&gt;"
  },
  {
    func: "scale()",
    desc: "resizes an element on the 2D plane, applying independent scaling factors to the horizontal (sx) and vertical (sy) dimensions. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;number&gt;, &lt;percentage&gt;"
  },
  {
    func: "scale3d()",
    desc: "resizes an element in 3D space using scaling factors [sx, sy, sz] for the x, y, and z dimensions. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;number&gt;"
  },
  {
    func: "scaleX()",
    desc: "defines a transformation that resizes an element along the x-axis (horizontally). Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;number&gt;"
  },
  {
    func: "scaleY()",
    desc: "defines a transformation that resizes an element along the y-axis (vertically). Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;number&gt;"
  },
  {
    func: "scaleZ()",
    desc: "defines a transformation that resizes an element along the z-axis. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;number&gt;"
  },
  {
    func: "sepia()",
    desc: "converts the input image to sepia, giving it a warmer, more yellow/brown appearance. Its result is a &lt;filter-func&gt;.",
    params: "&lt;number&gt;, &lt;percentage&gt;"
  },
  {
    func: "sin()",
    desc: "a trigonometric func that returns the sine of a number, which is a value between -1 and 1.",
    params: "&lt;number&gt;"
  },
  {
    func: "skew()",
    desc: "defines a transformation that skews an element on the 2D plane. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;"
  },
  {
    func: "skewX()",
    desc: "defines a transformation that skews an element in the horizontal direction on the 2D plane. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;"
  },
  {
    func: "skewY()",
    desc: "defines a transformation that skews an element in the vertical direction on the 2D plane. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;angle&gt;"
  },
  {
    func: "sqrt()",
    desc: "an exponential func that returns the square root of a number.",
    params: "&lt;number&gt;"
  },
  {
    func: "tan()",
    desc: "a trigonometric func that returns the tangent of a number, which is a value between -infinity and infinity.",
    params: "&lt;number&gt;"
  },
  {
    func: "translate()",
    desc: "repositions an element in the horizontal and/or vertical directions. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;length&gt;, &lt;percentage&gt;"
  },
  {
    func: "translate3d()",
    desc: "repositions an element in 3D space. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;length&gt;, &lt;percentage&gt;"
  },
  {
    func: "translateX()",
    desc: "repositions an element along the horizontal direction in 2D plane. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;length&gt;, &lt;percentage&gt;"
  },
  {
    func: "translateY()",
    desc: "repositions an element along the vertical direction in 2D plane. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;length&gt;, &lt;percentage&gt;"
  },
  {
    func: "translateZ()",
    desc: "repositions an element along the z-axis in 3D space, i.e., closer to or farther away from the viewer. Its result is a &lt;transform-func&gt; data params.",
    params: "&lt;length&gt;, &lt;percentage&gt;"
  },
  {
    func: "url()",
    desc: "accepts only a URL literal string (with or without quotes).",
    params: "URL literal string (with or without quotes)."
  },
  {
    func: "var()",
    desc: "inserts the value of a custom property (CSS variable) into another property's value.",
    params: "&lt;custom-property-name&gt;, &lt;declaration-value&gt;"
  }
];

const functable = logicdiv.querySelector("#functions") as HTMLTableElement;

const funcap = document.createElement('caption') as HTMLTableCaptionElement;
funcap.innerHTML = "CSS Functions";
functable.appendChild(funcap);
const functhead = functable.querySelector('thead') as HTMLTableSectionElement;
const funcrow = document.createElement('tr') as HTMLTableRowElement;
functhead.appendChild(funcrow);
const funckeys = ["Function", "Description", "Parameter"];
for (const str of funckeys) {
  const head = document.createElement('th');
  head.innerHTML = str;
  funcrow.appendChild(head);
};

const functbody = functable.querySelector('tbody') as HTMLTableSectionElement;

cssFunctions.forEach(({func, desc, params}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${func}</code></td>
  <td>${desc}</td>
  <td>${params}</td>
  `;
  functbody.appendChild(row);
});

const cssAtRules = [
  {
    atRule: "@charset",
    desc: "The @charset at-rule specifies the character encoding used in the stylesheet."
  },
  {
    atRule: "@font-face",
    desc: "The @font-face at-rule specifies a custom font for displaying text, which can be loaded from a remote server or a locally-installed font on the user's computer."
  },
  {
    atRule: "@import",
    desc: "The @import at-rule is used to import styles from other valid stylesheets. It must be placed at the top of the stylesheet, before any other at-rules (except @charset and @layer) or style declarations, or it will be ignored."
  },
  {
    atRule: "@keyframes",
    desc: "The @keyframes at-rule controls intermediate steps in a CSS animation by defining styles for keyframes along the animation sequence. It provides greater control over the animation's progression compared to transitions."
  },
  {
    atRule: "@layer",
    desc: "The @layer at-rule declares a cascade layer and defines precedence for multiple layers."
  },
  {
    atRule: "@media",
    desc: "The @media at-rule applies specific CSS styles based on the result of one or more media queries. It allows you to define styles that only apply if the media query matches the device's conditions."
  },
  {
    atRule: "@namespace",
    desc: "is an at-rule that defines XML namespaces to be used in a CSS style sheet."
  },
  {
    atRule: "@supports",
    desc: "The @supports at-rule allows you to apply CSS declarations based on browser support for specific CSS features. This is known as a feature query and must be placed at the top level or nested within other conditional groups."
  }
];

const ATtable = logicdiv.querySelector("#atRuleDesc") as HTMLTableElement;

const ATcap = document.createElement('caption') as HTMLTableCaptionElement;
ATcap.innerHTML = "CSS At-rule and Descriptors";
ATtable.appendChild(ATcap);
const ATthead = ATtable.querySelector('thead') as HTMLTableSectionElement;
const ATrow = document.createElement('tr') as HTMLTableRowElement;
ATthead.appendChild(ATrow);
const ATkeys = ["Name", "Usage"];
for (let str of ATkeys) {
  const head = document.createElement('th');
  head.innerHTML = str;
  ATrow.appendChild(head);
};

const ATtbody = ATtable.querySelector('tbody') as HTMLTableSectionElement;

cssAtRules.forEach(({atRule, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${atRule}</code></td>
  <td>${desc}</td>
  `;
  ATtbody.appendChild(row);
});

const cssKeywords = [
  {
    keyword: "inherit",
    desc: "The inherit keyword applies the computed value of a property from the parent element. It can be used with any CSS property, including the shorthand all."
  },
  {
    keyword: "initial",
    desc: "The initial keyword applies the default (or initial) value of a property to an element. It can be used with any CSS property, including the shorthand all, allowing all properties to be reset to their initial values in a single step."
  },
  {
    keyword: "revert",
    desc: "The revert keyword resets a property's cascaded value to what it would have been without changes from the current style origin. It rolls back to the user-agent value, user-set value, inherited value (if inheritable), or initial value. Applicable to any CSS property, including the shorthand all, it removes overridden styles in the cascade until the target style is reached."
  },
  {
    keyword: "revert-layer",
    desc: "The revert keyword rolls back a property's value to that of a previous cascade layer, recalculating as if no rules were set in the current layer. If no prior layer exists, it defaults to the computed value from the current layer. If no matching rule exists in the current layer, it reverts to the value from a previous style origin. Applicable to any CSS property, including the shorthand all."
  },
  {
    keyword: "unset",
    desc: "The unset keyword resets a property to its inherited value if it naturally inherits from its parent or to its initial value if it does not. Essentially, it acts like inherit for inherited properties and initial for non-inherited ones. It can be applied to any CSS property, including the shorthand property all."
  },
  {
    keyword: "Cascade",
    desc: `
      <p>The cascade determines the final style by evaluating rules in the following priority order:</p>
      <ol>
        <li><strong>Importance</strong>: \`!important\` rules have the highest priority.</li>
        <li><strong>Specificity</strong>: More specific selectors override less specific ones.</li>
        <li><strong>Order</strong>: When rules have the same specificity, later rules take precedence.</li>
      </ol>
      <p>The cascade is like a waterfall with steps.</p>
    `
  },
  {
    keyword: "Inheritance",
    desc: `
      <p>In CSS, inheritance determines the value of a property when none is specified on an element. Properties are either:</p>
      <ul>
        <li><strong>Inherited</strong>: Default to the parent element's computed value.</li>
        <li><strong>Non-inherited</strong>: Default to the property's initial value.</li>
      </ul>
      <p>Check a property's definition to see if it inherits by default ("Inherited: yes" or "Inherited: no").</p>
    `
  },
  {
    keyword: "Error Handling",
    desc: "When a CSS error occurs, the browser skips the invalid line, discarding minimal code before resuming normal parsing. Error recovery simply involves ignoring invalid content."
  },
  {
    keyword: "all",
    desc: "A shorthand for all CSS properties except unicode-bidi, direction, and custom properties. It sets properties to their initial or inherited values or values from another cascade layer or stylesheet origin.",
  },
];

const globalsdiv = document.querySelector("#globals") as HTMLDivElement;
const keytable = globalsdiv.querySelector('table') as HTMLTableElement;

const globalscap = document.createElement('caption') as HTMLTableCaptionElement;
globalscap.innerHTML = "CSS Global Values and Key Concepts";
keytable.appendChild(globalscap);
const keythead = keytable.querySelector('thead') as HTMLTableSectionElement;
const keyrow = document.createElement('tr') as HTMLTableRowElement;
keythead.appendChild(keyrow);
const keys = ["Property", "Usage"];
for (let str of keys) {
  const head = document.createElement('th');
  head.innerHTML = str;
  keyrow.appendChild(head);
};

const keytbody = keytable.querySelector('tbody') as HTMLTableSectionElement;

cssKeywords.forEach(({keyword, desc}) => {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td><code class="element">${keyword}</code></td>
  <td>${desc}</td>
  `;
  keytbody.appendChild(row);
});
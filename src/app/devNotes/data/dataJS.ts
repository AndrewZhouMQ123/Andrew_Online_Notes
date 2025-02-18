export const globalProperties = [
  {
    prop: 'globalThis',
    desc: 'The globalThis global prop contains the global this value, which is usually akin to the global object.',
  },
  {
    prop: 'Infinity',
    desc: 'The Infinity global prop is a numeric value representing infinity.',
  },
  {
    prop: 'NaN',
    desc: 'The NaN global prop is a value representing Not-A-Number.',
  },
  {
    prop: 'undefined',
    desc: 'The undefined global prop represents the primitive value undefined. It is one of JavaScript\'s primitive types.',
  },
];

export const primitiveDataTypes = [
  {
    identifier: "string",
    literal: `"Hello, world!", 'This is a string', \`Backticks for multiline strings\``,
    description: "Represent a sequence of characters, such as letters, numbers, and symbols."
  },
  {
    identifier: "number",
    literal: "42, 3.14, -10, Infinity, -Infinity, NaN",
    description: "Represents both integers and floating-point numbers."
  },
  {
    identifier: "bigint",
    literal: "9007199254740991n, -1234567890123456789n",
    description: "Represents integers of arbitrary size, suffixed with the letter n."
  },
  {
    identifier: "boolean",
    literal: "true, false",
    description: "Represents truth values: true or false."
  },
  {
    identifier: "symbol",
    literal: `Symbol("unique identifier"), Symbol.for("shared identifier")`,
    description: "A unique and immutable value, often used as identifiers. Created using Symbol() or Symbol.for()."
  },
  {
    identifier: "null",
    literal: "null",
    description: "Represents the intentional absence of a value."
  },
  {
    identifier: "undefined",
    literal: "undefined",
    description: "Represents a variable that has been declared but not assigned a value."
  }
];

export const builtInFunctions = [
  {
    method: 'alert()',
    desc: 'Displays a message in a modal dialog box. Use sparingly, as it interrupts user experience.',
  },
  {
    method: 'confirm()',
    desc: 'Displays a dialog box with a message and "OK" and "Cancel" buttons. Returns true if the user clicks "OK" and false otherwise.',
  },
  {
    method: 'eval()',
    desc: 'Executes a string of JavaScript code. Avoid using eval() due to potential security and performance risks.',
  },
  {
    method: 'isFinite()',
    desc: 'Checks if a value is a finite number. Converts the argument to a number if necessary.',
  },
  {
    method: 'isNaN()',
    desc: 'Checks if a value is NaN (Not-a-Number).',
  },
  {
    method: 'parseFloat()',
    desc: 'Converts a string to a floating-point number.',
  },
  {
    method: 'parseInt()',
    desc: 'Converts a string to an integer. Can specify a radix (base) for parsing.',
  },
  {
    method: 'prompt()',
    desc: 'Displays a dialog box that asks for user input. Returns the input as a string. Often disabled or discouraged for modern web development.',
  },
  {
    method: 'decodeURI()',
    desc: 'Decodes a Uniform Resource Identifier (URI) encoded with encodeURI().',
  },
  {
    method: 'decodeURIComponent()',
    desc: 'Decodes a URI component encoded with encodeURIComponent().',
  },
  {
    method: 'encodeURI()',
    desc: 'Encodes a URI by escaping characters that are not valid in a URI.',
  },
  {
    method: 'encodeURIComponent()',
    desc: 'Encodes a URI component by escaping characters that have special meaning.',
  },
  {
    method: 'setTimeout()',
    desc: 'Executes a function after a specified delay (in milliseconds).',
  },
  {
    method: 'clearTimeout()',
    desc: 'Cancels a setTimeout timer.',
  },
  {
    method: 'setInterval()',
    desc: 'Executes a function repeatedly, with a fixed time delay between calls.',
  },
  {
    method: 'clearInterval()',
    desc: 'Cancels a setInterval timer.',
  },
];

export const builtInObjects = [
  {
    object: "Object",
    methodsValues: [
      "Object()", "assign()", "create()", "defineProperties()", "defineProperty()", "entries()", "freeze()", "fromEntries()",
      "getOwnPropertyDescriptor()", "getOwnPropertyDescriptors()", "getOwnPropertyNames()", "getOwnPropertySymbols()",
      "groupBy()", "hasOwn()", "is()", "keys()", "seal()", "values()",
      "prototype.apply()", "prototype.bind()", "prototype.call()", "prototype.toString()", "prototype.toLocaleString()", "prototype.valueOf()"
    ].join(', ')
  },
  {
    object: "Function",
    methodsValues: [
      "Function()", "inherited instance methods from Object"
    ].join(', ')
  },
  {
    object: "Boolean",
    methodsValues: [
      "Boolean()", "inherited instance methods from Object"
    ].join(', ')
  },
  {
    object: "Symbol",
    methodsValues: [
      "Symbol()", "for()", "keyFor()", "inherited instance methods from Object"
    ].join(', ')
  },
  {
    object: "Number",
    methodsValues: [
      "isFinite()", "isInteger()", "isNaN()", "isSafeInteger()", "parseFloat()", "parseInt()",
      "EPSILON", "MAX_SAFE_INTEGER", "MAX_VALUE", "MIN_SAFE_INTEGER", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY",
      "prototype.toExponential()", "prototype.toFixed()", "prototype.toPrecision()", "inherited instance methods from Object"
    ].join(', ')
  },
  {
    object: "BigInt",
    methodsValues: [
      "BigInt()", "asIntN()", "asUintN()", "inherited instance methods from Object"
    ].join(', ')
  },
  {
    object: "Math",
    methodsValues: [
      "abs()", "acos()", "acosh()", "asin()", "asinh()", "atan()", "atan2()", "atanh()", "cbrt()", "ceil()", "clz32()", "cos()",
      "cosh()", "exp()", "expm1()", "f16round()", "floor()", "fround()", "hypot()", "imul()", "log()", "log10()", "log1p()", "log2()",
      "max()", "min()", "pow()", "random()", "round()", "sign()", "sin()", "sinh()", "sqrt()", "tan()", "tanh()", "trunc()",
      "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"
    ].join(', ')
  },
  {
    object: "Date",
    methodsValues: [
      "Date()", "now()", "parse()", "UTC()",
      "prototype.getDate()", "prototype.getDay()", "prototype.getFullYear()", "prototype.getMonth()", "prototype.getTimezoneOffset()",
      "prototype.getHours()", "prototype.getMilliseconds()", "prototype.getMinutes()", "prototype.getSeconds()", "prototype.getTime()",
      "prototype.setDate()", "prototype.setFullYear()", "prototype.setMonth()", "prototype.setHours()", "prototype.setMilliseconds()",
      "prototype.setMinutes()", "prototype.setSeconds()", "prototype.setTime()", "prototype.getUTCDate()", "prototype.getUTCDay()",
      "prototype.getUTCFullYear()", "prototype.getUTCMonth()", "prototype.getUTCHours()", "prototype.getUTCMilliseconds()",
      "prototype.getUTCMinutes()", "prototype.getUTCSeconds()", "prototype.setUTCDate()", "prototype.setUTCMonth()",
      "prototype.setUTCFullYear()", "prototype.setUTCHours()", "prototype.setUTCMilliseconds()", "prototype.setUTCMinutes()",
      "prototype.setUTCSeconds()", "prototype.toDateString()", "prototype.toISOString()", "prototype.toJSON()",
      "prototype.toLocaleDateString()", "prototype.toLocaleTimeString()", "prototype.toTimeString()", "prototype.toUTCString()",
      "inherited instance methods from Object"
    ].join(', ')
  },
  {
    object: "String",
    methodsValues: [
      "fromCharCode()", "fromCodePoint()", "raw()",
      "prototype.at()", "prototype.charAt()", "prototype.charCodeAt()", "prototype.codePointAt()", "prototype.concat()",
      "prototype.endswith()", "prototype.includes()", "prototype.indexOf()", "prototype.isWellFormed()", "prototype.lastIndexOf()",
      "prototype.localCompare()", "prototype.match()", "prototype.matchAll()", "prototype.normalize()", "prototype.padEnd()",
      "prototype.padStart()", "prototype.repeat()", "prototype.replace()", "prototype.replaceAll()", "prototype.search()",
      "prototype.slice()", "prototype.small()", "prototype.split()", "prototype.startsWith()", "prototype.substring()",
      "prototype.toLowerCase()", "prototype.toString()", "prototype.toUpperCase()", "prototype.toWellFormed()", "prototype.trim()",
      "prototype.trimEnd()", "prototype.trimStart()", "prototype.valueOf()", "prototype[Symbol.iterator]()"
    ].join(', ')
  },
  {
    object: "RegExp",
    methodsValues: [
      "RegExp()", "escape()", "prototype.exec()", "prototype.test()", "prototype.toString()", "prototype[Symbol.match]()",
      "prototype[Symbol.matchAll]()", "prototype[Symbol.replace]()", "prototype[Symbol.search]()", "prototype[Symbol.split]()"
    ].join(', ')
  },
  {
    object: "Array",
    methodsValues: [
      "Array()", "from()", "fromAsync()", "isArray()", "of()", "String(array)",
      "prototype.at(index)", "prototype.concat(arg1, arg2...)", "prototype.copyWithin(target, start, end)",
      "prototype.entries()", "prototype.every(callbackFn)", "prototype.fill(value, start, end)",
      "prototype.filter(function(item, index, array){...})", "prototype.find(function(item, index, array){...})",
      "prototype.findIndex(function(item, index, array){...})", "prototype.findLast(function(item, index, array){...})",
      "prototype.findLastIndex(function(item, index, array){...})", "prototype.flat(depth)", "prototype.flatMap(callbackFn)",
      "prototype.forEach(function(item, index, array){...})", "prototype.includes(item, from)", "prototype.indexOf(item, from)",
      "prototype.join(separator)", "prototype.keys()", "prototype.lastIndexOf()", "prototype.map(function(item, index, array){...})",
      "prototype.pop()", "prototype.push(E)", "prototype.reduce(function(accumulator, item, index, array){...}, [initial])",
      "prototype.reduceRight(function(accumulator, item, index, array){...}, [initial])", "prototype.reverse()", "prototype.shift()",
      "prototype.unshift()", "prototype.sort(compareFunction(a, b){...})", "prototype.some(callbackFn)",
      "prototype.splice(start[, deleteCount, elem1, ..., elemN])", "prototype.slice([start], [end])",
      "prototype.toLocaleString()", "prototype.toReversed()", "prototype.toSorted()", "prototype.toSpliced()", "prototype.toString()",
      "prototype.values()", "prototype.with()", "prototype[Symbol.iterator]()"
    ].join(', ')
  },
  {
    object: "Map",
    methodsValues: [
      "Map()", "groupBy()", "prototype.clear()", "prototype.delete()", "prototype.entries()", "prototype.forEach()", "prototype.get()",
      "prototype.has()", "prototype.keys()", "prototype.set()", "prototype.values()", "prototype[Symbol.iterator]()"
    ].join(', ')
  },
  {
    object: "Set",
    methodsValues: [
      "Set()", "prototype.add()", "prototype.clear()", "prototype.delete()", "prototype.difference()", "prototype.entries()",
      "prototype.forEach()", "prototype.has()", "prototype.intersection()", "prototype.isDisjointFrom()", "prototype.isSubsetOf()",
      "prototype.isSupersetOf()", "prototype.keys()", "prototype.symmetricDifference()", "prototype.union()", "prototype.values()",
      "prototype[Symbol.iterator]()"
    ].join(', ')
  },
  {
    object: "WeakMap",
    methodsValues: [
      "WeakMap()", "prototype.delete()", "prototype.get()", "prototype.has()", "prototype.set()"
    ].join(', ')
  },
  {
    object: "WeakSet",
    methodsValues: [
      "WeakSet()", "prototype.add()", "prototype.delete()", "prototype.has()"
    ].join(', ')
  },
  {
    object: "ArrayBuffer",
    methodsValues: [
      "ArrayBuffer()", "isView()", "prototype.resize()", "prototype.slice()", "prototype.transfer()", "prototype.transferToFixedLength()",
      "prototype.byteLength", "prototype.detached", "prototype.maxByteLength", "prototype.resizable"
    ].join(', ')
  },
  {
    object: "SharedArrayBuffer",
    methodsValues: [
      "SharedArrayBuffer()", "prototype.grow()", "prototype.slice()", "prototype.byteLength", "prototype.growable", "prototype.maxByteLength"
    ].join(', ')
  },
  {
    object: "DataView",
    methodsValues: [
      "DataView()", "prototype.getBigInt64()", "prototype.getBigUint64()", "prototype.getFloat16()", "prototype.getFloat32()", "prototype.getFloat64()",
      "prototype.getInt16()", "prototype.getInt32()", "prototype.getInt8()", "prototype.getUint16()", "prototype.getUint32()", "prototype.getUint8()",
      "prototype.setBigInt64()", "prototype.setBigUint64()", "prototype.setFloat16()", "prototype.setFloat32()", "prototype.setFloat64()",
      "prototype.setInt16()", "prototype.setInt32()", "prototype.setInt8()", "prototype.setUint16()", "prototype.setUint32()", "prototype.setUint8()",
      "prototype.buffer", "prototype.byteLength", "prototype.byteOffset"
    ].join(', ')
  },
  {
    object: "Atomics",
    methodsValues: [
      "Atomics.add()", "Atomics.and()", "Atomics.compareExchange()", "Atomics.exchange()", "Atomics.isLockFree()", "Atomics.load()",
      "Atomics.notify()", "Atomics.or()", "Atomics.store()", "Atomics.sub()", "Atomics.wait()", "Atomics.waitAsync()", "Atomics.xor()"
    ].join(', ')
  },
  {
    object: "JSON",
    methodsValues: [
      "JSON.isRawJSON()", "JSON.parse()", "JSON.rawJSON()", "JSON.stringify()"
    ].join(', ')
  },
  {
    object: "Iterator",
    methodsValues: [
      "Iterator()", "from()", "prototype.drop()", "prototype.every()", "prototype.filter()", "prototype.find()", "prototype.flatMap()",
      "prototype.forEach()", "prototype.map()", "prototype.reduce()", "prototype.some()", "prototype.take()", "prototype.toArray()",
      "prototype[Symbol.iterator]()"
    ].join(', ')
  },
  {
    object: "AsyncIterator",
    methodsValues: [
      "prototype[Symbol.asyncIterator]()"
    ].join(', ')
  },
  {
    object: "Promise",
    methodsValues: [
      "Promise()", "all()", "allSettled()", "any()", "race()", "reject()", "resolve()", "try()", "withResolvers()",
      "prototype.catch()", "prototype.finally()", "prototype.then()", "prototype[Symbol.species]"
    ].join(', ')
  },
  {
    object: "GeneratorFunction",
    methodsValues: [
      "GeneratorFunction()"
    ].join(', ')
  },
  {
    object: "AsyncGeneratorFunction",
    methodsValues: [
      "AsyncGeneratorFunction()"
    ].join(', ')
  },
  {
    object: "Generator",
    methodsValues: [
      "prototype.next()", "prototype.return()", "prototype.throw()", "subclass of Iterator class"
    ].join(', ')
  },
  {
    object: "AsyncGenerator",
    methodsValues: [
      "prototype.next()", "prototype.return()", "prototype.throw()", "subclass of AsyncIterator class"
    ].join(', ')
  },
  {
    object: "AsyncFunction",
    methodsValues: [
      "AsyncFunction()"
    ].join(', ')
  },
  {
    object: "Reflect",
    methodsValues: [
      "apply()", "construct()", "defineProperty()", "deleteProperty()", "get()", "getOwnPropertyDescriptor()", "getPrototypeOf()", "has()",
      "isExtensible()", "ownKeys()", "preventExtensions()", "set()", "setPrototypeOf()"
    ].join(', ')
  },
  {
    object: "Proxy",
    methodsValues: [
      "Proxy(target, handler)", "revocable()", "often used with the Reflect object"
    ].join(', ')
  }
];

export const domBomAPI = [
  {
    interface: "console",
    description: "The console object provides access to the web console.",
    methods_properties: [
      "assert()", "clear()", "count()", "countReset()", "debug()", "dir()", "dirxml()", "error()", "group()", "groupCollapsed()",
      "groupEnd()", "info()", "log()", "table()", "time()", "timeEnd()", "timeLog()", "trace()", "warn()"
    ].join(', ')
  },
  {
    interface: "Navigator",
    description: "Represents the user agent's state and identity, enabling scripts to query it or register activities. Accessed via window.navigator.",
    methods_properties: [
      "clipboard", "connection", "cookieEnabled", "credentials", "deviceMemory", "geolocation", "hardwareConcurrency", "language", "languages",
      "locks", "maxTouchPoints", "mediaCapabilities", "mediaDevices", "mediaSession", "onLine", "pdfViewerEnabled", "permissions", "presentation",
      "serviceWorker", "storage", "usb", "userActivation", "userAgent", "virtualKeyboard", "wakeLock", "webdriver", "windowControlsOverlay",
      "canShare()", "clearAppBadge()", "getBattery()", "getGamepads()", "registerProtocolHandler()", "requestMediaKeySystemAccess()",
      "requestMIDIAccess()", "sendBeacon()", "setAppBadge()", "share()", "unregisterProtocolHandler()", "vibrate()"
    ].join(', ')
  },
  {
    interface: "AbstractRange",
    description: "The base class for all DOM range types, representing the start and end points of a content section within a document.",
    methods_properties: [
      "collapsed", "endContainer", "endOffset", "startContainer", "startOffset"
    ].join(', ')
  },
  {
    interface: "AbortController",
    description: "The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.",
    methods_properties: [
      "AbortController()", "signal", "abort()"
    ].join(', ')
  },
  {
    interface: "PerformanceEntry",
    description: "The PerformanceEntry object encapsulates a single performance metric that is part of the browser's performance timeline.",
    methods_properties: [
      "duration", "entryType", "name", "startTime", "toJSON()"
    ].join(', ')
  },
  {
    interface: "StaticRange",
    description: "Extends AbstractRange to define a fixed range of content in the DOM that does not update with changes in the DOM tree. It shares the same properties and methods as AbstractRange.",
    methods_properties: [
      "collapsed", "endContainer", "endOffset", "startContainer", "startOffset"
    ].join(', ')
  },
  {
    interface: "EventTarget",
    description: "Enables objects to receive events and manage event listeners through its three associated methods.",
    methods_properties: [
      "EventTarget()", "addEventListener()", "dispatchEvent()", "removeEventListener()"
    ].join(', ')
  },
  {
    interface: "AbortSignal",
    description: "Represents a signal object for communicating with and aborting asynchronous operations, typically used with an AbortController.",
    methods_properties: [
      "aborted", "signal", "abort()", "any()", "timeout()"
    ].join(', ')
  },
  {
    interface: "Window",
    description: "The 'root' object in the browser, representing the browser window. It provides global functions and properties that are accessible throughout the page. Inherits from EventTarget.",
    methods_properties: [
      "caches", "closed", "console", "crossOriginIsolated", "crypto", "customElements", "devicePixelRatio", "document", "frameElement", "frames",
      "history", "indexedDB", "innerHeight", "innerWidth", "isSecureContext", "length", "localStorage", "location", "locationbar", "menubar", "name",
      "navigator", "opener", "origin", "outerHeight", "outerWidth", "parent", "performance", "personalbar", "scheduler", "screen", "screenLeft",
      "screenTop", "screenX", "screenY", "scrollbars", "scrollX", "scrollY", "self", "sessionStorage", "speechSynthesis", "statusbar", "toolbar",
      "top", "trustedTypes", "visualViewport", "window", "alert()", "atob()", "btoa()", "cancelAnimationFrame()", "cancelIdleCallback()",
      "clearInterval()", "clearTimeout()", "close()", "confirm()", "createImageBitmap()", "fetch()", "focus()", "getComputedStyle()", "getSelection()",
      "matchMedia()", "moveBy()", "moveTo()", "open()", "postMessage()", "print()", "prompt()", "queueMicrotask()", "reportError()", "requestAnimationFrame()",
      "requestIdleCallback()", "resizeBy()", "resizeTo()", "scroll()", "scrollBy()", "scrollTo()", "setInterval()", "setTimeout()", "stop()", "structuredClone()"
    ].join(', ')
  },
  {
    interface: "Performance",
    description: "Provides access to performance-related information for the current page. Inherits from EventTarget.",
    methods_properties: [
      "eventCounts", "timeOrigin", "clearMarks()", "clearMeasures()", "clearResourceTimings()", "getEntries()", "getEntriesByName()", "getEntriesByType()",
      "mark()", "measure()", "now()", "setResourceTimingBufferSize()", "toJSON()"
    ].join(', ')
  },
  {
    interface: "Node",
    description: "Abstract base class for DOM objects like Document, Element, and DocumentFragment, inheriting from EventTarget.",
    methods_properties: [
      "baseURI", "childNodes", "firstChild", "isConnected", "lastChild", "nextSibling", "nodeName", "nodeType", "nodeValue", "ownerDocument", "parentElement",
      "parentNode", "previousSibling", "textContent", "appendChild()", "cloneNode()", "compareDocumentPosition()", "contains()", "getRootNode()", "hasChildNodes()",
      "insertBefore()", "isDefaultNamespace()", "isEqualNode()", "isSameNode()", "lookupNamespaceURI()", "lookupPrefix()", "normalize()", "removeChild()", "replaceChild()"
    ].join(', ')
  },
  {
    interface: "Document",
    description: "Represents a web page loaded in the browser, serving as the entry point to access and manipulate the web page's content (DOM tree). Inherits from Node.",
    methods_properties: [
      "Document()", "activeElement", "adoptedStyleSheets", "body", "characterSet", "childElementCount", "children", "compatMode", "contentType", "cookie",
      "currentScript", "defaultView", "designMode", "dir", "doctype", "documentElement", "documentURI", "embeds", "firstElementChild", "fonts", "forms",
      "fragmentDirective", "fullscreenElement", "fullscreenEnabled", "head", "hidden", "images", "implementation", "lastElementChild", "lastModified", "links",
      "location", "pictureInPictureElement", "pictureInPictureEnabled", "plugins", "pointerLockElement", "readyState", "referrer", "scripts", "scrollingElement",
      "styleSheets", "timeline", "title", "URL", "visibilityState", "parseHTMLUnsafe()", "adoptNode()", "caretPositionFromPoint()", "close()", "createAttribute()",
      "createAttributeNS()", "createCDATASection()", "createComment()", "createDocumentFragment()", "createElement()", "createElementNS()", "createExpression()",
      "createNodeIterator()", "createProcessingInstruction()", "createRange()", "createTextNode()", "createTreeWalker()", "elementFromPoint()", "elementsFromPoint()",
      "evaluate()", "exitFullscreen()", "exitPictureInPicture()", "exitPointerLock()", "getAnimations()", "getElementById()", "getElementsByClassName()",
      "getElementsByTagName()", "getElementsByTagNameNS()", "getSelection()", "hasFocus()", "hasStorageAccess()", "hasUnpartitionedCookieAccess()", "importNode()",
      "open()", "prepend()", "querySelector()", "querySelectorAll()", "replaceChildren()", "requestStorageAccess()", "startViewTransition()", "writeln()"
    ].join(', ')
  },
  {
    interface: "Location",
    description: "Represents the URL of the associated object, with changes reflected on that object. Accessible via Document.location and Window.location.",
    methods_properties: [
      "ancestorOrigins", "hash", "host", "hostname", "href", "origin", "pathname", "port", "protocol", "search", "assign()", "reload()", "replace()", "toString()"
    ].join(', ')
  },
  {
    interface: "XMLDocument",
    description: "The XMLDocument interface represents an XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents.",
    methods_properties: ""
  },
  {
    interface: "Attr",
    description: "Represents an element's attribute as an object, inheriting from Node.",
    methods_properties: [
      "localName", "name", "namespaceURI", "ownerElement", "prefix", "value"
    ].join(', ')
  },
  {
    interface: "Element",
    description: "The base class for all element objects in a Document, containing methods and properties common to all elements. It inherits from Node.",
    methods_properties: [
      "assignedSlot", "attributes", "childElementCount", "children", "classList", "className", "clientHeight", "clientLeft", "clientTop", "clientWidth",
      "firstElementChild", "id", "innerHTML", "lastElementChild", "localName", "namespaceURI", "nextElementSibling", "outerHTML", "part", "prefix",
      "previousElementSibling", "scrollHeight", "scrollLeft", "scrollTop", "scrollWidth", "shadowRoot", "slot", "tagName", "ARIA... // aria<properties>",
      "after()", "animate()", "append()", "attachShadow()", "before()", "checkVisibility()", "closest()", "computedStyleMap()", "getAnimations()", "getAttribute()",
      "getAttributeNames()", "getAttributeNode()", "getAttributeNodeNS()", "getAttributeNS()", "getBoundingClientRect()", "getClientRects()", "getElementsByClassName()",
      "getElementsByTagName()", "getElementsByTagNameNS()", "getHTML()", "hasAttribute()", "hasAttributeNS()", "hasAttributes()", "hasPointerCapture()",
      "insertAdjacentElement()", "insertAdjacentHTML()", "insertAdjacentText()", "matches()", "prepend()", "querySelector()", "querySelectorAll()", "releasePointerCapture()",
      "remove()", "removeAttribute()", "removeAttributeNode()", "removeAttributeNS()", "replaceChildren()", "replaceWith()", "requestFullscreen()", "requestPointerLock()",
      "scroll()", "scrollBy()", "scrollIntoView()", "scrollTo()", "setAttribute()", "setAttributeNode()", "setAttributeNodeNS()", "setAttributeNS()", "setHTMLUnsafe()",
      "setPointerCapture()", "toggleAttribute()"
    ].join(', ')
  },
  {
    interface: "NodeList",
    description: "A collection of nodes, usually returned by methods like Node.childNodes or document.querySelectorAll(). It behaves like a list but is not an Array and should be used as provided by APIs.",
    methods_properties: [
      "length", "entries()", "forEach()", "item()", "keys()", "values()"
    ].join(', ')
  },
  {
    interface: "NodeIterator",
    description: "The NodeIterator interface represents an iterator to traverse nodes of a DOM subtree in document order. A NodeIterator can be created using the Document.createNodeIterator() method.",
    methods_properties: [
      "filter", "pointerBeforeReferenceNode", "referenceNode", "root", "whatToShow", "nextNode()", "previousNode()"
    ].join(', ')
  },
  {
    interface: "TreeWalker",
    description: "The TreeWalker object represents the nodes of a document subtree and a position within them. A TreeWalker can be created using the Document.createTreeWalker() method.",
    methods_properties: [
      "currentNode", "filter", "root", "whatToShow", "firstChild()", "lastChild()", "nextNode()", "nextSibling()", "parentNode()", "previousNode()", "previousSibling()"
    ].join(', ')
  },
  {
    interface: "Range",
    description: "Represents a document fragment containing nodes or parts of text nodes. Created with Document.createRange() or retrieved via Selection.getRangeAt() or Document.caretRangeFromPoint().",
    methods_properties: [
      "Range()", "collapsed", "commonAncestorContainer", "endContainer", "endOffset", "startContainer", "startOffset", "cloneContents()", "cloneRange()", "collapse()",
      "compareBoundaryPoints()", "createContextualFragment()", "deleteContents()", "detach()", "extractContents()", "getBoundingClientRect()", "getClientRects()",
      "insertNode()", "intersectsNode()", "isPointInRange()", "selectNode()", "selectNodeContents()", "setEnd()", "setEndAfter()", "setStart()", "setStartAfter()",
      "setStartBefore()", "surroundContents()", "toString()"
    ].join(', ')
  },
  {
    interface: "HTMLCollection",
    description: "The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.",
    methods_properties: [
      "length", "item()", "namedItem()"
    ].join(', ')
  },
  {
    interface: "Event",
    description: "The Event interface represents an event which takes place on an EventTarget.",
    methods_properties: [
      "Event()", "composedPath()", "preventDefault()", "stopImmediatePropagation()", "stopPropagation()", "bubbles", "cancelable", "composed", "currentTarget",
      "defaultPrevented", "eventPhase", "isTrusted", "target", "timeStamp", "type"
    ].join(', ')
  },
  {
    interface: "DocumentFragment",
    description: "Represents a lightweight, parentless document object containing a segment of nodes. Changes to a DocumentFragment do not affect the active document tree. Inherits from Node.",
    methods_properties: [
      "DocumentConstructor()", "childElementCount", "children", "firstElementChild", "lastElementChild", "append()", "getElementById()", "prepend()", "querySelector()",
      "querySelectorAll()", "replaceChildren()"
    ].join(', ')
  },
  {
    interface: "ShadowRoot",
    description: "Represents the root of a DOM subtree rendered separately from the main document's DOM tree. Inherits from DocumentFragment.",
    methods_properties: [
      "activeElement", "adoptedStyleSheets", "clonable", "delegatesFocus", "fullscreenElement", "host", "innerHTML", "mode", "pictureInPictureElement", "pointerLockElement",
      "serializable", "slotAssignment", "styleSheets", "getAnimations()", "getHTML()", "setHTMLUnsafe()"
    ].join(', ')
  },
  {
    interface: "CharacterData",
    description: "Represents a Node containing character data, inheriting from Node.",
    methods_properties: [
      "data", "length", "nextElementSibling", "previousElementSibling", "after()", "appendData()", "before()", "deleteData()", "insertData()", "remove()", "replaceData()",
      "replaceWith()", "substringData()"
    ].join(', ')
  },
  {
    interface: "Text",
    description: "Represents a text node in a DOM tree, inheriting from Node, EventTarget, and CharacterData.",
    methods_properties: [
      "Text()", "assignedSlot", "wholeText", "splitText()"
    ].join(', ')
  }
];
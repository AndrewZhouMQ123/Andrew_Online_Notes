// Select the div with id "javaScriptCheatSheet"
const JSCheatSheet = document.getElementById("javaScriptCheatSheet");
const JSCodes = JSCheatSheet?.getElementsByTagName("code");
// iterate over JSCodes to apply the class if necessary.
if (JSCodes) {
    for (let codeElement of JSCodes) {
        codeElement.classList.add("language-js");
    }
}
export {};
//# sourceMappingURL=format.js.map
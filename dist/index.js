// Type-safe variable declarations
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;
const JSPre = document.getElementsByTagName("pre");
// iterate over JSCodes to apply the class if necessary.
if (JSPre) {
    for (let preElement of JSPre) {
        preElement.classList.add("code-box");
    }
}
// Scroll to top functionality
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
// Handle button visibility based on scroll
function handleScroll() {
    // Get the current scroll position
    const scrollPosition = rootElement.scrollTop;
    // Show button if the user has scrolled more than 1/4 of the viewport height
    if (scrollPosition > window.innerHeight / 4) {
        scrollToTopBtn?.classList.add("showBtn");
    }
    else {
        scrollToTopBtn?.classList.remove("showBtn");
    }
}
// IntersectionObserver callback function
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTopBtn?.classList.add('showBtn');
        }
        else {
            scrollToTopBtn?.classList.remove('showBtn');
        }
    });
}
// Check and bind event listeners if elements are present
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", scrollToTop);
}
else {
    console.error('Button element not found in the DOM.');
}
document.addEventListener("scroll", handleScroll);
const target = document.querySelector('.target-element');
if (scrollToTopBtn && target) {
    const observer = new IntersectionObserver(callback);
    observer.observe(target);
}
else {
    console.error('Target or button element not found in the DOM.');
}
const body = document.body;
const pageWraps = document.querySelectorAll('.page-wrap');
const horizontalWraps = document.querySelectorAll('.horizontal-wrap');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const titles = document.querySelectorAll('.blog-title');
// Check if a theme is already set
let theme = window.localStorage.getItem('theme');
if (!theme) {
    theme = 'light-theme';
    window.localStorage.setItem('theme', theme);
    body.classList.add(theme);
    updateTheme(theme);
}
if (theme !== null && typeof theme == "string") {
    // Setup the stored theme
    body.classList.add(theme);
    updateTheme(theme);
}
function updateTheme(webtheme) {
    if (webtheme == "dark-theme") {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleBtn.classList.remove('light-theme');
        themeToggleBtn.classList.add('dark-theme');
        pageWraps.forEach(element => {
            element.classList.remove('light-page');
            element.classList.add("dark-page");
        });
        horizontalWraps.forEach(element => {
            element.classList.remove('light-page');
            element.classList.add("dark-page");
        });
        titles.forEach(element => {
            element.style.textShadow = '0 0 10px rgb(85, 55, 45), 0 0 15px rgb(45, 35, 55)';
        });
    }
    else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleBtn.classList.remove('dark-theme');
        themeToggleBtn.classList.add('light-theme');
        pageWraps.forEach(element => {
            element.classList.remove('dark-page');
            element.classList.add("light-page");
        });
        horizontalWraps.forEach(element => {
            element.classList.remove('dark-page');
            element.classList.add("light-page");
        });
        titles.forEach(element => {
            element.style.textShadow = '0 0 10px rgb(235, 255, 245), 0 0 15px rgb(245, 235, 255)';
        });
    }
}
// Function to toggle theme
function toggleTheme() {
    // Check the current theme and toggle it
    if (body.classList.contains('light-theme')) {
        // Switch to dark theme
        localStorage.setItem('theme', 'dark-theme');
        // Update the background for dark theme
        updateTheme("dark-theme");
    }
    else {
        // Switch to light theme
        localStorage.setItem('theme', 'light-theme');
        // Update the background for light theme
        updateTheme("light-theme");
    }
}
// Attach the toggle function to the button click
themeToggleBtn.addEventListener('click', toggleTheme);
export {};
//# sourceMappingURL=index.js.map
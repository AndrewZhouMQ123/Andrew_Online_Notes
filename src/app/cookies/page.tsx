import PlayButton from "@/components/textToSpeechBtn";

const CookiePol = () => {
  const title = "Cookie Policy";
  const lastUpdated = "Last updated: March 7 2025";
  const whatAreCookies = `
    What Are Cookies:
    Cookies are small files stored on your device that help improve user experience.
  `;
  const howWeUseCookies = `
    How We Use Cookies:
    Essential Cookies: Required for site functionality.
    Analytics Cookies: Used to track usage and improve our services.
    Advertising Cookies: Used to personalize ads (if applicable).
  `;
  const managingCookies = `
    Managing Cookies:
    You can disable cookies in your browser settings, but some features may not work properly.
  `;
  const cookieText = `${title}\n\n${whatAreCookies}\n\n${howWeUseCookies}\n\n${managingCookies}`;

  return (
    <div className="page-wrap">
      <PlayButton text={cookieText} />
      <h1 className="blog-subtitle">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span>What Are Cookies?</span>
      <p className="blog-description">{whatAreCookies}</p>
      <span>How We Use Cookies</span>
      <p className="blog-description">{howWeUseCookies}</p>
      <span>Managing Cookies</span>
      <p className="blog-description">{managingCookies}</p>
    </div>
  );
};

export default CookiePol;

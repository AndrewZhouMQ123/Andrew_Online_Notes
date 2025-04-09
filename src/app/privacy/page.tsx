import PlayButton from "@/components/textToSpeechBtn";

const Privacy = () => {
  const title = "Privacy Policy";
  const lastUpdated = "Last updated: March 7 2025";
  const informationCollect = `
    Personal Information: data you provide would not be stored but it will be processed such as during Stripe payments.
    Usage Data: I may collect data about how you interact with my website,
    including IP addresses, browser type, and pages visited.
    Cookies: I use cookies to improve user experience and analytics.
  `;
  const dataUsage = `
    To provide and improve services.
    To process payments and support customer service.
    To comply with legal obligations and prevent fraud.
  `;
  const dataSharingProtection = `
    I do not sell or rent your personal data.
    I may share information with third-party service providers (e.g., payment processors, hosting services) as necessary.
    I take reasonable measures to protect your data, but no method of transmission over the internet is 100% secure.
    My services uses single-use QR codes and doesn't store personal data. 
    Payments are processed by third parties - we never receive payment information.
  `;
  const yourRights = `
    While we don't store data, you may contact our payment 
    providers directly regarding your transaction data under GDPR/CCPA.
  `;
  const changesToPolicy = `
    I may update this policy. Continued use of our services means you accept the changes.
  `;

  const privacyText = `${title}\n\n${informationCollect}\n\n${dataUsage}\n\n${dataSharingProtection}\n\n${yourRights}\n\n${changesToPolicy}`;

  return (
    <div className="page-wrap">
      <PlayButton text={privacyText} />
      <h1 className="blog-subtitle">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span>Information Collected</span>
      <p className="blog-description">{informationCollect}</p>
      <span>Data Usage</span>
      <p className="blog-description">{dataUsage}</p>
      <span>Data Sharing & Protection</span>
      <p className="blog-description">{dataSharingProtection}</p>
      <span>Your Rights</span>
      <p className="blog-description">{yourRights}</p>
      <span>Changes to this Policy</span>
      <p className="blog-description">{changesToPolicy}</p>
    </div>
  );
};

export default Privacy;

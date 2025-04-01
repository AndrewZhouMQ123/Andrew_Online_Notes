import buttonstyles from "@/app/ui/buttons.module.css";
import PlayButton from "@/components/textToSpeechBtn";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Welcome />,
      <TOS />,
      <Services />,
      <Privacy />,
      <Refund />,
      <DMCAcopyright />,
      <CookiePol />,
      <AUP />,
    </div>
  );
}

const Welcome = () => {
  const title = "Welcome to Web-Goodies!";
  const description = `By accessing or using our website and services, you agree to be bound by
  these Terms of Service. If you do not agree with any part of these terms, please do not use our services.`;
  const welcomeText = `${title}\n${description}`;
  return (
    <div className="page-wrap">
      <PlayButton text={welcomeText} />
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-description">{description}</p>
    </div>
  );
};

const TOS = () => {
  const title = "Terms of Service";
  const lastUpdated = "Last updated: March 7 2025";
  const useOfServices = `
    To use our services, you must be at least 13 years old, or under parent
    supervision if you are younger. You agree to use our website and
    services in compliance with all applicable laws and regulations. Any
    misuse of the platform, including attempts to disrupt service or
    unauthorized access, is strictly prohibited.
  `;
  const contentAndIntellectualProperty = `
    All content, including games, graphs, and utilities, is owned by
    Web-Goodies or its licensors. You may not copy, distribute, or modify
    any part of our website without permission. User-generated content (such
    as game scores or forum posts) remains your property, but you grant us a
    license to display and distribute it within the platform.
  `;
  const paymentAndSubscriptions = `
    If you choose to support us on Patreon or purchase any premium services,
    you agree to abide by the payment terms specified. Subscription fees, if
    applicable, are non-refundable unless required by law.
  `;
  const limitationsOfLiability = `
    Our website and services are provided "as is" without warranties of any
    kind. We are not liable for any damages, losses, or issues arising from
    the use of our platform, including data loss or service downtime. We
    reserve the right to modify or discontinue any part of our services without
    notice.
  `;
  const thirdPartyLinksAndServices = `
    Our website may contain links to third-party websites, including
    Patreon. We are not responsible for the content or practices of these
    external sites. Use of third-party services is at your own risk and
    subject to their respective terms.
  `;
  const termination = `
    We reserve the right to terminate or suspend your access to our services
    if you violate these terms. Upon termination, you must cease all use of
    the platform and its content.
  `;
  const changesToTerms = `
    We may update these Terms of Service at any time. Continued use of our
    services after changes means you accept the new terms.
  `;
  const contactUs = `
    If you have any questions about these Terms of Service, please contact
    us at our Contact page.
  `;
  const tosText = `${title}\n${lastUpdated}\n\n${useOfServices}\n\n${contentAndIntellectualProperty}
  \n\n${paymentAndSubscriptions}\n\n${limitationsOfLiability}\n\n${thirdPartyLinksAndServices}
  \n\n${termination}\n\n${changesToTerms}\n\n${contactUs}`;
  return (
    <div className="page-wrap">
      <PlayButton text={tosText} />
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span className="blog-subtitle">Use of Services</span>
      <p className="blog-description">{useOfServices}</p>
      <span className="blog-subtitle">Content and Intellectual Property</span>
      <p className="blog-description">{contentAndIntellectualProperty}</p>
      <span className="blog-subtitle">Payment and Subscriptions</span>
      <p className="blog-description">{paymentAndSubscriptions}</p>
      <span className="blog-subtitle">Limitations of Liability</span>
      <p className="blog-description">{limitationsOfLiability}</p>
      <span className="blog-subtitle">Third-Party Links and Services</span>
      <p className="blog-description">{thirdPartyLinksAndServices}</p>
      <span className="blog-subtitle">Termination</span>
      <p className="blog-description">{termination}</p>
      <span className="blog-subtitle">Changes to These Terms</span>
      <p className="blog-description">{changesToTerms}</p>
      <span className="blog-subtitle">Contact Us</span>
      <p className="blog-description">{contactUs}</p>
    </div>
  );
};

const Services = () => {
  const title = "Services Offered";
  const graphingUtilitiesDescription = `
    Graphing Utilities: You can quickly fit experiment data to models and
    plot publishing quality graphs. Backend API Hosted on Heroku eco dynos
    for $14 a month. If you like this API, please consider supporting me on
    Patreon.
  `;
  const webGamesDescription = `
    Web games: Including but not limited to Tetris, PacMan, Space Invaders,
    Chess, and 8 Ball Pool.
  `;
  const patreonLink = "patreon.com/AndrewSurfsTheWeb";
  const servicesText = `${title}\n\n${graphingUtilitiesDescription}\n\n${webGamesDescription}`;

  return (
    <div className="page-wrap">
      <PlayButton text={servicesText} />
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-description">
        {graphingUtilitiesDescription}{" "}
        <Link className={buttonstyles.link} href={`https://${patreonLink}`}>
          Patreon
        </Link>
      </p>
      <p className="blog-description">
        {webGamesDescription}
        <Link className={buttonstyles.link} href="">
          Tetris
        </Link>
        ,{" "}
        <Link className={buttonstyles.link} href="">
          PacMan
        </Link>
        ,{" "}
        <Link className={buttonstyles.link} href="">
          Space Invaders
        </Link>
        ,{" "}
        <Link className={buttonstyles.link} href="">
          Chess
        </Link>{" "}
        and{" "}
        <Link className={buttonstyles.link} href="">
          8 Ball Pool
        </Link>
        .
      </p>
    </div>
  );
};

const Privacy = () => {
  // Define text content for each section as variables
  const title = "Privacy Policy";
  const lastUpdated = "Last updated: March 7 2025";
  const informationWeCollect = `
    Information We Collect:
    Personal Data: If you sign up, support us on Patreon, or contact us, we
    may collect your name, email, and payment details.
    Usage Data: We may collect data about how you interact with our website,
    including IP addresses, browser type, and pages visited.
    Cookies: We use cookies to improve user experience and analytics.
  `;
  const howWeUseData = `
    How We Use Your Data:
    To provide and improve our services.
    To process payments (if applicable) and support customer service.
    To comply with legal obligations and prevent fraud.
  `;
  const dataSharingProtection = `
    Data Sharing & Protection:
    We do not sell or rent your personal data.
    We may share information with third-party service providers (e.g., payment processors, hosting services) as necessary.
    Your data is stored securely, but no system is 100% secure. Use at your own risk.
  `;
  const yourRights = `
    Your Rights:
    You can request access to, correction, or deletion of your personal data.
    If you are in the EU/California, you may have additional rights under GDPR/CCPA.
  `;
  const changesToPolicy = `
    Changes to this Policy:
    We may update this policy. Continued use of our services means you accept the changes.
  `;

  const privacyText = `${title}\n\n${informationWeCollect}\n\n${howWeUseData}\n\n${dataSharingProtection}\n\n${yourRights}\n\n${changesToPolicy}`;

  return (
    <div className="page-wrap">
      <PlayButton text={privacyText} />
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span className="blog-subtitle">Information We Collect</span>
      <p className="blog-description">{informationWeCollect}</p>
      <span className="blog-subtitle">How We Use Your Data</span>
      <p className="blog-description">{howWeUseData}</p>
      <span className="blog-subtitle">Data Sharing & Protection</span>
      <p className="blog-description">{dataSharingProtection}</p>
      <span className="blog-subtitle">Your Rights</span>
      <p className="blog-description">{yourRights}</p>
      <span className="blog-subtitle">Changes to this Policy</span>
      <p className="blog-description">{changesToPolicy}</p>
    </div>
  );
};

const Refund = () => {
  const title = "Refund Policy";
  const lastUpdated = "Last updated: March 7 2025";
  const refundEligibility = `
    Refund Eligibility:
    Payments for digital services (e.g., Patreon support, downloadable content) are generally non-refundable.
    If a service is defective or unavailable due to our fault, you may request a refund within 14 days.
    Refund requests must be submitted via Contact.
  `;
  const nonRefundableItems = `
    Non-Refundable Items:
    Donations made through Patreon or other voluntary contributions.
    Any digital content that has already been downloaded or accessed.
  `;
  const refundText = `${title}\n\n${refundEligibility}\n\n${nonRefundableItems}`;

  return (
    <div className="page-wrap">
      <PlayButton text={refundText} />
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span className="blog-subtitle">Refund Eligibility</span>
      <p className="blog-description">{refundEligibility}</p>
      <span className="blog-subtitle">Non-Refundable Items</span>
      <p className="blog-description">{nonRefundableItems}</p>
    </div>
  );
};

const DMCAcopyright = () => {
  const title = "DMCA & Copyright Policy";
  const lastUpdated = "Last updated: March 7 2025";
  const reportingInfringement = `
    Reporting Copyright Infringement:
    If you believe content on our site infringes your copyright, please submit a DMCA takedown request at Contact with:
    Your contact details.
    A description of the copyrighted work.
    The URL of the infringing content.
    A statement that you have a good faith belief the use is unauthorized.
  `;
  const dmcaText = `${title}\n\n${reportingInfringement}`;

  return (
    <div className="page-wrap">
      <PlayButton text={dmcaText} />
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span className="blog-subtitle">Reporting Copyright Infringement</span>
      <p className="blog-description">{reportingInfringement}</p>
    </div>
  );
};

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
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span className="blog-subtitle">What Are Cookies?</span>
      <p className="blog-description">{whatAreCookies}</p>
      <span className="blog-subtitle">How We Use Cookies</span>
      <p className="blog-description">{howWeUseCookies}</p>
      <span className="blog-subtitle">Managing Cookies</span>
      <p className="blog-description">{managingCookies}</p>
    </div>
  );
};

const AUP = () => {
  const title = "Acceptable Use Policy (AUP)";
  const lastUpdated = "Last updated: March 7 2025";
  const prohibitedActivities = `
    Prohibited Activities:
    No illegal or unauthorized use.
    No spamming, hacking, or attempting to disrupt services.
    No harassment, hate speech, or abuse toward others.
  `;
  const enforcement = `
    Enforcement:
    Violations of this policy may result in termination of access to our services.
  `;
  const changesToAUP = `
    Changes to the AUP:
    We reserve the right to update this policy at any time. For any questions, contact us at Contact.
  `;
  const aupText = `${title}\n\n${prohibitedActivities}\n\n${enforcement}\n\n${changesToAUP}`;

  return (
    <div className="page-wrap">
      <PlayButton text={aupText} />
      <h1 className="blog-title glitter-title">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span className="blog-subtitle">Prohibited Activities</span>
      <p>{prohibitedActivities}</p>
      <span className="blog-subtitle">Enforcement</span>
      <p>{enforcement}</p>
      <span className="blog-subtitle">Changes to the AUP</span>
      <p>{changesToAUP}</p>
    </div>
  );
};

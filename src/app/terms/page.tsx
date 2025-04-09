import buttonstyles from "@/app/ui/buttons.module.css";
import PlayButton from "@/components/textToSpeechBtn";
import Link from "next/link";

const TOS = () => {
  const title0 = "Welcome to Web-Goodies!";
  const description = `By accessing or using our website and services, you agree to be bound by
  these Terms of Service. If you do not agree with any part of these terms, please do not use our services.`;

  const title = "Terms of Service";
  const lastUpdated = "Last updated: March 7 2025";
  const useOfServices = `
    To use my services, you agree to use our website and
    services in compliance with all applicable laws and regulations. Any
    misuse of the platform, including attempts to disrupt service or
    unauthorized access, is strictly prohibited.
  `;
  const contentAndIntellectualProperty = `
    The APIs on the website are owned by me, Andrew Zhou.
    You may message me on Twitter for a free trial API key if you are interested in using the APIs.  
    You may shoot me an email if you want to know more about the inner workings of the APIs, or if you want to
    contribute to the project. To learn more about the APIs, you can go over to my
  `;
  const paymentAndSubscriptions = `
    If you choose to support me on Patreon or purchase any premium services,
    you agree to abide by the payment terms specified. Subscription fees, if
    applicable, are non-refundable unless required by law.
  `;
  const limitationsOfLiability = `
    My website and services are provided "as is" without warranties of any
    kind. I am not liable for any damages, losses, or issues arising from
    the use of our platform, including data loss or service downtime. I
    reserve the right to modify or discontinue any part of our services without
    notice.
  `;
  const thirdPartyLinksAndServices = `
    My website may contain links to third-party websites. I am not responsible for the content or practices of these
    external sites. Use of third-party services is at your own risk and
    subject to their respective terms.
  `;
  const termination = `
    I reserve the right to terminate or suspend your access to my services
    if you violate these terms, that includes IP blocking and other things.
    Upon termination, you must cease all use of
    the platform and its content.
  `;
  const changesToTerms = `
    I may update these Terms of Service at any time. Continued use of these
    services after changes means you accept the new terms.
  `;
  const contactUs = `
    If you have any questions about these Terms of Service, please contact
    me at
  `;
  const title2 = "Services Offered";
  const graphingUtilitiesDescription = `
    : You can quickly fit experiment data to models and
    plot publishing quality graphs. Backend API is hosted on Heroku eco dynos
    for $14 a month. If you like this API, please consider supporting me on
  `;
  const webGamesDescription = `
    Web games: Including but not limited to Tetris, PacMan, Space Invaders,
    Chess, and 8 Ball Pool.
  `;
  const patreonLink = "patreon.com/AndrewSurfsTheWeb";

  const tosText = `${title0}\n${description}\n${title}\n${lastUpdated}\n\n${useOfServices}\n\n${contentAndIntellectualProperty}
  \n\n${paymentAndSubscriptions}\n\n${limitationsOfLiability}\n\n${thirdPartyLinksAndServices}
  \n\n${termination}\n\n${changesToTerms}\n\n${contactUs}\n\n${title}\n\n${graphingUtilitiesDescription}\n\n${webGamesDescription}`;
  return (
    <div className="page-wrap">
      <PlayButton text={tosText} />
      <h1 className="blog-subtitle">{title0}</h1>
      <p className="blog-description">{description}</p>
      <h1 className="blog-subtitle">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span>Use of Services</span>
      <p className="blog-description">{useOfServices}</p>
      <span>Content and Intellectual Property</span>
      <p className="blog-description">
        {contentAndIntellectualProperty}{" "}
        <Link
          className={buttonstyles.link}
          href="https://github.com/AndrewZhouMQ123"
        >
          GitHub
        </Link>
      </p>
      <span>Payment and Subscriptions</span>
      <p className="blog-description">{paymentAndSubscriptions}</p>
      <span>Limitations of Liability</span>
      <p className="blog-description">{limitationsOfLiability}</p>
      <span>Third-Party Links and Services</span>
      <p className="blog-description">{thirdPartyLinksAndServices}</p>
      <span>Termination</span>
      <p className="blog-description">{termination}</p>
      <span>Changes to These Terms</span>
      <p className="blog-description">{changesToTerms}</p>
      <span>Contact Us</span>
      <p className="blog-description">
        {contactUs}{" "}
        <Link className={buttonstyles.link} href="/about/1">
          Contact page
        </Link>
        .{" "}
      </p>
      <h1 className="blog-subtitle">{title2}</h1>
      <p className="blog-description">
        <Link className={buttonstyles.link} href={"/utilities/1"}>
          Graphing Utilities
        </Link>
        {graphingUtilitiesDescription}{" "}
        <Link className={buttonstyles.link} href={`https://${patreonLink}`}>
          Patreon
        </Link>
        .
      </p>
      <p className="blog-description">{webGamesDescription}</p>
    </div>
  );
};

export default TOS;

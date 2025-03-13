"use client";
import buttonstyles from "@/app/ui/buttons.module.css";
import PlayButton from "@/components/textToSpeechBtn";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const components = [
    <Welcome key={0} />,
    <TOS key={1} />,
    <Services key={2} />,
    <Privacy key={3} />,
    <Refund key={4} />,
    <DMCAcopyright key={5} />,
    <CookiePol key={6} />,
    <AUP key={7} />,
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % components.length);
  };

  return (
    <div
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
    >
      {components.map((component, index) => (
        <div
          key={index}
          onClick={handleNext}
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            overflowY: "auto",
            display: currentStep === index ? "block" : "none",
            transform: `translateX(${
              currentStep === index ? 0 : index > currentStep ? 100 : -100
            }%)`,
            transition: "all 0.3s ease-in-out",
            pointerEvents: currentStep === index ? "auto" : "none",
            cursor: "pointer",
          }}
        >
          {component}
        </div>
      ))}
      <div
        onClick={handleNext}
        style={{
          color: " #FFE699",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.05)",
          cursor: "pointer",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          transition: "opacity 0.2s",
          opacity: 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Click anywhere to continue →
      </div>
    </div>
  );
}

const Welcome = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">Welcome to Web-Goodies!</h1>
      <p className="blog-description">
        By accessing or using our website and services, you agree to be bound by
        these Terms of Service. If you do not agree with any part of these
        terms, please do not use our services.
      </p>
    </div>
  );
};

const TOS = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">Terms of Service</h1>
      <p className="blog-stats">Last updated: March 7 2025</p>
      <span className="blog-subtitle">Use of Services</span>
      <p className="blog-description">
        To use our services, you must be at least 13 years old, or under parent
        supervision if you are younger. You agree to use our website and
        services in compliance with all applicable laws and regulations. Any
        misuse of the platform, including attempts to disrupt service or
        unauthorized access, is strictly prohibited.
      </p>
      <span className="blog-subtitle">Content and Intellectual Property </span>
      <p className="blog-description">
        All content, including games, graphs, and utilities, is owned by
        Web-Goodies or its licensors. You may not copy, distribute, or modify
        any part of our website without permission. User-generated content (such
        as game scores or forum posts) remains your property, but you grant us a
        license to display and distribute it within the platform.
      </p>
      <span className="blog-subtitle">Payment and Subscriptions</span>
      <p className="blog-description">
        If you choose to support us on Patreon or purchase any premium services,
        you agree to abide by the payment terms specified. Subscription fees, if
        applicable, are non-refundable unless required by law.
      </p>
      <span className="blog-subtitle">Limitations of Liability</span>
      <p className="blog-description">
        Our website and services are provided &quot;as is&quot; without
        warranties of any kind. We are not liable for any damages, losses, or
        issues arising from the use of our platform, including data loss or
        service downtime. We reserve the right to modify or discontinue any part
        of our services without notice.
      </p>
      <span className="blog-subtitle">Third-Party Links and Services</span>
      <p className="blog-description">
        Our website may contain links to third-party websites, including
        Patreon. We are not responsible for the content or practices of these
        external sites. Use of third-party services is at your own risk and
        subject to their respective terms.
      </p>
      <span className="blog-subtitle">Termination</span>
      <p className="blog-description">
        We reserve the right to terminate or suspend your access to our services
        if you violate these terms. Upon termination, you must cease all use of
        the platform and its content.
      </p>
      <span className="blog-subtitle">Changes to These Terms</span>
      <p className="blog-description">
        We may update these Terms of Service at any time. Continued use of our
        services after changes means you accept the new terms.
      </p>
      <span className="blog-subtitle">Contact Us</span>
      <p className="blog-description">
        If you have any questions about these Terms of Service, please contact
        us at{" "}
        <Link className={buttonstyles.link} href="/about/1">
          Contact
        </Link>
        .
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">Services Offered</h1>
      <p className="blog-description">
        Graphing Utilities: You can quickly fit experiment data to models and
        plot publishing quality graphs. Backend API Hosted on Heroku eco dynos
        for $14 a month. If you like this API, please consider supporting me on{" "}
        <Link
          className={buttonstyles.link}
          href="patreon.com/AndrewSurfsTheWeb"
        >
          Patreon
        </Link>
        .
      </p>
      <p className="blog-description">
        Web games: Including but not limited to{" "}
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
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">Privacy Policy</h1>
      <p className="blog-stats">Last updated: March 7 2025</p>
      <span className="blog-subtitle">Information We Collect</span>
      <p className="blog-description">
        Personal Data: If you sign up, support us on Patreon, or contact us, we
        may collect your name, email, and payment details.
      </p>
      <p className="blog-description">
        Usage Data: We may collect data about how you interact with our website,
        including IP addresses, browser type, and pages visited.
      </p>
      <p className="blog-description">
        Cookies: We use cookies to improve user experience and analytics.
      </p>
      <span className="blog-subtitle">How We Use Your Data</span>
      <p className="blog-description">To provide and improve our services.</p>
      <p className="blog-description">
        To process payments (if applicable) and support customer service.
      </p>
      <p className="blog-description">
        To comply with legal obligations and prevent fraud.
      </p>
      <span className="blog-subtitle">Data Sharing & Protection</span>
      <p>We do not sell or rent your personal data.</p>
      <p className="blog-description">
        We may share information with third-party service providers (e.g.,
        payment processors, hosting services) as necessary.
      </p>
      <p className="blog-description">
        Your data is stored securely, but no system is 100% secure. Use at your
        own risk.
      </p>
      <span className="blog-subtitle">Your Rights</span>
      <p className="blog-description">
        You can request access to, correction, or deletion of your personal
        data.
      </p>
      <p className="blog-description">
        If you are in the EU/California, you may have additional rights under
        GDPR/CCPA.
      </p>
      <span className="blog-subtitle">Changes to this Policy</span>
      <p className="blog-description">
        We may update this policy. Continued use of our services means you
        accept the changes.
      </p>
    </div>
  );
};

const Refund = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">Refund Policy</h1>
      <p className="blog-stats">Last updated: March 7 2025</p>
      <span className="blog-subtitle">Refund Eligibility</span>
      <p className="blog-description">
        Payments for digital services (e.g., Patreon support, downloadable
        content) are generally non-refundable.
      </p>
      <p className="blog-description">
        If a service is defective or unavailable due to our fault, you may
        request a refund within 14 days.
      </p>
      <p className="blog-description">
        Refund requests must be submitted via{" "}
        <Link className={buttonstyles.link} href="/about/1">
          Contact
        </Link>
        .
      </p>
      <span className="blog-subtitle">Non-Refundable Items</span>
      <p className="blog-description">
        Donations made through Patreon or other voluntary contributions.
      </p>
      <p className="blog-description">
        Any digital content that has already been downloaded or accessed.
      </p>
    </div>
  );
};

const DMCAcopyright = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">DMCA & Copyright Policy</h1>
      <p className="blog-stats">Last updated: March 7 2025</p>
      <p className="blog-description">
        Web Goodies respects intellectual property rights and complies with the
        Digital Millennium Copyright Act (DMCA).
      </p>
      <span className="blog-subtitle">Reporting Copyright Infringement</span>
      <p className="blog-description">
        If you believe content on our site infringes your copyright, please
        submit a DMCA takedown request at{" "}
        <Link className={buttonstyles.link} href="/about/1">
          Contact
        </Link>{" "}
        with:
      </p>
      <p className="blog-description">Your contact details.</p>
      <p className="blog-description">A description of the copyrighted work.</p>
      <p className="blog-description">The URL of the infringing content.</p>
      <p className="blog-description">
        A statement that you have a good faith belief the use is unauthorized.
      </p>
    </div>
  );
};

const CookiePol = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">Cookie Policy</h1>
      <p className="blog-stats">Last updated: March 7 2025</p>
      <span className="blog-subtitle">What Are Cookies?</span>
      <p className="blog-description">
        Cookies are small files stored on your device that help improve user
        experience.
      </p>
      <span className="blog-subtitle">How We Use Cookies</span>
      <p className="blog-description">
        Essential Cookies: Required for site functionality.
      </p>
      <p className="blog-description">
        Analytics Cookies: Used to track usage and improve our services.
      </p>
      <p className="blog-description">
        Advertising Cookies: Used to personalize ads (if applicable).
      </p>
      <span className="blog-subtitle">Managing Cookies</span>
      <p className="blog-description">
        You can disable cookies in your browser settings, but some features may
        not work properly.
      </p>
    </div>
  );
};

const AUP = () => {
  return (
    <div className="page-wrap">
      <PlayButton />
      <h1 className="blog-title glitter-title">Acceptable Use Policy (AUP)</h1>
      <p className="blog-stats">Last updated: March 7 2025</p>
      <span className="blog-subtitle">Prohibited Activities</span>
      <p>No illegal or unauthorized use.</p>
      <p>No spamming, hacking, or attempting to disrupt services.</p>
      <p>No harassment, hate speech, or abuse toward others</p>
      <span className="blog-subtitle">Enforcement</span>
      <p>
        Violations of this policy may result in termination of access to our
        services.
      </p>
      <span className="blog-subtitle">Changes to the AUP</span>
      <p>
        We reserve the right to update this policy at any time. For any
        questions, contact us at{" "}
        <Link className={buttonstyles.link} href="/about/1">
          Contact
        </Link>
        .
      </p>
    </div>
  );
};

"use client";
import BlogTemplate from "@/components/BlogTemplate";
import buttonstyles from "@/app/ui/buttons.module.css";
import {
  Languages,
  ProgrammingLanguages,
  SoftwareTechnologies,
  externalAPIs,
  DatabaseTechnologies,
  CloudTechnologies,
  HardwareTechnologies,
  Soft,
} from "./data/skills";
import { certificates } from "./data/certificates";
import Skills from "./components/skills";
import Certificates from "./components/certs";
import Link from "next/link";
import { useState } from "react";

const Intro = `Hello, I am the creator of this website. I graduated from UBC with Bachelor of Science majoring in Physics.
I am currently working as a tutor at Elite Educational Institute, otherwise known as Elite Prep. I love coding and building things.
This website, like a few others, is a project utilizing full stack technologies. Continue clicking to know more about me and my tech stack.`;

export default function AboutMe() {
  const [currentStep, setCurrentStep] = useState(0);
  const components = [
    <BlogTemplate
      title="About Me"
      subtitle="Introduction"
      author="Zhou Muqing (Andrew) ✓"
      description={Intro}
      key={0}
    />,
    <Education key={1} />,
    <Qualifications key={2} />,
    <TechnicalSkills key={3} />,
    <Projects key={4} />,
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
            opacity: currentStep === index ? 1 : 0,
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
          color: "#FFE699",
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

const Education = () => {
  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">Education:</h1>
      <p className="blog-subtitle">
        Bachelor of Science in Physics: University of British Columbia
      </p>
      <Certificates data={certificates} title="Certificates" />
      <Skills data={Languages} title="Languages" />
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <div className="page-wrap">
      <Skills data={SoftwareTechnologies} title="Software Technologies" />
      <Skills data={externalAPIs} title="External APIs" />
      <Skills data={DatabaseTechnologies} title="Database Technologies" />
      <Skills data={CloudTechnologies} title="Cloud Technologies" />
      <Skills data={HardwareTechnologies} title="Hardware Technologies" />
    </div>
  );
};

const Qualifications = () => {
  return (
    <div className="page-wrap">
      <Skills data={ProgrammingLanguages} title="Programming Languages" />
      <Skills data={Soft} title="Soft Skills" />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="page-wrap">
      <h1 className="blog-subtitle">My Websites:</h1>
      <Link
        className={buttonstyles.link}
        href="https://web-goodies.vercel.app/"
      >
        Web Goodies
      </Link>
      <Link
        className={buttonstyles.link}
        href="http://vlogms.s3-website.us-east-2.amazonaws.com/"
      >
        Vlogs Sharing
      </Link>
      <h1 className="blog-subtitle">My Hobbies:</h1>
      <p>Web Novels</p>
      <p>Drawing</p>
      <p>Singing</p>
      <p>Videogames</p>
      <h1 className="blog-subtitle">More Links:</h1>
      <Link
        className={buttonstyles.link}
        href="https://github.com/AndrewZhouMQ123"
      >
        GitHub
      </Link>
      <Link
        className={buttonstyles.link}
        href="https://www.linkedin.com/in/andrew-zhou-8b4296326/"
      >
        LinkedIn
      </Link>
    </div>
  );
};

import BlogTemplate from "@/components/BlogTemplate";
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

const Intro = `I am a tutor at Elite Educational Institute.
I graduated from UBC with Bachelor of Science majoring in Physics.
I am currently studying for Insurance Level 1. I love coding and building things.`;

export default function AboutMe() {
  return (
    <div>
      <BlogTemplate
        title="About Me"
        subtitle="Introduction"
        author="Zhou Mu Qing (Andrew) ✓"
        description={Intro}
      />
      <div className="page-wrap">
        <Certificates data={certificates} title="Certificates" />
        <Skills data={Languages} title="Languages" />
        <Skills data={ProgrammingLanguages} title="Programming Languages" />
        <Skills data={SoftwareTechnologies} title="Software Technologies" />
        <Skills data={externalAPIs} title="External APIs" />
        <Skills data={DatabaseTechnologies} title="Database Technologies" />
        <Skills data={CloudTechnologies} title="Cloud Technologies" />
        <Skills data={HardwareTechnologies} title="Hardware Technologies" />
        <Skills data={Soft} title="Soft Skills" />
      </div>
      <div className="page-wrap">
        <h1>My Projects:</h1>
        <ul>
          <li>
            <a>https://web-goodies.vercel.app/</a>
            <a>http://vlogms.s3-website.us-east-2.amazonaws.com/</a>
          </li>
        </ul>
        <h1>My Hobbies:</h1>
        <ul>
          <li>Writing Web Novels</li>
          <li>Drawing</li>
          <li>Singing</li>
        </ul>
      </div>
    </div>
  );
}

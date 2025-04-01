"use client";
import React, { useState, useEffect } from "react";
import supabase from "@/lib/db";
import BlogTemplate from "@/components/BlogTemplate";
import buttonstyles from "@/app/ui/buttons.module.css";
import Skills from "./components/skills";
import Certificates from "./components/certs";
import Link from "next/link";

const Intro = `Hello, my name is Andrew Zhou, I am the creator of this website. 
I created this website to keep digital notes of various things I learned, for myself to review, and for others to learn.
I also put some small applications in Utilities that I think are cool or will save you time, such as the graphing utility.`;

export default function AboutMe() {
  return (
    <div>
      <BlogTemplate
        title="About Me"
        subtitle="Introduction"
        stats="Last updated: March 31 2025"
        author="Andrew Zhou Muqing✓"
        description={Intro}
      />
      ,
      <Education />,
      <Qualifications />,
      <TechnicalSkills />,
      <Projects />
    </div>
  );
}

interface Skill {
  skill: string;
  proficiency: string;
}

interface Certificate {
  certificate: string;
  date: string;
}

const Education = () => {
  const [certificatesData, setCertificatesData] = useState<Certificate[]>([]); // Certificates data state
  const [languagesData, setLanguagesData] = useState<Skill[]>([]); // Languages data state
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      // Fetch certificates data
      const certificateData = await fetchDataByName("Certificates");

      // Fetch languages data
      const languageData = await fetchDataByName("Languages");
      setCertificatesData(certificateData);
      setLanguagesData(languageData);
      setLoading(false); // Set loading to false after fetching
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div className="page-wrap">Loading...</div>; // Show loading while data is being fetched
  }

  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">Education:</h1>
      <p className="blog-subtitle">
        Bachelor of Science in Physics: University of British Columbia
      </p>
      <Certificates data={certificatesData} title="Certificates" />
      <Skills data={languagesData} title="Languages" />
    </div>
  );
};

const TechnicalSkills = () => {
  const [softwareTechnologies, setSoftwareTechnologies] = useState<Skill[]>([]);
  const [externalAPIs, setExternalAPIs] = useState<Skill[]>([]);
  const [databaseTechnologies, setDatabaseTechnologies] = useState<Skill[]>([]);
  const [cloudTechnologies, setCloudTechnologies] = useState<Skill[]>([]);
  const [hardwareTechnologies, setHardwareTechnologies] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch each category's data from the database
      const softwareData = await fetchDataByName("SoftwareTechnologies");
      const externalAPIsData = await fetchDataByName("externalAPIs");
      const databaseTechnologiesData = await fetchDataByName(
        "DatabaseTechnologies"
      );
      const cloudTechnologiesData = await fetchDataByName("CloudTechnologies");
      const hardwareTechnologiesData = await fetchDataByName(
        "HardwareTechnologies"
      );

      // Set the state with fetched data
      setSoftwareTechnologies(softwareData);
      setExternalAPIs(externalAPIsData);
      setDatabaseTechnologies(databaseTechnologiesData);
      setCloudTechnologies(cloudTechnologiesData);
      setHardwareTechnologies(hardwareTechnologiesData);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="page-wrap">Loading...</div>;
  }

  return (
    <div className="page-wrap">
      <Skills data={softwareTechnologies} title="Software Technologies" />
      <Skills data={externalAPIs} title="External APIs" />
      <Skills data={databaseTechnologies} title="Database Technologies" />
      <Skills data={cloudTechnologies} title="Cloud Technologies" />
      <Skills data={hardwareTechnologies} title="Hardware Technologies" />
    </div>
  );
};

const Qualifications = () => {
  const [programmingLanguages, setProgrammingLanguages] = useState<Skill[]>([]);
  const [softSkills, setSoftSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Programming Languages and Soft Skills data from the database
      const programmingData = await fetchDataByName("ProgrammingLanguages");
      const softSkillsData = await fetchDataByName("Soft");

      // Set the state with fetched data
      setProgrammingLanguages(programmingData);
      setSoftSkills(softSkillsData);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="page-wrap">Loading...</div>;
  }

  return (
    <div className="page-wrap">
      <Skills data={programmingLanguages} title="Programming Languages" />
      <Skills data={softSkills} title="Soft Skills" />
    </div>
  );
};

// Fetch data by name utility function
const fetchDataByName = async (name: string) => {
  const { data, error } = await supabase
    .from("devnotes") // Your table name
    .select("datasheet")
    .eq("name", name) // Match the name column
    .single(); // We expect only one row per name

  if (error) {
    console.error(`Error fetching ${name}:`, error);
    return []; // Return an empty array on error
  }

  return data?.datasheet || []; // Return the datasheet or an empty array if not found
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

"use client";
import React, { useState, useEffect } from "react";
import supabase from "@/lib/db";
import BlogTemplate from "@/components/BlogTemplate";
import buttonstyles from "@/app/ui/buttons.module.css";
import Skills from "./components/skills";
import Certificates from "./components/certs";
import Link from "next/link";

const about = `Hello, my name is Andrew Zhou, I am the creator of this website. 
I created this website to keep digital notes of various things I learned, for myself to review, and for others to learn.
I also put some small applications in Utilities that I think are cool or will save you time, such as the graphing utility.`;

export default function AboutMe() {
  return (
    <div>
      <BlogTemplate
        title="About This Website"
        subtitle="Introduction"
        stats="Last updated: March 31 2025"
        author="Andrew Zhou Muqing✓"
        description={about}
      />
      <Education />
      <h1 className="blog-subtitle">
        Andrew Zhou:{" "}
        <a
          href="/Full_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          CV/resume
        </a>
      </h1>
      <h1 className="blog-subtitle">My Websites:</h1>
      <Link
        className={buttonstyles.link}
        href="http://vlogms.s3-website.us-east-2.amazonaws.com/"
      >
        Vlogs Sharing
      </Link>
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

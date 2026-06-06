import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Phone, Download, ExternalLink, Code2, Settings, Workflow, Database, Cpu } from "lucide-react";
import { Project, ExperienceItem, SkillGroup } from "./types";

export const projects = {
  mechatronics: [
    {
      title: "DFMEA Moderation",
      description: "Developed and maintained DFMEA as per European standards for automotive systems.",
      tags: ["DFMEA", "SCIO/e1ns", "Automotive"],
      image: "/Profile-NS/DFMEA.png"
    },
    {
      title: "CAD Support & Series Activities.",
      description: "Supported CAD modelling & drawings for ECU plastic parts. Also worked on PCBA technology,",
      tags: ["CREO", "ECU"],
      image: "/Profile-NS/CAD.jpg"
    }
  ],
  plm: [
    {
      title: "BMIDE Customization",
      description: "Customized Teamcenter data model by implementing Item Types, properties, LOVs, and naming rules.",
      tags: ["BMIDE", "Data Modeling", "Teamcenter"],
      image: "/Profile-NS/BMIDE.png"
    },
    {
      title: "Custom ITK utilities",
      description: "Developed custom ITK utilities for server-side automation and data management in Teamcenter.",
      tags: ["ITK", "C/C++", "PLM"],
      image: "/Profile-NS/ITK.png"
    }
  ],
  automation: [
    {
      title: "Portfolio Website",
      description: "Engineered an immersive digital experience by synergizing React with advanced AI-driven development workflows, pushing the boundaries of traditional portfolio design through creative automation and modern web aesthetics.",
      tags: ["React", "AI-Assisted Dev", "Creative Automation", "Framer Motion"],
      image: "/Profile-NS/Web.png"
    },
    {
      title: "Confluence Knowledge Hub",
      description: "Established a centralized Confluence wiki to consolidate technical know-how and project documentation, significantly enhancing cross-team collaboration and information accessibility.",
      tags: ["Confluence", "Knowledge Management", "Collaboration"],
      image: "/Profile-NS/wiki.png"
    }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    company: "Knorr-Bremse Technology Centre India",
    role: "PLM Developer",
    period: "01/23 - Present",
    location: "Pune, India",
    points: [
      "- Developed and maintained ITK-based custom utilities for Teamcenter automation.",
      "- Implemented AWC customizations to enhance user experience and meet business requirements.",
      "- Worked on BMIDE configuration for custom objects, properties, and relations.",
      "- Supported PLM enhancements, bug fixes, and deployments in production environments."
    ]
  },
  {
    company: "Knorr-Bremse Technology Centre India",
    role: "Engineering Intern (R&D)",
    period: "10 Jan 2023 - 10 July 2023",
    location: "Pune, India",
    points: [
      "- Assisted in DFMEA (Design Failure Mode and Effects Analysis) for brake system components.",
      "- Provided CAD support using CREO for design modifications and 3D modelling tasks.",
      "- Supported requirements management activities — capturing, tracking, and validating engineering requirements.",
      "- Collaborated with cross-functional teams to ensure design compliance working in a scrum."
    ]
  }
];

export const achievements = [
  "Appreciation for succesfull upgrades from TC2412 to TC2506"
];

export const education = [
  {
    school: "KIT'S COLLEGE OF ENGINEERING",
    degree: "B.Tech, Mechanical Engineering",
    period: "Jan 2023",
    location: "Kolhapur",
    details: "CGPA: 8.3 | Inter-College Volleyball Player | Cultural Committee Member"
  },
  {
    school: "The New College Kolhapur",
    degree: "HSE",
    period: "Feb 2019",
    location: "Kolhapur",
    details: "87.54%"
  }
];

export const certifications = [
  "Attended AI tools workshop by Be10x",
  "NPTEL – Mechatronics Design",
  "NPTEL – PCBA Design & Development"
];

export const skillGroups: SkillGroup[] = [
  {
    category: "PLM Core",
    skills: ["BMIDE", "Workflow Designer", "C/C++", "ITK", "SOA/REST Services", "AWC"]
  },
  {
    category: "Engineering & CAD",
    skills: ["CREO", "BOM Management", "Requirements Management", "Change management", "DFMEA (SCIO/e1ns)", "PTC Integrity"]
  },
  {
    category: "Other Skills",
    skills: ["JIRA", "Confluence", "GitHub", "VBA"]
  }
];

export const topSkills = ["BMIDE", "Workflow Designer", "ITK Customization", "AWC", "C/C++"];

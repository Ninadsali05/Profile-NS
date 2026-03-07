import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Phone, Download, ExternalLink, Code2, Settings, Workflow, Database, Cpu } from "lucide-react";
import { Project, ExperienceItem, SkillGroup } from "./types";

export const projects = {
  mechatronics: [
    {
      title: "DFMEA Moderation",
      description: "Developed and maintained DFMEA as per European standards for automotive systems.",
      tags: ["DFMEA", "SCIO/e1ns", "Automotive"],
      image: src="/Profile-NS/DFMEA.png"
    },
    {
      title: "CAD Support & Series Activities.",
      description: "Supported CAD modelling & drawings for ECU plastic parts. Also worked on PCBA technology,",
      tags: ["CREO", "ECU"],
      image: src="/Profile-NS/CAD.png"
    }
  ],
  plm: [
    {
      title: "BMIDE Customization",
      description: "Customized Teamcenter data model by implementing Item Types, properties, LOVs, and naming rules.",
      tags: ["BMIDE", "Data Modeling", "Teamcenter"],
      image: src="/Profile-NS/BMIDE.png"
    },
    {
      title: "Custom ITK utilities",
      description: "Developed custom ITK utilities for server-side automation and data management in Teamcenter.",
      tags: ["ITK", "C/C++", "PLM"],
      image: src="/Profile-NS/ITK.png"
    }
  ],
  automation: [
    {
      title: "Portfolio Website",
      description: "Engineered an immersive digital experience by synergizing React with advanced AI-driven development workflows, pushing the boundaries of traditional portfolio design through creative automation and modern web aesthetics.",
      tags: ["React", "AI-Assisted Dev", "Creative Automation", "Framer Motion"],
      image: src="/Profile-NS/Web.png"
    },
    {
      title: "Confluence Knowledge Hub",
      description: "Established a centralized Confluence wiki to consolidate technical know-how and project documentation, significantly enhancing cross-team collaboration and information accessibility.",
      tags: ["Confluence", "Knowledge Management", "Collaboration"],
      image: src="/Profile-NS/Wiki.png"
    }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    company: "Knorr-Bremse Technology Centre India",
    role: "Mechatronics Engineer",
    period: "01/23 - Present",
    location: "Pune, India",
    points: [
      "Developed and maintained DFMEA as per European standards.",
      "Managed engineering documentation, BOM structures, and validation records supporting product configuration.",
      "Facilitated engineering change management (ECR/ECO) ensuring traceability of product revisions.",
      "Supported CREO–Teamcenter integration, maintaining correct dataset linkage and CAD data synchronization."
    ]
  },
  {
    company: "Knorr-Bremse Technology Centre India",
    role: "Engineering Intern",
    period: "10 Jan 2023 - 10 July 2023",
    location: "Pune, India",
    points: [
      "Design of ADAS camera/radar brackets.",
      "Preparation of automated checklist for material selection depending upon their properties and product requirement."
    ]
  }
];

export const achievements = [
  "Recognized for improving RQM traceability by 40% through the development of automated dashboards.",
  "Successfully implemented custom ITK utilities reducing manual batch processing time by 60%.",
  "Certified Siemens Teamcenter Professional with expertise in end-to-end PLM lifecycle."
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

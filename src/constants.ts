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
      title: "Upgrades",
      description: "TC2406 → TC2412\nTC2412 → TC2506",
      tags: ["Teamcenter", "Upgrade", "PLM"],
      image: "/Profile-NS/BMIDE.png"
    },
    {
      title: "CAD Integration",
      description: "Involved in CREO integration with TC PLM using integrators at GTAC Siemens support.",
      tags: ["CREO", "Teamcenter", "Integration"],
      image: "/Profile-NS/CAD.jpg"
    },
    {
      title: "BMIDE",
      description: "Created IPN for plant specific valves team.\nDefined a revision rule to be selected from LOV.",
      tags: ["BMIDE", "Data Modeling", "Teamcenter"],
      image: "/Profile-NS/BMIDE.png"
    },
    {
      title: "Workflow Designer",
      description: "Developed an ECN workflow depending upon the PDC4 release gates.\nConsumed the OOTB handlers at respective tasks as per standard industry practices.",
      tags: ["Workflow", "ECN", "Teamcenter"],
      image: "/Profile-NS/ITK.png"
    },
    {
      title: "ITK Customisation",
      description: "Automated pending tasks using a utility.\nGenerated a report of items having project name in their title which included their parent assemblies, if not used in any assemblies, then deleted the items and listed out the deleted items.",
      tags: ["ITK", "C/C++", "Automation"],
      image: "/Profile-NS/ITK.png"
    },
    {
      title: "AWC Configuration",
      description: "Designed a new tile on the homepage which shows all users in the organisation.\nCreated new workspace for internal quality team for audits.",
      tags: ["AWC", "Configuration", "Teamcenter"],
      image: "/Profile-NS/BMIDE.png"
    },
    {
      title: "AWC Customisation",
      description: "Added Change Management related commands on the explorer page.\nCreated a command and designed the panel.\nAdded the action which calls TcSoaService.",
      tags: ["AWC", "SOA", "Customisation"],
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
    skills: ["BMIDE", "Workflow Designer", "Structure Manager", "Organization", "Access Manager", "Query Builder",
             "PLM XML", "Reports Builder", "Preferences", "C/C++", "ITK", "SOA/REST Services", "AWC"]
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

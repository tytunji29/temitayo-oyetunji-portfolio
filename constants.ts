import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Oyetunji, Temitayo Elijah",
    email: "tytunji29@gmail.com",
    phone: "+234 810 576 4655",
    address: "Lagos, Nigeria",
    summary: "Innovative and results-driven Software Developer with expertise in .NET,Java, Node.js, React Native, and microservices architecture. Passionate about delivering scalable solutions and driving organizational growth. Adept at collaborating across teams, modernizing legacy systems, and deploying enterprise-grade applications."
  },
  experience: [
    {
      company: "Baobab Bank Nigeria",
      role: "Deputy Manager (Core Banking Implementation, Senegal)",
      //period: "June 2025 – Present",
      type: "Full-time",
      description: [
        "Leading core banking implementation across multiple branches.",
        "Overseeing and executing critical core banking deployment in Senegal.",
        "Used JAVA majorly to implement services via micro-service archi",
        "Coordinating cross-border technical teams ensuring seamless system integration."
      ]
    },
    {
      company: "Access Bank Plc",
      role: "Backend Developer",
      //period: "Feb 2023 – June 2025",
      type: "Full-time",
      description: [
        "Developed enterprise microservices in C#/.NET Core across multiple subsidiaries like (Tanzania, Gambia, Angola).",
        "Migrated legacy APIs to modern frameworks.",
        "Name Enquiry, Bill Payment etc",
        "Created APIs for third-party integrations and daily banking operations."
      ]
    },
    {
      company: "Contec Global (NowNow Technology)",
      role: "Team Lead, .NET Government Project (EDO STATE)",
      //period: "Feb 2022 – Jan 2024",
      type: "Contract",
      description: [
        "Led development of Edo State Internal Revenue Service Tax Generation Workflow.",
        "Designed and deployed an E-Wallet System for Edo State Local Government.",
        "Migrated legacy PAYE Filing App to .NET Core.",
        "Built ERAS App with Minimal API + Angular 12."
      ]
    },
    {
      company: "CreditWave (Remote)",
      role: "Backend Developer",
      //period: "2023 – 2024",
      type: "Remote",
      description: [
        "Built real-time applications and microservices with .NET Core, Node.js (NestJS & Express).",
        "Utilized PostgreSQL and MongoDB for data persistence.",
        "Developed and published loan app & SSO platform in React Native."
      ]
    },
    {
      company: "Venture Genius, Dubai (Remote)",
      role: "Backend & Frontend Developer",
      // period: "Jan 2023 – Dec 2023",
      type: "Remote",
      description: [
        "Developed APIs and workflows for a Student Holiday Camp App (.NET Core + MS SQL).",
        "Accelerated delivery as Angular frontend developer."
      ]
    },
    {
      company: "First City Monument Bank (Outsourced by SBSC)",
      role: "Operational Application Developer",
      //period: "Feb 2023 – July 2023",
      type: "Contract",
      description: [
        "Managed onboarding/account modification APIs consumed by mobile & web platforms."
      ]
    },
    {
      company: "Pajuno Development Co. Ltd",
      role: "Senior Software Developer",
      //period: "Mar 2021 – Feb 2022",
      type: "Full-time",
      description: [
        "Broke down monolithic apps into microservices.",
        "Implemented Azure Service Bus, Data Lake, and Blob Storage."
      ]
    },
    {
      company: "The Nigerian Stock Exchange",
      role: "Consultant (RegTech)",
      // period: "2018 – 2020",
      type: "Contract",
      description: [
        "Designed regulatory workflow solutions.",
        "Delivered Agile-aligned software for compliance."
      ]
    }
  ],
  projects: [
    {
      name: "ERAS Application",
      description: "Edo State Internal Revenue Service Tax Generation System.",
      tech: ["Minimal API", "Angular 12", ".NET Core"]
    },
    {
      name: "GAMSWITCH Integration",
      description: "Microservices integration for Access Bank Gambia.",
      tech: ["Microservices", "C#", "Banking API"]
    },
    {
      name: "CreditWave Loan App",
      description: "Mobile loan application and SSO platform published on Google Play Store.",
      tech: ["React Native", "Node.js", "Mobile"]
    },
    {
      name: "NSE X-BOSS Platform",
      description: "Full rebuild of the Nigerian Stock Exchange regulatory platform.",
      tech: ["RegTech", "Agile", "Enterprise"]
    },
    {
      name: "Smart Card Automation",
      description: "ICard Solution for Polaris Bank.",
      tech: ["Automation", "Security", "Banking"]
    }
  ],
  skills: [
    {
      category: "Backend",
      items: [
        { name: ".NET Core/ASP.NET", level: 95 },
        { name: "Node.js (NestJS/Express)", level: 85 },
        { name: "Java", level: 70 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      category: "Frontend/Mobile",
      items: [
        { name: "React Native", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Angular", level: 75 }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MS SQL Server", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "OracleDb", level: 80 },
        { name: "NON-SQL", level: 80 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Azure (Service Bus, Data Lake)", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Git/TFVC", level: 90 }
      ]
    }
  ],
  education: [
    {
      institution: "Federal University of Technology, Yola",
      degree: "B.Tech. Electrical Technology",
      period: "2011 – 2016"
    },
    {
      institution: "Miva Open University",
      degree: "master of information technology",
      period: "2025 – 2026"
    }
  ]
};
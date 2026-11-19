// Portfolio Data Configuration
export const personalInfo = {
  name: "Zakir Raza",
  title: "Full Stack Developer",
  subtitle: "MERN Stack | Agentic AI",
  phone: "+92 3293271727",
  email: "zaakiraza110@gmail.com",
  website: "zakiraza.dev",
  location: "Karachi, Pakistan",
  about: {
    intro:
      "Full-stack developer with about 3 years of experience (internships since 2024, professional roles since 2025) building and deploying production web applications using the MERN stack. I build React front ends with hooks and state management (Redux, Context API, Zustand) and Node.js/Express APIs backed by MongoDB, MySQL and PostgreSQL, deployed on AWS with Docker, Nginx and CI/CD.",
    description:
      "I have deployed 10+ websites to production and led the development team at Off The School. Currently I build agentic AI features with Claude, Gemini and GPT models as a Software Engineering Intern at Folio3.",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/zakiraza404/",
    github: "https://github.com/zaakiraza",
    skype: "https://join.skype.com/invite/uJHeZ9HJnMoO",
    whatsapp: "https://wa.me/923293271727",
  },
};

export const education = [
  {
    year: "2020 - 2022",
    degree: "Intermediate",
    institution: "Fatimiyah Boys College",
    location: "Karachi, Pakistan",
    logo: "/assets/images/FBC.webp",
    description:
      "I completed my Intermediate in Pre-Engineering from Fatimiyah Boys College, where I gained a strong foundation in mathematics, physics, and chemistry, setting the stage for my future studies in technology and engineering.",
  },
  {
    year: "2024 - 2025",
    degree: "Web Development Course",
    institution: "SMIT",
    location: "Karachi, Pakistan",
    logo: "/assets/images/SMIT.webp",
    description:
      "Web Development course at Saylani Numaish Campus, known for its practical approach to learning. The program covers modern web development skills and techniques for building dynamic, responsive websites.",
  },
  {
    year: "2022 - 2026",
    degree: "Bachelor In Computer Science",
    institution: "Muhammad Ali Jinnah University",
    location: "Karachi, Pakistan",
    logo: "/assets/images/uni.webp",
    description:
      "Bachelor's in Computer Science at Muhammad Ali Jinnah University, known for its comprehensive curriculum and research opportunities, with in-depth study of programming, software development, data structures, and algorithms.",
    current: false,
  },
];

export const skills = [
  { name: "HTML5", stack: "Frontend", icon: "html5" },
  { name: "CSS3", stack: "Frontend", icon: "css3" },
  { name: "JavaScript (ES6+)", stack: "Frontend", icon: "js" },
  { name: "TypeScript", stack: "Frontend", icon: "typescript" },
  { name: "React.js", stack: "Frontend", icon: "react" },
  { name: "Vite", stack: "Frontend", icon: "vite" },
  { name: "Redux", stack: "Frontend", icon: "redux" },
  { name: "Context API", stack: "Frontend", icon: "react" },
  { name: "Zustand", stack: "Frontend", icon: "redux" },
  { name: "Bootstrap", stack: "Frontend", icon: "bootstrap" },
  { name: "Tailwind CSS", stack: "Frontend", icon: "tailwind" },
  { name: "Material UI", stack: "Frontend", icon: "material" },
  { name: "SCSS", stack: "Frontend", icon: "scss" },
  { name: "Node.js", stack: "Backend", icon: "nodejs" },
  { name: "Express.js", stack: "Backend", icon: "express" },
  { name: "REST APIs", stack: "Backend", icon: "api" },
  { name: "Authentication & RBAC", stack: "Backend", icon: "auth" },
  { name: "Redis", stack: "Backend", icon: "redis" },
  { name: "Payment Gateway Integration", stack: "Backend", icon: "api" },
  { name: "Courier API Integration", stack: "Backend", icon: "api" },
  { name: "Python", stack: "Backend", icon: "python" },
  { name: "FastAPI", stack: "Backend", icon: "fastapi" },
  { name: "MongoDB", stack: "Database", icon: "mongodb" },
  { name: "Mongoose", stack: "Database", icon: "mongodb" },
  { name: "MySQL", stack: "Database", icon: "mysql" },
  { name: "PostgreSQL", stack: "Database", icon: "postgresql" },
  { name: "Sequelize", stack: "Database", icon: "sequelize" },
  { name: "Firebase", stack: "Database", icon: "firebase" },
  { name: "SQLite", stack: "Database", icon: "sqlite" },
  { name: "Agentic AI", stack: "AI & LLMs", icon: "agenticai" },
  { name: "OpenAI API", stack: "AI & LLMs", icon: "openai" },
  { name: "Claude API", stack: "AI & LLMs", icon: "claude" },
  { name: "Gemini API", stack: "AI & LLMs", icon: "gemini" },
  { name: "OpenRouter", stack: "AI & LLMs", icon: "llm" },
  { name: "RAG", stack: "AI & LLMs", icon: "rag" },
  { name: "Model Context Protocol (MCP)", stack: "AI & LLMs", icon: "mcp" },
  { name: "Langfuse", stack: "AI & LLMs", icon: "embeddings" },
  { name: "Prompt Engineering", stack: "AI & LLMs", icon: "prompt" },
  { name: "Scikit-learn", stack: "AI & LLMs", icon: "scikit" },
  { name: "Jest", stack: "Testing & SEO", icon: "jest" },
  { name: "Vitest", stack: "Testing & SEO", icon: "vitest" },
  { name: "Unit Testing", stack: "Testing & SEO", icon: "jest" },
  { name: "TDD", stack: "Testing & SEO", icon: "jest" },
  { name: "Meta Tags & Sitemaps", stack: "Testing & SEO", icon: "seo" },
  { name: "Google Search Console", stack: "Testing & SEO", icon: "searchconsole" },
  { name: "Google Analytics", stack: "Testing & SEO", icon: "analytics" },
  { name: "SSR", stack: "Testing & SEO", icon: "react" },
  { name: "Git", stack: "DevOps", icon: "git" },
  { name: "GitHub", stack: "DevOps", icon: "github" },
  { name: "Docker", stack: "DevOps", icon: "docker" },
  { name: "CI/CD", stack: "DevOps", icon: "cicd" },
  { name: "AWS (EC2, S3)", stack: "DevOps", icon: "aws" },
  { name: "Nginx", stack: "DevOps", icon: "nginx" },
  { name: "PM2", stack: "DevOps", icon: "pm2" },
  { name: "Hostinger (VPS, Cloud)", stack: "DevOps", icon: "hosting" },
  { name: "Railway", stack: "DevOps", icon: "railway" },
  { name: "Vercel", stack: "DevOps", icon: "vercel" },
  { name: "Netlify", stack: "DevOps", icon: "netlify" },
  { name: "C++", stack: "Programming", icon: "cpp" },
  { name: "OOP", stack: "Programming", icon: "oop" },
  { name: "DSA", stack: "Programming", icon: "dsa" },
];

export const experience = [
  {
    year: "Aug 2026 - Dec 2026",
    position: "Software Engineering Intern",
    company: "Folio3",
    logo: "/assets/images/folio3.webp",
    location: "Onsite, Karachi",
    highlights: [
      "Developed agentic AI features for the AI Factory and LM Assignment projects, integrating Claude, Gemini and GPT models through their SDKs and OpenRouter.",
      "Delivered complete end-to-end features across both the frontend and the backend.",
      "Worked with senior engineers through code reviews and Git-based team workflows.",
    ],
    current: true,
  },
  {
    year: "May 2025 - Aug 2026",
    position: "MERN Stack Developer",
    company: "Off The School",
    logo: "/assets/images/ots.webp",
    location: "Karachi",
    highlights: [
      "Led the development team, guiding the delivery of full-stack web projects from build to deployment.",
      "Built and shipped full-stack web applications with React, Node.js, Express.js, MongoDB and MySQL.",
      "Designed REST APIs with authentication, role-based access control and database integrations.",
      "Deployed and maintained production apps on AWS (EC2, S3) using Docker, Nginx and PM2 with CI/CD pipelines, and later migrated hosting to Hostinger.",
      "Built a complete management system integrated with biometric punch machines, syncing punch data to the backend.",
    ],
    current: false,
  },
  {
    year: "Jul 2024 - Aug 2024",
    position: "Front-End Developer Intern",
    company: "NextGenDev",
    logo: "/assets/images/behindev.webp",
    location: "Karachi",
    highlights: [
      "Built responsive websites with HTML5, CSS3 and JavaScript alongside design and development teams.",
    ],
  },
  {
    year: "Mar 2024 - Apr 2024",
    position: "Front-End Developer Intern",
    company: "Google Developer Student Club (GDSC)",
    logo: "/assets/images/gdsc.webp",
    location: "Karachi",
    highlights: [
      "Translated design concepts into responsive, user-friendly interfaces.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "TheraKonnect (FYP)",
    image: "/assets/images/thera.webp",
    link: "https://github.com/zaakiraza/FYP-CHATBOT",
    technologies: ["MERN Stack", "ChatBot"],
  },
  {
    id: 2,
    title: "EdTech",
    image: "/assets/images/EdTech.webp",
    link: "https://edu.offtheschool.io/",
    technologies: ["MERN Stack", "MySQL"],
  },
  {
    id: 3,
    title: "OTS Management",
    image: "/assets/images/managment.webp",
    link: "https://management.offtheschool.io",
    technologies: ["MERN Stack", "Hostinger", "Biometric Hardware"],
  },
  {
    id: 5,
    title: "Chatbot",
    image: "/assets/images/bot.webp",
    link: "https://github.com/zaakiraza/FYP-CHATBOT",
    technologies: ["Python", "FastAPI", "RAG", "LLM", "Redis"],
  },
  {
    id: 6,
    title: "Resume Builder",
    image: "/assets/images/resume.webp",
    link: "https://github.com/zaakiraza/ResumeAI",
    technologies: ["MERN Stack", "Google API", "Vercel"],
  },
  {
    id: 14,
    title: "Create CoreKit Package",
    image: "/assets/images/coreKit.webp",
    link: "https://www.npmjs.com/package/create-corekit",
    technologies: ["Node.js", "NPM"],
  },
  {
    id: 15,
    title: "Create Fusion Package",
    image: "/assets/images/fusion.webp",
    link: "https://www.npmjs.com/package/create-fusion",
    technologies: ["Node.js", "NPM"],
  },
  {
    id: 16,
    title: "Will It Rain on My Parade? (NASA Hackathon)",
    image: "/assets/images/nasa.webp",
    link: "https://github.com/zaakiraza/Nasa",
    technologies: ["React.js", "FastAPI", "NASA DataSet"],
  },
];

export const certificates = [
  {
    id: 1,
    name: "Experience Letter - NextGenDev",
    pdf: "/assets/certificates/experience letter behindev.pdf",
  },
  {
    id: 2,
    name: "Google Developer Certificate",
    pdf: "/assets/certificates/Google Developer.pdf",
  },
  {
    id: 3,
    name: "IBM Python Certificate",
    pdf: "/assets/certificates/IBM PY0101EN.pdf",
  },
  {
    id: 4,
    name: "PROCOM Certificate",
    pdf: "/assets/certificates/procom.pdf",
  },
  {
    id: 5,
    name: "Web 3.0 Certificate",
    pdf: "/assets/certificates/Web 3.0.pdf",
  },
  {
    id: 6,
    name: "ACM Certificate",
    pdf: "/assets/certificates/ACM.pdf",
  },
  {
    id: 7,
    name: "Award Ceremony Certificate",
    pdf: "/assets/certificates/awardcermony3.pdf",
  },
  {
    id: 8,
    name: "Cyber Security Certificate",
    pdf: "/assets/certificates/Cyber Security.pdf",
  },
  {
    id: 9,
    name: "Batch Certificate",
    pdf: "/assets/certificates/batch.pdf",
  },
];

// Hackathons & Competitions
export const competitions = [
  {
    id: 6,
    title: "KSBL Hackathon",
    year: "2026",
    role: "Full Stack Developer",
    description:
      "Built a full-stack application using MERN stack with a Python FastAPI backend, integrating LLM and RAG for intelligent features.",
    link: "https://github.com/zaakiraza/KSBL-frontend",
  },
  {
    id: 7,
    title: "SHU Hackathon",
    year: "2026",
    role: "Full Stack Developer",
    description:
      "Developed a campus connect application using the MERN stack during the hackathon.",
    link: "https://github.com/zaakiraza/SHU-Frontend",
  },
  {
    id: 1,
    title: "Google Chrome Built-in AI Challenge 2025",
    year: "2025",
    role: "Individual Participant",
    description:
      "Built a complete Resume Maker web application using MERN stack, integrated with Google's AI APIs including Read, Write, Prompt, Summarize, and Language Detection features.",
    link: "https://github.com/zaakiraza/ResumeAI",
  },
  {
    id: 2,
    title: "SMIT Web Challenge",
    year: "2025",
    role: "Individual Participant",
    description:
      "Developed a healthcare web application using MERN stack within 12 hours, integrated with Gemini API for intelligent health suggestions and recommendations.",
    link: "",
  },
  {
    id: 3,
    title: "NASA Space Apps Challenge 2025",
    year: "2025",
    role: "Frontend Developer",
    description:
      "Built a 48-hour hackathon project using React and FastAPI to predict rainfall in specific areas using NASA's dataset and a custom machine learning model.",
    link: "",
  },
  {
    id: 4,
    title: "Teknofest",
    year: "2025",
    role: "Frontend Developer",
    description:
      "Participated in an 8-hour competition to build a pixel-perfect clone of the Teknofest website with responsive design and interactive features.",
    link: "",
  },
  {
    id: 5,
    title: "Procom",
    year: "2025",
    role: "Problem solver",
    description:
      "Competed in a 2-day competitive programming competition, solving algorithmic challenges and data structure problems under time constraints.",
    link: "",
  },
];

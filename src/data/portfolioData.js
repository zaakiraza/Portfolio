// Portfolio Data Configuration
export const personalInfo = {
  name: "Zakir Raza",
  title: "MERN Stack Developer",
  subtitle: "Full Stack Developer | UI/UX Enthusiast",
  phone: "+92 3293271727",
  email: "zaakiraza110@gmail.com",
  website: "zaakiraza.github.io/Portfolio/",
  location: "Karachi, Pakistan",
  about: {
    intro:
      "I am passionate and dedicated full-stack developer with a proven track record of creating visually stunning and highly functional web applications. With a keen eye for design and a meticulous approach to coding, I excel in translating complex requirements into seamless user experiences.",
    description:
      "I am a committed developer known for punctuality, problem-solving skills, and collaborative spirit. With a keen eye for detail, I excel in creating visually appealing and functional web applications. My commitment to continuous learning and excellence ensures that every project I undertake meets the highest standards.",
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
    institution: "Fatimimiyah Boyz College",
    location: "Karachi, Pakistan",
    description:
      "I completed my Intermediate in Pre-Engineering from Fatimiyah College, where I gained a strong foundation in mathematics, physics, and chemistry, setting the stage for my future studies in technology and engineering.",
  },
  {
    year: "2024 - 2025",
    degree: "Web Development Course",
    institution: "SMIT",
    location: "Karachi, Pakistan",
    description:
      "I am enrolled in a Web Development course at Saylani Numaish Campus, known for its practical approach to learning. This program is equipping me with the latest web development skills and techniques to create dynamic and responsive websites.",
  },
  {
    year: "2022 - 2026",
    degree: "Bachelor In Computer Science",
    institution: "Muhammad Ali Jinnah University",
    location: "Karachi, Pakistan",
    description:
      "I am pursuing a Bachelor's in Computer Science at Mohammad Ali Jinnah University, known for its comprehensive curriculum and research opportunities. I'm gaining in-depth knowledge in programming, software development, data structures, and algorithms.",
    current: true,
  },
];

export const skills = [
  { name: "HTML5", stack: "Frontend", icon: "html5" },
  { name: "CSS3", stack: "Frontend", icon: "css3" },
  { name: "Bootstrap", stack: "Frontend", icon: "bootstrap" },
  { name: "Tailwind CSS", stack: "Frontend", icon: "tailwind" },
  { name: "Material UI", stack: "Frontend", icon: "material" },
  { name: "JavaScript", stack: "Frontend", icon: "js" },
  { name: "ES6+", stack: "Frontend", icon: "js" },
  { name: "React.js", stack: "Frontend", icon: "react" },
  { name: "Node.js", stack: "Backend", icon: "nodejs" },
  { name: "Express.js", stack: "Backend", icon: "express" },
  { name: "Python", stack: "Backend", icon: "python" },
  { name: "Scikit-learn", stack: "ML/AI", icon: "python" },
  { name: "MongoDB", stack: "Database", icon: "mongodb" },
  { name: "Mongoose", stack: "Database", icon: "mongodb" },
  { name: "SQL", stack: "Database", icon: "database" },
  { name: "MySQL", stack: "Database", icon: "mysql" },
  { name: "Git", stack: "DevOps", icon: "git" },
  { name: "GitHub", stack: "DevOps", icon: "github" },
  { name: "AWS", stack: "DevOps", icon: "aws" },
  { name: "Hostinger", stack: "DevOps", icon: "hosting" },
];

export const experience = [
  {
    year: "2025 - Present",
    position: "MERN Stack Developer",
    company: "OffTheSchool",
    location: "Onsite",
    description:
      "Focused on backend development with Node.js, Express, MongoDB, and MySQL to build APIs, manage databases, and deliver scalable web solutions.",
    current: true,
  },
  {
    year: "2024",
    position: "Front-End Developer",
    company: "Google Developer Student Club (GDSC)",
    location: "Remote",
    description:
      "I serve as a Front-End Developer at Google Developer Student Club (GDSC), focusing on creating intuitive and visually appealing web interfaces. Working remotely, I collaborate with a global team to deliver impactful digital solutions.",
  },
  {
    year: "2024",
    position: "Front-End Developer",
    company: "NextGenDev",
    location: "Remote",
    description:
      "As an Internee at NextGenDev, I utilized HTML5, CSS3, and JavaScript to develop visually engaging and user-friendly websites that captivated both our clients and their audiences. I worked in close collaboration with our design and development teams to transform ideas into reality.",
  },
  {
    year: "2024",
    position: "Front-End Developer",
    company: "PlacementDost",
    location: "Remote",
    description:
      "As an Internee Front-end Web Developer at PlacementDost, my role involved crafting visually engaging and user-friendly websites to captivate both our clients and their audiences. I worked closely with our design and development teams to bring concepts to life.",
  },
];

export const projects = [
  {
    id: 1,
    title: "OTS Management",
    image: "/Portfolio/assets/images/managment.png",
    link: "https://managment.offtheschool.io",
    technologies: ["MERN Stack", "Hostinger", "Biometric Hardware"],
  },
  {
    id: 2,
    title: "School Management",
    image: "/Portfolio/assets/images/khuddam.png",
    link: "https://github.com/zaakiraza/khd-frontEnd",
    technologies: ["MERN Stack"],
  },
  {
    id: 3,
    title: "Smart Campus",
    image: "/Portfolio/assets/images/smartCampus.png",
    link: "https://fast-frontend-9cmdy6rqj-razas-projects-30ea6975.vercel.app/login",
    technologies: ["MERN Stack", "MySQL", "Simulation"],
  },
  {
    id: 4,
    title: "EdTech",
    image: "/Portfolio/assets/images/EdTech.png",
    link: "https://edu.offtheschool.io/",
    technologies: ["MERN Stack", "MySQL"],
  },
  {
    id: 5,
    title: "Resume Builder",
    image: "/Portfolio/assets/images/resume.png",
    link: "https://resume-frontend-dfdze0x80-razas-projects-30ea6975.vercel.app/",
    technologies: ["MERN Stack", "Google API", "Vercel"],
  },
  {
    id: 6,
    title: "Medi Care (Full Stack Hackathon)",
    image: "/Portfolio/assets/images/MediCare.png",
    link: "https://hackathonfontend.vercel.app/",
    technologies: ["MERN Stack", "AI", "Vercel"],
  },
  {
    id: 7,
    title: "Quran Reader",
    image: "/Portfolio/assets/images/quran_template.jpg",
    link: "https://zaakiraza.github.io/WEB-API/",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 8,
    title: "Image Editor",
    image: "/Portfolio/assets/images/editor.png",
    link: "https://zaakiraza.github.io/Image-Editor/",
    technologies: ["HTML Canvas", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Positivus (Mini-hackathon)",
    image: "/Portfolio/assets/images/Positivus.png",
    link: "https://zaakiraza.github.io/SMIT12/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "Course Registration System",
    image: "/Portfolio/assets/images/OS.png",
    link: "https://zaakiraza.github.io/Course-Registration-System-Scheduling-Algorithm-/",
    technologies: ["HTML", "CSS", "JavaScript", "Algorithm"],
  },
  {
    id: 11,
    title: "Dice Roller Game",
    image: "/Portfolio/assets/images/Dice Roller IMG.png",
    link: "https://zaakiraza.github.io/DiceRoller-Game/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 12,
    title: "Create CoreKit Package",
    image: "/Portfolio/assets/images/coreKit.png",
    link: "https://www.npmjs.com/package/create-corekit",
    technologies: ["Node.js", "NPM"],
  },
  {
    id: 13,
    title: "Create Fusion Package",
    image: "/Portfolio/assets/images/fusion.png",
    link: "https://www.npmjs.com/package/create-fusion",
    technologies: ["Node.js", "NPM"],
  },
  {
    id: 14,
    title: "Calculator",
    image: "/Portfolio/assets/images/calculator.png",
    link: "https://zaakiraza.github.io/Calculator/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 15,
    title: "Will it rain on parade? (NASA Hackathon)",
    image: "/Portfolio/assets/images/nasa.png",
    link: "https://github.com/zaakiraza/Nasa",
    technologies: ["React.js", "FastAPI", "NASA DataSet"],
  },
  {
    id: 16,
    title: "Bag Pack",
    image: "/Portfolio/assets/images/bagpack.png",
    link: "https://github.com/zaakiraza/Bag-Pack",
    technologies: ["React Native", "Google Sheets API"],
  },
  {
    id: 17,
    title: "Glint Template UI",
    image: "/Portfolio/assets/images/glint_template.jpg",
    link: "https://zaakiraza.github.io/Glint",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 18,
    title: "Fashion Design Website",
    image: "/Portfolio/assets/images/Faishon_Design.jpg",
    link: "https://zaakiraza.github.io/Fashion-Designing/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 19,
    title: "Country Details",
    image: "/Portfolio/assets/images/countryAPI.png",
    link: "https://zaakiraza.github.io/Country-Details/",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 20,
    title: "Weather App",
    image: "/Portfolio/assets/images/wheather.png",
    link: "https://zaakiraza.github.io/wheather-App/",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
];

export const certificates = [
  {
    id: 1,
    name: "Experience Letter - NextGenDev",
    pdf: "/Portfolio/assets/certificates/experience letter behindev.pdf",
  },
  {
    id: 2,
    name: "Google Developer Certificate",
    pdf: "/Portfolio/assets/certificates/Google Developer.pdf",
  },
  {
    id: 3,
    name: "IBM Python Certificate",
    pdf: "/Portfolio/assets/certificates/IBM PY0101EN.pdf",
  },
  {
    id: 4,
    name: "PROCOM Certificate",
    pdf: "/Portfolio/assets/certificates/procom.pdf",
  },
  {
    id: 5,
    name: "Web 3.0 Certificate",
    pdf: "/Portfolio/assets/certificates/Web 3.0.pdf",
  },
  {
    id: 6,
    name: "ACM Certificate",
    pdf: "/Portfolio/assets/certificates/ACM.pdf",
  },
  {
    id: 7,
    name: "Award Ceremony",
    pdf: "/Portfolio/assets/certificates/awardcermony3.pdf",
  },
  {
    id: 8,
    name: "Cyber Security Certificate",
    pdf: "/Portfolio/assets/certificates/Cyber Security.pdf",
  },
  {
    id: 9,
    name: "Batch Certificate",
    pdf: "/Portfolio/assets/certificates/batch.pdf",
  },
];

// Hackathons & Competitions
export const competitions = [
  {
    id: 1,
    title: "Google Chrome Built-in AI Challenge 2025",
    year: "2025",
    role: "Individual Participant",
    award: "4th Position",
    description:
      "Built a complete Resume Maker web application using MERN stack, integrated with Google's AI APIs including Read, Write, Prompt, Summarize, and Language Detection features.",
    link: "https://resume-frontend-dfdze0x80-razas-projects-30ea6975.vercel.app/",
  },
  {
    id: 2,
    title: "SMIT Web Challenge",
    year: "2025",
    role: "Individual Participant",
    award: "No Reward",
    description:
      "Developed a healthcare web application using MERN stack within 12 hours, integrated with Gemini API for intelligent health suggestions and recommendations.",
    link: "",
  },
  {
    id: 3,
    title: "Nasa Space Apps Challenge 2025",
    year: "2025",
    role: "Frontend Developer",
    award: "No Reward",
    description:
      "Built a 48-hour hackathon project using React and FastAPI to predict rainfall in specific areas using NASA's dataset and a custom machine learning model.",
    link: "",
  },
  {
    id: 4,
    title: "Tekno fest",
    year: "2025",
    role: "Frontend Developer",
    award: "Honorable Mention",
    description:
      "Participated in an 8-hour competition to build a pixel-perfect clone of the Tekno Fest website with responsive design and interactive features.",
    link: "",
  },
  {
    id: 5,
    title: "Procom",
    year: "2025",
    role: "Problem solver",
    award: "No Reward",
    description:
      "Competed in a 2-day competitive programming competition, solving algorithmic challenges and data structure problems under time constraints.",
    link: "",
  },
];

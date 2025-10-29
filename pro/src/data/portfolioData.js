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
    intro: "I am passionate and dedicated full-stack developer with a proven track record of creating visually stunning and highly functional web applications. With a keen eye for design and a meticulous approach to coding, I excel in translating complex requirements into seamless user experiences.",
    description: "I am a committed developer known for punctuality, problem-solving skills, and collaborative spirit. With a keen eye for detail, I excel in creating visually appealing and functional web applications. My commitment to continuous learning and excellence ensures that every project I undertake meets the highest standards."
  },
  social: {
    linkedin: "https://www.linkedin.com/in/zakir-raza-b56284281/",
    github: "https://github.com/zaakiraza",
    skype: "https://join.skype.com/invite/uJHeZ9HJnMoO",
    whatsapp: "https://wa.me/923293271727"
  }
};

export const education = [
  {
    year: "2020 - 2022",
    degree: "Intermediate",
    institution: "Fatimimiyah Boyz College",
    location: "Karachi, Pakistan",
    description: "I completed my Intermediate in Pre-Engineering from Fatimiyah College, where I gained a strong foundation in mathematics, physics, and chemistry, setting the stage for my future studies in technology and engineering."
  },
  {
    year: "2022 - 2026",
    degree: "Bachelor In Computer Science",
    institution: "Muhammad Ali Jinnah University",
    location: "Karachi, Pakistan",
    description: "I am pursuing a Bachelor's in Computer Science at Mohammad Ali Jinnah University, known for its comprehensive curriculum and research opportunities. I'm gaining in-depth knowledge in programming, software development, data structures, and algorithms.",
    current: true
  },
  {
    year: "2024 - 2025",
    degree: "Web Development Course",
    institution: "SMIT",
    location: "Karachi, Pakistan",
    description: "I am enrolled in a Web Development course at Saylani Numaish Campus, known for its practical approach to learning. This program is equipping me with the latest web development skills and techniques to create dynamic and responsive websites.",
  }
];

export const skills = [
  { name: "HTML5", level: 90, icon: "html5" },
  { name: "CSS3", level: 85, icon: "css3" },
  { name: "JavaScript", level: 80, icon: "js" },
  { name: "React", level: 75, icon: "react" },
  { name: "Node.js", level: 70, icon: "nodejs" },
  { name: "Express", level: 70, icon: "express" },
  { name: "MongoDB", level: 65, icon: "mongodb" },
  { name: "Git", level: 85, icon: "git" },
  { name: "Bootstrap", level: 80, icon: "bootstrap" },
  { name: "SQL", level: 70, icon: "database" }
];

export const experience = [
  {
    year: "2025 - Present",
    position: "MERN Stack Developer",
    company: "OffTheSchool",
    location: "Onsite",
    description: "Focused on backend development with Node.js, Express, MongoDB, and MySQL to build APIs, manage databases, and deliver scalable web solutions.",
    current: true
  },
  {
    year: "2024",
    position: "Front-End Developer",
    company: "Google Developer Student Club (GDSC)",
    location: "Remote",
    description: "I serve as a Front-End Developer at Google Developer Student Club (GDSC), focusing on creating intuitive and visually appealing web interfaces. Working remotely, I collaborate with a global team to deliver impactful digital solutions."
  },
  {
    year: "2024",
    position: "Front-End Developer",
    company: "NextGenDev",
    location: "Remote",
    description: "As an Internee at NextGenDev, I utilized HTML5, CSS3, and JavaScript to develop visually engaging and user-friendly websites that captivated both our clients and their audiences. I worked in close collaboration with our design and development teams to transform ideas into reality."
  },
  {
    year: "2024",
    position: "Front-End Developer",
    company: "PlacementDost",
    location: "Remote",
    description: "As an Internee Front-end Web Developer at PlacementDost, my role involved crafting visually engaging and user-friendly websites to captivate both our clients and their audiences. I worked closely with our design and development teams to bring concepts to life."
  }
];

export const projects = [
  {
    id: 1,
    title: "Fashion Design Website",
    image: "/assets/images/Faishon_Design.jpg",
    link: "https://zaakiraza.github.io/Fashion-Designing/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "Glint Template",
    image: "/assets/images/glint_template.jpg",
    link: "https://zaakiraza.github.io/Glint",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    title: "Quran API Integration",
    image: "/assets/images/quran_template.jpg",
    link: "https://zaakiraza.github.io/WEB-API/",
    technologies: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    id: 4,
    title: "Positivus Landing Page",
    image: "/assets/images/Positivus.png",
    link: "https://zaakiraza.github.io/SMIT12/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 5,
    title: "OS Course Registration System",
    image: "/assets/images/OS.png",
    link: "https://zaakiraza.github.io/Course-Registration-System-Scheduling-Algorithm-/",
    technologies: ["HTML", "CSS", "JavaScript", "Algorithm"]
  },
  {
    id: 6,
    title: "Calculator App",
    image: "/assets/images/calculator.png",
    link: "https://zaakiraza.github.io/Calculator/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 7,
    title: "Dice Roller Game",
    image: "/assets/images/Dice Roller IMG.png",
    link: "https://zaakiraza.github.io/DiceRoller-Game/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 8,
    title: "Country Details API",
    image: "/assets/images/countryAPI.png",
    link: "https://zaakiraza.github.io/Country-Details/",
    technologies: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    id: 9,
    title: "Weather App",
    image: "/assets/images/wheather.png",
    link: "https://zaakiraza.github.io/wheather-App/",
    technologies: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    id: 10,
    title: "Image Editor",
    image: "/assets/images/editor.png",
    link: "https://zaakiraza.github.io/Image-Editor/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 11,
    title: "Create CoreKit Package",
    image: null,
    link: "https://www.npmjs.com/package/create-corekit",
    technologies: ["Node.js", "NPM"],
    isPackage: true
  },
  {
    id: 12,
    title: "Create Fusion Package",
    image: null,
    link: "https://www.npmjs.com/package/create-fusion",
    technologies: ["Node.js", "NPM"],
    isPackage: true
  }
];

export const certificates = [
  { id: 1, name: "Experience Letter - NextGenDev", pdf: "/assets/certificates/experience letter behindev.pdf" },
  { id: 2, name: "Google Developer Certificate", pdf: "/assets/certificates/Google Developer.pdf" },
  { id: 3, name: "IBM Python Certificate", pdf: "/assets/certificates/IBM PY0101EN.pdf" },
  { id: 4, name: "PROCOM Certificate", pdf: "/assets/certificates/procom.pdf" },
  { id: 5, name: "Web 3.0 Certificate", pdf: "/assets/certificates/Web 3.0.pdf" },
  { id: 6, name: "ACM Certificate", pdf: "/assets/certificates/ACM.pdf" },
  { id: 7, name: "Award Ceremony", pdf: "/assets/certificates/awardcermony3.pdf" },
  { id: 8, name: "Cyber Security Certificate", pdf: "/assets/certificates/Cyber Security.pdf" },
  { id: 9, name: "Batch Certificate", pdf: "/assets/certificates/batch.pdf" }
];

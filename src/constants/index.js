import project1 from "../assets/projects/landsatCloudReclassPlugin.png";
import project2 from "../assets/projects/todo-listApp.jpg";
import project3 from "../assets/projects/weatherIcon.png";
import project4 from "../assets/projects/airbnb_logo.png";
import project5 from "../assets/projects/taxCalculatorApp.jpg";
import project6 from "../assets/projects/GWACalculatorApp.jpg";

export const ABOUT_TEXT = `High-impact Full-Stack Software Engineer with experience supporting full-stack engineering workflows, maintaining multi-tenant SaaS systems, and building enterprise communication, document, and payment features. Proficient in JavaScript/TypeScript (Vue 3, React, Inertia.js), PHP (Laravel), Python, and SQL databases. Demonstrated expertise in third-party API integrations, activity tracking systems, dynamic PDF generation, and AI/ML GIS applications. Adept at transforming complex business requirements into scalable, high-availability software solutions.`;

export const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "Confidential Company — Remote",
    date: "September 2025 – Present",
    job: `Supported full-stack development and platform maintenance for a confidential multi-tenant SaaS application. Public details are intentionally limited to respect client and company confidentiality obligations.

• Full-Stack Feature Development: Built and maintained application modules using Vue 3, Laravel, Inertia.js, TypeScript, and SQL-backed data models.
• Workflow & Integration Support: Implemented third-party API integrations, asynchronous event handling, and internal process automation while following confidentiality constraints.
• Document & Data Tooling: Developed secure document-generation and data-management features for operational workflows.
• Multi-Tenant SaaS Maintenance: Assisted with schema improvements, reusable UI components, and tenant-aware application behavior across complex business domains.`,
    technologies: ["Vue 3", "Laravel", "Inertia.js", "TypeScript", "PostgreSQL", "RESTful APIs", "WebSockets"],
  },
  {
    role: "Web Developer Intern",
    company: "Navigatu | Ampayon, Butuan City",
    date: "January 2025 - March 2025",
    job: `• Primary responsibility: design and implement the Incubatee Profile system. Built the data model, CRUD interfaces, and profile management features using Laravel, React.js, PostgreSQL, and Tailwind CSS.
    - Implemented profile import/export, search/filter for incubatee records, and validation to ensure accurate incubatee data.
    - Collaborated with product and stakeholders to refine profile fields and workflows.`,
    technologies: ["Laravel", "React.js", "PostgreSQL", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "AI Landsat Cloud Reclass Plugin (Thesis Project)",
    image: project1,
    description: `Developed an AI-powered QGIS plugin to automate cloud removal from satellite imagery, enabling clearer land cover analysis for agriculture and environmental monitoring.
• Engineered plugin architecture using Python, QGIS API, and Qt Designer UI with real-time previews.
• Architected a hybrid AI pipeline with a U-Net model for cloud detection and modified CycleGAN for context-aware inpainting on Landsat 8 data.
• Achieved 57% reconstruction accuracy and outperformed traditional methods by 25% in image clarity (SSIM/PSNR).
• Integrated models into a production-ready tool using PyTorch and GDAL, automating workflows from clip to final cloud-free export.
• Validated through user testing, achieving a 90% satisfaction rate.`,
    technologies: ["Python", "PyTorch", "QGIS", "Qt Designer", "GDAL"],        
    link: "https://docs.google.com/document/d/1XnmEMbv6JrleEyYs1ygPfwa-bxnqsr59cwCT0K5o3PQ/edit?usp=sharing",
  },
  {
    title: "To-do List App",
    image: project2,
    description: "An interactive to-do list web app that keeps you organized and on track with your tasks!",
    technologies: ["HTML", "CSS", "React"],
    link: "https://vue-todo-list-blue.vercel.app/",
  },
  {
    title: "Weather App",
    image: project3,
    description: "A simple weather web app that provides real-time weather updates for any location!",
    technologies: ["HTML", "CSS", "React", "OpenWeatherMap API"],        
    link: "https://weather-app-plum-two-84.vercel.app/",
  },
  {
    title: "Airbnb Clone",
    image: project4,
    description: "Clone of the Airbnb website, showcasing a responsive design and interactive features.",
    technologies: ["HTML", "CSS", "React", "Manual UI"],        
    link: "https://airbnb-clone-tawny-zeta.vercel.app/",
  },
  {
    title: "Tax Calcualtor App",
    image: project5,
    description: "A comprehensive Tax Calculator web app for the Philippines, helping you easily compute your taxes along with deductions for SSS, Pag-IBIG, and PhilHealth!",
    technologies: ["HTML", "CSS", "React"],
    link: "https://tax-calculator-neon.vercel.app/",
  },
  {
    title: "GWA Calculator App",
    image: project6,
    description: "A powerful GWA Calculator web app for the Philippines, enabling you to effortlessly calculate your General Weighted Average!",
    technologies: ["HTML", "CSS", "React"],
    link: "https://gwa-calculator-jesson.vercel.app/",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Caraga State University",
    location: "Ampayon, Butuan City",
    date: "2021 – 2025",
  },
];

export const CONTACT = {
  address: "Butuan City, Agusan del Norte | Willing to Relocate",
  phoneNo: "+63 981 115 9479",
  email: "jessonmaurice.antiporda@gmail.com",
};


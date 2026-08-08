import project1 from "../assets/projects/landsatCloudReclassPlugin.png";
import project2 from "../assets/projects/todo-listApp.jpg";
import project3 from "../assets/projects/weatherIcon.png";
import project4 from "../assets/projects/airbnb_logo.png";
import project5 from "../assets/projects/taxCalculatorApp.jpg";
import project6 from "../assets/projects/GWACalculatorApp.jpg";

export const ABOUT_TEXT = `Proactive Full-Stack Software Engineer with extensive experience building scalable multi-tenant SaaS platforms, complex CRM communication engines, and AI-driven applications. Proficient in JavaScript/TypeScript (Vue 3, React), PHP (Laravel), Inertia.js, and Python. Proven track record in designing multi-entity communication activity systems, template-driven CV processing engines, video chat workflows, and high-performance database architectures. Adept at turning complex product requirements into robust, high-availability, user-centric solutions. Open to full-time remote or relocation roles.`;

export const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "Elluminary / EBOS Cloud Accountants | Davao/Singapore",
    date: "September 2025 - Present",
    job: `• Omnichannel Communication & Activity Log Engine:
    - Designed and built a multi-entity Communication & Activity Logging System in Vue 3 and Laravel, unifying outreach across Candidates, Jobs, Client Contacts, Client Companies, and Deals.
    - Built interactive activity timeline drawers and compact activity panels featuring real-time channel accents, relative time resolution, search filters, and multi-entity association tagging.
    - Implemented rich activity logging (Calls, Meetings, Interviews, Notes) with team collaborator tagging, scheduled date/time pickers, quick-reply composers, file attachments, and customizable note templates.
    - Integrated email and messaging post-send review workflows into unified recruitment logs for instant pipeline visibility.

• Multi-Tenant SaaS CRM Architecture:
    - Refactored CRM data models from single-entity structures to a robust multi-tenant architecture with strict tenant-level data isolation, optimized Eloquent queries, and scalable recruitment pipeline workflows.
    - Designed database relationships, polymorphic schemas, and RESTful API endpoints for multi-tenant client, candidate, company, contact, and job modules.

• CV Formatter & Document Generation Engine:
    - Engineered template-driven CV generation tools with TinyMCE editor integration, custom layout controls, PDF-ready rendering workflows, and reusable candidate profile styling.
    - Co-architected the front-end workflows for a standalone OCR/CV parsing & formatting platform, integrating parsed candidate data directly into customization templates.

• Video Interview Platform:
    - Developed end-to-end video interview modules, including room access control, session state management, participant permissions, and video recording playback/management.`,
    technologies: ["Vue 3", "Laravel", "Inertia.js", "TypeScript", "TinyMCE", "PostgreSQL", "RESTful APIs", "WebSockets"],
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


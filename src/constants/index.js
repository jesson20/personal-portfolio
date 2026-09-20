import project1 from "../assets/projects/landsatCloudReclassPlugin.png";
import project2 from "../assets/projects/todo-listApp.jpg";
import project3 from "../assets/projects/weatherIcon.png";
import project5 from "../assets/projects/taxCalculatorApp.jpg";
import project6 from "../assets/projects/GWACalculatorApp.jpg";
import project7 from "../assets/projects/liftledger.png";

export const ABOUT_TEXT = `High-impact Full-Stack Software Engineer with experience supporting full-stack engineering workflows, maintaining multi-tenant SaaS systems, and building enterprise communication, document, and payment features. Proficient in JavaScript/TypeScript (Vue 3, React, Inertia.js), PHP (Laravel), Python, and SQL databases. Demonstrated expertise in third-party API integrations, activity tracking systems, dynamic PDF generation, and AI/ML GIS applications. Adept at transforming complex business requirements into scalable, high-availability software solutions.`;

export const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "Confidential Company — Remote",
    date: "September 2025 – September 2026",
    job: `Co-led full-stack engineering and platform maintenance for a multi-tenant recruitment and CRM SaaS application, taking broader ownership of core system architecture and feature delivery.

• Platform & Architecture Maintenance: Maintained platform continuity, feature delivery, data model refactoring, and integration troubleshooting across Laravel, Vue 3, Inertia.js, and SQL databases.
• CRM & Activity Aggregation: Improved recruiter and account-manager visibility by consolidating candidate outreach, job logs, client contacts, deals, notes, and scheduled follow-ups into unified activity timelines with real-time filtering.
• E-Signature Automation: Reduced contract-dispatch friction by migrating e-signature workflows to an automated provider, implementing coordinate-based field placement, envelope automation, webhook status tracking, local PDF archiving, and digital audit-trail compliance.
• Billing & Payment Integration: Accelerated tenant onboarding and billing operations by integrating multi-currency payment checkout sync, invoice provisioning, local bank transfer support, and metadata-matched customer accounts.
• Document Exporter: Raised document production consistency by co-architecting a template-driven candidate profile exporter featuring rich-text editing, drag-and-drop experience sorting, configurable layouts, and server-side PDF rendering.
• Multi-Tenant Schema Design: Strengthened SaaS scalability and multi-tenant data isolation by refactoring legacy single-entity structures into tenant-aware schemas and reusable CRM modules across clients, candidates, companies, and jobs.`,
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
    title: "LiftLedger",
    image: project7,
    description: `A social fitness platform and AI-assisted workout tracker built to help users plan, log, and share their training. Users can create reusable routines, track exercises, sets, rest timers, and personal records, then connect with other lifters through profiles, follows, and completed-workout activity.
• Built a full workout-management flow for reusable routines, custom exercises, live workout sessions, set tracking, rest timers, workout history, and personal-record progress.
• Developed social features that let users discover lifters, follow profiles, and view completed workouts shared within their network.
• Created Smart Split, an AI-assisted weekly workout planner that considers schedule availability, session duration, goals, experience, equipment, and priority muscle groups.
• Designed Smart Split with deterministic programming logic for controlled workout structures, plus Gemini-generated explanations with Groq fallback when Gemini is unavailable.
• Implemented editable workout previews and explicit save confirmation so AI never automatically replaces or modifies a user’s existing routines.
• Secured user data with Supabase Authentication, PostgreSQL Row Level Security, ownership-based policies, and server-side Edge Functions for AI provider keys.`,
    technologies: ["Vue 3", "Supabase", "PostgreSQL", "Vite", "Gemini API", "Groq API"],
    link: "https://liftledger-eta.vercel.app/home",
  },
  {
    title: "TerraClear — Satellite Restoration",
    image: project1,
    description: `Rebuilt my university Landsat cloud-removal thesis from an experimental QGIS plugin into a full-stack web application that processes real Landsat 8/9 satellite imagery, detects cloud-obscured pixels, reconstructs them using real cloud-free observations from nearby acquisition dates, and preserves pixel-level source provenance.

TerraClear began as our university thesis, originally built as a QGIS plugin using Python, PyTorch, U-Net, and a modified CycleGAN. The original thesis demonstrated the concept, but custom AI models were limited by training dataset size and quality. I later rebuilt the project from the ground up as a modern web application working directly with real Landsat 8/9 Collection 2 Level-2 satellite data and official QA_PIXEL metadata.

• Rebuilt an academic QGIS thesis prototype into a full-stack satellite restoration web application using Next.js and FastAPI.
• Integrated real Landsat 8/9 Collection 2 Level-2 imagery through Microsoft Planetary Computer STAC.
• Implemented official Landsat QA_PIXEL decoding for clouds, cloud shadows, cirrus, fill, and confidence information.
• Built temporal cloud reconstruction that searches nearby Landsat dates and replaces obscured pixels only with real QA-clear satellite observations.
• Added pixel-level provenance so reconstructed pixels can be traced to their exact source scene and acquisition date.
• Implemented Original, Cloud Mask, Temporal Composite, Source Layer, and NDVI visualization modes.
• Added Original Target NDVI and Temporal Composite NDVI using real Red and NIR Surface Reflectance data.
• Added GIS-ready exports for restored Surface Reflectance, NDVI, cloud masks, provenance rasters, and PNG previews.
• In a validated Bohol test AOI (target scene LC09_L2SP_113053_20240222_02_T1, 92.62% cloud obstruction / 19,940 pixels), TerraClear recovered all 19,940 QA-obstructed pixels using real observations from nearby Landsat acquisition dates, expanding NDVI coverage from 7.38% to 100%.`,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Rasterio",
      "NumPy",
      "MapLibre GL",
      "Microsoft Planetary Computer",
      "Landsat 8/9",
      "STAC"
    ],
    github: "https://github.com/jesson20/terraclear",
    link: "https://terraclear.vercel.app/",
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
    title: "Tax Calculator App",
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

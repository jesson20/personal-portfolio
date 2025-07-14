import project1 from "../assets/projects/landsatCloudReclassPlugin.png";
import project2 from "../assets/projects/todo-listApp.jpg";
import project3 from "../assets/projects/airbnbLogo.png";
import project4 from "../assets/projects/taxCalculatorApp.jpg";
import project5 from "../assets/projects/GWACalculatorApp.jpg";

export const ABOUT_TEXT = `
I'm Jesson Maurice Antiporda from the Philippines! I am Detail-oriented Computer Science graduate with hands-on experience in full-stack development, 
data integrity, and e-commerce optimization. Skilled in JavaScript (React, Vue), Laravel, and Python, with a strong foundation in problem-solving, 
Agile collaboration, and building scalable web applications. Passionate about leveraging technology to create efficient solutions.`;

export const EXPERIENCES = [
{
  role: "Web Developer Intern",
  job: `Developed an Incubatee Database System using Laravel and PostgreSQL for the backend and React.js for the frontend to streamline startup profile management. Designed a responsive user interface with Tailwind CSS and optimized database queries for efficient data handling. Collaborated within an Agile team to implement key features such as search filters and data export tools.`,
  date: "January 2025 - March 2025",
  technologies: ["Laravel", "PostgreSQL", "React.js", "Tailwind CSS"],
  company: "Navigatu - Technology Business Incubator in Caraga State University",
},
];

export const PROJECTS = [
  {
    title: "Landsat Cloud Reclass Plugin (Thesis Project)",
    image: project1,
    description: "A QGIS plugin for reclassifying or removing cloud cover in Landsat images using a modified CycleGAN!",
    technologies: ["Python", "PyTorch", "QGIS"],        
    link:"https://docs.google.com/document/d/1XnmEMbv6JrleEyYs1ygPfwa-bxnqsr59cwCT0K5o3PQ/edit?usp=sharing",
  },
  {
    title: "To-do List App",
    image: project2,
    description: "An interactive to-do list web app that keeps you organized and on track with your tasks!",
    technologies: ["HTML", "CSS", "React"],
    link:"https://vue-todo-list-blue.vercel.app/",
  },
 {
    title: "Airbnb Clone",
    image: project3,
    description: "Clone of the Airbnb website, showcasing a responsive design and interactive features.",
    technologies: ["HTML", "CSS", "React", "Manual UI"],        
    link:"https://airbnb-clone-tawny-zeta.vercel.app/",
  },
  {
    title: "Tax Calcualtor App",
    image: project4,
    description: "A comprehensive Tax Calculator web app for the Philippines, helping you easily compute your taxes along with deductions for SSS, Pag-IBIG, and PhilHealth!",
    technologies: ["HTML", "CSS", "React"],
    link: "https://tax-calculator-neon.vercel.app/",
  },
  {
    title: "GWA Calculator App",
    image: project5,
    description: "A powerful GWA Calculator web app for the Philippines, enabling you to effortlessly calculate your General Weighted Average!",
    technologies: ["HTML", "CSS", "React"],
    link: "https://gwa-calculator-jesson.vercel.app/",
  },
];

export const CONTACT = {
  address: "Butuan City, Philippines | Willing to relocate if needed",
  phoneNo: "+63 981 115 9479",
  email: "jessonmaurice.antiporda@gmail.com",
};

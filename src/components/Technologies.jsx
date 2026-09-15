import { FaJava, FaJsSquare, FaPython, FaReact, FaVuejs, FaAngular, FaLaravel, FaDocker, FaGitAlt, FaMicrochip, FaRocket, FaCloudSun, FaPlug } from "react-icons/fa";
import { SiC, SiPostgresql, SiCsharp, SiExpress, SiNodedotjs, SiCplusplus, SiPhp, SiTypescript, SiInertia, SiTailwindcss, SiMysql, SiMongodb, SiPytorch, SiVite, SiPostman, SiVercel, SiAnthropic, SiGooglegemini, SiGithubcopilot, SiOpenai, SiCss3, SiGdal, SiHtml5, SiQgis, SiQt, SiSocketdotio, SiSupabase } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const SKILL_GROUPS = [
  { title: "Programming Languages", skills: [["JavaScript", FaJsSquare, "text-yellow-400", 2.5], ["TypeScript", SiTypescript, "text-blue-500", 3], ["PHP", SiPhp, "text-indigo-400", 5], ["Python", FaPython, "text-yellow-300", 2], ["Java", FaJava, "text-red-500", 3], ["C", SiC, "text-white", 2.5], ["C#", SiCsharp, "text-purple-400", 2], ["C++", SiCplusplus, "text-blue-400", 2.5]] },
  { title: "Frameworks & UI", skills: [["Vue 3", FaVuejs, "text-emerald-500", 3], ["React", FaReact, "text-cyan-400", 2.5], ["Inertia.js", SiInertia, "text-purple-400", 4], ["Laravel", FaLaravel, "text-red-600", 2], ["Express", SiExpress, "text-white", 2.5], ["Node.js", SiNodedotjs, "text-green-500", 2], ["Tailwind CSS", SiTailwindcss, "text-sky-400", 3], ["Angular", FaAngular, "text-red-500", 5], ["HTML", SiHtml5, "text-orange-500", 2.5], ["CSS", SiCss3, "text-blue-500", 3]] },
  { title: "Databases & Storage", skills: [["PostgreSQL", SiPostgresql, "text-sky-500", 3], ["MySQL", SiMysql, "text-blue-600", 2.5], ["MongoDB", SiMongodb, "text-green-600", 4], ["Supabase", SiSupabase, "text-emerald-400", 2.5]] },
  { title: "AI/ML, Tools & Operations", skills: [["PyTorch", SiPytorch, "text-orange-600", 3], ["Docker", FaDocker, "text-blue-500", 2.5], ["Git", FaGitAlt, "text-orange-500", 3.5], ["Vite", SiVite, "text-purple-400", 2], ["Postman", SiPostman, "text-orange-500", 4], ["Vercel", SiVercel, "text-white", 3]] },
  { title: "APIs, Realtime & GIS", skills: [["RESTful APIs", FaPlug, "text-cyan-400", 2.5], ["WebSockets", SiSocketdotio, "text-white", 3], ["QGIS", SiQgis, "text-lime-500", 3.5], ["Qt Designer", SiQt, "text-green-500", 2], ["GDAL", SiGdal, "text-blue-300", 2.5], ["OpenWeatherMap", FaCloudSun, "text-sky-400", 3]] },
  { title: "AI APIs & Coding Assistants", skills: [["Gemini API", SiGooglegemini, "text-blue-400", 3], ["Groq API", FaMicrochip, "text-orange-300", 2.5], ["Antigravity", FaRocket, "text-orange-200", 3.5], ["Claude", SiAnthropic, "text-orange-300", 2], ["Codex", SiOpenai, "text-white", 3], ["GitHub Copilot", SiGithubcopilot, "text-white", 2.5]] },
];

const TechnologyCard = ({ name, Icon, color, duration }) => (
  <motion.div variants={iconVariants(duration)} initial="initial" animate="animate" className="flex min-w-28 flex-col items-center gap-2 rounded-xl border-2 border-neutral-800 p-3.5">
    <Icon className={`text-5xl ${color}`} />
    <span className="text-sm font-medium text-neutral-300">{name}</span>
  </motion.div>
);

const Technologies = () => (
  <div className="border-b border-neutral-800 pb-16 pt-8">
    <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-10 text-center text-3xl font-bold lg:text-4xl">Technical Skills</motion.h1>
    {SKILL_GROUPS.map(({ title, skills }) => (
      <div className="mb-10" key={title}>
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="mt-10 mb-6 text-center text-xl font-semibold text-purple-300">{title}</motion.h2>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-stretch justify-center gap-4">
          {skills.map(([name, Icon, color, duration]) => <TechnologyCard key={name} name={name} Icon={Icon} color={color} duration={duration} />)}
        </motion.div>
      </div>
    ))}
  </div>
);

export default Technologies;

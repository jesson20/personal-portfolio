import { FaJava, FaJsSquare, FaPython, FaReact, FaVuejs, FaAngular, FaLaravel, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiC, SiPostgresql, SiCsharp, SiExpress, SiNodedotjs, SiCplusplus, SiPhp, SiTypescript, SiInertia, SiTailwindcss, SiMysql, SiMongodb, SiPytorch, SiVite, SiPostman, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-16 pt-8">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-3xl font-bold lg:text-4xl">Technical Skills</motion.h1>

        <div className="mb-10">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-10 mb-6 text-center text-xl font-semibold text-purple-300">Programming Languages</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaJsSquare className="text-5xl text-yellow-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiTypescript className="text-5xl text-blue-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiPhp className="text-5xl text-indigo-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaPython className="text-5xl text-yellow-300"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaJava className="text-5xl text-red-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiC className="text-5xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiCsharp className="text-5xl text-purple-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiCplusplus className="text-5xl text-blue-400"/>
            </motion.div>

            </motion.div>
            </div>
        
            <div className="mb-10">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-10 mb-6 text-center text-xl font-semibold text-purple-300">Frameworks & UI</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaVuejs className="text-5xl text-emerald-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaReact className="text-5xl text-cyan-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiInertia className="text-5xl text-purple-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaLaravel className="text-5xl text-red-600"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiExpress className="text-5xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiNodedotjs className="text-5xl text-green-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiTailwindcss className="text-5xl text-sky-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaAngular className="text-5xl text-red-500"/>
            </motion.div>

            </motion.div>
            </div>

            <div className="mb-10">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-10 mb-6 text-center text-xl font-semibold text-purple-300">Databases & Storage</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiPostgresql className="text-5xl text-sky-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiMysql className="text-5xl text-blue-600"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiMongodb className="text-5xl text-green-600"/>
            </motion.div>
            
            </motion.div>
            </div>

            <div className="mb-10">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-10 mb-6 text-center text-xl font-semibold text-purple-300">AI/ML, Tools & Operations</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiPytorch className="text-5xl text-orange-600"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaDocker className="text-5xl text-blue-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <FaGitAlt className="text-5xl text-orange-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiVite className="text-5xl text-purple-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiPostman className="text-5xl text-orange-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-xl border-2 border-neutral-800 p-3.5">
                <SiVercel className="text-5xl text-white"/>
            </motion.div>
            
            </motion.div>
            </div>

    </div>
  )
}

export default Technologies


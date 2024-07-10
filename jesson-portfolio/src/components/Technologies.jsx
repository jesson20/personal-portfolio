import { FaJava, FaJsSquare, FaPython, FaReact, FaVuejs, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiC, SiPostgresql, SiCsharp, SiExpress, SiAngular, SiNuxtdotjs, SiNodedotjs } from "react-icons/si";
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
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 lg:mb-20 text-center text-4xl">Technical Skils</motion.h1>

        <div className="mb-14">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 lg:mb-20 text-center text-2xl">Programming Languages</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiC className="text-7xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-white"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJsSquare className="text-7xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCsharp className="text-7xl text-white"/>
            </motion.div>

            </motion.div>
            </div>
        
            <div className="mb-14">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 lg:mb-20 text-center text-2xl">Frameworks</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaVuejs className="text-7xl text-white"/>
                <h3 className="hidden text-white">Vue.js</h3>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className="text-7xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNuxtdotjs className="text-7xl text-white"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNodedotjs className="text-7xl text-white"/>
            </motion.div>

            </motion.div>
            </div>

            <div className="mb-14">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 lg:mb-20 text-center text-2xl">Libraries</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl"/>
            </motion.div>
            
            </motion.div>
            </div>

            <div className="mb-14">
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 lg:mb-20 text-center text-2xl">Database</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostgresql className="text-7xl"/>
            </motion.div>
            
            </motion.div>
            </div>

    </div>
  )
}

export default Technologies

import aboutImg from "../assets/jessonAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
  <div className="border-b border-neutral-900 pb-16 pt-8"> 
    <h2 className="my-10 text-center text-3xl font-bold lg:text-4xl">
        About 
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"> Me</span>
    </h2>
    <div className="flex flex-wrap items-center">
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2 p-4 lg:p-6">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl max-w-xs lg:max-w-sm shadow-lg border border-neutral-800" src={aboutImg} alt="about" />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start p-4">
                    <p className="max-w-xl text-neutral-300 leading-relaxed text-base lg:text-lg">{ABOUT_TEXT}</p>
                </div>
        </motion.div>
    </div>
  </div>
  );
};

export default About;

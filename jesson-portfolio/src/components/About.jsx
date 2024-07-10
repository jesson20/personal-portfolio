import aboutImg from "../assets/jessonAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
  <div className="border-b border-neutral-900 pb-4"> 
    <h2 className="mt-20 mb-10 text-center text-4xl">About 
        <span className="bg-gradient-to-r from-pink-300 
                    via-slate-500 to-purple-500 bg-clip-text text-transparent"> Me</span>
    </h2>
    <div className="flex flex-wrap">
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl max-w-60 lg:max-w-lg" src={aboutImg} alt="about" />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start my-0 lg:my-40">
                    <p className="my-2 max-w-xl py-6 lg:pb-48">{ABOUT_TEXT}</p>
                </div>
        </motion.div>
    </div>
  </div>
  );
};

export default About;

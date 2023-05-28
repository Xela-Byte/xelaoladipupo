import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex flex-col lg:flex-row text-white`}
      id="hero">
      <div
        className={`lg:w-1/2 w-full flex lg:block flex-col justify-center text-left p-8 pt-24 sm:p-16 sm:pt-32 lg:pl-16 lg:pt-52 xl:p-32 lg:h-full xl:pt-96`}>
        <motion.p
          variants={textVariant(1000)}
          className="text-xl sm:text-2xl lg:text-4xl xl:text-6xl">
          <span className="font-thin">Hey!</span> I'm Xela ✨
        </motion.p>
        <motion.p
          variants={textVariant(1200)}
          className="text-lg leading-[25px] sm:text-xl lg:text-2xl xl:text-3xl mt-2 sm:mt-10 lg:mt-5 font-thin">
          A creative developer with a deep passion for merging art and
          technology to create awe-inspiring experiences.
        </motion.p>
        <motion.p
          variants={textVariant(1500)}
          className="mt-4 text-secondary text-[12px] xs:text-[17px] max-w-3xl leading-[20px] sm:leading-[30px]">
          As an adventurous, forward-thinking creative developer who embraces
          the fusion of technology and art to shape unforgettable experiences.
          Let's collaborate, innovate, and explore new horizons together!
        </motion.p>
      </div>
      <div className="lg:w-1/2 w-full max-[500px]:top-5 sm:top-20 p-10 absolute lg:relative">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;

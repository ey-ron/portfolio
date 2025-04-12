import { motion } from "framer-motion";
import React, { useRef } from "react";


const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{scale:1.05}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  
       xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
<>
      <h2 className="font-bold text-8xl mt-20 mb-10 w-full text-center md:text-5xl md:mt-10">
        Skills
      </h2> 
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-20 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] md:hidden
      "
    >
   
        <motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
        Project Management
      </motion.div>
        <Skill name="Vendor Management" x="-16vw" y="8vw" />
        <Skill name="System Analysis" x="16vw" y="-8vw" />
        <Skill name="Application Support" x="-10vw" y="-11vw" />
        <Skill name="Application Development" x="12vw" y="10vw" />
        <Skill name="Business Analysis" x="-27vw" y="-2vw" />
        <Skill name="Game Development" x="-4vw" y="16vw" />
        <Skill name="Web Development" x="8vw" y="-20vw" />

    </div>
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-20 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 2xl:hidden xl:hidden lg:hidden
      "
    >
   
        <motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
        Project Management
      </motion.div>
        <Skill name="Vendor Management" x="-16vw" y="10vw" />
        <Skill name="System Analysis" x="22vw" y="-10vw" />
        <Skill name="Application Support" x="-10vw" y="-20vw" />
        <Skill name="Application Development" x="18vw" y="18vw" />
        <Skill name="Business Analysis" x="-30vw" y="-10vw" />
        <Skill name="Game Development" x="-4vw" y="26vw" />
        <Skill name="Web Development" x="18vw" y="-28vw" />

    </div>
    
    </>
  );
};

export default Skills;

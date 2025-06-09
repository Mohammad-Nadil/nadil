import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiGreensock,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import Container from "./layer/Container";
import { useSelector } from "react-redux";

const skillIcons = {
  HTML5: <FaHtml5 className="text-orange-500 " />,
  CSS3: <FaCss3Alt className="text-blue-500 " />,
  JavaScript: <SiJavascript className="text-yellow-500 " />,
  Tailwind: <SiTailwindcss className="text-blue-400 " />,
  Bootstrap: <FaBootstrap className="text-purple-500 " />,
  React: <FaReact className="text-blue-400 " />,
  Next: <SiNextdotjs className="text-gray-500 " />,
  GSAP: <SiGreensock className="text-green-500 " />,
  Framer: <SiFramer className="text-purple-400 " />,
  Redux: <SiRedux className="text-purple-600 " />,
  NodeJS: <SiNodedotjs  className="text-green-600" />,
  ExpressJS: <SiExpress className="text-gray-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Database: <FaDatabase className="text-blue-700" />,
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = ({}) => {
  let dark = useSelector((state) => state.theme.darkMode);

  let color = `${dark ? "text-primary-dark" : " text-primary-light"}`;
  return (
    <>
      <section
        id="about"
        className={` ${
          dark
            ? " bg-gradient-to-r from-[#363636] to-dark bg-dark"
            : " bg-gradient-to-r from-[#B7DAFF] to-light bg-light"
        }`}
      >
        <Container className="py-14 md:py-20 xl:py-40 2xl:py-48">
          <div className="flex flex-col max-w-[59rem] mx-auto gap-y-5 md:gap-y-8 ">
            <h2
              className={`text-center font-poppins font-bold text-4xl md:text-5xl leading-[75px] autoBlur ${
                dark ? "  text-light " : "text-dark "
              }`}
            >
              ABOUT ME
            </h2>
            <p className="font-poppins text-center text-[19px] md:text-3xl leading-[32px] md:leading-[45px] text-both autoBlur">
              I'm <span className={`${color}`}>Mohammad Nadil</span> , I'm{" "}
              <span className={`${color}`}>21</span> years old and I live in{" "}
              <span className={`${color}`}>Dhaka , Bangladesh</span>. <br />
              <span className={`${color}`}>Full stack Mern developer</span> , I'm
              passionate about interfaces, from their creation to development. I
              like to learn more and more about the area, challenges that take
              me out of my comfort zone are the best. <br />
              <br />I have prototyped and developed{" "}
              <span className={`${color}`}>Landing Pages</span>,{" "}
              <span className={`${color}`}>Sites</span>,{" "}
              <span className={`${color}`}>E-commerces</span>,{" "}
              <span className={`${color}`}>Medical website </span> and{" "}
              <span className={`${color}`}> Web Apps</span>.
            </p>
            <div className="skills-section mt-10 text-center  ">
              <h3
                className={`font-poppins font-bold text-4xl mb-6 ${
                  dark ? "  text-light " : "text-dark "
                }`}
              >
                Technical Skills
              </h3>
              <motion.ul
                className="flex flex-wrap justify-center gap-1 md:gap-4 group"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is in view
              >
                {Object.entries(skillIcons).map(([skill, icon]) => (
                  <motion.li
                    key={skill}
                    className={`border border-gray-500 p-1 sm:p-3 rounded-md font-poppins text-4xl md:text-5xl  hover:!scale-125 transition-all duration-300  `}
                    variants={itemVariants}
                  >
                    {icon}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;

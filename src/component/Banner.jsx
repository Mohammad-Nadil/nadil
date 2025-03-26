import React from "react";
import { useSelector } from "react-redux";
import Container from "./layer/Container";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import profile from "/main.png";

const Anc = ({ color, icon, href }) => {
  return (
    <>
      <a
        target="_blank"
        href={href}
        className={` inline-block p-3 rounded-full  text-xl sm:text-2xl md:text-4xl ${color} relative hover:bg-transparent hover:text-gray-500 transition-all duration-300`}
      >
        {icon}
      </a>
    </>
  );
};

const Banner = () => {
  let dark = useSelector((state) => state.theme.darkMode);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };



  let items = [
    {
      href: "https://www.facebook.com/profile.php?id=100090793946195",
      icon: <FaFacebookSquare />,
    },
    {
      href: "https://www.linkedin.com/in/mohammad-hossain-46807b357",
      icon: <FaLinkedinIn />,
    },
    { href: "https://github.com/Mohammad-Nadil", icon: <FaGithub /> },
    { href: "mailto:mdnadil50@gmail.com", icon: <IoMdMail /> },
    { href: "tel:+8801760152349", icon: <FaPhoneAlt /> },
  ];

  return (
    <section
      id="#"
      className={`relative z-0${
        dark
          ? " bg-gradient-to-r from-[#363636] to-dark bg-dark"
          : " bg-gradient-to-r from-[#B7DAFF] to-light bg-light"
      }`}
      >
      {/* <div
        className={`absolute top-0 left-0 [clip-path:polygon(0_0,55%_0,100%_100%,0%_100%)] hidden sm:flex sm:w-3/4 h-full  -z-10 ${
          dark ? "bg-[#363636]" : "bg-[#B7DAFF]"
        } `}
      ></div> */}
      <Container
        className={`flex flex-col-reverse gap-y-7 sm:flex-row justify-between items-center pt-20 md:pt-32 xl:pt-40 2xl:pt-60 pb-10 md:pb-16 xl:pb-20  2xl:pb-52  overflow-hidden autoShow relative`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col left gap-y-3 sm:gap-y-5 md:gap-y-7"
        >
          <motion.h2
            className={`font-poppins font-extrabold text-5xl lg:text-[2.75rem] lg:leading-[4.125rem]  ${
              dark ? "text-primary-dark" : " text-primary-light"
            }`}
          >
            Mohammad Nadil
          </motion.h2>
          <div
            className={`font-poppins font-bold text-3xl md:text-5xl max-w-[36rem] ${
              dark ? "text-light" : "text-dark"
            }`}
          >
            <Typewriter
              words={[
                "Front-end Developer",
                "Backend Developer",
                "Full Stack Developer",
                "MERN Stack Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="."
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={700}
            />
          </div>
          <motion.p
            variants={itemVariants}
            className="font-poppins font-medium md:text-xl text-both max-w-[35rem]  "
          >
            Front-end developer focused on creating Websites and Web apps. I
            really like different projects that solve real problems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-3 icon sm:gap-5 md:gap-7 "
          >
            {items.map((item, index) => (
              <a
                key={index}
                target="_blank"
                href={item.href}
                className={` inline-block p-3 rounded-full  text-xl sm:text-2xl md:text-4xl relative hover:bg-transparent hover:text-gray-500 transition-all duration-300 ${
                  dark
                    ? "bg-dark text-primary-dark"
                    : " bg-light text-primary-light"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="right"
        >
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // Keeps it from moving indefinitely
            className="image aspect-square w-[70vw] sm:w-[40vw] md:w-[40vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[25vw] relative z-50"
          >
            <motion.img
              whileDrag={{ scale: 0.9, rotate: 0 }}
              drag
              className={`h-full w-full object-cover rounded-full ${
                dark
                  ? "border-2 border-primary-dark"
                  : "border-2 border-primary-light"
              }`}
              src={profile}
              alt={profile}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              onDragEnd={(event, info) => {
                event.target.style.transform = "translate(0px, 0px)"; // Resets position after drag
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Banner;

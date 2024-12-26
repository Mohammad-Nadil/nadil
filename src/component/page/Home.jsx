import React, { useState } from "react";
import Container from "../layer/Container";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import profile from "/main.png";
import Li from "../layer/Li";
import { IoMenu } from "react-icons/io5";
import Anc from "../layer/Anc";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import { motion } from "framer-motion";
import Service from "../layer/Service";




// Animation variants for each element
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }
};



const Home = () => {
  let [dark, setDark] = useState(true);
  let [menu, setMenu] = useState(false);

  let theme_text = ` transition-all duration-300  ${
    dark ? "text-primary-dark" : " text-primary-light"
  }`;

  let theme_text_invert = ` transition-all duration-300  ${
    dark ? "bg-primary-dark text-dark " : " bg-primary-light text-light "
  }`;
  let theme_bg_primary = ` transition-all duration-300  ${
    dark ? "bg-primary-dark" : " bg-primary-light"
  }`;
  let theme_text_hover = ` transition-all duration-300  ${
    dark
      ? " hover:text-primary-dark text-light "
      : "hover:text-primary-light text-dark"
  }`;
  let theme_text_secondary = ` ${dark ? "  text-light " : "text-dark "}`;
  let theme_bg_secondary = ` ${
    dark ? "  bg-secondary-dark/60 " : "bg-secondary-light/60 "
  }`;

  let theme_bg = ` transition-all duration-300  ${
    dark ? "bg-dark" : " bg-light"
  }`;
  let contact_bg = ` transition-all duration-300  ${
    dark ? "xl:bg-[#303030] border-light" : " border-dark xl:bg-[#DDDADA]"
  }`;
  let contact_inp_bg = ` transition-all duration-300  ${
    dark ? "bg-[#343434]" : " bg-[#ffffff]"
  }`;
  let contact_inp = ` transition-all duration-300  ${
    dark
      ? "xl:bg-[#202020] border-light text-light "
      : " border-dark text-dark xl:bg-[#EDEDED]"
  }`;

  let theme_bg_gradient = ` transition-all duration-300  ${
    dark
      ? " bg-gradient-to-r from-[#363636] to-dark bg-dark"
      : " bg-gradient-to-r from-[#B7DAFF] to-light bg-light"
  }`;

  let theme_text_bg = `${theme_bg}  ${theme_text}`;
  let theme_icon_primary = ` text-4xl lg:text-5xl   ${theme_text}`;

  return (
    <>
      <nav className="absolute z-50 w-full top-2 ">
        <Container className="flex items-center justify-between">
          <div className="logo">
            <motion.h2  initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`font-rubik font-black text-5xl lg:text-6xl transition-all duration-300 ${theme_text}  `}
            >
              NADIL
            </motion.h2>
          </div>
          <ul
            className={`absolute  top-full items-end md:items-center right-5 md:static flex flex-col md:flex-row lg:bg-transparent md:gap-x-5 duration-300 lg:gap-x-10 xl:gap-x-16 2xl:gap-x-20 md:opacity-100 md:visible ${
              menu ? "opacity-100 visible" : " opacity-0 invisible"
            }`}
          > {["Home", "Services", "About me", "Projects", "Contact"].map((text, index) => (
            <Li
              key={text}
              litext={text}
              href={`#${text.toLowerCase().replace(" ", "")}`}
              color={theme_text_hover}
              index={index}
            />
          ))}
          </ul>
          <div className="flex items-center gap-x-5">
            <div
              onClick={() => setDark(!dark)}
              className={`  w-12 md:w-16 lg:w-20 xl:w-24 h-6 md:h-8 lg:h-10 xl:h-12 rounded-full relative ${
                dark ? "bg-light " : "bg-dark "
              } `}
            >
              <a
                href="#"
                className={` transition-all duration-300 inline-block absolute top-1/2 -translate-y-1/2 w-4 md:w-6 lg:w-8 xl:w-10 h-4 md:h-6 lg:h-8 xl:h-10 rounded-full ${
                  dark
                    ? " right-1 bg-primary-light "
                    : "bg-primary-dark right-[95%] translate-x-full "
                }`}
              ></a>
            </div>

            <div onClick={() => setMenu(!menu)} className="flex md:hidden">
              <IoMenu
                className={` text-4xl ${dark ? "text-light " : "text-dark "}`}
              />
            </div>
          </div>
        </Container>
      </nav>
      <section id="#" className={theme_bg_gradient}>
        <Container
          className={`flex flex-col-reverse sm:flex-row justify-between items-center pt-28 md:pt-32 xl:pt-40 2xl:pt-60 pb-10 md:pb-16 xl:pb-20  2xl:pb-52  overflow-hidden autoShow`}
        >
          <motion.div  initial="hidden"
            animate="visible"
            variants={containerVariants} className="flex flex-col left gap-y-3 sm:gap-y-5 md:gap-y-7">
            <motion.h2
              className={`font-poppins font-extrabold text-5xl lg:text-[2.75rem] lg:leading-[4.125rem]  ${theme_text}`}
            >
              Mohammad Nadil
            </motion.h2>
            <motion.h3
             variants={itemVariants}
              className={` font-poppins font-bold text-3xl md:text-5xl max-w-[36rem]  ${theme_text_secondary}`}
            >
              Front-end Developer
            </motion.h3>
            <motion.p variants={itemVariants} className="font-poppins font-medium md:text-xl text-both max-w-[35rem]  ">
              Front-end developer focused on creating Websites and Web
              apps. I really like different projects that solve real
              problems.
            </motion.p>
            <motion.div  initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }} className="flex gap-3 icon sm:gap-5 md:gap-7 ">
              <Anc
                color={theme_text_bg}
                icon={<FaFacebookSquare />}
                href="https://www.facebook.com/profile.php?id=100090793946195"
              />
              <Anc
                color={theme_text_bg}
                icon={<FaGithub />}
                href="https://github.com/Mohammad-Nadil"
              />
              <Anc color={theme_text_bg} icon={<FaLinkedinIn />} href="" />
              <Anc
                color={theme_text_bg}
                icon={<IoMdMail />}
                href="mailto:mdnadil50@gmail.com"
              />
              <Anc
                color={theme_text_bg}
                icon={<FaPhoneAlt />}
                href="tel:+8801760152349"
              />
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }} className="right">
            <div className="image aspect-square w-[70vw]  sm:w-auto">
              <img
                className={` h-full w-full object-cover rounded-full ${
                  dark
                    ? "border-2 border-primary-dark"
                    : "border-2 border-primary-light"
                }`}
                src={profile}
                alt=""
              />
            </div>
          </motion.div>
        </Container>
      </section>
      <section className="bg_img " id="services">
        <Service theme_icon_primary={theme_icon_primary} />
      </section>
      <section id="aboutme" className={theme_bg_gradient}>
        <About head={theme_text_secondary} color={theme_text} />
      </section>
      <section className="bg_img" id="projects">
        <Projects
          bg_clr={theme_text_invert}
          primary_bg={theme_bg_primary}
          text={theme_text_secondary}
          card_bg={theme_bg_secondary}
          primary_clr={theme_text}
        />
      </section>
      <section id="contact" className={theme_bg_gradient}>
        <Contact
          inp={contact_inp}
          contact={contact_bg}
          inp_bg={contact_inp_bg}
          invert_btn={theme_text_invert}
          primary_text={theme_text}
        />
      </section>
      <footer>
        <p
          className={`  sm:py-4 max-lg:py-6 lg:py-8 xl:py-10 2xl:py-11 text-center text-both   ${theme_bg}  `}
        >
          © 2024 Md Nadil All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Home;

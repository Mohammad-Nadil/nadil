import React, { useState } from "react";
import Container from "../layer/Container";
import {
  FaCode,
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import profile from "/profile.jpg";
import Li from "../layer/Li";
import { IoMenu } from "react-icons/io5";
import Anc from "../layer/Anc";
import ServiceLi from "../layer/ServiceLi";
import { BiServer } from "react-icons/bi";
import { MdDesignServices, MdDevices } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiLayoutMasonryLine } from "react-icons/ri";
import About from "../About";

const Home = () => {
  let [dark, setDark] = useState(false);
  let [menu, setMenu] = useState(false);

  let theme_text = ` transition-all duration-300  ${dark ? "text-primary-dark":" text-primary-light"}`
  let theme_text_hover = ` transition-all duration-300  ${ dark
    ? " hover:text-primary-dark text-light "
    : "hover:text-primary-light text-dark"}`

  let theme_text_secondary = ` ${
                dark ? "  text-light " : "text-dark "
              }`

  let theme_bg = ` transition-all duration-300  ${dark ? "bg-dark":" bg-light"}`

  let theme_bg_gradient_after = ` transition-all duration-300  ${
    dark
      ? " after:bg-gradient-to-r from-[#363636] to-dark bg-dark"
      : " after:bg-gradient-to-r from-[#B7DAFF] to-light bg-light"
  }`
  let theme_bg_gradient = ` transition-all duration-300  ${
    dark
      ? " bg-gradient-to-r from-[#363636] to-dark bg-dark"
      : " bg-gradient-to-r from-[#B7DAFF] to-light bg-light"
  }`

  let theme_text_bg = `${theme_bg}  ${theme_text}`
  let theme_icon_primary = ` text-4xl lg:text-5xl   ${theme_text}`

  return (
    <>
      <nav className="absolute w-full z-50 top-2 ">
        <Container className="flex items-center justify-between">
          <div className="logo">
            <h2
              className={`font-rubik font-black text-5xl lg:text-6xl transition-all duration-300 ${theme_text}  `}
            >
              NADIL
            </h2>
          </div>
          <ul
            className={`absolute  top-full items-end md:items-center right-5 md:static flex flex-col md:flex-row lg:bg-transparent md:gap-x-5  lg:gap-x-10 xl:gap-x-16 2xl:gap-x-20 md:opacity-100 md:visible ${
              menu ? "opacity-100 visible" : " opacity-0 invisible"
            }`}
          >
            <Li
              litext="Home"
              color={theme_text}
            />
            <Li
              href="#service"
              litext="Services"
              color={theme_text_hover}
            />
            <Li
            href="#about"
              litext="About me"
              color={theme_text_hover}
            />
            <Li
              litext="Projects"
              color={theme_text_hover}
            />
            <Li
              litext="Contact"
              color={theme_text_hover}
            />
          </ul>
          <div className="flex gap-x-5 items-center">
            <div
              onClick={() => setDark(!dark)}
              className={`btn transition-all duration-300 w-12 md:w-16 lg:w-20 xl:w-24 h-6 md:h-8 lg:h-10 xl:h-12 rounded-full relative ${
                dark ? "bg-light " : "bg-dark "
              } `}
            >
              <a
                href="#"
                className={` transition-all duration-300 inline-block absolute top-1/2 -translate-y-1/2 w-4 md:w-6 lg:w-8 xl:w-10 h-4 md:h-6 lg:h-8 xl:h-10 rounded-full ${
                  dark
                    ? " right-1 bg-primary-light "
                    : "bg-primary-dark left-1 "
                }`}
              ></a>
            </div>

            <div onClick={() => setMenu(!menu)} className="btn flex md:hidden">
              <IoMenu
                className={` text-4xl ${dark ? "text-light " : "text-dark "}`}
              />
            </div>
          </div>
        </Container>
      </nav>
      <section
        id="#"
        className={` transition-all duration-300  z-10 after:-z-10 relative after:h-full after:w-4/5 after:top-0 after:left-0  after:absolute after:transition-all after:duration-300  ${theme_bg_gradient}   `}
      >
        <Container
          className={`flex flex-col-reverse sm:flex-row justify-between items-center pt-28 md:pt-32 xl:pt-40 2xl:pt-80 pb-10 md:pb-16 xl:pb-20  2xl:pb-52  overflow-hidden`}
        >
          <div className="left flex flex-col gap-y-3 sm:gap-y-5 md:gap-y-7">
            <h2
              className={`font-poppins font-extrabold text-5xl lg:text-[2.75rem] lg:leading-[4.125rem] after:flex after:max-w-[26rem] after:h-1 sm:after:h-2 sm:after:absolute relative after:top-full  after:left-0 after:translate-x-1/2 transition-all duration-300 after:transition-all after:duration-300  ${
                dark
                  ? " xl:after:bg-primary-dark text-primary-dark "
                  : "text-primary-light xl:after:bg-primary-light"
              }`}
            >
              Mohammad Nadil
            </h2>
            <h3
              className={` font-poppins font-bold text-3xl md:text-5xl max-w-[36rem]  ${theme_text_secondary}`}
            >
              Front-end Developer & UI Designer
            </h3>
            <p className="font-poppins font-medium md:text-xl text-both max-w-[35rem] ">
              Front-end developer focused on creating Web and Mobile
              applications. I really like different projects that solve real
              problems.
            </p>
            <div className="icon flex gap-3 sm:gap-5 md:gap-7">
              <Anc
                color= {theme_text_bg}
                icon={<FaFacebookSquare />}
                href="https://www.facebook.com/profile.php?id=100090793946195"
              />
              <Anc
                color={theme_text_bg}
                icon={<FaGithub />}
                href="https://github.com/Mohammad-Nadil"
              />
              <Anc
                color={theme_text_bg}
                icon={<FaLinkedinIn />}
                href=""
              />
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
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img
                className={` w-[70vw] sm:w-auto rounded-full ${
                  dark
                    ? "border-2 border-primary-dark"
                    : "border-2 border-primary-light"
                }`}
                src={profile}
                alt=""
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg_img  " id="service">
        <Container className=" py-32 xl:py-40 2xl:py-48">
          <div className="flex flex-col gap-14 max-w-[1140px] mx-auto">
            <div className="head">
              <h2 className="font-poppins font-bold text-5xl text-white text-center">
                My Services
              </h2>
            </div>
            <div className="list">
              <ul className=" flex flex-col sm:flex-row sm:flex-wrap gap-y-8 sm:gap-y-10 md:gap-y-12 w-full ">
                <ServiceLi text="Web Development" 
                icon={<FaCode className={theme_icon_primary}/>} />
                <ServiceLi text="API Integration" 
                icon={<BiServer className={theme_icon_primary}/>} />
                <ServiceLi text="  UI/UX Design Implementation" 
                icon={<MdDesignServices className={theme_icon_primary}/>} />
                <ServiceLi text="Cross-Browser Compatibility" 
                icon={<AiOutlineGlobal className={theme_icon_primary}/>} />
                <ServiceLi text="Landing Page Design" 
                icon={<RiLayoutMasonryLine className={theme_icon_primary}/>} />
                <ServiceLi text="Responsive Web Design" 
                icon={<MdDevices className={theme_icon_primary}/>} />
              </ul> 
            </div>
          </div>
        </Container>
      </section>
      <section id="about" className={theme_bg_gradient} >
        <About head={theme_text_secondary} color={theme_text} />
      </section>

    </>
  );
};

export default Home;

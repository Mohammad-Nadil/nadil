import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import { FaCode, FaWallet } from "react-icons/fa";
import { MdDesignServices, MdDevices, MdLockOutline } from "react-icons/md";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

import Container from "./layer/Container";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Service = ({}) => {
  let dark = useSelector((state) => state.theme.darkMode);

  let Li = [
    { text: "Web Development", icon: <FaCode /> },
    { text: "API Integration", icon: <BiServer /> },
    { text: "UI/UX Design Implementation", icon: <MdDesignServices /> },
    { text: "Cross-Browser Compatibility", icon: <AiOutlineGlobal /> },
    { text: "Landing Page Design", icon: <RiLayoutMasonryLine /> },
    { text: "Responsive Web Design", icon: <MdDevices /> },
    { text: "MongoDB Database Management", icon: <SiMongodb /> },
    { text: "Express.js Backend Development", icon: <SiExpress /> },
    { text: "React Frontend Development", icon: <SiReact /> },
    { text: "Node.js Server Management", icon: <SiNodedotjs /> },
    { text: "Authentication & Authorization", icon: <MdLockOutline /> },
    { text: "Payment Gateway Integration", icon: <FaWallet /> },
  ];

  return (
    <section className="bg_img " id="services">
      <Container className="py-14 md:py-20 xl:py-40 ">
        <div className="flex flex-col gap-14 max-w-[1140px] mx-auto">
          <div className="head ">
            <h2 className=" text-4xl md:text-5xl font-bold text-center text-white font-poppins autoShow">
              My Services
            </h2>
          </div>
          <div className="list">
            <ul className=" w-full grid grid-cols-2 lg:grid-cols-3  gap-y-8 sm:gap-y-10 ">
              {Li.map((item, index) => (
                <li
                  key={index}
                  className=" autoShow pr-3  flex items-center gap-y-2 gap-x-3 md:gap-x-5 lg:gap-x-7 flex-col text-center sm:text-start sm:flex-row "
                >
                  <p
                    className={`text-4xl lg:text-5xl  transition-all duration-300  ${
                      dark ? "text-primary-dark" : " text-primary-light"
                    }`}
                  >
                    {item.icon}
                  </p>
                  <p className=" text-light font-poppins text- sm:text-2xl  lg:leading-9">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;

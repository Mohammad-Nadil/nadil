import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdDesignServices, MdDevices } from "react-icons/md";
import { RiLayoutMasonryLine } from "react-icons/ri";
import Container from "./Container";
import { useSelector } from "react-redux";

const Service = ({}) => {
  let dark = useSelector((state) => state.theme.darkMode);

  let Li = [
    {
      text: "Web Development",
      icon: <FaCode />,
    },
    {
      text: "API Integration",
      icon: <BiServer />,
    },
    {
      text: "  UI/UX Design Implementation",
      icon: <MdDesignServices />,
    },
    {
      text: "Cross-Browser Compatibility",
      icon: <AiOutlineGlobal />,
    },
    {
      text: "Landing Page Design",
      icon: <RiLayoutMasonryLine />,
    },
    {
      text: "Responsive Web Design",
      icon: <MdDevices />,
    },
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
            <ul className="flex flex-col w-full sm:flex-row sm:flex-wrap gap-y-8 sm:gap-y-10 md:gap-y-12">
              {Li.map((item, index) => (
                <li key={index} className=" autoShow pr-3 sm:w-1/2 flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7">
                  <p
                    className={`text-3xl lg:text-5xl  transition-all duration-300  ${
                      dark ? "text-primary-dark" : " text-primary-light"
                    }`}
                  >
                    {item.icon}
                  </p>
                  <p className=" text-light font-poppins text-2xl sm:text-2xl lg:text-3xl leading-10">
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

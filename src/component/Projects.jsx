import React, { useState } from "react";
import Container from "./layer/Container";
import Slider from "react-slick";
import { FaAngleDown, FaLongArrowAltRight } from "react-icons/fa";
import QWERy from "/QWERy.png";
import medicalFunc from "/medicalFunc.png";
import orebi from "/orebi.png";
import agenc from "/agenc.png";
import morent from "/morent.png";
import uniao from "/uniaoMockup.png";
import simplewood from "/simplewood.png";
import { MdOutlineWeb } from "react-icons/md";
import { useSelector } from "react-redux";

const Project_card = ({
  img,
  name,
  project_type,
  github,
  vercel,
  text_color,
}) => {
  const [show, setShow] = useState(false);
  let dark = useSelector((state) => state.theme.darkMode);
  return (
    <div
      onClick={() => setShow(!show)}
      key={name}
      className="relative px-2 sm:px-3  "
    >
      <div
        onClick={() => setShow(!show)}
        className={` hover:shadow-xl relative transition-all duration-300 rounded-lg md:rounded-xl ${
          dark ? "  bg-secondary-dark/60 " : "bg-secondary-light/60 "
        }  overflow-hidden group `}
      >
        <div className="img aspect-[2/1.5] object-cover ">
          <img className="w-full h-full " src={img} alt="" />
        </div>

        <div
          className={`absolute top-0 left-0 backdrop-blur-[3px] w-full h-full flex flex-col justify-center items-center  ${
            show ? "opacity-1000 visible" : "opacity-0 invisible"
          } group-hover:!opacity-100 group-hover:!visible transition-all duration-300`}
        >
          <div
            className={`link px-3 py-3 xl:py-4 flex items-center justify-between  ${
              dark ? "  text-light " : "text-dark "
            }`}
          >
            <p
              className={`text-3xl  font-bold font-poppins`}
              style={{ color: text_color }}
            >
              {name}
            </p>
          </div>
          <div
            className={` w-full   ${
              dark ? "  text-light " : "text-dark "
            } links font-poppins font-semibold  bg-transparent duration-500 flex flex-col gap-y-2 xl:gap-y-3 px-3 pb-5 ${
              dark ? "  bg-secondary-dark/60 " : "bg-secondary-light/60 "
            } overflow-hidden transition-all`}
          >
            <div className="flex items-center justify-center gap-x-4 md:gap-x-2">
              <MdOutlineWeb
                className={` text-2xl ${
                  dark ? "text-primary-dark" : " text-primary-light"
                }`}
              />
              <p style={{ color: text_color }}>{project_type}</p>
            </div>
            <div className="flex justify-center text-xs  gap-x-5 w-full">
              <a
                target="_blank"
                style={{ color: text_color }}
                className={`flex items-center justify-center py-2 px-2  transition-all duration-400 cursor-pointer w-1/3 md:w-1/2   xl:gap-x-3 rounded-lg    ${
                  dark
                    ? "border border-primary-dark  hover:bg-primary-dark"
                    : " border border-primary-light  hover:bg-primary-light "
                }`}
                href={github}
              >
                View Code
                {/* <FaLongArrowAltRight className=" text-lg " /> */}
              </a>
              <a
                target="_blank"
                className={`cursor-pointer w-1/3 md:w-1/2  flex items-center py-2  justify-center  rounded-lg transition-all duration-400  ${
                  dark
                    ? "bg-primary-dark/40 hover:bg-primary-dark text-dark "
                    : " bg-primary-light/40 hover:bg-primary-light text-light "
                } `}
                href={vercel}
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [active, setActive] = useState(0);
  let dark = useSelector((state) => state.theme.darkMode);
  let items = [
    {
      name: "SimpleWood",
      img: simplewood,
      project_type: "Next.js and Framer Motion",
      github: "https://github.com/Mohammad-Nadil/simple-wood",
      vercel: "https://simplewood.vercel.app/",
      text_color: "white",
    },
    {
      name: "morent",
      img: morent,
      project_type: "react project",
      github: "https://github.com/Mohammad-Nadil/morent",
      vercel: "https://morent-hazel.vercel.app/",
      text_color: "black",
    },
    {
      name: "Uniao",
      img: uniao,
      project_type: "React project",
      github: "https://github.com/Mohammad-Nadil/Gaming-Website-Project",
      vercel: "https://uniao.vercel.app/",
      text_color: "white",
    },
    {
      name: "medicFunc",
      img: medicalFunc,
      project_type: "tailwind project",
      github: "https://github.com/Mohammad-Nadil/MedicalFunc",
      vercel: "https://medical-func.vercel.app/",
      text_color: "black",
    },
    {
      name: "Agenc",
      img: agenc,
      project_type: "bootstrap project",
      github: "https://github.com/Mohammad-Nadil/Agency",
      vercel: "https://agency-eight-kappa.vercel.app/",
      text_color: "black",
    },
    {
      name: "QWERy",
      img: QWERy,
      project_type: "vanilla project with gsap",
      github: "https://github.com/Mohammad-Nadil/QWERy",
      vercel: "https://qwery-phi.vercel.app/",
      text_color: "white",
    },
    {
      name: "OREBI",
      img: orebi,
      project_type: "react project ( ongoing )",
      github: "https://github.com/Mohammad-Nadil/orebi",
      vercel: "https://orebi-taupe.vercel.app/",
      text_color: "black",
    },
  ];
  const settings = {
    // autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
    appendDots: (dots) => (
      <div
        className=" "
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          className="flex gap-3 md:gap-5  absolute top-full translate-y-full left-1/2 -translate-x-1/2 "
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`$  ${
          active == i
            ? ` ${dark ? "bg-primary-dark" : " bg-primary-light"} `
            : "bg-slate-500/50"
        } w-7 h-2 sm:w-12 md:h-3 rounded-full `}
      ></div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };
  return (
    <section className="bg_img" id="projects">
      <Container className="py-14 md:py-20 xl:py-40 2xl:py-48 flex flex-col mx-auto gap-y-8 ">
        <h2
          className={`text-center font-poppins font-bold text-4xl md:text-5xl  autoBlur text-light`}
        >
          My Projects
        </h2>
        <Slider {...settings}>
          {items.map((item) => (
            <Project_card
            key={item.name}
              img={item.img}
              name={item.name}
              project_type={item.project_type}
              github={item.github}
              vercel={item.vercel}
              text_color={item.text_color}
            />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Projects;

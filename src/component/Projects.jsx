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
import { MdOutlineWeb } from "react-icons/md";
import { useSelector } from "react-redux";

const Project_card = ({ img, name, project_type, github, vercel , key }) => {
  let [show, setShow] = useState(false);
  let dark = useSelector((state) => state.theme.darkMode);
  return (
    <div key={key} className="relative px-2 sm:px-5  ">
      <div
        onClick={() => setShow(!show)}
        className={` hover:shadow-xl 
        sm:hover:shadow-white transition-all duration-300  rounded-2xl ${
          dark ? "  bg-secondary-dark/60 " : "bg-secondary-light/60 "
        } overflow-hidden  `}
      >
        <div className="img aspect-[2/1.5] object-cover ">
          <img className="w-full h-full " src={img} alt="" />
        </div>
        <div
          className={`link  px-6 py-3 xl:py-4 flex items-center justify-between  ${
            dark ? "  text-light " : "text-dark "
          }`}
        >
          <p className="text-4xl font-bold font-poppins">{name}</p>
          <FaAngleDown className="text-3xl" />
        </div>
        <div
          className={`  ${
            dark ? "  text-light " : "text-dark "
          } links font-poppins font-semibold xl:text-xl bg-transparent duration-500 flex flex-col gap-y-2 xl:gap-y-7 px-6 pb-5 ${
            dark ? "  bg-secondary-dark/60 " : "bg-secondary-light/60 "
          } ${
            show ? "opacity-100 max-h-[20rem]" : "opacity-0 max-h-0"
          } overflow-hidden transition-all`}
        >
          <div className="flex items-center gap-x-4">
            <MdOutlineWeb
              className={` text-3xl ${
                dark ? "text-primary-dark" : " text-primary-light"
              }`}
            />
            <p>{project_type}</p>
          </div>
          <div className="flex text-xs md:text-sm gap-x-2">
            <a
              target="_blank"
              className="flex items-center justify-between py-2 px-2  xl:py-3 transition-all duration-300 cursor-pointer    w-1/2  xl:gap-x-3 rounded-lg xl:rounded-xl hover:text-white hover:bg-gray-400"
              href={github}
            >
              View Code
              <FaLongArrowAltRight className=" text-lg  xl:text-3xl" />
            </a>
            <a
              target="_blank"
              className={`cursor-pointer w-1/2 flex items-center py-2 xl:py-4 justify-center  rounded-lg xl:rounded-xl transition-all duration-300 hover:bg-gray-400 ${
                dark
                  ? "bg-primary-dark text-dark "
                  : " bg-primary-light text-light "
              } `}
              href={vercel}
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  let [active, setActive] = useState(0);
  let dark = useSelector((state) => state.theme.darkMode);
  let items = [
    {
      name: "OREBI",
      img: orebi,
      project_type: "react project ( ongoing )",
      github: "https://github.com/Mohammad-Nadil/orebi",
      vercel: "https://orebi-taupe.vercel.app/",
    },
    {
      name: "medicFunc",
      img: medicalFunc,
      project_type: "tailwind project",
      github: "https://github.com/Mohammad-Nadil/MedicalFunc",
      vercel: "https://medical-func.vercel.app/",
    },
    {
      name: "Agenc",
      img: agenc,
      project_type: "bootstrap project",
      github: "https://github.com/Mohammad-Nadil/Agency",
      vercel: "https://agency-eight-kappa.vercel.app/",
    },
    {
      name: "QWERy",
      img: QWERy,
      project_type: "vanilla project with gsap",
      github: "https://github.com/Mohammad-Nadil/QWERy",
      vercel: "https://qwery-phi.vercel.app/",
    },
    {
      name: "morent",
      img: morent,
      project_type: "react project",
      github: "https://github.com/Mohammad-Nadil/morent",
      vercel: "https://morent-hazel.vercel.app/",
    },
    {
      name: "Uniao",
      img: uniao,
      project_type: "React project",
      github: "https://github.com/Mohammad-Nadil/Gaming-Website-Project",
      vercel: "https://uniao.vercel.app/",
    },
  ];
  const settings = {
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
          className="flex gap-5  absolute top-full translate-y-full left-1/2 -translate-x-1/2 "
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
        } w-7  sm:w-12 h-3 rounded-full `}
      ></div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };
  return (
    <section className="bg_img" id="projects">
      <Container className="py-32 xl:py-40 2xl:py-48">
        <Slider {...settings}>
          {items.map((item) => (
            <Project_card
              key={item.name}
              img={item.img}
              name={item.name}
              project_type={item.project_type}
              github={item.github}
              vercel={item.vercel}
            />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Projects;

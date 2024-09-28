import React, { useState } from "react";
import Container from "./layer/Container";
import Slider from "react-slick";
import { FaAngleDown } from "react-icons/fa";
import QWERy from "/QWERy.png";
import medicalFunc from "/medicalFunc.png";
import orebi from "/orebi.png";
import agenc from "/agenc.png";
import Project_card from "./layer/Project_card";

const Projects = ({ card_bg, text, primary_bg, bg_clr, primary_clr }) => {
  let [active, setActive] = useState(0);

  const settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
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
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`$  ${
          active == i ? ` ${primary_bg} ` : "bg-slate-500/50"
        }  w-12 h-3 rounded-full `}
        // style={{
        //   width: "30px",
        //   color: "blue",
        //   border: "1px blue solid"
        // }}
      >
        {/* {i + 1} */}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };
  return (
    <Container className="py-32 xl:py-40 2xl:py-48">
      <Slider {...settings}>
        <Project_card
          primary_text={primary_clr}
          btn_clr={bg_clr}
          txt_clr={text}
          bg={card_bg}
          img={orebi}
          name="OREBI"
          project_type="react project"
          github="https://github.com/Mohammad-Nadil/orebi"
          vercel="https://orebi-taupe.vercel.app/"
        />
        <Project_card
          btn_clr={bg_clr}
          txt_clr={text}
          bg={card_bg}
          img={medicalFunc}
          primary_text={primary_clr}
          name="medicFunc"
          project_type="tailwind project"
          github="https://github.com/Mohammad-Nadil/MedicalFunc"
          vercel="https://medical-func.vercel.app/"
        />
        <Project_card
          btn_clr={bg_clr}
          txt_clr={text}
          bg={card_bg}
          img={agenc}
          name="Agenc"
          primary_text={primary_clr}
          project_type="bootstrap project"
          github="https://github.com/Mohammad-Nadil/Agency"
          vercel="https://agency-eight-kappa.vercel.app/"
        />
        <Project_card
          primary_text={primary_clr}
          btn_clr={bg_clr}
          txt_clr={text}
          bg={card_bg}
          img={QWERy}
          name="QWERy"
          project_type="vanilla project"
          github="https://github.com/Mohammad-Nadil/QWERy"
          vercel="https://qwery-phi.vercel.app/"
        />
      </Slider>
    </Container>
  );
};

export default Projects;

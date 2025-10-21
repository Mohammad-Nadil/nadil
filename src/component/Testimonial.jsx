import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "./layer/Container";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "../index.css"

// Sample Testimonials
const testimonials = [
  {
    name: "Rakib Hossain",
    title: "Product Manager at HealthX",
    message:
      "Nadil transformed our designs into a responsive and fast web app. Truly professional and timely!",
  },
  {
    name: "Ahmed Ariyan",
    title: "Founder at EdTech Spark",
    message:
      "Excellent attention to detail and great communication. Would love to work again!",
  },
  {
    name: "Abdullah Al Farabi",
    title: "Product Manager at HealthX",
    message:
      "Nadil transformed our designs into a responsive and fast web app. Truly professional and timely!",
  },
  {
    name: "Ahmed Khan",
    title: "CEO, Devify",
    message:
      "Delivered clean, scalable code. Our landing page saw a 40% increase in conversion. Great work!",
  },
  {
    name: "Sagor",
    title: "CEO, Devify",
    message:
      "Delivered clean, scalable code. Our landing page saw a 40% increase in conversion. Great work!",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const dark = useSelector((state) => state.theme.darkMode);
  const textColor = dark ? "text-light" : "text-dark";
  const bgColor = dark ? "bg-dark" : "bg-light";

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 770,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    appendDots: (dots) => (
      <div style={{ position: "relative", zIndex: 1 }}>
        <ul className="flex gap-5 absolute top-full translate-y-full left-1/2 -translate-x-1/2">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`${
          active === i
            ? `${dark ? "bg-primary-dark" : "bg-primary-light"}`
            : "bg-slate-500/50"
        } w-4 h-2 sm:w-12 sm:h-3 rounded-full`}
      ></div>
    ),
    beforeChange: (a, b) => setActive(b),
  };

  return (
    <section
      id="testimonials"
      className={`py-12 md:py-20 xl:py-32 2xl:py-40 ${bgColor} transition-colors duration-300`}
    >
      <Container className="flex flex-col gap-5 md:gap-10 xl:gap-14">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-poppins ${textColor}`}>
            Testimonials
          </h2>
          <p className="mt-2 text-md md:text-xl text-both font-poppins">
            What clients say about working with me.
          </p>
        </motion.div>

        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="px-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`rounded md:rounded-2xl p-3 md:p-6 border shadow-md hover:shadow-lg transition-shadow duration-300 ${
                    dark ? "border-gray-700 bg-[#2d2d2d] " : "bg-white border-gray-200"
                  }`}
                >
                  <div className="h-24 sm:h-32 w-full overflow-hidden mb-2">
                    <p className="text-both mb-4 font-poppins text-base">
                      “{item.message}”
                    </p>
                  </div>
                  <h4 className={`font-bold font-poppins ${textColor}`}>
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;

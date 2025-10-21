import React, { useState } from "react";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Service from "../Service";
import { useSelector } from "react-redux";
import Banner from "../Banner.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import Testimonial from "../Testimonial.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <About />
      <Projects />
      <Testimonial/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

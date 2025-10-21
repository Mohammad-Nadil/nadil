import React from "react";
import { useSelector } from "react-redux";
import "../index.css";

const Footer = () => {
  let dark = useSelector((state) => state.theme.darkMode);
  return (
    <footer>
      <p
        className={`sm:py-4 max-lg:py-6 lg:py-8 xl:py-10 2xl:py-11 text-center font-poppins font-medium transition-colors duration-300 ${
          dark
            ? "bg-[#2d2d2d] text-light shadow-neum-dark"
            : "bg-white text-dark shadow-neum-light"
        }`}
      >
        © {new Date().getFullYear()} Md Nadil. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

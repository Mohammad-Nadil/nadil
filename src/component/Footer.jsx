import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
    let dark = useSelector((state) => state.theme.darkMode);
  return (
    <footer>
      <p
        className={`  sm:py-4 max-lg:py-6 lg:py-8 xl:py-10 2xl:py-11 text-center text-both   ${
          dark ? "bg-dark" : " bg-light"
        }  `}
      >
        © 2024 Md Nadil All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

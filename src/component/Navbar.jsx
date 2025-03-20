import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import Container from "./layer/Container";
import { toggleTheme } from "./feature/theme/themeSlice.js";
import styled from "styled-components";

const Li = ({ liText, href, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.4 },
    },
  };

  const dark = useSelector((state) => state.theme.darkMode);

  return (
    <motion.li variants={itemVariants} initial="hidden" animate="visible">
      <a
        href={href}
        className={`cursor-pointer duration-300 transition-all font-poppins font-bold xl:text-xl  ${
          dark
            ? " hover:text-primary-dark text-light "
            : "hover:text-primary-light text-dark"
        }`}
      >
        {liText}
      </a>
    </motion.li>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  let dark = useSelector((state) => state.theme.darkMode);
  let dispatch = useDispatch();

  let menus = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "About me",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="absolute z-50 w-full top-2 ">
      <Container className="flex items-center justify-between">
        <div className="logo">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`font-rubik font-black text-4xl sm:text-5xl lg:text-6xl transition-all duration-300 ${
              dark ? "text-primary-dark" : " text-primary-light"
            }  `}
          >
            NADIL
          </motion.h2>
        </div>
        <ul
          className={`absolute  top-full items-end md:items-center right-5 md:static flex flex-col gap-y-3 md:flex-row sm:bg-transparent md:gap-x-5 duration-300 lg:gap-x-10 xl:gap-x-16 2xl:gap-x-20 md:opacity-100 md:visible w-1/2 md:w-auto p-3 sm:p-0 rounded ${
            dark ? "bg-dark/70 " : "bg-light/70 "
          } ${menu ? "opacity-100 visible" : " opacity-0 invisible"}`}
        >
          {menus.map((item, index) => (
            <Li key={index} liText={item.name} href={item.href} />
          ))}
          <div onClick={() => dispatch(toggleTheme())}>
            <StyledWrapper>
              <input
                type="checkbox"
                className="theme-checkbox border border-gray-500/50 sm:hidden"
              />
            </StyledWrapper>
          </div>
        </ul>
        <div className="flex items-center gap-x-5">
          <div onClick={() => dispatch(toggleTheme())}>
            <StyledWrapper>
              <input
                type="checkbox"
                className="theme-checkbox border border-gray-500/50 hidden sm:block"
              />
            </StyledWrapper>
          </div>

          <div onClick={() => setMenu(!menu)} className="flex md:hidden">
            <IoMenu
              className={` text-4xl ${dark ? "text-light " : "text-dark "}`}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

const StyledWrapper = styled.div`
  .theme-checkbox {
    --toggle-size: 2.5rem; /* Default w-10 */

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--toggle-size);
    height: calc(var(--toggle-size) / 2);

    @media (min-width: 768px) {
      /* md:w-16 */
      --toggle-size: 4rem;
    }

    @media (min-width: 1024px) {
      /* lg:w-20 */
      --toggle-size: 5rem;
    }

    @media (min-width: 1280px) {
      /* xl:w-20 */
      --toggle-size: 5rem;
    }

    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 0;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
  }

  .theme-checkbox::before {
    content: "";
    width: calc(var(--toggle-size) / 2.25);
    height: calc(var(--toggle-size) / 2.25);
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    border-radius: 50%;
    transition: 0.4s;
  }

  .theme-checkbox:checked::before {
    left: calc(100% - (var(--toggle-size) / 2.25) - 5%);
    background-position: 0;
  }

  .theme-checkbox:checked {
    background-position: 100%;
  }
`;

export default Navbar;

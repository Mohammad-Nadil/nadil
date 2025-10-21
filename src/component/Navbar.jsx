import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./feature/theme/themeSlice";
import Container from "./layer/Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dark = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const menus = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Animation Variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
  };

  const desktopMenuVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const settingsVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`absolute top-0 w-full z-20 ${
        dark ? "bg-dark/40" : "bg-white/30"
      } backdrop-blur-lg  border-white/20`}
    >
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* LOGO */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`font-rubik font-black text-4xl sm:text-5xl lg:text-6xl transition-all duration-300 ${
              dark ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            NADIL
          </motion.h2>

          {/* Desktop Menu */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={desktopMenuVariants}
            className="hidden md:flex items-center gap-x-6 lg:gap-x-10"
          >
            {menus.map((menu, index) => (
              <motion.li
                key={index}
                variants={menuItemVariants}
                className={`font-semibold cursor-pointer font-poppins text-lg transition-colors duration-300 ${
                  dark
                    ? "text-light hover:text-primary-dark"
                    : "text-dark hover:text-primary-light"
                }`}
              >
                <a href={menu.href}>{menu.name}</a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-x-4">
            {/* Mobile Toggle */}
            <div
              onClick={() => dispatch(toggleTheme())}
              className="md:hidden w-11 aspect-[2/1] rounded-full bg-gray-300 relative cursor-pointer p-1"
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 h-full aspect-square rounded-full transition-all duration-300  ${
                  dark
                    ? "bg-primary-dark right-0"
                    : "bg-gray-400 right-full translate-x-full"
                }`}
              />
            </div>

            {/* Mobile Menu Button */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl cursor-pointer"
            >
              <IoMenu className={dark ? "text-light" : "text-dark"} />
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className={`absolute top-full right-3 w-1/2 flex flex-col items-end gap-y-4 px-4 py-3 rounded border backdrop-blur-3xl md:hidden ${
                  dark
                    ? "bg-dark/60 border-primary-dark text-light"
                    : "bg-white/60 border-primary-light text-dark"
                }`}
              >
                {menus.map((menu, index) => (
                  <motion.li
                    key={index}
                    variants={menuItemVariants}
                    className={`font-semibold cursor-pointer font-poppins text-base ${
                      dark
                        ? "hover:text-primary-dark"
                        : "hover:text-primary-light"
                    }`}
                  >
                    <a href={menu.href}>{menu.name}</a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Settings Gear (Desktop only) */}
          <div className="hidden md:flex relative">
            <div onClick={() => setSettingsOpen(!settingsOpen)}>
              <FaGear
                className={`text-2xl cursor-pointer transition-all duration-300 ${
                  dark
                    ? "text-light hover:rotate-90"
                    : "text-dark hover:rotate-90"
                }`}
              />
            </div>

            {/* Settings Dropdown */}
            <AnimatePresence>
              {settingsOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={settingsVariants}
                  className={`absolute right-0 top-full mt-2 rounded p-4 flex flex-col gap-4 backdrop-blur-3xl w-52 ${
                    dark ? "bg-dark/70 text-light" : "bg-white/80 text-dark"
                  }`}
                >
                  {/* Dark Mode Toggle */}
                  <div className="flex justify-between items-center">
                    <p>Dark Mode</p>
                    <button
                      onClick={() => dispatch(toggleTheme())}
                      className="w-11 aspect-[2/1] rounded-full bg-gray-300 relative p-1 "
                    >
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 h-full aspect-square rounded-full transition-all duration-300 ${
                          dark
                            ? "bg-primary-dark right-0"
                            : "bg-gray-400 right-full translate-x-full"
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion";

const Li = ({ litext, href, color, index }) => {
  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.4 } },
  };

  return (
    <motion.li variants={itemVariants} initial="hidden" animate="visible">
      <a href={href} className={`cursor-pointer duration-300 transition-all font-poppins font-bold xl:text-xl ${color}`}>
        {litext}
      </a>
    </motion.li>
  );
};

export default Li;

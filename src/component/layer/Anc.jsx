import React from "react";

const Anc = ({color , icon , href}) => {
  return (
    <>
      <a target="_blank" href={href}
        className={` inline-block p-3 rounded-full  text-xl sm:text-2xl md:text-4xl ${color} relative hover:bg-transparent hover:text-gray-500 transition-all duration-300`}
      >
        {icon}
        
      </a>
    </>
  );
};

export default Anc;

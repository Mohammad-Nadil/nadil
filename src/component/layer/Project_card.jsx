import React, { useState } from "react";
import { FaAngleDown, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Project_card = ({
  img,
  name,
  bg,
  txt_clr,
  btn_clr,
  primary_text,
  project_type,
  github,
  vercel,
}) => {
  let [show, setShow] = useState(false);
  return (
    <div className="relative px-5 ">
      <div
        onClick={() => setShow(!show)}
        className={` hover:shadow-xl 
        hover:shadow-white transition-all duration-300  rounded-3xl ${bg}  `}
      >
        <div className="img ">
          <img className="w-full h-full " src={img} alt="" />
        </div>
        <div
          className={`link  px-6 py-3 xl:py-4 flex items-center justify-between ${txt_clr}`}
        >
          <p className="text-4xl font-bold font-poppins">{name}</p>
          <FaAngleDown className="text-3xl" />
        </div>
        <div
          className={` ${txt_clr} links  font-poppins font-semibold xl:text-xl bg-transparent   flex flex-col gap-y-2 xl:gap-y-7 px-6 pb-5 ${bg} ${
            show ? "  " : " opacity-0 h-0"
          }  `}
        >
          <div className="flex items-center gap-x-4">
            <MdOutlineWeb className={` text-3xl ${primary_text}`} />
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
              className={`cursor-pointer w-1/2 flex items-center py-2 xl:py-4 justify-center  rounded-lg xl:rounded-xl transition-all duration-300 hover:bg-gray-400 ${btn_clr} `}
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

export default Project_card;

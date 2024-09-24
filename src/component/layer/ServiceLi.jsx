import React from "react";


const ServiceLi = ({icon , text}) => {
  return (
      <li className=" pr-3 sm:w-1/2 flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7">
        {icon}
        <p className=" text-light font-poppins text-2xl sm:text-2xl lg:text-3xl leading-10" >{text}</p>
      </li>
  );
};

export default ServiceLi;

import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdDesignServices, MdDevices } from "react-icons/md";
import { RiLayoutMasonryLine } from "react-icons/ri";
import ServiceLi from "./ServiceLi";
import Container from "./Container";

const Service = ({theme_icon_primary}) => {
  return (
    <div>
      <Container className="py-32 xl:py-40 2xl:py-48 ">
        <div className="flex flex-col gap-14 max-w-[1140px] mx-auto">
          <div className="head ">
            <h2 className="text-5xl font-bold text-center text-white font-poppins autoShow">
              My Services
            </h2>
          </div>
          <div className="list">
            <ul className="flex flex-col w-full sm:flex-row sm:flex-wrap gap-y-8 sm:gap-y-10 md:gap-y-12">
              <ServiceLi
                text="Web Development"
                icon={<FaCode className={theme_icon_primary} />}
              />
              <ServiceLi
                text="API Integration"
                icon={<BiServer className={theme_icon_primary} />}
              />
              <ServiceLi
                text="  UI/UX Design Implementation"
                icon={<MdDesignServices className={theme_icon_primary} />}
              />
              <ServiceLi
                text="Cross-Browser Compatibility"
                icon={<AiOutlineGlobal className={theme_icon_primary} />}
              />
              <ServiceLi
                text="Landing Page Design"
                icon={<RiLayoutMasonryLine className={theme_icon_primary} />}
              />
              <ServiceLi
                text="Responsive Web Design"
                icon={<MdDevices className={theme_icon_primary} />}
              />
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;

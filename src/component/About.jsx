import React from "react";
import Container from "./layer/Container";

const About = ({ head, color }) => {
  return (
    <>
      <Container className=" py-32 xl:py-40 2xl:py-48">
        <div className="flex flex-col max-w-[59rem] mx-auto gap-y-8">
          <h2
            className={`text-center font-poppins font-bold text-5xl leading-[75px] autoBlur ${head}`}
          >
            ABOUT ME
          </h2>
          <p className="font-poppins text-center text-2xl md:text-3xl leading-[45px] text-both autoBlur">
            I'm <span className={`${color}`}>Mohammad Nadil</span> , I'm{" "}
            <span className={`${color}`}>21</span> years old and I live in{" "}
            <span className={`${color}`}>Dhaka , Bangladesh</span>. <br />
            <span className={`${color}`}>Front-end developer</span> , I'm
            passionate about interfaces, from their creation to development. I
            like to learn more and more about the area, challenges that take me
            out of my comfort zone are the best. <br />
            <br />I have prototyped and developed{" "}
            <span className={`${color}`}>Landing Pages</span>,{" "}
            <span className={`${color}`}>Sites</span>,{" "}
            <span className={`${color}`}>E-commerces</span>,{" "}
            <span className={`${color}`}>Medical website </span> and{" "}
            <span className={`${color}`}> Web Apps</span>.
          </p>
          <div className="skills-section mt-10 text-center autoBlur">
            <h3 className={`font-poppins font-bold text-4xl mb-6 ${head}`}>
              Technical Skills
            </h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {[
                "HTML5",
                "CSS3",
                "JavaScript ES6",
                "Tailwind CSS",
                "Bootstrap",
                "React.js",
                "Next.js",
                "GSAP",
                "Framer Motion",
              ].map((skill) => (
                <li
                  key={skill}
                  className={` text-${color} border border-gray-400 px-4 py-2 rounded-md font-medium`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;

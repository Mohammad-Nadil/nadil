import React from "react";
import Container from "./layer/Container";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { useSelector } from "react-redux";

const Input = ({ className, label, type, name }) => {
  let dark = useSelector((state) => state.theme.darkMode);
  return (
    <div className={`${className}   flex flex-col gap-y-1  font-poppins`}>
      <p>{label}</p>
      <input
        required
        name={name}
        type={type}
        className={`outline-none rounded-lg p-2 w-full h-full ${
          dark ? "bg-[#343434]" : " bg-[#ffffff]"
        } `}
      />
    </div>
  );
};

const Contact = () => {
  let links = `flex font-poppins text-lg sm:text-2xl font-medium leading-9 items-center gap-x-3 sm:gap-x-6`;
  let dark = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <section
        id="contact"
        className={`${
          dark
            ? " bg-gradient-to-r from-[#363636] to-dark bg-dark"
            : " bg-gradient-to-r from-[#B7DAFF] to-light bg-light"
        }`}
      >
        <Container className=" autoShow  py-10 sm:px-6 2xl:py-48 xl:py-36 lg:py-28 md:py-20 sm:py-14">
          <div className="main max-w-[89.75rem] mx-auto flex flex-col xl:flex-row justify-center rounded-3xl">
            <div
              className={`left flex flex-col justify-center items-center  py-5 sm:py-8 md:py-12  gap-5 sm:gap-y-7 md:gap-y-9 lg:gap-y-12 xl:gap-y-20 w-full xl:w-2/5 rounded-t-2xl xl:rounded-none xl:rounded-l-3xl border xl:border-none  ${
                dark
                  ? "xl:bg-[#303030] border-light"
                  : " border-dark xl:bg-[#DDDADA]"
              } `}
            >
              <div className="title">
                <p
                  className={` font-poppins font-semibold text-4xl leading-[3.125rem]   !bg-transparent ${
                    dark
                      ? "xl:bg-[#202020] border-light text-light "
                      : " border-dark text-dark xl:bg-[#EDEDED]"
                  }`}
                >
                  CONTACT
                </p>
              </div>
              <div className="flex flex-col link text-xs md:text-base  gap-y-6 2xl:gap-y-14 ">
                <a className={links} target="_blank" href="tel:+8801760152349">
                  <IoCallOutline
                    className={` text-4xl !bg-transparent ${
                      dark
                        ? "xl:bg-[#202020] border-light text-light "
                        : " border-dark text-dark xl:bg-[#EDEDED]"
                    } `}
                  />
                  <p
                    className={` ${
                      dark ? "text-primary-dark" : " text-primary-light"
                    } `}
                  >
                    +880 1760152349
                  </p>
                </a>
                <a
                  className={links}
                  target="_blank"
                  href="mailto:mdnadil50@gmail.com"
                >
                  <CiMail
                    className={` text-4xl !bg-transparent ${
                      dark
                        ? "xl:bg-[#202020] border-light text-light "
                        : " border-dark text-dark xl:bg-[#EDEDED]"
                    } `}
                  />
                  <p
                    className={` ${
                      dark ? "text-primary-dark" : " text-primary-light"
                    } `}
                  >
                    mdnadil50@gmail.com
                  </p>
                </a>
                <a
                  className={links}
                  target="_blank"
                  href="https://maps.app.goo.gl/Rjuf5yhaCERZ7URE6"
                >
                  <CiLocationOn
                    className={` text-4xl !bg-transparent ${
                      dark
                        ? "xl:bg-[#202020] border-light text-light "
                        : " border-dark text-dark xl:bg-[#EDEDED]"
                    } `}
                  />
                  <p
                    className={` ${
                      dark ? "text-primary-dark" : " text-primary-light"
                    } `}
                  >
                    Lalbhag , Dhaka , Bangladesh
                  </p>
                </a>
              </div>
            </div>
            <form
              action="https://formspree.io/f/mblrnyjv"
              method="POST"
              className={`right pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-14 pb-6 sm:pb-6 md:pb-8 px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16 w-full xl:w-3/5 flex flex-col gap-y-3 lg:gap-y-10 text-lg font-poppins font-medium left-7 rounded-b-2xl xl:rounded-none  xl:rounded-r-3xl border xl:border-none ${
                dark
                  ? "xl:bg-[#202020] border-light text-light "
                  : " border-dark text-dark xl:bg-[#EDEDED]"
              } `}
            >
              <div
                className={`name_email flex flex-col md:flex-row gap-y-5 gap-x-14 w-full  `}
              >
                <Input
                  type="text"
                  name="name"
                  label="Your name"
                  className="md:w-2/5"
                />
                <Input
                  type="email"
                  name="email"
                  label="Your Email"
                  className=" md:w-3/5"
                />
              </div>
              <div className="sub">
                <Input type="text" name="subject" label="Your subject" />
              </div>
              <div className="msg">
                <p>Message</p>
                <textarea
                  name="message"
                  required
                  rows="6"
                  className={` w-full outline-none rounded-lg p-2 ${
                    dark ? "bg-[#343434]" : " bg-[#ffffff]"
                  } `}
                ></textarea>
              </div>
              <div className="flex justify-end ">
                <button
                  className={`flex duration-300 items-center gap-3 rounded-xl py-3 px-16 text-xl font-semibold  hover:bg-slate-500 ${
                    dark
                      ? "bg-primary-dark text-dark "
                      : " bg-primary-light text-light "
                  } `}
                  type="submit"
                >
                  <IoMailOpenOutline />
                  <p>send</p>
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;

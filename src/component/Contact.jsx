import React from "react";
import Container from "./layer/Container";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn, CiMail } from "react-icons/ci";

const Input = ({ className, bg, label, type }) => {
  return (
    <div className={`${className} flex flex-col gap-y-1  font-poppins`}>
      <p>{label}</p>
      <input
        required
        type={type}
        className={`outline-none rounded-lg p-2 w-full h-full ${bg} `}
      />
    </div>
  );
};

const Contact = ({ inp, contact, inp_bg, invert_btn, primary_text }) => {
  let links = `flex font-poppins text-xl sm:text-2xl font-medium leading-9 items-center gap-x-3 sm:gap-x-6`;

  return (
    <>
      <Container className="py-10 sm:px-6 2xl:py-48 xl:py-36 lg:py-28 md:py-20 sm:py-14">
        <div className="main max-w-[89.75rem] mx-auto flex flex-col xl:flex-row justify-center rounded-3xl">
          <div
            className={`left flex flex-col justify-center items-center p-5 sm:py-8 md:py-12  gap-5 sm:gap-y-7 md:gap-y-9 lg:gap-y-12 xl:gap-y-20 w-full xl:w-2/5 rounded-t-2xl xl:rounded-none xl:rounded-l-3xl border xl:border-none  ${contact} `}
          >
            <div className="title">
              <p
                className={` font-poppins font-semibold text-4xl leading-[3.125rem]   !bg-transparent ${inp}`}
              >
                CONTACT
              </p>
            </div>
            <div className="flex flex-col link  gap-y-6 2xl:gap-y-14 ">
              <a className={links} href="tel:+8801760152349">
                <IoCallOutline className={` text-4xl !bg-transparent ${inp} `} />
                <p className={` ${primary_text} `}>+880 1760152349</p>
              </a>
              <a className={links} href="mailto:mdnadil50@gmail.com">
                <CiMail className={` text-4xl !bg-transparent ${inp} `} />
                <p className={` ${primary_text} `}>mdnadil50@gmail.com</p>
              </a>
              <a className={links} href="">
                <CiLocationOn className={` text-4xl !bg-transparent ${inp} `} />
                <p className={` ${primary_text} `}>
                  Lalbhag , Dhaka , Bangladesh
                </p>
              </a>
            </div>
          </div>
          <form
            className={`right pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-14 pb-6 sm:pb-6 md:pb-8 px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16 w-full xl:w-3/5 flex flex-col gap-y-3 lg:gap-y-10 text-lg font-poppins font-medium left-7 rounded-b-2xl xl:rounded-none  xl:rounded-r-3xl border xl:border-none ${inp} `}
          >
            <div className={`name_email flex flex-col md:flex-row gap-y-5 gap-x-14 w-full  `}>
              <Input
                bg={inp_bg}
                type="text"
                label="Your name"
                className="md:w-2/5"
              />
              <Input
                bg={inp_bg}
                type="email"
                label="Your Email"
                className=" md:w-3/5"
              />
            </div>
            <div className="sub">
              <Input bg={inp_bg} type="text" label="Your subject" />
            </div>
            <div className="msg">
              <p>Message</p>
              <textarea
              required
                rows="6"
                className={` w-full outline-none rounded-lg p-2 ${inp_bg} `}
              ></textarea>
            </div>
            <div className="flex justify-end ">
              <button type="submit">
                <a
                  href="#"
                  className={`flex  items-center gap-3 rounded-xl py-3 px-16 text-xl font-semibold  hover:bg-slate-500 ${invert_btn}  `}
                >
                  <IoMailOpenOutline />
                  <p>send</p>
                </a>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;

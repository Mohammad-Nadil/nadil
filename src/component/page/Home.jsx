import React, { useState } from 'react'
import Container from '../layer/Container'
import { FaFacebookSquare, FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import profile from '/profile.png'
import Li from '../layer/Li'
import { IoMenu } from 'react-icons/io5'



const Home = () => {

let [dark , setDark ] = useState(false)
let [menu , setMenu ] = useState(false)


  return (
    < >
    <nav className='absolute w-full z-50 top-2 '>
      <Container className='flex items-center justify-between'>
         <div className="logo">
          <h2 className={`font-rubik text-5xl lg:text-6xl transition-all duration-300 ${dark?"text-primary-dark ":"text-primary-light "}  `} >NADIL</h2>
         </div>
         <ul className={`absolute  top-full items-end md:items-center right-5 md:static flex flex-col md:flex-row lg:bg-transparent md:gap-x-5  lg:gap-x-10 xl:gap-x-16 2xl:gap-x-20 md:opacity-100 md:visible ${menu ?"opacity-100 visible":" opacity-0 invisible"}`} >
          <Li  litext="Home" color={dark?" text-primary-dark ":"text-primary-light"}  />
          <Li litext="Services" color={dark?" hover:text-primary-dark text-light ":"hover:text-primary-light text-dark"}/>
          <Li litext="About me" color={dark?" hover:text-primary-dark text-light ":"hover:text-primary-light text-dark"}  />
          <Li litext="Projects" color={dark?" hover:text-primary-dark text-light ":"hover:text-primary-light text-dark"}  />
          <Li litext="Contact" color={dark?" hover:text-primary-dark text-light ":"hover:text-primary-light text-dark"}  />
         </ul><div className="flex gap-x-5 items-center">
          
         <div onClick={()=>setDark(!dark)} className={`btn transition-all duration-300 w-12 md:w-16 lg:w-20 xl:w-24 h-6 md:h-8 lg:h-10 xl:h-12 rounded-full relative ${dark?"bg-light ":"bg-dark "} `}>
          <a href="#" className={` transition-all duration-300 inline-block absolute top-1/2 -translate-y-1/2 w-4 md:w-6 lg:w-8 xl:w-10 h-4 md:h-6 lg:h-8 xl:h-10 rounded-full ${dark?" right-1 bg-primary-light ":"bg-primary-dark left-1 "}`} ></a>
         </div>

         <div onClick={()=>setMenu(!menu)} className="btn flex md:hidden">
         <IoMenu className={` text-4xl ${dark?"text-light ":"text-dark "}`} />
         </div>
         </div>
      </Container>
    </nav>
    <section id='#' className={` transition-all duration-300 ${dark?" bg-dark ":"bg-light"} `} >
      <Container className={`flex flex-col-reverse sm:flex-row justify-between items-center z-10 after:-z-10 pt-28 md:pt-32 xl:pt-40 2xl:pt-80 pb-10 md:pb-16 xl:pb-20 2xl:pb-52 relative after:h-full after:w-1/2 after:top-0 after:left-0 after:hidden sm:after:flex sm:after:absolute after:transition-all after:duration-300 after:skew-x-[30deg]  ${dark ?" after:bg-secondary-dark":"after:bg-secondary-light"} `} >
        <div className="left flex flex-col gap-y-3 sm:gap-y-5 md:gap-y-7">
          <h2 className={`font-poppins font-extrabold text-5xl lg:text-[2.75rem] lg:leading-[4.125rem] after:hidden sm:after:flex after:w-[26rem] after:h-2 sm:after:absolute relative after:top-full  after:left-0 after:translate-x-1/2 transition-all duration-300 after:transition-all after:duration-300  ${dark ?" xl:after:bg-primary-dark text-primary-dark ":"text-primary-light xl:after:bg-primary-light"}`}>Mohammad  Nadil</h2>
          <h3 className={` font-poppins font-bold text-3xl md:text-5xl max-w-[36rem]  ${dark ?"  text-light ":"text-dark "}`}>Front-end Developer & UI Designer</h3>
          <p className='font-poppins font-medium md:text-xl text-both max-w-[35rem] ' >Front-end developer focused on creating Web and Mobile applications. I really like different projects that solve real problems.</p>
          <div className="icon flex gap-3 sm:gap-5 md:gap-7">
            <a className={`inline-block p-3 rounded-full ${dark? " bg-light":" bg-dark"} `} href="">
            <FaFacebookSquare className={` text-xl sm:text-2xl md:text-4xl ${dark ? " text-dark":"  text-light"}`} />
            </a>
            <a className={`inline-block p-3 rounded-full ${dark? " bg-light":" bg-dark"} `} href="">
            <FaGithub className={` text-xl sm:text-2xl md:text-4xl ${dark ? " text-dark":"  text-light"}`} />
            </a>
            <a className={`inline-block p-3 rounded-full ${dark? " bg-light":" bg-dark"} `} href="">
            <FaLinkedinIn className={` text-xl sm:text-2xl md:text-4xl ${dark ? " text-dark":"  text-light"}`} />
            </a>
            <a className={`inline-block p-3 rounded-full ${dark? " bg-light":" bg-dark"} `} href="">
            <IoMdMail className={` text-xl sm:text-2xl md:text-4xl ${dark ? " text-dark":"  text-light"}`} />
            </a>
            <a className={`inline-block p-3 rounded-full ${dark? " bg-light":" bg-dark"} `} href="">
            <FaPhoneAlt className={` text-xl sm:text-2xl md:text-4xl ${dark ? " text-dark":"  text-light"}`} />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img className={` w-[70vw] sm:w-auto rounded-full ${dark?"border-2 border-primary-dark":"border-2 border-primary-light"}`} src={profile} alt="" />
            </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Home

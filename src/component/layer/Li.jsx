import React from 'react'

const Li = ({litext , href , color})=>{
    return (
      <li><a href={href} className={` cursor-pointer duration-300 transition-all font-poppins font-bold  xl:text-xl ${color}`} > {litext}</a></li>
    )
  }

export default Li

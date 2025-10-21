import React from 'react'

const Container = ({className ,children}) => {
  return (
    <div className={`max-w-[1312px] mx-auto relative px-3 xl:px-5 ${className} `}>
    {children}
    </div>
  )
}

export default Container

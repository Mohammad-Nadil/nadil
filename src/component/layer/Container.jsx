import React from 'react'

const Container = ({className ,children}) => {
  return (
    <div className={`max-w-[120rem] mx-auto relative px-3 ${className} `}>
    {children}
    </div>
  )
}

export default Container

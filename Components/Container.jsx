import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="relative max-w-[1152px] overflow-x-hidden lg:mx-auto lg:w-[80%]">
      {children}
    </div>
  )
}

export default Container

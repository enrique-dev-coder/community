import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="relative mx-auto w-[80%] max-w-[1152px] overflow-x-hidden lg:mx-auto">
      {children}
    </div>
  )
}

export default Container

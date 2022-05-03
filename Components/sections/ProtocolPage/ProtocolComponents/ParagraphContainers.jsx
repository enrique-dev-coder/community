import React from 'react'

const ParagraphContainers = ({ children, textcolor, margin = false }) => {
  return (
    <div
      className={`flex flex-col space-y-5 text-${textcolor} mx-auto w-4/5 text-sm lg:${
        margin && 'mr-[0px]'
      } lg:w-full lg:text-[15px] xl:w-4/5`}
      style={{
        fontFamily: " 'Montserrat', sans-serif",
        //marginRight: `${margin && '0'}`,
      }}
    >
      {children}
    </div>
  )
}

export default ParagraphContainers

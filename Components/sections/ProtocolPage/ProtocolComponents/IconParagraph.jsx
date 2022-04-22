import React from 'react'

const IconParagraph = ({ img, children }) => {
  return (
    <div className="flex w-full space-x-4">
      <div className="w-[40px]">
        <img src={img} alt="protocol img" className="h-[50px] w-[40px]" />
      </div>
      <div className="w-[90%]">{children}</div>
    </div>
  )
}

export default IconParagraph

import React from 'react'

const SectionImageRight = ({ img, children }) => {
  return (
    <div className="flex h-auto  w-full flex-col lg:h-[625px] lg:flex-row">
      <div className="flex h-full basis-2/4 flex-col justify-center">
        {children}
      </div>
      <div className=" mx-auto flex basis-2/4 flex-col justify-center">
        <img src={img} alt="protocol image" className="ml-auto w-[95%]" />
      </div>
    </div>
  )
}

export default SectionImageRight

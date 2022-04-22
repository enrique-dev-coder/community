import React from 'react'

const SectionImageLeft = ({ img, children }) => {
  return (
    <div className="flex h-auto  w-full flex-col lg:h-[625px] lg:flex-row">
      <div className=" mx-auto flex basis-2/4 flex-col justify-center">
        <img src={img} alt="protocol image" className="w-[95%]" />
      </div>
      <div className="flex h-full basis-2/4 flex-col justify-center">
        {children}
      </div>
    </div>
  )
}

export default SectionImageLeft

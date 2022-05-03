import React from 'react'

const SectionImageLeft = ({ img, children }) => {
  return (
    <div className="flex h-[650px]  w-full flex-col lg:h-[625px] lg:flex-row">
      <div className=" mx-auto hidden basis-2/4 flex-col justify-center lg:flex">
        <img src={img} alt="protocol image" className="w-[95%] " />
      </div>
      <div className="flex h-full basis-2/4 flex-col justify-center">
        {children}
      </div>
      <div className=" mx-auto flex basis-2/4 flex-col justify-center lg:hidden">
        <img src={img} alt="protocol image" className="mx-auto w-[90%] " />
      </div>
    </div>
  )
}

export default SectionImageLeft

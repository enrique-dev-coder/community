import React from 'react'

const SectionImageRight = ({ img, children }) => {
  return (
    <div className="flex h-auto w-full  flex-col py-20 lg:h-[625px] lg:flex-row lg:py-0">
      <div className=" mx-auto flex w-full flex-col justify-center lg:hidden lg:w-[40%]">
        <img
          src={img}
          alt="protocol image"
          className="mx-auto ml-auto w-[80%]"
        />
      </div>
      <div className="flex h-[85%] w-full flex-col justify-center lg:w-[60%]">
        {children}
      </div>
      {/*image for desktop*/}
      <div className=" mx-auto hidden w-full flex-col justify-center lg:flex lg:w-[40%]">
        <img src={img} alt="protocol image" className="ml-auto w-full" />
      </div>
    </div>
  )
}

export default SectionImageRight

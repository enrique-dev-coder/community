import React from 'react'

const Intro = () => {
  return (
    <div className="flex h-[350px] w-full flex-col justify-center bg-[url('/img/services/serviceherobg.png')] bg-cover bg-center bg-no-repeat lg:h-[480px]">
      <div className=" flex h-[80%] flex-col items-center justify-evenly">
        <h2 className="border-4 border-white  py-3 px-[80px] text-center text-3xl uppercase text-white shadow-md lg:px-[150px]">
          Services
        </h2>
        <img
          src="/img/services/serviceheroimg.png"
          alt="community services"
          className="hidden lg:block"
        />
      </div>
    </div>
  )
}

export default Intro

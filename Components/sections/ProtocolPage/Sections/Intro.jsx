import React from 'react'

const Intro = () => {
  return (
    <div className="flex h-[500px] w-full items-center  justify-center bg-[url('/img/protocol/introbg.png')] bg-cover bg-center  bg-no-repeat md:h-[400px] lg:h-[300px]">
      <div className="flex h-full max-w-[1152px] flex-col items-center  justify-center md:flex-row">
        <div className=" w-11/12 md:w-[60%]">
          <h1 className="mb-6 w-full border-2  p-3 text-center text-xl uppercase text-white lg:w-[65%]">
            OUR DECARBONIZATION PROTOCOL
          </h1>
          <p
            className=" w-full text-center text-[18px] text-white lg:w-full lg:text-left"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            A data-driven decarbonization protocol to transform communities into
            optimized and decarbonized virtual power plants.
          </p>
        </div>
        <div className="w-11/12 md:w-[40%]">
          <img
            src="/img/protocol/City.png"
            alt="PROTOCOL"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Intro

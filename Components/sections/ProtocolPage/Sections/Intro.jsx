import React from 'react'

const Intro = () => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center bg-purpleCommunity">
      <h1 className="mb-6 border-2 p-3 text-center text-xl uppercase text-white">
        OUR DECARBONIZATION PROTOCOL
      </h1>
      <p
        className=" w-2/4 text-center text-[18px] text-white"
        style={{
          fontFamily: " 'Montserrat', sans-serif",
        }}
      >
        A data-driven decarbonization protocol to transform communities into
        clean electricity Prosumer networks.
      </p>
    </div>
  )
}

export default Intro

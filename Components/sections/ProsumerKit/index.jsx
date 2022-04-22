import React from 'react'
import ScrollableImg from './ScrollableImg'
const index = () => {
  return (
    <div className="w-full " style={{ backgroundColor: '#120f12' }}>
      <div className="max-w-[1440px] py-8 lg:mx-auto lg:w-[95%]">
        <div className="mx-auto w-4/5">
          <ScrollableImg img="/img/prosumerkitplus.png" />
        </div>
        <div className="flex justify-center">
          <img src="/img/prosumer.GIF" alt="prosumer kit" />
        </div>
        <div>
          <p
            className=" mx-auto w-max  cursor-pointer  rounded-sm bg-purpleCommunity px-6 py-2 text-center font-bold text-white "
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            More pilots
          </p>
        </div>
      </div>
    </div>
  )
}

export default index

import React from 'react'
import FadeinElement from '../FadeinElement'
import FadeinImg from '../FadeinImg'
const CommercialPilots = () => {
  return (
    <div className="relative mb-20 max-w-[1440px] overflow-x-hidden lg:mx-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
      <div className="mx-auto flex w-4/5 flex-col items-center justify-center lg:w-full">
        <FadeinElement>
          <h2 className=" mx-auto border border-purpleCommunity px-6 py-2   text-center text-[22px] uppercase lg:w-[25%] lg:text-2xl">
            COMMERCIAL PILOTS
          </h2>
        </FadeinElement>
        <div className="my-10 w-full lg:h-[400px] lg:w-[700px]">
          <FadeinImg src="/img/pilots.png" />
        </div>
      </div>
    </div>
  )
}

export default CommercialPilots

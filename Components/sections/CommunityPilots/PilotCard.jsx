import React from 'react'

const PilotCard = ({ place, desc, img }) => {
  return (
    <div className="h-[225px] w-full border border-purpleCommunity md:h-[275px] md:w-[368px]">
      <div className="relative flex h-[80%]">
        <div className="absolute top-[-25%] left-[-1%] hidden h-[220px] w-[160px] md:block">
          <img src={img} alt={place} className="h-full w-full" />
        </div>
        <div className="hidden w-[50%] md:block"></div>
        <div className=" w-full md:w-[50%] ">
          <div className="mx-auto w-11/12">
            <h2 className="mt-10 text-[18px] uppercase">{place}</h2>
            <p
              className="mt-2 text-[13px]"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
      <p className="mr-5 cursor-pointer text-center text-purpleCommunity md:text-right">
        Learn more &#8250;
      </p>
    </div>
  )
}

export default PilotCard

import React from 'react'
import PilotCard from './PilotCard'
import FadeinElement from '../../FadeinElement'
const index = () => {
  const data = [
    {
      id: 1,
      place: 'Basset avocado, california',
      desc: 'Advanced Electricity Community Master Plan Program for Disadvantaged Communities',
      img: '/img/cases/Basset.png',
    },
    {
      id: 2,
      place: 'SANTA ANA, CALIFORNIA',
      desc: 'New 100% Electric Affordable Housing Program',
      img: '/img/cases/SantaAna.png',
    },
    {
      id: 3,
      place: 'Santa monica, california',
      desc: 'Affordable Housing Retro-fit Program',
      img: '/img/cases/SantaMonica.png',
    },
  ]
  return (
    <div className="relative  mb-20 max-w-[1440px] overflow-x-hidden lg:ml-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
      <div className="mx-auto flex w-4/5 flex-col items-center justify-center lg:w-full">
        <FadeinElement>
          <h2 className=" mx-auto mb-24 border-2 border-purpleCommunity  px-6  py-2 text-center text-[20px] uppercase lg:w-[45%] lg:text-2xl">
            PROSUMER COMMUNITY COMMERCIAL PILOTS
          </h2>
        </FadeinElement>
        <div className="mt-10 mb-20 flex flex-col space-y-5 md:flex-row md:space-x-4">
          {data.map((d) => (
            <PilotCard key={d.id} place={d.place} desc={d.desc} img={d.img} />
          ))}
        </div>
        <p
          className="mr-[80px] w-[120px] rounded-sm bg-purpleCommunity text-center font-bold text-white"
          style={{
            fontFamily: " 'Montserrat', sans-serif",
          }}
        >
          More pilots
        </p>
      </div>
    </div>
  )
}

export default index

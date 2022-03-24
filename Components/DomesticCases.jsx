import React, { useState } from 'react'
import Slide from './Slide'
import FadeInElement from './FadeinElement'
const CaseMenu = ({ places }) => {
  const [active, setActive] = useState(false)
  const [number, setNumber] = useState(0)

  //el estado de number empieza vacio, con la funcion cuando le damos click ese estado lo llenamos con el index de cada h3, ahora le agrega clases si el index de cada titulo es igual al numero dle estado
  const slectMenu = (num) => {
    const number = num
    setNumber(number)
  }
  const rightArrow = () => {
    setNumber(number + 1)
  }
  const leftArrow = () => {
    setNumber(number - 1)
  }
  if (number > 2) {
    setNumber(0)
  }
  if (number < 0) {
    setNumber(2)
  }
  return (
    <>
      {/*menu for desktop*/}
      <div className="container mx-auto hidden justify-around bg-purpleCommunity uppercase lg:flex lg:text-sm xl:text-lg">
        {places.map((p, i) => (
          <div
            className={
              number === i
                ? `basis-1/${places.length} bg-purpleCommunityLight py-4`
                : `basis-1/${places.length} bg-purpleCommunity py-4`
            }
            key={i}
          >
            <h3
              key={i}
              className={
                number === i
                  ? 'cursor-pointer text-center font-bold text-purpleCommunity  transition-all duration-300 ease-out'
                  : 'cursor-pointer text-center text-white transition-all duration-300 ease-out'
              }
              onClick={() => slectMenu(i)}
            >
              {p}
            </h3>
          </div>
        ))}
        {/*slider*/}
      </div>
      {/*menu for mobile*/}
      <div className=" mb-8 flex justify-center space-x-5 lg:hidden">
        <p
          className={`text-xl font-bold ${
            number === 0 && 'text-purpleCommunity underline'
          }`}
          onClick={() => slectMenu(0)}
        >
          1
        </p>
        <p
          className={`text-xl font-bold ${
            number === 1 && 'text-purpleCommunity underline'
          }`}
          onClick={() => slectMenu(1)}
        >
          2
        </p>
        <p
          className={`text-xl font-bold ${
            number === 2 && 'text-purpleCommunity underline'
          }`}
          onClick={() => slectMenu(2)}
        >
          3
        </p>
      </div>
      {/*slides*/}
      <div className="container relative mx-auto mb-8 lg:mb-0">
        {/*arrows*/}
        <div className="absolute  top-[8%] left-0 z-10 cursor-pointer lg:top-2/4">
          <img src="img/left.png" alt="left" onClick={() => leftArrow()} />
        </div>
        <div className="absolute right-0  top-[8%] z-10 cursor-pointer lg:top-2/4">
          <img src="img/right.png" alt="left" onClick={() => rightArrow()} />
        </div>
        {number === 0 && (
          <FadeInElement>
            <Slide
              img="/img/cases/Basset.png"
              place="Basset Avocado,California"
              title="Existing Community Electrification"
              textcolor="#9885F7"
              content={[
                {
                  img: '/img/icons/Community Solar.png',
                  desc: 'Community Solar',
                },
                {
                  img: '/img/icons/Resiliency hub.png',
                  desc: 'Resilency hub microgid',
                },
                {
                  img: '/img/icons/Prosumer home.png',
                  desc: 'Prosumer homes with solar,storage and peer-to-market VPP; peer-to-peer simulation',
                },
                { img: '/img/icons/HPWH.png', desc: 'HPWH' },
                {
                  img: '/img/icons/Energy Efficiency.png',
                  desc: 'Energy efficiency (EE)',
                },
                {
                  img: '/img/icons/Blockchain.png',
                  desc: 'Blockchain Super Node',
                },
                {
                  img: '/img/icons/Carbon Management.png',
                  desc: 'Carbon Management',
                },
                {
                  img: '/img/icons/Smart Thermostat.png',
                  desc: 'Smart Thermostat',
                },
              ]}
            />
          </FadeInElement>
        )}
        {number === 2 && (
          <FadeInElement>
            <Slide
              img="/img/cases/SantaMonica.png"
              place="Santa Monica,California"
              title="Affordable Housing Community Decarbonization"
              textcolor="#66d9ff"
              content={[
                {
                  img: '/img/icons/Smart Thermostat.png',
                  desc: 'Smart Thermostat',
                },
                {
                  img: '/img/icons/Prosumer home.png',
                  desc: 'Prosumer homes with solar,storage and peer-to-market VPP',
                },
                {
                  img: '/img/icons/Energy Efficiency.png',
                  desc: 'Energy efficiency (EE)',
                },
                {
                  img: '/img/icons/Blockchain.png',
                  desc: 'Blockchain Super Node',
                },
                {
                  img: '/img/icons/Carbon Management.png',
                  desc: 'Carbon Management',
                },
              ]}
            />
          </FadeInElement>
        )}
        {number === 1 && (
          <FadeInElement>
            <Slide
              img="/img/cases/SantaAna.png"
              place="Santa Ana,California"
              title="New 100% Electric Affordable Housing & Retail Space"
              textcolor="#0149AC"
              content={[
                {
                  img: '/img/icons/EV Van Pooling.png',
                  desc: 'EV Van pooling',
                },
                {
                  img: '/img/icons/Smart Thermostat.png',
                  desc: 'Smart Thermostat',
                },
                {
                  img: '/img/icons/Prosumer home.png',
                  desc: 'Prosumer homes with solar,storage and peer-to-market VPP',
                },
                {
                  img: '/img/icons/Energy Efficiency.png',
                  desc: 'Energy efficiency (EE)',
                },
                {
                  img: '/img/icons/Blockchain.png',
                  desc: 'Blockchain Super Node',
                },
                {
                  img: '/img/icons/Carbon Management.png',
                  desc: 'Carbon Management',
                },
              ]}
            />
          </FadeInElement>
        )}
      </div>
    </>
  )
}

export default CaseMenu

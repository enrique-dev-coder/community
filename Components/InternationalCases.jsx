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
  //funciones del slider
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
      <div className="container mx-auto hidden justify-around bg-purpleCommunity uppercase lg:flex lg:text-sm  xl:text-lg">
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
                  ? 'cursor-pointer text-center font-bold  text-purpleCommunity transition-all duration-300 ease-out'
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
      {/*Menu for mobile*/}
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
      <div className="container relative mx-auto mb-20 lg:mb-0">
        <div className="absolute top-[8%] left-0 z-10 cursor-pointer lg:top-2/4">
          <img src="img/left.png" alt="left" onClick={() => leftArrow()} />
        </div>
        <div className="absolute  top-[8%] right-0 z-10 cursor-pointer lg:top-2/4">
          <img src="img/right.png" alt="left" onClick={() => rightArrow()} />
        </div>
        {number === 0 && (
          <FadeInElement>
            <Slide
              img="/img/cases/Medellin.png"
              place="Medellin, Colombia"
              title="Transactive Energy"
              textcolor="#01AD2F"
              content={[
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
              img="/img/cases/Santiago.png"
              place="Santiago del Estero,Argentina"
              title="LAB"
              textcolor="#8CBCE0"
              content={[
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
              ]}
            />
          </FadeInElement>
        )}
        {number === 2 && (
          <FadeInElement>
            <Slide
              img="/img/cases/Valencia.png"
              place="Valencia,Spain"
              title="Advanced Electricity Community"
              textcolor="#0149AC"
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
              ]}
            />
          </FadeInElement>
        )}
      </div>
    </>
  )
}

export default CaseMenu

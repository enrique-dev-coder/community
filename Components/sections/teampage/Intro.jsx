import React from 'react'
import Lottie from 'react-lottie'
import { eye, people } from '../../../public/static/animation.json'

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: eye,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const peopleOptions = {
    loop: true,
    autoplay: true,
    animationData: people,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className="  relative mb-10 flex h-auto w-full flex-col justify-center bg-purpleCommunity py-20 lg:h-screen lg:py-0">
      <div className="absolute bottom-[5%] right-[45%] hidden animate-bounce lg:right-[45%] lg:block">
        <img src="/img/downwhite.png" alt="scroll down" />
      </div>
      <div className="container mx-auto flex h-4/5 w-4/5 flex-col lg:justify-between xl:max-w-6xl xl:justify-evenly">
        <h2 className="mx-auto w-full border-2 border-white py-4  text-center text-[22px]  uppercase text-white lg:w-3/12 lg:text-2xl">
          About Us
        </h2>
        {/*contenedor de texto  y lotties*/}
        <div className="flex h-auto w-full flex-col  lg:h-[250px] lg:flex-row">
          <div className="mb-10 basis-1/2 lg:mb-0">
            <div className="flex h-full flex-col items-center justify-evenly space-y-4 lg:flex-row">
              {/*lottie*/}
              <div className="flex h-full w-[100px] flex-col justify-start self-start">
                <Lottie options={defaultOptions} height={110} width={90} />
              </div>
              {/*Texto*/}
              <div
                className="mx-auto flex h-full flex-col justify-evenly text-base lg:w-[80%] lg:text-xl"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                <h4 className="font-bold text-white ">Who we are</h4>
                <p className="text-white">
                  We are a team of multi-disciplinary backgrounds developing an
                  open source electrification and decarbonization protocol in
                  order to accelerate the implementation of solutions across
                  communities to curb carbon emissions.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10 basis-1/2 lg:mb-0 ">
            <div className="flex h-full flex-col items-center justify-evenly lg:flex-row">
              {/*lottie*/}
              <div className="flex h-full w-[100px] flex-col justify-start self-start">
                <Lottie options={peopleOptions} height={110} width={90} />
              </div>
              {/*Texto*/}
              <div
                className="mx-auto flex h-full flex-col justify-evenly text-base lg:w-[80%]  lg:text-xl"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                <h4 className="font-bold text-white">Our Vision</h4>
                <p className="text-white">
                  A world powered by decentralized, decarbonized, democratized,
                  and digitized (4Ds) prosumer communities in which all
                  stakeholders (individuals, organizations, administrations) are
                  incentivized and empowered towards climate action.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p
            className="text-base font-bold text-white lg:text-center lg:text-xl"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            We are proud to be in a leadership position in the decarbonization
            efforts across environmental justice communities in California.
            Community Electricity is on route to prove the value of 30+ business
            cases integrating over 300 assets connected locally, regionally, and
            internationally. Community Electricity, its people, its partners,
            are all committed to driving decarbonization and electrication
            forward.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro

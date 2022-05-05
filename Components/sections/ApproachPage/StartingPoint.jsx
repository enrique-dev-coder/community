import React from 'react'
import Container from '../../Container'
const StartingPoint = () => {
  return (
    <Container>
      <div className="flex h-auto w-full items-center lg:h-[600px]">
        <div className="flex h-full w-full flex-col justify-center lg:h-[80%] lg:flex-row">
          {/*image for mobile*/}
          <div className="mb-5 flex h-full w-full flex-col  justify-center lg:hidden  lg:w-1/2">
            <div className="mx-auto h-full w-full">
              <img
                src="/img/approach/starting.png"
                alt="starting point"
                className=" h-full w-full"
              />
            </div>
          </div>
          {/*text container*/}
          <div className="flex h-full w-full flex-col justify-around lg:h-[95%]  lg:w-1/2 ">
            <h2 className=" mb-5 w-full border border-purpleCommunity py-3 text-center text-base font-medium uppercase lg:mb-0 lg:w-[45%] lg:text-xl">
              The Starting Point
            </h2>
            <div
              className="flex h-full flex-col justify-evenly text-sm lg:h-[80%]  lg:text-base"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              <p className="mb-5 lg:mb-0 ">
                <b>Our starting point: "CLIMATETECH Innovation Zones."</b>
              </p>
              <p>Our innovation zones are:</p>
              <ul className="mx-auto mb-5 w-10/12 list-disc lg:mb-0 lg:w-11/12 ">
                <li>Commercial pilots and living laboratories.</li>
                <li>Proving the value of our concepts and methods.</li>
                <li>
                  Bringing communities up to speed with decentralized energy
                  generation and guiding them towards their energy transition.
                </li>
                <li>Modernizing workforce development.</li>
              </ul>
              <p>
                ClimateTech Innovation Zones showcase cutting-edge innovation
                through an open-source living lab model igniting other zones
                across cities to follow.
              </p>
            </div>
          </div>
          <div className="hidden h-full w-full flex-col justify-center  lg:flex lg:w-1/2 ">
            <div className="mx-auto h-[80%] w-[90%]">
              <img
                src="/img/approach/starting.png"
                alt="starting point"
                className=" h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default StartingPoint

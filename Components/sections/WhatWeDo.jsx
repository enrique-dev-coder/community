import React from 'react'

import FadeinElement from '../FadeinElement'
import FadeinImg from '../FadeinImg'
const WhatWeDo = () => {
  return (
    <div className="relative h-auto max-w-[1440px] overflow-x-hidden  lg:mx-auto lg:h-[600px] lg:w-[95%]  lg:pt-10">
      {/*    <div className="absolute hidden lg:-left-[45px] lg:top-[10px] lg:block  xl:-left-[10px] xl:top-[55px]">
        <img src="/img/puzzleFill2.png" />
      </div> */}
      <div className="container relative mx-auto mb-10 flex h-auto w-4/5 flex-col lg:flex-row  xl:max-w-6xl ">
        {/*text container*/}
        <div className=" w-4/4 flex flex-col space-y-5 md:w-2/4  xl:mt-12">
          {/*Contenedor de rompecabezas y titulo*/}
          <div className=" w-full lg:w-1/3">
            {/*img container*/}
            <FadeinElement>
              <h2 className="mt-1 border  border-purpleCommunity py-2 text-center text-[22px] uppercase text-communitygray  lg:text-2xl  ">
                What we do
              </h2>
            </FadeinElement>
          </div>
          <div className=" flex flex-col lg:justify-evenly">
            <FadeinElement>
              <p
                className="mx-auto mb-4 whitespace-pre-line text-sm text-communitygray md:text-base lg:mx-0 "
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                We{' '}
                <b>assess, orchestrate, and fund virtual power plants (VPPs)</b>{' '}
                in partnership with cities, utilities, and real-estate
                developers.
              </p>
            </FadeinElement>
            <FadeinElement>
              <p
                className="mx-auto mb-4 whitespace-pre-line text-sm text-communitygray md:text-base lg:mx-0 "
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                They are designed to accelerate the clean electrification and{' '}
                <b>
                  decarbonization efforts of disadvantaged (i.e. Environmental
                  Justice) communities at scale.
                </b>
              </p>
            </FadeinElement>
            <FadeinElement>
              <p
                className="mx-auto mb-4 whitespace-pre-line text-sm text-communitygray md:text-base lg:mx-0 "
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                Our bottom-up approach starts with <b>commercial pilots</b>
                <b> in a high contamination score areas.</b>
              </p>
            </FadeinElement>
            <FadeinElement>
              <p
                className="mx-auto mb-4 whitespace-pre-line text-sm text-communitygray md:text-base lg:mx-0 "
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                In order to promote the development of VPPs, we are developing a{' '}
                <b>
                  digital reward system backup by the monetization of (1)
                  net-metering, (2) grid services, and (3) renewable energy
                  credits.
                </b>
              </p>
            </FadeinElement>
            <FadeinElement>
              <p
                className="mx-auto mb-4 whitespace-pre-line text-sm  text-purpleCommunity md:text-base lg:mx-0 "
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                <b>
                  We incentivize participants to decarbonize collectively and
                  get rewarded
                </b>
              </p>
            </FadeinElement>
          </div>
        </div>
        {/*img container*/}
        <div className="w-4/4 hidden flex-col justify-center  md:flex md:w-2/4">
          <div className="h-auto w-full md:h-[428px] md:w-[479px]">
            <FadeinElement>
              <img
                src="/img/whatwedo2.png"
                alt="what we do?"
                className="h-full w-full"
              />
            </FadeinElement>
          </div>
        </div>
      </div>
      {/*image container*/}
      {/*       <div className=" mb-20 flex justify-center">
        <div className="w-4/5 lg:w-[750px] ">
          <FadeinImg src="/img/rewards3.png" />
        </div>
      </div> */}
    </div>
  )
}

export default WhatWeDo

import React from 'react'
import FadeinImg from '../FadeinImg'
import FadeinElement from '../FadeinElement'
const WhatWeDo = () => {
  return (
    <div className="relative max-w-[1440px] overflow-x-hidden lg:mx-auto lg:w-[95%]  lg:pt-10">
      <div className="absolute hidden lg:-left-[45px] lg:top-[10px] lg:block  xl:-left-[10px] xl:top-[55px]">
        <img src="/img/puzzle2.png" />
      </div>
      <div className="container relative mx-auto grid h-auto w-4/5 grid-cols-1 lg:grid-cols-12 xl:max-w-6xl ">
        <div className="col-span-7 flex flex-col space-y-5  xl:mt-12">
          {/*Contenedor de rompecabezas y titulo*/}
          <div className=" w-full lg:w-1/3">
            {/*img container*/}
            <div className="w-100 absolute hidden h-80 lg:hidden">
              <FadeinImg src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643934063/community/3_2_bheng5.png" />
            </div>
            <FadeinElement>
              <h2 className="mt-1 mb-10 border border-purpleCommunity py-2 text-center text-[22px] uppercase  lg:text-2xl  ">
                What we do
              </h2>
            </FadeinElement>
          </div>
          <div className=" flex  flex-col   lg:justify-evenly">
            <FadeinElement>
              <p
                className="mx-auto mb-10  whitespace-pre-line text-base lg:mx-0 lg:text-xl"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                We develop{' '}
                <b>
                  prosumer communities, owned and operated as{' '}
                  <span style={{ color: '#9885F7' }}>
                    data-driven micro-utilities
                  </span>{' '}
                  by network members.
                </b>
              </p>
            </FadeinElement>
            <FadeinElement>
              <p
                className="mx-auto mb-4  whitespace-pre-line text-base lg:mx-0 lg:text-xl"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                Members autonomously provide grid services decarbonizing the
                central grid, while{' '}
                <b>
                  monetizing{' '}
                  <span style={{ color: '#9885F7' }}>energy surplus</span>{' '}
                </b>{' '}
                & <b>capitalizing</b> on{' '}
                <b style={{ color: '#9885F7' }}>carbon offset attributes. </b>
              </p>
            </FadeinElement>
          </div>
        </div>
        {/*img container*/}
        <div className=" mb-20 lg:col-span-5 ">
          <FadeinImg src="/img/whatwedo2.png" />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo

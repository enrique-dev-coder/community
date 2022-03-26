import React from 'react'
import FadeinElement from '../FadeinElement'
import FadeinImg from '../FadeinImg'
const Howwedoit = () => {
  return (
    <div className="relative max-w-[1440px] overflow-x-hidden lg:mx-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
      <div className="absolute hidden     lg:-right-[50px] lg:top-[3px] lg:block xl:top-[90px] xl:-right-[25px] ">
        <img src="/img/puzzle1.png" />
      </div>
      <div className="container mx-auto mb-20  flex w-4/5 flex-col lg:flex-row xl:max-w-6xl">
        {/*title and text container*/}
        <div className=" flex w-full flex-col justify-center  lg:w-[60%]">
          {/*title container*/}
          <div className="mb-8 flex w-full lg:w-[35%]">
            <FadeinElement>
              <h2 className="border border-purpleCommunity px-6 py-2 text-center text-[22px] uppercase lg:text-2xl">
                How we do it
              </h2>
            </FadeinElement>
          </div>
          {/*Paragraph contianer*/}
          <div
            className="mb-4"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            <FadeinElement>
              <p className=" mb-2 w-full text-sm lg:w-4/5 lg:text-left  lg:text-base ">
                We created a decarbonization protocol that provides a
                comprehensive pathway for the development of prosumer
                communities.
              </p>
            </FadeinElement>
            <FadeinElement>
              <p className=" mb-4 w-full text-sm lg:w-4/5  lg:text-left  lg:text-base">
                Through satellite monitoring, nodes, and blockchain
                infrastructure, we collect data to{' '}
                <b> benchmark, standardize and accelerate electrification.</b>
              </p>
            </FadeinElement>
            <button className=" border-2 border-purpleCommunity px-8 py-2 text-sm font-bold  text-purpleCommunity lg:text-base">
              Learn more
            </button>
          </div>
          {/*boton de learn more */}
        </div>
        <div className="w-full lg:w-[40%]">
          <div>
            <FadeinImg src="/img/howedoit2.png" alt="How we do it" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howwedoit

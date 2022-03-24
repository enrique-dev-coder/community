import React from 'react'
import FadeinTitle from '../FadeinTittle'
import FadeinImg from '../FadeinImg'
import FadeinElement from '../FadeinElement'
const Aboutus = () => {
  return (
    <div className="relative max-w-[1440px] overflow-x-hidden lg:mx-auto  lg:w-[95%] lg:pt-24">
      <div className="absolute hidden     lg:-right-[50px] lg:top-[55px] lg:block xl:-right-[14px] xl:top-[76px]">
        <img src="/img/puzzle1.png" />
      </div>

      <div
        className="container relative mx-auto grid h-auto w-4/5 grid-cols-1 lg:grid-cols-12 xl:max-w-6xl "
        id="about"
      >
        {/*imagen flotante*/}
        {/*img container*/}
        <div className="col-span-1 mr-4 mb-20 hidden lg:col-span-7 lg:block xl:col-span-6  ">
          <FadeinImg src="/img/entorno-v2.png" className="h-full w-full" />
        </div>
        <div className="mb-10 flex flex-col space-y-4 lg:col-span-5 lg:mb-0  lg:justify-center xl:col-span-6">
          <FadeinElement>
            <h2 className="mt-1 mb-4 border border-purpleCommunity py-2 text-center text-[22px] uppercase  lg:ml-auto lg:w-6/12  lg:text-2xl xl:w-5/12 ">
              Who we are
            </h2>
          </FadeinElement>
          <FadeinElement>
            <p
              className="lg:w-12/12 mx-auto  mb-4 whitespace-pre-line text-left text-base lg:text-right lg:text-lg xl:w-11/12 xl:text-xl"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              Community Electricity is a <b>Climate Tech</b> start-up that
              designs, finances, and implements Prosumer Communities at scale.
              We incentivize the deployment of distributed energy resources
              decarbonizing cities <b>block by block.</b>
            </p>
          </FadeinElement>
          <div className="lg:w-12/12 flex lg:ml-auto xl:w-11/12">
            <div className=" hidden h-[4.75rem] w-[4.75rem] lg:block">
              <img
                src="/img/foco.png"
                alt="prosumers"
                className="h-full w-full"
              />
            </div>
            <FadeinElement>
              <p
                className=" xl:text-md  mx-auto flex-1 whitespace-pre-line text-left text-base uppercase lg:w-full lg:text-right lg:text-lg"
                style={{ color: '#9885F7' }}
              >
                Prosumers are producers and consumers of Local and clean
                Electricity.
              </p>
            </FadeinElement>
            {/*img para mobile*/}
          </div>
          <div className=" lg:hidden">
            <img src="/img/entorno-v2.png" />
          </div>
        </div>

        {/*contenedor de iamgen y parrafo*/}
      </div>
    </div>
  )
}

export default Aboutus

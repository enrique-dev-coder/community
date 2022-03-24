import React from 'react'
import FadeinElement from '../FadeinElement'
const Howwedoit = () => {
  return (
    <div className="relative max-w-[1440px] overflow-x-hidden lg:mx-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
      <div className="absolute hidden     lg:-right-[50px] lg:top-[3px] lg:block xl:top-[90px] xl:-right-[25px] ">
        <img src="/img/puzzle1.png" />
      </div>

      <div className="container mx-auto mb-40 grid w-4/5  grid-cols-4 lg:grid-cols-12 xl:max-w-6xl">
        <div className=" col-span-6 hidden lg:inline-grid">
          <img src="/img/howwedoit.png" alt="How we do it" className="w-full" />
        </div>
        {/*title and text container*/}
        <div className="col-span-4 flex flex-col justify-center lg:col-span-5 lg:col-start-8">
          {/*title container*/}
          <div className="mb-4 flex lg:justify-end">
            <FadeinElement>
              <h2 className="border border-purpleCommunity px-6  py-2 text-[22px] uppercase lg:text-2xl">
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
              <p className=" text-left text-base lg:text-right lg:text-xl ">
                We use a<b> whole-system </b>thinking and data-driven{' '}
                <b className=" text-purpleCommunity">
                  decarbonization protocol
                </b>{' '}
                to orchestrate and fund the necessary steps of our prosumer
                communities'<b>development </b> and <b>deployment.</b>
              </p>
            </FadeinElement>
          </div>
          {/*boton de learn more */}
          <div className="mb-4">
            <FadeinElement>
              <p className=" mr-auto w-[50%] rounded-md bg-purpleCommunity py-2 text-center text-xl font-bold tracking-wide text-white lg:ml-auto lg:mr-0 lg:w-[50%]">
                learn more
              </p>
            </FadeinElement>
          </div>
        </div>
        {/*Image for mobile*/}
        <div className=" col-span-4 mt-4  lg:hidden">
          <img src="/img/howwedoit.png" alt="How we do it" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Howwedoit

import React from 'react'
import FadeinElement from '../FadeinElement'
const Howwedoit = () => {
  return (
    <div className="container mx-auto grid w-4/5 grid-cols-4  lg:grid-cols-12 xl:max-w-6xl">
      <div className=" col-span-6 hidden lg:inline-grid">
        <img src="/img/howwedoit.png" alt="How we do it" className="w-full" />
      </div>
      {/*title and text container*/}
      <div className="col-span-4 flex flex-col justify-center lg:col-span-5 lg:col-start-8">
        {/*title container*/}
        <div className="mb-4 flex justify-end">
          <FadeinElement>
            <h2 className="border border-purpleCommunity px-6 py-2 text-2xl uppercase">
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
            <p className="text-right text-xl">
              We use a<b> whole-system </b>thinking and data-driven{' '}
              <b className=" text-purpleCommunity">decarbonization protocol</b>{' '}
              to orchestrate and fund the necessary steps of our prosumer
              communities'<b>development </b> and <b>deployment.</b>
            </p>
          </FadeinElement>
        </div>
        {/*boton de learn more */}
        <div className="mb-4">
          <FadeinElement>
            <p className="ml-auto w-[100%] rounded-md bg-purpleCommunity py-2 text-center text-xl font-bold tracking-wide text-white lg:w-[50%]">
              learn more
            </p>
          </FadeinElement>
        </div>
      </div>
      {/*reward image*/}
      <div className="col-span-4 my-24 lg:col-span-10 lg:col-start-2">
        <img src="/img/Rewards2.jpg" alt="Our process" />
      </div>
      {/*video section*/}
      <div className="col-span-4 lg:col-span-6 lg:col-start-4">
        <FadeinElement>
          <h2
            className="mb-4  border-2 border-purpleCommunity py-3 text-center  uppercase  lg:text-xl
        "
          >
            our decarbonization efforts start with
          </h2>
        </FadeinElement>
      </div>
      <div className="col-span-4 mb-20 lg:col-span-10 lg:col-start-2">
        <video
          src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1644596801/community/LoopVideo_Site_2_guyhxg.mp4"
          autoPlay
          loop
          muted
          className="mx-auto h-full w-4/5 lg:w-11/12 "
        />
      </div>
      <div className="col-span-4 mb-8 lg:col-span-6 lg:col-start-4">
        <FadeinElement>
          <h2
            className="mb-4  border-2 border-purpleCommunity py-3 text-center  uppercase  lg:text-xl
        "
          >
            prosumer comunnity pilots (in progress)
          </h2>
        </FadeinElement>
      </div>
    </div>
  )
}

export default Howwedoit

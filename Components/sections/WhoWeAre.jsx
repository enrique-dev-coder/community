import React from 'react'
import FadeinElement from '../FadeinElement'
import Link from 'next/link'
const Aboutus = () => {
  return (
    <div className="relative mb-10 h-auto max-w-[1440px] overflow-x-hidden lg:mx-auto lg:h-[600px]  lg:w-[95%] lg:pt-24">
      {/*      <div className="absolute hidden     lg:-right-[50px] lg:top-[55px] lg:block xl:-right-[14px] xl:top-[76px]">
        <img src="/img/puzzleFill.png" />
      </div> */}

      <div
        className="container relative mx-auto   grid h-auto w-4/5 grid-cols-1 lg:grid-cols-12 xl:max-w-6xl "
        id="about"
      >
        {/*imagen flotante*/}
        <div className="mb-10 flex flex-col space-y-4 lg:col-span-5 lg:mb-0  lg:justify-center xl:col-span-6">
          <FadeinElement>
            <h2 className=" mt-1 mb-4 border border-purpleCommunity py-2 text-center text-[22px] uppercase text-communitygray  lg:w-6/12  lg:text-2xl xl:w-5/12 ">
              Who we are
            </h2>
          </FadeinElement>
          <FadeinElement>
            <p
              className="whitespace-pre-line text-left text-sm text-communitygray md:text-base lg:w-[95%]   "
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              Community Electricity is a <b>Climate Tech</b> start-up based in
              Los Angeles, California. We are currently developing{' '}
              <b>CommunityOS</b>, a decision-making platform powering a
              data-driven <b>decarbonization protocol</b> to assess, design, and
              orchestrate the development of{' '}
              <b>
                our community-scale Virtual Power Plants (VPPs) and
                electrification programs.
              </b>
            </p>
          </FadeinElement>
          <FadeinElement>
            <p
              className=" mb-4 whitespace-pre-line text-left  text-sm text-communitygray md:text-base lg:w-[95%]   "
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              <b>VPPs</b> are <b>networks of clean electricity assets</b> able
              to
              <b> produce, consume and sell surplus</b> electricity back to the
              grid. These <b>decentralized, micro-utilities</b> are{' '}
              <b>designed to decarbonize communities</b> while improving air
              quality, community resiliency, and local prosperity.
            </p>
          </FadeinElement>

          <div className=" lg:hidden">
            <img src="/img/entorno-v2.png" />
          </div>
        </div>
        {/*img container*/}
        <div className="col-span-1  hidden h-[286px] w-[559px] lg:col-span-7 lg:block xl:col-span-6  ">
          <FadeinElement>
            <img src="/img/entorno-v2.png" className="w-full" />
          </FadeinElement>
        </div>
        {/*contenedor de iamgen y parrafo*/}
        <div className="col-span-3">
          <Link href="/approach">
            <button className="border-2 border-purpleCommunity px-8 py-2 text-sm font-bold  text-purpleCommunity lg:text-base">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Aboutus

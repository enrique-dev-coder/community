import React from 'react'

const Footer = () => {
  return (
    <div className="mt-10 w-full overflow-x-hidden bg-black py-4">
      <div className="container relative mx-auto w-4/5 xl:max-w-6xl ">
        <div className="absolute -right-[15%] top-[25%] hidden lg:block">
          <img src="/img/footerpuzzle.png" alt="" />
        </div>
        <img src="/img/footerlogo.png" alt="Community Electricity" />
        <h2 className="mb-4 text-xl uppercase text-white">
          Community Electricity
        </h2>
        <h2
          className="mb-4 text-xl text-white lg:w-1/4"
          style={{
            fontFamily: " 'Montserrat', sans-serif",
          }}
        >
          Join the prosumer network and monetize as you decarbonize
        </h2>
        <form className="flex flex-col  lg:flex-row lg:space-x-4">
          <input type="text" placeholder="Your email..." className=" py-2" />
          <button className=" mt-4 bg-purpleCommunity px-4 py-2 text-white hover:bg-purpleCommunityLight hover:text-black lg:mt-0">
            Subscribe
          </button>
        </form>
      </div>
      <div className="mt-10 mb-10 w-full text-center">
        <p className="text-xl text-white">
          Community Electricity © 2022 All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer

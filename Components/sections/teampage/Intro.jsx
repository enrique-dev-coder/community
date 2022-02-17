import React from 'react'

const Intro = () => {
  return (
    <div className=" grid h-4/5 grid-cols-4 lg:grid-cols-12">
      <div className=" col-span-4 hidden bg-black lg:col-span-4 lg:block lg:h-[420px] xl:h-[550px]"></div>
      <div className="col-span-4 mx-auto flex  w-11/12  flex-col justify-evenly text-white lg:col-span-8 lg:h-[420px]  lg:justify-between xl:h-[550px]">
        <h2 className="marginBottomForMobile border border-white px-2 py-2 text-center text-2xl uppercase lg:w-3/12 ">
          Team
        </h2>
        <h3
          className="lg:text-md marginBottomForMobile text-xl   font-bold xl:text-xl "
          style={{
            fontFamily: " 'Montserrat', sans-serif",
          }}
        >
          Who we are
        </h3>
        <p
          className=" marginBottomForMobile whitespace-pre-line text-xl lg:text-sm xl:text-xl "
          style={{
            fontFamily: " 'Montserrat', sans-serif",
          }}
        >
          We are a committee of multi-disciplinary field experts co-developing
          an open source electrification and decarbonization protocol in order
          to accelerate the implementation of solutions across communities to
          curb carbon emissions. We are committed to incubate, develop and
          manage a new data-driven social, environmental and economic system
          that will drive our civilization towards a more efficient, inclusive,
          empathetic, cooperative and thriving global community.
        </p>
        {/*Image for mobile view*/}
        <div className="marginBottomForMobile h-[400px] bg-black lg:hidden "></div>
        <p
          className=" marginBottomForMobile whitespace-pre-line text-xl lg:text-sm xl:text-xl "
          style={{
            fontFamily: " 'Montserrat', sans-serif",
          }}
        >
          We are proud to be in a leadership position in the decarbonization
          efforts across environmental justice communities in California.
          Community Electricity is on route to prove the value of 30+ business
          cases integrating over 300 assets connected locally, regionally, and
          internationally. Community Electricity, its people, its partners, are
          all committed to driving decarbonization and electrication forward.
        </p>
      </div>
    </div>
  )
}

export default Intro

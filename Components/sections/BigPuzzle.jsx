import React from 'react'

const BigPuzzle = () => {
  return (
    <section className=" mb-20 bg-purpleCommunityLight">
      <div className="relative  max-w-[1440px] overflow-x-hidden lg:ml-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
        <div className="relative ml-auto h-[500px] w-[80%] bg-purpleCommunity">
          <div className=" absolute right-[85%] bottom-[20%] z-0 h-[300px] w-[300px] rounded-full bg-purpleCommunity "></div>
          <p
            className="absolute bottom-[31%] right-[61%] z-10 w-[480px] text-[18px] font-semibold text-white"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            We are implementing the largest Prosumer Community of its kind in
            California. A network of over seventy distributed energy resources
            connected to develop benchmark data and create decarbonization
            programs for Disadvantaged/Environmental Justice Communities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BigPuzzle

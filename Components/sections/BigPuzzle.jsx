import React from 'react'

const BigPuzzle = () => {
  return (
    <section className=" mb-20 bg-purpleCommunity md:bg-purpleCommunityLight">
      <div className="relative  max-w-[1440px] overflow-x-hidden lg:ml-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
        {/*text container*/}
        <div className="relative mx-auto flex h-[500px] w-[80%] flex-col bg-purpleCommunity md:mr-0 md:ml-auto md:flex-row">
          {/*empty circle*/}
          <div className=" absolute right-[85%] bottom-[20%] z-0 hidden h-[300px] w-[300px] rounded-full bg-purpleCommunity md:block "></div>
          <p
            className=" absolute bottom-[31%] right-[61%] z-10 hidden w-[480px] text-[18px] font-semibold text-white md:block"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            We are implementing the largest Prosumer Community of its kind in
            California. A network of over seventy distributed energy resources
            connected to develop benchmark data and create decarbonization
            programs for Disadvantaged/Environmental Justice Communities.
          </p>
          {/*div vacio para dar forma*/}
          <div className="flex h-full w-full flex-col justify-center  md:w-[50%]">
            <p
              className="text-sm font-bold text-white md:hidden"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              {' '}
              We are implementing the largest Prosumer Community of its kind in
              California. A network of over seventy distributed energy resources
              connected to develop benchmark data and create decarbonization
              programs for Disadvantaged/Environmental Justice Communities.
            </p>
          </div>
          {/*video container*/}
          <div className="mb-8 flex h-full w-full flex-col justify-center md:mb-0 md:w-[50%]">
            <div className="lg:w-[500px]">
              <video
                src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1648334813/community/VIDEO_LAPTOP_1_1_mutwag.mp4"
                controls
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BigPuzzle

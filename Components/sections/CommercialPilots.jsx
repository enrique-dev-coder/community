import React from 'react'
import FadeinElement from '../FadeinElement'
import FadeinImg from '../FadeinImg'
import Video from '../Video'
const CommercialPilots = () => {
  return (
    <div className="relative mb-20 max-w-[1440px] overflow-x-hidden lg:mx-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
      <div className="mx-auto flex w-4/5 flex-col items-center justify-center lg:w-full">
        <FadeinElement>
          <h2 className=" mx-auto mb-10 border border-purpleCommunity px-6 py-2 text-center   text-[22px] uppercase text-communitygray lg:w-[25%] lg:text-2xl">
            COMMERCIAL PILOTS
          </h2>
        </FadeinElement>
        <FadeinElement>
          <p
            className="mx-auto mb-5 w-full text-center text-communitygray md:w-[52%]"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            Prosumer Electricity Community commercial pilots help us{' '}
            <b>
              develop benchmark data creating innovative tailor-made programs
            </b>{' '}
            to accelerate the decarbonization of disadvantaged communities (both
            retrofit and new).
          </p>
        </FadeinElement>

        {/*   <div className="my-10 w-full lg:h-[400px] lg:w-[700px]">
          <FadeinImg src="/img/pilots.png" />
        </div> */}
      </div>
      <Video
        videosrc="https://res.cloudinary.com/dhq3jcns5/video/upload/v1648498616/community/VIDEO_NUEVO_1_evplm4.mp4"
        menosDe1Min={false}
      />
    </div>
  )
}

export default CommercialPilots

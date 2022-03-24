import React from 'react'

const Video = () => {
  return (
    <div className=" mx-auto mb-16 w-4/5 lg:overflow-x-hidden xl:max-w-6xl">
      <video
        src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1645156320/community/Prosumer_Kits_1_lb79ow.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="mx-auto h-full w-full lg:w-10/12 "
      />
    </div>
  )
}

export default Video

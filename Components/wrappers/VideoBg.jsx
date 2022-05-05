import React from 'react'

/*video fondo */
const VideoBg = ({ children }) => {
  return (
    <div className="relative">
      <video
        src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1643900252/community/Untitled_design_1_c3aqx7.mp4"
        loop
        muted
        autoPlay
        className="absolute top-0 z-0 w-full  lg:-top-[240px]"
      />
      <div className="z-1 relative mx-auto flex h-[100vh] w-full  flex-col items-center justify-center overflow-hidden bg-[url('/img/mobileherobg.png')] bg-cover bg-center md:h-screen md:bg-[url('/img/Cityscape.png')]">
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

export default VideoBg

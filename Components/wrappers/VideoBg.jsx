import React from 'react'

/*video fondo */
const VideoBg = ({ children }) => {
  return (
    <div className="relative flex h-screen  items-center md:block lg:h-screen">
      <video
        src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1643900252/community/Untitled_design_1_c3aqx7.mp4"
        loop
        muted
        autoPlay
        playsInline={true}
        preload="none"
        className="absolute top-0 z-0 w-full "
      />
      <div
        className="absolute z-10 mx-auto flex h-[100vh] w-full  flex-col items-center justify-center overflow-hidden   bg-cover bg-center md:h-screen "
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 34.93%)',
        }}
      ></div>
      <div className="relative z-20 h-full">{children}</div>
    </div>
  )
}

export default VideoBg

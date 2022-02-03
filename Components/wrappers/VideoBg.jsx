import React from 'react'

/*video fondo */
const VideoBg = ({ children }) => {
  return (
    <div className="relative mx-auto  flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <video
        src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1643900252/community/Untitled_design_1_c3aqx7.mp4"
        loop
        muted
        autoPlay
        className="absolute inset-0 z-0 w-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default VideoBg
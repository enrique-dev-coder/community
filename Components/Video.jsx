import React from 'react'

const Video = ({ src }) => {
  return (
    <div className=" mx-auto mb-16 w-4/5 lg:overflow-x-hidden xl:max-w-6xl">
      <video
        src={src}
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

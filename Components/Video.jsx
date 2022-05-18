import { useEffect, useState } from 'react'

//si el video es menos de 1 minuto de duaracion manda el gif solo en mobile

const Video = ({ videosrc, imgsrc, menosDe1Min }) => {
  const [isCellphone, setCellphone] = useState(false)
  useEffect(() => {
    const isCellphoneOn = window.innerWidth < 600 ? true : false
    setCellphone(isCellphoneOn)
  }, [])

  return (
    <div className="mx-auto mb-16  w-4/5  lg:overflow-x-hidden xl:max-w-6xl">
      <video
        src={videosrc}
        autoPlay={true}
        loop
        muted
        controls={isCellphone}
        playsInline={true}
        preload="none"
        className={`mx-auto ${
          menosDe1Min && 'hidden'
        }  h-full w-full lg:block lg:w-10/12 `}
      />
      {menosDe1Min && (
        <img
          className=" mx-auto h-full w-full md:hidden lg:w-10/12 "
          src={imgsrc}
        />
      )}
    </div>
  )
}

export default Video

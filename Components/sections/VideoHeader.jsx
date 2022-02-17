import VideoBg from '../wrappers/VideoBg'

const VideoHeader = ({ src, title, titleColored }) => {
  return (
    <VideoBg>
      <div className="container relative  mb-10 flex flex-col space-y-5">
        <div className="absolute -bottom-[20%] right-[45%] animate-bounce lg:right-[45%]">
          <img src="/img/down.png" alt="scroll down" />
        </div>
        <div className="mx-auto w-[200px] lg:w-[400px]">
          <img src={src} alt="logo" className="h-full w-full" />
        </div>
        <div>
          <h1 className="text-center text-lg uppercase tracking-wide lg:text-[22px] ">
            {title}
          </h1>
        </div>
        <div>
          {/**Texto sombreadp */}
          <h2
            className=" text-md  mx-auto  w-2/4 text-center font-bold uppercase tracking-wide text-black lg:text-xl"
            style={{ background: '#9885F7' }}
          >
            {titleColored}
          </h2>
        </div>
      </div>
    </VideoBg>
  )
}

export default VideoHeader

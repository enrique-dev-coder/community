import VideoBg from '../wrappers/VideoBg'

const VideoHeader = ({ src, title, titleColored }) => {
  return (
    <VideoBg>
      <div className="h-full w-full">
        <div className="container relative mx-auto flex  h-full  flex-col justify-center space-y-5 ">
          {/*      <div className="absolute -bottom-[20%] right-[45%] animate-bounce lg:right-[45%]">
          <img src="/img/down.png" alt="scroll down" />
        </div> */}
          <div className="mx-auto ">
            <img src={src} alt="logo" className="h-full w-full" />
          </div>
          <div>
            <h1 className="text-center text-lg uppercase tracking-wide  text-communitygray lg:text-[18px] ">
              {title}
            </h1>
          </div>
          <div>
            {/**Texto sombreadp */}
            <h2
              className=" text-md  mx-auto w-4/5  text-center font-bold uppercase tracking-wide text-white  md:w-[30%] lg:text-xl"
              style={{ background: '#9885F7' }}
            >
              {titleColored}
            </h2>
          </div>
        </div>
      </div>
    </VideoBg>
  )
}

export default VideoHeader

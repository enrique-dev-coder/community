import VideoBg from '../wrappers/VideoBg'

const VideoHeader = ({ src, title, titleColored }) => {
  return (
    <VideoBg>
      <div className="container  flex flex-col space-y-5">
        <div className="mx-auto w-[200px] lg:w-[400px]">
          <img src={src} alt="logo" className="h-full w-full" />
        </div>
        <div>
          <h1 className="text-center text-lg uppercase tracking-wide lg:text-2xl xl:text-3xl ">
            {title}
          </h1>
        </div>
        <div>
          {/**Texto sombreadp */}
          <h2
            className=" text-md  mx-auto w-3/4 text-center font-bold uppercase tracking-wide lg:text-xl xl:text-2xl"
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

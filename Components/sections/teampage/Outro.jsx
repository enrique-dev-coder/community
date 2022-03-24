import React from 'react'
import Lottie from 'react-lottie'
import { puzzle } from '../../../public/static/animation.json'

const Outro = () => {
  const puzzleOptions = {
    loop: true,
    autoplay: true,
    animationData: puzzle,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className="container mx-auto flex h-auto w-4/5 flex-col lg:flex-row lg:items-center lg:justify-between xl:max-w-6xl">
      {/*lottie for dmobile*/}
      <div className=" lg:hidden">
        <Lottie options={puzzleOptions} height={250} width={250} />
      </div>
      {/*lottie for desktop*/}
      <div className="hidden lg:block lg:basis-2/3">
        <Lottie options={puzzleOptions} height={500} width={500} />
      </div>
      {/*text container*/}
      <div className="text-center text-base uppercase  lg:basis-1/3 lg:text-right lg:text-xl">
        <p className="font-bold">
          “Individually, we are one drop. Together, we are an ocean.”
        </p>
        <p style={{ color: '#858585' }}>Ryunosuke Satoro</p>
      </div>
    </div>
  )
}

export default Outro

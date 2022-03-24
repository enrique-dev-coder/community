import React from 'react'

const palabrasArriba = ['manage', 'optimize', 'store', 'connect', 'reward']
const palabrasMedio = [
  'dapp',
  'energy management system',
  'plug & play battery',
  'blockchain network',
]
const Prosumer = () => {
  return (
    <>
      <div className="container relative mx-auto flex h-[300px] w-full  flex-col justify-center overflow-x-scroll bg-black lg:mb-20 lg:w-4/5 lg:overflow-x-hidden xl:max-w-6xl">
        {/*Sections for desktop*/}
        <div className="mx-auto flex w-[800px] flex-col justify-evenly  lg:w-4/5 ">
          <div>
            <img src="/img/prosumer.png" alt="prosumer kit" />
          </div>
          <p className=" mx-auto hidden w-[100%] cursor-pointer rounded-md bg-purpleCommunity py-2 text-center text-xl font-bold tracking-wide text-white lg:block lg:w-[30%]">
            learn more
          </p>
        </div>
      </div>
      <div className="mb-8 bg-black py-4 lg:hidden">
        <p className="mx-auto mb-8 w-[50%] rounded-md bg-purpleCommunity py-2 text-center text-xl font-bold tracking-wide text-white lg:hidden">
          learn more
        </p>
      </div>
    </>
  )
}

export default Prosumer

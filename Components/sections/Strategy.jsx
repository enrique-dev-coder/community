import React from 'react'

const Strategy = () => {
  return (
    <div className="mb-[70px] flex w-full flex-col items-center justify-center">
      <h2 className="border border-purpleCommunity px-6 py-2 text-center   text-[22px] uppercase text-communitygray lg:w-[40%] lg:text-2xl">
        Go-To-Market Strategy
      </h2>
      <img src="/img/celogo.png" alt="celogo" />
      <a
        href="https://www.climatetechinnovationzone.io/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="cursor-pointer rounded-sm  bg-purpleCommunity  px-6 py-2 text-center font-bold uppercase text-white">
          learn more
        </button>
      </a>
    </div>
  )
}

export default Strategy

import React from 'react'

const PlayMe = ({ color }) => {
  return (
    <div className=" my-10 flex w-full items-center justify-center space-x-4 lg:hidden">
      <p
        className={`text-lg font-medium uppercase ${
          color === 'purpple' ? 'text-purpleCommunity' : 'text-white'
        }`}
      >
        Play the video{' '}
      </p>
      {color === 'purpple' ? (
        <img
          src="/img/circledown.svg"
          className="h-[25px]  w-[25px] animate-bounce "
        />
      ) : (
        <img
          src="/img/circledow_white.svg"
          className="h-[25px]  w-[25px] animate-bounce "
        />
      )}
    </div>
  )
}

export default PlayMe

import React from 'react'

const Paragraph = () => {
  return (
    <div className="mt-[100px]">
      <h2 className="w-3/3 mb-10 border-2  border-purpleCommunity py-3 text-center text-base lg:w-[50%] lg:text-xl xl:w-1/3">
        DECARBONIZATION AS A SERVICE
      </h2>
      <p
        style={{
          fontFamily: " 'Montserrat', sans-serif",
        }}
        className="w-4/4 text-xs lg:w-3/4 lg:text-base"
      >
        Decarbonization as a Service, also known as DaaS, allows cities, real
        estate, corporations, and utilities to participate in our{' '}
        <b>Virtual Power Plant programs.</b> These services include designing
        and implementing clean & flexible electricity assets, energy management,
        and impact reporting tailored to various decarbonization and renewable
        energy goals.
      </p>
    </div>
  )
}

export default Paragraph

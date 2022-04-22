import React from 'react'
import FadeinElement from '../../FadeinElement'
const ScrollableImg = ({ img }) => {
  return (
    <div className="mb-8 overflow-scroll lg:overflow-hidden">
      <div className="w-[900px] lg:mx-auto lg:w-11/12 ">
        <FadeinElement>
          <img src={img} alt="prosumer kit" className="h-full w-full" />
        </FadeinElement>
      </div>
    </div>
  )
}

export default ScrollableImg

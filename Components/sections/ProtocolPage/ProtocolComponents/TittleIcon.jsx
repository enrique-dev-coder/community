import React from 'react'

const TittleIcon = ({ img, title, textColor, left = '-60px' }) => {
  return (
    <div className="relative flex w-[200px] items-center text-[18px] uppercase ">
      <img
        src={img}
        alt={title}
        style={{ left: `${left}` }}
        className={`absolute -top-[20px]`}
      />
      <h2 className={`font-medium ${textColor}`}>{title}</h2>
    </div>
  )
}

export default TittleIcon

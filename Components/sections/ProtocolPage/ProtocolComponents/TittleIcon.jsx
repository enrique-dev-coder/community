import React from 'react'

const TittleIcon = ({
  img,
  title,
  textColor,
  left = '-60px',
  //esto solo se aplica al menu d etitulos en mobile que deberia ser false
  isIconAbsolute = true,
}) => {
  return (
    <div
      className={`relative flex w-[200px] items-center ${
        !isIconAbsolute && 'justify-center'
      }  text-[18px] uppercase`}
    >
      <img
        src={img}
        alt={title}
        style={{ left: `${left}` }}
        className={`${isIconAbsolute && 'absolute -top-[28px]'} ${
          !isIconAbsolute && 'h-[44px] w-[44px]'
        } `}
      />
      <h2 className={`font-medium ${textColor}`}>{title}</h2>
    </div>
  )
}

export default TittleIcon

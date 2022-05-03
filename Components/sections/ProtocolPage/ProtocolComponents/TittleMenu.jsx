import React from 'react'

const TittleMenu = ({ titles, onClickTitle, slide }) => {
  return (
    <div className="mx-auto mt-[70px]  hidden justify-between border-b border-b-purpleCommunity pb-[20px] lg:flex lg:max-w-[819px] xl:max-w-[1152px]">
      {titles.map((t) => (
        <p
          onClick={() => onClickTitle(t.id)}
          className={` cursor-pointer text-[18px] uppercase ${
            slide === t.id ? ' text-purpleCommunity' : 'text-communitygray'
          } transition-all duration-700  hover:text-purpleCommunity`}
        >
          {t.title}
        </p>
      ))}
    </div>
  )
}

export default TittleMenu

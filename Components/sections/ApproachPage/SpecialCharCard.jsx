import React from 'react'
import FadeinParagraph from '../../FadeinElement'
const SpecialCharCard = ({ title, listItems }) => {
  return (
    <FadeinParagraph>
      <div
        className="relative mb-4 h-[300px] w-full"
        style={{ backgroundColor: '#E8E8E8' }}
      >
        <div
          className="absolute right-[45%] -top-4 z-0 h-[50px] w-[50px] rotate-45"
          style={{ backgroundColor: '#E8E8E8' }}
        ></div>
        <div className="relative z-10 mx-auto h-full w-10/12 flex-col py-2">
          <h3 className="text-[12px] uppercase text-purpleCommunity">
            {title}
          </h3>
          <ul className="ml-auto flex h-full w-11/12 flex-1 list-disc flex-col space-y-1 ">
            {listItems.map((list) => (
              <li className="text-[12px]">{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </FadeinParagraph>
  )
}

export default SpecialCharCard

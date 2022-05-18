import React, { useState } from 'react'
import SpecialCard from '../ApproachPage/SpecialCharCard'
const PilotCardMobile = ({
  mobilebgImage,
  place,
  country,
  desc,
  showModal,
  specialCharacteristics,
  specialCharData,
}) => {
  const [cardOpen, setCardOpen] = useState(false)
  const openCardFunction = () => {
    cardOpen ? setCardOpen(false) : setCardOpen(true)
  }
  return (
    //cada tarjeta tiene sus special characteristics y la funcion  es por tarjeta por eso no se abren todas al mismo tiempo
    // y no hay necesidad de hace un AND con el id
    <div className="flex w-full flex-col lg:w-[30%] ">
      <div
        className={` mx-auto mb-10 flex h-[380px] w-full  flex-col border border-purpleCommunityLight   `}
      >
        <div
          className={`${mobilebgImage} h-[50%] w-full bg-purpleCommunity bg-cover bg-center bg-no-repeat`}
        ></div>
        <div className="h-[50%] w-full">
          <div className=" mx-auto flex h-full w-10/12 flex-col justify-evenly text-sm ">
            <div>
              <p className="uppercase">{place}</p>
              <p className="uppercase">{country}</p>
            </div>
            <p
              className="whitespace-pre-line"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              {desc}
            </p>
            <div className="flex items-center">
              {specialCharacteristics && (
                <p
                  className="flex flex-1 cursor-pointer items-center text-[9px] text-gray"
                  onClick={openCardFunction}
                >
                  {`${cardOpen ? 'CLOSE' : 'MAIN'}`} CHARACTERISTICS{' '}
                  <span>
                    <img
                      src="/img/specialchar_arrow.svg"
                      alt="special characteristics"
                      className={`ml-3 h-[7px] w-[15px] cursor-pointer ${
                        cardOpen && 'rotate-180'
                      } transition-all duration-500 `}
                    />
                  </span>
                </p>
              )}

              <p
                className="cursor-pointer font-semibold text-purpleCommunity "
                onClick={showModal}
              >
                Learn more {'>'}
              </p>
            </div>
          </div>
        </div>
      </div>
      {cardOpen && (
        <SpecialCard
          title={specialCharData.title}
          listItems={specialCharData.listItems}
        />
      )}
    </div>
  )
}

export default PilotCardMobile

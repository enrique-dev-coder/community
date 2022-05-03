import React from 'react'

const PilotCardMobile = ({
  mobilebgImage,
  place,
  country,
  desc,
  showModal,
}) => {
  return (
    <div
      className={` mx-auto mb-10  flex h-[380px] w-full flex-col border border-purpleCommunityLight  `}
    >
      <div
        className={`${mobilebgImage} h-[50%] w-full bg-purpleCommunity bg-cover bg-center bg-no-repeat`}
      ></div>
      <div className="h-[50%] w-full">
        <div className=" mx-auto flex h-full w-10/12 flex-col justify-evenly text-sm ">
          <div>
            <p>{place}</p>
            <p>{country}</p>
          </div>
          <p
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            {desc}
          </p>
          <p
            className="font-semibold text-purpleCommunity "
            onClick={showModal}
          >
            Learn more {'>'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PilotCardMobile

import React, { useState } from 'react'
import FadeInElement from '../Components/FadeinElement'
const CaseDescriptionModal = ({
  place,
  close,
  intro,
  text,
  content,
  contractor,
  status,
  country,
  bgModalImage,
}) => {
  return (
    <div>
      <div className=" fixed inset-0 z-30 flex h-auto w-full flex-col  justify-center overflow-y-auto   bg-gray/75  backdrop-blur-sm  md:h-screen">
        <div className="relative m-auto mt-10 flex h-[90vh] w-4/5 flex-col overflow-y-auto md:flex-row md:overflow-y-hidden lg:h-[80vh] lg:w-[70%] xl:w-[80%]">
          {/*boton para cerrar el modal*/}
          <div
            className="absolute right-[10px] top-[10px]  h-5 w-5 cursor-pointer rounded-full bg-purpleCommunity"
            onClick={close}
          >
            <img
              src="/img/close.png"
              alt="close modal"
              className="h-full w-full"
            />
          </div>
          {/*parte blanca*/}
          <div
            className="flex h-full w-full flex-col   rounded-tr-md rounded-tl-md rounded-br-md rounded-bl-md bg-white md:w-[60%]  md:rounded-tr-none md:rounded-bl-md md:rounded-br-none"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            <div
              className={`h-[30%] w-full ${bgModalImage}  bg-cover bg-center bg-no-repeat`}
            ></div>
            <div className="mx-auto h-[70%] w-11/12  overflow-y-auto text-black ">
              {/*intro container*/}
              <div className="mt-10 flex flex-col justify-between md:flex-row">
                <div>
                  <p className="text-sm font-bold uppercase md:text-base">
                    {place}
                  </p>
                  <p>{country}</p>
                </div>
                <div className="flex flex-col justify-end">
                  <p className="text-sm text-gray md:text-base">{intro}</p>
                </div>
              </div>
              {/*text container*/}
              <div>{text}</div>
            </div>
          </div>
          {/*parte morada,desaparece en el mobile*/}
          <div className="hidden h-[400px] w-full flex-col justify-center bg-purpleCommunity md:flex md:h-full md:w-[40%] md:rounded-tr-md md:rounded-br-md ">
            <div className="mx-auto flex h-[300px]  w-11/12 flex-col justify-evenly border-b-2 border-b-white md:h-[60%]">
              {/*aqui va un map de content*/}
              {content.map((c) => (
                <div className="flex items-center space-x-2">
                  <img src={c.img} className="h-[30px] w-[30px]" />
                  <p
                    className="flex-1 text-xs text-white md:text-sm"
                    style={{
                      fontFamily: " 'Montserrat', sans-serif",
                    }}
                  >
                    {c.desc}
                  </p>
                  <img src="/img/check.png" />
                </div>
              ))}
            </div>
            <div className="mx-auto flex h-[30%] w-11/12 flex-col justify-center  ">
              <div className="flex h-[90%] flex-col justify-evenly">
                <div className="flex flex-row md:flex-col">
                  <p
                    className="text-sm text-white"
                    style={{
                      fontFamily: " 'Montserrat', sans-serif",
                    }}
                  >
                    Contractor:
                  </p>
                  <img
                    src={contractor}
                    alt="contractor"
                    className="ml-10 w-[150px] md:ml-0"
                  />
                </div>

                <p
                  className="text-sm text-white"
                  style={{
                    fontFamily: " 'Montserrat', sans-serif",
                  }}
                >
                  Status: {status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseDescriptionModal

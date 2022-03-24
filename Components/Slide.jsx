import React, { useEffect, useState } from 'react'
import Modal from './ModalCase'
const Slides = ({ img, title, place, content, textcolor }) => {
  const [open, setOpen] = useState(false)
  //console.log(open)
  return (
    <div className="relative  flex h-auto w-full flex-col lg:h-[90vh] lg:flex-row">
      {/*left*/}
      <div className=" mb-10 flex basis-1/3 cursor-pointer flex-col items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-[200px]"
          onClick={() => setOpen(true)}
        />
        <div className="flex w-2/4 flex-col items-center justify-center">
          <h4
            style={{ color: `${textcolor}` }}
            className="text-md text-center lg:text-lg"
          >
            {place}
          </h4>
          <h4 className="text-md text-center lg:text-lg ">{title}</h4>
        </div>
      </div>
      {/*right*/}
      <div
        className="flex basis-2/3 flex-col  justify-center space-y-5"
        style={{
          fontFamily: " 'Montserrat', sans-serif",
        }}
      >
        <h4>
          <b className="text-xl">{place}</b>
        </h4>
        <h4 style={{ color: `${textcolor}` }}>
          <b className="text-base lg:text-xl">{title}</b>
        </h4>
        <div>
          {content.map((el, i) => (
            <div
              className=" mb-4 flex w-10/12 items-center space-x-4 text-xl lg:mx-0 "
              key={i}
            >
              <div className="relative h-10 w-10">
                <img src={el.img} alt={el.desc} className="h-full w-full" />
              </div>
              <div className="flex-1">
                <p className="text-base lg:text-xl">{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <Modal
          //mandamos la funcion que cambie de estado a falso para que la reciba el boton
          close={() => setOpen(false)}
          place={place}
        />
      )}
    </div>
  )
}

export default Slides

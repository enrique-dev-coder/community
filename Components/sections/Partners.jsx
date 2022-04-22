import React, { useState, useEffect } from 'react'
import FadeInelement from '../FadeinElement'

const Partners = ({ arrows }) => {
  const [slide, setSlide] = useState(0)
  const [slideCutter, setSlideCutter] = useState(6)
  useEffect(() => {
    const Interval = setInterval(() => {
      setSlide(slide + 6)
      setSlideCutter(slideCutter + 6)
    }, 3000)
    return () => clearInterval(Interval)
  })
  const partnersLogos = [
    { id: 0, img: '/img/partners/coalition.png' },
    {
      id: 1,
      img: '/img/partners/ampere.png',
    },
    {
      id: 2,
      img: '/img/partners/energyweb.png',
    },
    {
      id: 3,
      img: '/img/partners/google.png',
    },
    {
      id: 4,
      img: '/img/partners/pivot.png',
    },
    {
      id: 5,
      img: '/img/partners/gpc.png',
    },
    {
      id: 6,
      img: '/img/partners/herasoft.png',
    },
    {
      id: 7,
      img: '/img/partners/breath.png',
    },
    {
      id: 8,
      img: '/img/partners/solarays.png',
    },
    {
      id: 9,
      img: '/img/partners/evMover.png',
    },
    {
      id: 10,
      img: '/img/partners/inpipe.png',
    },
    {
      id: 11,
      img: '/img/partners/UCLA.png',
    },
    {
      id: 12,
      img: '/img/partners/clarity.png',
    },
    {
      id: 13,
      img: '/img/partners/solarays.png',
    },
    {
      id: 14,
      img: '/img/partners/green.png',
    },
    {
      id: 15,
      img: '/img/partners/puntitos.png',
    },
    {
      id: 16,
      img: '/img/partners/blue.PNG',
    },
    {
      id: 17,
      img: '/img/partners/evMover.png',
    },
  ]
  const ids = (array) => {
    return array.map((a) => a.id)
  }
  const justIds = ids(partnersLogos)
  //onsole.log(justIds)
  const rightArrow = () => {
    setSlide(slide + 1)
  }
  const leftArrow = () => {
    setSlide(slide - 1)
    returnLeft(partnersLogos, slide)
  }

  const returnRight = (array, state) => {
    //nota esto del -1 se hace proque las ids van desde el 0
    if (state > array.length - 1) {
      setSlide(justIds[0])
    }
  }

  returnRight(partnersLogos, slide)

  //regresar a la izquiera
  const returnLeft = (array, state) => {
    //nota  en el array no es muy comun tener ids negativo entonces si el estado es menor que 0 que setee el estado a el ultimo numero del array de ids
    //console.log(array.length-1) es 3 entonces
    if (state < 0) {
      setSlide(justIds[array.length - 1])
    }
  }

  //funcion para el click del slide del desktop
  //esto de aqui se tiene que poner en el use effect con el setInterval
  const rightArrowDesktop = () => {
    setSlide(slide + 6)
    setSlideCutter(slideCutter + 6)
    if (slide > 15) {
      setSlide(0)
    }
  }
  //por alguna razon no deja poner dos sets dentro del mismo if o dos if dentor de esa funcion
  if (slideCutter > 18) {
    setSlideCutter(6)
  }

  const leftArrowDesktop = () => {
    setSlide(slide - 3)
    setSlideCutter(slideCutter - 3)
  }
  //por alguna razon estos if solo me sirven afuera de las funciones y tienen que ver con valores abajo de cero
  if (slide < 0) {
    setSlide(15)
  }
  if (slideCutter < 3) {
    setSlideCutter(18)
  }
  //funcion para cortar el array
  const cutData = (array, start, end) => {
    return array.slice(start, end)
  }

  const slideForDesktop = cutData(partnersLogos, slide, slideCutter)

  //console.log(slideForDesktop)
  //console.log(slide)
  //console.log(slideCutter)
  return (
    <div className="container mx-auto mt-40 w-4/5">
      <FadeInelement>
        <h2 className="mx-auto w-full border-2 border-purpleCommunity py-2 text-center text-2xl uppercase  lg:w-2/12">
          Partners
        </h2>
      </FadeInelement>
      {/*partners container desktop*/}
      <div className="relative  mx-auto hidden h-[300px] max-w-4xl  lg:flex lg:justify-around">
        {arrows && (
          <>
            <div className="absolute  -left-[15px] top-[40%]">
              <img
                src="img/left.png"
                alt="left"
                onClick={() => leftArrowDesktop()}
              />
            </div>
            <div className="absolute  -right-[15px] top-[40%]">
              <img
                src="img/right.png"
                alt="left"
                onClick={() => rightArrowDesktop()}
              />
            </div>
          </>
        )}

        {slideForDesktop.map((p) => (
          <div key={p.id} className=" flex basis-1/3 flex-col justify-center">
            <FadeInelement>
              <img
                src={p.img}
                alt="our partners"
                className={`mx-auto  w-3/4 grayscale ${
                  p.id === 2 && 'w-[60px]'
                } `}
              />
            </FadeInelement>
          </div>
        ))}
      </div>
      {/*Partners container mobile*/}
      <div className="relative block w-full lg:hidden">
        {arrows && (
          <>
            <div className="absolute top-[45%] -left-[15px] lg:top-2/4">
              <img src="img/left.png" alt="left" onClick={() => leftArrow()} />
            </div>
            <div className="absolute  top-[45%] -right-[15px] lg:top-2/4">
              <img
                src="img/right.png"
                alt="left"
                onClick={() => rightArrow()}
              />
            </div>
          </>
        )}

        <div className="flex h-[300px] flex-col justify-center">
          {justIds.map(
            //recuerda que el == se usa porque el array de ids esta en forma de strings
            (id) =>
              slide === id && (
                <FadeInelement>
                  <img
                    src={partnersLogos[slide].img}
                    alt="Our partners"
                    className="mx-auto  w-[250px] grayscale"
                  />
                </FadeInelement>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Partners

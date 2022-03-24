import React, { useState } from 'react'
import FadeinElement from '../FadeinElement'
const Objective = () => {
  const [open, setOpen] = useState(false)
  const [number, setNumber] = useState(0)

  const clickOnArrow = (num) => {
    setNumber(num)
    open ? setOpen(false) : setOpen(true)
  }

  //console.log(number)
  //console.log(open)
  //logica del carrousel

  //el estado gaurda el numero correspondiendete al array,para iniciar todos deben estar cerrados entonces hay un and
  //o.id === number && open &&
  //eso quiere decir si el numero del estado es igual al del id del array y aparte es verdadero aparece el parrafo
  // aparte la fucnion del click agarra el numero y lo sube al estado y asi se va cambiando  para hace rel and
  // ejemplo id = 2   2 === 2(estado) && true aparece el parrafo

  const objectives = [
    {
      id: 0,
      img: '/img/Decarbonize.png',
      title: 'Decarbonize',
      desc: 'Electricity production is responsible for a substantial amount of greenhouse gas emissions. Deploying clean prosumer communities made of interconnected energy assets will power the energy transition to a decarbonized future.',
    },
    {
      id: 1,
      img: '/img/Digitalize.png',
      title: 'Digitalize',
      desc: 'Our technology allows to register assets, market participants and log energy flows. Our software optimizes energy consumption, orchestrates demand response while balancing the grid, and computes carbon attribute rewards.',
    },
    {
      id: 2,
      img: '/img/Democratize.png',
      title: 'Democratize',
      desc: 'Through our urban electrification protocol, we incentivize and power the community ownership of distributed energy resources, the decentralization of energy systems, and the expansion of prosumers participation.',
    },
  ]
  return (
    <div className=" mb-32 w-full bg-purpleCommunity py-8">
      <div className="container mx-auto grid  grid-cols-4 lg:max-w-3xl lg:grid-cols-12 xl:max-w-6xl">
        {/*desktop contianer*/}
        <div className="col-span-4 mx-auto hidden w-4/5 lg:col-span-7 lg:block lg:w-full">
          <FadeinElement>
            <h2 className="rounded-sm border border-white p-3 text-center text-2xl uppercase text-white">
              {' '}
              Objective
            </h2>
          </FadeinElement>
          {/*Objectives list */}
          {objectives.map((o, i) => (
            <div className="mt-8 flex" key={i}>
              <div
                className=" h-20 w-20 basis-1/6"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                <img src={o.img} alt={o.title} />
              </div>
              <div className="basis-5/6">
                <FadeinElement>
                  <h3 className="my-2 text-xl font-bold text-white">
                    {o.title}
                  </h3>
                </FadeinElement>
                <FadeinElement>
                  <p className="text  text-white">{o.desc}</p>
                </FadeinElement>
              </div>
            </div>
          ))}
        </div>
        {/*image container*/}
        <div className="col-span-4  mx-auto hidden w-4/5 flex-col justify-center lg:col-span-5 lg:flex lg:w-11/12">
          <img
            src="/img/Objective.png"
            alt="Objectives"
            className="g-[300px] lg:h-[500px] lg:w-[500px]"
          />
        </div>
        {/*Section for mobile*/}
        <div className="col-span-4 mx-auto w-4/5 lg:hidden">
          <FadeinElement>
            <h2 className="mb-8 rounded-sm border border-white p-3 text-center text-[22px] uppercase text-white">
              {' '}
              Objective
            </h2>
          </FadeinElement>
          {objectives.map((o) => (
            <div className="mb-10 flex-col items-center">
              {/*img*/}
              <div className="mb-10 flex items-center">
                <div>
                  <img src={o.img} alt="our objectives" />
                </div>
                <div className=" flex-1">
                  <p className="mx-auto w-4/5 text-2xl text-white">{o.title}</p>
                </div>
                <div>
                  <img
                    src="/img/downarrowmenu.png"
                    onClick={() => clickOnArrow(o.id)}
                  />
                </div>
              </div>
              <div>
                <FadeinElement>
                  {o.id === number && open && (
                    <p
                      className="text-base text-white"
                      style={{
                        fontFamily: " 'Montserrat', sans-serif",
                      }}
                    >
                      {o.desc}
                    </p>
                  )}
                </FadeinElement>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Objective

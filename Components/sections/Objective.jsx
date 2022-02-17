import React from 'react'
import FadeinElement from '../FadeinElement'
const Objective = () => {
  const objectives = [
    {
      img: '/img/Decarbonize.png',
      title: 'Decarbonize',
      desc: 'Electricity production is responsible for 25% of greenhouse gas emissions. Deploying clean prosumer communities made of interconnected energy assets will power the energy transition to a decarbonized future.',
    },
    {
      img: '/img/Digitalize.png',
      title: 'Digitalize',
      desc: 'Digital technologies are key to make energy systems connected, intelligent, efficient, resilient and sustainable. Our hardware allows to register assets, market participants and log energy flows. Our software optimizes energy consumption, orchestrates demand response while balancing the grid, and computes carbon attribute rewards.',
    },
    {
      img: '/img/Democratize.png',
      title: 'Democratize',
      desc: 'Through our urban electrification protocol, we incentivize and power the community ownership of distributed energy resources, the decentralization of energy systems, and the expansion of prosumers participation.',
    },
  ]
  return (
    <div className=" mb-32 w-full bg-purpleCommunity py-8">
      <div className="container mx-auto grid  grid-cols-4 lg:max-w-3xl lg:grid-cols-12 xl:max-w-6xl">
        {/*text container*/}
        <div className="col-span-4 mx-auto w-4/5 lg:col-span-7 lg:w-full">
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
        <div className="col-span-4 mx-auto flex w-4/5 flex-col justify-center lg:col-span-5 lg:w-11/12">
          <img
            src="/img/Objective.png"
            alt="Objectives"
            className="g-[300px] lg:h-[500px] lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Objective

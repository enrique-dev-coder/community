import React from 'react'
import FadeinElement from '../FadeinElement'
const productsData = [
  {
    title: 'Prosumer DApp',
    desc: 'Gathers, connects, and manages prosumers.',
    img: '/img/dapp.png',
  },
  {
    title: 'Prosumer Kits',
    desc: 'Integrates hardware, software, and network to interconnect distributed energy resources and incentivize individuals to become market participants.',
    img: '/img/prosumerkits.png',
  },
  {
    title: 'Prosumer Communities',
    desc: ' Combines a variety of flexible, localized power generation assets to decarbonize communities.',
    img: '/img/communities.png',
  },
]
const Products = () => {
  return (
    <div className="relative max-w-[1440px] overflow-x-hidden lg:mx-auto lg:w-[95%]  lg:pt-14 xl:pt-8">
      <div className="absolute hidden lg:-left-[40px] lg:top-[20px] lg:block  xl:top-[6px]  xl:-left-[10px]">
        <img src="/img/puzzleFill2.png" />
      </div>
      <div className="container relative mx-auto mb-8 grid h-auto w-4/5 xl:max-w-6xl">
        <FadeinElement>
          <h2 className="mb-8 border border-purpleCommunity px-6 py-2 text-center text-[22px] uppercase lg:w-[55%]  lg:text-2xl xl:w-2/5">
            Products under development
          </h2>
        </FadeinElement>
        {productsData.map((p, i) => (
          <FadeinElement key={i}>
            <div className="mb-10 h-[300px] w-full shadow-md lg:h-[200px]   ">
              <div
                className="mx-auto flex h-full w-[70%] flex-col items-center justify-center lg:flex-row  lg:space-x-4"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                {/*image and title for mobile*/}
                <div className="flex w-full items-center lg:hidden">
                  <div className="h-[96px] w-[96px]">
                    <img src={p.img} className="h-full w-full" />
                  </div>
                  <h3 className="flex-1 font-bold">{p.title}</h3>
                </div>
                <div className="hidden h-[96px] w-[96px] lg:block">
                  <img src={p.img} className="h-full w-full" />
                </div>
                {/*Titulo y flecha para desktop*/}
                <div className="hidden w-[200px] items-center lg:flex">
                  <h3 className="flex-1">{p.title}</h3>
                  <img
                    src="/img/arrowproducts.png"
                    alt="products in development"
                    className="hidden h-1 lg:block"
                  />
                </div>
                <div className="text-base lg:flex-1">
                  <p>{p.desc}</p>
                </div>
              </div>
            </div>
          </FadeinElement>
        ))}
      </div>
    </div>
  )
}

export default Products

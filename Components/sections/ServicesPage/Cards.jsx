import React, { useState } from 'react'
import FadeinParagraph from '../../FadeinElement'
const CardBanner = ({ rows }) => (
  <FadeinParagraph>
    <div
      className="relative  mt-7 h-[225px] w-full lg:h-[270px]  xl:h-[225px]"
      style={{ background: '#E8E8E8' }}
    >
      <div
        className="absolute -top-[10px] left-[20px] z-0 h-[25px] w-[25px] rotate-45"
        style={{ background: '#E8E8E8' }}
      ></div>
      {/*rows container*/}
      <div className="relative z-10 mx-auto flex h-full w-11/12 flex-col justify-center space-y-2">
        {rows.map((row) => row)}
      </div>
    </div>
  </FadeinParagraph>
)

const CardRow = ({ img, title }) => (
  <div className="flex space-x-3">
    <img src={`/img/services/icons/${img}.png`} className="h-[25px] w-[25px]" />
    <p className=" flex-1 text-[13px] uppercase text-purpleCommunity">
      {title}
    </p>
  </div>
)

const Cards = () => {
  const [banner, setBanner] = useState(false)
  const [cardid, setCardid] = useState(null)
  const cardData = [
    {
      id: 1,
      img: '/img/services/cities.png',
      rows: [
        <CardRow img="finance" title="Structured finance" />,
        <CardRow img="retrofit" title="retro- fit program" />,
        <CardRow img="housing" title="affordable housing program" />,
        <CardRow img="mobility" title="ev mobility program" />,
        <CardRow img="urban" title="urban micro hydro program" />,
      ],
    },
    {
      id: 2,
      img: '/img/services/realstate.png',
      rows: [
        <CardRow img="finance" title="Structured finance" />,
        <CardRow img="solar" title="community solar program" />,
        <CardRow img="housing" title="affordable housing program" />,
        <CardRow img="mobility" title="ev mobility program" />,
        <CardRow img="virtual" title="virtual power plant program" />,
        <CardRow img="microgrid" title="microgrid program" />,
      ],
    },
    {
      id: 3,
      img: '/img/services/corporations.png',
      rows: [
        <CardRow img="finance" title="Structured finance" />,
        <CardRow img="retrofit" title="retro- fit program" />,
        <CardRow img="solar" title="community solar program" />,
        <CardRow img="mobility" title="ev mobility program" />,
        <CardRow img="microgrid" title="microgrid program" />,
        <CardRow img="carbon" title="carbon management program" />,
      ],
    },
    {
      id: 4,
      img: '/img/services/utilities.png',
      rows: [
        <CardRow img="finance" title="Structured finance" />,
        <CardRow img="advanced" title="Advanced grid programs" />,
        <CardRow img="solar" title="community solar program" />,
        <CardRow img="mobility" title="ev mobility program" />,
        <CardRow img="microgrid" title="microgrid program" />,
        <CardRow img="carbon" title="carbon management program" />,
      ],
    },
  ]

  const onClickWord = (id) => {
    setBanner(banner ? false : true)
    setCardid(id)
  }
  return (
    <div className=" flex h-auto flex-col items-center py-12 lg:h-[600px] lg:flex-row lg:items-start lg:justify-between">
      {cardData.map((c) => (
        <div className="mb-10 flex max-w-[272px] flex-col lg:max-w-[190px] xl:max-w-[272px]">
          <div key={c.id} className=" h-fit" style={{ background: '#F4F4F4' }}>
            <img src={c.img} />
            <div
              className="flex cursor-pointer items-center justify-center space-x-2"
              onClick={() => onClickWord(c.id)}
            >
              <p
                className="cursor-pointer py-4 text-center uppercase underline"
                style={{ color: '#B2B2B2' }}
              >
                Show More
              </p>
              <img
                src="/img/services/down.png"
                alt="down"
                className={`h-[6px] w-[10px] ${
                  banner && cardid === c.id && 'rotate-180 transition-all'
                }`}
              />
            </div>
          </div>
          {/*esta condicion es para que muestre uno a la vez, si la quitas aparecen todas las tarjetas al mismo tiempo
            tiene banner que ser verdadero y aparte el estado tiene que se igual a la card id, la card id la  toma el estado
            para alterarlp
          */}
          {banner && cardid === c.id && <CardBanner rows={c.rows} />}
        </div>
      ))}
    </div>
  )
}

export default Cards

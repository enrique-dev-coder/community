import React, { useState } from 'react'
import Navbar from '../../NavbarFixedScroll'
import TittleMenu from './ProtocolComponents/TittleMenu'
import TittleIcon from './ProtocolComponents/TittleIcon'
import FadeinParagraph from '../../FadeinElement'
import {
  Intro,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
} from './Sections'
import Footer from '../Footer'
const index = () => {
  const SliderData = [
    {
      id: 1,
      title: 'Asses',
      slide: <Section2 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/Assess.png"
          title="Assess"
          textColor="text-purpleCommunity"
          isIconAbsolute={false}
        />
      ),
    },
    {
      id: 2,
      title: 'Engage',
      slide: <Section3 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/Engage.png"
          title="Engage"
          isIconAbsolute={false}
        />
      ),
    },
    {
      id: 3,
      title: 'Design ',
      slide: <Section4 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/Design.png"
          title="Design"
          textColor="text-purpleCommunity"
          isIconAbsolute={false}
        />
      ),
    },
    {
      id: 4,
      title: 'Finance ',
      slide: <Section5 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/Fund.png"
          title="FINANCE"
          isIconAbsolute={false}
        />
      ),
    },
    {
      id: 5,
      title: 'Implement',
      slide: <Section6 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/implement.png"
          title="Implement"
          textColor="text-purpleCommunity"
          isIconAbsolute={false}
        />
      ),
    },
    {
      id: 6,
      title: 'Certify',
      slide: <Section7 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/certify.png"
          title="Certify"
          left="-70px"
          isIconAbsolute={false}
        />
      ),
    },
    {
      id: 7,
      title: 'Report',
      slide: <Section8 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/report.png"
          title="Report"
          textColor="text-purpleCommunity"
          left="-70px"
          isIconAbsolute={false}
        />
      ),
    },
    {
      id: 8,
      title: 'Community OS',
      slide: <Section9 />,
      menuTitle: (
        <TittleIcon
          img="/img/protocol/Communityos.png"
          title="Community OS"
          isIconAbsolute={false}
        />
      ),
    },
  ]
  const titleData = SliderData.map((d) => ({ id: d.id, title: d.title }))
  //console.log(titleData)
  const [slide, setSlide] = useState(1)
  //onclickslide function
  //esa funcion va  amodificar el estado desde el componente hijo
  // en el componente hijo se usa    onClick={() => onClickTitle(t.id)} para modificar el estado
  const onClickTitle = (id) => {
    setSlide(id)
  }
  const onClickRightArrow = () => {
    slide === 8 ? setSlide(1) : setSlide(slide + 1)
  }
  const onClickLeftArrow = () => {
    slide === 1 ? setSlide(8) : setSlide(slide - 1)
  }
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <Intro />
      <Section1 />
      {/*Menu for desktop*/}
      <TittleMenu
        titles={titleData}
        onClickTitle={onClickTitle}
        slide={slide}
      />
      {/*Sección de slider*/}
      {/*si el estado slide es igaul al id dle slide data renderiza el componente*/}
      {SliderData.map(
        (d) =>
          slide === d.id && (
            <>
              {/*en este div van los titulos del menu mobile*/}

              <div className="mx-auto flex w-4/5 items-center justify-between pt-10 lg:hidden">
                <img
                  src="/img/cases/FlechaIzqueirda.png"
                  alt="flecha izquierda"
                  className="h-[36px] w-[39px] lg:hidden"
                  onClick={onClickLeftArrow}
                />
                {d.menuTitle}
                <img
                  src="/img/cases/FlechaDerecha.png"
                  alt="flecha derecha"
                  className="h-[36px] w-[39px] lg:hidden"
                  onClick={onClickRightArrow}
                />
              </div>
              <FadeinParagraph>{d.slide}</FadeinParagraph>
            </>
          )
      )}
      <Footer />
    </>
  )
}

export default index

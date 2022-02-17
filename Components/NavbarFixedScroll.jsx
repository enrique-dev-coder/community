import React, { useState, useEffect } from 'react'
import MenuButton from '../Components/MenuButton'
import Link from 'next/link'
{
  /*muestra de navbar por encima del conetenido y que el logo aparezca cuando se scrollee*/
}

const NavbarFixedScroll = ({ src }) => {
  const [top, setTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const toggleButton = () => {
    // si es verdadero con el clink cambialo a falso, si es falso cambialo a verdadero
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  // detect whether user has scrolled the page down by 10px
  //cuando bajas es falso cuando estas hasta arriba es true
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])
  const links = [
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Protocol',
      link: '/',
    },

    {
      title: 'Team',
      link: '/team/',
    },
    {
      title: 'Media',
      link: '#media',
    },
  ]
  return (
    <nav className=" fixed top-0 z-30 h-20 w-full transition duration-300 ease-in-out">
      <div
        className={`${
          top
            ? ' mx-auto flex h-20 justify-between  bg-transparent'
            : ' mx-auto flex h-20 justify-between bg-white/75 shadow-lg backdrop-blur-sm '
        }`}
      >
        {/*Contenedor de logo*/}
        <div
          className={`h-15 w-50 opacity-0  lg:h-20  lg:w-60 ${
            !top && ' opacity-100 transition-opacity duration-300 ease-in-out'
          }`}
        >
          <Link href="/">
            <img
              src={src}
              alt={`logo de ${src}`}
              className="h-full w-full cursor-pointer"
            />
          </Link>
        </div>
        {/*Contenedor de enlaces de navegacion*/}
        <div className=" hidden w-3/6 flex-col items-center justify-center lg:flex">
          <ul className="flex w-4/5 space-x-4">
            {links.map((li, i) => (
              <Link href={li.link} key={i}>
                <li
                  key={i}
                  className={` basis-1/3 cursor-pointer py-2 px-2 text-center text-lg font-semibold uppercase text-purpleCommunity hover:bg-purpleCommunityLight ${
                    top && 'hidden'
                  }`}
                >
                  {li.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/*Contenedor del boton de menu*/}
        <div className="mr-4 flex flex-col justify-center lg:hidden">
          <MenuButton
            isOpen={isOpen}
            close={() => {
              toggleButton()
            }}
          />
        </div>
        {/*contenedor de menu mobile
            si isOpen es verdadero entonces que este en left 0 y si es falso que este oculto con left 100%        
        */}
        <div
          className={`absolute  z-40 flex h-screen w-[60%] flex-col items-center justify-center bg-purpleCommunity transition-all duration-700 ${
            isOpen ? 'left-[0]' : '-left-[100%]'
          }`}
        >
          {/* lista de links del menu*/}
          <div className="flex h-4/5 w-4/5 flex-col justify-center">
            <ul className="flex h-4/5 flex-col justify-around">
              {links.map((li, i) => (
                <li
                  key={i}
                  className="text-2xl font-bold uppercase text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={li.link}>{li.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarFixedScroll

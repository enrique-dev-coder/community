import React, { useState, useEffect } from 'react'

{
  /*muestra de navbar por encima del conetenido y que el logo aparezca cuando se scrollee*/
}

const NavbarFixedScroll = ({ src }) => {
  const [top, setTop] = useState(true)

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
      link: '/',
    },
    {
      title: 'Team',
      link: '/',
    },
    {
      title: 'Media',
      link: '/',
    },
  ]
  console.log(top)
  return (
    <nav className=" fixed top-0 z-30 h-20 w-full transition duration-300 ease-in-out">
      <div
        className={`${
          top
            ? 'container mx-auto flex h-20 justify-between bg-white/75'
            : 'container mx-auto flex h-20 justify-between bg-white/75 shadow-lg'
        }`}
      >
        {/*Contenedor de logo*/}
        <div
          className={`h-20 w-40 opacity-0 ${
            !top && ' opacity-100 transition-opacity duration-300 ease-in-out'
          }`}
        >
          <img src={src} alt={`logo de ${src}`} className="h-full w-full" />
        </div>
        {/*Contenedor de enlaces de navegacion*/}
        <div className="flex w-3/6 flex-col items-center justify-center">
          <ul className="flex space-x-4 ">
            {links.map((li, i) => (
              <li key={i} className="text-lg font-semibold">
                {li.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarFixedScroll

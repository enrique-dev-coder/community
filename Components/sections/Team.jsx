import React, { useState } from 'react'
import FadeInelement from '../FadeinElement'
import Link from 'next/link'
const Team = ({
  members,
  numberOfRows,
  numberOfElements,
  sectionTitle,
  bottomButton,
  linkedinButton,
}) => {
  //members es el array que recibe
  const [slide, setSlide] = useState(0)

  //funciones para hacer filas en el desktop
  //funcion para recortar arrays
  //una funcion a la que le pasas el array, el numero de filas y el numeor de elemntos
  // y la idea es primero revisar que sean divisibles luego hacer un for con dos numeros para hacer un slice
  //el primer numero siempre es 0 y el segundo los eleentos que quieres tomar y esp hace un ciclo for con dos variables
  //que se guarda en un array vacio para hacer un array de arrays
  let dividirArray = (array, nofilas, numel) => {
    let nuevosArrays = []
    for (
      let i = 0, j = numel;
      i < array.length, j <= array.length;
      i = i + numel, j = j + numel
    ) {
      nuevosArrays.push(array.slice(i, j))
    }
    return nuevosArrays
  }
  //array con dos arrays cada uno de 4 elementos [Array(4),Array(4)]
  const arrayWitharrays = dividirArray(members, numberOfRows, numberOfElements)
  console.log(arrayWitharrays)
  //funciones para el slider
  const arrayId = (array) => {
    //const ids = array.map((m, i) => userId(`${m[i]}`))
    const ids = array.map((m, i) => m.id) //[1,2,3,4]
    return ids
  }
  const ids = arrayId(members)

  // const checkState = (array) => {
  // ids.map((i) => slide === ids[i] && console.log(array[i].name))
  //}
  //funcion de ejemplo
  //renderizar algo cada que el id del array sea igual que el estado
  //el estado es controlado por las flecas
  //la idea es que separe todos los id del array de miembros entonces lo que pasa es que hay un filtro que revisa
  // si el estado es igual que cada uno del array de ids y luego imprime solo ese id del array de miembros
  //con las flechita se va cambiando el estado para qeu solo exista ese componente en el DOM
  // checkState(members)
  const rightArrow = () => {
    setSlide(slide + 1)
  }
  const leftArrow = () => {
    setSlide(slide - 1)
  }
  //regresar el estado dependiendo de los elementos que tenga el array
  //cuando el estado sea mayor  que la longitud del array que regrese al primer valor del id
  const returnRight = (array, state) => {
    //nota esto del -1 se hace proque las ids van desde el 0
    if (state > array.length - 1) {
      setSlide(ids[0])
    }
  }
  returnRight(members, slide)
  //regresar a la izquiera
  const returnLeft = (array, state) => {
    //nota  en el array no es muy comun tener ids negativo entonces si el estado es menor que 0 que setee el estado a el ultimo numero del array de ids
    //console.log(array.length-1) es 3 entonces
    if (state < 0) {
      setSlide(ids[array.length - 1])
    }
  }
  returnLeft(members, slide)

  return (
    <div className="container relative mx-auto h-[83vh] w-4/5 max-w-6xl lg:h-auto ">
      <div className="absolute top-[45%] left-0 z-10 lg:top-2/4 lg:hidden">
        <img src="img/left.png" alt="left" onClick={() => leftArrow()} />
      </div>
      <div className="absolute top-[45%] right-0 z-10 lg:top-2/4 lg:hidden">
        <img src="img/right.png" alt="left" onClick={() => rightArrow()} />
      </div>
      <FadeInelement>
        <h2 className="mx-auto mb-20 w-full border-2 border-purpleCommunity py-2 text-center text-2xl uppercase lg:w-4/12">
          {sectionTitle}
        </h2>
      </FadeInelement>
      {/*section for desktop
        haces un diva por cada array y a cada elemento de ese array le das formato
      */}
      <div className="mb-20 hidden gap-8 lg:flex lg:flex-col ">
        {arrayWitharrays.map((array, i) => (
          <div className=" flex w-full " key={i}>
            {array.map((m) => (
              <div
                className={`group mb-8 ${
                  m.name === 'none' ? 'hidden' : 'flex'
                }  h-[310px] basis-1/3 transform cursor-pointer flex-col items-center justify-around rounded-md transition-colors duration-200 ${
                  m.id === 11
                    ? ' hover:bg-white'
                    : 'hover:bg-purpleCommunityLight'
                }  lg:col-span-3`}
                key={i}
              >
                <div className="h-[200px] w-[200px]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="mx-auto h-[170px] w-[170px] rounded-full"
                  />
                </div>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-center uppercase text-purpleCommunity group-hover:font-bold group-hover:underline">
                    {m.name}
                  </h3>
                </a>
                <div className="flex-1">
                  <h4 className="text-center uppercase">{m.job}</h4>
                  <h4 className="text-center uppercase">
                    {/*Aqui es para exribir cofouder si es true*/}
                    {m.cofounder && 'Co-founder'}
                  </h4>
                </div>
                {m.linkedinButton && (
                  <a href={m.linkedin}>
                    <img
                      src="/img/linkedin.png"
                      alt={m.linkedin}
                      className="cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/*Section for mobile*/}
      {
        //renderizar algo cada que el id del array sea igual que el estado
        //la idea es que separe todos los id del array de miembros entonces lo que pasa es que hay un filtro que revisa
        // si el estado es igual que cada uno del array de ids y luego imprime solo ese id del array de miembros
        //con las flechita se va cambiando el estado para qeu solo exista ese componente en el DOM
        ids.map(
          (i) =>
            slide === ids[i] && (
              <FadeInelement key={i}>
                <div
                  className=" col-span-4 flex h-[300px] transform cursor-pointer flex-col  items-center justify-start space-y-5 rounded-md  transition-colors duration-200 lg:col-span-3  lg:hidden"
                  key={i}
                >
                  <div className="h-[200px] w-[200px]">
                    <img
                      src={members[i].img}
                      alt={members[i].name}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <a
                    href={members[i].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-center text-base uppercase text-purpleCommunity group-hover:font-bold group-hover:underline">
                      {members[i].name}
                    </h3>
                  </a>
                  <h4 className="text-center text-base uppercase">
                    {members[i].job}
                  </h4>
                </div>
              </FadeInelement>
            )
        )
      }
      {bottomButton && (
        <Link href="/team">
          <a>
            <FadeInelement>
              <h2 className="my-20 cursor-pointer text-center text-xl uppercase text-purpleCommunity">
                Learn more
              </h2>
            </FadeInelement>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Team

import React, { useState } from 'react'
import FadeinElement from '../../Components/FadeinElement'

const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formConfirmation, setFormConfirmation] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    //nueva peticion
    let xhr = new XMLHttpRequest()
    //url de la peticion
    const url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21377785/621ba3ab-d2ad-4b94-be76-5cf6d397ed5f'
    // data que se manda que toma el valor del formulario
    //el onChange agarra el valor del inputo y lo pone de estado con setName y setEmail
    let data = {
      fields: [
        {
          name: 'email',
          value: email,
        },
        {
          name: 'firstname',
          value: name,
        },
      ],
      context: {
        pageUri: 'https://www.communityelectricity.io/',
        pageName: 'Community',
      },
    }
    //pasamos el dato a JSON para enviar
    let final_data = JSON.stringify(data)
    //metodo de postear  a la url de hubspot
    xhr.open('POST', url)
    //mandar peticion de typo application/json
    xhr.setRequestHeader('Content-Type', 'application/json')
    //funcion que sirce para verificar que se haya mandado el form
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
        setFormConfirmation(true)
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log(xhr.responseText)
      }
    }
    //mandar la request final a la api de hubspot
    xhr.send(final_data)
    //dejar vacio el estado que mandael form
    setName('')
    setEmail('')
  }

  return (
    <div className="mt-10 w-full overflow-x-hidden bg-black py-4">
      <div className="container relative mx-auto w-4/5 xl:max-w-6xl ">
        <div className="absolute -right-[15%] top-[25%] hidden lg:block">
          <img src="/img/footerpuzzle.png" alt="" />
        </div>
        <img src="/img/footerlogo.png" alt="Community Electricity" />
        <h2 className="mb-4 text-[22px] uppercase  text-white lg:text-xl">
          Community Electricity
        </h2>
        <h2
          className="mb-4 text-base text-white lg:w-2/4 lg:text-xl"
          style={{
            fontFamily: " 'Montserrat', sans-serif",
          }}
        >
          Join the prosumer network and monetize as you decarbonize
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex h-[180px] w-full flex-col justify-around  lg:h-[40px] lg:w-[40%] lg:flex-row lg:justify-start lg:space-x-2"
        >
          <input
            type="text"
            placeholder="Name..."
            className="py-2 lg:w-[120px] xl:w-[150px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email..."
            className=" py-2 lg:w-[150px] xl:w-[200px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="  bg-purpleCommunity px-4 py-2 text-white hover:bg-purpleCommunityLight hover:text-black lg:mt-0 ">
            Subscribe
          </button>
        </form>
        {formConfirmation && (
          <FadeinElement>
            <p className="text-white lg:w-2/4">
              Thanks for your subsrciption, you will receive the latest info
              about Community.io!
            </p>
          </FadeinElement>
        )}
      </div>
      <div className="mx-auto mt-10 mb-10 w-4/5 text-center lg:w-full">
        <p className="text-base text-white lg:text-xl">
          Community Electricity © 2022 All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer

import React, { useState } from 'react'
import FadeInElement from '../Components/FadeinElement'
const SubscribeModal = ({ close }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formConfirmation, setFormConfirmation] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    let xhr = new XMLHttpRequest()
    const url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21377785/621ba3ab-d2ad-4b94-be76-5cf6d397ed5f'
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
        pageUri: 'http://localhost:3000/',
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
    <FadeInElement>
      <div className="fixed inset-0 z-30 flex h-screen w-full flex-col  justify-center bg-white/75 backdrop-blur-sm">
        <div className="relative m-auto h-[80vh] w-4/5 rounded-sm bg-black lg:h-[60vh] lg:w-[50%] xl:w-[40%]">
          {/*boton para cerrar el modal*/}
          <div
            className="absolute  right-[10px] top-[10px] h-14 w-14 cursor-default"
            onClick={close}
          >
            <img
              src="/img/close.png"
              alt="close modal"
              className="h-full w-full"
            />
          </div>
          <div
            className="flex h-full flex-col justify-center"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            <p className="mx-auto w-4/5 text-center uppercase text-white">
              Subscribe to our newsletter and be one of the first ones to
              receive a prosumer kit!
            </p>
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-4/5 flex-col space-y-4 lg:w-2/4"
            >
              <div className="flex flex-col">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  className="p-3 caret-purpleCommunity"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  className="p-3 caret-purpleCommunity"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-purpleCommunity py-3 uppercase text-white"
              >
                Subscribe
              </button>
            </form>
            {formConfirmation && (
              <p className="mx-auto w-4/5 text-center uppercase text-white">
                Thanks for subscribing to our neesletter!
              </p>
            )}
          </div>
        </div>
      </div>
    </FadeInElement>
  )
}

export default SubscribeModal

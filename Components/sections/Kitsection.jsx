import React, { useState } from 'react'
import FadeinElement from '../FadeinElement'
import Modal from '../SubscribeModal'
const Kitsection = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="container mx-auto grid grid-cols-4  lg:grid-cols-12  ">
      <div className="col-span-4 mx-auto mb-8 w-4/5 lg:col-span-6 lg:col-start-4 lg:w-11/12">
        <FadeinElement>
          <h2 className=" bg-purpleCommunity text-center font-bold uppercase  lg:text-2xl">
            Prosumer kit 1.0
          </h2>
        </FadeinElement>
      </div>
      <div className="col-span-12 mb-10">
        <FadeinElement>
          <h2
            className=" text-md  col-span-12 mx-auto w-3/4 text-center tracking-wide lg:w-3/6 lg:text-xl"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            We are developing an integrated plug & play <b>ProsumerKit</b>{' '}
            incentivizing individuals to harness and store energy while becoming{' '}
            <b>market participants.</b>
          </h2>
        </FadeinElement>
      </div>
      {/*img prosumer kit container*/}
      <div className="col-span-4 mb-8 overflow-scroll lg:col-span-10 lg:col-start-2 lg:overflow-hidden">
        <div className="w-[900px] lg:mx-auto lg:w-11/12 ">
          <FadeinElement>
            <img
              src="/img/prosumerkit.png"
              alt="prosumer kit"
              className="h-full w-full"
            />
          </FadeinElement>
        </div>
      </div>
      <div className="col-span-12 mb-24 lg:col-span-4 lg:col-start-5">
        <FadeinElement>
          <p
            className=" mx-auto w-[50%] rounded-md bg-purpleCommunity py-2  text-center text-xl font-bold text-white"
            onClick={() => setOpen(true)}
          >
            pre-order now
          </p>
        </FadeinElement>
      </div>
      {/*seccion del video*/}
      <div className="col-span-4 mb-24 lg:col-span-8 lg:col-start-3">
        <video
          src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1644343250/community/Prosumer_Kit_Video_02_01_22_1_bipt4d.mp4"
          autoPlay
          loop
          controls
          muted
          className="mx-auto h-full w-4/5 lg:w-11/12 "
        />
      </div>
      {open && <Modal close={() => setOpen(false)} />}
    </div>
  )
}

export default Kitsection

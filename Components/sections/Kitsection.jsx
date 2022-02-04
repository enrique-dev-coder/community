import React from 'react'
import FadeinElement from '../FadeinElement'
const Kitsection = () => {
  return (
    <div className="container">
      <FadeinElement>
        <h2
          className=" text-md  mx-auto mb-12 w-3/4 text-center font-bold uppercase tracking-wide lg:w-3/6 lg:text-xl xl:text-2xl"
          style={{ background: '#9885F7' }}
        >
          Prosumer kit 1.0
        </h2>
      </FadeinElement>
      <FadeinElement>
        <h2
          className=" text-md  mx-auto w-3/4 text-center tracking-wide lg:w-3/6 lg:text-xl xl:text-2xl"
          style={{
            fontFamily: "'OpenSauce', sans-serif",
          }}
        >
          We are developing an integrated plug & play <b>ProsumerKit</b>{' '}
          incentivizing individuals to harness and store energy while becoming{' '}
          <b>market participants.</b>
        </h2>
      </FadeinElement>
    </div>
  )
}

export default Kitsection

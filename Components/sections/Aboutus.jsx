import React from 'react'
import FadeinTitle from '../FadeinTittle'
import FadeinImg from '../FadeinImg'
import FadeinElement from '../FadeinElement'
const Aboutus = () => {
  return (
    <div className="container mx-auto h-auto">
      {/*Contenedor de rompecabezas y titulo*/}
      <div className="relative flex items-center justify-center lg:w-[95%] lg:justify-end xl:w-[90%]">
        {/*img container*/}
        <div className="w-100 absolute hidden h-80 lg:hidden">
          <FadeinImg src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643934063/community/3_2_bheng5.png" />
        </div>
        <FadeinTitle>Who we are</FadeinTitle>
      </div>
      {/*contenedor de iamgen y parrafo*/}
      <div className="mb-16 flex flex-col items-center lg:flex-row">
        {/*img container*/}
        <div className=" basis-1/2 lg:inline-block">
          <FadeinImg src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643936650/community/5_ojf44c.png" />
        </div>
        <div className=" flex basis-1/2 flex-col  lg:h-[345px] lg:justify-evenly">
          <FadeinElement>
            <p
              className="mx-auto mb-4 w-4/5 whitespace-pre-line text-lg lg:text-xl xl:w-4/6 xl:text-2xl"
              style={{
                fontFamily: "'OpenSauce', sans-serif",
              }}
            >
              Community Electricity is a <b>Climate Tech </b> start-up that
              develops and incentivizes the deployment of distributed energy
              resources, creating{' '}
              <b style={{ color: '#9885F7' }}>Prosumer Communities.</b>
            </p>
          </FadeinElement>
          <FadeinElement>
            <p
              className=" mx-auto w-4/5 flex-1 whitespace-pre-line text-lg uppercase lg:text-xl xl:w-4/6 xl:text-2xl"
              style={{ color: '#9885F7' }}
            >
              Prosumers are producers and consumers of Local and clean
              Electricity.
            </p>
          </FadeinElement>
        </div>
      </div>
      {/*Contenedor de rompecabezas y titulo*/}
      <div className="mb-4 flex items-center justify-center lg:ml-auto lg:w-[95%] lg:justify-start xl:w-[90%]">
        {/*img container*/}
        <FadeinTitle>What we do</FadeinTitle>
        <div className="w-100 hidden h-80 lg:hidden">
          <FadeinImg src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643934063/community/3_2_bheng5.png" />
        </div>
      </div>
      {/*contenedor de iamgen y parrafo*/}
      <div className="mb-16 flex flex-col items-center lg:flex-row">
        {/*img container*/}
        <div className=" flex basis-1/2 flex-col  lg:h-[345px] lg:justify-evenly">
          <FadeinElement>
            <p
              className="mx-auto mb-4 w-4/5 whitespace-pre-line text-center text-lg lg:text-xl xl:w-4/6 xl:text-2xl"
              style={{
                fontFamily: "'OpenSauce', sans-serif",
              }}
            >
              We develop{' '}
              <b>
                prosumer communities, owned and operated as{' '}
                <span style={{ color: '#9885F7' }}>
                  data-driven micro-utilities
                </span>{' '}
                by network members.
              </b>
            </p>
          </FadeinElement>
          <FadeinElement>
            <p
              className="mx-auto w-4/5 whitespace-pre-line text-center text-lg lg:text-xl xl:w-4/6 xl:text-2xl"
              style={{
                fontFamily: "'OpenSauce', sans-serif",
              }}
            >
              Members autonomously provide grid services decarbonizing the
              central grid, while{' '}
              <b>
                monetizing{' '}
                <span style={{ color: '#9885F7' }}>energy surplus</span>{' '}
              </b>{' '}
              & <b>capitalizing</b> on{' '}
              <b style={{ color: '#9885F7' }}>carbon offset attributes. </b>
            </p>
          </FadeinElement>
        </div>
        <div className=" basis-1/2 lg:inline-block">
          <FadeinImg src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643936650/community/5_ojf44c.png" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus

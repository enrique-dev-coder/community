import React from 'react'
import FadeinTitle from '../FadeinTittle'
import FadeinImg from '../FadeinImg'
import FadeinElement from '../FadeinElement'
const Aboutus = () => {
  return (
    <div
      className="container relative mx-auto grid h-auto w-4/5 grid-cols-1 lg:grid-cols-12 xl:max-w-6xl "
      id="about"
    >
      {/*imagen flotante*/}
      {/*img container*/}
      <div className="mr-4 mb-20 hidden  lg:col-span-7 lg:block xl:col-span-6  ">
        <FadeinImg src="/img/entorno-v2.png" className="h-full w-full" />
      </div>
      <div className="mb-10 flex flex-col space-y-4 lg:col-span-5 lg:mb-0  lg:justify-center xl:col-span-6">
        <FadeinElement>
          <h2 className="mt-1 mb-4 border border-purpleCommunity py-2 text-center text-2xl  uppercase lg:ml-auto  lg:w-6/12 xl:w-5/12 ">
            Who we are
          </h2>
        </FadeinElement>
        <FadeinElement>
          <p
            className="mx-auto mb-4  whitespace-pre-line text-right text-lg lg:w-full lg:text-lg xl:text-xl"
            style={{
              fontFamily: " 'Montserrat', sans-serif",
            }}
          >
            Community Electricity is a <b>Climate Tech </b> start-up that
            develops and incentivizes the deployment of distributed energy
            resources, creating{' '}
            <b style={{ color: '#9885F7' }}>Prosumer Communities.</b>
          </p>
        </FadeinElement>
        <div className="lg:w-12/12 flex lg:ml-auto xl:w-11/12">
          <div className=" hidden h-[4.75rem] w-[4.75rem] lg:block">
            <img
              src="/img/foco.png"
              alt="prosumers"
              className="h-full w-full"
            />
          </div>
          <FadeinElement>
            <p
              className=" xl:text-md  mx-auto flex-1 whitespace-pre-line text-right text-lg uppercase lg:w-full lg:text-lg"
              style={{ color: '#9885F7' }}
            >
              Prosumers are producers and consumers of Local and clean
              Electricity.
            </p>
          </FadeinElement>
        </div>
      </div>

      {/*contenedor de iamgen y parrafo*/}

      <div className="col-span-7 flex flex-col space-y-5  xl:mt-12">
        {/*Contenedor de rompecabezas y titulo*/}
        <div className=" w-full lg:w-1/3">
          {/*img container*/}
          <div className="w-100 absolute hidden h-80 lg:hidden">
            <FadeinImg src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643934063/community/3_2_bheng5.png" />
          </div>
          <FadeinElement>
            <h2 className="mt-1 mb-10 border border-purpleCommunity py-2 text-center text-2xl  uppercase  ">
              What we do
            </h2>
          </FadeinElement>
        </div>
        <div className=" flex  flex-col   lg:justify-evenly">
          <FadeinElement>
            <p
              className="mx-auto mb-10  whitespace-pre-line text-lg lg:mx-0 lg:text-xl"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
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
              className="mx-auto mb-4  whitespace-pre-line text-lg lg:mx-0 lg:text-xl"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
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
      </div>
      {/*img container*/}
      <div className=" mb-20 lg:col-span-5 ">
        <FadeinImg src="/img/whatwedo2.png" />
      </div>
    </div>
  )
}

export default Aboutus

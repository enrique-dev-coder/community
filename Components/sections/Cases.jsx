import React from 'react'
import DomesticCases from '../DomesticCases'
import InternationalCases from '../InternationalCases'
import FadeinElement from '../FadeinElement'
const Cases = () => {
  return (
    <div className="container mx-auto w-4/5 xl:max-w-6xl">
      <div className="mx-auto mb-20 w-full lg:w-6/12">
        <FadeinElement>
          <h2
            className="mb-4  border-2 border-purpleCommunity py-3 text-center  uppercase  lg:text-xl
        "
          >
            prosumer comunnity pilots (in progress)
          </h2>
        </FadeinElement>
      </div>
      <h4 className=" mx-auto mb-8 text-xl uppercase text-purpleCommunity">
        Domestic
      </h4>
      {/*case menu*/}
      <DomesticCases
        places={[
          'Basset Avocado, California',
          'Santa Ana, California',
          'Santa Monica,California',
        ]}
      />
      <h4 className=" mx-auto  mb-8  text-xl uppercase text-purpleCommunity ">
        International
      </h4>
      <InternationalCases
        places={[
          'Medellin,Colombia',
          'Santiago del Estereo, Argentina',
          'Valencia,Spain',
        ]}
      />
    </div>
  )
}

export default Cases

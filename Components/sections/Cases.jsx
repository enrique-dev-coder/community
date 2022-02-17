import React from 'react'
import DomesticCases from '../DomesticCases'
import InternationalCases from '../InternationalCases'
const Cases = () => {
  return (
    <div className="container mx-auto w-4/5 xl:max-w-6xl">
      <h4 className=" mx-auto mb-8 text-xl uppercase text-purpleCommunity">
        Domestic
      </h4>
      {/*case menu*/}
      <DomesticCases
        places={[
          'Basset Avocado, California',
          'Santa Ana, California',
          'Freeport,Texas',
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

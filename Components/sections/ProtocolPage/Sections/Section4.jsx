import React from 'react'
import Container from '../../../Container'
import SectionImageRight from '../ProtocolComponents/SectionImageRight'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
import TittleIcon from '../ProtocolComponents/TittleIcon'

const Section4 = () => {
  return (
    <Container>
      <SectionImageRight img="/img/protocol/image4.png">
        <ParagraphContainers textcolor={'black'} margin={false}>
          <TittleIcon
            img="/img/protocol/Design.png"
            title="Design"
            textColor="text-purpleCommunity"
          />
          <p>
            Our cloud computing platform integrates multiple design processes
            using AI, and edge computing nodes to deliver speed, precision, and
            reliability to our designs.
          </p>
          <p>
            We assess buildings for solar and storage potential, studying
            circuit networks, energy use, energy efficiency upgrades, and rebate
            opportunities to design a feasible electrification proposal. We use
            tools for energy simulations and modeling (i.e. solar PV yield
            forecasts).
          </p>
          <p>
            Using benchmark data derived from our ongoing pilots, we speed up
            our community electrification designs with accurate feasibility
            studies to ignite new investment.
          </p>
        </ParagraphContainers>
      </SectionImageRight>
    </Container>
  )
}

export default Section4

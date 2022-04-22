import React from 'react'
import Container from '../../../Container'
import SectionImageRight from '../ProtocolComponents/SectionImageRight'
import TittleIcon from '../ProtocolComponents/TittleIcon'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
const Section6 = () => {
  return (
    <Container>
      <SectionImageRight img="/img/protocol/image6.png">
        <ParagraphContainers textcolor={'black'} margin={true}>
          <div className="mb-10">
            <TittleIcon
              img="/img/protocol/implement.png"
              title="Implement"
              textColor="text-purpleCommunity"
            />
          </div>
          <ul className="list-disc">
            <li>Custom Evaluation</li>
            <li>Detailed Proposal</li>
            <li>Contract</li>
            <li>Paperwork and Permits</li>
            <li>Construction Implementation</li>
            <li>Electricity Generation</li>
          </ul>
        </ParagraphContainers>
      </SectionImageRight>
    </Container>
  )
}

export default Section6

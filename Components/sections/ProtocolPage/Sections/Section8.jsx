import React from 'react'
import Container from '../../../Container'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
import SectionImageRight from '../ProtocolComponents/SectionImageRight'
import TittleIcon from '../ProtocolComponents/TittleIcon'

const Section8 = () => {
  return (
    <Container>
      <SectionImageRight img="/img/protocol/image8.png">
        <ParagraphContainers textcolor={'black'} margin={false}>
          <div className="hidden lg:block">
            <TittleIcon
              img="/img/protocol/report.png"
              title="Report"
              textColor="text-purpleCommunity"
              left="-70px"
            />
          </div>
          <p>
            IMPACT INDEX
            <br />
            To standardize and scale investments across Environmental Justice
            Communities, we have developed an Impact Index. This index allows
            impact measurement, monitoring, and reporting for investors,
            carbon-regulated corporations, and fund managers.
          </p>
          <p>
            We record granular data points to compute and optimize efficiencies
            across the network. The historical evolution of these data points
            allows us to calculate an Impact Index quantifying the progress of
            our Prosumer Communities.
          </p>
          <p>
            We are integrating digital green bonds and Mr. Buffett's IRR "Impact
            Rate of Return" formula as the backbone of our index to demonstrate
            how efficiently their investments deliver social and environmental
            value.
          </p>
        </ParagraphContainers>
      </SectionImageRight>
    </Container>
  )
}

export default Section8

import React from 'react'
import Container from '../../../Container'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
import SectionImageRight from '../ProtocolComponents/SectionImageRight'
import TittleIcon from '../ProtocolComponents/TittleIcon'
import IconParagraph from '../ProtocolComponents/IconParagraph'

const Section2 = () => {
  return (
    <Container>
      <SectionImageRight img="/img/protocol/image2.png">
        <ParagraphContainers textcolor={'black'} margin={false}>
          <div className="hidden lg:block">
            <TittleIcon
              img="/img/protocol/Assess.png"
              title="Assess"
              textColor="text-purpleCommunity"
            />
          </div>

          <IconParagraph img="/img/protocol/pollution.png">
            <p>
              <b>Pollution:</b>
              <br />
              We use data from 21 indicators of pollution, environmental
              quality, socioeconomic, and public health conditions to assess
              areas of high contamination and score them. High scores dictate
              where to prioritize decarbonization.
            </p>
          </IconParagraph>
          <IconParagraph img="/img/protocol/electrification.png">
            <p>
              <b>Electrification:</b>
              <br />
              We assess buildings for solar potential and use satellite imagery
              to analyze roof shapes and local weather patterns.
            </p>
          </IconParagraph>
          <IconParagraph img="/img/protocol/realstate.png">
            <p>
              <b>Real Estate Data:</b>
              <br />
              Using satellite imagery, we optimize the process of real estate
              opportunities and incentives (i.e. Opportunity Zones). We retrieve
              data from local building regulations and markets to find
              cost-effective real-estate opportunities to decarbonize.
            </p>
          </IconParagraph>
        </ParagraphContainers>
      </SectionImageRight>
    </Container>
  )
}

export default Section2

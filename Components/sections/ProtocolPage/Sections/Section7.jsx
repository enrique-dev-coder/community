import React from 'react'
import Container from '../../../Container'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
import SectionImageRight from '../ProtocolComponents/SectionImageRight'
import TittleIcon from '../ProtocolComponents/TittleIcon'

const Section7 = () => {
  return (
    <Container>
      <SectionImageRight img="/img/protocol/image7.png">
        <ParagraphContainers textcolor={'black'} margin={false}>
          <div className="hidden lg:block">
            <TittleIcon
              img="/img/protocol/certify.png"
              title="Certify"
              left="-70px"
            />
          </div>
          <p>
            To standardize and scale investments across Environmental Justice
            Communities, we have developed an Impact Index. This index allows
            impact measurement, monitoring, and reporting for investors,
            carbon-regulated corporations, and fund managers.
          </p>
          <ul className=" ml-auto w-[96.666%] list-disc">
            <li>
              The Certification Program is a new holistic approach to community
              design or re-generation.{' '}
            </li>
            <li>
              The program is based on a Blockchain certification to transform
              blocks into self-sufficient, intelligent, and connected
              communities.
            </li>
            <li>
              Amongst the social and environmental benefits, this program is
              designed to empower the real estate sector providing property
              owners the tools to maintain or even increase their property value
              by transforming their underutilized assets into new sources of
              revenues.{' '}
            </li>
          </ul>
        </ParagraphContainers>
      </SectionImageRight>
    </Container>
  )
}

export default Section7

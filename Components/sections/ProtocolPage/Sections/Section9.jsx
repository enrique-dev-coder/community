import React from 'react'
import Container from '../../../Container'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
import SectionImageLeft from '../ProtocolComponents/SectionImageLeft'
import TittleIcon from '../ProtocolComponents/TittleIcon'

const Section9 = () => {
  return (
    <div className=" bg-purpleCommunityLight">
      <Container>
        <SectionImageLeft img="/img/protocol/image9.png">
          <ParagraphContainers margin={true}>
            <TittleIcon
              img="/img/protocol/Communityos.png"
              title="Community OS"
            />
            <p>
              The Advanced Prosumer Community Certification is a blockchain
              certification step to certify and score the performance of our
              Prosumer Electricity Community’s data within new and existing
              communities.
            </p>
            <ul className="ml-auto w-[96.666%] list-disc">
              <li>
                The Certification Program is a new holistic approach to
                community design or re-generation.{' '}
              </li>
              <li>
                The program is based on a Blockchain certification to transform
                blocks into self-sufficient, intelligent, and connected
                communities.
              </li>
              <li>
                Amongst the social and environmental benefits, this program is
                designed to empower the real estate sector providing property
                owners the tools to maintain or even increase their property
                value by transforming their underutilized assets into new
                sources of revenues.{' '}
              </li>
            </ul>
          </ParagraphContainers>
        </SectionImageLeft>
      </Container>
    </div>
  )
}

export default Section9

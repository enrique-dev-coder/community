import React from 'react'
import Container from '../../../Container'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
import SectionImageRight from '../ProtocolComponents/SectionImageRight'
import TittleIcon from '../ProtocolComponents/TittleIcon'

const Section5 = () => {
  return (
    <Container>
      <SectionImageRight img="/img/protocol/image5.png">
        <ParagraphContainers margin={false}>
          <div className="hidden lg:block">
            <TittleIcon img="/img/protocol/Fund.png" title="FINANCE" />
          </div>
          <p>
            Our structured financial model integrates three financial
            mechanisms, each with its niche
            <ul className=" ml-auto w-[96.66%] list-disc">
              <li>
                State and Federal contracts in the form of grants or programs
              </li>
              <li>
                A Digital Marketplace for qualified private investors
                (crowdfunding). That may include community members.
              </li>
              <li>
                In Latin America, we convert natural capital into digital Green
                Bonds. A retro-funding mechanism within preservation contracts
                funds communities' transition toward net-zero. Community
                Electricity's electrification and decarbonization protocol
                orchestrate local retrofitting and all-electric new
                construction.{' '}
              </li>
            </ul>
          </p>
          <img src="/img/protocol/financeicons.png" alt="finance" />
        </ParagraphContainers>
      </SectionImageRight>
    </Container>
  )
}

export default Section5

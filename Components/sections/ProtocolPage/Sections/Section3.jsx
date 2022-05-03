import React from 'react'
import Container from '../../../Container'
import SectionImageRight from '../ProtocolComponents/SectionImageRight'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'
import TittleIcon from '../ProtocolComponents/TittleIcon'
const Section3 = () => {
  return (
    <Container>
      <SectionImageRight img="/img/protocol/image3.png">
        <ParagraphContainers textcolor="black" margin={false}>
          <div className="hidden lg:block">
            <TittleIcon img="/img/protocol/Engage.png" title="Engage" />
          </div>
          <p>
            <b>DIGITAL: PROSUMER DAPP</b>
            <br />
            PROsumer is a multi-featured decentralized application designed to
            engage and mobilize community members to become producers,
            consumers, and sellers of their clean electricity. Our marketplace
            and home energy management system transform users from passive to
            transactive consumers of electricity. Users can provide grid
            services decarbonizing the grid while monetizing (1) energy surplus,
            (2) storage capacity, and (3) carbon offset attributes.
          </p>
          <p>
            <b>PHYSICAL: IMPACT LABS</b>
            <br />
            Community hub: providing training and education programs on the
            future of energy, disadvantaged communities regeneration programs,
            and key actors in the ecosystem. The hub will showcase partner
            technologies and climate tech solutions. It will hold climate action
            workshops/speakers and allow local residents to vote for projects
            they want to support. Sensitizing and engaging community members in
            the direction forward for humanity.
          </p>
        </ParagraphContainers>
      </SectionImageRight>
    </Container>
  )
}

export default Section3

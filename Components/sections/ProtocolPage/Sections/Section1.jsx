import Container from '../../../Container'
import SectionImageLeft from '../ProtocolComponents/SectionImageLeft'
import ParagraphContainers from '../ProtocolComponents/ParagraphContainers'

const Section1 = () => {
  return (
    <div className=" bg-purpleCommunityLight">
      <Container>
        <SectionImageLeft img="/img/protocol/image1.png">
          <div className="flex flex-col">
            <ParagraphContainers textcolor={'black'} margin={true}>
              <p>The Game-Plan</p>
              <p>
                We use CommunityOS, a{' '}
                <b>data-driven decarbonization protocol</b> to assess,
                orchestrate and fund the necessary steps of our{' '}
                <b>prosumer communities'</b> development and deployment.
              </p>
              <p>
                The <b>CommunityOS</b> platform scores air quality and ranks
                contamination level. With pollution, electrification, and
                real-estate data, communities are prioritized to decarbonize
                through electrification programs.
              </p>
            </ParagraphContainers>
          </div>
        </SectionImageLeft>
      </Container>
    </div>
  )
}

export default Section1

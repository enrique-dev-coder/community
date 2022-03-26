import Navbar from '../Components/NavbarFixedScroll'
import HeaderSection from '../Components/sections/VideoHeader'
import WhoWeAre from '../Components/sections/WhoWeAre'
import WhatWeDo from '../Components/sections/WhatWeDo'
import Howwedoit from '../Components/sections/Howwedoit'
import Team from '../Components/sections/Team'
import Footer from '../Components/sections/Footer'
import Media from '../Components/sections/Media'
import Partners from '../Components/sections/Partners'
import Video from '../Components/Video'
import CommercialPilots from '../Components/sections/CommercialPilots'
import BigPuzzle from '../Components/sections/BigPuzzle'
import CommunityPilots from '../Components/sections/CommunityPilots'
export default function Home() {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <HeaderSection
        src="/img/logo.png"
        title="Empowering prosumers to monetize as they decarbonize"
        titleColored="The new lungs of our cities"
      />
      <WhoWeAre />
      <Video src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1644596801/community/LoopVideo_Site_2_guyhxg.mp4" />
      <WhatWeDo />
      <Howwedoit />
      {/*<KitSection />*/}
      {/*<Prosumer />*/}
      <Video src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1645156320/community/Prosumer_Kits_1_lb79ow.mp4" />
      <CommercialPilots />
      {/* <Objective /> */}
      {/*  <Cases /> */}
      <BigPuzzle />
      <CommunityPilots />
      <Media />
      <Partners />
      <Footer />
    </>
  )
}

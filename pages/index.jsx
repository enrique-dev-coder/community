import Navbar from '../Components/NavbarFixedScroll'
import HeaderSection from '../Components/sections/VideoHeader'
import WhoWeAre from '../Components/sections/WhoWeAre'
import WhatWeDo from '../Components/sections/WhatWeDo'
import Howwedoit from '../Components/sections/Howwedoit'
import Footer from '../Components/sections/Footer'
import Media from '../Components/sections/Media'
import Partners from '../Components/sections/Partners'
import Video from '../Components/Video'
import CommercialPilots from '../Components/sections/CommercialPilots'
import BigPuzzle from '../Components/sections/BigPuzzle'
import CommunityPilots from '../Components/sections/CommunityPilots'
import ProsumerKit from '../Components/sections/ProsumerKit'
export default function Home() {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <HeaderSection
        src="/img/logo.png"
        title="PROSUMER ELECTRICITY COMMUNITIES DECARBONIZING AT SCALE"
        titleColored="The new lungs of our cities"
      />
      <WhoWeAre />
      <Video
        videosrc="https://res.cloudinary.com/dhq3jcns5/video/upload/v1648491481/community/VIDEO-2022-03-14-15-16-18_uob4me.mp4"
        imgsrc="/img/gifs/video1.gif"
        menosDe1Min={true}
      />
      <WhatWeDo />
      <Video
        videosrc="https://res.cloudinary.com/dhq3jcns5/video/upload/v1648491803/community/Untitled_design_4_ws8nnt.mp4"
        imgsrc="/img/gifs/video2.gif"
        menosDe1Min={true}
      />
      <Howwedoit />
      {/*<KitSection />*/}
      {/*<Prosumer />*/}
      <Video
        videosrc="https://res.cloudinary.com/dhq3jcns5/video/upload/v1645156320/community/Prosumer_Kits_1_lb79ow.mp4"
        menosDe1Min={false}
      />
      <CommercialPilots />
      {/* <Objective /> */}
      {/*  <Cases /> */}
      <BigPuzzle />
      <CommunityPilots />
      <ProsumerKit />
      <Media />
      <Partners arrows={false} />
      <Footer />
    </>
  )
}

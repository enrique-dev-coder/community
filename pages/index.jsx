import Navbar from '../Components/NavbarFixedScroll'
import HeaderSection from '../Components/sections/VideoHeader'
import AboutUsSection from '../Components/sections/Aboutus'
import KitSection from '../Components/sections/Kitsection'
import Objective from '../Components/sections/Objective'
import Howwedoit from '../Components/sections/Howwedoit'
import Cases from '../Components/sections/Cases'
import Team from '../Components/sections/Team'
import Footer from '../Components/sections/Footer'
import Media from '../Components/sections/Media'
import Partners from '../Components/sections/Partners'
export default function Home() {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <HeaderSection
        src="/img/logo.png"
        title="Empowering prosumers to monetize as they decarbonize"
        titleColored="The new lungs of our cities"
      />
      <AboutUsSection />
      <KitSection />
      <Objective />
      <Howwedoit />
      <Cases />
      <Media />
      <Team
        sectionTitle="Team"
        numberOfRows={1}
        numberOfElements={3}
        bottomButton={true}
        members={[
          {
            id: 0,
            img: '/img/team/Helena.png',
            name: 'Helena Donoso',
            job: 'CHIEF EXECUTIVE OFFICER',
            linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/',
            cofounder: true,
          },
          {
            id: 1,
            img: '/img/team/Nicolas.png',
            name: 'Nicolas Bonnet',
            job: 'CHIEF EXECUTIVE OFFICER',
            linkedin: 'https://www.linkedin.com/in/nibonnet/',
            cofounder: true,
          },
          {
            id: 2,
            img: '/img/team/Austin.png',
            name: 'Austin Davis',
            job: 'Blockchain expert',
            linkedin: 'https://www.linkedin.com/in/austindavis/',
            cofounder: false,
          },
        ]}
      />
      <Partners />
      <Footer />
    </>
  )
}

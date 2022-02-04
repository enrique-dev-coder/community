import Navbar from '../Components/NavbarFixedScroll'
import HeaderSection from '../Components/sections/VideoHeader'
import AboutUsSection from '../Components/sections/Aboutus'
import KitSection from '../Components/sections/Kitsection'
export default function Home() {
  return (
    <>
      <Navbar src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643898245/community/2_2_fkiayl.png" />
      <HeaderSection
        src="https://res.cloudinary.com/dhq3jcns5/image/upload/v1643909942/community/Community_logo_twkyal.png"
        title="Empowering prosumers to monetize as they decarbonize"
        titleColored="The new lungs of our cities"
      />
      <AboutUsSection />
      <KitSection />
    </>
  )
}

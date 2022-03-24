import React from 'react'
import Navbar from '../Components/NavbarFixedScroll'
import Intro from '../Components/sections/teampage/Intro'
import { CoreTeam } from '../Components/sections/teampage/CoreTeam'
import Advisors from '../Components/sections/teampage/Advisors'
import Footer from '../Components/sections/Footer'
import Outro from '../Components/sections/teampage/Outro'
const team = () => {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <Intro />
      <CoreTeam />
      <Advisors />
      <Outro />
      <Footer />
    </>
  )
}

export default team

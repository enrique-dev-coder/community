import React from 'react'
import Navbar from '../Components/NavbarFixedScroll'
import Intro from '../Components/sections/teampage/Intro'
import { CoreTeam } from '../Components/sections/teampage/CoreTeam'
import Advisors from '../Components/sections/teampage/Advisors'
import Footer from '../Components/sections/Footer'
const team = () => {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <div className="w-full bg-purpleCommunity">
        <div className="containerWithMargin mb-10 flex h-auto flex-col justify-center lg:h-screen">
          <Intro />
        </div>
      </div>
      <CoreTeam />
      <Advisors />
      <Footer />
    </>
  )
}

export default team

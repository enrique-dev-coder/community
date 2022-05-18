import React from 'react'
import Navbar from '../../NavbarFixedScroll'
import ClimateTech from './ClimateTech'
import Intro from './Intro'
import ProsumerPrograms from './ProsumerPrograms'
import StartingPoint from './StartingPoint'
import Pilots from './Pilots'
import Slider from '../CommunityPilots/Slider'
import Footer from '../Footer'
const index = () => {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <Intro />
      <StartingPoint />
      <ProsumerPrograms />
      <ClimateTech />
      <Pilots />
      <Slider />
      <Footer />
    </>
  )
}

export default index

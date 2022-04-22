import React from 'react'
import Navbar from '../../NavbarFixedScroll'
import {
  Intro,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
} from './Sections'
import Footer from '../Footer'
const index = () => {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <Intro />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  )
}

export default index

import React from 'react'
import Navbar from '../../NavbarFixedScroll'
import Intro from './Intro'
import Container from '../../Container'
import Paragraph from './Paragraph'
import Cards from './Cards'
import Footer from '../Footer'
const index = () => {
  return (
    <>
      <Navbar src="/img/loogoletras.png" />
      <Intro />
      <Container>
        <Paragraph />
        <Cards />
      </Container>
      <Footer />
    </>
  )
}

export default index

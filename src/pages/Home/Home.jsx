import React from 'react'
import CarouselHero from '../../components/CarouselHero'
import About from '../../components/About'
import SectionOne from '../../components/SectionOne'
import Sectiontwo from '../../components/Sectiontwo'
import SectionThree from '../../components/SectionThree'
import SectionFour from '../../components/SectionFour'
import Contact from '../../components/Contact'
import Service from '../../components/Service'

function Home() {
  return (
    <>
      <CarouselHero />
      <Service />
      <About />
      <SectionOne />
      <Sectiontwo />
      <SectionThree />
      <SectionFour />
      <Contact />
    </>
  )
}

export default Home
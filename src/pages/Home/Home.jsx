import React from 'react';
import { motion } from 'framer-motion';
import CarouselHero from '../../components/CarouselHero';
import About from '../../components/About';
import SectionOne from '../../components/SectionOne';
import Sectiontwo from '../../components/Sectiontwo';
import SectionThree from '../../components/SectionThree';
import SectionFour from '../../components/SectionFour';
import Contact from '../../components/Contact';
import Service from '../../components/Service';

function Home() {
  // Function to scroll smoothly to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.div>
        <CarouselHero />
      </motion.div>
      <motion.div>
        <Service />
      </motion.div>
      <motion.div>
        <About />
      </motion.div>
      <motion.div>
        <SectionOne />
      </motion.div>
      <motion.div>
        <Sectiontwo />
      </motion.div>
      <motion.div>
        <SectionThree />
      </motion.div>
      <motion.div>
        <SectionFour />
      </motion.div>
      <motion.div>
        <Contact />
      </motion.div>
    </>
  );
}

export default Home;

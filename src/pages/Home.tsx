import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { useSEO } from '../hooks/useSEO';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  useSEO();

  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <About />
      <Team />
      <FAQ />
      <Contact />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
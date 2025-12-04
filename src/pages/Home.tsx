import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <About />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
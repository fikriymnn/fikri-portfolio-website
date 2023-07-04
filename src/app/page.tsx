"use client"
import React, { useState } from 'react';
import "@/scss/index.scss";
import Navbar from '@/sections/Navbar';
import SocialIcons from '@/components/SocialIcons';
import Email from '@/components/Email';
import Hero from '@/sections/Hero';
import About from '../sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Loader from '@/components/Loader';
import Footer from '@/sections/Footer';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className='app'>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}

export default Index;
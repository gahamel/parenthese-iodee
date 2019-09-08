import React from 'react'


import Layout from '../components/layout/Layout'
import SEO from '../components/SEO/SEO';

import Intro from '../components/Intro';
import Hero from '../components/layout/Hero';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Logements from '../components/Logements/Logements';
import About from '../components/About';
import Contact from '../components/Contact';

const index = () => {
  return (
    <Layout>
      <SEO/>
      <Hero>
        <Header/>
        <Intro/>
      </Hero>
      <Logements id="logements"/>
      <About />
      <Contact />
      <Footer/>
    </Layout>
  )
}

export default index

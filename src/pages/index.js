import React from 'react'

import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO/SEO';

import Intro from '../components/Intro';
import Footer from '../components/layout/Footer';
import Offre from '../components/Logements/Offre';
import About from '../components/About';
import Contact from '../components/Contact';
import Carte from '../components/Logements/Carte';

const index = () => {

  return (
    <Layout>
      <SEO/>
      <Header />
      <Intro/>
      <Carte />
      <Offre/>
      <About />
      <Contact />
      <Footer/>
    </Layout>
  )
}

export default index

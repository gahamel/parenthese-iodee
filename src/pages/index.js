import React from 'react'

import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO/SEO';

import Intro from '../components/Intro';
import Hero from '../components/layout/Hero';
import Footer from '../components/layout/Footer';
import Logements from '../components/Logements/Logements';
import About from '../components/About';
import Contact from '../components/Contact';
import Carte from '../components/Logements/Carte';
import {navigate} from '@reach/router';

const index = () => {

  return (
    <Layout>
      <SEO/>
      <Header />
      <Intro/>
      <Carte />
      <Logements/>
      <About />
      <Contact />
      <Footer/>
    </Layout>
  )
}

export default index

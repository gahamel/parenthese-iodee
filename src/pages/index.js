import React from 'react'
import Layout from '../components/layout/Layout'
import Intro from '../components/Intro';
import Hero from '../components/layout/Hero';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Logements from '../components/Logements/Logements';

const index = () => {
  return (
    <Layout>
      <Hero>
        <Header/>
        <Intro/>
      </Hero>
      <Logements id="logements"/>
      {/* <Footer/> */}
    </Layout>
  )
}

export default index

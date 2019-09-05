import React from 'react'
import Layout from '../components/layout/Layout'
import Intro from '../components/Intro';
import Hero from '../components/layout/Hero';
import Header from '../components/layout/Header';
import About from '../components/About';

const index = () => {
  return (
    <Layout>
      <Hero>
        <Header/>
        <Intro/>
      </Hero>
    </Layout>
  )
}

export default index

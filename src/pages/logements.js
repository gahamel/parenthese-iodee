import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Logements from '../components/Logements';

const logements = () => {
  return (
    <Layout>
      <Header />
      <Logements />
    </Layout>
  )
}

export default logements

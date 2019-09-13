import React from 'react'
import './Layout.module.css';
import SEO from '../SEO/SEO'
import Header from './Header';

const Layout = ({children}) => {
  return (
    <main>
      <SEO />
      <Header/>
      {children}
    </main>
  )
}

export default Layout

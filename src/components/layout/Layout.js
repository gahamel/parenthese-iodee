import React from 'react'
import './Layout.module.css';
import SEO from '../SEO/SEO'

const Layout = ({children}) => {
  return (
    <main>
      <SEO />
      {children}
    </main>
  )
}

export default Layout

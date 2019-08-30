import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styles from './Hero.module.css';

const query = graphql`
  query{
    defaultBackgd:file(relativePath:{eq:"Hippowake-background.png"}){
      childImageSharp{
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = ({children}) => {
  const backGrd = useStaticQuery(query)
  return (
    <div>
      <BackgroundImage className={styles.Hero} fluid={backGrd.defaultBackgd.childImageSharp.fluid}>
        {children}
      </BackgroundImage>
    </div>
  )
}

export default Hero

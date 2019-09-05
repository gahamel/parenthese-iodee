import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {useStaticQuery, graphql} from 'gatsby';
import styles from './Hero.module.css';


const Hero = ({children}) => {
  const data = useStaticQuery(
    graphql`
      {
	      file(relativePath:{eq:"Hippowake-background.png"}) {
          childImageSharp{
            fluid(quality: 90, maxWidth: 1920){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )


  return (
    <BackgroundImage fluid={data.file.childImageSharp.fluid} className={styles.bcg}>
      {children}
    </BackgroundImage>
  )
}

export default Hero


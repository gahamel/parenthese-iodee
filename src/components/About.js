import React from 'react'
import styles from './About.module.css'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const About = () => {
  const data = useStaticQuery(
    graphql`
      {
	      file(relativePath:{eq:"Photo-de-profil-nicolas-ourselin.jpg"}) {
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

    <>
    <section className={styles.container}>
      <div className={styles.aboutLeft}>
        <Img fluid={data.file.childImageSharp.fluid} className={styles.selfie} alt="profil"></Img>
      </div>
      <div className={styles.about}>
        <h2>
        Une Histoire
        </h2>
        <p>
          Parenthese Iodée est née d'une passion pour la baie du Mont-Saint Michel.<br/>
          Originaire de Saint-Malo, je suis tombé amoureux de ma région.<br/>
          Je souhaite transformer votre séjour en véritable expérience.<br/>
          Pour cela je vous propose des expériences uniques dans le confort d'un logement à quelques minutes de la mer.
        </p>
        <br/>
        <strong>-Nicolas</strong>
        <AniLink to="/activites" className={styles.link}>
          <h3 className={styles.button}>Découvrir les activités</h3>
        </AniLink>
      </div>

    </section>

    </>

  )
}

export default About

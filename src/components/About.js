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
    <section className={styles.container}>
      <Img fluid={data.file.childImageSharp.fluid} className={styles.selfie} alt="profil"></Img>
      <div className={styles.about}>
        <h5>
          Le mot du patron
        </h5>
        <h2>
        Bienvenue chez Parenthèse Iodée!
        </h2>
        <p>
          <q>
          Parenthese Iodée est née d'une passion pour la baie du Mont-Saint Michel.
          Originaire de Saint-Malo, je suis tombé amoureux de ma région.
          Je souhaite transformer votre séjour en véritable expérience.
          Pour cela je vous propose des expériences uniques dans le confort d'un logement à quelques minutes de la mer.
          </q>
        </p>
        <br/>
        <strong>-Nicolas</strong>
      </div>
    </section>
  )
}

export default About

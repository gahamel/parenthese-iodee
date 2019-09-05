import React from 'react'
import styles from './About.module.css'
import selfie from '../images/Photo-de-profil-nicolas-ourselin.jpg'

const About = () => {
  return (

    <>
    <section className={styles.container}>
      <div className={styles.aboutLeft}>
        <img src={selfie} className={styles.selfie}></img>
      </div>
      <div className={styles.about}>
        <h2>
        L’aventure a démarré en 2015 en accueillant mes premiers voyageurs.
        </h2>
        <h3>
        
        Au fil du temps et des rencontres, je me suis pris de passion pour le partage d’expériences locales tout en veillant à ce que mes invités soient installés le plus confortablement possible.

        Originaire et amoureux de Saint-Malo, c’est avec plaisir que je partagerai mes connaissances sur la région !

        Parenthèse Iodée vous permet de réserver votre logement avec le meilleur tarif et d’économiser les frais de plateforme.
        </h3>

        <strong>Nicolas</strong>        
      </div>
    </section>

    </>

  )
}

export default About

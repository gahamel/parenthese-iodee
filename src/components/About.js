import React from 'react'
import styles from './About.module.css'
import selfie from '../images/Photo-de-profil-nicolas-ourselin.jpg'

const About = () => {
  return (

    <>
    <section className={styles.container}>
      <div className={styles.aboutLeft}>
        <img src={selfie} className={styles.selfie} alt="profil"></img>
      </div>
      <div className={styles.about}>
        <h2>
        Une Histoire
        </h2>
        <p>
          Parenthese Iodée est née d'une passion pour la baie du Mont-Saint Michel.<br/>
        </p>
        <br/>
        <strong>Nicolas</strong>      
      </div>
    </section>

    </>

  )
}

export default About

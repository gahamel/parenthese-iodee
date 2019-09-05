import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from './Intro.module.css'


const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>
        Des logements au coeur de Saint-Malo et à Hirel
        sur la baie du Mont Saint-Michel
        </h1>
        <AniLink paintDrip to="/logements" hex="312782" className={styles.Link}>
          Voir Les Logements
        </AniLink>
      </div>
      <div className={styles.size1}></div>
    </div>
  )
}

export default Intro

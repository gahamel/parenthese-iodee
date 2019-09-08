import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from './Intro.module.css'


const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>
        Votre Plus Beau Séjour<br/>
        Au Bord De Mer
        </h1>
        <AniLink fade to="/logements" hex="312782" className={styles.Link}>
          Voir Les Logements
        </AniLink>
      </div>
      <div className={styles.size1}></div>
    </div>
  )
}

export default Intro

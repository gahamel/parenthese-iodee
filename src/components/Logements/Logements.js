import React from 'react';
import carte from '../images/plan-des-logements-sur-la-cote.png';
import styles from './Logements.module.css';
import zenith from '../images/zenith/salon-lar-zenith.jpg'
import bisquine from '../images/bisquine/Salon-La-bisquine.jpg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Logements = () => {
  return (
    <div className={styles.container}>
      <h1>
        Découvrez la côte d'émeraude
      </h1>
      <img src={carte} alt="plan cote emeraude" className={styles.carte}/>
      <section className={styles.section}>
        <img src={bisquine} alt="plan cote emeraude" className={styles.slide}/>
        <div className={styles.logement}>
          <h2 className={styles.h3}>Zenith</h2>
          <p>Appartement de 4 personnes à Saint-Malo</p>
          <AniLink fade to="/zenith" className={styles.button}>Découvrir Ar Zénith</AniLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.logement}>
          <h2 className={styles.h3}>Bisquine</h2>
          <p>Maison de 10 personnes à Hirel</p>
          <AniLink fade to="/bisquine" className={styles.button}>Découvrir La Bisquine</AniLink>
        </div>
        <img src={zenith} alt="plan cote emeraude" className={styles.slide}/>
      </section>
    </div>
  )
}

export default Logements

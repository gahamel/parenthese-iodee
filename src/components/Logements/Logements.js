import React from 'react';
import carte from '../../images/plan-des-logements-sur-la-cote.png';
import styles from './Logements.module.css';
import zenith from '../../images/zenith/salon-lar-zenith.jpg'
import bisquine from '../../images/bisquine/Salon-La-bisquine.jpg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Logements = () => {
  return (
    <div className={styles.container}>
      <h1>
        Découvrez la côte d'émeraude
      </h1>
      <p>
        Des logements de charme idéalement situés entre Saint-Malo, Cancale et le Mont Saint-Michel.
      </p>
      <br/>
      <img src={carte} alt="plan cote emeraude" className={styles.carte}/>
      <section className={styles.section}>
        <AniLink fade to="/zenith" className={styles.link}>
          <h3 className={styles.button}>Ar Zenith</h3>
          <p>Appartement de 4 personnes à Saint-Malo</p>
          <div className={styles.overlay}> 
            <img className={styles.img} src={zenith} alt="Ar Zenith"/>
            <div className={styles.hover}>            
              <div className={styles.texte} >
                Découvrir L'Ar Zénith
              </div>
            </div>
          </div>
        </AniLink>
        <AniLink fade to="/bisquine" className={styles.link}>
          <h3>La Bisquine</h3>
          <p>Logement de 10 personnes à Hirel</p>



          <div className={styles.overlay}> 

            <img className={styles.img} src={bisquine} alt="La Bisquine"/>
            <div className={styles.hover}>
              <div className={styles.texte} >
                Découvrir La Bisquine
              </div>
            </div>
          </div>
          
        </AniLink>
      </section>
    </div>
  )
}

export default Logements

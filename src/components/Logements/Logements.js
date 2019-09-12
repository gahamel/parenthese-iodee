import React from 'react'
import bisquine from '../../images/bisquine/Salon-La-bisquine.jpg'
import zenith from '../../images/zenith/salon-lar-zenith.jpg'
import styles from './Logements.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Button from '@material-ui/core/Button';
import { style } from '@material-ui/system'

const Logements = () => {
  return (
      <section className={styles.container}>
        <div className={styles.description}>
          <img src={bisquine}/>
          <h3>La Bisquine</h3>
          <div className={styles.infos}>
            <h5>Maison entière pour 10 personnes</h5>
            <h5>Hirel</h5>
            <h5>Logement de 10 personnes à Hirel</h5>
            <h5>Logement de 10 personnes à Hirel</h5>
          </div>
          <AniLink fade to="/bisquine">
            <Button variant="contained" color="primary" >
              Infos et Réservation
            </Button>
          </AniLink>
        </div>
        <div className={styles.description}>
          <img src={zenith}/>
          <h3>L'ar Zenith</h3>
          <div className={styles.infos}>
            <h5>Appartement pour 4 personnes</h5>
            <h5>Saint-Malo</h5>
            <h5>Appartement de 4 personnes à Saint-Malo</h5>
            <h5>Appartement de 4 personnes à Saint-Malo</h5>            
          </div>
          <AniLink fade to="/zenith">
            <Button variant="contained" color="primary" >
              Infos et Réservation
            </Button>
          </AniLink>
        </div>
      </section>
  )
}
export default Logements

import React from 'react'
import bisquine from '../../images/bisquine/Salon-La-bisquine.jpg'
import zenith from '../../images/zenith/salon-lar-zenith.jpg'
import styles from './Logements.module.css'

const Logements = () => {
  return (
    <>
    <h3>
      Des logements rien que pour vous
    </h3>
      <section className={styles.container}>
        <div className={styles.description}>
          <img src={bisquine}/>
          <h5>Logement de 10 personnes à Hirel</h5>
          <h3>La Bisquine</h3>
        </div>
        <div className={styles.description}>
          <img src={zenith}/>
          <h5>Appartement de 4 personnes à Saint-Malo</h5>
          <h3>L'ar Zenith</h3>
        </div>
      </section>
    </>

  )
}
export default Logements

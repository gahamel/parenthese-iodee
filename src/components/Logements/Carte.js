import React from 'react'
import carte from '../../images/plan-des-logements-sur-la-cote.png';
import styles from './Carte.module.css';

const Carte = () => {
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
    </div>
  )
}

export default Carte

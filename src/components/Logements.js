import React from 'react';
import carte from '../images/plan-des-logements-sur-la-cote.png';
import styles from './Logements.module.css';

const Logements = () => {
  return (
    <div className={styles.container}>
      <h1>
        Découvrez la côte d'émeraude
      </h1>
      <img src={carte} alt="plan cote emeraude" className={styles.carte}/>
      <section>

      </section>
    </div>
  )
}

export default Logements

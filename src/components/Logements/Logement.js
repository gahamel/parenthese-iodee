import React from 'react'
import styles from './Logement.module.css'

const Logement = ({titre,image}) => {
  return (
    <div>
      <h1>{titre}</h1>
      <h3>Logement a hirel</h3>
      <img src={image} alt={titre} className={styles.img}/>
    </div>
  )
}

export default Logement

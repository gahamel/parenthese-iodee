import React from 'react'
import styles from './Equipements.module.css'

const Equipements = ({eqps}) => {
  return (
    <div className={styles.container}>
      {eqps.map(eqp => {
        return <li key={eqp} className={styles.list}>{eqp}</li>
      })}
    </div>

  )
}

export default Equipements

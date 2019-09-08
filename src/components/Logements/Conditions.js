import React from 'react'
import rules from '../../constants/conditions';
import styles from './Conditions.module.css'

const Conditions = () => {
  return (
    <div className={styles.container}>
      {rules.map(rule => {
        return(
          <li key={rule.id} className={styles.list}>
            <div className={styles.icon}>
              {rule.icone}
            </div>
            <h3>{rule.titre}</h3>
            <p>{rule.description}</p>
          </li>
        )
      })}
    </div>
  )
}

export default Conditions

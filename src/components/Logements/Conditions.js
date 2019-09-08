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
            <p>{rule.titre}</p>
            <h3>{rule.description}</h3>
          </li>
        )
      })}
    </div>
  )
}

export default Conditions

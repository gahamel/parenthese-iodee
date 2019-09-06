import React from 'react'
import Question from './Question'
import styles from './FAQ.module.css'
import links from '../../constants/Questions';

const FAQ = () => {

  return (
    <div>
      {links.map((link) => {
        return (
          <li key={link.id} className={styles.list}>
            <Question link={link}/>
          </li>
        )
      })}
    </div>
  )
}

export default FAQ

import React from 'react'
import {Link} from 'gatsby'
import styles from './Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>
      Des logements au coeur de Saint-Malo et à Hirel
      sur la baie du Mont Saint-Michel
      </h1>
      <Link to="/" activeClassName={styles.Link}>
        Voir les logements
      </Link>


    </div>
  )
}

export default Intro

import React from 'react'
import styles from './Header.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../../images/Logo-parenthese-iodee.png'
import {Link} from 'gatsby'

const Header = () => {
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
          <Link to="#offre" className={styles.button}>Logements</Link>
          <Link to="#activites" className={styles.button}>Activites</Link>
        </ul>
        <div className={styles.image}>
          <img src={logo} className={styles.logo}/>
        </div>
        <div className={styles.blanc}>        
          <Link to="#bretagne" className={styles.menu}>
          </Link>
        </div>
    </div>
  )
}

export default Header

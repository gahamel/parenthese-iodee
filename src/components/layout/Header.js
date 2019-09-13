import React from 'react'
import styles from './Header.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../../images/Logo-parenthese-iodee.png'
import {Link} from 'gatsby'

const Header = () => {

  return (
    <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.menu}>
            <Link to="#bretagne">
              Menu
            </Link>
          </li>
          <AniLink to="/logements" className={styles.button}>Logements</AniLink>
          <AniLink to="/activites" className={styles.button}>Activites</AniLink>
        </ul>
        <div className={styles.blanc}>
          <img src={logo} className={styles.logo}/>
        </div>
        <div className={styles.blanc}></div>
    </div>

  )
}

export default Header

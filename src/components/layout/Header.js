import React from 'react'
import styles from './Header.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Header = () => {
  return (
        <ul className={styles.list}>
          <li className={styles.menu}>Menu</li>
          <li className={styles.button}>Logements</li>
        </ul>
  )
}

export default Header

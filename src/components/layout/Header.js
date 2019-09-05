import React from 'react'
import logo from '../../images/Logo-parenthese-iodee.png';
import {Link} from 'gatsby';
import styles from './Header.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Header = () => {
  return (
    <div className={styles.navbar}>
      <AniLink fade to="/" className={styles.logo}>
        <img src={logo} alt="logo parenthese-iodee" className={styles.logo}/>
        <p>Parenthese Iodée</p>
      </AniLink>      
      <div>
        <ul>
          <li><AniLink fade to="/apropos" className={styles.Link}>A propos</AniLink></li>
          <li><AniLink paintDrip to="/contact" className={styles.Link} hex="312782">Contact</AniLink></li>
          <li><AniLink paintDrip to="/activites" className={styles.Link} hex="312782">Activités</AniLink></li>
          <li><AniLink paintDrip to="/logements" className={styles.button} hex="312782">Logements</AniLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Header

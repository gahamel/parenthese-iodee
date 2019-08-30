import React from 'react'
import styles from './Header.module.css'
import logo from '../../images/Logo-parenthese-iodee.png'
import {Link} from 'gatsby';


const Header = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo parenthese iodee"/>
      <ul>
        <li>
          <Link to="/" activeClassName={styles.button}>Decouvrir les logements</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header

import React from 'react'
import logo from '../../images/Logo-parenthese-iodee.png';
import {Link} from 'gatsby';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.Link}>
        <img src={logo} alt="logo parenthese-iodee"/>
        <p>Parenthese Iodée</p>
      </Link>      
      <div></div>
    </div>
  )
}

export default Header

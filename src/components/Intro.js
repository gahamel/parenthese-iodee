import React from 'react'
import styles from './Intro.module.css'
import Button from '@material-ui/core/Button'
import teal from '@material-ui/core/colors/teal';
import logo from '../images/Logo-parenthese-iodee-fond-blanc.png';

const primary = teal[500];

const Intro = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={logo} className={styles.logo}/>
        <h1>Parenthèse Iodée</h1>
        <h2>
        Séjours Inoubliables en baie du mont Saint-Michel
        </h2>
      </div>
    </>
  )
}

export default Intro

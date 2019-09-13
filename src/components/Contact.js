import React from 'react'
import styles from './Contact.module.css'
import Button from '@material-ui/core/Button'
import { Input } from '@material-ui/core';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2>
          Nous contacter
        </h2>
        <h3>
          Vous pouvez nous contacter en utilisant le formulaire ci-joint.
        </h3>
      </div>
      <form action="https://formspree.io/gaetanhamelpro@gmail.com" method="POST" className={styles.form}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" placeholder="Nom" className={styles.formControl}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" className={styles.formControl}/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" type="text" rows="10" name="message" placeholder="Votre message" className={styles.formControl}/>
        </div>
            <Input type="submit" value="Envoyer" variant="containted" color="primary"/>
      </form>
    </div>
  )
}

export default Contact
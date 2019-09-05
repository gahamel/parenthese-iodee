import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2>
          Hello
        </h2>
        <h3>
          Laissez nous un petit message et nous revenons vers vous au plus vite!
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
        <div>
          <input type="submit" value="Envoyer" className={styles.submit}/>
        </div>
      </form>
    </div>
  )
}

export default Contact
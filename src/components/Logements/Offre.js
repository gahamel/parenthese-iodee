import React from 'react'
import styles from './Offre.module.css'
import Button from '@material-ui/core/Button'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import hippowake from '../../images/Hippowake-background.png'
import Teal from '@material-ui/core/colors/purple';

const Offre = () => {
  const primary = Teal[500];
  return (
    <section className={styles.container}>
      <img src={hippowake} alt="activites en bord de mer" className={styles.carte}/>
      <div className={styles.texte}>
        <h5>
          #OnPartALAventure
        </h5>
        <h2>
          Plus qu'un simple séjour
        </h2>
        <p>
          Parenthèse iodée ce sont aussi des expériences.
          Que vous soyez plutôt balade en mer, dégusation de produits locaux ou visite guidée, nous avons de quoi vous plaire.
        </p>
        <Button variant="contained" color={primary}>
          <AniLink fade to="/activites">
            Découvrez les logements
          </AniLink>
        </Button>
      </div>
    </section>
  )
}

export default Offre

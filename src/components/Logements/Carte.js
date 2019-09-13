import React from 'react'
import carte from '../../images/plan-des-logements-sur-la-cote.png';
import styles from './Carte.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Button from '@material-ui/core/Button';

const Carte = () => {
  return (
    <>
      <section className={styles.container} id="offre">
        <div className={styles.texte}>
          <h5 id="bretagne">
            #laBretagneCaVousGagne
          </h5>
          <h2>
            Découvrez la côte d'émeraude
          </h2>
          <p>
            Idéalement situé entre Cancale, Saint-Malo et le Mont saint-Michel, vous pourrez découvrir la côte malouine et prendre un bol d'air en bord de mer.
          </p>
          <img src={carte} alt="plan cote emeraude" className={styles.carte}/>
          <Button variant="contained" color="secondary">
            Découvrez les logements
          </Button>
        </div>
      </section>
    </>
  )
}

export default Carte

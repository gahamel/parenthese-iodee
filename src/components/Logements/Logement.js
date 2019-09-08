import React from 'react'
import styles from './Logement.module.css'

const Logement = ({titre,image}) => {
  return (
    <div>
      <h1>{titre}</h1>
      <h3>
      Hirel, dont le nom signifie « Long Sillon » s’agit à l’origine d’un groupement d’habitations bâties sur des dépôts coquilliers. Le littoral long de 7 km permet de nombreuses activités de plein air : randonnées pédestre ou vélo sur la voie verte, pratique du char à voile, du Kite-surf, balades à cheval sur la mer,  les herbus et les polders.
      </h3>
      <p>
      Cette grande maison spacieuse et fonctionnelle saura vous séduire par ses touches de décoration artisanales et ses grands espaces communs. Le logement est idéalement situé à proximité de la baie.
Découvrez les nombreux équipements mis à votre disposition pour les grands comme les petits. 
Attention, Mimi le chat vit sur place. Vous aurez néanmoins la possibilité de l’isoler pendant votre séjour.
      </p>
      <h3>La Bisquine. Maison entière</h3>
      <img src={image} alt={titre} className={styles.img}/>
    </div>
  )
}

export default Logement

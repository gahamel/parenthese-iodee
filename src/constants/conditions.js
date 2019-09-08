import React from 'react'
import {FaKey, FaHandshake, FaBookOpen, FaLock } from 'react-icons/fa'

export default [
  {
    id:1,
    titre:"Arrivée & Départ",
    description:"Vous arrivez et quittez le logement en autonomie grace à une boite à clé. Les horaires peuvent êtres flexibles sur demande",
    icone:<FaKey/>,
  },
  {
    id:2,
    titre:"Régles des logements",
    description:"Les fêtes et les soirées sont interdites dans tous les logements. En cas de non respect de ces consignes, le séjour peut être annulé immediatement sans remboursement",
    icone:<FaBookOpen />,
  },
  {
    id:3,
    titre:"Politique d'annulation",
    description:"Un remboursement intégral est effectué 20 jours avant l’arrivée. En cas d’annulation dans la periode des 20 jours, le remboursement concernera seulement les frais de ménages et la taxe de séjour.",
    icone:<FaHandshake />,
  },
  {
    id:4,
    titre:"Paiement en ligne sécurisé",
    description:"La réservation des logements s’effectue en ligne via CB. Le systeme d’encaissement est 100% sécurisé. Plusieurs moyens de paiement sont pris en charge.",
    icone:<FaLock />,
  },
]
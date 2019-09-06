import React from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'
import FAQ from '../components/Logements/FAQ'
import Conditions from '../components/Logements/Conditions'
import Equipements from '../components/Logements/Equipements'
import Logement from '../components/Logements/Logement'

const equipements = [
  "Wifi Gratuite",
  "Espace de travail",
  "Télévision satellite",
  "Cuisine Équipée",
  "Draps de lit",
  "Lave-Linge",
  "Douche à l'Italienne",
  "Serviettes de Bain",
  "Sèche-Cheveux"
]

const zenith = () => {
  return (
    <Layout>
      <Header/>
      <Logement />
      <Conditions />
      <Equipements eqps={equipements} />
      <FAQ/>
    </Layout>
  )
}

export default zenith

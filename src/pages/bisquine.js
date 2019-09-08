import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import FAQ from '../components/Logements/FAQ';
import Conditions from '../components/Logements/Conditions';
import Equipements from '../components/Logements/Equipements';

const equipements = [
  "Wifi Gratuite",
  "Grand Salon",
  "Poêle à Bois",
  "Terasse & Jardin",
  "Barbecue",
  "Terrasse sous Terre",
  "Cuisine Équipée",
  "Lave-Vaisselle",
  "Draps de Lit",
  "Serviettes de Bain",
  "Lave-Linge",
  "Sèche-Linge",
  "Baby-Foot",
  "Jeux de société",
  "Sécurité Bébé",
  "Lit-Parapluie",
  "Chaises Hautes",
  "Tables à Langer"
]

const bisquine = () => {
  return (
    <Layout>
      <Header/>
      bisquine
      <Conditions />
      <Equipements eqps={equipements}/>
      <FAQ/>
    </Layout>
  )
}

export default bisquine;

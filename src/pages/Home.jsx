// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
 // Assurez-vous que le chemin est correct en fonction de la structure de votre projet
 import '../i18n';
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features.jsx";
import Swipper from "../components/Swipper.jsx";
import Testimonial from "../components/Testimonial";
import photo_landingPage from "../assets/images/photo_landingPage.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Hero
        image={photo_landingPage}
        title={t("home_section.hero_title")} // Traduction pour le titre
        description={t("home_section.hero_description")} // Traduction pour la description
        showButton={true}
        buttonText={t("home_section.hero_button_text")} // Traduction pour le texte du bouton
        buttonLink="/reservation"
      />
      <Features />
      <Swipper />
      <Testimonial />
    </>
  );
};

export default Home;

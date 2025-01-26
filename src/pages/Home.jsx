
import React from 'react';
import { Link } from 'react-router-dom';

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
        title={t("home_section.hero_title")} 
        description={t("home_section.hero_description")} 
        showButton={true}
        buttonText={t("home_section.hero_button_text")} 
        buttonLink="/reservation"
      />
      <Features />
      <Swipper />
      <Testimonial />
    </>
  );
};

export default Home;

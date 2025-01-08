import React from 'react';
import { useTranslation } from 'react-i18next'; // Import du hook pour les traductions
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import logo from "../assets/images/LOGO-DZ-BEAUTY.png";
import other from '../assets/images/other.jpg';
import ServiceGrid from '../components/ServiceGrid';

const Other = () => {
  const { t } = useTranslation(); // Hook pour accéder aux traductions

  return (
    <>
      <Navbar />
      <Hero
        image={other}
        title={t("other_services_title")} // Utilisation des clés de traduction
        
        showButton={false}
      />
      <div className="flex items-center justify-center mb-4">
        <span className="w-64 h-1 bg-[#614545]"></span>
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 mx-2 object-contain"
        />
        <span className="w-64 h-1 bg-[#614545]"></span>
      </div>
      <ServiceGrid />
    </>
  );
};

export default Other;

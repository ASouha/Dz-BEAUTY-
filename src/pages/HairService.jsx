import React from 'react';
import { useTranslation } from 'react-i18next'; 
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import logo from "../assets/images/LOGO-DZ-BEAUTY.png";
import cheveux_lux from '../assets/images/cheuv_lux.png';
import c1 from "../assets/images/c1.jpg";
import c2 from '../assets/images/c2.jpg';

const services = [
  {
    id: 1,
    image: c1, // Remplace par les bonnes images
    title: "Service 1",
    date: "Jan 1",
    time: "10:00 - 16:00",
    description: "Description du service 1",
  },
  {
    id: 2,
    image: c2, // Remplace par les bonnes images
    title: "Service 2",
    date: "Jan 2",
    time: "11:00 - 15:00",
    description: "Description du service 2",
  },
  // Ajoute plus de services ici si nécessaire
];

const HairService = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <Navbar />
      <Hero
        image={cheveux_lux}
        title={t("luxurious_hair_title")} 
        description={t("luxurious_hair_description")}
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

      {/* Code du grid directement intégré dans le composant */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {service.date} | {service.time}
                  </p>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HairService;

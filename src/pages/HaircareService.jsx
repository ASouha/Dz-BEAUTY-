import React from 'react';
import { useTranslation } from 'react-i18next'; 
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import logo from "../assets/images/LOGO-DZ-BEAUTY.png";
import cheuvcare from '../assets/images/cheuvcare.png';
import coiff1 from "../assets/images/coiff1.jpg";
import coiff2 from '../assets/images/coiff2.jpg';


const myServices = [
  {
    id: 1,
    image: coiff1,
    title: "SKINCARE DAY",
    date: "Mai 5",
    time: "10:00 - 16:00",
    description: "Découvrez nos soins de peau exceptionnels pour une journée relaxante et revigorante.",
  },
  {
    id: 2,
    image: coiff2,
    title: "SKINCARE DAY",
    date: "Mai 6",
    time: "11:00 - 15:00",
    description: "Des soins haut de gamme pour votre bien-être.",
  },
];

const HaircareService = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <Navbar />
      <Hero
        image={cheuvcare}
        title={t("healthy_hair_title")} 
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

     
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
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

export default HaircareService;

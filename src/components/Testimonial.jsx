import React from "react";
import offre from "../assets/images/meuf_offre.png";
import { useTranslation } from 'react-i18next'; // Import de useTranslation

const PromoSection = () => {
  const { t } = useTranslation(); // Initialisation de t() pour la traduction

  return (
    <section className="relative bg-white py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={offre}
            alt={t('promo_section.title')} // Traduction du texte alternatif
            className="rounded-full w-3/4 md:w-full max-w-sm object-cover shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            {t('promo_section.title')} {/* Traduction du titre */}
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            {t('promo_section.description')} {/* Traduction de la description */}
          </p>
          <div className="text-5xl font-bold text-[#614545]">
            {t('promo_section.discount')} {/* Traduction du texte de réduction */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;


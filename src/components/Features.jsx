
import React from "react";
import { Link } from "react-router-dom";
import cheveuxIcon from "../assets/images/cheveux_icon.png";
import nailsIcon from "../assets/images/nails_icon.png";
import makeupIcon from "../assets/images/makeup_icon.png";
import skincareIcon from "../assets/images/skin_icon.png";
import haircareIcon from "../assets/images/hair_icon.png";
import otherIcon from "../assets/images/other_icon.png";
import logo from "../assets/images/LOGO-DZ-BEAUTY.png";
import { useTranslation } from 'react-i18next'; // Import de useTranslation

const ExploreCategories = () => {
  const { t } = useTranslation(); // Initialisation de t() pour la traduction

  const categories = [
    { id: 1, label: t('explore_categories_section.categories.hair'), icon: cheveuxIcon, path: "/HairService" },
    { id: 2, label: t('explore_categories_section.categories.nails'), icon: nailsIcon, path: "/NailsService" },
    { id: 3, label: t('explore_categories_section.categories.makeup'), icon: makeupIcon, path: "/MakeupService" },
    { id: 4, label: t('explore_categories_section.categories.skincare'), icon: skincareIcon, path: "/SkincareService" },
    { id: 5, label: t('explore_categories_section.categories.haircare'), icon: haircareIcon, path: "/HaircareService" },
    { id: 6, label: t('explore_categories_section.categories.other'), icon: otherIcon, path: "/Other" },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="flex items-center justify-center mb-4">
        <span className="w-64 h-1 bg-[#614545]"></span> {/* Ligne gauche */}
        <img
          src={logo} // Remplacez par le chemin de votre logo
          alt={t('explore_categories_section.title')} // Texte alternatif pour le logo
          className="w-20 h-20 mx-2 object-contain"
        />
        <span className="w-64 h-1 bg-[#614545]"></span> {/* Ligne droite */}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[#614545]">
          {t('explore_categories_section.title')} {/* Traduction du titre */}
        </h2>
        <p className="mt-2 text-gray-600">
          {t('explore_categories_section.description')} {/* Traduction de la description */}
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-16 flex-wrap">
        {categories.map((category) => (
          <Link key={category.id} to={category.path}>
            <div className="flex flex-col items-center bg-[#D9D9D9] rounded-full p-4 w-28 h-28  shadow-md hover:shadow-lg transition">
              {/* Utilisation de la balise <img> */}
              <img
                src={category.icon} // Utilisation de la variable d'import
                alt={category.label} // Texte alternatif
                className="w-12 h-12 object-contain" // Ajuste la taille ici
              />
              <span className="mt-2 text-sm font-medium text-gray-700">
                {category.label} {/* Nom de la catégorie traduit */}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategories;

import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log(`Changement de langue : ${lng}`);
    i18n.changeLanguage(lng);
  };
  

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('fr')} className="p-2">
        Français
      </button>
      <button onClick={() => changeLanguage('ar')} className="p-2">
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;


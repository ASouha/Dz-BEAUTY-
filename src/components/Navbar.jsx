import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import LanguageSwitcher from './LanguageSwitcher'; 


import LOGO_DZ_BEAUTY from '../assets/images/LOGO-DZ-BEAUTY.png';

const Navbar = () => {
  const { t } = useTranslation(); 
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      
      <div className="flex items-center justify-between">
        
        <div className="pt-2">
          <img src={LOGO_DZ_BEAUTY} alt="Logo DZ Beauty" className="w-24" />
        </div>

        
        <div className="hidden space-x-6 md:flex text-[#614545] font-semibold">
          <Link to="/" className="hover:text-gray-500 transition">
            {t('home')} 
          </Link>
          <Link to="/Features" className="hover:text-gray-500 transition">
            {t('categories')}
          </Link>
          <Link to="#" className="hover:text-gray-500 transition">
            {t('points')} 
          </Link>
          <Link to="FidelityProgram" className="hover:text-gray-500 transition">
            {t('offers')} 
          </Link>
        </div>

        
        <div className="hidden md:flex gap-3">
          <Link
            to="#"
            className="p-3 px-6 font-bold text-white bg-[#614545] rounded-full hover:bg-gray-300 hover:text-[#614545] transition"
          >
            {t('signup')} 
          </Link>
          <Link
            to="#"
            className="p-3 px-6 font-bold text-[#614545] border-2 border-[#614545] rounded-full hover:bg-[#614545] hover:text-white transition"
          >
            {t('login')} 
          </Link>
        </div>

        
        <div className="hidden md:flex">
          <LanguageSwitcher />
        </div>

        
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div className={`hamburger ${toggleMenu ? "open" : ""}`}>
            <span className="hamburger-top bg-[#614545]"></span>
            <span className="hamburger-middle bg-[#614545]"></span>
            <span className="hamburger-bottom bg-[#614545]"></span>
          </div>
        </button>
      </div>

      
      <div
        className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white drop-shadow-md md:hidden left-6 right-6 transition ${toggleMenu ? "flex" : "hidden"}`}
      >
        <Link to="#" className="text-[#614545] hover:text-gray-500">
          {t('home')}
        </Link>
        <Link to="#" className="text-[#614545] hover:text-gray-500">
          {t('categories')}
        </Link>
        <Link to="#" className="text-[#614545] hover:text-gray-500">
          {t('points')}
        </Link>
        <Link to="#" className="text-[#614545] hover:text-gray-500">
          {t('offers')}
        </Link>

        
        <div className="mt-4">
          <LanguageSwitcher /> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

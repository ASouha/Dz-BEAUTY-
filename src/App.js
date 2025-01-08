import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import HairService from './pages/HairService';
import NailsService from './pages/NailsService';
import MakeupService from './pages/MakeupService';
import SkincareService from './pages/SkincareService';
import HaircareService from './pages/HaircareService';
import Other from './pages/Other';
import './i18n'; // Importer le fichier de configuration i18next
import FidelityProgram from './pages/FidelityProgram';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
      <Route path="/HairService" element={<HairService />} /> {/* Route pour la deuxième page */}
      <Route path="/NailsService" element={<NailsService />} /> {/* Route pour la deuxième page */}
      <Route path="/MakeupService" element={<MakeupService />} /> {/* Route pour la deuxième page */}
      <Route path="/SkincareService" element={<SkincareService />} /> {/* Route pour la deuxième page */}
      <Route path="/HaircareService" element={<HaircareService />} /> {/* Route pour la deuxième page */}
      <Route path="/Other" element={<Other />} /> {/* Route pour la deuxième page */}

      
      <Route path="/FidelityProgram" element={<FidelityProgram />} /> {/* Route pour la deuxième page */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;

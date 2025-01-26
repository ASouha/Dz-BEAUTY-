import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import HairService from './pages/HairService';
import NailsService from './pages/NailsService';
import MakeupService from './pages/MakeupService';
import SkincareService from './pages/SkincareService';
import HaircareService from './pages/HaircareService';
import Other from './pages/Other';
import './i18n'; 
import FidelityProgram from './pages/FidelityProgram';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/HairService" element={<HairService />} /> 
      <Route path="/NailsService" element={<NailsService />} /> 
      <Route path="/MakeupService" element={<MakeupService />} /> 
      <Route path="/SkincareService" element={<SkincareService />} /> 
      <Route path="/HaircareService" element={<HaircareService />} /> 
      <Route path="/Other" element={<Other />} /> 

      
      <Route path="/FidelityProgram" element={<FidelityProgram />} /> 
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;

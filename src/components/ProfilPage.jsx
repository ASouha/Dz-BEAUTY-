import React from "react";
import pp from "../assets/pp.png";
import icon from "../assets/mapicon.png";
const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        <img
          src={pp}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-xl font-bold text-gray-800">Natasha Kim</h1>
        <p className="text-sm text-gray-500 mt-2">
          Spécialiste Des Soins Capillaires | Défenseur Des Cheveux Sains | Innovateur De Style
        </p>
        <div className="flex items-center justify-center mt-3 text-[#B19494]">
        <img
          src={icon}
          className="w-9 h-9 "
        />
          Alger, Algeria
        </div>
        
        <div className="flex justify-around mt-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">29</h2>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">290</h2>
            <p className="text-sm text-gray-500">Services</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-700">Mon Travail</h2>
        
      </div>
    </div>
  );
};

export default ProfilePage;

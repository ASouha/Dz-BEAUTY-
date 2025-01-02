import React from "react";
import hair from "../assets/SkinCare.png";

const HairCareDay = () => {
  return (
    <div className="bg-[#E3E2E2] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#4a2c2c]">HairCARE DAY</h1>
          <p className="text-gray-700 mt-2">
          La Journée des soins de la peau est axée sur le rajeunissement, l’hydratation et l’éclat. Laissez-nous
            vous aider à obtenir une peau saine et radieuse grâce à nos soins experts et
            produits haut de gamme.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src={hair}
            alt="HairCare"
            className="rounded-lg w-full max-h-96 object-cover"
          />
        </div>
      </div>

      
      <div className="flex items-center mt-6">
        <img
          src={hair}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <p className="ml-4 text-lg font-medium">Natasha Kim</p>
      </div>

      
      <div className="flex items-center mt-6 space-x-8">
        <div className="flex items-center text-gray-600">
          <span className="material-icons">location_on</span>
          <p className="ml-2">New York, USA</p>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="material-icons">attach_money</span>
          <p className="ml-2">$120</p>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="material-icons">calendrier</span>
          <p className="ml-2">08:00 AM - 06:00 PM</p>
        </div>
      </div>

      
      <div className="mt-8 flex justify-between">
         <input
           type="button"
            value="Service à ma maison"
          className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg cursor-pointer"
          />
      </div>

      
      <div className="mt-6">
        <button className="w-full bg-[#4a2c2c] text-white py-3 rounded-lg text-lg  font-bold">
        Réservez maintenant
        </button>
      </div>
    </div>
  );
};

export default HairCareDay;

import React from "react";
import "../index.css";
import echec from "../assets/Plain credit card-pana 1.png";

export default function PaymentPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#956E6F]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        {/* Payment Failure Image */}
        <img
          src={echec}// Replace with your actual image path
          alt="Payment Failed"
          className="mx-auto mb-6 w-40"
        />

        {/* Payment Refused Text */}
        <h2 className="text-2xl font-bold text-[#FF725E] mb-4">Paiement refusé</h2>
        <p className="text-gray-600 mb-6">
          Votre paiement n'a pas pu être effectué. Veuillez réessayer ou accéder à une autre page.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-[#FF725E] text-white py-2 px-4 rounded-lg hover:bg-[#FFFFFF] hover:text-black transition">
            Réessayer
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition">
            Acceuil
          </button>
        </div>
      </div>
    </div>
  );
}

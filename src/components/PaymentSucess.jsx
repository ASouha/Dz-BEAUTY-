import React from "react";
import "../index.css";
import success from "../assets/success.png";

export default function PaymentSucess() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#956E6F]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        {/* Payment Failure Image */}
        <img
          src={success}// Replace with your actual image path
          alt="Payment Failed"
          className="mx-auto mb-6 w-40"
        />

        {/* Payment Refused Text */}
        <h2 className="text-2xl font-bold text-[#47B587] mb-4">Paiement success</h2>
        <p className="text-gray-600 mb-6">
          Votre paiement a pu être effectué.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition">
            Acceuil
          </button>
        </div>
      </div>
    </div>
  );
}

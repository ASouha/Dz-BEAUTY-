import React from "react";
import error from "../assets/:404-error-robot.png";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <main className="flex flex-col items-center mt-12">
        <img
          src={error}
          alt="404 Error"
          className="w-1/2 max-w-md mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Vous devez d'abord vous inscrire !</h1>
        <div className="space-x-4">
          <button
            className="px-6 py-2 bg-[#614545] text-white font-medium rounded-lg hover:bg-[#b55465]"
            onClick={() => (window.location.href = "/signup")}
          >
            S'inscrire
          </button>
          <button
            className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-[#b55465] hover:text-white"
            onClick={() => (window.location.href = "/signup")}
          >
            connecter
          </button>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
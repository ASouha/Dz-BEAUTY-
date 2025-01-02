import React from "react";

export default function UArePage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      
      <div className="w-full max-w-[900px] bg-white shadow-lg rounded-[50px] overflow-hidden p-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
         Vous  êtes ?
        </h2>

        
        <div className="flex justify-around items-center">
          
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-[#614545] text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-[#b55465] transition">
              <p className="text-xl font-bold">Prestataire</p>
            </div>
          </div>
                    <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-[#614545] text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-[#b55465] transition">
              <p className="text-xl font-bold">Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


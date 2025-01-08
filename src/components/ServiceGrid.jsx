import React from "react";
import coiff1 from "../assets/images/coiff1.jpg";
import coiff2 from "../assets/images/coiff2.jpg";
const services = [
  {
    id: 1,
    image: coiff1, // Remplace par une vraie image
    title: "SKINCARE DAY",
    date: "Mai 5",
    time: "10:00 - 16:00",
    description:
      "Découvrez nos soins de peau exceptionnels pour une journée relaxante et revigorante.",
  },
  // Ajoute d'autres objets pour les services
  {
    id: 2,
    image: coiff2,
    title: "SKINCARE DAY",
    date: "Mai 6",
    time: "11:00 - 15:00",
    description: "Des soins haut de gamme pour votre bien-être.",
  },
  // Ajoutez plus si nécessaire
];

const ServiceGrid = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {service.date} | {service.time}
                </p>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;

import React, { useState } from 'react';
import photo1 from '../assets/img/photo-1.jpg';
import photo2 from '../assets/img/photo-2.jpg';
import photo3 from '../assets/img/photo-3.jpg';
import photo4 from '../assets/img/photo-4.jpg';
import photo5 from '../assets/img/photo-5.jpg';
import photo6 from '../assets/img/photo-6.jpg';
import photo7 from '../assets/img/photo-7.jpg';

// Liste des créations avec description ajoutée
const creations = [
  { id: 1, name: 'Poupée fait main au tricot', category: 'Tricot', image: photo1, description: 'Jolie poupée fait main au tricot, elle sera très sympa dans une chambre d\'enfant.' },
  { id: 2, name: 'Doudou dans un style Waldorf', category: 'Crochet', image: photo2, description: 'Doudou dans un style Waldorf, très câlin et confortable.' },
  { id: 3, name: 'Jolie doudou style Waldorf', category: 'Crochet', image: photo3, description: 'Jolie doudou style Waldorf, parfait pour une chambre de bébé.' },
  { id: 4, name: 'Mitaines fait main au tricot', category: 'Tricot', image: photo4, description: 'Mitaines fait main au tricot, avec un fil fin et fil mohair tricoté ensemble, pour les journées d\'hiver qui arrivent très vite.' },
  { id: 5, name: 'Chaussettes en dentelles', category: 'Tricot', image: photo5, description: 'Chaussettes en dentelles, taille 36, mais bien entendu réalisables dans toutes les tailles et toutes les couleurs.' },
  { id: 6, name: 'Sac en tricot', category: 'Tricot', image: photo6, description: 'Mon coup de cœur, un sac à crochets tricoté à la main.' },
  { id: 6, name: 'Mitaines en pure laine', category: 'Tricot', image: photo7, description: 'Jolies mitaines en pure laine pour mettre les mains au chaud cet hiver, fait main bien sûr 🙂' },
];

const Creations = () => {
  // État pour la modale
  const [selectedCreation, setSelectedCreation] = useState(null);

  // Fonction pour ouvrir la modale
  const openModal = (creation) => {
    setSelectedCreation(creation);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedCreation(null);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-[#A69491]">Mes Créations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creations.map((creation) => (
          <article
            key={creation.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-200 cursor-pointer"
            onClick={() => openModal(creation)} // Clic sur l'image pour ouvrir la modale
          >
            <img
              src={creation.image}
              alt={creation.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-[#A69491]">{creation.name}</h2>
              <p className="text-gray-600">{creation.category}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modale pour afficher l'image agrandie */}
      {selectedCreation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto relative">
            {/* Bouton de fermeture */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Image agrandie avec taille limitée */}
            <img
              src={selectedCreation.image}
              alt={selectedCreation.name}
              className="w-full max-h-64 sm:max-h-80 lg:max-h-96 object-contain mb-4"
            />

            {/* Titre et catégorie */}
            <h2 className="text-2xl font-semibold mb-2 text-[#A69491]">
              {selectedCreation.name}
            </h2>
            <p className="text-gray-600">{selectedCreation.category}</p>

            {/* Description */}
            <p className="mt-4 text-gray-700">{selectedCreation.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Creations;
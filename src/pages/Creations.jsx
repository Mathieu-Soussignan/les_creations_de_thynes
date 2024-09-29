const creations = [
    { id: 1, name: 'Nounours en crochet', category: 'Crochet', image: '/api/placeholder/300/300' },
    { id: 2, name: 'Sac en tricot', category: 'Tricot', image: '/api/placeholder/300/300' },
    { id: 3, name: 'Écharpe colorée', category: 'Tricot', image: '/api/placeholder/300/300' },
    { id: 4, name: 'Amigurumi chat', category: 'Crochet', image: '/api/placeholder/300/300' },
    { id: 5, name: 'Sac à main en tissu', category: 'Couture', image: '/api/placeholder/300/300' },
    { id: 6, name: 'Bonnet d\'hiver', category: 'Tricot', image: '/api/placeholder/300/300' },
  ];
  
  const Creations = () => {
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-[#4c6941] font-paradise">Mes Créations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creations.map((creation) => (
            <article
              key={creation.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-200"
            >
              <img
                src={creation.image}
                alt={`Création: ${creation.name}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-[#4c6941] font-paradise">{creation.name}</h2>
                <p className="text-gray-600 font-paradise">{creation.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };
  
  export default Creations;
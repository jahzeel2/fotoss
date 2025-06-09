import React from 'react';
import { Wifi, Car, Utensils, Bath, Users, Star, Calendar } from 'lucide-react';

const CabinShowcase = () => {
  const cabins = [
    {
      id: 1,
      name: 'Cabaña Río Azul',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '4-6 personas',
      price: '$150/noche',
      rating: 4.9,
      amenities: ['WiFi', 'Estacionamiento', 'Cocina completa', 'Baño privado'],
      features: ['Vista al río', 'Deck privado', 'Parrilla', 'Aire acondicionado']
    },
    {
      id: 2,
      name: 'Cabaña Bosque Verde',
      image: 'https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '2-4 personas',
      price: '$120/noche',
      rating: 4.8,
      amenities: ['WiFi', 'Estacionamiento', 'Cocina completa', 'Baño privado'],
      features: ['Rodeada de naturaleza', 'Chimenea', 'Hamacas', 'Zona de lectura']
    },
    {
      id: 3,
      name: 'Cabaña Atardecer',
      image: 'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '6-8 personas',
      price: '$200/noche',
      rating: 5.0,
      amenities: ['WiFi', 'Estacionamiento', 'Cocina completa', 'Baño privado'],
      features: ['Vista panorámica', 'Jacuzzi exterior', 'Sala de estar amplia', 'Terraza grande']
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi size={16} />;
      case 'estacionamiento': return <Car size={16} />;
      case 'cocina completa': return <Utensils size={16} />;
      case 'baño privado': return <Bath size={16} />;
      default: return <Users size={16} />;
    }
  };

  return (
    <section id="cabins" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestras Cabañas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada cabaña está diseñada para brindarte la máxima comodidad en un entorno natural único.
            Elige la perfecta para tu escapada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabins.map((cabin) => (
            <div
              key={cabin.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{cabin.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{cabin.name}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{cabin.price}</p>
                    <p className="text-sm text-gray-500">{cabin.capacity}</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenidades</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cabin.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Características</h4>
                  <div className="flex flex-wrap gap-1">
                    {cabin.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Calendar size={18} />
                  <span>Reservar Ahora</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabinShowcase;
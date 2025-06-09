import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Star } from 'lucide-react';

const NauticalActivities = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    {
      id: 1,
      name: 'Paseos en Lancha',
      image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Explora el río en nuestras modernas lanchas con guía experimentado',
      duration: '2-3 horas',
      capacity: 'Hasta 8 personas',
      price: '$80 por persona',
      rating: 4.9,
      includes: ['Guía profesional', 'Chaleco salvavidas', 'Refrigerios', 'Fotos']
    },
    {
      id: 2,
      name: 'Fly Fishing',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pesca con mosca en los mejores spots del río con instructores certificados',
      duration: '4-6 horas',
      capacity: 'Hasta 4 personas',
      price: '$120 por persona',
      rating: 5.0,
      includes: ['Equipo completo', 'Instructor certificado', 'Licencia de pesca', 'Almuerzo']
    },
    {
      id: 3,
      name: 'Alquiler de Kayaks',
      image: 'https://images.pexels.com/photos/6120213/pexels-photo-6120213.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kayaks individuales y dobles para explorar a tu ritmo',
      duration: 'Por horas',
      capacity: '1-2 personas',
      price: '$25 por hora',
      rating: 4.8,
      includes: ['Kayak y remo', 'Chaleco salvavidas', 'Instrucciones básicas', 'Mapa del río']
    },
    {
      id: 4,
      name: 'Clases de Navegación',
      image: 'https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aprende navegación básica y avanzada con instructores certificados',
      duration: 'Medio día',
      capacity: 'Hasta 6 personas',
      price: '$150 por persona',
      rating: 4.9,
      includes: ['Instructor certificado', 'Material teórico', 'Práctica en agua', 'Certificado']
    }
  ];

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev + 1) % activities.length);
  };

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <section id="activities" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Actividades Náuticas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vive la aventura en el agua con nuestras actividades guiadas y equipos de primera calidad.
          </p>
        </div>

        {/* Main Activity Display */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={activities[currentActivity].image}
                alt={activities[currentActivity].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{activities[currentActivity].rating}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {activities[currentActivity].name}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {activities[currentActivity].description}
              </p>

              {/* Activity Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Duración</p>
                    <p className="font-semibold">{activities[currentActivity].duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-500">Capacidad</p>
                    <p className="font-semibold">{activities[currentActivity].capacity}</p>
                  </div>
                </div>
              </div>

              {/* Includes */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {activities[currentActivity].includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-blue-600">
                    {activities[currentActivity].price}
                  </p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                  Reservar Actividad
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevActivity}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextActivity}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Activity Thumbnails */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {activities.map((activity, index) => (
            <button
              key={activity.id}
              onClick={() => setCurrentActivity(index)}
              className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-200 ${
                index === currentActivity
                  ? 'ring-4 ring-blue-500 scale-110'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NauticalActivities;
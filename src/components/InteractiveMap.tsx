import React from 'react';
import { MapPin, Phone, Clock, Car } from 'lucide-react';

const InteractiveMap = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ubicados en un exclusivo barrio privado rodeado de naturaleza, 
            con fácil acceso y todas las comodidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">El Capricho Resort</h3>
                <p className="text-gray-600 mb-4">Barrio Privado Los Rápidos</p>
                <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                  Ver en Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    Barrio Privado Los Rápidos<br />
                    Km 25 Ruta Provincial 123<br />
                    Villa Carlos Paz, Córdoba
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Car className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cómo Llegar</h3>
                  <p className="text-gray-600">
                    • 45 min desde Córdoba Capital<br />
                    • 15 min desde Villa Carlos Paz<br />
                    • Estacionamiento gratuito<br />
                    • Acceso pavimentado
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Horarios</h3>
                  <p className="text-gray-600">
                    Check-in: 15:00 hs<br />
                    Check-out: 11:00 hs<br />
                    Recepción: 24 hs<br />
                    Actividades: 08:00 - 18:00 hs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Contacto</h3>
                  <p className="text-gray-600">
                    Tel: +54 9 3541 123456<br />
                    WhatsApp: +54 9 3541 123456<br />
                    Email: info@elcaprichoresort.com<br />
                    Web: www.elcaprichoresort.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  Calendar,
  Star,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">El Capricho</h3>
                <p className="text-sm text-gray-400">Resort & Náutica</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tu refugio perfecto en la naturaleza. Vive experiencias únicas en un entorno 
              privilegiado con todas las comodidades y actividades náuticas de primer nivel.
            </p>
            
            {/* Awards/Certifications */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">5 Estrellas</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Certificado</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cabins" className="text-gray-300 hover:text-white transition-colors">
                  Cabañas
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-300 hover:text-white transition-colors">
                  Actividades
                </a>
              </li>
              <li>
                <a href="#store" className="text-gray-300 hover:text-white transition-colors">
                  Tienda
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-gray-300 hover:text-white transition-colors">
                  Experiencias
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Alojamiento en Cabañas</li>
              <li className="text-gray-300">Paseos en Lancha</li>
              <li className="text-gray-300">Fly Fishing</li>
              <li className="text-gray-300">Alquiler de Kayaks</li>
              <li className="text-gray-300">Clases de Navegación</li>
              <li className="text-gray-300">Eventos Privados</li>
              <li className="text-gray-300">Tienda Náutica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Barrio Privado Los Rápidos<br />
                    Km 25 Ruta Provincial 123<br />
                    Villa Carlos Paz, Córdoba
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+5493541123456" className="text-gray-300 hover:text-white transition-colors">
                  +54 9 3541 123456
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:info@elcaprichoresort.com" className="text-gray-300 hover:text-white transition-colors">
                  info@elcaprichoresort.com
                </a>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-3">Síguenos en:</p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-2">Suscríbete a nuestro newsletter</h4>
              <p className="text-gray-400">Recibe ofertas exclusivas y novedades</p>
            </div>
            <div className="mt-4 md:mt-0 flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-r-lg hover:shadow-lg transition-all duration-200">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} El Capricho Resort & Náutica. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Cancelación
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
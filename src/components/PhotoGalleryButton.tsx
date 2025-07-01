import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';

interface PhotoGalleryButtonProps {
  onClick: () => void;
}

const PhotoGalleryButton: React.FC<PhotoGalleryButtonProps> = ({ onClick }) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4">
          <Camera size={120} />
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-white/20 p-3 rounded-xl">
            <Camera size={32} />
          </div>
          <h3 className="text-2xl font-bold">Galería de Fotos</h3>
        </div>
        
        <p className="text-lg opacity-90 mb-6">
          Explora nuestra colección completa de fotos de actividades náuticas, 
          capturas de pesca y momentos únicos en El Capricho.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Paseos en Lancha</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Pesca con Señuelos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Fly Fishing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Cursos de Pesca</span>
          </div>
        </div>
        
        <button
          onClick={onClick}
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 group"
        >
          <span>Ver Galería Completa</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default PhotoGalleryButton;
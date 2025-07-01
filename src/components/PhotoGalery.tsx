import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, ZoomIn } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'Todas las Fotos', icon: Camera },
    { id: 'boat-tours', name: 'Paseos en Lancha', icon: Camera },
    { id: 'bait-fishing', name: 'Pesca con Señueños', icon: Camera },
    { id: 'fly-fishing', name: 'Fly Fishing', icon: Camera },
    { id: 'fly-course', name: 'Curso Fly Fishing', icon: Camera }
  ];

  const photos: Photo[] = [
    // Paseos en Lancha
    {
      id: 1,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/lanchas-paseos.JPG',
      alt: 'Paseo en lancha al atardecer',
      category: 'boat-tours',
      title: 'Atardecer Dorado',
      description: 'Navegando por las aguas cristalinas durante la hora dorada'
    },
    {
      id: 2,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/paseos%20en%20lancha/IMG-20250624-WA0151.jpg',
      alt: 'Lancha navegando en el río',
      category: 'boat-tours',
      title: 'Explorando el Río',
      description: 'Descubriendo rincones únicos del río'
    },
    {
      id: 3,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/paseos%20en%20lancha/IMG-20250624-WA0154.jpg',
      alt: 'Familia disfrutando del paseo',
      category: 'boat-tours',
      title: 'Momentos en Familia',
      description: 'Creando recuerdos inolvidables en el agua'
    },
    {
      id: 4,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/paseos%20en%20lancha/IMG-20250624-WA0180.jpg',
      alt: 'Vista panorámica desde la lancha',
      category: 'boat-tours',
      title: 'Vistas Panorámicas',
      description: 'Las mejores vistas solo se ven desde el agua'
    },

    // Pesca con Carnada
    {
      id: 5,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/WhatsApp%20Image%202025-06-24%20at%2012.51.32.jpeg',
      alt: 'Pescador con gran captura',
      category: 'fly-fishing',
      title: 'Gran Captura',
      description: 'Dorado de 8kg capturado con mosca artesanal'
    },
    {
      id: 6,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/pesca-bait.jpeg',
      alt: 'Preparando carnada',
      category: 'bait-fishing',
      title: 'Preparación Perfecta',
      description: 'Vistas paradisíacas para pescadores'
    },
    {
      id: 7,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/IMG-20250624-WA0080.jpg',
      alt: 'Pesca desde Islas',
      category: 'bait-fishing',
      title: 'Pesca de Orilla',
      description: 'Los mejores spots para pesca con Artificiales'
    },
    {
      id: 8,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/primo-airel.jpeg',
      alt: 'Equipo de pesca con carnada',
      category: 'bait-fishing',
      title: 'Equipo Profesional',
      description: 'Cañas y reels especializados para pesca pesada'
    },

    // Fly Fishing
    {
      id: 9,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/JOSE-JAHZEEL-ARIEL-LAMEJORATENCION.jpg',
      alt: 'Lanzamiento perfecto de fly fishing',
      category: 'fly-fishing',
      title: 'Paradas a comer en lugares soñados',
      description: 'Técnica de lanzamiento en aguas cristalinas'
    },
    {
      id: 10,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/IMG-20250624-WA0092.jpg',
      alt: 'Trucha capturada con mosca',
      category: 'fly-fishing',
      title: 'El Rey del Rio',
      description: 'Hermoso Dorado'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pescador en el río',
      category: 'fly-fishing',
      title: 'En su Elemento',
      description: 'La paciencia y técnica del fly fishing'
    },
    {
      id: 12,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/mosca-para-dorado.jpg',
      alt: 'Colección de moscas',
      category: 'fly-fishing',
      title: 'Moscas Artesanales',
      description: 'Mosca especial para dorados'
    },

    // Curso de Fly Fishing
    {
      id: 13,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/practica%20fly.jpg',
      alt: 'Instructor enseñando técnica',
      category: 'fly-course',
      title: 'Alumnos Aprendiendo la Técnica',
      description: 'Instructor certificado enseñando lanzamiento básico'
    },
    {
      id: 14,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/nenito.JPG',
      alt: 'Estudiante practicando',
      category: 'fly-course',
      title: 'Práctica Supervisada',
      description: 'Estudiante de todas las edades'
    },
    {
      id: 15,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/atardeceres%20unicos.jpg',
      alt: 'Grupo de estudiantes',
      category: 'fly-course',
      title: 'Curso Grupal pero con atencion individual',
      description: 'Aprendiendo en grupo las bases del fly fishing con atardeceres increibles'
    },
    {
      id: 16,
      src: 'https://raw.githubusercontent.com/jahzeel2/fotoss/refs/heads/main/src/assets/img/pesca/ariel.najle.jpg',
      alt: 'Practicas reales en el rio',
      category: 'fly-course',
      title: 'Primera Captura',
      description: 'Practicas reales en el rio'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
    setCurrentPhotoIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentPhotoIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Galería de Fotos
              </h1>
              <p className="text-gray-600 mt-2">
                Revive los mejores momentos de nuestras actividades náuticas
              </p>
            </div>
            <button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(photo)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn 
                    size={32} 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">{photo.title}</h3>
                <p className="text-sm text-gray-600">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <Camera size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No hay fotos en esta categoría
            </h3>
            <p className="text-gray-500">
              Selecciona otra categoría para ver más fotos
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Photo Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
              <p className="text-lg opacity-90">{selectedPhoto.description}</p>
              <div className="mt-2 text-sm opacity-70">
                {currentPhotoIndex + 1} de {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
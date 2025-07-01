import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import CabinShowcase from './components/CabinShowcase';
import NauticalActivities from './components/NauticalActivities';
import VirtualStore from './components/VirtualStore';
import InteractiveMap from './components/InteractiveMap';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ContactForm from './components/ContactForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGalery';
import PhotoGalleryButton from './components/PhotoGalleryButton';

function App() {
 const [showPhotoGallery, setShowPhotoGallery] = useState(false);

  useEffect(() => {
    const handleShowPhotoGallery = () => {
      setShowPhotoGallery(true);
    };

    window.addEventListener('showPhotoGallery', handleShowPhotoGallery);
    
    return () => {
      window.removeEventListener('showPhotoGallery', handleShowPhotoGallery);
    };
  }, []);

  if (showPhotoGallery) {
    return <PhotoGallery />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <CabinShowcase />
      <NauticalActivities />
      
      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Momentos Únicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre a través de nuestras fotos la magia de cada experiencia en El Capricho.
              Desde emocionantes capturas de pesca hasta tranquilos paseos en lancha.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <PhotoGalleryButton onClick={() => setShowPhotoGallery(true)} />
          </div>
        </div>
      </section>
      
      <VirtualStore />
      <InteractiveMap />
      <TestimonialsCarousel />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
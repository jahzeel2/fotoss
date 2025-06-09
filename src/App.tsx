import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <CabinShowcase />
      <NauticalActivities />
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
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Buenos Aires',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'Marzo 2024',
      text: 'Una experiencia increíble. Las cabañas son hermosas y muy cómodas. El servicio es excepcional y las actividades náuticas son fantásticas. Definitivamente volveremos el próximo año.',
      activity: 'Fly Fishing'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      location: 'Córdoba',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'Febrero 2024',
      text: 'El lugar perfecto para desconectar y disfrutar en familia. Los chicos se divirtieron muchísimo con los kayaks y nosotros disfrutamos de la tranquilidad. Todo impecable.',
      activity: 'Familia'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      location: 'Rosario',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'Enero 2024',
      text: 'Celebramos nuestro aniversario aquí y fue mágico. La cabaña Atardecer es espectacular, el jacuzzi bajo las estrellas fue inolvidable. Atención personalizada de primera.',
      activity: 'Romántico'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      location: 'Mendoza',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: 'Diciembre 2023',
      text: 'Como pescador experimentado, puedo decir que es uno de los mejores lugares que conozco. Los guías son muy profesionales y conocen todos los secretos del río. Excelente.',
      activity: 'Pesca Deportiva'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experiencia El Capricho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo que dicen nuestros huéspedes sobre su estadía. 
            Testimonios reales de quienes vivieron la experiencia completa.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote size={80} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto md:mx-0 mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <div className="flex justify-center md:justify-start mb-2">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].date}
                  </p>
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {testimonials[currentTestimonial].activity}
                    </span>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <p className="text-gray-600">Calificación Promedio</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-gray-600">Huéspedes Satisfechos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">98%</div>
            <p className="text-gray-600">Recomendaciones</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5</div>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
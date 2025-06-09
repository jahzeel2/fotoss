import React, { useState } from 'react';
import { ShoppingCart, Filter, Star, Heart } from 'lucide-react';

const VirtualStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Todos', count: 24 },
    { id: 'nautical', name: 'Náutica', count: 8 },
    { id: 'fishing', name: 'Pesca', count: 6 },
    { id: 'camping', name: 'Camping', count: 7 },
    { id: 'gifts', name: 'Regalos', count: 3 }
  ];

  const products = [
    {
      id: 1,
      name: 'Chaleco Salvavidas Pro',
      category: 'nautical',
      image: 'https://images.pexels.com/photos/6120213/pexels-photo-6120213.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Caña de Pescar Fly Premium',
      category: 'fishing',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 299,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      badge: 'Nuevo'
    },
    {
      id: 3,
      name: 'Kit Camping Completo',
      category: 'camping',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 156,
      badge: 'Oferta'
    },
    {
      id: 4,
      name: 'Remera El Capricho',
      category: 'gifts',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 35,
      originalPrice: null,
      rating: 4.6,
      reviews: 67,
      badge: null
    },
    {
      id: 5,
      name: 'Remo Kayak Carbono',
      category: 'nautical',
      image: 'https://images.pexels.com/photos/6120213/pexels-photo-6120213.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 179,
      originalPrice: 210,
      rating: 4.8,
      reviews: 43,
      badge: null
    },
    {
      id: 6,
      name: 'Señuelos Premium Set',
      category: 'fishing',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 89,
      originalPrice: null,
      rating: 4.9,
      reviews: 198,
      badge: 'Popular'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleLike = (productId: number) => {
    setLikedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'Bestseller': return 'bg-blue-500';
      case 'Nuevo': return 'bg-green-500';
      case 'Oferta': return 'bg-red-500';
      case 'Popular': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="store" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tienda Virtual
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra todo lo que necesitas para tus aventuras náuticas y de camping.
            Productos de calidad premium para los más exigentes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {product.badge}
                  </div>
                )}

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200"
                >
                  <Heart
                    size={20}
                    className={likedItems.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                  />
                </button>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reseñas)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full font-semibold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <ShoppingCart size={18} />
                  <span>Agregar al Carrito</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200">
            Ver Más Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default VirtualStore;
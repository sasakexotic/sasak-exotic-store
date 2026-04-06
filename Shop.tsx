import { Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Handwoven Songket Silk",
    price: 120,
    category: "Textiles",
    image: "https://picsum.photos/seed/textile1/600/800",
    rating: 4.9,
    description: "Traditional Sasak handwoven silk with intricate gold thread patterns."
  },
  {
    id: 2,
    name: "Terracotta Lombok Jar",
    price: 85,
    category: "Pottery",
    image: "https://picsum.photos/seed/pottery1/600/800",
    rating: 4.8,
    description: "Hand-molded clay jar with traditional geometric etchings."
  },
  {
    id: 3,
    name: "Carved Teak Mask",
    price: 65,
    category: "Woodwork",
    image: "https://picsum.photos/seed/wood1/600/800",
    rating: 4.7,
    description: "Intricately carved teak wood mask representing ancestral spirits."
  },
  {
    id: 4,
    name: "Batik Indigo Sarong",
    price: 45,
    category: "Textiles",
    image: "https://picsum.photos/seed/textile2/600/800",
    rating: 4.6,
    description: "Natural indigo dyed sarong with traditional Sasak motifs."
  },
  {
    id: 5,
    name: "Woven Rattan Basket",
    price: 35,
    category: "Home",
    image: "https://picsum.photos/seed/basket1/600/800",
    rating: 4.5,
    description: "Durable hand-woven rattan basket for everyday elegance."
  },
  {
    id: 6,
    name: "Silver Filigree Earrings",
    price: 95,
    category: "Jewelry",
    image: "https://picsum.photos/seed/jewelry1/600/800",
    rating: 4.9,
    description: "Exquisite silver filigree work by master Sasak silversmiths."
  }
];

export default function Shop() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Textiles', 'Pottery', 'Woodwork', 'Home', 'Jewelry'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">The Collection</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${filter === cat ? 'bg-sasak-earth text-white border-sasak-earth' : 'bg-transparent text-sasak-deep border-sasak-deep/20 hover:border-sasak-gold'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group"
          >
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-sasak-sand">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4">
                <button className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:bg-sasak-gold hover:text-white transition-all">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <button className="absolute bottom-0 left-0 right-0 py-4 bg-sasak-earth text-white font-medium tracking-widest uppercase text-[10px] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Add to Bag
              </button>
            </div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-sasak-gold mb-1 block">{product.category}</span>
                <h4 className="text-lg font-serif group-hover:text-sasak-gold transition-colors">{product.name}</h4>
              </div>
              <span className="font-medium text-sasak-earth">${product.price}</span>
            </div>
            <div className="flex items-center text-sasak-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'opacity-30'}`} />
              ))}
              <span className="text-[10px] text-sasak-deep/40 ml-2">({product.rating})</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

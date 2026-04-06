import { Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from './Shop';

export default function Category() {
  const { slug } = useParams();
  
  const filteredProducts = PRODUCTS.filter(p => 
    p.category.toLowerCase() === slug?.toLowerCase()
  );

  const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">{categoryName}</h2>
        <div className="w-24 h-1 bg-sasak-gold mx-auto mb-6" />
        <p className="text-sasak-deep/60 max-w-xl mx-auto">
          Explore our curated selection of authentic Sasak {categoryName.toLowerCase()}, handcrafted with love and tradition.
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
      ) : (
        <div className="text-center py-24">
          <p className="text-sasak-deep/40 italic">No items found in this category yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}

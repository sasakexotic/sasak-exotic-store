import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/lombok-landscape/1920/1080"
            alt="Lombok Landscape"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-sasak-sand" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sasak-gold font-medium tracking-[0.4em] uppercase text-sm mb-4 block"
          >
            Timeless Craftsmanship
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            The Soul of <br />
            <span className="italic">Lombok</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/shop" className="px-8 py-4 bg-sasak-gold text-white font-medium tracking-widest uppercase text-xs hover:bg-sasak-earth transition-all duration-300 w-full sm:w-auto text-center">
              Explore Collection
            </Link>
            <Link to="/heritage" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-medium tracking-widest uppercase text-xs hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center">
              Our Heritage
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">Curated Categories</h3>
            <p className="text-sasak-deep/60 max-w-md">Discover the diverse artisanal traditions preserved through generations in the heart of Lombok.</p>
          </div>
          <Link to="/shop" className="flex items-center text-sasak-gold font-medium tracking-widest uppercase text-xs group">
            View All Categories <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Textiles', slug: 'textiles', img: 'textile-cat', count: '42 Items' },
            { name: 'Pottery', slug: 'pottery', img: 'pottery-cat', count: '28 Items' },
            { name: 'Woodwork', slug: 'woodwork', img: 'wood-cat', count: '15 Items' }
          ].map((cat, i) => (
            <Link
              key={cat.name}
              to={`/category/${cat.slug}`}
              className="relative aspect-[4/5] group overflow-hidden cursor-pointer block"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full w-full"
              >
                <img
                  src={`https://picsum.photos/seed/${cat.img}/800/1000`}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-[10px] tracking-[0.3em] uppercase opacity-80 mb-2 block">{cat.count}</span>
                  <h4 className="text-2xl font-serif">{cat.name}</h4>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Heritage Section Preview */}
      <section className="py-24 bg-sasak-earth text-sasak-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://picsum.photos/seed/artisan-working/800/600"
                alt="Artisan at work"
                className="w-full aspect-[4/3] object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-8 -left-8 w-64 h-64 border-8 border-sasak-gold/20 -z-0" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-sasak-gold font-medium tracking-[0.4em] uppercase text-xs mb-4 block">Our Heritage</span>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Preserving the <br /><span className="italic">Art of the Sasak</span></h3>
            <p className="text-sasak-sand/80 mb-8 leading-relaxed text-lg">
              Sasak Exotic was born from a passion to bridge the gap between traditional Lombok artisans and the global stage.
            </p>
            <Link to="/heritage" className="flex items-center text-sasak-gold font-bold tracking-widest uppercase text-xs group">
              Read Our Full Story <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

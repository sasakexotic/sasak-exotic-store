import { ShoppingBag, Search, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 lg:hidden">
                <Menu className={`w-6 h-6 ${!scrolled && isHome ? 'text-white' : 'text-sasak-deep'}`} />
              </button>
              <div className={`hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-widest ${!scrolled && isHome ? 'text-white' : 'text-sasak-deep'}`}>
                <Link to="/shop" className="hover:text-sasak-gold transition-colors">Shop</Link>
                <Link to="/artisans" className="hover:text-sasak-gold transition-colors">Artisans</Link>
                <Link to="/heritage" className="hover:text-sasak-gold transition-colors">Heritage</Link>
              </div>
            </div>

            <Link to="/" className="flex-shrink-0 flex flex-col items-center">
              <h1 className={`text-2xl sm:text-3xl font-serif font-bold tracking-tighter ${!scrolled && isHome ? 'text-white' : 'text-sasak-earth'}`}>
                SASAK <span className="text-sasak-gold italic">EXOTIC</span>
              </h1>
              <p className={`text-[10px] tracking-[0.3em] uppercase hidden sm:block ${!scrolled && isHome ? 'text-white/80' : 'text-sasak-deep/60'}`}>Lombok Artisanal Treasures</p>
            </Link>

            <div className={`flex items-center space-x-4 ${!scrolled && isHome ? 'text-white' : 'text-sasak-deep'}`}>
              <button className="p-2 hover:text-sasak-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-sasak-gold transition-colors relative" onClick={() => setCartCount(c => c + 1)}>
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-sasak-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-full max-w-xs bg-sasak-sand z-[70] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-serif font-bold text-sasak-earth">Menu</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col space-y-6 text-2xl font-serif">
                <Link to="/shop" className="hover:text-sasak-gold transition-colors">Shop All</Link>
                <Link to="/category/textiles" className="hover:text-sasak-gold transition-colors">Textiles</Link>
                <Link to="/category/pottery" className="hover:text-sasak-gold transition-colors">Pottery</Link>
                <Link to="/category/woodwork" className="hover:text-sasak-gold transition-colors">Woodwork</Link>
                <Link to="/artisans" className="hover:text-sasak-gold transition-colors">Artisans</Link>
                <Link to="/heritage" className="hover:text-sasak-gold transition-colors">Our Story</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-sasak-deep text-sasak-sand py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-sasak-gold mb-6">
              SASAK <span className="italic text-white">EXOTIC</span>
            </h2>
            <p className="text-sm text-sasak-sand/60 leading-relaxed mb-8">
              Bringing the exotic beauty and artisanal heritage of Lombok to the world. Each piece is a testament to the spirit of the Sasak people.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-sasak-gold transition-colors rounded-full"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-sasak-gold transition-colors rounded-full"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-sasak-gold transition-colors rounded-full"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold tracking-widest uppercase text-xs mb-8">Collections</h5>
            <ul className="space-y-4 text-sm text-sasak-sand/60">
              <li><Link to="/category/textiles" className="hover:text-sasak-gold transition-colors">Handwoven Textiles</Link></li>
              <li><Link to="/category/pottery" className="hover:text-sasak-gold transition-colors">Lombok Pottery</Link></li>
              <li><Link to="/category/woodwork" className="hover:text-sasak-gold transition-colors">Traditional Woodwork</Link></li>
              <li><Link to="/shop" className="hover:text-sasak-gold transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold tracking-widest uppercase text-xs mb-8">Customer Care</h5>
            <ul className="space-y-4 text-sm text-sasak-sand/60">
              <li><a href="#" className="hover:text-sasak-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-sasak-gold transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-sasak-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-sasak-gold transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-sasak-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold tracking-widest uppercase text-xs mb-8">Visit Us</h5>
            <p className="text-sm text-sasak-sand/60 mb-4">
              Jl. Raya Senggigi No. 12<br />
              Lombok Barat, NTB<br />
              Indonesia
            </p>
            <p className="text-sm text-sasak-sand/60">
              Mon - Sat: 09:00 - 20:00<br />
              Sun: 10:00 - 18:00
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-sasak-sand/40">
          <p>© 2024 Sasak Exotic. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-sasak-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sasak-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

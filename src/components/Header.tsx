import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products & Services', path: '/products-services' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleCall = () => {
    window.location.href = 'tel:8825593963';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/KV-logo.png" alt="KV Batteries" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="hidden sm:inline font-bold text-xl text-brand-600 smooth-transition group-hover:text-brand-700">KV Batteries</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium smooth-transition ${
                  isActive(link.path)
                    ? 'text-brand-600 border-b-2 border-brand-600 pb-1'
                    : 'text-gray-700 hover:text-brand-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCall}
              className="hidden sm:flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 btn-hover-lift font-medium"
            >
              <Phone size={18} />
              Call Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-slideInDown">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg smooth-transition ${
                  isActive(link.path)
                    ? 'bg-brand-100 text-brand-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleCall();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 smooth-transition font-medium mt-4"
            >
              <Phone size={18} />
              Call 8825593963
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

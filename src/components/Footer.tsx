import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, AlertCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/KV-logo.png" alt="KV Batteries" className="h-10 w-10" />
              <h3 className="font-bold text-lg">KV Batteries</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted battery service partner in Arumbakkam, Chennai. Quality batteries and professional installation service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products-services" className="hover:text-sky-400 transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Car Batteries</li>
              <li>Inverter Batteries</li>
              <li>Battery Installation</li>
              <li>Roadside Assistance</li>
              <li>Battery Testing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <a href="tel:8825593963" className="hover:text-sky-400 transition-colors">
                  8825593963
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:kv.batteryenterprise@gmail.com" className="hover:text-sky-400 transition-colors break-all">
                  kv.batteryenterprise@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span>Arumbakkam, Chennai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-600 p-3 rounded-full hover:bg-sky-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-600 p-3 rounded-full hover:bg-sky-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.google.com/maps/place/KV+Batteries"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-600 p-3 rounded-full hover:bg-sky-700 transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-right md:text-left">
              <p className="mb-2">
                &copy; {currentYear} KV Batteries. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 justify-end md:justify-start">
                <AlertCircle size={14} />
                <span>Authorized Dealer: Exide | Amaron | Luminous</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

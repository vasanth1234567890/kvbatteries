import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Battery, Zap, Wrench, MapPin, Star, Gauge, Shield, Truck } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20 md:py-28 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center stagger-children">
            <div className="animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-slideInUp">
                Reliable Battery Solutions for Your Vehicle
              </h1>
              <p className="text-xl text-brand-100 mb-8 leading-relaxed animate-slideInUp" style={{animationDelay: '0.2s'}}>
                Professional battery sales and installation service in Arumbakkam. Authorized dealer for Exide, Amaron, and Luminous batteries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slideInUp" style={{animationDelay: '0.4s'}}>
                <button
                  onClick={() => window.location.href = 'tel:8825593963'}
                  className="flex items-center justify-center gap-2 bg-white text-brand-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 btn-hover-lift ripple-effect"
                >
                  <Phone size={20} />
                  Call Now: 8825593963
                </button>
                <a
                  href="https://wa.me/8825593963?text=Hi%20KV%20Batteries%2C%20I%20need%20battery%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 btn-hover-lift smooth-transition"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center animate-slideInRight">
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center opacity-90 shadow-2xl animate-float">
                <Battery size={150} className="text-brand-600 animate-bounce2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Complete battery solutions for cars, inverters, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              { icon: Battery, title: 'Car Batteries', desc: 'High-quality car batteries for all models' },
              { icon: Zap, title: 'Inverter Batteries', desc: 'Reliable backup power solutions' },
              { icon: Wrench, title: 'Installation', desc: 'Professional installation service' },
              { icon: Truck, title: 'Roadside Assistance', desc: 'Emergency battery replacement' },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl btn-hover-lift card-animate text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-brand-600 scale-hover" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 md:py-24 bg-white page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Brands We Serve</h2>
            <p className="text-xl text-gray-600">
              Authorized dealer for premium battery manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              { name: 'Exide', desc: 'India\'s leading battery manufacturer since 1947' },
              { name: 'Amaron', desc: 'Premium automotive and industrial batteries' },
              { name: 'Luminous', desc: 'Reliable backup power solutions' },
            ].map(({ name, desc }, idx) => (
              <div key={idx} className="bg-gradient-to-br from-brand-50 to-brand-100 p-8 rounded-lg border border-brand-200 text-center card-animate hover:shadow-lg">
                <h3 className="text-2xl font-bold text-brand-600 mb-2">{name}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose KV Batteries?</h2>
            <p className="text-xl text-gray-600">
              Your trusted battery service partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              { icon: Shield, title: 'Certified Service', desc: 'Professional certified technicians with years of experience' },
              { icon: Star, title: 'Quality Guarantee', desc: 'Authentic batteries with full warranty coverage' },
              { icon: Gauge, title: 'Free Testing', desc: 'Complimentary battery testing and diagnosis' },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md card-animate hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <Icon className="text-brand-600 flex-shrink-0 mt-1 scale-hover" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Coverage */}
      <section className="py-16 md:py-24 bg-white page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center stagger-children">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Located in Arumbakkam</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Serving Chennai and surrounding areas with professional battery solutions. We're conveniently located in Arumbakkam for easy access.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-600 flex-shrink-0 mt-1 scale-hover" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">Service Areas</h3>
                    <p className="text-gray-600">Arumbakkam, Ambattur, Maduravoyal, and all of Chennai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-brand-600 flex-shrink-0 mt-1 scale-hover" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">Quick Contact</h3>
                    <p className="text-gray-600">8825593963 (Call & WhatsApp)</p>
                  </div>
                </div>
              </div>
              <a href="/contact" className="inline-block mt-8 bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 btn-hover-lift">
                Get Directions
              </a>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 animate-slideInRight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.412835489615!2d80.19!3d13.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5c4a4a4a4d%3A0x5e52a1234567890!2sArumbakkam%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20 page-transition">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6">Need Battery Service?</h2>
          <p className="text-xl text-brand-100 mb-8">
            Contact us today for quick and reliable battery solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = 'tel:8825593963'}
              className="flex items-center justify-center gap-2 bg-white text-brand-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 btn-hover-lift ripple-effect"
            >
              <Phone size={20} />
              Call Now
            </button>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-brand-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-400 btn-hover-lift smooth-transition"
            >
              Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Award, Users, MapPin, CheckCircle, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-16 md:py-24 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slideInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About KV Batteries</h1>
          <p className="text-xl text-brand-100 max-w-3xl">
            Your trusted partner for reliable battery solutions in Arumbakkam, Chennai
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center stagger-children">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                KV Batteries has been serving the Chennai community for years with dedication to quality and customer satisfaction. We started with a simple mission: to provide reliable battery solutions at fair prices with exceptional service.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Today, we've become the trusted choice for thousands of customers across Arumbakkam and surrounding areas. Our expertise spans across car batteries, inverter batteries, and industrial power solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on honest pricing, professional installation, and after-sales support that goes beyond expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-100 to-brand-50 p-12 rounded-lg animate-slideInRight">
              <div className="space-y-6">
                <div className="text-center card-animate">
                  <div className="text-5xl font-bold text-brand-600 mb-2">10+</div>
                  <p className="text-gray-700">Years of Service</p>
                </div>
                <div className="text-center card-animate" style={{animationDelay: '0.1s'}}>
                  <div className="text-5xl font-bold text-brand-600 mb-2">5000+</div>
                  <p className="text-gray-700">Happy Customers</p>
                </div>
                <div className="text-center card-animate" style={{animationDelay: '0.2s'}}>
                  <div className="text-5xl font-bold text-brand-600 mb-2">100%</div>
                  <p className="text-gray-700">Authentic Batteries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: Award,
                title: 'Quality First',
                desc: 'We only stock authentic, high-quality batteries from trusted manufacturers. No compromises on quality.'
              },
              {
                icon: Users,
                title: 'Customer Care',
                desc: 'Your satisfaction is our priority. We provide honest advice and transparent pricing for all services.'
              },
              {
                icon: Zap,
                title: 'Expertise',
                desc: 'Our trained technicians bring years of experience to ensure perfect installation and service.'
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md card-animate hover:shadow-lg">
                <Icon className="text-brand-600 mb-4 scale-hover" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Coverage</h2>
            <p className="text-xl text-gray-600">
              We serve all of Chennai and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-12 rounded-lg border border-brand-200 card-animate hover:shadow-lg">
              <MapPin className="text-brand-600 mb-4 scale-hover" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Location</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Arumbakkam, Chennai</strong><br />
                We're centrally located for convenient access
              </p>
              <a
                href="https://share.google/FlGYAR7Uj77kPv3DT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-semibold hover:text-brand-700 smooth-transition"
              >
                View on Google Maps →
              </a>
            </div>

            <div className="bg-gradient-to-br from-brand-100 to-brand-50 p-12 rounded-lg border border-brand-200 card-animate hover:shadow-lg" style={{animationDelay: '0.1s'}}>
              <Zap className="text-brand-600 mb-4 scale-hover" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  Arumbakkam
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  Ambattur
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  Maduravoyal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  All of Chennai
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-gray-50 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Trust KV Batteries?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[
              'Authorized Dealer for Exide, Amaron & Luminous',
              'Professional Certified Technicians',
              'Authentic Batteries with Full Warranty',
              'Free Battery Testing Service',
              '24/7 Emergency Roadside Assistance',
              'Transparent Pricing Policy',
              'Quick Installation Service',
              'Expert Customer Support',
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md card-animate flex items-start gap-3 hover:shadow-lg">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20 page-transition">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6">Experience the KV Batteries Difference</h2>
          <p className="text-xl text-brand-100 mb-8">
            Contact us today for professional battery solutions
          </p>
          <button
            onClick={() => window.location.href = 'tel:8825593963'}
            className="bg-white text-brand-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 btn-hover-lift ripple-effect inline-block"
          >
            Call 8825593963
          </button>
        </div>
      </section>
    </div>
  );
}

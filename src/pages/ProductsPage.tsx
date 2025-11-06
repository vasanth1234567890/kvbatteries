import { Battery, Zap, Wrench, Truck, Info, Award } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products & Services</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Comprehensive battery solutions for your vehicle and home
          </p>
        </div>
      </section>

      {/* Car Batteries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Battery className="text-sky-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-900">Car Batteries</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We offer a wide range of authentic car batteries for all vehicle models and brands.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Exide Car Batteries - Premium quality & reliability',
                  'Amaron Car Batteries - High performance solutions',
                  'Luminous Car Batteries - Value for money',
                  'Compatible with all car models',
                  'Easy installation with professional service',
                  'Full warranty coverage included',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.location.href = 'tel:8825593963'}
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-700 transition-colors"
              >
                Get Quote
              </button>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-12 rounded-lg flex items-center justify-center h-96">
              <Battery size={200} className="text-sky-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Inverter Batteries */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-sky-100 p-12 rounded-lg flex items-center justify-center h-96 order-2 md:order-1">
              <Zap size={200} className="text-sky-600" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-sky-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-900">Inverter Batteries</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Reliable backup power solutions for uninterrupted electricity supply during outages.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Multiple capacity options (100Ah to 200Ah)',
                  'Suitable for home and office use',
                  'Long lifespan & low maintenance',
                  'High performance tubular technology',
                  'Compatible with all inverter brands',
                  'Fast charging capability',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.location.href = 'tel:8825593963'}
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-700 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Service */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-sky-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-900">Professional Installation</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Expert installation by certified technicians ensuring perfect fitment and performance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free installation with battery purchase',
                  'Certified & experienced technicians',
                  'Proper terminal connections & grounding',
                  'Battery testing before installation',
                  'Old battery disposal service',
                  'Quick service - typically 30 minutes',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.location.href = 'tel:8825593963'}
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-700 transition-colors"
              >
                Schedule Installation
              </button>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-12 rounded-lg flex items-center justify-center h-96">
              <Wrench size={200} className="text-sky-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Roadside Assistance */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-sky-100 p-12 rounded-lg flex items-center justify-center h-96 order-2 md:order-1">
              <Truck size={200} className="text-sky-600" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="text-sky-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-900">Roadside Assistance</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                24/7 emergency battery service when you need it most on the road.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '24/7 emergency service availability',
                  'Quick response time across Chennai',
                  'Carry authentic batteries in van',
                  'On-site battery replacement',
                  'Professional jump-start service',
                  'Roadside battery testing facility',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.location.href = 'tel:8825593963'}
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-700 transition-colors"
              >
                Call Emergency Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Complete battery care solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Info,
                title: 'Battery Testing',
                desc: 'Free professional battery testing to diagnose issues and determine if replacement is needed'
              },
              {
                icon: Award,
                title: 'Warranty Service',
                desc: 'Hassle-free warranty claims and replacement service with valid warranty documentation'
              },
              {
                icon: Zap,
                title: 'Battery Maintenance',
                desc: 'Regular maintenance service to ensure optimal battery performance and longevity'
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <Icon className="text-sky-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Info */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Warranty & Guarantees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Battery Warranty</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Car Batteries: 24-48 months warranty</li>
                <li>• Inverter Batteries: 36-60 months warranty</li>
                <li>• Full coverage for manufacturing defects</li>
                <li>• Replacem ent guarantee</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Guarantee</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Professional installation certification</li>
                <li>• 24/7 customer support</li>
                <li>• Emergency roadside assistance</li>
                <li>• 100% customer satisfaction promise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your Battery?</h2>
          <p className="text-xl text-sky-100 mb-8">
            Contact us for pricing and availability
          </p>
          <button
            onClick={() => window.location.href = 'tel:8825593963'}
            className="bg-white text-sky-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            Call 8825593963
          </button>
        </div>
      </section>
    </div>
  );
}

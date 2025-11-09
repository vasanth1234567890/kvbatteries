import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'car-battery',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            service_type: formData.serviceType,
            message: formData.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'car-battery',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-16 md:py-24 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slideInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-brand-100 max-w-3xl">
            Get in touch with us for battery solutions and service inquiries
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 md:py-24 bg-white page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 stagger-children">
            {/* Phone */}
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-8 rounded-lg border border-brand-200 card-animate hover:shadow-lg">
              <Phone className="text-brand-600 mb-4 scale-hover" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for emergency service</p>
              <a
                href="tel:8825593963"
                className="text-brand-600 font-bold text-lg hover:text-brand-700 smooth-transition"
              >
                8825593963
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-brand-100 to-brand-50 p-8 rounded-lg border border-brand-200 card-animate hover:shadow-lg" style={{animationDelay: '0.1s'}}>
              <Mail className="text-brand-600 mb-4 scale-hover" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <a
                href="mailto:kv.batteryenterprise@gmail.com"
                className="text-brand-600 font-bold text-lg hover:text-brand-700 smooth-transition break-all"
              >
                kv.batteryenterprise@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-8 rounded-lg border border-brand-200 card-animate hover:shadow-lg" style={{animationDelay: '0.2s'}}>
              <MapPin className="text-brand-600 mb-4 scale-hover" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Conveniently located in Arumbakkam</p>
              <a
                href="https://share.google/FlGYAR7Uj77kPv3DT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-bold hover:text-brand-700 smooth-transition"
              >
                View on Maps →
              </a>
            </div>
          </div>

          {/* WhatsApp Option */}
          <div className="bg-green-50 border border-green-200 p-8 rounded-lg mb-16 card-animate hover:shadow-lg">
            <div className="flex items-center gap-4">
              <MessageCircle className="text-green-600 flex-shrink-0" size={40} />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Chat on WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick response for immediate assistance</p>
              </div>
              <a
                href="https://wa.me/8825593963?text=Hi%20KV%20Batteries%2C%20I%20need%20battery%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 smooth-transition flex-shrink-0"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-16 md:py-24 bg-gray-50 page-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 stagger-children">
            {/* Map */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
              <div className="bg-gray-300 rounded-lg overflow-hidden h-96 md:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.412835489615!2d80.19!3d13.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5c4a4a4a4d%3A0x5e52a1234567890!2sArumbakkam%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6 flex items-start gap-3 card-animate">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-bold text-green-900">Message Sent!</h4>
                    <p className="text-green-700 text-sm">We'll contact you shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6 flex items-start gap-3 card-animate">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-bold text-red-900">Error</h4>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 smooth-transition"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 smooth-transition"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 smooth-transition"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 smooth-transition"
                  >
                    <option value="car-battery">Car Battery</option>
                    <option value="inverter-battery">Inverter Battery</option>
                    <option value="installation">Installation Service</option>
                    <option value="roadside-assistance">Roadside Assistance</option>
                    <option value="battery-testing">Battery Testing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 smooth-transition"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-700 btn-hover-lift flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed smooth-transition"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to receive communication from KV Batteries.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 md:py-24 bg-white page-transition">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-8 rounded-lg border border-brand-200 card-animate hover:shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-100 to-brand-50 p-8 rounded-lg border border-brand-200 card-animate hover:shadow-lg" style={{animationDelay: '0.1s'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Service</h3>
              <p className="text-gray-700 mb-4">Available 24/7 for roadside assistance</p>
              <p className="text-xl font-bold text-brand-600">Call 8825593963</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

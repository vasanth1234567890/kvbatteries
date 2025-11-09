import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/8825593963?text=Hi%20KV%20Batteries%2C%20I%20need%20battery%20service', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:8825593963';
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 smooth-transition transform hover:scale-110 active:scale-95 animate-float hover:animate-bounce2"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="flex items-center justify-center w-14 h-14 bg-brand-600 text-white rounded-full shadow-lg hover:bg-brand-700 hover:shadow-brand-600/50 smooth-transition transform hover:scale-110 active:scale-95 btn-glow"
        title="Call Now"
      >
        <Phone size={24} />
      </button>
    </div>
  );
}

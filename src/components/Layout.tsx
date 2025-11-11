import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import FullscreenLogo from './FullscreenLogo';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showFullscreenLogo, setShowFullscreenLogo] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onLogoClick={() => setShowFullscreenLogo(true)} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      <FullscreenLogo
        isOpen={showFullscreenLogo}
        onClose={() => setShowFullscreenLogo(false)}
      />
    </div>
  );
}

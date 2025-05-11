
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300", 
        isScrolled 
          ? "py-4 bg-gameflow-dark/80 backdrop-blur-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Game<span className="text-gameflow-blue">Flow</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#mission" className="text-white/80 hover:text-white transition-colors">Mission</a>
          <a href="#players" className="text-white/80 hover:text-white transition-colors">Players</a>
          <a href="#clubs" className="text-white/80 hover:text-white transition-colors">Clubs</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Stories</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="link" className="text-white">
            Log In
          </Button>
          <Button 
            className="bg-gameflow-orange hover:bg-gameflow-orange/90 text-white"
          >
            Try GameFlow
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;


import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const heroContent = [
    {
      type: 'video',
      src: "https://assets.mixkit.co/videos/preview/mixkit-friends-playing-tennis-on-the-court-4809-large.mp4",
      alt: "Amigos jogando tênis"
    },
    {
      type: 'video',
      src: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-playing-tennis-outdoors-11106-large.mp4",
      alt: "Mulher jogando tênis"
    },
    {
      type: 'video',
      src: "https://assets.mixkit.co/videos/preview/mixkit-kids-playing-soccer-at-a-school-field-12518-large.mp4",
      alt: "Crianças jogando futebol"
    },
    {
      type: 'video',
      src: "https://assets.mixkit.co/videos/preview/mixkit-people-playing-volley-in-the-beach-1584-large.mp4",
      alt: "Pessoas jogando vôlei de praia"
    }
  ];
  
  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, heroContent.length);
  }, [heroContent.length]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroContent.length);
    }, 8000); // Changes every 8 seconds
    
    return () => clearInterval(interval);
  }, [heroContent.length]);

  // Control video playback when active slide changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          console.log(`Attempting to play video ${index}`);
          video.currentTime = 0;
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise.catch(err => console.log(`Video play error:`, err));
          }
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background videos container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Videos */}
        {heroContent.map((item, index) => (
          <div 
            key={`hero-item-${index}`} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100 z-5' : 'opacity-0 z-1'
            }`}
          >
            {item.type === 'video' && (
              <video
                ref={el => { videoRefs.current[index] = el }}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
              >
                <source src={item.src} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            )}
            {item.type === 'image' && (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroContent.map((_, index) => (
          <button 
            key={`indicator-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-gameflow-orange w-6' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gameflow-dark/50 border border-gameflow-orange text-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-gameflow-orange/80"
        onClick={() => setActiveIndex((current) => (current - 1 + heroContent.length) % heroContent.length)}
        aria-label="Slide anterior"
      >
        <span className="sr-only">Anterior</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gameflow-dark/50 border border-gameflow-orange text-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-gameflow-orange/80"
        onClick={() => setActiveIndex((current) => (current + 1) % heroContent.length)}
        aria-label="Próximo slide"
      >
        <span className="sr-only">Próximo</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            GameFlow. <br />
            <span className="text-gradient">Organize the game. </span>
            <span className="block mt-2">Unleash the emotion.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            A plataforma digital onde clubes esportivos e jogadores se conectam para criar momentos inesquecíveis
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="bg-gameflow-orange hover:bg-gameflow-orange/90 text-white px-8 py-6 text-lg rounded-md hover-scale">
              Experimente o GameFlow Agora
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg flex items-center gap-2 rounded-md hover-scale"
            >
              <Play size={18} />
              Assista ao Vídeo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator z-20">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

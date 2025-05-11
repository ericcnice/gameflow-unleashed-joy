
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { AspectRatio } from './ui/aspect-ratio';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroContent.length);
    }, 8000); // Muda a cada 8 segundos
    
    return () => clearInterval(interval);
  }, [heroContent.length]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Carousel 
          className="w-full h-full" 
          opts={{ 
            loop: true,
            watchDrag: false, 
            skipSnaps: true, 
            startIndex: activeIndex,
            align: 'center'
          }}
        >
          <CarouselContent className="h-full">
            {heroContent.map((item, index) => (
              <CarouselItem key={index} className="h-full">
                {item.type === 'video' && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    key={item.src} // Add key for forcing re-render
                  >
                    <source src={item.src} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                )}
                {item.type !== 'video' && (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-20 bg-gameflow-dark/50 border-gameflow-orange text-white hover:bg-gameflow-orange/80" onClick={() => setActiveIndex((current) => (current - 1 + heroContent.length) % heroContent.length)} />
          <CarouselNext className="right-4 z-20 bg-gameflow-dark/50 border-gameflow-orange text-white hover:bg-gameflow-orange/80" onClick={() => setActiveIndex((current) => (current + 1) % heroContent.length)} />
        </Carousel>
      </div>
      
      {/* Indicadores de slide */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroContent.map((_, index) => (
          <button 
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-gameflow-orange w-6' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
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

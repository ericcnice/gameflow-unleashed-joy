
import { Button } from './ui/button';

const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gameflow-blue/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gameflow-green/30 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center animate-enter">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to enter the Flow?</h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join hundreds of clubs that are already transforming their sports spaces into vibrant communities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-gameflow-orange hover:bg-gameflow-orange/90 text-white px-8 py-6 text-lg hover-scale"
            >
              Start for Free at Your Club
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg hover-scale"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;


import { cn } from '@/lib/utils';

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 px-4 relative bg-gradient-to-b from-gameflow-dark to-black">
      {/* Abstract shape */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gameflow-blue/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gameflow-green/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-20 animate-enter">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
          <div className="h-1 w-20 bg-gameflow-blue mx-auto mb-16"></div>
          
          <p className={cn(
            "text-2xl md:text-3xl mb-8 font-light leading-relaxed", 
            "max-w-3xl mx-auto"
          )}>
            We believe sports <span className="text-gameflow-blue font-normal">connect us</span>. 
            <span className="text-gameflow-green font-normal"> Move us</span>. 
            <span className="text-gameflow-orange font-normal"> Heal us</span>.
          </p>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            GameFlow was created to simplify access to play and make every match more fair, fun, and meaningful.
          </p>
          
          <p className="text-xl md:text-2xl font-semibold text-gameflow-blue">
            Where there's play, there can be Flow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

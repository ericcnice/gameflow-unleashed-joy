
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  title, 
  description,
  icon,
  color
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10",
      "hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
    )}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const ClubsSection = () => {
  return (
    <section id="clubs" className="py-24 px-4 bg-gradient-to-b from-black to-gameflow-dark/90">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-enter">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">For Clubs & Managers</h2>
          <div className="h-1 w-20 bg-gameflow-green mx-auto mb-8"></div>
          
          <p className={cn(
            "text-2xl md:text-3xl mb-12 font-light", 
            "max-w-3xl mx-auto"
          )}>
            Turn your sports spaces into <span className="text-gradient font-normal">unforgettable experiences</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <FeatureCard 
            title="Smart Court Management" 
            description="Optimize court usage with automated scheduling and real-time availability tracking." 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>}
            color="bg-gameflow-blue/20 text-gameflow-blue"
          />
          
          <FeatureCard 
            title="Usage Analytics" 
            description="Gain valuable insights into court utilization, peak hours, and player demographics."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>}
            color="bg-gameflow-green/20 text-gameflow-green"
          />
          
          <FeatureCard 
            title="Rule Automation" 
            description="Set court time limits, pricing rules, and booking policies that run automatically."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>}
            color="bg-gameflow-orange/20 text-gameflow-orange"
          />
          
          <FeatureCard 
            title="Digital Payments" 
            description="Process court fees, membership dues, and tournament entries seamlessly."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>}
            color="bg-gameflow-yellow/20 text-gameflow-yellow"
          />
          
          <FeatureCard 
            title="Member Engagement" 
            description="Create a vibrant community with tournaments, leagues, and social events."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>}
            color="bg-gameflow-blue/20 text-gameflow-blue"
          />
          
          <FeatureCard 
            title="Custom Branding" 
            description="Present your club's unique identity through the digital experience."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>}
            color="bg-gameflow-green/20 text-gameflow-green"
          />
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-gameflow-green hover:bg-gameflow-green/90 text-white px-8 py-6 text-lg hover-scale"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;

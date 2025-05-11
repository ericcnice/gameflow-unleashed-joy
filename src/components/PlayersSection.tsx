
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const PlayerFeature = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
      <CheckCircle className="text-gameflow-blue flex-shrink-0" size={24} />
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const PlayersSection = () => {
  return (
    <section id="players" className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-enter">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience for Players</h2>
            <div className="h-1 w-20 bg-gameflow-blue mb-10"></div>
            
            <p className={cn(
              "text-xl md:text-2xl mb-10 font-light", 
              "max-w-xl"
            )}>
              <span className="text-gameflow-orange font-normal">Arrive. Scan. Play.</span> No paper. No confusion.
            </p>
            
            <div className="space-y-6">
              <PlayerFeature 
                title="Effortless Check-in" 
                description="Simply scan a QR code when you arrive at the club to join the queue or check in for your reservation."
              />
              
              <PlayerFeature 
                title="Live Scoreboards" 
                description="Track match scores in real-time and share your achievements with friends and fellow players."
              />
              
              <PlayerFeature 
                title="Digital Queue" 
                description="See exactly when your court will be available and get notified when it's your turn to play."
              />
              
              <PlayerFeature 
                title="Player Community" 
                description="Connect with other players, find partners for matches, and join local tournaments."
              />
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Tennis players celebrating" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-2xl font-semibold mb-2">Track your spot. Share your wins.</p>
              <p className="text-lg text-white/80">Join the community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;

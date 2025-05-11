
import { cn } from '@/lib/utils';

const TestimonialCard = ({
  quote,
  author,
  role,
  imageSrc
}: {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
}) => {
  return (
    <div className={cn(
      "bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10",
      "flex flex-col h-full"
    )}>
      <div className="mb-6">
        <svg className="h-8 w-8 text-gameflow-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-lg mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <img 
          src={imageSrc} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-white/70">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-gameflow-dark/90 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-enter">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Stories</h2>
          <div className="h-1 w-20 bg-gameflow-orange mx-auto mb-8"></div>
          
          <p className={cn(
            "text-xl md:text-2xl text-white/80", 
            "max-w-2xl mx-auto"
          )}>
            From club managers to casual players, hear how GameFlow is transforming the sports experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Now our club feels like a real hub. Everyone wants to play, and the digital queue has eliminated all arguments about whose turn it is."
            author="João Pereira"
            role="Beach Tennis Player"
            imageSrc="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          
          <TestimonialCard 
            quote="As a club manager, I finally have data on court usage. We've optimized our schedule and increased revenue by 30% in just three months."
            author="Maria Santos"
            role="Tennis Club Manager"
            imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
          />
          
          <TestimonialCard 
            quote="GameFlow has created a community around our squash courts. I've met new players, improved my game, and even joined a local tournament."
            author="Carlos Mendes"
            role="Squash Enthusiast"
            imageSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

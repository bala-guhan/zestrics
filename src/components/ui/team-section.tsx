
import { TextAnimate } from "../magicui/text-animate";
import { ShinyButton } from "../magicui/shiny-button";

export const TeamSection = () => {
  return (
    <section id="team-section" className="bg-white">
    <section className="relative px-4 md:px-32 overflow-hidden">
      {/* Content Container with Image Background */}
      <div 
        className="relative z-10 w-full h-[600px] rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url(/group-photo.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)'
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl mb-2 text-white font-bold">Meet Our Team</h2>
            <TextAnimate className="text-white/80 max-w-2xl mx-auto">
              The passionate minds behind Zestrics' success
            </TextAnimate>

            <div className="flex flex-row text-center items-center justify-center gap-4">
            <ShinyButton className="bg-white rounded-2xl mt-2">
              Learn more
            </ShinyButton>
            <ShinyButton className="bg-white rounded-2xl mt-2">
              Connect
            </ShinyButton>
            </div>

          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

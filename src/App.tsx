
import { TextAnimate } from "./components/magicui/text-animate";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";
import { ShimmerButton } from "./components/magicui/shimmer-button";
import { Navbar } from "./components/ui/navbar";
import { GridSmallBackgroundDemo } from "./components/ui/gridsmallbackground";
import { ExperienceTicker } from "./components/ticker";
import { AuroraText } from "./components/magicui/aurora-text";
import { CanvasRevealEffectDemo } from "./components/ui/canvas-reveal-demo";
import { PartnersSection } from "./components/ui/partners-section";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Navbar />
      <GridSmallBackgroundDemo className="min-h-screen">
        <h1 className="px-3 md:px-0 text-5xl text-center md:text-6xl font-bold text-black-600 mb-2">
          Turn your Data into Business Value
        </h1>
        
        <TextAnimate className="text-center text-gray-500">
          Turning Data into Business Value. Join hands with the experts at Tech.
        </TextAnimate>
        <TextAnimate className="text-gray-500 mb-6">
          Create whatever you think of with care and precision.
        </TextAnimate>
        <div className="flex flex-row space-x-3">
            <InteractiveHoverButton>Learn more</InteractiveHoverButton>
            <ShimmerButton>
              Reach out
            </ShimmerButton>
        </div>
      </GridSmallBackgroundDemo>
      
      {/* Experience Ticker Section - Overlapping with hero */}
      <div className="relative z-20 -mt-10 pb-10 bg-white">
        <ExperienceTicker 
          yearsOfExperience={13}
          projectsCount={200}
          customersCount={1000}
        />
      </div>

      <PartnersSection />

      <div className="text-center flex flex-col items-center justify-center pt-8 pb-2 bg-white">
        <div className="text-2xl font-semibold">
          Why choose <AuroraText>Zestrics</AuroraText> ?
        </div>
        <div className="w-full flex justify-center">
          <div className="max-w-4xl w-full pt-4">
            <TextAnimate className="text-center text-gray-500">
              Because we as a team make your building process easy. In order for you to build something with great precision and expertise it would be a heck of a job. Here at Zestrics, we take care of that for you.
            </TextAnimate>
          </div>
        </div>
      </div>

      <CanvasRevealEffectDemo />

    </div>
  );
}

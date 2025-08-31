import { TextAnimate } from "../components/magicui/text-animate";
import ParticleRingHero from "../components/hero-3d";
import { ExperienceTicker } from "../components/ticker";
import { AuroraText } from "../components/magicui/aurora-text";
import { CanvasRevealEffectDemo } from "../components/ui/canvas-reveal-demo";
import { PartnersCarousel } from "../components/ui/partners-carousel";
import { NormalCardsSection } from "../components/ui/normal-cards-section";
import { IndustriesSection } from "../components/ui/industries-section";
import { BlogCarousel } from "../components/blog-carousel";
import { FAQSection } from "../components/ui/faq-section";
import { ContactSection } from "../components/ui/contact-section";
import { ShinyButton } from "../components/magicui/shiny-button";


export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <ParticleRingHero />
      
      {/* Experience Ticker Section - Overlapping with hero */}
      <div className="relative pt-10 z-20 pb-10 bg-white">
        <ExperienceTicker 
          yearsOfExperience={14}
          projectsCount={150}
          customersCount={1000}
        />
      </div>

      {/* Technology Stack & Partners Section */}
      <PartnersCarousel />

      <div className="text-center flex flex-col items-center justify-center pt-8 pb-2 bg-white">
        <div className="text-2xl font-semibold">
          Why choose <AuroraText>Zestrics</AuroraText> ?
        </div>
        <div className="w-full flex justify-center">
          <div className="max-w-4xl w-full pt-4">
            <TextAnimate className="text-center text-gray-500">
              We combine cutting-edge AI and data science expertise with deep industry knowledge to deliver transformative solutions that drive real business growth and competitive advantage.
            </TextAnimate>
          </div>
        </div>
      </div>

      <CanvasRevealEffectDemo />

      {/* Services CTA Section */}
      <div className="px-4 md:px-32 bg-white mx-auto py-16 text-center">
        <h2 className="text-3xl md:text-5xl mb-6">Want to Explore Our Services?</h2>
        <TextAnimate className="text-gray-500 bg-white mb-8 text-lg">
          Discover our comprehensive range of AI, data science, and technology solutions designed to transform your business.
        </TextAnimate>
        <ShinyButton
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={() => {
            window.location.href = "/services";
          }}
        >
          Explore Services
        </ShinyButton>
      </div>

      <div className="px-4 md:px-32 bg-white mx-auto py-10 text-center">
        <h2 className="text-3xl md:text-5xl mb-2">How Business Intelligence Drives Success</h2>
        <TextAnimate className="text-gray-500 bg-white">
          Transform your data into actionable insights that power strategic decisions and drive measurable business outcomes.
        </TextAnimate>
      </div>
      
      <NormalCardsSection />

      {/* Blog/Insights Section */}
      <div className="relative bg-gray-50 dark:bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/bg-noisy-slate.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Content */}
        <div className="relative z-10">
          <BlogCarousel />
        </div>
      </div>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
      
    </div>
  );
};

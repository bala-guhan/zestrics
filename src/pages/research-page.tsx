"use client";
import { ResearchSection } from "../components/ui/research-section";
import { ResearchFAQSection } from "../components/ui/research-faq-section";
import { TextAnimate } from "../components/magicui/text-animate";
import { ShinyButton } from "../components/magicui/shiny-button";

export const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <div className="py-40 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Research & Intellectual Property Services
          </h1>
          <TextAnimate className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Comprehensive patent and IP research solutions to protect your innovations and maximize the value of your intellectual property portfolio
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
              Explore Services
            </ShinyButton>
            <ShinyButton className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50">
              Get Consultation
            </ShinyButton>
          </div>
        </div>
      </div> */}

      {/* Research Section */}
      <ResearchSection />

    

      {/* CTA Section */}
      <div className="px-4 md:px-32 bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Ready to protect your intellectual property?
          </h2>
          <TextAnimate className="text-gray-600 mb-8 text-lg">
            Our expert team specializes in comprehensive patent and IP research services. Let us help you navigate the complex world of intellectual property with confidence and strategic insight.
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton className="bg-gray-700 text-white px-8 py-3 rounded-lg font-medium">
              Get Started
            </ShinyButton>
            <ShinyButton className="bg-white border border-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50">
              Learn More
            </ShinyButton>
          </div>
        </div>
      </div>

        {/* FAQ Section */}
        <ResearchFAQSection />
    </div>
  );
};

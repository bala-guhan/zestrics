"use client";
import { TextAnimate } from "../components/magicui/text-animate";
import { Tabs } from "../components/ui/tabs";
import React, { useState } from "react";
import { ServiceCard } from "../components/ui/service-card";
import { SubServiceCard } from "../components/ui/sub-service-card";
import { servicesData, servicesTabsData, SubServiceData } from "../data/services-data";
import { ShinyButton } from "../components/magicui/shiny-button";
import { FAQSection } from "../components/ui/faq-section";

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<SubServiceData | null>(null);

  // Handle anchor links on component mount
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && servicesTabsData.some(tab => tab.value === hash)) {
      // Find the tab index and scroll to it
      const tabIndex = servicesTabsData.findIndex(tab => tab.value === hash);
      if (tabIndex !== -1) {
        // Add a small delay to ensure the component is rendered
        setTimeout(() => {
          const tabButtons = document.querySelectorAll('[data-tab-value]');
          if (tabButtons[tabIndex]) {
            (tabButtons[tabIndex] as HTMLElement).click();
          }
        }, 100);
      }
    }
  }, []);

  const tabs = servicesTabsData.map((serviceTab) => ({
    title: serviceTab.title,
    value: serviceTab.value,
    backgroundImage: serviceTab.backgroundImage,
    content: (
      <div className={`w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-white flex flex-col shadow-lg`} style={{ background: serviceTab.gradient }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <p className="text-3xl md:text-5xl ">{serviceTab.title}</p>
          </div>
          <div className="text-sm md:text-lg font-normal text-gray-300 mt-4 mb-6">
            Explore our comprehensive {serviceTab.title.toLowerCase()} solutions
          </div>
          
          {/* Sub-service cards - scrollable container */}
          <div className="flex-1 overflow-y-auto no-visible-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
              {serviceTab.subServices.map((subService, subIndex) => (
                <div
                  key={subIndex}
                  className="p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 bg-white/10 backdrop-blur-sm border border-white/20"
                  onClick={() => {
                    window.location.href = subService.href;
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{subService.icon}</span>
                      <h3 className="text-lg font-semibold">{subService.title}</h3>
                    </div>
                    <p className="text-sm text-gray-200 line-clamp-3">
                      {subService.description}
                    </p>
                    <button className="mt-3 px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-gray-100 bg-white py-40">
      {/* Services Tabs Section */}
      <div className="py-8 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Explore Our Services
            </h2>
            <TextAnimate className="text-gray-500 max-w-3xl mx-auto">
              Click on each service to learn more about our comprehensive solutions
            </TextAnimate>
          </div>
          
          <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>

      {/* Service Card Modal (keeping for backward compatibility) */}
      {selectedService !== null && (
        <ServiceCard
          service={servicesData[selectedService]}
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* Sub Service Card Modal */}
      {selectedSubService && (
        <SubServiceCard
          service={selectedSubService}
          isOpen={selectedSubService !== null}
          onClose={() => setSelectedSubService(null)}
        />
      )}

      {/* FAQ Section */}
      <FAQSection />

      <div className="px-4 md:px-32 bg-white pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Ready to build your dream project?
          </h2>
          <TextAnimate className="text-gray-600 mb-8 text-lg">
            Let us help you build your dream project. Our experts in all the mentioned fields will take care of your product needs end to end. Reach out to us and we will talk about your project.
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton 
              className="bg-gray-700 text-white px-8 py-3 rounded-lg font-medium"
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              Get Started
            </ShinyButton>
            <ShinyButton 
              className="bg-white border border-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50"
              onClick={() => {
                window.location.href = "/about";
              }}
            >
              Learn More
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>

  );
};




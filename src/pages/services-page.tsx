"use client";
import { TextAnimate } from "../components/magicui/text-animate";
import { Tabs } from "../components/ui/tabs";
import React, { useState } from "react";
import { ServiceCard } from "../components/ui/service-card";
import { SubServiceCard } from "../components/ui/sub-service-card";
import { servicesData, servicesTabsData, SubServiceData } from "../data/services-data";

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
    content: (
      <div className={`w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-white ${serviceTab.gradient} flex flex-col justify-between`}>
        <div>
          <div className="flex items-center mb-4">
            <p className="text-3xl md:text-5xl ">{serviceTab.title}</p>
          </div>
          <div className="text-sm md:text-lg font-normal text-gray-300 mt-4 mb-6">
            Explore our comprehensive {serviceTab.title.toLowerCase()} solutions
          </div>
          
          {/* Sub-service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {serviceTab.subServices.map((subService, subIndex) => (
              <div
                key={subIndex}
                className={`p-4 rounded-lg ${subService.gradient} cursor-pointer hover:scale-105 transition-transform duration-200`}
                onClick={() => setSelectedSubService(subService)}
              >
                <div className="flex items-center mb-2">
                  {/* <span className="text-2xl mr-2">{subService.icon}</span> */}
                  <h3 className="text-lg font-semibold">{subService.title}</h3>
                </div>
                <p className="text-sm text-gray-200 line-clamp-3">
                  {subService.description.substring(0, 120)}...
                </p>
                <button className="mt-3 px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
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
    </div>
  );
};




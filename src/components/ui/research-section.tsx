"use client";
import { useState, useEffect } from "react";
import { Tabs } from "./tabs";
import { SubServiceCard } from "./sub-service-card";
import { SubServiceData } from "../../data/services-data";
import { researchPatentsData } from "../../data/research-patents-data";

// Research services data
const researchServicesData: SubServiceData[] = researchPatentsData;

// Organize services into tabs
const researchTabs = [
  {
    title: "Patent Search & Analysis",
    value: "patent-search",
    services: researchServicesData.filter(service => 
      ["IP Search", "Patent Invalidation Search", "Patent Infringement Search", "Freedom to Operate Search", "Patentability Search", "Design Patent Search", "State of Art Search (SOA)"].includes(service.title)
    )
  },
  {
    title: "Portfolio Management",
    value: "portfolio-management", 
    services: researchServicesData.filter(service =>
      ["Patent Portfolio Management", "Patent Portfolio Analysis", "Patent Ranking", "Patent Commercialisation"].includes(service.title)
    )
  },
  {
    title: "Patent Services",
    value: "patent-services",
    services: researchServicesData.filter(service =>
      ["Patent Drafting & Illustrations", "Patent Filing/ FER/ Grant Support", "Drafting & Prosecution Support", "M&A – Patent Due Diligence", "Standard Essential Patents (SEPs)"].includes(service.title)
    )
  }
];

export const ResearchSection = () => {
  const [selectedService, setSelectedService] = useState<SubServiceData | null>(null);

  // Handle anchor links on component mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && researchTabs.some(tab => tab.value === hash)) {
      // Find the tab index and scroll to it
      const tabIndex = researchTabs.findIndex(tab => tab.value === hash);
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

  const tabs = researchTabs.map((tab) => ({
    title: tab.title,
    value: tab.value,
    backgroundImage: "/noisy-background.jpg",
    content: (
      <div className={`w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-white flex flex-col shadow-lg`}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <p className="text-3xl md:text-5xl">{tab.title}</p>
          </div>
          <div className="text-sm md:text-lg font-normal text-gray-300 mt-4 mb-6">
            Explore our comprehensive {tab.title.toLowerCase()} solutions
          </div>
          
          {/* Service cards - scrollable container */}
          <div className="flex-1 overflow-y-auto no-visible-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
              {tab.services.map((service, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: `url('/noisy-background.jpg')`,
                  }}
                  onClick={() => setSelectedService(service)}
                >
                  {/* Dark overlay for service cards */}
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{service.icon}</span>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-200 line-clamp-3">
                      {service.description.substring(0, 120)}...
                    </p>
                    <button className="mt-3 px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors">
                      Learn More
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
    <div className="pb-48 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research & Intellectual Property Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive patent and IP research services to protect your innovations and maximize the value of your intellectual property portfolio.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>

        {/* Service Card Modal */}
        {selectedService && (
          <SubServiceCard
            service={selectedService}
            isOpen={selectedService !== null}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </div>
  );
};

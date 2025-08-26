"use client";
import React from "react";

interface Partner {
  name: string;
  icon: string;
}

export function PartnersSection() {
  const partners: Partner[] = [
    {
      name: "Google",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
    },
    {
      name: "NVIDIA",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png"
    },
    {
      name: "Microsoft",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png"
    },
    {
      name: "Amazon",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      name: "Meta",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png"
    },
    {
      name: "Intel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282020%2C_light_blue%29.svg/2560px-Intel_logo_%282020%2C_light_blue%29.svg.png"
    },
    {
      name: "IBM",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png"
    },
    {
      name: "Oracle",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png"
    },
    {
      name: "Salesforce",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"
    },
    {
      name: "Adobe",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2560px-Adobe_Systems_logo_and_wordmark.svg.png"
    }
  ];

  return (
    <div className="py-12 px-4 bg-white dark:bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Grid Container with Edge Symbols */}
        <div className="relative">
          {/* Edge Symbols */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left */}
            <div className="absolute -top-2 -left-2 text-black-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            
            {/* Top Right */}
            <div className="absolute -top-2 -right-2 text-black-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            
            {/* Bottom Left */}
            <div className="absolute -bottom-2 -left-2 text-black-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            
            {/* Bottom Right */}
            <div className="absolute -bottom-2 -right-2 text-black-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-gray-300">
            {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div className="bg-white dark:bg-white p-2 border-r border-b border-gray-300 last:border-r-0">
      <div className="flex items-center space-x-3">
        {/* Icon */}
        <div className="w-8 h-8 flex-shrink-0">
          <img
            src={partner.icon}
            alt={`${partner.name} logo`}
            className="w-full h-full object-contain filter transition-all duration-300"
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div 
            className="hidden text-lg font-bold text-gray-400 dark:text-gray-500"
            style={{ display: 'none' }}
          >
            {partner.name.charAt(0)}
          </div>
        </div>

        {/* Company Name */}
        <h3 className="font-medium text-gray-900 dark:text-white text-sm">
          {partner.name}
        </h3>
      </div>
    </div>
  );
};

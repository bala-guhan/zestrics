"use client";
import { Shield, AlertTriangle, Lock } from "lucide-react";
import RevenueCard from "../revenue-card";
import SineSteps from "../strategic-planning-card";
import OperationalEfficiencyCard from "../operational-efficiency-card";

export const NormalCardsSection = () => {
  const features = [
    {
      title: "Improved Decision-Making",
      description: "Leaders gain real-time visibility into performance, enabling quick and confident choices.",
      image: "/bg-noisy-slate.jpg",
      isDecisionMaking: true
    },
    {
      title: "Operational Efficiency",
      description: "Identifies bottlenecks and inefficiencies, reducing costs and saving time.",
      image: "/noisy-bg-teal.jpg",
      showOperationalEfficiencyBackground: true
    },
    {
      title: "Customer Understanding",
      description: "Analyzes user habits to optimize personalization",
      image: "/bg-noisy-slate.jpg",
      isCustomerUnderstanding: true
    },
    {
      title: "Revenue Growth",
      description: "+32% this quarter",
      image: "/bg-noisy-amber.jpg",
      showRevenueBackground: true
    },
    {
      title: "Risk Management",
      description: "Detects anomalies and patterns that help prevent fraud, compliance issues, and financial risks.",
      image: "/noisy-background.jpg",
      isRiskManagement: true
    },
    {
      title: "Strategic Planning",
      description: "Provides long-term insights for capacity planning",
      image: "/noisy-bg-cyan.jpg",
      showSineStepsBackground: true
    }
  ];

  return (
    <div className="pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden relative group hover:scale-105"
            >
                             {feature.image && (
                 <div className="absolute inset-0 z-0">
                   <img 
                     src={feature.image} 
                     alt={feature.title}
                     className="w-full h-full object-cover opacity-80"
                   />
                 </div>
               )}
               
               
              
              {/* Revenue Card Background */}
              {feature.showRevenueBackground && (
                <div className="absolute inset-0 z-0 flex justify-end items-center opacity-100 px-4 py-4 md:px-4 md:py-4">
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <RevenueCard />
                  </div>
                </div>
              )}
              
                             {/* Sine Steps Background */}
               {feature.showSineStepsBackground && (
                 <div className="absolute inset-0 z-0 flex justify-center items-end opacity-100 px-4 pb-4">
                   <div className="w-full h-full flex items-end justify-center">
                     <SineSteps />
                   </div>
                 </div>
               )}
               
                               {/* Operational Efficiency Background */}
                {feature.showOperationalEfficiencyBackground && (
                  <div className="absolute inset-0 z-0 flex justify-center items-end opacity-100 px-4 pb-4">
                    <div className="w-full h-full flex items-end justify-center">
                      <OperationalEfficiencyCard />
                    </div>
                  </div>
                )}
               
                               {/* Customer Understanding Background - No additional images needed since they're now in the content */}
              
                             <div className="relative z-10 p-6 h-64 flex flex-col">
                 {feature.isRiskManagement ? (
                   <div className="flex flex-col h-full">
                     <h3 className="text-xl font-semibold text-black leading-tight mb-3">
                       {feature.title}
                     </h3>
                     <p className="text-white leading-relaxed mb-4 flex-grow text-sm">
                       {feature.description}
                     </p>
                     <div className="flex flex-row justify-between px-2">
                       <div className="flex flex-col items-center">
                         <Shield className="w-6 h-6 flex-shrink-0 text-black" />
                         <span className="text-xs text-white mt-1 text-center">Protection</span>
                       </div>
                       <div className="flex flex-col items-center">
                         <AlertTriangle className="w-6 h-6 flex-shrink-0 text-black" />
                         <span className="text-xs text-white mt-1 text-center">Risk awareness</span>
                       </div>
                       <div className="flex flex-col items-center">
                         <Lock className="w-6 h-6 flex-shrink-0 text-black" />
                         <span className="text-xs text-white mt-1 text-center">Security</span>
                       </div>
                     </div>
                   </div>
                 ) : feature.isDecisionMaking ? (
                   <div className="flex flex-col h-full">
                     <h3 className="text-xl font-semibold text-black leading-tight mb-3">
                       {feature.title}
                     </h3>
                     <p className="text-gray-700 leading-relaxed mb-4 flex-grow text-sm">
                       {feature.description}
                     </p>
                     <div className="flex flex-row justify-between px-2">
                       <div className="flex flex-col items-center">
                         <img src="/leadership.png" alt="Leadership" className="w-6 h-6 flex-shrink-0" />
                         <span className="text-xs text-gray-700 mt-1 text-center">Leadership</span>
                       </div>
                       <div className="flex flex-col items-center">
                         <img src="/decision-making.png" alt="Decision Making" className="w-6 h-6 flex-shrink-0" />
                         <span className="text-xs text-gray-700 mt-1 text-center">Decision Making</span>
                       </div>
                       <div className="flex flex-col items-center">
                         <svg className="w-6 h-6 flex-shrink-0 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                         </svg>
                         <span className="text-xs text-gray-700 mt-1 text-center">Analytics</span>
                       </div>
                     </div>
                   </div>
                                   ) : feature.isCustomerUnderstanding ? (
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-black leading-tight mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4 flex-grow text-sm">
                        {feature.description}
                      </p>
                      <div className="flex flex-row justify-between px-2">
                        <div className="flex flex-col items-center">
                          <img src="/understand.png" alt="Understand" className="w-6 h-6 flex-shrink-0" />
                          <span className="text-xs text-gray-700 mt-1 text-center">Understanding</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/experience.png" alt="Experience" className="w-6 h-6 flex-shrink-0" />
                          <span className="text-xs text-gray-700 mt-1 text-center">Experience</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <svg className="w-6 h-6 flex-shrink-0 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-xs text-gray-700 mt-1 text-center">Insights</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-black leading-tight mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white leading-relaxed flex-grow text-sm">
                        {feature.description}
                      </p>
                    </div>
                  )}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

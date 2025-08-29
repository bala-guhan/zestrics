"use client";
import { WobbleCard } from "./wobble-card";
import { Shield, AlertTriangle, Lock } from "lucide-react";

export const WobbleCardsSection = () => {
  const features = [
    // Row 1: 8 cols + 4 cols (2nd card extends to row 2)
    {
      title: "Improved Decision-Making",
      description: "Leaders gain real-time visibility into performance, enabling quick and confident choices.",
      colSpan: "col-span-12 lg:col-span-8",
      rowSpan: "row-span-1",
      image: "/bg-noisy-slate.jpg"
    },
    {
      title: "Operational Efficiency",
      description: "Identifies bottlenecks and inefficiencies, reducing costs and saving time.",
      colSpan: "col-span-12 lg:col-span-4",
      rowSpan: "row-span-2",
      image: "/operations.jpeg"
    },
    // Row 2: 4 cols + 4 cols (remaining 8 cols split equally)
    {
      title: "Customer Understanding",
      description: "Analyzes user habits to optimize personalization",
      colSpan: "col-span-12 lg:col-span-4",
      rowSpan: "row-span-1",
      image: "/customers.jpeg"
    },
    {
      title: "Revenue Growth",
      description: "+32% this quarter",
      colSpan: "col-span-12 lg:col-span-4",
      rowSpan: "row-span-1",
      image: "/bg-noisy-amber.jpg", // No image for revenue growth card
      showRevenueBackground: true
    },
    // Row 3: 6 cols + 6 cols
    {
      title: "Risk Management",
      description: "Detects anomalies and patterns that help prevent fraud, compliance issues, and financial risks.",
      colSpan: "col-span-12 lg:col-span-6",
      rowSpan: "row-span-1",
      image: "/noisy-background.jpg",
      isRiskManagement: true
    },
    {
      title: "Strategic Planning",
      description: "Provides long-term insights for capacity planning",
      colSpan: "col-span-12 lg:col-span-6",
      rowSpan: "row-span-1",
      image: "/noisy-bg-cyan.jpg",
      showSineStepsBackground: true
    }
  ];

  return (
    <div className="py-5 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-2 auto-rows-min">
          {features.map((feature, index) => (
            <WobbleCard
              key={index}
              containerClassName={`${feature.colSpan} ${feature.rowSpan} min-h-32 lg:min-h-48 border border-2 `}
              className="text-left"
              showRevenueBackground={feature.showRevenueBackground}
              showSineStepsBackground={feature.showSineStepsBackground}
            >
              {feature.image && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-2xl opacity-80"
                  />
                </div>
              )}
              <div className="relative z-10">
                {feature.isRiskManagement ? (
                  <div className="flex flex-col h-full">
                    
                    <h3 className="text-2xl font-semibold text-black leading-tight mt-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex flex-row justify-between px-2">
                      <div className="flex flex-col items-center ">
                        <Shield className="w-8 h-8 flex-shrink-0" />
                        <span className="text-sm text-white/70">Protection & risk mitigation</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <AlertTriangle className="w-8 h-8 flex-shrink-0" />
                        <span className="text-sm text-white/70">Risk awareness</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Lock className="w-8 h-8 flex-shrink-0" />
                        <span className="text-sm text-white/70">Security & protection</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold text-black leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </>
                )}
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";
import { WobbleCard } from "./wobble-card";

export const WobbleCardsSection = () => {
  const features = [
    // Row 1: 8 cols + 4 cols (2nd card extends to row 2)
    {
      title: "Improved Decision-Making",
      description: "Leaders gain real-time visibility into performance, enabling quick and confident choices.",
      colSpan: "col-span-12 lg:col-span-8",
      rowSpan: "row-span-1",
      image: "/wmremove-transformed.jpeg"
    },
    {
      title: "Operational Efficiency",
      description: "Identifies bottlenecks and inefficiencies, reducing costs and saving time.",
      colSpan: "col-span-12 lg:col-span-4",
      rowSpan: "row-span-2",
      image: "/wmremove-transformed.jpeg"
    },
    // Row 2: 4 cols + 4 cols (remaining 8 cols split equally)
    {
      title: "Customer Understanding",
      description: "Analyzes customer behavior to improve personalization, retention, and satisfaction.",
      colSpan: "col-span-12 lg:col-span-4",
      rowSpan: "row-span-1",
      image: "/wmremove-transformed.jpeg"
    },
    {
      title: "Revenue Growth",
      description: "Supports sales forecasting, pricing optimization, and market trend analysis.",
      colSpan: "col-span-12 lg:col-span-4",
      rowSpan: "row-span-1",
      image: "/wmremove-transformed.jpeg"
    },
    // Row 3: 6 cols + 6 cols
    {
      title: "Risk Management",
      description: "Detects anomalies and patterns that help prevent fraud, compliance issues, and financial risks.",
      colSpan: "col-span-12 lg:col-span-6",
      rowSpan: "row-span-1",
      image: "/wmremove-transformed.jpeg"
    },
    {
      title: "Strategic Planning",
      description: "Provides long-term insights for capacity planning, product launches, and market expansion.",
      colSpan: "col-span-12 lg:col-span-6",
      rowSpan: "row-span-1",
      image: "/wmremove-transformed.jpeg"
    }
  ];

  return (
    <div className="py-5 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-2 auto-rows-fr">
          {features.map((feature, index) => (
            <WobbleCard
              key={index}
              containerClassName={`${feature.colSpan} ${feature.rowSpan} min-h-32 lg:min-h-48 border border-2 `}
              className="text-left"
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
                <h3 className="text-2xl font-semibold text-black leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

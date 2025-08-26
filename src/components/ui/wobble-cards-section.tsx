"use client";
import React from "react";
import { WobbleCard } from "./wobble-card";
import { BarChart3, Brain, Database, TrendingUp, Shield, Zap, Globe, Cpu } from "lucide-react";

export const WobbleCardsSection = () => {
  const features = [
    // Row 1: 8 cols + 4 cols
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights with our cutting-edge analytics platform.",
      gradient: "from-blue-600 to-purple-600",
      colSpan: "col-span-12 md:col-span-8"
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence to predict trends and automate processes.",
      gradient: "from-purple-600 to-pink-600",
      colSpan: "col-span-12 md:col-span-4"
    },
    // Row 2: 4 cols + 4 cols + 4 cols
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Data Infrastructure",
      description: "Build robust, scalable data pipelines that handle millions of records efficiently.",
      gradient: "from-green-600 to-blue-600",
      colSpan: "col-span-12 md:col-span-4"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Business Intelligence",
      description: "Create stunning dashboards and reports that drive data-driven decision making.",
      gradient: "from-orange-600 to-red-600",
      colSpan: "col-span-12 md:col-span-4"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols to protect your most sensitive business data.",
      gradient: "from-indigo-600 to-purple-600",
      colSpan: "col-span-12 md:col-span-4"
    },
    // Row 3: 2 cols + 6 cols + 4 cols
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Real-time Processing",
      description: "Process data in real-time with sub-second latency for instant insights.",
      gradient: "from-yellow-600 to-orange-600",
      colSpan: "col-span-12 md:col-span-2"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure that grows with your business needs and requirements.",
      gradient: "from-teal-600 to-cyan-600",
      colSpan: "col-span-12 md:col-span-6"
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "Performance Optimization",
      description: "Optimize your systems for maximum performance and efficiency across all platforms.",
      gradient: "from-rose-600 to-pink-600",
      colSpan: "col-span-12 md:col-span-4"
    }
  ];

  return (
    <div className="py-5 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <WobbleCard
              key={index}
              containerClassName={`bg-gradient-to-br ${feature.gradient} ${feature.colSpan}`}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {feature.description}
              </p>
            </WobbleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

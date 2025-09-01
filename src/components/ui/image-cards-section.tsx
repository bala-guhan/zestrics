"use client";
import React from "react";

type ServiceCard = {
  id: string;
  title: string;
  icon: string;
  image: string;
  href: string;
};

const services: ServiceCard[] = [
  {
    id: "big-data-cloud-frameworks",
    title: "Big Data & Cloud Frameworks",
    icon: "/server.png",
    image: "/big-dataa.jpeg",
    href: "/services#big-data-cloud-frameworks",
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    icon: "/deep-learning.png",
    image: "/ai-ml.jpeg",
    href: "/services#ai-ml",
  },
  {
    id: "generative-ai-gpt",
    title: "Generative AI & GPT",
    icon: "/robotics.png",
    image: "/gen-ai.jpeg",
    href: "/services#generative-ai-gpt",
  },
  {
    id: "software-development",
    title: "Software Development",
    icon: "/coding.png",
    image: "/web-dev.jpeg",
    href: "/services#software-development",
  },
];

export const ImageCardsSection: React.FC = () => {
  const handleClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <section className="py-20 bg-white dark:bg-black w-full mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 w-full max-w-6xl mx-auto">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => handleClick(s.href)}
            className="relative group flex-1 max-w-xs w-full mx-auto h-[18rem] overflow-hidden rounded-xl border border-black/20 dark:border-white/20 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={s.title}
          >
            {/* Background image */}
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            {/* Content */}
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-3 text-white">
              <img src={s.icon} alt="" className="h-12 w-12 object-contain drop-shadow" />
              <h3 className="text-center font-bold text-lg px-4">
                {s.title}
              </h3>
            </div>
            {/* Hover ring */}
            <div className="absolute inset-0 rounded-xl ring-0 ring-blue-500/0 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-500/30" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageCardsSection;



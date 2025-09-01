import React from "react";

interface ServiceCard {
  id: string;
  title: string;
  image: string;
  href: string;
}

const serviceCards: ServiceCard[] = [
  {
    id: "big-data",
    title: "Big Data & Cloud Frameworks",
    image: "/big-dataa.jpeg",
    href: "/services#big-data-cloud-frameworks",
  },
  {
    id: "ai-ml",
    title: "AI/ML", 
    image: "/ai-ml.jpeg",
    href: "/services#ai-ml",
  },
  {
    id: "generative-ai",
    title: "Generative AI & GPT",
    image: "/gen-ai.jpeg", 
    href: "/services#generative-ai-gpt",
  },
  {
    id: "software-dev",
    title: "Software Development",
    image: "/web-dev.jpeg",
    href: "/services#software-development",
  },
];

export const ImageCardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group block relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover mt-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-semibold leading-tight">
                  {card.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardsSection;

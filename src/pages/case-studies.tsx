import { TextAnimate } from "../components/magicui/text-animate";
import { motion } from "motion/react";
import { Search, Shield, FileText, TrendingUp, Briefcase, Target, Award, DollarSign, Palette, Edit, FileCheck, Zap, Scale, Users, BarChart3 } from "lucide-react";
import { Tabs } from "../components/ui/tabs";
import React from "react";
import { ShinyButton } from "../components/magicui/shiny-button";

interface PatentService {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface PatentTabData {
  title: string;
  value: string;
  services: PatentService[];
  backgroundImage?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const patentTabsData: PatentTabData[] = [
  {
    title: "Patent Search & Analysis",
    value: "patent-search-analysis",
    backgroundImage: "/noisy-background.jpg",
    icon: Search,
    services: [
      {
        id: 1,
        title: "Patent Invalidation Search",
        description: "We uncover prior art to challenge existing patents and strengthen your legal position. Our targeted invalidation searches support litigation, licensing, and competitive strategy.",
        icon: Shield
      },
      {
        id: 2,
        title: "Patent Infringement Search",
        description: "We identify patents your product or process may infringe, helping you mitigate legal risks. Our precise analysis supports compliance, licensing, and strategic decision-making.",
        icon: Search
      },
      {
        id: 3,
        title: "Freedom to Operate Search",
        description: "We analyze existing patents to assess if your product or process can be commercialized without infringement risk. Our FTO searches help you launch confidently with legal clarity.",
        icon: Target
      },
      {
        id: 4,
        title: "Patentability Search",
        description: "We evaluate your invention against existing prior art to determine its novelty and patent eligibility. Our search ensures stronger applications and higher chances of patent grant.",
        icon: FileText
      },
      {
        id: 5,
        title: "Design Patent Search",
        description: "We identify existing design patents to assess the uniqueness of your product's appearance. Our search helps protect aesthetic innovations and avoid infringement risks.",
        icon: Palette
      },
      {
        id: 6,
        title: "State of Art Search (SOA)",
        description: "We compile and analyze all existing technologies in a specific field to map the current innovation landscape. Our SOA search supports R&D, product development, and strategic planning.",
        icon: TrendingUp
      },
      {
        id: 15,
        title: "IP Search",
        description: "Comprehensive intellectual property searches across patents, trademarks, and copyrights to protect your innovations and avoid infringement risks.",
        icon: Search
      }
    ]
  },
  {
    title: "Portfolio Management",
    value: "portfolio-management",
    backgroundImage: "/bg-noisy-slate.jpg",
    icon: BarChart3,
    services: [
      {
        id: 7,
        title: "Patent Portfolio Analysis",
        description: "We assess and organize your patents to identify strengths, gaps, and monetization opportunities. Our analysis helps optimize IP strategy for maximum commercial and competitive value.",
        icon: BarChart3
      },
      {
        id: 8,
        title: "M&A – Patent Due Diligence",
        description: "We evaluate patent assets during mergers and acquisitions to assess their value, scope, and risks. Our due diligence ensures informed investment decisions and stronger deal negotiations.",
        icon: Briefcase
      },
      {
        id: 9,
        title: "Patent Ranking",
        description: "We evaluate and rank patents based on quality, relevance, and market impact. Our ranking helps prioritize valuable assets and guide strategic IP decisions.",
        icon: Award
      },
      {
        id: 10,
        title: "Patent Commercialisation",
        description: "We help transform patents into revenue through licensing, sale, or strategic partnerships. Our approach maximizes the market potential and returns on your IP assets.",
        icon: DollarSign
      },
      {
        id: 16,
        title: "Patent Portfolio Management",
        description: "Strategic management of your patent portfolio to maximize value, reduce costs, and align with business objectives through systematic analysis and optimization.",
        icon: Users
      }
    ]
  },
  {
    title: "Drafting & Prosecution",
    value: "drafting-prosecution",
    backgroundImage: "/noisy-bg-cyan.jpg",
    icon: Edit,
    services: [
      {
        id: 11,
        title: "Patent Drafting & Illustrations",
        description: "We create precise patent drafts and high-quality illustrations that clearly define and protect your invention. Our expertise ensures compliance with patent office requirements worldwide.",
        icon: Edit
      },
      {
        id: 12,
        title: "Patent Filing/ FER/ Grant Support",
        description: "We provide end-to-end assistance from patent filing to responding to FERs, ensuring smooth prosecution. Our support streamlines the path to securing your patent grant.",
        icon: FileCheck
      },
      {
        id: 14,
        title: "Drafting & Prosecution Support",
        description: "We deliver precise patent drafting and handle all prosecution stages to strengthen your application. Our expertise maximizes the chances of a swift and successful grant.",
        icon: Scale
      }
    ]
  },
  {
    title: "Specialized Services",
    value: "specialized-services",
    backgroundImage: "/bg-noisy-amber.jpg",
    icon: Zap,
    services: [
      {
        id: 13,
        title: "Standard Essential Patents (SEPs)",
        description: "We help identify and manage standard essential patents that are critical to industry standards. Our expertise ensures compliance and strategic positioning in standard-setting organizations.",
        icon: Zap
      }
    ]
  }
];

const PatentServiceCard = ({ service, index }: { service: PatentService; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/noisy-background.jpg')`,
      }}
    >
      {/* Dark overlay for service cards */}
      <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-2">
          <service.icon className="w-6 h-6 text-white mr-2" />
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        </div>
        <p className="text-sm text-gray-200 line-clamp-3">
          {service.description.substring(0, 120)}...
        </p>
        <button className="mt-3 px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors text-white">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export const CaseStudies = () => { 
  const tabs = patentTabsData.map((tab) => ({
    title: tab.title,
    value: tab.value,
    backgroundImage: tab.backgroundImage,
    icon: tab.icon,
         content: (
       <div className={`w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-white flex flex-col shadow-lg`}>
         {/* Dark overlay for better text readability */}
         <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
         <div className="relative z-10 flex flex-col h-full">
           <div className="flex items-center mb-4">
             <p className="text-3xl md:text-5xl ">{tab.title}</p>
           </div>
           <div className="text-sm md:text-lg font-normal text-gray-300 mt-4 mb-6">
             Explore our comprehensive {tab.title.toLowerCase()} solutions
           </div>
           
           {/* Service cards - scrollable container */}
           <div className="flex-1 overflow-y-auto no-visible-scrollbar">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
               {tab.services.map((service, index) => (
                 <PatentServiceCard 
                   key={service.id} 
                   service={service} 
                   index={index}
                 />
               ))}
             </div>
           </div>
         </div>
       </div>
     ),
  }));

  return (
    <div className="min-h-screen bg-gray-100 bg-white py-40">


      {/* Patent Services Tabs Section */}
      <div className="py-8 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Explore Our Patent Services
            </h2>
            <TextAnimate className="text-gray-500 max-w-3xl mx-auto">
              Click on each category to learn more about our comprehensive patent solutions
            </TextAnimate>
          </div>
          
          <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="px-4 md:px-32 bg-white pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Ready to Protect Your Innovations?
          </h2>
          <TextAnimate className="text-gray-600 mb-8 text-lg">
            Let our patent experts help you navigate the complex world of intellectual property. 
            From initial searches to portfolio management, we're here to support your IP strategy.
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton className="bg-gray-700 text-white px-8 py-3 rounded-lg font-medium">
              Get Started
            </ShinyButton>
            <ShinyButton className="bg-white border border-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50">
              Learn More
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>
  )
}
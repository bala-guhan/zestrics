"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { careersPerksData, CareerPerk } from "../../data/careers-perks-data";

interface CareerPerkItemProps {
  perk: CareerPerk;
  index: number;
}

const CareerPerkItem = ({ perk, index }: CareerPerkItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0 rounded-lg"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <perk.icon className="w-6 h-6 text-gray-600" />
          </div>
          <h3 className="font-semibold text-gray-800 text-left">
            {perk.header}
          </h3>
        </div>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pl-14 text-sm">
              <p className="text-gray-600 leading-relaxed">
                {perk.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const CareersPerksSection = () => {
  return (
    <div className="px-4 md:px-8 pb-20">
      <div className="max-w-4xl mx-auto">

        {/* Perks List */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {careersPerksData.map((perk, index) => (
            <CareerPerkItem 
              key={perk.id} 
              perk={perk} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

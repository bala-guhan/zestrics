"use client";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Flowchart } from "./flowchart";
import { SubServiceData } from "../../data/services-data";

interface SubServiceCardProps {
  service: SubServiceData;
  isOpen: boolean;
  onClose: () => void;
}

export const SubServiceCard = ({ service, isOpen, onClose }: SubServiceCardProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 text-white ${service.gradient} textured-gradient`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center mb-6 relative z-10">
              {/* <span className="text-4xl mr-4">{service.icon}</span> */}
              <h2 className="text-3xl md:text-5xl">{service.title}</h2>
            </div>

            {/* Description */}
            <p className="mb-8 leading-relaxed relative z-10">
              {service.description}
            </p>

            {/* Overview */}
            <div className="mb-8 relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Overview</h3>
              <p className="leading-relaxed">{service.overview}</p>
            </div>

            {/* Benefits */}
            <div className="mb-8 relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">What You Can Achieve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flowchart */}
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Process</h3>
              <Flowchart steps={service.flowchart} className="mt-6" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

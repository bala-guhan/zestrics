"use client";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export interface JobData {
  title: string;
  description: string;
  category?: string;
}

interface JobCardProps {
  job: JobData;
}

export const JobCard = ({ job }: JobCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5"
    >
      {/* Main Card Content */}
      <div 
        className="p-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex items-center justify-between">
          {/* Job Title */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-black transition-colors group-hover:text-blue-600">
              {job.title}
            </h3>
          </div>

          {/* Chevron and Apply Button */}
          <div className="flex items-center gap-3">
            {/* Chevron */}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 group-hover:text-blue-600 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Expandable Description */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
                         <div className="px-4 pb-4 border-t border-white/10 bg-white/2">
               <div className="pt-4">
                 <div className="text-gray-700 leading-relaxed text-sm">
                   {job.description}
                 </div>
                 <br />
                 <div className="text-gray-700 font-semibold leading-relaxed text-sm">
                   Reach out to us at <span className="text-blue-500">contact@zestrics.com</span>
                 </div>
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

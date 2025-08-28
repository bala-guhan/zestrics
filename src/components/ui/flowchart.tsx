"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FlowchartProps {
  steps: string[];
  className?: string;
}

export const Flowchart = ({ steps, className = "" }: FlowchartProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-top justify-between space-x-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            className="flex flex-col items-center relative"
          >
            {/* Node */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.3,
                type: "spring",
                stiffness: 200
              }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 font-bold text-lg relative z-10"
            >
              {index + 1}
            </motion.div>

            {/* Step Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.5
              }}
              className="font-medium text-center max-w-32"
            >
              {step}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

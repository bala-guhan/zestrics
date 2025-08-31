import { motion } from "framer-motion";

export default function OperationalEfficiencyCard() {
  return (
    <div className="w-64 h-32 p-4 relative">
      {/* Title */}
      <div className="text-xs font-semibold text-black mb-3 text-center">
   
      </div>

      {/* Animated wavelength bars */}
      <div className="flex gap-1 mb-4 justify-center">
        {Array.from({ length: 28 }, (_, i) => (
          <motion.div
            key={i}
            className="w-1.5 bg-black rounded-sm"
            initial={{ height: 8 }}
            animate={{ 
              height: [8, 20, 12, 24, 16, 28, 20, 32, 24, 16, 20, 28, 24, 16, 20, 24, 28, 20, 16, 24, 20, 28, 24, 16, 20, 24, 28, 20][i] || 16
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Percentage with decorative lines */}
      <div className="flex items-center justify-center">
        <div className="w-8 h-px bg-black mr-2"></div>
        <motion.div
          className="text-2xl font-bold text-black"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: "easeOut",
          }}
        >
          99.9%
        </motion.div>
        <div className="w-8 h-px bg-black ml-2"></div>
      </div>
    </div>
  );
}

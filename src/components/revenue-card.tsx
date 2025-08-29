import { motion } from "framer-motion";

export default function RevenueCard() {
  return (
    <div className="w-64 h-40 p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm">
      {/* Animated bars */}
      <div className="flex gap-2 absolute bottom-0 left-4 h-full items-end opacity-50">
        {[10, 20, 45, 70, 100, 120, 140].map((height, i) => (
          <motion.div
            key={i}
            className="w-4 bg-black rounded"
            initial={{ height: 0 }}
            animate={{ height: height }}
            transition={{
              duration: 1,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

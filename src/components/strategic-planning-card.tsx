import { motion } from "framer-motion";

const steps = [
  { number: 1, label: "Visioning", x: 50, y: 100, isTop: false },
  { number: 2, label: "Discovery", x: 150, y: 40, isTop: true },
  { number: 3, label: "Roadmapping", x: 250, y: 100, isTop: false },
  { number: 4, label: "Execution", x: 350, y: 40, isTop: true },
];

// Small screen steps configuration
const smallSteps = [
  { number: 1, label: "Visioning", x: 25, y: 50, isTop: false },
  { number: 2, label: "Discovery", x: 75, y: 20, isTop: true },
  { number: 3, label: "Roadmapping", x: 125, y: 50, isTop: false },
  { number: 4, label: "Execution", x: 175, y: 20, isTop: true },
];

export default function SineSteps() {
  return (
    <div className="flex justify-center items-center py-4 sm:py-6">
      {/* Small screen SVG */}
      <svg 
        className="sm:hidden" 
        width="200" 
        height="80" 
        viewBox="0 0 200 80"
      >
        {/* Animated sine wave path for small screens */}
        <motion.path
          d="M0 40 Q 25 10, 50 40 T 100 40 T 150 40 T 200 40"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeDasharray="0 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />

        {/* Steps for small screens */}
        {smallSteps.map((step, i) => (
          <motion.g
            key={step.number}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.8 + i * 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <circle
              cx={step.x}
              cy={step.y}
              r="15"
              fill="#06b6d4"
              stroke=""
              strokeWidth="1"
            />
            <text
              x={step.x}
              y={step.y + 4}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              {step.number}
            </text>
            <text
              x={step.x}
              y={step.isTop ? step.y + 25 : step.y - 25}
              textAnchor="middle"
              fill="#374151"
              fontSize="10"
              fontWeight="500"
            >
              {step.label}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Large screen SVG */}
      <svg 
        className="hidden sm:block" 
        width="400" 
        height="160" 
        viewBox="0 0 400 160"
      >
        {/* Animated sine wave path for large screens */}
        <motion.path
          d="M0 80 Q 50 20, 100 80 T 200 80 T 300 80 T 400 80"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeDasharray="0 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />

        {/* Steps for large screens */}
        {steps.map((step, i) => (
          <motion.g
            key={step.number}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.8 + i * 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <circle
              cx={step.x}
              cy={step.y}
              r="25"
              fill="#06b6d4"
              stroke=""
              strokeWidth="1"
            />
            <text
              x={step.x}
              y={step.y + 7}
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              {step.number}
            </text>
            <text
              x={step.x}
              y={step.isTop ? step.y + 45 : step.y - 45}
              textAnchor="middle"
              fill="#000000"
              fontSize="16"
              fontWeight="500"
            >
              {step.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

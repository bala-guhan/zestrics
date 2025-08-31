import { motion } from "framer-motion";

const steps = [
  { number: 1, label: "Visioning", x: 50, y: 60, isTop: false },
  { number: 2, label: "Discovery", x: 150, y: 20, isTop: true },
  { number: 3, label: "Roadmapping", x: 250, y: 60, isTop: false },
  { number: 4, label: "Execution", x: 350, y: 20, isTop: true },
];

// Small screen steps configuration
const smallSteps = [
  { number: 1, label: "Visioning", x: 30, y: 35, isTop: false },
  { number: 2, label: "Discovery", x: 80, y: 10, isTop: true },
  { number: 3, label: "Roadmapping", x: 130, y: 35, isTop: false },
  { number: 4, label: "Execution", x: 180, y: 10, isTop: true },
];

export default function SineSteps() {
  return (
    <div className="flex flex-col justify-end items-center w-full h-full p-2">
      {/* Small screen SVG */}
      <svg 
        className="sm:hidden" 
        width="220" 
        height="50" 
        viewBox="0 0 220 50"
      >
        {/* Animated sine wave path for small screens */}
        <motion.path
          d="M0 25 Q 30 0, 60 25 T 120 25 T 180 25 T 220 25"
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
              r="10"
              fill="#06b6d4"
              stroke=""
              strokeWidth="1"
            />
            <text
              x={step.x}
              y={step.y + 2}
              textAnchor="middle"
              fill="white"
              fontSize="8"
              fontWeight="bold"
            >
              {step.number}
            </text>
            <text
              x={step.x}
              y={step.isTop ? step.y + 15 : step.y - 15}
              textAnchor="middle"
              fill="#000000"
              fontSize="7"
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
        width="380" 
        height="80" 
        viewBox="0 0 380 80"
      >
        {/* Animated sine wave path for large screens */}
        <motion.path
          d="M0 40 Q 40 5, 80 40 T 160 40 T 240 40 T 320 40 T 380 40"
          
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
              fill="#000000"
              fontSize="10"
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

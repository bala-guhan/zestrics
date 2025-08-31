"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  const handleCardClick = (tabId: string) => {
    // Navigate to services page with specific tab
    window.location.href = `/services#${tabId}`;
  };

  return (
    <>
      <div className="py-20 flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        {/* Single row - 4 cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-6xl">
          <Card 
            title="Big Data & Cloud Frameworks" 
            icon="/server.png"
            onClick={() => handleCardClick('big-data-cloud-frameworks')}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card 
            title="AI/ML" 
            icon="/deep-learning.png"
            onClick={() => handleCardClick('ai-ml')}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
          <Card 
            title="Generative AI & GPT" 
            icon="/robotics.png"
            onClick={() => handleCardClick('generative-ai-gpt')}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-indigo-600"
              colors={[
                [99, 102, 241],
                [139, 92, 246],
              ]}
              dotSize={2}
            />
          </Card>
          <Card 
            title="Software Development" 
            icon="/coding.png"
            onClick={() => handleCardClick('software-development')}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-purple-900"
              colors={[
                [139, 92, 246],
                [168, 85, 247],
              ]}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  onClick,
}: {
  title: string;
  icon: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-xs w-full mx-auto p-3 relative h-[18rem] relative cursor-pointer"
    >
      <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center mb-4">
          <img 
            src={icon} 
            alt={title}
            className="h-16 w-16 object-contain filter transition-all duration-300"
          />
        </div>
        <h2 className="dark:text-white text-lg opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

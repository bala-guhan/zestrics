"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { BarChart3, Database, Zap, TrendingUp, Cpu, MessageSquare, Globe } from "lucide-react";

export function CanvasRevealEffectDemo() {
  const handleCardClick = (tabId: string) => {
    // Navigate to services page with specific tab
    window.location.href = `/services#${tabId}`;
  };

  return (
    <>
      <div className="py-20 flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        {/* First row - 4 cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-6xl">
          <Card 
            title="AI Chatbot Development" 
            icon={<MessageSquare className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}
            onClick={() => handleCardClick('ai-chatbot-development')}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card 
            title="Business Intelligence" 
            icon={<BarChart3 className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}
            onClick={() => handleCardClick('business-intelligence')}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
          <Card 
            title="Data Engineering" 
            icon={<Database className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}
            onClick={() => handleCardClick('data-engineering')}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card 
            title="Machine Learning" 
            icon={<Cpu className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}
            onClick={() => handleCardClick('machine-learning')}
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
        
        {/* Second row - 3 cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-5xl">
          <Card 
            title="Data Science" 
            icon={<TrendingUp className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}
            onClick={() => handleCardClick('data-science')}
          >
            <CanvasRevealEffect
              animationSpeed={3.5}
              containerClassName="bg-orange-600"
              colors={[
                [251, 146, 60],
                [245, 101, 101],
              ]}
            />
          </Card>
          <Card 
            title="Generative AI" 
            icon={<Zap className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}
            onClick={() => handleCardClick('generative-ai')}
          >
            <CanvasRevealEffect
              animationSpeed={4.5}
              containerClassName="bg-indigo-600"
              colors={[
                [99, 102, 241],
                [139, 92, 246],
              ]}
            />
          </Card>
          <Card 
            title="Full Stack Development" 
            icon={<Globe className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}
            onClick={() => handleCardClick('full-stack-development')}
          >
            <CanvasRevealEffect
              animationSpeed={3.2}
              containerClassName="bg-teal-600"
              colors={[
                [20, 184, 166],
                [13, 148, 136],
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
  icon: React.ReactNode;
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

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-3 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
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

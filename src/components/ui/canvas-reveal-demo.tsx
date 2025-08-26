"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { BarChart3, Brain, Database, Shield, Zap } from "lucide-react";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Advanced Analytics" icon={<BarChart3 className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="AI & Machine Learning" icon={<Brain className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Data Infrastructure" icon={<Database className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Enterprise Security" icon={<Shield className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}>
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-purple-900"
            colors={[
              [139, 92, 246],
              [168, 85, 247],
            ]}
          />
        </Card>
        <Card title="Real-time Processing" icon={<Zap className="h-8 w-8 text-black dark:text-white group-hover/canvas-card:text-white" />}>
          <CanvasRevealEffect
            animationSpeed={3.5}
            containerClassName="bg-orange-600"
            colors={[
              [251, 146, 60],
              [245, 101, 101],
            ]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-xs w-full mx-auto p-3 relative h-[20rem] relative"
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

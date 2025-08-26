import { cn } from "../../lib/utils";

interface GridSmallBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridSmallBackgroundDemo({ children, className }: GridSmallBackgroundProps) {
  return (
    <div className={cn("relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)] dark:bg-black"></div>
      
      {children ? (
        <div className="relative z-20 flex flex-col items-center justify-center">
          {children}
        </div>
      ) : (
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Backgrounds
        </p>
      )}
    </div>
  );
}

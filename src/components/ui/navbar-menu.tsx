"use client";
import React, { useEffect, useRef } from "react";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const openTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const OPEN_DELAY_MS = 120;
  const CLOSE_DELAY_MS = 300;
  const activeRef = useRef<string | null>(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
    }
    openTimeoutRef.current = window.setTimeout(() => setActive(item), OPEN_DELAY_MS);
  };

  const handleMouseLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    // Delay closing slightly to avoid flicker when moving the cursor.
    // Only close if this item is still the active one to avoid races
    // when moving directly from one menu item to another.
    closeTimeoutRef.current = window.setTimeout(() => {
      if (activeRef.current === item) {
        setActive(null);
      }
    }, CLOSE_DELAY_MS);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <p className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white transition-opacity duration-200">
        {item}
      </p>
      {active === item && (
        <div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 animate-in fade-in duration-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Invisible hover bridge that fills the visual gap without overlapping the navbar */}
          <div className="w-full h-[1.8rem]" aria-hidden />
          <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
            <div className="w-max h-full p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative border border-transparent dark:bg-black dark:border-white/[0.2] bg-white/90 backdrop-blur-md shadow-input flex justify-center space-x-8"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ 
  children, 
  ...rest 
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black transition-colors duration-150"
    >
      {children}
    </a>
  );
};

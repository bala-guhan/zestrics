"use client";
import React from "react";
import { NumberTicker } from "./magicui/number-ticker";
import { Clock, Users, Briefcase } from "lucide-react";

interface ExperienceTickerProps {
  yearsOfExperience?: number;
  projectsCount?: number;
  customersCount?: number;
  className?: string;
}

export function ExperienceTicker({ 
  yearsOfExperience = 13, 
  projectsCount = 200, 
  customersCount = 1000,
  className 
}: ExperienceTickerProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="bg-white/90 backdrop-blur-md rounded-full border border-gray-200/50 dark:bg-black/90 dark:border-gray-700/50 shadow-lg">
        {/* Mobile Layout - Stacked */}
        <div className="md:hidden flex flex-col space-y-4 px-6 py-4">
          {/* Experience */}
          <div className="flex items-center justify-center space-x-3">
            <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <div className="flex flex-col items-center">
              <div className="flex items-baseline space-x-1">
                <NumberTicker 
                  value={yearsOfExperience} 
                  className="text-xl font-bold text-black dark:text-white"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">+</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                <span>yrs of experience</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="flex items-center justify-center space-x-3">
            <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <div className="flex flex-col items-center">
              <div className="flex items-baseline space-x-1">
                <NumberTicker 
                  value={projectsCount} 
                  className="text-xl font-bold text-black dark:text-white"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">+</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                <span>projects</span>
              </div>
            </div>
          </div>

          {/* Customers */}
          <div className="flex items-center justify-center space-x-3">
            <Users className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <div className="flex flex-col items-center">
              <div className="flex items-baseline space-x-1">
                <NumberTicker 
                  value={customersCount} 
                  className="text-xl font-bold text-black dark:text-white"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">+</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                <span>customers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex items-center justify-between space-x-12 px-10 py-3">
          {/* Experience */}
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <NumberTicker 
                  value={yearsOfExperience} 
                  className="text-2xl font-bold text-black dark:text-white"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">+</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span>yrs of experience</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="flex items-center space-x-3">
            <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <NumberTicker 
                  value={projectsCount} 
                  className="text-2xl font-bold text-black dark:text-white"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">+</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span>projects</span>
              </div>
            </div>
          </div>

          {/* Customers */}
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <NumberTicker 
                  value={customersCount} 
                  className="text-2xl font-bold text-black dark:text-white"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">+</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span>customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
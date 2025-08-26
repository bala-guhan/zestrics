"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./navbar-menu";

export const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-full border border-gray-200/50 dark:bg-black/90 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center px-6">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <h1 className="text-xl font-bold text-black dark:text-white">
              Zestrics
            </h1>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Data Analytics"
                    description="Transform raw data into actionable insights"
                    href="/analytics"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=140&h=70&fit=crop"
                  />
                  <ProductItem
                    title="Business Intelligence"
                    description="Powerful BI tools for data-driven decisions"
                    href="/bi"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=140&h=70&fit=crop"
                  />
                  <ProductItem
                    title="Machine Learning"
                    description="AI-powered predictive analytics"
                    href="/ml"
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=140&h=70&fit=crop"
                  />
                  <ProductItem
                    title="Data Visualization"
                    description="Beautiful charts and interactive dashboards"
                    href="/viz"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=140&h=70&fit=crop"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Solutions">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/enterprise">Enterprise Solutions</HoveredLink>
                  <HoveredLink href="/startups">Startup Solutions</HoveredLink>
                  <HoveredLink href="/consulting">Consulting Services</HoveredLink>
                  <HoveredLink href="/custom">Custom Development</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Resources">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/blog">Blog</HoveredLink>
                  <HoveredLink href="/documentation">Documentation</HoveredLink>
                  <HoveredLink href="/tutorials">Tutorials</HoveredLink>
                  <HoveredLink href="/case-studies">Case Studies</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Company">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about">About Us</HoveredLink>
                  <HoveredLink href="/careers">Careers</HoveredLink>
                  <HoveredLink href="/contact">Contact</HoveredLink>
                  <HoveredLink href="/press">Press</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:block ml-8">
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Products
                  </h3>
                  <div className="space-y-2">
                    <a href="/analytics" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Data Analytics
                    </a>
                    <a href="/bi" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Business Intelligence
                    </a>
                    <a href="/ml" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Machine Learning
                    </a>
                    <a href="/viz" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Data Visualization
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Solutions
                  </h3>
                  <div className="space-y-2">
                    <a href="/enterprise" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Enterprise Solutions
                    </a>
                    <a href="/startups" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Startup Solutions
                    </a>
                    <a href="/consulting" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Consulting Services
                    </a>
                    <a href="/custom" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Custom Development
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Resources
                  </h3>
                  <div className="space-y-2">
                    <a href="/blog" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Blog
                    </a>
                    <a href="/documentation" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Documentation
                    </a>
                    <a href="/tutorials" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Tutorials
                    </a>
                    <a href="/case-studies" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Case Studies
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Company
                  </h3>
                  <div className="space-y-2">
                    <a href="/about" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      About Us
                    </a>
                    <a href="/careers" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Careers
                    </a>
                    <a href="/contact" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Contact
                    </a>
                    <a href="/press" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      Press
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Get Started Button */}
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <button className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

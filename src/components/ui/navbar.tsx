"use client";
import { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./navbar-menu";
import { navbarData } from "../../data/navbar-data";

export const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [hoveredServicesCategory, setHoveredServicesCategory] = useState<string | null>(null);
  const [hoveredResearchCategory, setHoveredResearchCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [mobileServicesCategoryOpen, setMobileServicesCategoryOpen] = useState<string | null>(null);
  const [mobileResearchCategoryOpen, setMobileResearchCategoryOpen] = useState<string | null>(null);

  // Set default categories for desktop view
  const defaultServicesCategory = navbarData.services[0]?.title || null;
  const defaultResearchCategory = navbarData.researchAndPatents[0]?.title || null;

  const handleMenuChange = (menuItem: string | null) => {
    setActive(menuItem);
    // Reset category selections when switching between menus
    if (menuItem !== "Services") {
      setHoveredServicesCategory(null);
    }
    if (menuItem !== "Research") {
      setHoveredResearchCategory(null);
    }
  };

  // Get the currently displayed category for each dropdown
  const currentServicesCategory = hoveredServicesCategory || defaultServicesCategory;
  const currentResearchCategory = hoveredResearchCategory || defaultResearchCategory;

  // Handle mobile category clicks
  const handleMobileServicesCategoryClick = (categoryTitle: string) => {
    setMobileServicesCategoryOpen(
      mobileServicesCategoryOpen === categoryTitle ? null : categoryTitle
    );
  };

  const handleMobileResearchCategoryClick = (categoryTitle: string) => {
    setMobileResearchCategoryOpen(
      mobileResearchCategoryOpen === categoryTitle ? null : categoryTitle
    );
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-full border border-gray-200/50 dark:bg-black/90 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center justify-between px-8 min-w-[800px] lg:min-w-[1000px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/Zestrics logo (1).PNG" 
                alt="Zestrics" 
                className="h-4 md:h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Menu setActive={handleMenuChange}>
              {/* Services Dropdown */}
              <MenuItem setActive={handleMenuChange} active={active} item="Services">
                <div className="flex flex-col lg:flex-row p-6 min-w-[300px] lg:min-w-[800px]">
                  {/* Main Categories */}
                  <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 lg:pr-8 lg:border-r lg:border-gray-200 lg:dark:border-gray-700 mb-4 lg:mb-0">
                    {navbarData.services.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="relative">
                        <button
                          onMouseEnter={() => setHoveredServicesCategory(category.title)}
                          className={`font-semibold text-sm uppercase tracking-wider cursor-pointer transition-all duration-200 ease-in-out ${
                            currentServicesCategory === category.title
                              ? "text-blue-600 dark:text-blue-400 font-bold"
                              : "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                        >
                          {category.title}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Sub-items Card - Always visible with default or hovered content */}
                  <div className="lg:flex-1 lg:pl-8">
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4 transition-all duration-200">
                        {currentServicesCategory}
                      </h5>
                      <div className="flex flex-col space-y-2">
                        {navbarData.services
                          .find(cat => cat.title === currentServicesCategory)
                          ?.items.map((item, itemIndex) => (
                            <HoveredLink key={itemIndex} href={item.href}>
                              {item.title}
                            </HoveredLink>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MenuItem>

              {/* Research & Patents Dropdown */}
              <MenuItem setActive={handleMenuChange} active={active} item="Research">
                <div className="flex flex-col lg:flex-row p-6 min-w-[300px] lg:min-w-[700px]">
                  {/* Main Categories */}
                  <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 lg:pr-8 lg:border-r lg:border-gray-200 lg:dark:border-gray-700 mb-4 lg:mb-0">
                    {navbarData.researchAndPatents.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="relative">
                        <button
                          onMouseEnter={() => setHoveredResearchCategory(category.title)}
                          className={`font-semibold text-sm uppercase tracking-wider cursor-pointer transition-all duration-200 ease-in-out ${
                            currentResearchCategory === category.title
                              ? "text-blue-600 dark:text-blue-400 font-bold"
                              : "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                        >
                          {category.title}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Sub-items Card - Always visible with default or hovered content */}
                  <div className="lg:flex-1 lg:pl-8">
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4 transition-all duration-200">
                        {currentResearchCategory}
                      </h5>
                      <div className="flex flex-col space-y-2">
                        {navbarData.researchAndPatents
                          .find(cat => cat.title === currentResearchCategory)
                          ?.items.map((item, itemIndex) => (
                            <HoveredLink key={itemIndex} href={item.href}>
                              {item.title}
                            </HoveredLink>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MenuItem>

              {/* Simple Navigation Items */}
              <div className="flex items-center space-x-8">
                <a href="/about" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
                  About
                </a>
                <a href="/blogs" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
                  Blogs
                </a>
                <a href="/careers" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
                  Careers
                </a>
              </div>
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

          {/* Desktop Contact Us Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-4">
              {/* Services Mobile Menu */}
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Services
                    </h3>
                    <svg
                      className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ease-in-out ${
                        mobileServicesOpen ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="mt-3 space-y-3 animate-in fade-in duration-200">
                      {navbarData.services.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="ml-4">
                          <button
                            onClick={() => handleMobileServicesCategoryClick(category.title)}
                            className="flex items-center justify-between w-full text-left mb-2"
                          >
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {category.title}
                            </h4>
                            <svg
                              className={`w-3 h-3 text-gray-400 transition-transform duration-200 ease-in-out ${
                                mobileServicesCategoryOpen === category.title ? "rotate-90" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                          
                          {mobileServicesCategoryOpen === category.title && (
                            <div className="ml-4 space-y-1 animate-in fade-in duration-200">
                              {category.items.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={item.href}
                                  className="flex items-center text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150"
                                >
                                  <svg
                                    className="w-3 h-3 mr-2 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                  {item.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Research & Patents Mobile Menu */}
                <div>
                  <button
                    onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Research & Patents
                    </h3>
                    <svg
                      className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ease-in-out ${
                        mobileResearchOpen ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  
                  {mobileResearchOpen && (
                    <div className="mt-3 space-y-3 animate-in fade-in duration-200">
                      {navbarData.researchAndPatents.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="ml-4">
                          <button
                            onClick={() => handleMobileResearchCategoryClick(category.title)}
                            className="flex items-center justify-between w-full text-left mb-2"
                          >
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {category.title}
                            </h4>
                            <svg
                              className={`w-3 h-3 text-gray-400 transition-transform duration-200 ease-in-out ${
                                mobileResearchCategoryOpen === category.title ? "rotate-90" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                          
                          {mobileResearchCategoryOpen === category.title && (
                            <div className="ml-4 space-y-1 animate-in fade-in duration-200">
                              {category.items.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={item.href}
                                  className="flex items-center text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150"
                                >
                                  <svg
                                    className="w-3 h-3 mr-2 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                  {item.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Navigation Items */}
                <div className="space-y-2">
                  <a href="/about" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    About
                  </a>
                  <a href="/blogs" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    Blogs
                  </a>
                  <a href="/careers" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    Careers
                  </a>
                </div>
              </div>

              {/* Mobile Contact Us Button */}
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <a
                  href="/#contact"
                  className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium block text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

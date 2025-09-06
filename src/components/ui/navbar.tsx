"use client";
import { useState } from "react";
import { MenuItem, HoveredLink } from "./navbar-menu";
import { navbarData } from "../../data/navbar-data";

export const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [hoveredServicesCategory, setHoveredServicesCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServicesCategoryOpen, setMobileServicesCategoryOpen] = useState<string | null>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };


  const handleMenuChange = (menuItem: string | null) => {
    setActive(menuItem);
    // Reset category selections when switching between menus
    if (menuItem !== "Services") {
      setHoveredServicesCategory(null);
    }
  };


  // Handle mobile category clicks
  const handleMobileServicesCategoryClick = (categoryTitle: string) => {
    setMobileServicesCategoryOpen(
      mobileServicesCategoryOpen === categoryTitle ? null : categoryTitle
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 dark:bg-black/90 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
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
            {/* Home Link */}
            <a href="/" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
              Home
            </a>
            {/* Services Dropdown */}
            <MenuItem setActive={handleMenuChange} active={active} item="Services">
              <div className="p-6 min-w-[300px]">
                {/* Main Categories Only */}
                <div className="flex flex-col space-y-4">
                  {navbarData.services.map((category, categoryIndex) => (
                    <div 
                      key={categoryIndex} 
                      className="relative group"
                      onMouseLeave={() => setHoveredServicesCategory(null)}
                    >
                      <div
                        onMouseEnter={() => setHoveredServicesCategory(category.title)}
                        className="cursor-pointer transition-all duration-200 ease-in-out text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 w-full text-left font-semibold text-sm uppercase tracking-wider py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        {category.title}
                        <svg 
                          className="w-4 h-4 inline-block ml-2 opacity-50" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      {/* Sub-services dropdown - appears on hover */}
                      {hoveredServicesCategory === category.title && (
                        <div 
                          className="absolute left-full top-0 ml-2 animate-in fade-in duration-200 z-[60]"
                          onMouseEnter={() => setHoveredServicesCategory(category.title)}
                        >
                          {/* Invisible bridge to prevent dropdown from closing when moving cursor */}
                          <div className="absolute -left-2 top-0 w-2 h-full" />
                          
                          <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl min-w-[280px]">
                            <div className="p-4">
                              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                {category.title}
                              </h4>
                              <div className="flex flex-col space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <HoveredLink key={itemIndex} href={item.href}>
                                    {item.title}
                                  </HoveredLink>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </MenuItem>

            {/* Solutions Link */}
            <a href="/solutions" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
              Solutions
            </a>

            {/* Industries Link */}
            <a href="/industries" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
              Industries
            </a>

            {/* Simple Navigation Items */}
            <a href="/research" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
              Research
            </a>
            <a href="/about" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
              About Us
            </a>
            <a href="/blogs" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
              Blogs
            </a>
            <a href="/careers" className="text-gray-900 hover:opacity-[0.9] dark:text-white transition-opacity font-medium">
              Careers
            </a>
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
              href="#contact"
              onClick={scrollToContact}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg max-h-[80vh] overflow-y-auto">
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


                {/* Other Navigation Items */}
                <div className="space-y-2">
                  <a href="/" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    Home
                  </a>
                  <a href="/research" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    Research
                  </a>

                  {/* Solutions */}
                <div className="pt-2">
                  <a href="/solutions" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    Solutions
                  </a>
                </div>

                  {/* Industries */}
                <div className="pt-2">
                  <a href="/industries" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    Industries
                  </a>
                </div>
                
                  <a href="/about" className="block text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                    About Us
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
                  href="#contact"
                  onClick={scrollToContact}
                  className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium block text-center cursor-pointer"
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

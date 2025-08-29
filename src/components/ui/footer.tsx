"use client";
import { Mail, Linkedin, Instagram, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zestrics</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge data solutions and AI-driven insights to transform your digital landscape.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:contact@zestrics.ai" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@zestrics.ai</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/business-intelligence" className="hover:text-white transition-colors">Business Intelligence</a></li>
              <li><a href="/data-engineering" className="hover:text-white transition-colors">Data Engineering</a></li>
              <li><a href="/ai-consulting" className="hover:text-white transition-colors">AI Consulting</a></li>
              <li><a href="/machine-learning" className="hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="/data-science" className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="/generative-ai" className="hover:text-white transition-colors">Generative AI</a></li>
              <li><a href="/full-stack-development" className="hover:text-white transition-colors">Full Stack Development</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zestrics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://linkedin.com/company/zestrics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/zestrics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/zestrics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/zestrics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

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
              <li><a href="/services#big-data-cloud" className="hover:text-white transition-colors">Big Data & Cloud Frameworks</a></li>
              <li><a href="/services#ai-ml" className="hover:text-white transition-colors">AI/ML</a></li>
              <li><a href="/services#generative-ai-gpt" className="hover:text-white transition-colors">Generative AI & GPT</a></li>
              <li><a href="/services#software-development" className="hover:text-white transition-colors">Software Development</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/blogs" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="/research-patents" className="hover:text-white transition-colors">Research & Patents</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
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

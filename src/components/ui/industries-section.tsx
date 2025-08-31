"use client";
import { Megaphone, DollarSign, ShoppingCart, Gamepad2, Truck, Target } from "lucide-react";

interface Industry {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    id: "advertising",
    title: "Advertising",
    description: "Improve your advertising capabilities through AI and advanced customer behavior analytics.",
    icon: <Megaphone className="w-6 h-6 text-blue-600" />
  },
  {
    id: "fintech",
    title: "FinTech",
    description: "Optimize your processes and improve safety and security through custom AI solutions.",
    icon: <DollarSign className="w-6 h-6 text-green-600" />
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "The entire industry is using AI to make strategic decisions. Don't left behind! Let our data scientists help you!",
    icon: <ShoppingCart className="w-6 h-6 text-orange-600" />
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description: "Reduce customer churn and analyze enormous amounts of data to become more productive and provide outstanding services.",
    icon: <Gamepad2 className="w-6 h-6 text-purple-600" />
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Enable greater operational efficiency by introducing disruptive logistic solutions that solve your business challenges.",
    icon: <Truck className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "custom",
    title: "Your Industry",
    description: "From a different industry? Contact us for data science consulting to learn how our AI company can add value to your business.",
    icon: <Target className="w-6 h-6 text-red-600" />
  }
];

export const IndustriesSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Are Transforming
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Take a look at examples of our work and learn how our clients from different industries have benefited from our{" "}
            <span className="text-blue-500 font-medium cursor-pointer hover:underline">data science consulting services</span>.
          </p>
        </div>

        {/* Content Section - Grid and Image Parallel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl h-80 overflow-hidden">
              <img 
                src="/teamwork_comp.jpeg" 
                alt="Industries Transformation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Industry?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about our approach and how we can help your business thrive in the digital age.
          </p>
          <button
            onClick={() => {
              window.location.href = "/about";
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

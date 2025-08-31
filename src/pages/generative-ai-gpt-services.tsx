"use client";
import { motion } from "motion/react";
import { Navbar } from "../components/ui/navbar";
import { Footer } from "../components/ui/footer";

export function GenerativeAIGPTServicesPage() {
  const services = [
    {
      title: "Generative AI Consulting",
      description: "Strategic guidance to identify and implement generative AI opportunities that drive innovation",
      icon: "🎨",
      features: ["AI strategy development", "Technology assessment", "Use case identification", "Implementation roadmap"]
    },
    {
      title: "Generative AI Development",
      description: "Custom generative AI solutions tailored to your specific business requirements and use cases",
      icon: "🤖",
      features: ["Custom AI models", "Content generation", "Creative automation", "Scalable architecture"]
    },
    {
      title: "GPT Integration Services",
      description: "Seamless integration of GPT models into your existing applications and workflows",
      icon: "🔗",
      features: ["API integration", "Custom prompts", "Fine-tuning", "Performance optimization"]
    },
    {
      title: "AI Chatbot Development",
      description: "Intelligent conversational AI solutions that enhance customer engagement and support",
      icon: "💬",
      features: ["Natural language processing", "Multi-channel support", "Sentiment analysis", "24/7 availability"]
    },
    {
      title: "AI Agent Store",
      description: "Pre-built AI agents and tools that can be customized and deployed for various business needs",
      icon: "🛍️",
      features: ["Ready-to-use agents", "Customization options", "Easy deployment", "Ongoing support"]
    }
  ];

  const roadmapSteps = [
    {
      number: 1,
      title: "Strategy & Consulting",
      description: "Reviewing your current capabilities and business goals to create your generative AI transformation and implementation plan.",
      position: "right"
    },
    {
      number: 2,
      title: "Proof of Value",
      description: "Rapidly develop a proof-of-concept (PoC) to validate and confirm the value of generative AI-driven business cases.",
      position: "left"
    },
    {
      number: 3,
      title: "Minimum Viable Product",
      description: "Building an MVP solution to make it available for your customers and allow you to test your product idea and gather customer feedback.",
      position: "right"
    },
    {
      number: 4,
      title: "Maintenance",
      description: "Improvements to ensure product performance, enhance user experience and continuously keep up with the changing environment.",
      position: "left"
    }
  ];

  const benefits = [
    {
      title: "Content Creation",
      description: "Automate content generation for marketing, documentation, and creative projects",
      icon: "✍️"
    },
    {
      title: "Customer Engagement",
      description: "Enhance customer interactions with intelligent conversational AI",
      icon: "🎯"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce manual work and increase productivity with AI automation",
      icon: "💰"
    },
    {
      title: "Innovation",
      description: "Stay ahead with cutting-edge generative AI technologies",
      icon: "🚀"
    }
  ];

  const useCases = [
    {
      title: "Content Generation",
      description: "Automated creation of articles, reports, and marketing copy",
      icon: "📝"
    },
    {
      title: "Code Generation",
      description: "AI-powered code generation and software development assistance",
      icon: "💻"
    },
    {
      title: "Image Generation",
      description: "Create custom images and graphics for marketing and design",
      icon: "🎨"
    },
    {
      title: "Customer Support",
      description: "Intelligent chatbots and virtual assistants for 24/7 support",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Generative AI & <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">GPT</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8">
              Unlock the power of generative AI to create, innovate, and transform your business processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#footer"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Generative AI & GPT Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge generative AI solutions that create value and drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Generative AI Use Cases
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how generative AI can transform your business processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Solve Problems
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven methodology for delivering successful generative AI solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 h-full"></div>
            
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: step.position === "left" ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex items-center mb-12 ${
                  step.position === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${step.position === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div className="text-2xl font-bold text-orange-500 mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Generative AI Solutions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of working with generative AI experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Harness the Power of Generative AI?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let's discuss how our generative AI and GPT solutions can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#footer"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/#footer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

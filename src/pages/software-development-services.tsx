"use client";
import { motion } from "motion/react";
import { Navbar } from "../components/ui/navbar";
import { Footer } from "../components/ui/footer";

export function SoftwareDevelopmentServicesPage() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies and best practices",
      icon: "🌐",
      features: ["Responsive design", "Modern frameworks", "API development", "Performance optimization"]
    },
    {
      title: "AI Mobile App Development",
      description: "Intelligent mobile applications that leverage AI to deliver exceptional user experiences",
      icon: "📱",
      features: ["AI integration", "Cross-platform", "Native performance", "App store optimization"]
    }
  ];

  const technologies = [
    {
      title: "Frontend Technologies",
      description: "Modern frameworks and libraries for responsive user interfaces",
      icon: "🎨",
      items: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"]
    },
    {
      title: "Backend Technologies",
      description: "Robust server-side solutions for scalable applications",
      icon: "⚙️",
      items: ["Node.js", "Python", "Java", "Go", "Microservices"]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform and native mobile app development",
      icon: "📱",
      items: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"]
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud-native development and deployment solutions",
      icon: "☁️",
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    }
  ];

  const roadmapSteps = [
    {
      number: 1,
      title: "Strategy & Consulting",
      description: "Reviewing your current capabilities and business goals to create your software development and implementation plan.",
      position: "right"
    },
    {
      number: 2,
      title: "Proof of Value",
      description: "Rapidly develop a proof-of-concept (PoC) to validate and confirm the value of software-driven business cases.",
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
      title: "Custom Solutions",
      description: "Tailored software solutions that fit your unique business needs",
      icon: "🎯"
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business and handle increasing demands",
      icon: "📈"
    },
    {
      title: "Modern Technologies",
      description: "Cutting-edge tech stack for optimal performance and security",
      icon: "🚀"
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance, updates, and technical support",
      icon: "🛠️"
    }
  ];

  const developmentProcess = [
    {
      title: "Discovery & Planning",
      description: "Understanding requirements and creating detailed project plans",
      icon: "🔍"
    },
    {
      title: "Design & Prototyping",
      description: "Creating user interfaces and interactive prototypes",
      icon: "✏️"
    },
    {
      title: "Development",
      description: "Building the application with clean, maintainable code",
      icon: "💻"
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and reliability",
      icon: "🧪"
    },
    {
      title: "Deployment",
      description: "Smooth deployment to production with zero downtime",
      icon: "🚀"
    },
    {
      title: "Maintenance",
      description: "Ongoing support, updates, and performance optimization",
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">
              Custom software solutions that drive innovation, efficiency, and growth for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#footer"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
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
              Our Software Development Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive software solutions designed to meet your business objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Modern, proven technologies for building robust and scalable applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tech.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology for delivering high-quality software solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
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
              Our proven methodology for delivering successful software solutions
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Software Development?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of working with software development experts
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
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Custom Software?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how our software development solutions can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#footer"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/#footer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
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

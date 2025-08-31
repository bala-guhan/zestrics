"use client";
import { motion } from "motion/react";
import { Navbar } from "../components/ui/navbar";
import { Footer } from "../components/ui/footer";
import { navbarData } from "../data/navbar-data";

export function ResearchPatentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Research & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Patents</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive intellectual property services and research solutions to protect and enhance your innovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Research & Patent Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From IP search to portfolio management, we provide end-to-end patent solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* IP Search Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">IP Search Services</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive intellectual property search services to help you understand the patent landscape and make informed decisions about your innovations.
              </p>
              
              <div className="space-y-3">
                {navbarData.researchAndPatents[0].items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Patent Portfolio Management */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Patent Portfolio Management</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Strategic management of your patent portfolio to maximize value, reduce costs, and align with your business objectives.
              </p>
              
              <div className="space-y-3">
                {navbarData.researchAndPatents[1].items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Research & Patent Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Expert guidance backed by years of experience in intellectual property
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of experienced patent attorneys, researchers, and IP professionals with deep technical expertise.",
                icon: "👥"
              },
              {
                title: "Comprehensive Coverage",
                description: "We provide end-to-end IP services from initial search to portfolio management and commercialization.",
                icon: "🔍"
              },
              {
                title: "Global Reach",
                description: "Access to international patent databases and expertise in multiple jurisdictions worldwide.",
                icon: "🌍"
              },
              {
                title: "Cost Effective",
                description: "Optimized processes and tools that deliver high-quality results at competitive rates.",
                icon: "💰"
              },
              {
                title: "Fast Turnaround",
                description: "Quick and efficient service delivery without compromising on quality or accuracy.",
                icon: "⚡"
              },
              {
                title: "Strategic Insights",
                description: "Actionable recommendations that align with your business goals and innovation strategy.",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A systematic approach to delivering exceptional IP services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your innovation, business goals, and IP requirements"
              },
              {
                step: "02",
                title: "Research",
                description: "Comprehensive patent search and landscape analysis"
              },
              {
                step: "03",
                title: "Strategy",
                description: "Developing IP strategy aligned with business objectives"
              },
              {
                step: "04",
                title: "Execution",
                description: "Implementation and ongoing portfolio management"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Protect Your Innovations?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our research and patent services can safeguard your intellectual property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#footer"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

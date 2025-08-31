"use client";
import { motion } from "motion/react";
import { Navbar } from "../components/ui/navbar";
import { Footer } from "../components/ui/footer";

export function AboutPage() {
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
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zestrics</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company specializing in AI, data science, and digital transformation solutions that drive business growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                To empower organizations with cutting-edge AI and data solutions that transform their business operations, enhance customer experiences, and drive sustainable growth in the digital age.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe that technology should be accessible, ethical, and impactful, creating value for businesses and society as a whole.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                To be the leading partner for organizations seeking to harness the power of artificial intelligence and data science to solve complex business challenges and create competitive advantages.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We envision a future where AI and data-driven insights are seamlessly integrated into every aspect of business operations, enabling organizations to make smarter decisions and deliver exceptional value to their customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI and data science, exploring new technologies and methodologies to deliver cutting-edge solutions.",
                icon: "🚀"
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards of quality in everything we do, from code development to client relationships, ensuring exceptional outcomes.",
                icon: "⭐"
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership, working closely with our clients to understand their needs and co-create solutions.",
                icon: "🤝"
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical practices, building trust with our clients and maintaining the highest professional standards.",
                icon: "🔒"
              },
              {
                title: "Impact",
                description: "We focus on delivering measurable business value and positive outcomes that drive real change and growth for our clients.",
                icon: "📈"
              },
              {
                title: "Learning",
                description: "We foster a culture of continuous learning and development, staying ahead of industry trends and expanding our expertise.",
                icon: "📚"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A team of passionate experts in AI, data science, and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Deep expertise in developing and deploying AI solutions",
                count: "50+"
              },
              {
                title: "Data Science",
                description: "Advanced analytics and insights generation",
                count: "30+"
              },
              {
                title: "Software Development",
                description: "Full-stack development and system architecture",
                count: "40+"
              },
              {
                title: "Business Intelligence",
                description: "Data visualization and reporting solutions",
                count: "25+"
              }
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {expertise.count}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {expertise.description}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI and data solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#footer"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

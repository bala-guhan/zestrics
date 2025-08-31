import { motion } from "motion/react";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/bg-noisy-slate.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI and data solutions? 
            Reach out to our expert team and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/Zestrics logo (1).PNG"
                  alt="Zestrics Logo"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-center md:text-left"
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  Reach Out to Our Mailboxes
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get in touch with our team of experts. We're here to help you navigate the world of AI and data science.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <a 
                    href="mailto:info@zestrics.com" 
                    className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    info@zestrics.com
                  </a>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">
                    General Inquiries & Support
                  </span>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span className="text-lg text-gray-700">
                    Available Mon-Fri, 9AM-6PM EST
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <button
                  onClick={() => {
                    window.location.href = "mailto:info@zestrics.com";
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send us an Email
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

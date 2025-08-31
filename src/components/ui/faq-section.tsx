import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "What services does Zestrics offer?",
    answer: "Zestrics offers comprehensive data science and AI solutions including Big Data & Cloud Frameworks, AI/ML development, Generative AI & GPT services, and custom Software Development. We specialize in business intelligence, data engineering, and AI-powered applications."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. Small projects can take 2-4 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive ongoing support and maintenance services. This includes system monitoring, regular updates, performance optimization, and technical support. We also provide training for your team to ensure smooth operation of the solutions we develop."
  },
  {
    question: "What industries do you work with?",
    answer: "We work across various industries including healthcare, finance, retail, manufacturing, logistics, and technology. Our solutions are tailored to meet the specific needs and compliance requirements of each industry, ensuring optimal results for your business."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "We implement enterprise-grade security measures including encryption, secure data transmission, access controls, and compliance with industry standards like GDPR, HIPAA, and SOC 2. We also conduct regular security audits and provide detailed security documentation."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely! We specialize in seamless integration with existing systems and platforms. Our team works with various technologies and can integrate with your current infrastructure, databases, APIs, and third-party services to ensure smooth operation."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including project-based pricing, retainer agreements, and subscription-based services. Pricing depends on project scope, complexity, and ongoing support requirements. We provide detailed quotes after understanding your specific needs."
  },
  {
    question: "Do you offer consultation services?",
    answer: "Yes, we provide comprehensive consultation services to help you understand how AI and data science can benefit your business. This includes technology assessment, strategy development, implementation planning, and ROI analysis to ensure your investment delivers maximum value."
  }
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
}

const FAQItem = ({ faq, index }: FAQItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 px-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
      >
        <h3 className="font-semibold text-gray-900 dark:text-white text-left pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-sm">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get answers to common questions about our services and solutions
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="inline-flex items-center px-8 py-1 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

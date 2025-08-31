import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight } from "lucide-react";

const researchFaqs = [
  {
    question: "What is the difference between patentability search and freedom to operate search?",
    answer: "A patentability search evaluates whether your invention is novel and non-obvious compared to existing prior art, helping determine if you can obtain a patent. A freedom to operate (FTO) search identifies existing patents that your product or process might infringe, helping you assess commercialization risks and potential licensing needs."
  },
  {
    question: "How long does a comprehensive patent search typically take?",
    answer: "The timeline varies based on the scope and complexity. A basic patentability search typically takes 1-2 weeks, while comprehensive FTO searches may take 2-4 weeks. Complex searches involving multiple jurisdictions or technical fields may require additional time. We provide detailed timelines during project planning."
  },
  {
    question: "What jurisdictions do you cover in your patent searches?",
    answer: "We conduct searches across major jurisdictions including the US (USPTO), European Patent Office (EPO), World Intellectual Property Organization (WIPO), and other key markets. We can also search in specific countries based on your commercialization strategy and target markets."
  },
  {
    question: "How do you ensure the quality and accuracy of your patent searches?",
    answer: "Our searches are conducted by experienced patent analysts using advanced search tools and databases. We employ multiple search strategies, cross-reference results, and provide detailed analysis with relevance rankings. Each search includes comprehensive documentation and expert review to ensure accuracy."
  },
  {
    question: "What is included in a patent portfolio analysis?",
    answer: "Our portfolio analysis includes assessment of patent strength, market relevance, competitive landscape, maintenance cost analysis, and monetization opportunities. We provide strategic recommendations for portfolio optimization, including which patents to maintain, abandon, or license based on business objectives."
  },
  {
    question: "Can you help with patent drafting and prosecution?",
    answer: "Yes, we provide comprehensive patent drafting and prosecution support. This includes patent specification drafting, claims development, illustration creation, and assistance with patent office communications. Our team works with patent attorneys to ensure high-quality applications that maximize protection scope."
  },
  {
    question: "What are Standard Essential Patents (SEPs) and how do you handle them?",
    answer: "SEPs are patents that are essential to implementing a technical standard. We provide SEP identification, analysis, and licensing strategy support. This includes FRAND compliance assessment, licensing negotiation support, and risk management for companies implementing standards in their products."
  },
  {
    question: "How do you handle confidential information during patent searches?",
    answer: "We maintain strict confidentiality protocols and can sign NDAs as needed. All client information is handled securely, and we use secure communication channels. Our team is trained in confidentiality best practices and we can work with your existing security requirements."
  },
  {
    question: "What is the cost structure for your patent services?",
    answer: "Our pricing is project-based and depends on the scope and complexity of the work. We provide detailed quotes after understanding your specific requirements. Costs typically include search fees, analysis time, and report preparation. We offer package deals for multiple services and ongoing portfolio management."
  },
  {
    question: "Do you provide ongoing patent monitoring and alert services?",
    answer: "Yes, we offer patent monitoring services to track new patent publications in your technology areas. This includes regular alerts for relevant patents, competitive intelligence updates, and strategic recommendations based on new developments in your field."
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

export const ResearchFAQSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our patent and IP research services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {researchFaqs.map((faq, index) => (
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
          <p className="text-gray-600 mb-6">
            Still have questions about our patent and IP services?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Our IP Experts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

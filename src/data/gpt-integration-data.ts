import { ServicePageProps } from "../components/ServicePage";

export const gptIntegrationData: ServicePageProps = {
  // Hero Section
  heroTitle: "GPT Integration Services",
  heroSubtitle: "Large Language Models (LLMs) like GPT are redefining how businesses interact with data, customers, and workflows. By integrating GPT into enterprise systems, organizations can automate conversations, summarize insights, generate content, and enhance decision-making with unprecedented efficiency.",
  heroGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our GPT Integration Services",
  servicesDescription: "Help businesses harness the power of GPT safely and effectively by embedding it into applications, platforms, and processes. We design and deploy solutions that align with your business goals while ensuring security, scalability, and compliance.",
  services: [
    {
      title: "GPT-Powered Chatbots & Virtual Assistants",
      description: "Deliver natural, human-like conversations with intelligent AI assistants",
      icon: "💬",
      features: ["Natural conversations", "Human-like responses", "Intelligent assistants", "24/7 availability", "Multi-language support"]
    },
    {
      title: "Knowledge Management Automation",
      description: "Enable document summarization, report generation, and FAQ automation",
      icon: "📚",
      features: ["Document summarization", "Report generation", "FAQ automation", "Knowledge extraction", "Content organization"]
    },
    {
      title: "Enhanced Customer Engagement",
      description: "Provide personalized recommendations and real-time query resolution",
      icon: "🎯",
      features: ["Personalized recommendations", "Real-time support", "Query resolution", "Customer insights", "Engagement optimization"]
    },
    {
      title: "Enterprise System Integration",
      description: "Embed GPT into CRMs, ERPs, HR tools, and business workflows",
      icon: "🔗",
      features: ["CRM integration", "ERP integration", "HR tools", "Business workflows", "Seamless connectivity"]
    },
    {
      title: "Responsible AI Adoption",
      description: "Address data privacy, ethical usage, and model fine-tuning",
      icon: "🛡️",
      features: ["Data privacy", "Ethical AI", "Model fine-tuning", "Compliance", "Security"]
    },
    {
      title: "Strategic AI Asset Development",
      description: "Transform GPT from conversational tool to strategic business asset",
      icon: "🚀",
      features: ["Strategic implementation", "Business value", "Productivity boost", "Competitive advantage", "ROI optimization"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Natural Language Processing",
      description: "Leverage GPT's advanced language capabilities for human-like interactions",
      icon: "🗣️"
    },
    {
      title: "Automation & Efficiency",
      description: "Automate repetitive tasks and streamline business processes with GPT",
      icon: "⚡"
    },
    {
      title: "Enhanced Decision Making",
      description: "Use GPT to analyze data and provide insights for better business decisions",
      icon: "🧠"
    },
    {
      title: "Scalable Solutions",
      description: "Build GPT integrations that scale with your business growth",
      icon: "📈"
    },
    {
      title: "Seamless Integration",
      description: "Integrate GPT seamlessly with your existing enterprise systems",
      icon: "🔗"
    },
    {
      title: "Strategic Advantage",
      description: "Transform GPT from a tool into a strategic business asset",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "GPT-Powered Conversational AI",
      description: "We develop intelligent chatbots and virtual assistants powered by GPT that deliver natural, human-like conversations. Our solutions provide 24/7 customer support, handle complex queries, and offer personalized interactions across multiple channels.",
      features: ["Natural conversations", "Human-like responses", "24/7 availability", "Multi-channel support", "Personalized interactions"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Knowledge Management & Automation",
      description: "We integrate GPT into knowledge management systems to automate document summarization, report generation, and FAQ handling. Our solutions help organizations process large volumes of information efficiently and extract valuable insights.",
      features: ["Document processing", "Report generation", "FAQ automation", "Knowledge extraction", "Information synthesis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Enterprise System Integration",
      description: "We embed GPT capabilities into existing enterprise systems including CRMs, ERPs, and HR platforms. Our integrations enhance workflow efficiency, provide intelligent insights, and automate routine tasks across business processes.",
      features: ["CRM integration", "ERP enhancement", "HR automation", "Workflow optimization", "Process automation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our GPT Integration Process",
  roadmapDescription: "A systematic approach to integrating GPT into your business",
  roadmapSteps: [
    {
      number: 1,
      title: "Identify GPT-Powered Use Cases",
      description: "Identify specific use cases for GPT integration including chat, automation, and content generation.",
      position: "right"
    },
    {
      number: 2,
      title: "Design Integration Blueprint",
      description: "Create a comprehensive integration plan and technical architecture for GPT implementation.",
      position: "left"
    },
    {
      number: 3,
      title: "Customize GPT Responses & Workflows",
      description: "Fine-tune GPT responses and design custom workflows for your specific business needs.",
      position: "right"
    },
    {
      number: 4,
      title: "Integrate with Apps/CRMs/ERPs",
      description: "Seamlessly integrate GPT capabilities into your existing applications and business systems.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy & Optimize Performance",
      description: "Deploy the integration and continuously optimize performance for maximum business value.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from organizations that have successfully integrated GPT with our services",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Head of Digital Innovation",
      company: "TechFlow Solutions",
      content: "Zestrics helped us integrate GPT into our customer service platform. The results were incredible - we saw a 70% reduction in response times and significantly improved customer satisfaction.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Operations",
      company: "EnterpriseCorp Inc",
      content: "Their GPT integration services transformed our knowledge management system. We can now process and summarize documents in minutes instead of hours.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "CTO",
      company: "InnovateTech Solutions",
      content: "The GPT integration they built for our CRM has revolutionized how we interact with customers. It's like having an intelligent assistant for every team member.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "GPT Integration Insights",
  blogDescription: "Stay updated with the latest trends and best practices in GPT integration",
  blogCategories: [
    "GPT Applications",
    "Enterprise Integration", 
    "Conversational AI",
    "Knowledge Management",
    "Automation"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Integrating GPT into Enterprise Systems: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Enterprise Integration"
    },
    {
      id: 2,
      title: "Building GPT-Powered Chatbots for Customer Service",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Conversational AI"
    },
    {
      id: 3,
      title: "Automating Knowledge Management with GPT",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Knowledge Management"
    }
  ],
  
  // FAQ Section
  faqTitle: "GPT Integration Services FAQ",
  faqDescription: "Common questions about GPT integration and our services",
  faqs: [
    {
      question: "What is GPT integration?",
      answer: "GPT integration involves embedding Large Language Models like GPT into your business applications, systems, and workflows to enhance automation, improve customer interactions, and streamline operations."
    },
    {
      question: "What types of systems can GPT be integrated with?",
      answer: "GPT can be integrated with various systems including CRMs, ERPs, HR platforms, customer service tools, knowledge management systems, and custom business applications."
    },
    {
      question: "How do you ensure data security in GPT integration?",
      answer: "We implement robust security measures including data encryption, access controls, API security, and compliance with data protection regulations to ensure your data remains secure."
    },
    {
      question: "How long does GPT integration take?",
      answer: "Integration timelines vary from 1-3 months depending on complexity, system requirements, and customization needs. We provide detailed project timelines during planning."
    },
    {
      question: "Do you provide ongoing support for GPT integrations?",
      answer: "Yes, we provide comprehensive ongoing support including monitoring, optimization, updates, troubleshooting, and performance improvements to ensure your GPT integration continues to deliver value."
    },
    {
      question: "Can GPT be customized for specific business needs?",
      answer: "Absolutely. We customize GPT responses, workflows, and integrations to align with your specific business requirements, industry standards, and organizational processes."
    },
    {
      question: "What are the benefits of GPT integration?",
      answer: "Benefits include improved customer service, automated content generation, enhanced decision-making, increased operational efficiency, and better knowledge management capabilities."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Integrate GPT into Your Business?",
  ctaDescription: "Let's discuss how our GPT integration services can transform your business operations and customer interactions",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-indigo-600"
};

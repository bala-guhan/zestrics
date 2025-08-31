import { ServicePageProps } from "../components/ServicePage";

export const aiAgentStoreData: ServicePageProps = {
  // Hero Section
  heroTitle: "AI Agent Store",
  heroSubtitle: "As businesses increasingly adopt AI, the need for ready-to-deploy, task-specific AI agents is growing rapidly. AI Agents go beyond simple chatbots— they are autonomous, intelligent assistants that can analyze data, make decisions, and perform actions across business systems.",
  heroGradient: "bg-gradient-to-r from-orange-600 to-red-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our AI Agent Store Services",
  servicesDescription: "Provide organizations with a marketplace of customizable AI agents designed for diverse business functions. From customer support to analytics, marketing, and operations, we help you choose, customize, and integrate AI agents that accelerate digital transformation.",
  services: [
    {
      title: "Pre-Built AI Agent Library",
      description: "Access a library of pre-built AI agents for customer service, HR, sales, finance, and IT support",
      icon: "📚",
      features: ["Customer service", "HR support", "Sales assistance", "Finance automation", "IT support"]
    },
    {
      title: "Custom Agent Development",
      description: "Customize agents for unique workflows and tailor responses, logic, and integrations",
      icon: "⚙️",
      features: ["Custom workflows", "Tailored responses", "Business logic", "Custom integrations", "Unique requirements"]
    },
    {
      title: "Multi-System Integration",
      description: "Connect agents with CRMs, ERPs, analytics dashboards, and cloud applications",
      icon: "🔗",
      features: ["CRM integration", "ERP connectivity", "Analytics dashboards", "Cloud apps", "Seamless connectivity"]
    },
    {
      title: "Secure Enterprise Deployment",
      description: "Deploy securely and at scale with compliance, data governance, and enterprise-level scalability",
      icon: "🛡️",
      features: ["Secure deployment", "Compliance", "Data governance", "Enterprise scalability", "Security"]
    },
    {
      title: "Continuous Performance Improvement",
      description: "Monitor, retrain, and optimize agents for evolving use cases and business needs",
      icon: "📈",
      features: ["Performance monitoring", "Agent retraining", "Optimization", "Evolving use cases", "Continuous improvement"]
    },
    {
      title: "Flexible Deployment Options",
      description: "From ready-made solutions to custom-built agents for rapid AI adoption",
      icon: "🚀",
      features: ["Ready-made solutions", "Custom agents", "Rapid deployment", "Flexible options", "Quick adoption"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Ready-to-Deploy Solutions",
      description: "Access pre-built AI agents that can be deployed immediately without extensive development",
      icon: "⚡"
    },
    {
      title: "Task-Specific Intelligence",
      description: "Deploy specialized AI agents designed for specific business functions and workflows",
      icon: "🎯"
    },
    {
      title: "Autonomous Decision Making",
      description: "Enable AI agents to analyze data and make decisions independently across business systems",
      icon: "🧠"
    },
    {
      title: "Cost-Effective Implementation",
      description: "Reduce development costs and time with pre-built, customizable AI agent solutions",
      icon: "💰"
    },
    {
      title: "Scalable Architecture",
      description: "Deploy AI agents that scale with your business growth and evolving needs",
      icon: "📈"
    },
    {
      title: "Accelerated Digital Transformation",
      description: "Speed up AI adoption and digital transformation with ready-to-use intelligent agents",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Pre-Built AI Agent Marketplace",
      description: "We provide a comprehensive library of pre-built AI agents designed for various business functions including customer service, HR, sales, finance, and IT support. Our agents are ready to deploy and can be quickly customized to meet your specific business requirements.",
      features: ["Pre-built agents", "Multiple functions", "Quick deployment", "Easy customization", "Business-ready"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Custom Agent Development & Integration",
      description: "We develop custom AI agents tailored to your unique business workflows and integrate them seamlessly with your existing systems including CRMs, ERPs, analytics platforms, and cloud applications. Our agents can analyze data, make decisions, and perform actions autonomously.",
      features: ["Custom development", "System integration", "Autonomous operation", "Data analysis", "Decision making"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Enterprise-Grade Security & Governance",
      description: "We ensure secure deployment of AI agents with enterprise-grade security, compliance, and data governance. Our solutions are designed to scale with your business while maintaining the highest standards of security and regulatory compliance.",
      features: ["Enterprise security", "Compliance", "Data governance", "Scalable deployment", "Regulatory standards"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our AI Agent Store Process",
  roadmapDescription: "A systematic approach to deploying AI agents",
  roadmapSteps: [
    {
      number: 1,
      title: "Assess Business Workflows Needing Automation",
      description: "Identify business processes and workflows that can benefit from AI agent automation.",
      position: "right"
    },
    {
      number: 2,
      title: "Select Pre-Built/Custom AI Agents",
      description: "Choose from pre-built agents or request custom development based on business needs.",
      position: "left"
    },
    {
      number: 3,
      title: "Customize Agents for Business Needs",
      description: "Tailor agent responses, logic, and integrations to align with specific business requirements.",
      position: "right"
    },
    {
      number: 4,
      title: "Integrate with Systems & Workflows",
      description: "Seamlessly integrate AI agents with existing business systems and workflows.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy & Scale Agents Enterprise-Wide",
      description: "Deploy AI agents across the enterprise and scale as business needs grow.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from organizations that have successfully deployed AI agents from our store",
  testimonials: [
    {
      name: "Thomas Anderson",
      role: "Head of Digital Transformation",
      company: "EnterpriseTech Solutions",
      content: "Zestrics' AI Agent Store helped us deploy intelligent agents across multiple departments. We've automated 60% of our routine tasks and improved operational efficiency significantly.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Rachel Green",
      role: "VP of Operations",
      company: "InnovateCorp Inc",
      content: "Their pre-built AI agents were exactly what we needed. We deployed customer service and HR agents in just two weeks, and the results have been outstanding.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Kevin Park",
      role: "CTO",
      company: "TechSolutions Ltd",
      content: "The custom AI agents they developed for our sales and finance teams have transformed how we operate. The autonomous decision-making capabilities are game-changing.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "AI Agent Store Insights",
  blogDescription: "Stay updated with the latest trends and best practices in AI agent deployment",
  blogCategories: [
    "AI Agents",
    "Automation", 
    "Enterprise Deployment",
    "Custom Development",
    "Integration"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Deploying AI Agents in Enterprise Environments",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Enterprise Deployment"
    },
    {
      id: 2,
      title: "Custom AI Agent Development: Best Practices",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Custom Development"
    },
    {
      id: 3,
      title: "Integrating AI Agents with Business Systems",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Integration"
    }
  ],
  
  // FAQ Section
  faqTitle: "AI Agent Store FAQ",
  faqDescription: "Common questions about AI agents and our store services",
  faqs: [
    {
      question: "What are AI agents?",
      answer: "AI agents are autonomous, intelligent assistants that can analyze data, make decisions, and perform actions across business systems. They go beyond simple chatbots to provide comprehensive business automation."
    },
    {
      question: "What types of AI agents do you offer?",
      answer: "We offer pre-built AI agents for customer service, HR, sales, finance, IT support, and custom agents tailored to specific business needs and workflows."
    },
    {
      question: "How quickly can I deploy AI agents?",
      answer: "Pre-built agents can be deployed in 1-2 weeks, while custom agents typically take 4-8 weeks depending on complexity and integration requirements."
    },
    {
      question: "Do you provide customization services?",
      answer: "Yes, we provide comprehensive customization services to tailor AI agents to your specific business workflows, integrate with existing systems, and meet unique requirements."
    },
    {
      question: "How do you ensure AI agent security?",
      answer: "We implement enterprise-grade security measures including data encryption, access controls, secure integrations, and compliance with data protection regulations."
    },
    {
      question: "Can AI agents integrate with existing systems?",
      answer: "Absolutely. Our AI agents can integrate with CRMs, ERPs, analytics platforms, cloud applications, and custom business systems to provide seamless automation."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide continuous support including monitoring, optimization, agent retraining, performance improvements, and technical assistance to ensure your AI agents continue to deliver value."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Deploy AI Agents?",
  ctaDescription: "Let's discuss how our AI Agent Store can help you accelerate digital transformation with intelligent automation",
  ctaGradient: "bg-gradient-to-r from-orange-600 to-red-600"
};

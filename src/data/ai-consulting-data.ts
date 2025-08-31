import { ServicePageProps } from "../components/ServicePage";

export const aiConsultingData: ServicePageProps = {
  // Hero Section
  heroTitle: "AI Consulting",
  heroSubtitle: "Artificial Intelligence (AI) is no longer just a buzzword, it's a game-changer that helps organizations unlock new opportunities, automate processes, and deliver smarter customer experiences. However, adopting AI effectively requires the right strategy, tools, and expertise.",
  heroGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our AI Consulting Services",
  servicesDescription: "Empower businesses to identify, design, and implement AI solutions that align with their goals and create measurable impact. We help organizations cut through the hype and focus on AI applications that truly drive value.",
  services: [
    {
      title: "Define AI Strategy",
      description: "Align AI initiatives with business objectives and identify high-value use cases",
      icon: "🎯",
      features: ["Strategic planning", "Use case identification", "Business alignment", "ROI analysis"]
    },
    {
      title: "Machine Learning & Deep Learning",
      description: "Build intelligent models that learn, adapt, and improve over time",
      icon: "🧠",
      features: ["ML models", "Deep learning", "Neural networks", "Model optimization"]
    },
    {
      title: "Automate Decision-Making",
      description: "Deploy AI solutions that streamline workflows and improve efficiency",
      icon: "⚡",
      features: ["Process automation", "Workflow optimization", "Decision automation", "Efficiency improvement"]
    },
    {
      title: "Enhance Customer Engagement",
      description: "Use AI for personalization, recommendation engines, and predictive insights",
      icon: "👥",
      features: ["Personalization", "Recommendations", "Predictive insights", "Customer experience"]
    },
    {
      title: "Scale with Confidence",
      description: "Adopt AI responsibly with focus on governance, ethics, and compliance",
      icon: "🛡️",
      features: ["AI governance", "Ethical AI", "Compliance", "Responsible scaling"]
    },
    {
      title: "End-to-End Partnership",
      description: "Partner with organizations at every stage of their AI journey",
      icon: "🤝",
      features: ["Strategic partnership", "Implementation support", "Continuous guidance", "Transformation journey"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Strategic AI Adoption",
      description: "Move from experimentation to enterprise-scale AI transformation with expert guidance",
      icon: "🚀"
    },
    {
      title: "Measurable Impact",
      description: "Focus on AI applications that truly drive value and deliver measurable business outcomes",
      icon: "📊"
    },
    {
      title: "Cut Through Hype",
      description: "Navigate the AI landscape with practical, proven strategies and solutions",
      icon: "🎯"
    },
    {
      title: "Expert Guidance",
      description: "Leverage deep expertise in AI strategy, implementation, and governance",
      icon: "👨‍💼"
    },
    {
      title: "Risk Mitigation",
      description: "Adopt AI responsibly with proper governance, ethics, and compliance frameworks",
      icon: "🛡️"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with strategic AI implementation",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "AI Strategy & Roadmap Development",
      description: "We help organizations develop comprehensive AI strategies that align with business objectives and create clear roadmaps for implementation. Our approach focuses on identifying high-value use cases and building sustainable AI capabilities.",
      features: ["Strategic planning", "Use case identification", "Roadmap development", "Capability building", "ROI analysis"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "AI Model Development & Deployment",
      description: "We design and implement intelligent models that learn, adapt, and improve over time. From machine learning to deep learning solutions, we build models that deliver real business value and integrate seamlessly with existing systems.",
      features: ["Model development", "Deep learning", "ML algorithms", "Model deployment", "Integration"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "AI Governance & Ethics",
      description: "We ensure responsible AI adoption with comprehensive governance frameworks, ethical guidelines, and compliance measures. Our approach helps organizations build trust and maintain accountability in their AI initiatives.",
      features: ["AI governance", "Ethical frameworks", "Compliance", "Trust building", "Accountability"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our AI Consulting Process",
  roadmapDescription: "A systematic approach to AI strategy and implementation",
  roadmapSteps: [
    {
      number: 1,
      title: "Identify AI Opportunities & Use Cases",
      description: "Analyze business processes and identify high-value AI opportunities.",
      position: "right"
    },
    {
      number: 2,
      title: "Assess Data Quality & Feasibility",
      description: "Evaluate data readiness and technical feasibility for AI implementation.",
      position: "left"
    },
    {
      number: 3,
      title: "Build AI Adoption Roadmap",
      description: "Create a comprehensive roadmap for AI adoption and implementation.",
      position: "right"
    },
    {
      number: 4,
      title: "Recommend Tools & Frameworks",
      description: "Select appropriate AI tools, frameworks, and technologies for your needs.",
      position: "left"
    },
    {
      number: 5,
      title: "Guide Implementation & Governance",
      description: "Provide ongoing guidance for implementation and establish governance frameworks.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from organizations that have transformed their business with our AI consulting services",
  testimonials: [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Data Officer",
      company: "TechInnovate Corp",
      content: "Zestrics helped us develop a comprehensive AI strategy that transformed our business operations. Their expertise in cutting through the hype and focusing on practical solutions was invaluable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Technology",
      company: "DataFirst Solutions",
      content: "Their AI consulting services helped us identify the right use cases and implement solutions that delivered measurable business impact. The strategic guidance was exceptional.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "CTO",
      company: "FutureTech Inc",
      content: "The AI governance and ethics framework they helped us establish gave us confidence to scale our AI initiatives responsibly. Their expertise is world-class.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "AI Consulting Insights",
  blogDescription: "Stay updated with the latest trends and best practices in AI strategy and implementation",
  blogCategories: [
    "AI Strategy",
    "Machine Learning", 
    "AI Governance",
    "Implementation",
    "Ethics & Compliance"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building a Successful AI Strategy: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "AI Strategy"
    },
    {
      id: 2,
      title: "AI Governance: Ensuring Responsible AI Adoption",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "AI Governance"
    },
    {
      id: 3,
      title: "From Experimentation to Enterprise AI: A Roadmap",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Implementation"
    }
  ],
  
  // FAQ Section
  faqTitle: "AI Consulting FAQ",
  faqDescription: "Common questions about AI consulting and our services",
  faqs: [
    {
      question: "What is AI consulting?",
      answer: "AI consulting involves helping organizations develop strategies, identify opportunities, and implement AI solutions that align with business objectives and create measurable impact."
    },
    {
      question: "How do you help organizations cut through AI hype?",
      answer: "We focus on practical, proven AI applications that deliver real business value rather than chasing trends. Our approach emphasizes measurable outcomes and sustainable implementation."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve organizations across all industries including healthcare, finance, retail, manufacturing, and technology. Our approach is tailored to each industry's unique challenges and opportunities."
    },
    {
      question: "How long does AI strategy development take?",
      answer: "AI strategy development typically takes 4-8 weeks depending on complexity and scope. We provide detailed timelines and milestones during the initial assessment."
    },
    {
      question: "Do you help with AI implementation?",
      answer: "Yes, we provide end-to-end support from strategy to implementation, including model development, deployment, and ongoing optimization."
    },
    {
      question: "How do you ensure AI ethics and compliance?",
      answer: "We establish comprehensive governance frameworks that address ethical considerations, regulatory compliance, and responsible AI practices throughout the implementation process."
    },
    {
      question: "What makes your AI consulting different?",
      answer: "Our focus on practical, measurable outcomes, deep technical expertise, and commitment to responsible AI adoption sets us apart. We prioritize business value over technology hype."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Business with AI?",
  ctaDescription: "Let's discuss how our AI consulting services can help you unlock new opportunities and drive measurable impact",
  ctaGradient: "bg-gradient-to-r from-purple-600 to-indigo-600"
};

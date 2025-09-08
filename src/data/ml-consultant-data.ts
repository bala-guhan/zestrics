import { ServicePageProps } from "../components/ServicePage";

export const mlConsultantData: ServicePageProps = {
  // Hero Section
  heroTitle: "ML Consultant",
  heroSubtitle: "Machine Learning (ML) is at the heart of modern data-driven transformation. It enables organizations to move beyond descriptive analytics and adopt predictive and prescriptive intelligence that fuels growth, efficiency, and innovation. However, success with ML requires not just algorithms, but the right strategy, data readiness, and deployment approach.",
  heroGradient: "bg-gradient-to-r from-green-600 to-teal-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our ML Consulting Services",
  servicesDescription: "Help businesses identify high-impact opportunities for ML, design robust models, and implement solutions that integrate seamlessly with existing systems. We ensure ML initiatives deliver tangible business outcomes, not just experiments.",
  services: [
    {
      title: "Assess ML Readiness",
      description: "Evaluate data quality, infrastructure, and business use cases",
      icon: "🔍",
      features: ["Data quality assessment", "Infrastructure evaluation", "Use case analysis", "Readiness planning"]
    },
    {
      title: "Design & Build ML Models",
      description: "Create predictive and adaptive algorithms tailored to specific challenges",
      icon: "🧠",
      features: ["Model design", "Algorithm development", "Predictive modeling", "Adaptive systems"]
    },
    {
      title: "Operationalize ML at Scale",
      description: "Deploy models into production with monitoring and continuous improvement",
      icon: "⚡",
      features: ["Production deployment", "Model monitoring", "Continuous improvement", "Scalable operations"]
    },
    {
      title: "Enhance Decision-Making",
      description: "Use ML to automate tasks, reduce risks, and unlock new revenue streams",
      icon: "📊",
      features: ["Task automation", "Risk reduction", "Revenue optimization", "Decision enhancement"]
    },
    {
      title: "Stay Future-Ready",
      description: "Adopt best practices in model governance, fairness, and compliance",
      icon: "🛡️",
      features: ["Model governance", "Fairness practices", "Compliance standards", "Future readiness"]
    },
    {
      title: "End-to-End ML Solutions",
      description: "Provide comprehensive ML consulting from strategy to deployment",
      icon: "🔄",
      features: ["Strategic planning", "Implementation support", "Deployment guidance", "Ongoing optimization"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Strategic ML Adoption",
      description: "Move beyond experiments to production-ready ML solutions that drive business value",
      icon: "🚀"
    },
    {
      title: "Tangible Business Outcomes",
      description: "Focus on ML initiatives that deliver measurable results and competitive advantage",
      icon: "📈"
    },
    {
      title: "Seamless Integration",
      description: "Implement ML solutions that work harmoniously with existing systems and workflows",
      icon: "🔗"
    },
    {
      title: "Expert Guidance",
      description: "Leverage deep expertise in ML strategy, implementation, and operationalization",
      icon: "👨‍💼"
    },
    {
      title: "Risk Mitigation",
      description: "Adopt ML responsibly with proper governance, fairness, and compliance frameworks",
      icon: "🛡️"
    },
    {
      title: "Long-term Competitive Advantage",
      description: "Build sustainable ML capabilities that provide lasting competitive advantages",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "ML Strategy & Readiness Assessment",
      description: "We help organizations assess their ML readiness and develop comprehensive strategies for successful implementation. Our approach evaluates data quality, infrastructure, and business use cases to ensure ML initiatives deliver real value.",
      features: ["Readiness assessment", "Strategy development", "Data evaluation", "Infrastructure planning", "Use case identification"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "ML Model Development & Optimization",
      description: "We design and build robust ML models that are tailored to your specific business challenges. From predictive algorithms to adaptive systems, we create models that deliver accurate, reliable results and drive business outcomes.",
      features: ["Model development", "Algorithm optimization", "Predictive modeling", "Performance tuning", "Business alignment"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "ML Operationalization & Governance",
      description: "We help organizations deploy ML models into production with proper monitoring, governance, and continuous improvement processes. Our approach ensures ML solutions are reliable, compliant, and deliver ongoing value.",
      features: ["Production deployment", "Model monitoring", "Governance frameworks", "Continuous improvement", "Compliance management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our ML Consulting Process",
  roadmapDescription: "A systematic approach to ML strategy and implementation",
  roadmapSteps: [
    {
      number: 1,
      title: "Assess ML Readiness & Opportunities",
      description: "Evaluate current capabilities and identify high-impact ML opportunities.",
      position: "right"
    },
    {
      number: 2,
      title: "Define ML Use Cases & Roadmap",
      description: "Develop clear use cases and create a comprehensive implementation roadmap.",
      position: "left"
    },
    {
      number: 3,
      title: "Evaluate Tech Stack & Infrastructure",
      description: "Assess and recommend appropriate technology stack and infrastructure.",
      position: "right"
    },
    {
      number: 4,
      title: "Provide Implementation Strategy",
      description: "Create detailed implementation strategy with timelines and milestones.",
      position: "left"
    },
    {
      number: 5,
      title: "Guide Deployment & Scaling",
      description: "Provide ongoing guidance for deployment, scaling, and optimization.",
      position: "right"
    }
  ],
  
  
  // Blog Section
  blogTitle: "ML Consulting Insights",
  blogDescription: "Stay updated with the latest trends and best practices in machine learning consulting",
  blogCategories: [
    "ML Strategy",
    "Model Development", 
    "Operationalization",
    "Governance",
    "Best Practices"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Assessing ML Readiness: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "ML Strategy"
    },
    {
      id: 2,
      title: "Operationalizing ML Models in Production",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Operationalization"
    },
    {
      id: 3,
      title: "ML Governance: Ensuring Responsible AI",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Governance"
    }
  ],
  
  // FAQ Section
  faqTitle: "ML Consulting FAQ",
  faqDescription: "Common questions about ML consulting and our services",
  faqs: [
    {
      question: "What is ML consulting?",
      answer: "ML consulting involves helping organizations develop strategies, assess readiness, and implement machine learning solutions that deliver tangible business outcomes and competitive advantages."
    },
    {
      question: "How do you assess ML readiness?",
      answer: "We evaluate data quality, infrastructure capabilities, business use cases, and organizational readiness to determine the best path forward for ML implementation."
    },
    {
      question: "What types of ML models do you help with?",
      answer: "We work with various ML models including predictive models, classification algorithms, recommendation systems, natural language processing, and computer vision solutions."
    },
    {
      question: "How do you ensure ML models work in production?",
      answer: "We focus on operationalization from the start, including proper model monitoring, governance frameworks, and continuous improvement processes for production environments."
    },
    {
      question: "Do you help with ML governance and compliance?",
      answer: "Yes, we establish comprehensive governance frameworks that address model fairness, bias detection, compliance requirements, and responsible AI practices."
    },
    {
      question: "How long does ML implementation take?",
      answer: "Implementation timelines vary from 3-12 months depending on complexity, data readiness, and scope. We provide detailed project plans and milestones."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide continuous support including model monitoring, performance optimization, governance oversight, and strategic guidance for scaling ML initiatives."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Business with ML?",
  ctaDescription: "Let's discuss how our ML consulting services can help you build competitive advantages and drive business growth",
  ctaGradient: "bg-gradient-to-r from-green-600 to-teal-600"
};

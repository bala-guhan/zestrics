import { ServicePageProps } from "../components/ServicePage";

export const aiSoftwareDevelopmentData: ServicePageProps = {
  // Hero Section
  heroTitle: "AI Software Development",
  heroSubtitle: "Artificial Intelligence is redefining how businesses operate, interact, and grow. To truly capture its potential, organizations need custom AI-powered software solutions that align with their goals, processes, and industry requirements.",
  heroGradient: "bg-gradient-to-r from-purple-600 to-pink-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our AI Software Development Services",
  servicesDescription: "Enable businesses to design and build intelligent applications that automate tasks, enhance decision-making, and deliver exceptional user experiences. From concept to deployment, we develop scalable AI solutions that integrate seamlessly with existing systems.",
  services: [
    {
      title: "Develop AI-Driven Applications",
      description: "Create software powered by machine learning, NLP, computer vision, and predictive analytics",
      icon: "💻",
      features: ["ML-powered apps", "NLP integration", "Computer vision", "Predictive analytics"]
    },
    {
      title: "Automate Workflows",
      description: "Design solutions that reduce manual effort and increase operational efficiency",
      icon: "⚡",
      features: ["Workflow automation", "Process optimization", "Efficiency improvement", "Manual task reduction"]
    },
    {
      title: "Enhance Customer Engagement",
      description: "Build intelligent chatbots, recommendation engines, and personalized platforms",
      icon: "👥",
      features: ["Intelligent chatbots", "Recommendation engines", "Personalized platforms", "Customer engagement"]
    },
    {
      title: "Ensure Scalability & Integration",
      description: "Deliver solutions that grow with your business and work across platforms",
      icon: "🔗",
      features: ["Scalable solutions", "Platform integration", "Business growth", "Cross-platform compatibility"]
    },
    {
      title: "Maintain Reliability & Compliance",
      description: "Design software with strong governance, ethics, and data security",
      icon: "🛡️",
      features: ["Reliability", "Governance", "Ethics", "Data security"]
    },
    {
      title: "End-to-End Development",
      description: "Provide complete development services from concept to deployment",
      icon: "🔄",
      features: ["Concept development", "Full development", "Deployment", "Ongoing support"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Custom AI Solutions",
      description: "Build AI-powered software tailored to your specific business needs and industry requirements",
      icon: "🎯"
    },
    {
      title: "Operational Efficiency",
      description: "Automate workflows and processes to increase productivity and reduce operational costs",
      icon: "⚡"
    },
    {
      title: "Enhanced User Experience",
      description: "Create intelligent applications that provide exceptional user experiences and engagement",
      icon: "👥"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with innovative AI-powered software solutions",
      icon: "🏆"
    },
    {
      title: "Scalable Architecture",
      description: "Build solutions that grow with your business and adapt to changing requirements",
      icon: "📈"
    },
    {
      title: "Future-Ready Technology",
      description: "Implement modern AI technologies that keep you ahead in the digital era",
      icon: "🚀"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "AI-Powered Application Development",
      description: "We develop custom AI-powered applications that leverage machine learning, natural language processing, computer vision, and predictive analytics. Our solutions are designed to solve specific business challenges and deliver measurable value.",
      features: ["Custom AI apps", "ML integration", "NLP capabilities", "Computer vision", "Predictive analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Intelligent Workflow Automation",
      description: "We design and implement intelligent automation solutions that streamline business processes, reduce manual effort, and increase operational efficiency. Our AI-powered workflows adapt and improve over time.",
      features: ["Process automation", "Workflow optimization", "Efficiency improvement", "Adaptive systems", "Continuous learning"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Customer Experience Enhancement",
      description: "We build intelligent customer-facing applications including chatbots, recommendation engines, and personalized platforms that enhance customer engagement and drive loyalty.",
      features: ["Intelligent chatbots", "Recommendation systems", "Personalization", "Customer engagement", "Loyalty optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our AI Software Development Process",
  roadmapDescription: "A systematic approach to building intelligent software solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Define Problem Statement & Dataset",
      description: "Understand the business problem and identify relevant data sources for the AI solution.",
      position: "right"
    },
    {
      number: 2,
      title: "Build ML Models with Algorithms",
      description: "Develop and train machine learning models using appropriate algorithms and techniques.",
      position: "left"
    },
    {
      number: 3,
      title: "Train & Validate Models",
      description: "Train models on data and validate their performance and accuracy.",
      position: "right"
    },
    {
      number: 4,
      title: "Integrate ML Models with Applications",
      description: "Seamlessly integrate AI models into software applications and systems.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy with Monitoring & Retraining",
      description: "Deploy the AI software solution with monitoring and continuous retraining capabilities.",
      position: "right"
    }
  ],
  
  
  // Blog Section
  blogTitle: "AI Software Development Insights",
  blogDescription: "Stay updated with the latest trends and best practices in AI software development",
  blogCategories: [
    "AI Applications",
    "Software Development", 
    "ML Integration",
    "Automation",
    "Customer Experience"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building AI-Powered Applications: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "AI Applications"
    },
    {
      id: 2,
      title: "Integrating ML Models into Software Applications",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "ML Integration"
    },
    {
      id: 3,
      title: "AI-Powered Workflow Automation Best Practices",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Automation"
    }
  ],
  
  // FAQ Section
  faqTitle: "AI Software Development FAQ",
  faqDescription: "Common questions about AI software development and our services",
  faqs: [
    {
      question: "What is AI software development?",
      answer: "AI software development involves creating intelligent applications that leverage machine learning, NLP, computer vision, and other AI technologies to automate tasks, enhance decision-making, and improve user experiences."
    },
    {
      question: "How long does AI software development take?",
      answer: "Development timelines vary from 3-12 months depending on complexity, features, and integration requirements. We provide detailed project plans and milestones."
    },
    {
      question: "What types of AI software do you develop?",
      answer: "We develop various AI software including intelligent applications, automation tools, chatbots, recommendation systems, predictive analytics platforms, and custom AI-powered solutions."
    },
    {
      question: "Do you integrate with existing systems?",
      answer: "Yes, we design AI software solutions that integrate seamlessly with your existing systems, databases, and workflows to ensure smooth operation and data flow."
    },
    {
      question: "How do you ensure software reliability?",
      answer: "We implement robust testing, monitoring, and quality assurance processes to ensure AI software is reliable, secure, and performs consistently in production environments."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide comprehensive support including monitoring, maintenance, updates, performance optimization, and continuous improvement for AI software solutions."
    },
    {
      question: "How do you handle data security in AI software?",
      answer: "We implement strong security measures including encryption, access controls, data governance, and compliance with relevant regulations to protect sensitive data in AI applications."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Build Your AI-Powered Software?",
  ctaDescription: "Let's discuss how our AI software development services can help you create intelligent solutions that drive business growth",
  ctaGradient: "bg-gradient-to-r from-purple-600 to-pink-600"
};

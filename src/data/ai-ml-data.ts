import { ServicePageProps } from "../components/ServicePage";

export const aiMlData: ServicePageProps = {
  // Hero Section
  heroTitle: "AI & Machine Learning",
  heroSubtitle: "Transform your business with intelligent AI solutions that learn, adapt, and deliver results",
  heroGradient: "bg-gradient-to-r from-purple-600 to-pink-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our AI & ML Services",
  servicesDescription: "Comprehensive artificial intelligence and machine learning solutions for modern businesses",
  services: [
    {
      title: "AI Consulting",
      description: "Strategic guidance to identify and implement AI opportunities that drive business value",
      icon: "🧠",
      features: ["AI strategy development", "Technology assessment", "ROI analysis", "Implementation roadmap"]
    },
    {
      title: "AI Product Development",
      description: "End-to-end development of AI-powered products from concept to deployment",
      icon: "🚀",
      features: ["Product ideation", "AI model development", "User experience design", "Scalable architecture"]
    },
    {
      title: "Data Science",
      description: "Advanced analytics and machine learning solutions to extract insights from your data",
      icon: "📊",
      features: ["Predictive modeling", "Statistical analysis", "Data mining", "A/B testing"]
    },
    {
      title: "ML Consultant",
      description: "Expert guidance on machine learning strategy, implementation, and optimization",
      icon: "🎯",
      features: ["ML strategy", "Model selection", "Performance optimization", "Best practices"]
    },
    {
      title: "AI Software Development",
      description: "Custom AI software solutions tailored to your specific business requirements",
      icon: "💻",
      features: ["Custom AI applications", "API development", "Integration services", "Maintenance & support"]
    },
    {
      title: "Customer Experience Consulting",
      description: "AI-powered customer experience optimization and personalization strategies",
      icon: "👥",
      features: ["Customer journey mapping", "Personalization engines", "Chatbot development", "Sentiment analysis"]
    },
    {
      title: "ML Development",
      description: "Custom machine learning models and algorithms for your unique business challenges",
      icon: "🔬",
      features: ["Custom algorithms", "Model training", "Feature engineering", "Model deployment"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Automate Repetitive Tasks",
      description: "Free up your team's time by automating routine processes and workflows",
      icon: "🤖"
    },
    {
      title: "Predict Customer Behavior",
      description: "Anticipate customer needs and preferences with advanced predictive analytics",
      icon: "🔮"
    },
    {
      title: "Optimize Operations",
      description: "Streamline business processes and improve efficiency with AI-driven insights",
      icon: "⚡"
    },
    {
      title: "Enhance Decision Making",
      description: "Make data-driven decisions with confidence using AI-powered analytics",
      icon: "📈"
    },
    {
      title: "Improve Customer Experience",
      description: "Deliver personalized experiences that increase customer satisfaction and loyalty",
      icon: "❤️"
    },
    {
      title: "Gain Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI technologies",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Generative AI Consulting",
      description: "Equipped with extensive knowledge of NLP and AI, our experts help you navigate the transformative impacts of Generative AI and plan your solutions built on the leading foundation models.",
      features: ["Integration case analysis", "Proof of Concept", "Data analysis", "Project estimation/planning"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "GPT Integrations into Existing Systems",
      description: "Our ChatGPT company helps you bring in the unmatched capabilities of GPT into your business application through GPT APIs. Enhance the functionality of your existing software with our seamless integration.",
      features: ["Feasibility analysis", "Integration planning/prototyping", "Integration and testing", "Maintenance and improvement"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Model Fine-Tuning",
      description: "As a part of our business integration services, we customize generative AI tools to overcome their limitations and maximize their benefits for your specific business case through advanced fine-tuning techniques.",
      features: ["Custom model training", "Performance optimization", "Domain adaptation", "Continuous improvement"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "How We Solve Problems",
  roadmapDescription: "Our proven methodology for delivering successful AI and ML solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Strategy & Consulting",
      description: "Reviewing your current capabilities and business goals to create your AI transformation and implementation plan.",
      position: "right"
    },
    {
      number: 2,
      title: "Proof of Value",
      description: "Rapidly develop a proof-of-concept (PoC) to validate and confirm the value of AI-driven business cases.",
      position: "left"
    },
    {
      number: 3,
      title: "Minimum Viable Product",
      description: "Building an MVP solution to make it available for your customers and allow you to test your product idea and gather customer feedback.",
      position: "right"
    },
    {
      number: 4,
      title: "Maintenance",
      description: "Improvements to ensure product performance, enhance user experience and continuously keep up with the changing environment.",
      position: "left"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from businesses that have transformed their operations with our AI solutions",
  testimonials: [
    {
      name: "David Kim",
      role: "Head of AI",
      company: "TechStart Inc",
      content: "Zestrics helped us implement AI solutions that increased our operational efficiency by 60%. Their expertise in machine learning is unmatched.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "CTO",
      company: "InnovateCorp",
      content: "The AI consulting services provided by Zestrics transformed our business strategy. We now have a clear roadmap for AI implementation.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "VP of Technology",
      company: "FutureTech Solutions",
      content: "Their ML development team delivered a custom solution that perfectly fits our business needs. The results exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "Our Blog",
  blogDescription: "Stay updated with the latest insights in AI and machine learning",
  blogCategories: [
    "AI & Machine Learning",
    "Data Science", 
    "Generative AI",
    "ML Consulting",
    "AI Strategy"
  ],
  blogPosts: [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 Trends",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "AI Trends"
    },
    {
      id: 2,
      title: "Machine Learning for Predictive Analytics",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "ML & Analytics"
    },
    {
      id: 3,
      title: "Building Custom AI Models: A Complete Guide",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "AI Development"
    }
  ],
  
  // FAQ Section
  faqTitle: "FAQ",
  faqDescription: "Frequently asked questions about AI and machine learning",
  faqs: [
    {
      question: "What is AI consulting?",
      answer: "AI consulting involves strategic guidance to help businesses identify, plan, and implement AI opportunities that drive business value and competitive advantage."
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation time varies based on complexity and scope. Simple integrations can take 2-4 weeks, while complex custom solutions may take 3-6 months."
    },
    {
      question: "What types of AI services do you offer?",
      answer: "We offer AI consulting, custom AI development, machine learning model creation, data science services, and AI integration into existing systems."
    },
    {
      question: "Do you provide ongoing support for AI solutions?",
      answer: "Yes, we provide comprehensive maintenance, monitoring, and continuous improvement services for all AI solutions we implement."
    },
    {
      question: "How do you ensure AI model accuracy?",
      answer: "We use rigorous testing methodologies, cross-validation techniques, and continuous monitoring to ensure high accuracy and performance of AI models."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various industries including healthcare, finance, retail, manufacturing, and technology, with specialized AI solutions for each sector."
    },
    {
      question: "What is the cost of AI implementation?",
      answer: "AI implementation costs depend on project scope, complexity, and requirements. Contact us for a detailed quote tailored to your specific needs."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Harness the Power of AI?",
  ctaDescription: "Let's discuss how our AI and ML solutions can transform your business",
  ctaGradient: "bg-gradient-to-r from-purple-600 to-pink-600"
};

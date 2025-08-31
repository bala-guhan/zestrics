import { ServicePageProps } from "../components/ServicePage";

export const dataScienceData: ServicePageProps = {
  // Hero Section
  heroTitle: "Data Science",
  heroSubtitle: "Data is the new currency of business, but its true value lies in the ability to extract insights, predict outcomes, and guide smarter decisions. Data Science combines statistical methods, advanced analytics, and machine learning to uncover hidden patterns and transform raw data into actionable intelligence.",
  heroGradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Data Science Services",
  servicesDescription: "Enable organizations to unlock the full potential of their data by building models and frameworks that solve business problems, optimize operations, and create competitive advantage.",
  services: [
    {
      title: "Predict Trends & Outcomes",
      description: "Leverage predictive analytics to forecast demand, risks, and opportunities",
      icon: "🔮",
      features: ["Predictive analytics", "Trend forecasting", "Risk assessment", "Opportunity identification"]
    },
    {
      title: "Build Intelligent Models",
      description: "Apply machine learning and advanced algorithms to solve complex business challenges",
      icon: "🧠",
      features: ["ML models", "Advanced algorithms", "Business solutions", "Complex problem solving"]
    },
    {
      title: "Optimize Decision-Making",
      description: "Use data-driven insights to reduce uncertainty and drive business performance",
      icon: "📊",
      features: ["Data-driven insights", "Uncertainty reduction", "Performance optimization", "Strategic decisions"]
    },
    {
      title: "Personalize Customer Experiences",
      description: "Design recommendation engines, churn models, and behavior analytics",
      icon: "👥",
      features: ["Recommendation engines", "Churn models", "Behavior analytics", "Customer personalization"]
    },
    {
      title: "Visualize Insights",
      description: "Present complex findings in intuitive dashboards for faster adoption",
      icon: "📈",
      features: ["Data visualization", "Intuitive dashboards", "Insight presentation", "Faster adoption"]
    },
    {
      title: "Enterprise-Scale Deployments",
      description: "Scale from exploratory analysis to production-ready data science solutions",
      icon: "🏢",
      features: ["Enterprise scaling", "Production deployment", "Exploratory analysis", "Scalable solutions"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Actionable Intelligence",
      description: "Transform raw data into actionable insights that drive business decisions and outcomes",
      icon: "💡"
    },
    {
      title: "Predictive Power",
      description: "Leverage predictive analytics to anticipate trends, risks, and opportunities before they happen",
      icon: "🔮"
    },
    {
      title: "Competitive Advantage",
      description: "Use data science to create sustainable competitive advantages and market leadership",
      icon: "🏆"
    },
    {
      title: "Operational Excellence",
      description: "Optimize operations and processes through data-driven insights and automation",
      icon: "⚡"
    },
    {
      title: "Customer Understanding",
      description: "Deepen customer understanding and create personalized experiences that drive loyalty",
      icon: "👥"
    },
    {
      title: "Future-Ready Insights",
      description: "Shape the future with confidence using data science to understand the past and predict outcomes",
      icon: "🚀"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Predictive Analytics & Forecasting",
      description: "We build sophisticated predictive models that help organizations forecast trends, identify risks, and uncover opportunities. Our data science solutions enable proactive decision-making and strategic planning.",
      features: ["Predictive modeling", "Trend forecasting", "Risk identification", "Opportunity analysis", "Strategic planning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Machine Learning & Advanced Analytics",
      description: "We develop intelligent models and algorithms that solve complex business challenges. From classification to clustering, our data science solutions deliver actionable insights and automated decision-making.",
      features: ["ML algorithms", "Advanced analytics", "Complex problem solving", "Automated decisions", "Actionable insights"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Customer Analytics & Personalization",
      description: "We create recommendation engines, churn prediction models, and behavior analytics that help organizations understand and serve their customers better. Our solutions drive customer engagement and loyalty.",
      features: ["Recommendation engines", "Churn prediction", "Behavior analytics", "Customer engagement", "Loyalty optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Data Science Process",
  roadmapDescription: "A systematic approach to extracting insights from data",
  roadmapSteps: [
    {
      number: 1,
      title: "Define Business Problem & Hypothesis",
      description: "Understand the business challenge and formulate testable hypotheses.",
      position: "right"
    },
    {
      number: 2,
      title: "Collect, Clean, and Preprocess Data",
      description: "Gather relevant data and prepare it for analysis and modeling.",
      position: "left"
    },
    {
      number: 3,
      title: "Build Predictive & Descriptive Models",
      description: "Develop models that predict outcomes and describe patterns in the data.",
      position: "right"
    },
    {
      number: 4,
      title: "Validate & Fine-tune Results",
      description: "Test model performance and optimize for accuracy and reliability.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy Models for Real-World Use",
      description: "Implement models in production and monitor their performance.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from organizations that have transformed their business with data science",
  testimonials: [
    {
      name: "Dr. Emily Chen",
      role: "Head of Analytics",
      company: "DataInsight Corp",
      content: "Zestrics helped us unlock the full potential of our data through advanced analytics and predictive modeling. Their data science solutions have transformed how we make decisions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "VP of Operations",
      company: "OptimizeTech Solutions",
      content: "Their predictive analytics models have given us a competitive edge by forecasting market trends and customer behavior with remarkable accuracy.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Chief Data Officer",
      company: "FutureData Inc",
      content: "The customer analytics and personalization solutions they built have significantly improved our customer engagement and retention rates.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "Data Science Insights",
  blogDescription: "Stay updated with the latest trends and best practices in data science and analytics",
  blogCategories: [
    "Predictive Analytics",
    "Machine Learning", 
    "Data Visualization",
    "Customer Analytics",
    "Model Deployment"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building Predictive Models: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Predictive Analytics"
    },
    {
      id: 2,
      title: "Customer Analytics: Understanding Your Users",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Customer Analytics"
    },
    {
      id: 3,
      title: "Deploying Data Science Models in Production",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Model Deployment"
    }
  ],
  
  // FAQ Section
  faqTitle: "Data Science FAQ",
  faqDescription: "Common questions about data science and our services",
  faqs: [
    {
      question: "What is data science?",
      answer: "Data science combines statistical methods, advanced analytics, and machine learning to extract insights from data, predict outcomes, and guide business decisions."
    },
    {
      question: "How do you ensure data quality?",
      answer: "We implement rigorous data cleaning, validation, and preprocessing procedures to ensure high-quality data for analysis and modeling."
    },
    {
      question: "What types of models do you build?",
      answer: "We build various models including predictive models, classification models, clustering algorithms, recommendation engines, and time series forecasting models."
    },
    {
      question: "How do you measure model performance?",
      answer: "We use appropriate metrics like accuracy, precision, recall, F1-score, and business-specific KPIs to evaluate model performance and ensure reliability."
    },
    {
      question: "Do you help with model deployment?",
      answer: "Yes, we provide end-to-end support including model deployment, monitoring, maintenance, and continuous optimization for production environments."
    },
    {
      question: "How do you handle data privacy and security?",
      answer: "We implement strict data privacy and security measures including encryption, access controls, and compliance with relevant regulations like GDPR and HIPAA."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve organizations across all industries including finance, healthcare, retail, manufacturing, and technology, tailoring our approach to industry-specific challenges."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Unlock Your Data's Potential?",
  ctaDescription: "Let's discuss how our data science services can help you extract insights and drive business value",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-cyan-600"
};

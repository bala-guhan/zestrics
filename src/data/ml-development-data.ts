import { ServicePageProps } from "../components/ServicePage";

export const mlDevelopmentData: ServicePageProps = {
  // Hero Section
  heroTitle: "ML Development",
  heroSubtitle: "Machine Learning has the power to turn massive volumes of data into actionable intelligence by identifying patterns, predicting outcomes, and automating decision-making. To unlock this potential, organizations need custom ML solutions that are designed, trained, and deployed to address their unique business challenges.",
  heroGradient: "bg-gradient-to-r from-emerald-600 to-green-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our ML Development Services",
  servicesDescription: "Focus on building end-to-end solutions that go beyond experimentation—delivering models that are accurate, scalable, and production-ready.",
  services: [
    {
      title: "Develop Custom ML Models",
      description: "Tailored algorithms for classification, prediction, clustering, and recommendation",
      icon: "🧠",
      features: ["Custom algorithms", "Classification models", "Prediction systems", "Clustering solutions"]
    },
    {
      title: "Implement Deep Learning Solutions",
      description: "Apply advanced neural networks for NLP, image, and speech recognition",
      icon: "🔬",
      features: ["Neural networks", "NLP solutions", "Image recognition", "Speech processing"]
    },
    {
      title: "Embed ML into Products",
      description: "Integrate intelligent features into enterprise applications and digital platforms",
      icon: "🔗",
      features: ["Product integration", "Enterprise applications", "Digital platforms", "Intelligent features"]
    },
    {
      title: "Automate Workflows",
      description: "Use ML to streamline processes, reduce errors, and increase efficiency",
      icon: "⚡",
      features: ["Process automation", "Error reduction", "Efficiency improvement", "Workflow optimization"]
    },
    {
      title: "Monitor & Optimize Models",
      description: "Ensure continuous improvement through retraining and performance tracking",
      icon: "📊",
      features: ["Model monitoring", "Performance tracking", "Continuous improvement", "Retraining"]
    },
    {
      title: "Production-Ready Solutions",
      description: "Deliver ML solutions that are scalable, reliable, and business-ready",
      icon: "🚀",
      features: ["Production deployment", "Scalable solutions", "Reliability", "Business readiness"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Custom ML Solutions",
      description: "Build tailored machine learning models that address your specific business challenges",
      icon: "🎯"
    },
    {
      title: "Production-Ready Models",
      description: "Develop ML solutions that go beyond experimentation to deliver real business value",
      icon: "🚀"
    },
    {
      title: "Advanced AI Capabilities",
      description: "Leverage deep learning and neural networks for complex AI applications",
      icon: "🧠"
    },
    {
      title: "Seamless Integration",
      description: "Embed ML capabilities into existing products and enterprise applications",
      icon: "🔗"
    },
    {
      title: "Continuous Optimization",
      description: "Monitor and improve ML models for ongoing performance and accuracy",
      icon: "📈"
    },
    {
      title: "Competitive Intelligence",
      description: "Stay ahead with custom ML solutions that provide unique competitive advantages",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Custom ML Model Development",
      description: "We develop tailored machine learning models that are specifically designed to address your unique business challenges. From classification and prediction to clustering and recommendation systems, we build models that deliver accurate, reliable results.",
      features: ["Custom algorithms", "Business-specific models", "Accurate predictions", "Reliable results", "Tailored solutions"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Deep Learning & Neural Networks",
      description: "We implement advanced deep learning solutions using neural networks for natural language processing, computer vision, and speech recognition. Our expertise enables complex AI applications that deliver sophisticated insights and automation.",
      features: ["Deep learning", "Neural networks", "NLP solutions", "Computer vision", "Speech recognition"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "ML Product Integration",
      description: "We seamlessly integrate machine learning capabilities into your existing products and enterprise applications. Our solutions enhance functionality, automate processes, and provide intelligent features that improve user experience.",
      features: ["Product integration", "Enterprise applications", "Intelligent features", "Process automation", "User experience"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our ML Development Process",
  roadmapDescription: "A systematic approach to building production-ready ML solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Define Problem Statement & Dataset",
      description: "Understand the business problem and identify relevant data sources for ML development.",
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
      description: "Seamlessly integrate ML models into applications and systems.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy with Monitoring & Retraining",
      description: "Deploy ML solutions with monitoring and continuous retraining capabilities.",
      position: "right"
    }
  ],
  
  
  // Blog Section
  blogTitle: "ML Development Insights",
  blogDescription: "Stay updated with the latest trends and best practices in machine learning development",
  blogCategories: [
    "Custom ML Models",
    "Deep Learning", 
    "Model Integration",
    "Production Deployment",
    "Performance Optimization"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building Custom ML Models: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Custom ML Models"
    },
    {
      id: 2,
      title: "Deep Learning Solutions for Enterprise",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Deep Learning"
    },
    {
      id: 3,
      title: "Integrating ML Models into Production",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Production Deployment"
    }
  ],
  
  // FAQ Section
  faqTitle: "ML Development FAQ",
  faqDescription: "Common questions about ML development and our services",
  faqs: [
    {
      question: "What is ML development?",
      answer: "ML development involves creating custom machine learning models and solutions that are designed, trained, and deployed to address specific business challenges and deliver actionable intelligence."
    },
    {
      question: "How do you ensure ML models are production-ready?",
      answer: "We focus on building models that are accurate, scalable, and reliable from the start, with proper testing, validation, monitoring, and continuous improvement processes."
    },
    {
      question: "What types of ML models do you develop?",
      answer: "We develop various ML models including classification, prediction, clustering, recommendation systems, deep learning solutions, and custom algorithms tailored to specific business needs."
    },
    {
      question: "How do you integrate ML into existing products?",
      answer: "We seamlessly integrate ML capabilities into existing applications and systems, ensuring compatibility, performance, and enhanced functionality without disrupting current operations."
    },
    {
      question: "Do you provide ongoing model monitoring?",
      answer: "Yes, we provide comprehensive monitoring, performance tracking, and continuous optimization to ensure ML models maintain accuracy and deliver ongoing value."
    },
    {
      question: "How long does ML development take?",
      answer: "Development timelines vary from 2-8 months depending on complexity, data requirements, and integration needs. We provide detailed project plans and milestones."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide continuous support including model monitoring, retraining, performance optimization, and technical assistance to ensure your ML solutions continue to deliver value."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Build Your Custom ML Solution?",
  ctaDescription: "Let's discuss how our ML development services can help you create intelligent solutions that drive business value",
  ctaGradient: "bg-gradient-to-r from-emerald-600 to-green-600"
};

import { ServicePageProps } from "../components/ServicePage";

export const solutionsData: ServicePageProps = {
  // Hero Section
  heroTitle: "AI Solutions",
  heroSubtitle: "Transform your business with our comprehensive AI-powered solutions designed to unlock insights, automate processes, and drive innovation",
  heroGradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our AI Solutions Portfolio",
  servicesDescription: "Comprehensive AI solutions designed to unlock insights, automate processes, and drive innovation across industries",
  services: [
    {
      title: "Text Analysis Solutions",
      description: "Transform unstructured text into actionable insights with our advanced NLP solutions for customer feedback, semantic search, and support automation",
      icon: "📝",
      features: ["Semantic Search", "Speech Recognition", "Text Categorization", "Information Extraction"]
    },
    {
      title: "Computer Vision Software",
      description: "Advanced computer vision solutions that transform images and videos into real-time actionable insights for automation and quality control",
      icon: "👁️",
      features: ["Image & Video Recognition", "Object Detection & Tracking", "Facial Recognition", "OCR Technology"]
    },
    {
      title: "Large Language Models",
      description: "Custom domain-specific LLMs tailored to your business needs for knowledge management, customer interactions, and process automation",
      icon: "🧠",
      features: ["Question Answering", "Text Generation", "Conversational AI", "Multilingual Understanding"]
    },
    {
      title: "Image Recognition",
      description: "AI-powered image recognition software that automates tasks, enhances decision-making, and delivers smarter customer experiences",
      icon: "🖼️",
      features: ["Object Recognition", "Image Classification", "Visual Search", "Pattern Detection"]
    },
    {
      title: "NLP Solutions",
      description: "Custom NLP solutions that extract meaning from text, automate processes, and deliver intelligent customer interactions",
      icon: "🗣️",
      features: ["Sentiment Analysis", "Topic Detection", "Entity Recognition", "Text Summarization"]
    },
    {
      title: "Recommendation Systems",
      description: "AI-powered recommendation engines that personalize customer experiences, boost engagement, and drive revenue growth",
      icon: "🎯",
      features: ["Personalized Suggestions", "Cross-Selling", "Real-Time Personalization", "Context-Aware Recommendations"]
    },
    {
      title: "Data Capture & OCR",
      description: "Advanced OCR and data capture solutions that convert unstructured documents into accurate, actionable data with intelligent processing",
      icon: "📄",
      features: ["Optical Character Recognition", "Document Processing", "Handwriting Recognition", "Automated Data Extraction"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Customizable Solutions",
      description: "Every solution is tailored to your specific data, workflows, and business requirements",
      icon: "⚙️"
    },
    {
      title: "State-of-the-Art Technology",
      description: "Built with the latest AI, ML, and deep learning technologies for superior performance",
      icon: "🚀"
    },
    {
      title: "Scalable Architecture",
      description: "Solutions designed to grow with your business demands and data volumes",
      icon: "📈"
    },
    {
      title: "Expert Team",
      description: "Dedicated specialists in AI, computer vision, NLP, and enterprise deployment",
      icon: "👨‍💻"
    },
    {
      title: "Proven Results",
      description: "Track record of delivering measurable business value and ROI improvements",
      icon: "🏆"
    },
    {
      title: "End-to-End Support",
      description: "From strategy and development to deployment and ongoing maintenance",
      icon: "🤝"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Text Analysis & NLP Solutions",
      description: "We build tailored NLP solutions that turn unstructured text into actionable insights. From customer feedback analysis to semantic search and support automation, our software helps you accelerate reporting, improve decisions, and boost customer experience. Our social media analytics API analyzes text from social platforms to unlock audience insights including demographics, interests, and behavioral trends.",
      features: ["Social Media Analytics API", "Customer Feedback Analysis", "Sentiment & Topic Analysis", "Semantic Ontology Development"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Computer Vision & Image Recognition",
      description: "We build computer vision solutions that transform images and videos into real-time, actionable insights. From visual inspection to facial recognition and object detection, our software helps you automate processes, reduce errors, and enhance customer experience. Perfect for quality control, retail analytics, and security monitoring applications.",
      features: ["Visual Inspection & Quality Control", "Retail & Customer Experience", "Security & Monitoring", "Real-time Anomaly Detection"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Custom Large Language Models",
      description: "We develop domain-specific LLMs tailored to your business needs. From knowledge management to customer interactions and process automation, our models help you unlock deeper insights, reduce costs, and scale innovation. Our enterprise knowledge management solutions empower teams with AI that understands and retrieves organizational knowledge.",
      features: ["Enterprise Knowledge Management", "Customer Experience Automation", "Industry-Specific LLMs", "Context-aware Q&A Systems"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Recommendation Systems & Data Intelligence",
      description: "We design AI-powered recommendation systems that personalize customer experiences, boost engagement, and drive revenue growth. Combined with our advanced OCR and data capture solutions, we help businesses convert unstructured documents into accurate, actionable data while delivering intelligent recommendations across e-commerce, media, and enterprise applications.",
      features: ["E-commerce & Retail Recommendations", "Media & Entertainment Personalization", "Document Intelligence", "Automated Data Processing"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      position: 'right'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Solution Implementation Process",
  roadmapDescription: "Our proven methodology for delivering successful AI solutions that drive business value",
  roadmapSteps: [
    {
      number: 1,
      title: "Discovery & Analysis",
      description: "We analyze your business requirements, data landscape, and technical infrastructure to identify the best AI solutions for your specific needs and objectives.",
      position: "right"
    },
    {
      number: 2,
      title: "Solution Design & Prototyping",
      description: "Our experts design custom AI solutions tailored to your requirements and develop proof-of-concept prototypes to validate the approach and demonstrate value.",
      position: "left"
    },
    {
      number: 3,
      title: "Development & Integration",
      description: "We build and integrate the AI solution into your existing systems, ensuring seamless deployment with minimal disruption to your operations.",
      position: "right"
    },
    {
      number: 4,
      title: "Testing & Optimization",
      description: "Comprehensive testing and performance optimization ensure your AI solution delivers accurate results and meets all business requirements before go-live.",
      position: "left"
    },
    {
      number: 5,
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support, monitoring, and continuous improvement to ensure optimal performance and evolving business value.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "Client Success Stories",
  testimonialsDescription: "Hear from businesses that have transformed their operations with our AI solutions",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Head of Digital Innovation",
      company: "RetailTech Corp",
      content: "Zestrics' computer vision solution revolutionized our quality control process. We've seen a 75% reduction in defects and significant cost savings in our manufacturing operations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "FinanceFlow Solutions",
      content: "Their custom LLM for document processing has transformed our workflow. We now process documents 10x faster with 99% accuracy, dramatically improving our customer service.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Experience",
      company: "E-Commerce Plus",
      content: "The recommendation system increased our conversion rate by 40% and customer satisfaction scores by 35%. The ROI was evident within the first quarter of implementation.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "David Park",
      role: "Director of Operations",
      company: "MediaStream Inc",
      content: "Zestrics' NLP solution for social media analytics provides insights we never had before. We can now predict trends and adjust our content strategy in real-time.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "Latest Insights",
  blogDescription: "Stay updated with the latest trends and insights in AI solutions",
  blogCategories: [
    "AI Solutions",
    "Computer Vision", 
    "Natural Language Processing",
    "Machine Learning",
    "Data Intelligence"
  ],
  blogPosts: [
    {
      id: 1,
      title: "The Future of Computer Vision in Manufacturing",
      date: "15 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Computer Vision"
    },
    {
      id: 2,
      title: "Building Custom LLMs for Enterprise Knowledge Management",
      date: "12 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "AI Solutions"
    },
    {
      id: 3,
      title: "Advanced OCR: Transforming Document Processing",
      date: "10 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Data Intelligence"
    },
    {
      id: 4,
      title: "Recommendation Systems: Driving E-commerce Growth",
      date: "8 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      category: "Machine Learning"
    }
  ],
  
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Business with AI?",
  ctaDescription: "Let's discuss how our AI solutions can drive innovation and growth for your organization",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-cyan-600"
};

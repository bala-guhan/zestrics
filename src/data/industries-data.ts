import { ServicePageProps } from "../components/ServicePage";

export const industriesData: ServicePageProps = {
  // Hero Section
  heroTitle: "Industry Solutions",
  heroSubtitle: "Specialized AI and data solutions tailored to transform industries and drive measurable business outcomes",
  heroGradient: "bg-gradient-to-r from-green-600 to-teal-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Industries We Transform",
  servicesDescription: "Comprehensive AI solutions designed to meet the unique challenges and opportunities of each industry",
  services: [
    {
      title: "Healthcare & Pharma",
      description: "AI-powered solutions for better patient outcomes, accelerated R&D, and streamlined healthcare operations with predictive analytics and digital transformation",
      icon: "🏥",
      features: ["Predictive Healthcare Analytics", "Digital Transformation in Biotech", "AI in Pharma", "Intelligent Document Processing"]
    },
    {
      title: "E-commerce",
      description: "Boost sales and personalize customer experiences with AI-driven recommendations, analytics, and automation solutions for online retail",
      icon: "🛒",
      features: ["Recommendation Systems", "Customer Analytics", "Demand Forecasting", "Intelligent Automation"]
    },
    {
      title: "FinTech",
      description: "Enhance security, compliance, and customer trust with advanced AI solutions for fraud detection, risk management, and financial innovation",
      icon: "💳",
      features: ["Fraud Detection & Risk Management", "Customer Analytics", "RegTech & Compliance", "Process Automation"]
    },
    {
      title: "Retail",
      description: "Transform retail operations with AI-powered customer insights, inventory optimization, and personalized shopping experiences",
      icon: "🏪",
      features: ["Customer Analytics", "Recommendation Systems", "Demand & Inventory Forecasting", "Omni-channel Intelligence"]
    },
    {
      title: "Automotive",
      description: "Drive the future of mobility with AI solutions for connected vehicles, predictive maintenance, and smart manufacturing processes",
      icon: "🚗",
      features: ["Predictive Maintenance", "Computer Vision & Quality Control", "Connected Vehicles & Telematics", "Supply Chain Optimization"]
    },
    {
      title: "Logistics",
      description: "Streamline supply chains with AI-powered route optimization, predictive analytics, and warehouse automation solutions",
      icon: "🚛",
      features: ["Route Optimization & Fleet Management", "Predictive Analytics", "Warehouse Automation", "Computer Vision & Quality Control"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Industry Expertise",
      description: "Deep understanding of industry-specific challenges, regulations, and opportunities",
      icon: "🎯"
    },
    {
      title: "Custom Solutions",
      description: "Tailored AI solutions designed to address unique industry requirements and workflows",
      icon: "⚙️"
    },
    {
      title: "Compliance Ready",
      description: "Solutions built with industry standards, regulations, and security requirements in mind",
      icon: "🔒"
    },
    {
      title: "Proven Results",
      description: "Track record of delivering measurable ROI and business transformation across industries",
      icon: "📈"
    },
    {
      title: "Scalable Architecture",
      description: "Future-ready systems designed to grow with your business and industry evolution",
      icon: "🚀"
    },
    {
      title: "Expert Team",
      description: "80+ AI and data experts with deep industry knowledge and technical expertise",
      icon: "👥"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Healthcare & Pharma Innovation",
      description: "We help healthcare and pharmaceutical organizations leverage AI, data analytics, and digital transformation to improve patient outcomes, accelerate R&D, and streamline operations. From predictive healthcare analytics to AI-driven drug discovery, we empower organizations to harness data and stay ahead in a rapidly evolving industry.",
      features: ["Early disease detection and risk scoring", "Personalized treatment plans", "ML-driven clinical insights", "RWE analytics and drug discovery", "Trial optimization and pharmacovigilance"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "E-commerce & Retail Excellence",
      description: "We help e-commerce and retail businesses leverage AI, data analytics, and digital transformation to boost sales, personalize customer experiences, and optimize operations. From personalized recommendations to predictive demand forecasting, we enable retailers to harness data and stay competitive in fast-changing markets.",
      features: ["Personalized product recommendations", "Customer behavior analytics", "Inventory optimization", "Omni-channel integration", "Automated customer support"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "FinTech & Financial Services",
      description: "We help financial institutions and fintech companies leverage AI, advanced analytics, and automation to enhance customer trust, improve decision-making, and drive digital innovation. From fraud detection to personalized financial services, we empower fintech businesses to unlock data-driven growth while maintaining compliance.",
      features: ["Real-time fraud detection", "Credit scoring and risk assessment", "Automated KYC/AML processes", "Regulatory compliance automation", "Personalized financial products"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Automotive & Logistics Innovation",
      description: "We help automotive and logistics companies leverage AI, data analytics, and digital transformation to enhance mobility, optimize operations, and deliver smarter customer experiences. From connected vehicles to supply chain optimization, we enable businesses to build resilient, efficient, and future-ready operations.",
      features: ["Predictive maintenance systems", "Computer vision quality control", "Route optimization algorithms", "Fleet management solutions", "Connected vehicle analytics"],
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
      position: 'right'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Industry Transformation Process",
  roadmapDescription: "Our proven methodology for delivering industry-specific AI solutions that drive measurable business outcomes",
  roadmapSteps: [
    {
      number: 1,
      title: "Industry Assessment",
      description: "Deep dive into your industry landscape, regulatory requirements, competitive challenges, and unique business opportunities to identify AI transformation potential.",
      position: "right"
    },
    {
      number: 2,
      title: "Solution Design",
      description: "Design custom AI solutions tailored to your industry's specific workflows, compliance requirements, and business objectives with detailed technical specifications.",
      position: "left"
    },
    {
      number: 3,
      title: "Pilot Implementation",
      description: "Deploy proof-of-concept solutions in controlled environments to validate effectiveness, measure impact, and refine approaches before full-scale implementation.",
      position: "right"
    },
    {
      number: 4,
      title: "Full Deployment",
      description: "Roll out comprehensive AI solutions across your organization with proper training, change management, and integration with existing industry-specific systems.",
      position: "left"
    },
    {
      number: 5,
      title: "Continuous Optimization",
      description: "Monitor performance, gather insights, and continuously improve solutions to adapt to changing industry trends, regulations, and business requirements.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "Industry Success Stories",
  testimonialsDescription: "Hear from industry leaders who have transformed their operations with our specialized AI solutions",
  testimonials: [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      company: "HealthTech Innovations",
      content: "Zestrics' predictive analytics solution helped us reduce patient readmission rates by 35% and improve early disease detection accuracy by 60%. Their healthcare expertise is exceptional.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "James Rodriguez",
      role: "VP of Digital Commerce",
      company: "RetailMax Corp",
      content: "The recommendation system increased our online conversion rates by 45% and average order value by 30%. The ROI was immediate and continues to grow quarter over quarter.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Chief Risk Officer",
      company: "FinSecure Solutions",
      content: "Their fraud detection system reduced false positives by 70% while catching 95% of actual fraud attempts. Our customer satisfaction and security have both improved dramatically.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Operations Director",
      company: "AutoLogistics Pro",
      content: "The route optimization and predictive maintenance solutions reduced our operational costs by 25% and improved delivery times by 40%. Outstanding results across our entire fleet.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "Industry Insights",
  blogDescription: "Stay updated with the latest trends and innovations in industry-specific AI solutions",
  blogCategories: [
    "Healthcare AI",
    "E-commerce Analytics", 
    "FinTech Innovation",
    "Retail Technology",
    "Automotive AI",
    "Logistics Optimization"
  ],
  blogPosts: [
    {
      id: 1,
      title: "AI in Healthcare: Transforming Patient Outcomes",
      date: "15 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      category: "Healthcare AI"
    },
    {
      id: 2,
      title: "E-commerce Personalization: The Future of Online Retail",
      date: "12 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-commerce Analytics"
    },
    {
      id: 3,
      title: "FinTech Security: Advanced Fraud Detection Systems",
      date: "10 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "FinTech Innovation"
    },
    {
      id: 4,
      title: "Smart Logistics: AI-Powered Supply Chain Optimization",
      date: "8 DECEMBER 2024",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=250&fit=crop",
      category: "Logistics Optimization"
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Industry?",
  ctaDescription: "Let's discuss how our industry-specific AI solutions can drive innovation and growth for your business",
  ctaGradient: "bg-gradient-to-r from-green-600 to-teal-600"
};

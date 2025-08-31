import { ServicePageProps } from "../components/ServicePage";

export const dataWarehousingData: ServicePageProps = {
  // Hero Section
  heroTitle: "Data Warehousing",
  heroSubtitle: "A well-structured data warehouse is the backbone of reliable business intelligence. It brings together data from multiple sources, organizes it in a consistent way, and makes it readily available for reporting, analytics, and decision-making.",
  heroGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Data Warehousing Services",
  servicesDescription: "Help organizations design, build, and modernize data warehouses that are scalable, secure, and business-ready. We combine industry best practices with modern cloud and on-premises technologies to deliver platforms that support both current needs and future growth.",
  services: [
    {
      title: "Unify Data Sources",
      description: "Integrate data from diverse systems into a single trusted repository",
      icon: "🔗",
      features: ["Multi-source integration", "Data consistency", "Centralized repository", "Trusted data foundation"]
    },
    {
      title: "Enhance Performance",
      description: "Optimize query speed and reporting efficiency",
      icon: "⚡",
      features: ["Query optimization", "Fast reporting", "Performance tuning", "Efficient data access"]
    },
    {
      title: "Enable Advanced Analytics",
      description: "Prepare data for AI/ML, predictive, and prescriptive insights",
      icon: "📊",
      features: ["AI/ML ready data", "Predictive analytics", "Prescriptive insights", "Advanced modeling"]
    },
    {
      title: "Scale with Confidence",
      description: "Leverage modern cloud-based data warehouses for elasticity and cost efficiency",
      icon: "📈",
      features: ["Cloud scalability", "Cost optimization", "Elastic resources", "Future growth"]
    },
    {
      title: "Maintain Governance & Security",
      description: "Ensure data quality, compliance, and protection at every stage",
      icon: "🔒",
      features: ["Data quality", "Compliance", "Security", "Governance"]
    },
    {
      title: "Strategic Asset Creation",
      description: "Turn your data into a strategic asset for business growth",
      icon: "💎",
      features: ["Strategic planning", "Business value", "Competitive advantage", "Data-driven decisions"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Reliable Business Intelligence",
      description: "Build a solid foundation for all your reporting and analytics needs",
      icon: "🏗️"
    },
    {
      title: "Data Consistency",
      description: "Ensure all stakeholders work with the same, trusted data",
      icon: "✅"
    },
    {
      title: "Improved Decision Making",
      description: "Access to timely, accurate data for better business decisions",
      icon: "🎯"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce data silos and optimize storage and processing costs",
      icon: "💰"
    },
    {
      title: "Scalability",
      description: "Grow your data infrastructure as your business expands",
      icon: "📈"
    },
    {
      title: "Compliance & Security",
      description: "Meet regulatory requirements and protect sensitive data",
      icon: "🛡️"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Data Source Integration",
      description: "Our data warehousing solutions seamlessly integrate data from multiple sources including databases, applications, files, and external systems. We establish robust ETL/ELT processes that ensure data quality, consistency, and reliability across your entire organization.",
      features: ["Multi-source integration", "ETL/ELT pipelines", "Data quality assurance", "Real-time synchronization", "Error handling"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Cloud-Native Architecture",
      description: "We design and implement modern cloud-based data warehouses that provide unlimited scalability, high performance, and cost-effective storage solutions. Our cloud-native approach ensures your data warehouse grows with your business needs.",
      features: ["Cloud scalability", "Auto-scaling", "Cost optimization", "High availability", "Disaster recovery"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Advanced Analytics Platform",
      description: "Transform your data warehouse into a powerful analytics platform that supports AI/ML, predictive analytics, and real-time insights. We enable advanced analytics capabilities that drive innovation and competitive advantage.",
      features: ["AI/ML integration", "Predictive analytics", "Real-time insights", "Advanced modeling", "Business intelligence"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Data Warehousing Process",
  roadmapDescription: "A proven methodology for building scalable, secure, and business-ready data warehouses",
  roadmapSteps: [
    {
      number: 1,
      title: "Understand Business Needs",
      description: "Analyze your business reporting and analytics requirements to design the optimal data warehouse architecture.",
      position: "right"
    },
    {
      number: 2,
      title: "Design Modern Architecture",
      description: "Create a scalable data warehouse architecture that supports current needs and future growth.",
      position: "left"
    },
    {
      number: 3,
      title: "Implement ETL/ELT Pipelines",
      description: "Build robust data pipelines that ensure data quality, consistency, and reliability.",
      position: "right"
    },
    {
      number: 4,
      title: "Optimize Performance",
      description: "Fine-tune queries and storage for maximum performance and efficiency.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy with Governance",
      description: "Implement comprehensive governance and security measures for production deployment.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from organizations that have transformed their data strategy with our warehousing solutions",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "The data warehouse implementation by Zestrics transformed our business intelligence capabilities. We now have real-time insights that drive our strategic decisions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Director",
      company: "Global Retail Inc",
      content: "Their cloud data warehouse solution reduced our infrastructure costs by 40% while improving performance significantly. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Analytics",
      company: "FinTech Innovations",
      content: "The data warehouse architecture they built for us handles millions of transactions daily with 99.9% uptime. Exceptional quality and reliability.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "Data Warehousing Insights",
  blogDescription: "Stay updated with the latest trends and best practices in data warehousing",
  blogCategories: [
    "Data Architecture",
    "Cloud Data", 
    "ETL/ELT",
    "Data Governance",
    "Performance Optimization"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Modern Data Warehouse Architecture: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Data Architecture"
    },
    {
      id: 2,
      title: "Cloud vs On-Premise Data Warehousing: Making the Right Choice",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Cloud Data"
    },
    {
      id: 3,
      title: "ETL vs ELT: Which Approach is Right for Your Data Warehouse?",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "ETL/ELT"
    }
  ],
  
  // FAQ Section
  faqTitle: "Data Warehousing FAQ",
  faqDescription: "Common questions about data warehousing and our services",
  faqs: [
    {
      question: "What is a data warehouse?",
      answer: "A data warehouse is a centralized repository that stores structured, filtered data that has already been processed for a specific purpose. It's designed for query and analysis rather than transaction processing."
    },
    {
      question: "How long does it take to build a data warehouse?",
      answer: "The timeline varies based on complexity and scope. Simple warehouses can take 2-3 months, while complex enterprise solutions may take 6-12 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Should I choose cloud or on-premise data warehousing?",
      answer: "Cloud data warehouses offer scalability, cost-effectiveness, and reduced maintenance. On-premise solutions provide more control and security. We help you choose based on your specific requirements."
    },
    {
      question: "What are the key benefits of a modern data warehouse?",
      answer: "Key benefits include improved data quality, faster query performance, better decision-making, cost optimization, scalability, and enhanced security and compliance."
    },
    {
      question: "How do you ensure data quality in the warehouse?",
      answer: "We implement comprehensive data quality processes including validation, cleansing, deduplication, and monitoring to ensure your data is accurate, complete, and reliable."
    },
    {
      question: "Can you migrate from an existing data warehouse?",
      answer: "Yes, we specialize in data warehouse migration and modernization. We ensure minimal disruption while improving performance and functionality."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide comprehensive maintenance, monitoring, optimization, and support services to ensure your data warehouse continues to meet your evolving business needs."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Build Your Data Warehouse?",
  ctaDescription: "Let's discuss how our data warehousing solutions can transform your business intelligence capabilities",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-purple-600"
};

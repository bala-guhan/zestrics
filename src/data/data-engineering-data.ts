import { ServicePageProps } from "../components/ServicePage";

export const dataEngineeringData: ServicePageProps = {
  // Hero Section
  heroTitle: "Data Engineering Services",
  heroSubtitle: "Reliable analytics starts with a strong data foundation. Data Engineering is the process of designing, building, and managing the systems and pipelines that make data accessible, accurate, and analytics-ready.",
  heroGradient: "bg-gradient-to-r from-indigo-600 to-purple-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Data Engineering Services",
  servicesDescription: "Help organizations turn raw, fragmented data into structured, high-quality information that powers business intelligence, reporting, and advanced analytics. We bring together deep expertise in modern tools, cloud platforms, and scalable architectures to create data ecosystems that grow with your business.",
  services: [
    {
      title: "Design Modern Data Pipelines",
      description: "Automate ingestion, transformation, and integration across multiple sources",
      icon: "🔧",
      features: ["Automated ingestion", "Data transformation", "Multi-source integration", "Real-time processing"]
    },
    {
      title: "Ensure Data Quality",
      description: "Clean, validate, and enrich data to improve trust and usability",
      icon: "✅",
      features: ["Data validation", "Cleansing processes", "Quality monitoring", "Enrichment services"]
    },
    {
      title: "Enable Real-time Processing",
      description: "Handle streaming and batch data for faster insights",
      icon: "⚡",
      features: ["Streaming data", "Batch processing", "Real-time analytics", "Fast insights"]
    },
    {
      title: "Optimize for Scale",
      description: "Build architectures that adapt to growing data volumes and business needs",
      icon: "📈",
      features: ["Scalable architecture", "Performance optimization", "Growth planning", "Flexible design"]
    },
    {
      title: "Reduce Costs",
      description: "Streamline operations with efficient, cloud-native data engineering practices",
      icon: "💰",
      features: ["Cost optimization", "Cloud-native solutions", "Efficient operations", "Resource management"]
    },
    {
      title: "Business Value Creation",
      description: "Transform data into actionable insights that drive business growth",
      icon: "🎯",
      features: ["Business intelligence", "Actionable insights", "Strategic value", "Growth enablement"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Strong Data Foundation",
      description: "Build reliable, scalable data infrastructure that supports all your analytics needs",
      icon: "🏗️"
    },
    {
      title: "Data Quality Assurance",
      description: "Ensure your data is clean, accurate, and trustworthy for better decision-making",
      icon: "✅"
    },
    {
      title: "Real-time Insights",
      description: "Process data in real-time to enable faster, more responsive business decisions",
      icon: "⚡"
    },
    {
      title: "Scalable Architecture",
      description: "Design systems that grow with your business and data volumes",
      icon: "📈"
    },
    {
      title: "Cost Efficiency",
      description: "Optimize data processing costs while improving performance and reliability",
      icon: "💰"
    },
    {
      title: "Future-Ready Solutions",
      description: "Build data engineering systems that adapt to new technologies and requirements",
      icon: "🚀"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Modern Data Pipeline Design",
      description: "We design and implement modern data pipelines that automate the entire data lifecycle from ingestion to consumption. Our pipelines handle both batch and streaming data, ensuring your organization has access to timely, accurate information for decision-making.",
      features: ["Automated data ingestion", "ETL/ELT workflows", "Streaming data processing", "Data transformation", "Quality monitoring"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Data Quality & Validation",
      description: "Our data engineering solutions include comprehensive quality assurance processes that ensure your data is clean, accurate, and reliable. We implement automated validation, cleansing, and monitoring to maintain high data quality standards.",
      features: ["Data validation", "Automated cleansing", "Quality monitoring", "Error handling", "Data enrichment"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Scalable Cloud Architecture",
      description: "We build cloud-native data engineering solutions that scale automatically with your business growth. Our architectures leverage modern cloud technologies to provide cost-effective, high-performance data processing capabilities.",
      features: ["Cloud-native design", "Auto-scaling", "Cost optimization", "High availability", "Disaster recovery"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Data Engineering Process",
  roadmapDescription: "A systematic approach to building robust, scalable data engineering solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Assess Data Sources",
      description: "Analyze your data sources and integration points to understand current data landscape and requirements.",
      position: "right"
    },
    {
      number: 2,
      title: "Design Robust Pipelines",
      description: "Create scalable data pipeline architecture that handles your current and future data processing needs.",
      position: "left"
    },
    {
      number: 3,
      title: "Build ETL/ELT Workflows",
      description: "Implement efficient data transformation workflows that ensure data quality and consistency.",
      position: "right"
    },
    {
      number: 4,
      title: "Automate Quality & Validation",
      description: "Deploy automated data quality checks and validation processes to maintain data integrity.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy with Monitoring",
      description: "Implement comprehensive monitoring and support systems for ongoing data pipeline management.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from organizations that have transformed their data engineering capabilities",
  testimonials: [
    {
      name: "David Kim",
      role: "Head of Data Engineering",
      company: "TechStart Inc",
      content: "Zestrics helped us build a modern data engineering platform that processes millions of records daily. Their expertise in cloud-native solutions is unmatched.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "CTO",
      company: "InnovateCorp",
      content: "The data engineering solutions provided by Zestrics transformed our data quality and processing capabilities. We now have reliable, real-time insights.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "VP of Technology",
      company: "FutureTech Solutions",
      content: "Their data pipeline architecture reduced our processing time by 70% while improving data quality significantly. Exceptional results!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "Data Engineering Insights",
  blogDescription: "Stay updated with the latest trends and best practices in data engineering",
  blogCategories: [
    "Data Pipelines",
    "ETL/ELT", 
    "Data Quality",
    "Cloud Engineering",
    "Real-time Processing"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building Modern Data Pipelines: Best Practices Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Data Pipelines"
    },
    {
      id: 2,
      title: "ETL vs ELT: Choosing the Right Data Processing Approach",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "ETL/ELT"
    },
    {
      id: 3,
      title: "Real-time Data Processing: Technologies and Implementation",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Real-time Processing"
    }
  ],
  
  // FAQ Section
  faqTitle: "Data Engineering FAQ",
  faqDescription: "Common questions about data engineering and our services",
  faqs: [
    {
      question: "What is data engineering?",
      answer: "Data engineering is the process of designing, building, and maintaining the systems and infrastructure that collect, process, store, and deliver data for analytics and business intelligence."
    },
    {
      question: "How long does it take to implement data engineering solutions?",
      answer: "Implementation time varies based on complexity. Simple pipelines can take 4-6 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during planning."
    },
    {
      question: "What technologies do you use for data engineering?",
      answer: "We use modern technologies including Apache Kafka, Apache Spark, Apache Airflow, cloud platforms (AWS, Azure, GCP), and various data warehouses and lakes depending on your specific needs."
    },
    {
      question: "How do you ensure data quality in pipelines?",
      answer: "We implement comprehensive data quality processes including validation rules, automated testing, monitoring, and alerting to ensure data integrity throughout the pipeline."
    },
    {
      question: "Can you handle both batch and real-time data processing?",
      answer: "Yes, we design hybrid architectures that handle both batch and streaming data processing to meet your specific business requirements."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide 24/7 monitoring, maintenance, optimization, and support services to ensure your data engineering systems run smoothly and efficiently."
    },
    {
      question: "How do you optimize costs in data engineering?",
      answer: "We optimize costs through efficient resource utilization, cloud-native solutions, automated scaling, and performance tuning to ensure you get the best value for your investment."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Data Engineering?",
  ctaDescription: "Let's discuss how our data engineering solutions can build a strong foundation for your analytics",
  ctaGradient: "bg-gradient-to-r from-indigo-600 to-purple-600"
};

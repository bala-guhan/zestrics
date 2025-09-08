import { ServicePageProps } from "../components/ServicePage";

export const bigDataDevelopmentData: ServicePageProps = {
  // Hero Section
  heroTitle: "Big Data Development",
  heroSubtitle: "As organizations scale, the complexity and volume of data grow exponentially. To stay competitive, businesses need powerful platforms and applications that can capture, process, and analyze data at scale. Big Data Development ensures that the right systems, tools, and applications are built to transform raw data into business-ready intelligence.",
  heroGradient: "bg-gradient-to-r from-orange-600 to-red-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Big Data Development Services",
  servicesDescription: "Help organizations design and implement custom big data solutions tailored to their unique business needs. From data pipelines to analytics platforms, we create scalable, high-performance systems that support decision-making, innovation, and growth.",
  services: [
    {
      title: "Build Scalable Data Platforms",
      description: "Design and deploy cloud and on-premise big data environments",
      icon: "🏗️",
      features: ["Cloud platforms", "On-premise solutions", "Scalable architecture", "High performance"]
    },
    {
      title: "Develop Custom Applications",
      description: "Create solutions for data ingestion, transformation, and analytics",
      icon: "💻",
      features: ["Custom applications", "Data ingestion", "Data transformation", "Analytics solutions"]
    },
    {
      title: "Enable Real-time Processing",
      description: "Manage streaming and batch data for faster insights",
      icon: "⚡",
      features: ["Streaming data", "Batch processing", "Real-time insights", "Fast processing"]
    },
    {
      title: "Integrate Diverse Data Sources",
      description: "Connect structured, semi-structured, and unstructured data",
      icon: "🔗",
      features: ["Multi-format data", "Data integration", "Unified processing", "Cross-platform connectivity"]
    },
    {
      title: "Ensure Performance & Security",
      description: "Optimize systems for reliability, governance, and compliance",
      icon: "🔒",
      features: ["System optimization", "Reliability", "Data governance", "Compliance"]
    },
    {
      title: "End-to-End Development",
      description: "Provide complete development services from strategy to deployment",
      icon: "🚀",
      features: ["Strategy planning", "Development", "Deployment", "Ongoing support"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Custom Solutions",
      description: "Build tailored big data solutions that fit your specific business needs",
      icon: "🎯"
    },
    {
      title: "Scalable Architecture",
      description: "Design systems that grow with your data volumes and business requirements",
      icon: "📈"
    },
    {
      title: "High Performance",
      description: "Optimize systems for speed, reliability, and efficiency",
      icon: "⚡"
    },
    {
      title: "Real-time Capabilities",
      description: "Process and analyze data in real-time for immediate insights",
      icon: "🔄"
    },
    {
      title: "Cost Efficiency",
      description: "Build cost-effective solutions that maximize ROI",
      icon: "💰"
    },
    {
      title: "Future-Proof Technology",
      description: "Implement modern technologies that adapt to changing requirements",
      icon: "🔮"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Custom Big Data Platform Development",
      description: "We design and develop custom big data platforms that are tailored to your specific business requirements. Our platforms handle massive data volumes, provide real-time processing capabilities, and scale seamlessly with your business growth.",
      features: ["Custom platform design", "Massive data handling", "Real-time processing", "Scalable architecture", "Business-specific features"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Data Pipeline & ETL Development",
      description: "We build robust data pipelines and ETL processes that efficiently process, transform, and load data from multiple sources. Our solutions ensure data quality, reliability, and performance at scale.",
      features: ["Data pipeline development", "ETL processes", "Data quality assurance", "Multi-source integration", "Performance optimization"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Analytics Application Development",
      description: "We develop custom analytics applications that provide deep insights into your data. From interactive dashboards to advanced analytics tools, we create applications that drive business value.",
      features: ["Analytics applications", "Interactive dashboards", "Advanced analytics", "Business insights", "User-friendly interfaces"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Big Data Development Process",
  roadmapDescription: "A systematic approach to building custom big data solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Assess Project Requirements",
      description: "Analyze project requirements and goals to understand business needs.",
      position: "right"
    },
    {
      number: 2,
      title: "Select Technology Stack",
      description: "Choose the most suitable big data technology stack for your requirements.",
      position: "left"
    },
    {
      number: 3,
      title: "Develop Scalable Applications",
      description: "Build scalable applications and systems that meet your business needs.",
      position: "right"
    },
    {
      number: 4,
      title: "Test Performance & Scalability",
      description: "Rigorously test systems for performance, scalability, and reliability.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy with Monitoring",
      description: "Deploy solutions with comprehensive monitoring and support systems.",
      position: "right"
    }
  ],
  
  // Blog Section
  blogTitle: "Big Data Development Insights",
  blogDescription: "Stay updated with the latest trends and best practices in big data development",
  blogCategories: [
    "Big Data Development",
    "Custom Applications", 
    "Data Pipelines",
    "Technology Stack",
    "Performance Optimization"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building Custom Big Data Platforms: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Big Data Development"
    },
    {
      id: 2,
      title: "Choosing the Right Big Data Technology Stack",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Technology Stack"
    },
    {
      id: 3,
      title: "Optimizing Big Data Application Performance",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Performance Optimization"
    }
  ],
  
  // FAQ Section
  faqTitle: "Big Data Development FAQ",
  faqDescription: "Common questions about big data development and our services",
  faqs: [
    {
      question: "What is big data development?",
      answer: "Big data development involves creating custom applications, platforms, and systems that can process, store, and analyze large volumes of data efficiently and effectively."
    },
    {
      question: "How long does big data development take?",
      answer: "Development timelines vary from 3-12 months depending on complexity, requirements, and scope. We provide detailed project plans and milestones during planning."
    },
    {
      question: "What technologies do you use for big data development?",
      answer: "We use technologies like Hadoop, Spark, Kafka, NoSQL databases, cloud platforms, and various programming languages depending on your specific requirements."
    },
    {
      question: "Can you work with existing systems?",
      answer: "Yes, we can integrate with your existing systems and gradually enhance them with big data capabilities while ensuring business continuity."
    },
    {
      question: "How do you ensure scalability in big data solutions?",
      answer: "We design architectures that scale horizontally, use cloud-native technologies, and implement best practices for handling growing data volumes and user loads."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide comprehensive maintenance, monitoring, optimization, and support services to ensure your big data solutions continue to meet your evolving needs."
    },
    {
      question: "How do you handle data security in big data development?",
      answer: "We implement security best practices including encryption, access controls, data governance, and compliance measures to protect sensitive data throughout the development process."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Build Your Custom Big Data Solution?",
  ctaDescription: "Let's discuss how our big data development services can create the perfect solution for your business",
  ctaGradient: "bg-gradient-to-r from-orange-600 to-red-600"
};

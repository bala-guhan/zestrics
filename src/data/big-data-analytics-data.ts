import { ServicePageProps } from "../components/ServicePage";

export const bigDataAnalyticsData: ServicePageProps = {
  // Hero Section
  heroTitle: "Big Data Analytics",
  heroSubtitle: "In the era of digital transformation, organizations generate more data than ever before. The true challenge lies not in collecting it, but in unlocking the insights hidden within. Big Data Analytics empowers businesses to make faster, smarter, and more confident decisions by turning massive volumes of complex data into meaningful intelligence.",
  heroGradient: "bg-gradient-to-r from-green-600 to-teal-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Big Data Analytics Services",
  servicesDescription: "Enable organizations to harness advanced analytics, machine learning, and cloud technologies to uncover patterns, trends, and opportunities that drive measurable business value.",
  services: [
    {
      title: "Transform Raw Data into Insights",
      description: "Analyze structured and unstructured data from multiple sources",
      icon: "🔍",
      features: ["Multi-source analysis", "Structured data", "Unstructured data", "Pattern recognition"]
    },
    {
      title: "Discover Patterns & Trends",
      description: "Use predictive and prescriptive analytics for smarter decision-making",
      icon: "📊",
      features: ["Predictive analytics", "Prescriptive analytics", "Trend analysis", "Pattern discovery"]
    },
    {
      title: "Enhance Customer Experience",
      description: "Understand behavior, preferences, and journeys at scale",
      icon: "👥",
      features: ["Customer behavior", "Preference analysis", "Journey mapping", "Personalization"]
    },
    {
      title: "Optimize Operations",
      description: "Improve efficiency, reduce costs, and identify process improvements",
      icon: "⚡",
      features: ["Process optimization", "Cost reduction", "Efficiency improvement", "Operational insights"]
    },
    {
      title: "Drive Innovation",
      description: "Enable data-driven products, services, and strategies",
      icon: "💡",
      features: ["Product innovation", "Service optimization", "Strategic insights", "Data-driven decisions"]
    },
    {
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time for immediate insights",
      icon: "⚡",
      features: ["Real-time processing", "Instant insights", "Live dashboards", "Immediate actions"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Unlock Hidden Insights",
      description: "Discover valuable patterns and trends hidden in your data",
      icon: "🔍"
    },
    {
      title: "Faster Decision Making",
      description: "Make smarter, more confident decisions with data-driven insights",
      icon: "⚡"
    },
    {
      title: "Competitive Advantage",
      description: "Gain insights that give you an edge over competitors",
      icon: "🏆"
    },
    {
      title: "Customer Understanding",
      description: "Deep insights into customer behavior and preferences",
      icon: "👥"
    },
    {
      title: "Operational Efficiency",
      description: "Optimize processes and reduce costs through data insights",
      icon: "💰"
    },
    {
      title: "Innovation Driver",
      description: "Use data to drive product and service innovation",
      icon: "🚀"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Advanced Analytics Platform",
      description: "We build comprehensive analytics platforms that process massive volumes of data from multiple sources. Our solutions combine traditional analytics with machine learning and AI to uncover deep insights that drive business value.",
      features: ["Multi-source data processing", "Machine learning integration", "AI-powered insights", "Scalable architecture", "Real-time analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Predictive & Prescriptive Analytics",
      description: "Our big data analytics solutions go beyond descriptive analytics to provide predictive and prescriptive insights. We help organizations forecast trends, identify opportunities, and recommend optimal actions.",
      features: ["Predictive modeling", "Prescriptive analytics", "Trend forecasting", "Recommendation engines", "Optimization algorithms"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Real-time Analytics Dashboards",
      description: "We create interactive, real-time analytics dashboards that provide instant visibility into key business metrics. Our dashboards enable organizations to monitor performance and make immediate decisions.",
      features: ["Real-time monitoring", "Interactive dashboards", "Key metrics tracking", "Instant alerts", "Mobile accessibility"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Big Data Analytics Process",
  roadmapDescription: "A systematic approach to unlocking insights from big data",
  roadmapSteps: [
    {
      number: 1,
      title: "Define Business KPIs",
      description: "Identify key business metrics and analytics goals to focus our analysis.",
      position: "right"
    },
    {
      number: 2,
      title: "Collect & Preprocess Data",
      description: "Gather and prepare big data from multiple sources for analysis.",
      position: "left"
    },
    {
      number: 3,
      title: "Apply Statistical Models",
      description: "Use advanced statistical and predictive models to extract insights.",
      position: "right"
    },
    {
      number: 4,
      title: "Visualize Insights",
      description: "Create compelling visualizations for effective decision-making.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy & Optimize",
      description: "Deploy dashboards and continuously optimize performance.",
      position: "right"
    }
  ],
  
  // Blog Section
  blogTitle: "Big Data Analytics Insights",
  blogDescription: "Stay updated with the latest trends and best practices in big data analytics",
  blogCategories: [
    "Big Data",
    "Predictive Analytics", 
    "Real-time Analytics",
    "Machine Learning",
    "Data Visualization"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Big Data Analytics: From Raw Data to Business Insights",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Big Data"
    },
    {
      id: 2,
      title: "Predictive Analytics: Forecasting the Future with Data",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Predictive Analytics"
    },
    {
      id: 3,
      title: "Real-time Analytics: Making Instant Decisions with Data",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Real-time Analytics"
    }
  ],
  
  // FAQ Section
  faqTitle: "Big Data Analytics FAQ",
  faqDescription: "Common questions about big data analytics and our services",
  faqs: [
    {
      question: "What is big data analytics?",
      answer: "Big data analytics is the process of examining large, complex datasets to uncover patterns, correlations, and insights that help organizations make better decisions and gain competitive advantages."
    },
    {
      question: "How much data do I need for big data analytics?",
      answer: "Big data analytics can work with datasets ranging from terabytes to petabytes. The key is having the right tools and expertise to process and analyze the data effectively."
    },
    {
      question: "What types of insights can big data analytics provide?",
      answer: "Big data analytics can provide customer behavior insights, operational efficiency improvements, predictive trends, risk assessment, and strategic recommendations for business growth."
    },
    {
      question: "How long does it take to implement big data analytics?",
      answer: "Implementation time varies from 3-12 months depending on data complexity, infrastructure requirements, and business objectives. We provide phased approaches for faster value delivery."
    },
    {
      question: "What technologies do you use for big data analytics?",
      answer: "We use technologies like Apache Hadoop, Spark, Kafka, cloud platforms, and various analytics tools depending on your specific requirements and data characteristics."
    },
    {
      question: "Can you work with existing data infrastructure?",
      answer: "Yes, we can integrate with your existing data infrastructure and gradually enhance it with big data analytics capabilities while ensuring business continuity."
    },
    {
      question: "How do you ensure data security in big data analytics?",
      answer: "We implement comprehensive security measures including encryption, access controls, data governance, and compliance frameworks to protect sensitive data throughout the analytics process."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Unlock Your Big Data Insights?",
  ctaDescription: "Let's discuss how our big data analytics solutions can transform your business decisions",
  ctaGradient: "bg-gradient-to-r from-green-600 to-teal-600"
};

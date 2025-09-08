import { ServicePageProps } from "../components/ServicePage";

export const bigDataCloudData: ServicePageProps = {
  // Hero Section
  heroTitle: "Big Data & Cloud Frameworks",
  heroSubtitle: "Transform your business with scalable, cloud-native data solutions that drive innovation and growth",
  heroGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Big Data & Cloud Services",
  servicesDescription: "Comprehensive data solutions designed to unlock your business potential",
  services: [
    {
      title: "Data Warehouse",
      description: "Build scalable, high-performance data warehouses that transform your business intelligence capabilities",
      icon: "🏗️",
      features: ["Real-time data processing", "Multi-cloud architecture", "Advanced analytics", "Cost optimization"]
    },
    {
      title: "Data Engineering Services",
      description: "End-to-end data pipeline development for reliable, scalable data infrastructure",
      icon: "⚙️",
      features: ["ETL/ELT pipelines", "Data quality assurance", "Real-time streaming", "Monitoring & alerting"]
    },
    {
      title: "Modern Data Architecture",
      description: "Design future-proof data architectures that scale with your business growth",
      icon: "🏛️",
      features: ["Microservices architecture", "Event-driven design", "Data mesh implementation", "Cloud-native solutions"]
    },
    {
      title: "Big Data Analytics",
      description: "Unlock insights from massive datasets with advanced analytics and machine learning",
      icon: "📊",
      features: ["Predictive analytics", "Real-time insights", "Advanced ML models", "Interactive dashboards"]
    },
    {
      title: "BI & Data Visualization",
      description: "Transform complex data into actionable insights with beautiful, interactive visualizations",
      icon: "📈",
      features: ["Interactive dashboards", "Real-time reporting", "Custom visualizations", "Mobile BI"]
    },
    {
      title: "Big Data Development",
      description: "Custom big data solutions tailored to your specific business requirements",
      icon: "🔧",
      features: ["Hadoop ecosystem", "Spark applications", "NoSQL databases", "Custom algorithms"]
    },
    {
      title: "Cloud & DevOps Services",
      description: "Streamline your operations with cloud-native solutions and DevOps best practices",
      icon: "☁️",
      features: ["Multi-cloud strategy", "CI/CD pipelines", "Infrastructure as Code", "Monitoring & logging"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Better Insights into Customers",
      description: "Gain deeper understanding of customer behavior and preferences through advanced analytics",
      icon: "👥"
    },
    {
      title: "Increased Operational Efficiency",
      description: "Streamline processes and improve productivity across your organization with data-driven insights",
      icon: "⚡"
    },
    {
      title: "Business Process Automation",
      description: "Automate repetitive tasks and workflows for better efficiency and reduced manual errors",
      icon: "⚙️"
    },
    {
      title: "Data-Driven Product Innovation",
      description: "Use data insights to drive product development and innovation strategies",
      icon: "💡"
    },
    {
      title: "Cut Costs from Smart Decision Making",
      description: "Reduce operational costs through data-driven decision making and optimization",
      icon: "💰"
    },
    {
      title: "Improved Market Intelligence",
      description: "Stay ahead of competition with comprehensive market insights and trend analysis",
      icon: "📊"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Data Pipeline Architecture",
      description: "Modern ETL/ELT pipelines that ensure data quality and reliability. Our data engineering experts design and implement robust data pipelines that handle massive volumes of data with real-time processing capabilities.",
      features: ["Real-time processing", "Data validation", "Error handling", "Monitoring & alerting", "Scalable architecture"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Cloud Data Warehouse",
      description: "Scalable data warehouses built on leading cloud platforms. We design and implement cloud-native data warehouses that provide unlimited scalability, high performance, and cost-effective storage solutions.",
      features: ["Multi-cloud support", "Auto-scaling", "Cost optimization", "Security & compliance", "High availability"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Interactive dashboards that transform data into actionable insights. Our BI solutions provide real-time visibility into your business metrics with beautiful, interactive visualizations that drive better decision-making.",
      features: ["Real-time updates", "Custom visualizations", "Mobile responsive", "Role-based access", "Drill-down capabilities"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "How We Solve Problems",
  roadmapDescription: "Our proven methodology for delivering successful big data and cloud solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Strategy & Consulting",
      description: "Reviewing your current capabilities and business goals to create your digital transformation and data implementation plan.",
      position: "right"
    },
    {
      number: 2,
      title: "Proof of Value",
      description: "Rapidly develop a proof-of-concept (PoC) to validate and confirm the value of data-driven business cases.",
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
  
  // Blog Section
  blogTitle: "Our Blog",
  blogDescription: "Stay updated with the latest insights in big data and cloud technologies",
  blogCategories: [
    "BI and Big Data",
    "Data Engineering", 
    "Data Science and AI solutions",
    "Data Strategy",
    "ML Consulting"
  ],
  blogPosts: [
    {
      id: 1,
      title: "InData Labs in top 100+ DevOps consulting companies in 2025",
      date: "27 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      category: "DevOps"
    },
    {
      id: 2,
      title: "Generative AI for data analytics",
      date: "26 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "AI & Analytics"
    },
    {
      id: 3,
      title: "Top LLM companies to watch in 2026",
      date: "21 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Machine Learning"
    }
  ],
  
  // FAQ Section
  faqTitle: "FAQ",
  faqDescription: "Frequently asked questions about big data development",
  faqs: [
    {
      question: "What is Big data development?",
      answer: "Big data development involves creating systems and applications that can process, store, and analyze massive volumes of structured and unstructured data to extract valuable business insights."
    },
    {
      question: "What are the 3 types of Big data?",
      answer: "The three types of big data are: Structured data (databases, spreadsheets), Unstructured data (emails, social media posts, videos), and Semi-structured data (XML files, JSON data)."
    },
    {
      question: "How can a web development company use Big data?",
      answer: "Web development companies can use big data for user behavior analysis, personalization, performance optimization, A/B testing, and creating data-driven features that enhance user experience."
    },
    {
      question: "What is Big data technology?",
      answer: "Big data technology encompasses tools and frameworks like Hadoop, Spark, Kafka, and cloud platforms that enable processing, storage, and analysis of large-scale datasets."
    },
    {
      question: "What do Big data developers do?",
      answer: "Big data developers design and implement data pipelines, build data warehouses, create analytics solutions, and develop applications that process and analyze large datasets."
    },
    {
      question: "How the use of Big data will help a web development company with value and profits?",
      answer: "Big data helps web development companies optimize user experiences, reduce development costs through data-driven decisions, improve conversion rates, and create more competitive products."
    },
    {
      question: "What is the price of Big data development?",
      answer: "Big data development costs vary based on project scope, complexity, and requirements. Contact us for a detailed quote tailored to your specific needs and objectives."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Data Strategy?",
  ctaDescription: "Let's discuss how our big data and cloud solutions can drive your business forward",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-purple-600"
};

import { ServicePageProps } from "../components/ServicePage";

export const biDataVisualizationData: ServicePageProps = {
  // Hero Section
  heroTitle: "BI & Data Visualization",
  heroSubtitle: "Data is only valuable when it can be understood, shared, and acted upon. Business Intelligence (BI) and Data Visualization bring clarity to complexity by transforming raw data into interactive dashboards, reports, and visual stories that empower decision-makers at every level.",
  heroGradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our BI & Data Visualization Services",
  servicesDescription: "Help organizations design and implement solutions that deliver real-time, actionable insights in an intuitive and accessible format. By combining deep analytics expertise with leading BI tools and visualization platforms, we enable businesses to see the bigger picture while drilling down into the details that matter.",
  services: [
    {
      title: "Turn Data into Decisions",
      description: "Deliver clear, accurate, and interactive reports to stakeholders",
      icon: "📊",
      features: ["Interactive reports", "Clear insights", "Stakeholder dashboards", "Decision support"]
    },
    {
      title: "Enable Self-service Analytics",
      description: "Empower business teams with user-friendly dashboards",
      icon: "👥",
      features: ["Self-service BI", "User-friendly interfaces", "Business empowerment", "Reduced IT dependency"]
    },
    {
      title: "Monitor KPIs in Real-time",
      description: "Track performance, spot trends, and act quickly",
      icon: "⚡",
      features: ["Real-time monitoring", "KPI tracking", "Trend analysis", "Quick actions"]
    },
    {
      title: "Enhance Storytelling with Data",
      description: "Communicate insights visually for stronger impact",
      icon: "📈",
      features: ["Visual storytelling", "Impactful presentations", "Data narratives", "Compelling insights"]
    },
    {
      title: "Integrate Multiple Sources",
      description: "Bring together data across systems for a unified view",
      icon: "🔗",
      features: ["Multi-source integration", "Unified data view", "Cross-system insights", "Comprehensive reporting"]
    },
    {
      title: "Mobile BI Solutions",
      description: "Access insights anywhere, anytime with mobile-optimized dashboards",
      icon: "📱",
      features: ["Mobile optimization", "Anywhere access", "Responsive design", "On-the-go insights"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with clear, actionable insights",
      icon: "🎯"
    },
    {
      title: "Business Empowerment",
      description: "Enable teams to access and analyze data independently",
      icon: "👥"
    },
    {
      title: "Real-time Visibility",
      description: "Monitor performance and trends in real-time",
      icon: "⚡"
    },
    {
      title: "Improved Communication",
      description: "Share insights effectively across the organization",
      icon: "📢"
    },
    {
      title: "Operational Efficiency",
      description: "Streamline reporting and reduce manual analysis",
      icon: "💰"
    },
    {
      title: "Competitive Intelligence",
      description: "Gain insights that drive competitive advantage",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Interactive Dashboard Design",
      description: "We design and build interactive dashboards that transform complex data into intuitive, actionable insights. Our dashboards provide real-time visibility into key business metrics, enabling stakeholders at all levels to make informed decisions quickly.",
      features: ["Interactive visualizations", "Real-time data", "User-friendly design", "Customizable views", "Drill-down capabilities"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Self-Service Analytics Platform",
      description: "We implement self-service BI solutions that empower business users to create their own reports and dashboards without heavy IT dependency. Our platforms provide intuitive tools for data exploration and visualization.",
      features: ["Self-service tools", "Drag-and-drop interface", "Report building", "Data exploration", "Business user empowerment"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Advanced Data Visualization",
      description: "We create compelling data visualizations that tell stories and communicate insights effectively. From charts and graphs to interactive maps and infographics, we transform data into engaging visual narratives.",
      features: ["Advanced charts", "Interactive maps", "Infographics", "Visual storytelling", "Engaging presentations"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our BI & Data Visualization Process",
  roadmapDescription: "A comprehensive approach to creating impactful data visualization solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Understand Business Needs",
      description: "Analyze reporting requirements and identify key stakeholders and their needs.",
      position: "right"
    },
    {
      number: 2,
      title: "Design Interactive Dashboards",
      description: "Create user-friendly, interactive BI dashboards tailored to business requirements.",
      position: "left"
    },
    {
      number: 3,
      title: "Integrate Data Sources",
      description: "Connect multiple data sources to provide a unified view of business information.",
      position: "right"
    },
    {
      number: 4,
      title: "Apply Visualization Best Practices",
      description: "Implement effective visualization techniques for clear, impactful data presentation.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy & Train Teams",
      description: "Deploy dashboards and provide training to ensure effective adoption and usage.",
      position: "right"
    }
  ],
  
  
  // Blog Section
  blogTitle: "BI & Data Visualization Insights",
  blogDescription: "Stay updated with the latest trends and best practices in business intelligence and data visualization",
  blogCategories: [
    "Business Intelligence",
    "Data Visualization", 
    "Dashboard Design",
    "Self-Service BI",
    "Visual Analytics"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Designing Effective Data Dashboards: Best Practices Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Dashboard Design"
    },
    {
      id: 2,
      title: "Self-Service BI: Empowering Business Users with Data",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Self-Service BI"
    },
    {
      id: 3,
      title: "Data Storytelling: Communicating Insights Through Visualization",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Data Visualization"
    }
  ],
  
  // FAQ Section
  faqTitle: "BI & Data Visualization FAQ",
  faqDescription: "Common questions about business intelligence and data visualization",
  faqs: [
    {
      question: "What is business intelligence (BI)?",
      answer: "Business intelligence is a technology-driven process for analyzing data and delivering actionable information to help executives, managers, and other corporate end users make informed business decisions."
    },
    {
      question: "How long does it take to implement BI solutions?",
      answer: "Implementation time varies from 4-12 weeks depending on complexity, data sources, and business requirements. We provide phased approaches for faster value delivery."
    },
    {
      question: "What BI tools do you work with?",
      answer: "We work with leading BI tools including Tableau, Power BI, QlikView, Looker, and custom solutions. We recommend the best tool based on your specific needs and budget."
    },
    {
      question: "Can you integrate with our existing data sources?",
      answer: "Yes, we can integrate with your existing databases, applications, and data sources to create unified BI solutions that provide comprehensive insights."
    },
    {
      question: "Do you provide training for BI tools?",
      answer: "Yes, we provide comprehensive training to ensure your team can effectively use the BI tools and dashboards we implement."
    },
    {
      question: "How do you ensure data security in BI solutions?",
      answer: "We implement role-based access controls, data encryption, and security best practices to ensure your data is protected while maintaining accessibility for authorized users."
    },
    {
      question: "Can you create mobile-optimized dashboards?",
      answer: "Yes, we design responsive dashboards that work seamlessly on desktop, tablet, and mobile devices, ensuring insights are accessible anywhere, anytime."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Data into Insights?",
  ctaDescription: "Let's discuss how our BI and data visualization solutions can empower your business decisions",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-cyan-600"
};

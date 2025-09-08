import { ServicePageProps } from "../components/ServicePage";

export const modernDataArchitectureData: ServicePageProps = {
  // Hero Section
  heroTitle: "Modern Data Architecture",
  heroSubtitle: "The way organizations use data has evolved — and so must the architecture that supports it. Traditional systems often struggle with today's demands for real-time insights, multi-cloud environments, and ever-growing data volumes. A modern data architecture ensures that your business has the agility, scalability, and flexibility needed to thrive in the digital era.",
  heroGradient: "bg-gradient-to-r from-purple-600 to-pink-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Modern Data Architecture Services",
  servicesDescription: "Help organizations reimagine how data is collected, stored, processed, and consumed. By leveraging cloud-native platforms, data lakes, data mesh, and advanced integration frameworks, we design architectures that are built for speed, scale, and future growth.",
  services: [
    {
      title: "Unify Data Environments",
      description: "Seamlessly integrate structured, semi-structured, and unstructured data",
      icon: "🔗",
      features: ["Multi-format integration", "Data lake design", "Unified data model", "Cross-platform connectivity"]
    },
    {
      title: "Enable Flexibility",
      description: "Design architectures that adapt to business changes and new technologies",
      icon: "🔄",
      features: ["Modular design", "Technology agnostic", "Future-proof architecture", "Adaptive systems"]
    },
    {
      title: "Support Real-time Insights",
      description: "Enable streaming and event-driven architectures for instant decision-making",
      icon: "⚡",
      features: ["Real-time processing", "Event-driven architecture", "Streaming analytics", "Instant insights"]
    },
    {
      title: "Empower Self-service BI",
      description: "Make data easily accessible to business teams without heavy IT dependency",
      icon: "👥",
      features: ["Self-service analytics", "User-friendly interfaces", "Business empowerment", "Reduced IT dependency"]
    },
    {
      title: "Future-proof Systems",
      description: "Adopt architectures that support AI/ML, advanced analytics, and compliance needs",
      icon: "🚀",
      features: ["AI/ML ready", "Advanced analytics", "Compliance support", "Scalable growth"]
    },
    {
      title: "Cloud-First Approach",
      description: "Leverage cloud-native technologies for maximum scalability and cost efficiency",
      icon: "☁️",
      features: ["Cloud-native design", "Multi-cloud support", "Cost optimization", "Global scalability"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Digital Transformation",
      description: "Modernize your data infrastructure to support digital business initiatives",
      icon: "🔄"
    },
    {
      title: "Real-time Capabilities",
      description: "Enable instant insights and faster decision-making with modern architectures",
      icon: "⚡"
    },
    {
      title: "Scalability & Flexibility",
      description: "Build systems that grow with your business and adapt to changing needs",
      icon: "📈"
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs while improving performance and capabilities",
      icon: "💰"
    },
    {
      title: "Future Readiness",
      description: "Prepare your data architecture for emerging technologies and requirements",
      icon: "🔮"
    },
    {
      title: "Competitive Advantage",
      description: "Gain a competitive edge with modern, agile data infrastructure",
      icon: "🏆"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Cloud-Native Architecture Design",
      description: "We design modern, cloud-native data architectures that leverage the full potential of cloud platforms. Our architectures are built for scalability, resilience, and cost-effectiveness, enabling organizations to process and analyze data at unprecedented scale.",
      features: ["Cloud-native design", "Microservices architecture", "Auto-scaling", "High availability", "Cost optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Data Mesh Implementation",
      description: "We implement data mesh architectures that decentralize data ownership and enable domain-driven data management. This approach empowers business teams while maintaining data governance and quality standards across the organization.",
      features: ["Domain-driven design", "Decentralized ownership", "Data governance", "Quality standards", "Business empowerment"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Multi-Cloud & Hybrid Solutions",
      description: "We design architectures that work seamlessly across multiple cloud platforms and on-premises environments. Our hybrid and multi-cloud solutions provide flexibility, cost optimization, and risk mitigation for enterprise data needs.",
      features: ["Multi-cloud support", "Hybrid architecture", "Risk mitigation", "Cost optimization", "Flexibility"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Modern Data Architecture Process",
  roadmapDescription: "A comprehensive approach to designing and implementing future-ready data architectures",
  roadmapSteps: [
    {
      number: 1,
      title: "Assess Legacy Architecture",
      description: "Analyze current architecture gaps and identify modernization opportunities.",
      position: "right"
    },
    {
      number: 2,
      title: "Design Modular Architecture",
      description: "Create scalable, modular architecture for cloud and hybrid environments.",
      position: "left"
    },
    {
      number: 3,
      title: "Migrate Data & Apps",
      description: "Securely migrate data and applications to the new architecture.",
      position: "right"
    },
    {
      number: 4,
      title: "Integrate Analytics Platforms",
      description: "Connect with analytics and BI platforms for comprehensive insights.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy with Continuous Improvement",
      description: "Implement continuous improvement plans for ongoing optimization.",
      position: "right"
    }
  ],
  
  
  // Blog Section
  blogTitle: "Modern Data Architecture Insights",
  blogDescription: "Stay updated with the latest trends and best practices in modern data architecture",
  blogCategories: [
    "Data Architecture",
    "Cloud Native", 
    "Data Mesh",
    "Multi-Cloud",
    "Digital Transformation"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Data Mesh: The Future of Data Architecture",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Data Mesh"
    },
    {
      id: 2,
      title: "Cloud-Native Data Architecture: Best Practices",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Cloud Native"
    },
    {
      id: 3,
      title: "Multi-Cloud Data Strategy: Implementation Guide",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Multi-Cloud"
    }
  ],
  
  // FAQ Section
  faqTitle: "Modern Data Architecture FAQ",
  faqDescription: "Common questions about modern data architecture and our services",
  faqs: [
    {
      question: "What is modern data architecture?",
      answer: "Modern data architecture is a flexible, scalable approach to designing data systems that can handle real-time processing, multiple data types, and cloud-native technologies while supporting business agility and growth."
    },
    {
      question: "How does modern architecture differ from traditional approaches?",
      answer: "Modern architecture emphasizes cloud-native design, real-time processing, scalability, flexibility, and support for AI/ML, unlike traditional monolithic approaches that were rigid and difficult to scale."
    },
    {
      question: "What is data mesh architecture?",
      answer: "Data mesh is a decentralized approach to data architecture where data ownership is distributed across business domains, enabling better data governance and business agility."
    },
    {
      question: "How long does architecture modernization take?",
      answer: "Modernization timelines vary from 6-18 months depending on complexity, existing systems, and business requirements. We provide phased approaches to minimize disruption."
    },
    {
      question: "Can you work with existing legacy systems?",
      answer: "Yes, we specialize in modernizing legacy systems while ensuring business continuity. We create hybrid architectures that gradually transition to modern platforms."
    },
    {
      question: "What cloud platforms do you support?",
      answer: "We work with all major cloud platforms including AWS, Azure, and Google Cloud, and can design multi-cloud architectures for optimal flexibility and cost management."
    },
    {
      question: "How do you ensure security in modern architectures?",
      answer: "We implement comprehensive security measures including encryption, access controls, compliance frameworks, and security monitoring to protect data across all environments."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Modernize Your Data Architecture?",
  ctaDescription: "Let's discuss how our modern data architecture solutions can transform your business",
  ctaGradient: "bg-gradient-to-r from-purple-600 to-pink-600"
};

import { ServicePageProps } from "../components/ServicePage";

export const cloudDevopsData: ServicePageProps = {
  // Hero Section
  heroTitle: "Cloud & DevOps Services",
  heroSubtitle: "In today's fast-paced digital landscape, businesses need agility, scalability, and reliability to stay ahead. Cloud and DevOps together empower organizations to accelerate innovation, reduce time-to-market, and ensure seamless operations. By combining cloud-native solutions with modern DevOps practices, enterprises can transform the way they build, deploy, and manage applications.",
  heroGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Cloud & DevOps Services",
  servicesDescription: "Help organizations modernize their IT infrastructure, automate workflows, and enable continuous delivery pipelines that drive efficiency and resilience.",
  services: [
    {
      title: "Cloud Migration & Modernization",
      description: "Move applications and data to cloud platforms with minimal disruption",
      icon: "☁️",
      features: ["Cloud migration", "Application modernization", "Minimal disruption", "Cost optimization"]
    },
    {
      title: "DevOps Automation",
      description: "Streamline deployment, monitoring, and operations through DevOps toolchains",
      icon: "🤖",
      features: ["Process automation", "Deployment automation", "Monitoring automation", "Operations streamlining"]
    },
    {
      title: "CI/CD Pipeline Development",
      description: "Adopt continuous integration and delivery for faster, reliable software delivery",
      icon: "🔄",
      features: ["Continuous integration", "Continuous delivery", "Faster deployment", "Reliable delivery"]
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Leverage cloud elasticity to meet dynamic business demands",
      icon: "🏗️",
      features: ["Infrastructure management", "Cloud elasticity", "Dynamic scaling", "Performance optimization"]
    },
    {
      title: "Security & Governance",
      description: "Implement robust policies for compliance, monitoring, and resilience",
      icon: "🔒",
      features: ["Security policies", "Compliance management", "Monitoring systems", "Resilience planning"]
    },
    {
      title: "Managed Cloud Services",
      description: "Provide end-to-end cloud and DevOps management and support",
      icon: "🛠️",
      features: ["Managed services", "24/7 support", "Proactive monitoring", "Ongoing optimization"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Accelerated Innovation",
      description: "Speed up development cycles and bring new features to market faster",
      icon: "⚡"
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs and improve resource utilization",
      icon: "💰"
    },
    {
      title: "Enhanced Reliability",
      description: "Build more reliable systems with automated testing and deployment",
      icon: "🛡️"
    },
    {
      title: "Improved Scalability",
      description: "Scale applications automatically based on demand",
      icon: "📈"
    },
    {
      title: "Better Security",
      description: "Implement security best practices throughout the development lifecycle",
      icon: "🔐"
    },
    {
      title: "Operational Excellence",
      description: "Streamline operations and reduce manual intervention",
      icon: "🎯"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Cloud Migration & Modernization",
      description: "We help organizations migrate their applications and infrastructure to the cloud while modernizing their architecture for better performance, scalability, and cost efficiency. Our approach ensures minimal disruption to business operations.",
      features: ["Application migration", "Infrastructure modernization", "Performance optimization", "Cost reduction", "Business continuity"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "DevOps Implementation & Automation",
      description: "We implement comprehensive DevOps practices and automation that streamline your development and operations processes. From CI/CD pipelines to infrastructure as code, we create efficient workflows that accelerate delivery.",
      features: ["DevOps implementation", "Process automation", "CI/CD pipelines", "Infrastructure as code", "Workflow optimization"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Cloud Infrastructure & Management",
      description: "We design, deploy, and manage cloud infrastructure that scales with your business needs. Our solutions provide high availability, security, and performance while optimizing costs and operational efficiency.",
      features: ["Infrastructure design", "Cloud deployment", "Scalable architecture", "High availability", "Cost optimization"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Cloud & DevOps Process",
  roadmapDescription: "A systematic approach to cloud transformation and DevOps implementation",
  roadmapSteps: [
    {
      number: 1,
      title: "Assess Infrastructure & DevOps Readiness",
      description: "Evaluate current infrastructure and DevOps maturity to plan the transformation journey.",
      position: "right"
    },
    {
      number: 2,
      title: "Design Cloud-Native CI/CD Pipelines",
      description: "Create modern CI/CD pipelines that enable fast, reliable software delivery.",
      position: "left"
    },
    {
      number: 3,
      title: "Automate Infrastructure & Workflows",
      description: "Implement infrastructure as code and workflow automation for efficiency.",
      position: "right"
    },
    {
      number: 4,
      title: "Monitor for Performance & Security",
      description: "Set up comprehensive monitoring and security systems for ongoing optimization.",
      position: "left"
    },
    {
      number: 5,
      title: "Scale with Continuous Improvement",
      description: "Continuously improve processes and scale solutions as business grows.",
      position: "right"
    }
  ],
  
  // Blog Section
  blogTitle: "Cloud & DevOps Insights",
  blogDescription: "Stay updated with the latest trends and best practices in cloud computing and DevOps",
  blogCategories: [
    "Cloud Migration",
    "DevOps Automation", 
    "CI/CD Pipelines",
    "Infrastructure Management",
    "Security & Compliance"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Cloud Migration Strategies: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      category: "Cloud Migration"
    },
    {
      id: 2,
      title: "Building Effective CI/CD Pipelines",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      category: "CI/CD Pipelines"
    },
    {
      id: 3,
      title: "DevOps Automation Best Practices",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      category: "DevOps Automation"
    }
  ],
  
  // FAQ Section
  faqTitle: "Cloud & DevOps Services FAQ",
  faqDescription: "Common questions about cloud migration and DevOps implementation",
  faqs: [
    {
      question: "What is cloud migration?",
      answer: "Cloud migration is the process of moving applications, data, and infrastructure from on-premises environments to cloud platforms to improve scalability, cost efficiency, and performance."
    },
    {
      question: "How long does cloud migration take?",
      answer: "Migration timelines vary from 3-18 months depending on complexity, data volume, and business requirements. We provide detailed migration plans and milestones."
    },
    {
      question: "What are the benefits of DevOps?",
      answer: "DevOps benefits include faster software delivery, improved reliability, better collaboration between teams, automated processes, and reduced operational costs."
    },
    {
      question: "Which cloud platforms do you support?",
      answer: "We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We choose the best platform based on your specific needs."
    },
    {
      question: "How do you ensure security during migration?",
      answer: "We implement security best practices throughout the migration process including data encryption, access controls, compliance measures, and security testing."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide comprehensive managed services including monitoring, maintenance, optimization, security updates, and 24/7 support for your cloud infrastructure."
    },
    {
      question: "Can you help with legacy system modernization?",
      answer: "Yes, we specialize in modernizing legacy systems by migrating them to cloud-native architectures while ensuring business continuity and minimal disruption."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Infrastructure?",
  ctaDescription: "Let's discuss how our cloud and DevOps services can accelerate your digital transformation",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-purple-600"
};

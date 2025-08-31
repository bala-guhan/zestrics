import { ServicePageProps } from "../components/ServicePage";

export const customerExperienceConsultingData: ServicePageProps = {
  // Hero Section
  heroTitle: "Customer Experience Consulting Services",
  heroSubtitle: "In today's competitive marketplace, customer experience is the key differentiator that drives loyalty, growth, and long-term success. Delivering seamless, personalized, and engaging experiences requires more than intuition—it demands a data-driven approach backed by the right strategy, insights, and technology.",
  heroGradient: "bg-gradient-to-r from-teal-600 to-blue-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Customer Experience Consulting Services",
  servicesDescription: "Help organizations design and implement strategies that place customers at the center of every interaction. By leveraging analytics, process design, and digital tools, we enable businesses to understand their customers deeply and deliver value at every touchpoint.",
  services: [
    {
      title: "Map Customer Journeys",
      description: "Identify gaps and opportunities across all engagement channels",
      icon: "🗺️",
      features: ["Journey mapping", "Gap analysis", "Opportunity identification", "Channel optimization"]
    },
    {
      title: "Leverage Customer Analytics",
      description: "Use data to understand behavior, preferences, and sentiment",
      icon: "📊",
      features: ["Behavior analysis", "Preference insights", "Sentiment analysis", "Data-driven decisions"]
    },
    {
      title: "Personalize Interactions",
      description: "Create tailored experiences that increase satisfaction and retention",
      icon: "👤",
      features: ["Personalization", "Tailored experiences", "Satisfaction improvement", "Retention optimization"]
    },
    {
      title: "Optimize Digital Touchpoints",
      description: "Streamline websites, apps, and service channels for better usability",
      icon: "💻",
      features: ["Digital optimization", "Usability improvement", "Channel streamlining", "User experience"]
    },
    {
      title: "Strengthen Loyalty Programs",
      description: "Design strategies that enhance customer retention and advocacy",
      icon: "❤️",
      features: ["Loyalty programs", "Retention strategies", "Advocacy building", "Customer engagement"]
    },
    {
      title: "End-to-End CX Strategy",
      description: "Transform customer experiences into sustainable competitive advantage",
      icon: "🎯",
      features: ["CX strategy", "Competitive advantage", "Sustainable growth", "Value delivery"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Customer-Centric Strategy",
      description: "Place customers at the center of every business decision and interaction",
      icon: "🎯"
    },
    {
      title: "Data-Driven Insights",
      description: "Use analytics and insights to understand and serve customers better",
      icon: "📊"
    },
    {
      title: "Personalized Experiences",
      description: "Create tailored interactions that increase satisfaction and loyalty",
      icon: "👤"
    },
    {
      title: "Competitive Differentiation",
      description: "Stand out in the marketplace with exceptional customer experiences",
      icon: "🏆"
    },
    {
      title: "Sustainable Growth",
      description: "Build long-term customer relationships that drive business growth",
      icon: "📈"
    },
    {
      title: "Operational Excellence",
      description: "Optimize processes and touchpoints for seamless customer interactions",
      icon: "⚡"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Customer Journey Mapping & Analysis",
      description: "We help organizations map and analyze customer journeys across all touchpoints to identify gaps, opportunities, and areas for improvement. Our data-driven approach reveals insights that enable businesses to create seamless, engaging customer experiences.",
      features: ["Journey mapping", "Gap analysis", "Opportunity identification", "Touchpoint optimization", "Data-driven insights"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Customer Analytics & Personalization",
      description: "We leverage advanced analytics to understand customer behavior, preferences, and sentiment. Our insights enable organizations to create personalized experiences that increase satisfaction, retention, and advocacy.",
      features: ["Behavior analysis", "Preference insights", "Sentiment analysis", "Personalization", "Retention optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Digital Experience Optimization",
      description: "We optimize digital touchpoints including websites, mobile apps, and service channels to improve usability, engagement, and conversion. Our approach ensures seamless digital experiences that meet customer expectations.",
      features: ["Digital optimization", "Usability improvement", "Channel optimization", "User experience", "Conversion enhancement"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Customer Experience Consulting Process",
  roadmapDescription: "A systematic approach to transforming customer experiences",
  roadmapSteps: [
    {
      number: 1,
      title: "Understand Customer Needs & Expectations",
      description: "Analyze customer behavior, preferences, and expectations across all touchpoints.",
      position: "right"
    },
    {
      number: 2,
      title: "Map Customer Journeys & Identify Gaps",
      description: "Create comprehensive journey maps and identify opportunities for improvement.",
      position: "left"
    },
    {
      number: 3,
      title: "Design Personalized Experiences",
      description: "Develop strategies for creating tailored, engaging customer interactions.",
      position: "right"
    },
    {
      number: 4,
      title: "Optimize Digital Touchpoints",
      description: "Streamline websites, apps, and service channels for better usability.",
      position: "left"
    },
    {
      number: 5,
      title: "Implement & Monitor Results",
      description: "Deploy solutions and continuously monitor performance for ongoing optimization.",
      position: "right"
    }
  ],
  
  // Testimonials
  testimonialsTitle: "What Our Clients Say",
  testimonialsDescription: "Hear from organizations that have transformed their customer experience with our consulting services",
  testimonials: [
    {
      name: "Rachel Thompson",
      role: "VP of Customer Experience",
      company: "CustomerFirst Corp",
      content: "Zestrics helped us transform our customer experience strategy. Their journey mapping and analytics insights revealed opportunities we never knew existed.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Mark Davis",
      role: "Head of Digital Experience",
      company: "DigitalEngage Solutions",
      content: "Their customer experience consulting services helped us increase customer satisfaction by 40% and improve retention rates significantly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Chief Customer Officer",
      company: "ExperienceTech Inc",
      content: "The personalized experience strategies they developed have become our competitive advantage and are driving sustainable business growth.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],
  
  // Blog Section
  blogTitle: "Customer Experience Insights",
  blogDescription: "Stay updated with the latest trends and best practices in customer experience consulting",
  blogCategories: [
    "Customer Journey",
    "Personalization", 
    "Digital Experience",
    "Customer Analytics",
    "Loyalty Programs"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Mapping Customer Journeys: A Complete Guide",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Customer Journey"
    },
    {
      id: 2,
      title: "Personalizing Customer Experiences with Data",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Personalization"
    },
    {
      id: 3,
      title: "Optimizing Digital Touchpoints for Better UX",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Digital Experience"
    }
  ],
  
  // FAQ Section
  faqTitle: "Customer Experience Consulting FAQ",
  faqDescription: "Common questions about customer experience consulting and our services",
  faqs: [
    {
      question: "What is customer experience consulting?",
      answer: "Customer experience consulting involves helping organizations design and implement strategies that place customers at the center of every interaction, using data-driven insights to create seamless, personalized experiences."
    },
    {
      question: "How do you map customer journeys?",
      answer: "We use data analytics, customer research, and touchpoint analysis to create comprehensive journey maps that identify gaps, opportunities, and areas for improvement across all customer interactions."
    },
    {
      question: "What types of customer analytics do you use?",
      answer: "We leverage various analytics including behavior analysis, preference insights, sentiment analysis, and predictive modeling to understand customer needs and optimize experiences."
    },
    {
      question: "How do you personalize customer experiences?",
      answer: "We use customer data and insights to create tailored interactions, personalized recommendations, and customized experiences that increase satisfaction and loyalty."
    },
    {
      question: "Do you help with digital experience optimization?",
      answer: "Yes, we optimize websites, mobile apps, and digital service channels to improve usability, engagement, and conversion rates while ensuring seamless customer experiences."
    },
    {
      question: "How do you measure customer experience success?",
      answer: "We use various metrics including customer satisfaction scores, retention rates, advocacy metrics, and business KPIs to measure the success of customer experience initiatives."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve organizations across all industries including retail, healthcare, financial services, technology, and manufacturing, tailoring our approach to industry-specific customer needs."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Transform Your Customer Experience?",
  ctaDescription: "Let's discuss how our customer experience consulting services can help you create exceptional experiences that drive loyalty and growth",
  ctaGradient: "bg-gradient-to-r from-teal-600 to-blue-600"
};

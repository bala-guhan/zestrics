import { ServicePageProps } from "../components/ServicePage";

export const customWebDevelopmentData: ServicePageProps = {
  // Hero Section
  heroTitle: "Custom Web Development",
  heroSubtitle: "Your website is often the first impression of your business—it needs to be fast, secure, user-friendly, and aligned with your brand identity. Off-the-shelf templates can't always capture the unique needs of a growing business, which is why custom web development is essential.",
  heroGradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
  heroBackgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  
  // Services Grid
  servicesTitle: "Our Custom Web Development Services",
  servicesDescription: "Focus on designing and building tailor-made websites and web applications that combine functionality with exceptional user experience. From simple business websites to complex enterprise-grade platforms, we deliver solutions that are scalable, responsive, and future-ready.",
  services: [
    {
      title: "Responsive Website Development",
      description: "Optimized for all devices and browsers with modern responsive design",
      icon: "📱",
      features: ["Mobile-first design", "Cross-browser compatibility", "Responsive layouts", "Touch-friendly", "Adaptive design"]
    },
    {
      title: "Custom Web Applications",
      description: "Tailored to specific business processes and workflows",
      icon: "⚙️",
      features: ["Custom functionality", "Business workflows", "Process automation", "Tailored solutions", "Scalable architecture"]
    },
    {
      title: "Performance & Security",
      description: "Implement best practices for speed, reliability, and data protection",
      icon: "🛡️",
      features: ["High performance", "Security best practices", "Data protection", "Reliability", "Speed optimization"]
    },
    {
      title: "Third-Party Integration",
      description: "Connect with CRMs, ERPs, payment gateways, and cloud platforms",
      icon: "🔗",
      features: ["CRM integration", "ERP connectivity", "Payment gateways", "Cloud platforms", "API integration"]
    },
    {
      title: "Modern Technologies",
      description: "Use the latest frameworks, cloud-native architecture, and APIs",
      icon: "🚀",
      features: ["Latest frameworks", "Cloud-native", "Modern APIs", "Cutting-edge tech", "Future-ready"]
    },
    {
      title: "End-to-End Development",
      description: "From concept to launch with continuous maintenance and support",
      icon: "🔄",
      features: ["Concept to launch", "Continuous maintenance", "Ongoing support", "Updates", "Performance monitoring"]
    }
  ],
  
  // Integration Reasons (Hover Cards)
  integrationReasons: [
    {
      title: "Brand Identity Alignment",
      description: "Create websites that perfectly align with your unique brand identity and business goals",
      icon: "🎨"
    },
    {
      title: "Scalable Solutions",
      description: "Build websites and applications that grow with your business needs",
      icon: "📈"
    },
    {
      title: "Exceptional User Experience",
      description: "Deliver intuitive, fast, and engaging user experiences that convert visitors",
      icon: "👥"
    },
    {
      title: "Business Process Integration",
      description: "Integrate web solutions seamlessly with your existing business processes",
      icon: "⚙️"
    },
    {
      title: "Future-Ready Technology",
      description: "Use modern, scalable technologies that adapt to future business needs",
      icon: "🔮"
    },
    {
      title: "Measurable Business Outcomes",
      description: "Drive tangible business results through strategic web development",
      icon: "📊"
    }
  ],
  
  // Service Blocks (Left/Right Layout)
  serviceBlocks: [
    {
      title: "Responsive & Modern Web Development",
      description: "We develop responsive websites and web applications that work flawlessly across all devices and browsers. Our mobile-first approach ensures optimal user experience on smartphones, tablets, and desktops while maintaining fast loading times and modern design standards.",
      features: ["Mobile-first design", "Cross-device compatibility", "Fast loading", "Modern design", "User experience"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      position: 'left'
    },
    {
      title: "Custom Web Applications & Integration",
      description: "We build custom web applications tailored to your specific business processes and workflows. Our solutions integrate seamlessly with your existing systems including CRMs, ERPs, payment gateways, and cloud platforms to streamline operations and improve efficiency.",
      features: ["Custom applications", "Business workflows", "System integration", "Process automation", "Efficiency improvement"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      position: 'right'
    },
    {
      title: "Performance & Security Optimization",
      description: "We implement industry best practices for performance, security, and reliability. Our web solutions are built with security-first approach, ensuring data protection, fast loading times, and robust architecture that can handle high traffic and scale with your business growth.",
      features: ["Security-first", "Performance optimization", "Data protection", "Scalable architecture", "High availability"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      position: 'left'
    }
  ],
  
  // Roadmap
  roadmapTitle: "Our Custom Web Development Process",
  roadmapDescription: "A systematic approach to building exceptional web solutions",
  roadmapSteps: [
    {
      number: 1,
      title: "Define Website/App Goals & Scope",
      description: "Understand business objectives and define the scope of the web development project.",
      position: "right"
    },
    {
      number: 2,
      title: "Design UI/UX & Architecture",
      description: "Create intuitive user interfaces and robust technical architecture for the solution.",
      position: "left"
    },
    {
      number: 3,
      title: "Develop Web Applications",
      description: "Build the web application using modern technologies and best practices.",
      position: "right"
    },
    {
      number: 4,
      title: "Test for Performance & Security",
      description: "Comprehensive testing for performance, security, and user experience across devices.",
      position: "left"
    },
    {
      number: 5,
      title: "Deploy & Maintain Continuously",
      description: "Deploy the solution and provide ongoing maintenance, updates, and support.",
      position: "right"
    }
  ],
  
  // Blog Section
  blogTitle: "Custom Web Development Insights",
  blogDescription: "Stay updated with the latest trends and best practices in custom web development",
  blogCategories: [
    "Web Development",
    "Responsive Design", 
    "Performance",
    "Security",
    "Integration"
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building Responsive Websites: Best Practices",
      date: "28 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Responsive Design"
    },
    {
      id: 2,
      title: "Custom Web Application Development Guide",
      date: "25 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Web Performance Optimization Strategies",
      date: "20 AUGUST 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "Performance"
    }
  ],
  
  // FAQ Section
  faqTitle: "Custom Web Development FAQ",
  faqDescription: "Common questions about custom web development and our services",
  faqs: [
    {
      question: "What is custom web development?",
      answer: "Custom web development involves designing and building tailor-made websites and web applications specifically for your business needs, rather than using off-the-shelf templates or solutions."
    },
    {
      question: "How long does custom web development take?",
      answer: "Development timelines vary from 4-12 weeks depending on complexity, features, and integration requirements. We provide detailed project timelines during the planning phase."
    },
    {
      question: "Do you provide responsive design?",
      answer: "Yes, all our web solutions are built with responsive design principles, ensuring optimal user experience across all devices including smartphones, tablets, and desktops."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely. We specialize in integrating custom web solutions with existing business systems including CRMs, ERPs, payment gateways, and cloud platforms."
    },
    {
      question: "How do you ensure website security?",
      answer: "We implement industry best practices for web security including SSL certificates, secure coding practices, regular security updates, and compliance with data protection regulations."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we provide comprehensive ongoing maintenance including updates, security patches, performance monitoring, and technical support to ensure your website continues to perform optimally."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, scalable technologies including React, Angular, Vue.js, Node.js, Python, and cloud-native architectures to build future-ready web solutions."
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Build Your Custom Web Solution?",
  ctaDescription: "Let's discuss how our custom web development services can create a digital presence that drives your business forward",
  ctaGradient: "bg-gradient-to-r from-blue-600 to-cyan-600"
};

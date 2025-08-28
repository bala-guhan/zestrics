import { ServiceData } from "../components/ui/service-card";

export interface SubServiceData {
  title: string;
  description: string;
  overview: string;
  benefits: string[];
  flowchart: string[];
  icon: string;
  gradient: string;
}

export interface ServiceTabData {
  title: string;
  value: string;
  subServices: SubServiceData[];
  gradient: string;
}

export const servicesData: ServiceData[] = [
  {
    title: "AI Chatbot Development",
    description: "AI-powered chatbots are revolutionizing how businesses connect with their customers, employees, and partners. A well-designed chatbot goes beyond scripted responses—it delivers personalized, human-like conversations, automates support, and drives engagement 24/7.",
    overview: "Our AI Chatbot Development Services help organizations design, build, and deploy intelligent chatbots that align with business objectives and deliver measurable results. Whether for customer service, sales, HR, or internal operations, we create chatbots that are intuitive, scalable, and seamlessly integrated into your digital ecosystem.",
    benefits: [
      "Develop custom chatbots – powered by AI, NLP, and LLMs for natural conversations",
      "Automate customer support – reduce wait times and handle FAQs instantly",
      "Enable multi-channel engagement – deploy on websites, mobile apps, WhatsApp, social media, and enterprise systems",
      "Personalize user experiences – offer tailored recommendations, responses, and interactions",
      "Ensure scalability & security – deploy chatbots with enterprise-grade governance and compliance"
    ],
    flowchart: [
      "Define chatbot objectives & user flows",
      "Design conversational UX",
      "Build chatbot with NLP/AI frameworks",
      "Integrate with web/mobile/CRM",
      "Deploy & monitor interactions"
    ],
    icon: "🤖",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
  },
  {
    title: "Business Intelligence",
    description: "Transform your raw data into actionable insights with our comprehensive BI solutions.",
    overview: "We help you build interactive dashboards, automated reporting systems, and real-time analytics platforms that drive informed decision-making across your organization.",
    benefits: [
      "Interactive Dashboards",
      "Automated Reporting",
      "Real-time Analytics",
      "KPI Tracking",
      "Data Visualization"
    ],
    flowchart: [
      "Data Assessment & Planning",
      "Dashboard Design",
      "Data Integration",
      "Testing & Validation",
      "Deployment & Training"
    ],
    icon: "📊",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
  },
  {
    title: "Data Engineering",
    description: "Build robust, scalable data pipelines that can handle massive volumes of data.",
    overview: "Our data engineering solutions ensure your data is clean, reliable, and ready for analysis with enterprise-grade infrastructure.",
    benefits: [
      "ETL/ELT Pipelines",
      "Data Warehousing",
      "Data Quality",
      "Scalable Architecture",
      "Real-time Processing"
    ],
    flowchart: [
      "Data Source Analysis",
      "Pipeline Architecture Design",
      "ETL Development",
      "Testing & Optimization",
      "Production Deployment"
    ],
    icon: "⚙️",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
  },
  {
    title: "Machine Learning",
    description: "Leverage the power of machine learning to predict trends, automate processes, and gain competitive advantages.",
    overview: "Our ML solutions are production-ready and scalable, designed to deliver real business value through intelligent automation and predictive analytics.",
    benefits: [
      "Predictive Analytics",
      "Model Development",
      "MLOps",
      "Model Monitoring",
      "Automated Decision Making"
    ],
    flowchart: [
      "Problem Definition",
      "Data Preparation",
      "Model Development",
      "Training & Validation",
      "Deployment & Monitoring"
    ],
    icon: "🧠",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
  },
  {
    title: "Data Science",
    description: "Unlock hidden patterns and insights in your data with advanced analytics.",
    overview: "Our data science team combines statistical expertise with business acumen to deliver actionable results that drive strategic decisions.",
    benefits: [
      "Statistical Analysis",
      "Advanced Analytics",
      "A/B Testing",
      "Insight Generation",
      "Predictive Modeling"
    ],
    flowchart: [
      "Business Understanding",
      "Data Exploration",
      "Feature Engineering",
      "Model Building",
      "Results Communication"
    ],
    icon: "🔬",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
  },
  {
    title: "Generative AI",
    description: "Stay ahead of the curve with cutting-edge generative AI solutions.",
    overview: "From content creation to process automation, we help you harness the power of next-generation AI to transform your business processes.",
    benefits: [
      "Content Generation",
      "Process Automation",
      "Custom AI Models",
      "Integration",
      "Creative AI Solutions"
    ],
    flowchart: [
      "Use Case Identification",
      "Model Selection",
      "Custom Training",
      "Integration Development",
      "Deployment & Optimization"
    ],
    icon: "✨",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
  }
];

// New structure for tabs with sub-services
export const servicesTabsData: ServiceTabData[] = [
  {
    title: "AI Chatbot Development",
    value: "ai-chatbot-development",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    subServices: [
      {
        title: "AI Chatbot Development",
        description: "AI-powered chatbots are revolutionizing how businesses connect with their customers, employees, and partners. A well-designed chatbot goes beyond scripted responses—it delivers personalized, human-like conversations, automates support, and drives engagement 24/7.",
        overview: "Our AI Chatbot Development Services help organizations design, build, and deploy intelligent chatbots that align with business objectives and deliver measurable results. Whether for customer service, sales, HR, or internal operations, we create chatbots that are intuitive, scalable, and seamlessly integrated into your digital ecosystem.",
        benefits: [
          "Develop custom chatbots – powered by AI, NLP, and LLMs for natural conversations",
          "Automate customer support – reduce wait times and handle FAQs instantly",
          "Enable multi-channel engagement – deploy on websites, mobile apps, WhatsApp, social media, and enterprise systems",
          "Personalize user experiences – offer tailored recommendations, responses, and interactions",
          "Ensure scalability & security – deploy chatbots with enterprise-grade governance and compliance"
        ],
        flowchart: [
          "Define chatbot objectives & user flows",
          "Design conversational UX",
          "Build chatbot with NLP/AI frameworks",
          "Integrate with web/mobile/CRM",
          "Deploy & monitor interactions"
        ],
        icon: "🤖",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      }
    ]
  },
  {
    title: "Business Intelligence",
    value: "business-intelligence",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    subServices: [
      {
        title: "Business Intelligence",
        description: "Transform your raw data into actionable insights with our comprehensive BI solutions.",
        overview: "We help you build interactive dashboards, automated reporting systems, and real-time analytics platforms that drive informed decision-making across your organization.",
        benefits: [
          "Interactive Dashboards",
          "Automated Reporting",
          "Real-time Analytics",
          "KPI Tracking",
          "Data Visualization"
        ],
        flowchart: [
          "Data Assessment & Planning",
          "Dashboard Design",
          "Data Integration",
          "Testing & Validation",
          "Deployment & Training"
        ],
        icon: "📊",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      }
    ]
  },
  {
    title: "Data Engineering",
    value: "data-engineering",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    subServices: [
      {
        title: "Data Engineering",
        description: "Build robust, scalable data pipelines that can handle massive volumes of data.",
        overview: "Our data engineering solutions ensure your data is clean, reliable, and ready for analysis with enterprise-grade infrastructure.",
        benefits: [
          "ETL/ELT Pipelines",
          "Data Warehousing",
          "Data Quality",
          "Scalable Architecture",
          "Real-time Processing"
        ],
        flowchart: [
          "Data Source Analysis",
          "Pipeline Architecture Design",
          "ETL Development",
          "Testing & Optimization",
          "Production Deployment"
        ],
        icon: "⚙️",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      }
    ]
  },
  {
    title: "Machine Learning",
    value: "machine-learning",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    subServices: [
      {
        title: "Machine Learning",
        description: "Leverage the power of machine learning to predict trends, automate processes, and gain competitive advantages.",
        overview: "Our ML solutions are production-ready and scalable, designed to deliver real business value through intelligent automation and predictive analytics.",
        benefits: [
          "Predictive Analytics",
          "Model Development",
          "MLOps",
          "Model Monitoring",
          "Automated Decision Making"
        ],
        flowchart: [
          "Problem Definition",
          "Data Preparation",
          "Model Development",
          "Training & Validation",
          "Deployment & Monitoring"
        ],
        icon: "🧠",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      }
    ]
  },
  {
    title: "Data Science",
    value: "data-science",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    subServices: [
      {
        title: "Data Science",
        description: "Unlock hidden patterns and insights in your data with advanced analytics.",
        overview: "Our data science team combines statistical expertise with business acumen to deliver actionable results that drive strategic decisions.",
        benefits: [
          "Statistical Analysis",
          "Advanced Analytics",
          "A/B Testing",
          "Insight Generation",
          "Predictive Modeling"
        ],
        flowchart: [
          "Business Understanding",
          "Data Exploration",
          "Feature Engineering",
          "Model Building",
          "Results Communication"
        ],
        icon: "🔬",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      }
    ]
  },
  {
    title: "Generative AI",
    value: "generative-ai",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    subServices: [
      {
        title: "Generative AI",
        description: "Stay ahead of the curve with cutting-edge generative AI solutions.",
        overview: "From content creation to process automation, we help you harness the power of next-generation AI to transform your business processes.",
        benefits: [
          "Content Generation",
          "Process Automation",
          "Custom AI Models",
          "Integration",
          "Creative AI Solutions"
        ],
        flowchart: [
          "Use Case Identification",
          "Model Selection",
          "Custom Training",
          "Integration Development",
          "Deployment & Optimization"
        ],
        icon: "✨",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      }
    ]
  },
  {
    title: "Full Stack Development",
    value: "full-stack-development",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    subServices: [
      {
        title: "Custom Web Development",
        description: "Your website is often the first impression of your business—it needs to be fast, secure, user-friendly, and aligned with your brand identity. Off-the-shelf templates can't always capture the unique needs of a growing business, which is why custom web development is essential.",
        overview: "Our Custom Web Development Services focus on designing and building tailor-made websites and web applications that combine functionality with exceptional user experience. From simple business websites to complex enterprise-grade platforms, we deliver solutions that are scalable, responsive, and future-ready.",
        benefits: [
          "Develop responsive websites – optimized for all devices and browsers",
          "Build custom web applications – tailored to specific business processes and workflows",
          "Ensure high performance & security – implement best practices for speed, reliability, and data protection",
          "Integrate third-party systems – connect with CRMs, ERPs, payment gateways, and cloud platforms",
          "Leverage modern technologies – use the latest frameworks, cloud-native architecture, and APIs"
        ],
        flowchart: [
          "Define website/app goals & scope",
          "Design UI/UX & architecture",
          "Develop web applications",
          "Test for performance & security",
          "Deploy & maintain continuously"
        ],
        icon: "🌐",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      },
      {
        title: "AI Mobile App Development",
        description: "Mobile apps have become the core of digital engagement, and with the power of AI, they can do far more than just deliver information. AI-powered mobile apps can personalize experiences, automate workflows, predict user behavior, and provide intelligent insights—making them an essential driver of business growth.",
        overview: "Our AI Mobile App Development Services help organizations build smart, scalable, and intuitive mobile apps that combine cutting-edge AI capabilities with seamless user experiences. Whether you need an AI-driven customer app, an enterprise productivity tool, or a fully customized digital solution, we design apps that learn, adapt, and evolve with your users.",
        benefits: [
          "Build AI-powered apps – with features like personalization, recommendation engines, voice & image recognition",
          "Develop conversational interfaces – integrate AI chatbots and voice assistants for real-time engagement",
          "Enable predictive analytics – provide data-driven insights to improve decision-making and user retention",
          "Leverage computer vision & NLP – unlock advanced capabilities like object detection, text recognition, and sentiment analysis",
          "Ensure scalability & performance – deploy apps that are secure, cloud-ready, and optimized for growth"
        ],
        flowchart: [
          "Define app vision & features",
          "Design AI-driven architecture & UI/UX",
          "Develop AI-powered mobile features",
          "Test across devices & platforms",
          "Deploy with updates & analytics"
        ],
        icon: "📱",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900"
      }
    ]
  }
];

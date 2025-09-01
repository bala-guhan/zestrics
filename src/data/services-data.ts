import { ServiceData } from "../components/ui/service-card";

export interface SubServiceData {
  title: string;
  description: string;
  href: string;
  icon: string;
  overview?: string;
  benefits?: string[];
  flowchart?: string[];
  gradient?: string;
  backgroundImage?: string;
}

export interface ServiceTabData {
  title: string;
  value: string;
  subServices: SubServiceData[];
  gradient: string;
  backgroundImage?: string;
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
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg"
  }
];

// Updated structure for 4 main tabs matching navbar
export const servicesTabsData: ServiceTabData[] = [
  {
    title: "Big Data & Cloud Frameworks",
    value: "big-data-cloud",
    gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
    backgroundImage: "/noisy-background.jpg",
    subServices: [
      {
        title: "Data Warehouse",
        description: "Design and build scalable data warehouses that unify your data sources and enable powerful analytics.",
        href: "/data-warehousing",
        icon: "🏗️"
      },
      {
        title: "Data Engineering Services",
        description: "Build robust, scalable data pipelines that transform raw data into actionable insights.",
        href: "/data-engineering",
        icon: "🔧"
      },
      {
        title: "Modern Data Architecture",
        description: "Design future-ready data architectures that support real-time analytics and AI/ML workloads.",
        href: "/modern-data-architecture",
        icon: "🏛️"
      },
      {
        title: "Big Data Analytics",
        description: "Unlock insights from massive datasets with advanced analytics and machine learning.",
        href: "/big-data-analytics",
        icon: "📈"
      },
      {
        title: "BI & Data Visualization",
        description: "Transform data into interactive dashboards and visual stories that drive decision-making.",
        href: "/bi-data-visualization",
        icon: "📊"
      },
      {
        title: "Big Data Development",
        description: "Build custom big data applications and platforms tailored to your business needs.",
        href: "/big-data-development",
        icon: "📊"
      },
      {
        title: "Cloud & DevOps Services",
        description: "Migrate to cloud and implement DevOps practices for agility and scalability.",
        href: "/cloud-devops",
        icon: "☁️"
      }
    ]
  },
  {
    title: "AI/ML",
    value: "ai-ml",
    gradient: "bg-gradient-to-br from-green-600 to-teal-600",
    backgroundImage: "/noisy-background.jpg",
    subServices: [
      {
        title: "AI Consulting",
        description: "Strategic guidance to identify and implement AI solutions that drive business value.",
        href: "/ai-consulting",
        icon: "💡"
      },
      {
        title: "AI Product Development",
        description: "Build AI-powered products that learn, adapt, and deliver intelligent outcomes.",
        href: "/ai-product-development",
        icon: "🚀"
      },
      {
        title: "Data Science",
        description: "Unlock hidden patterns and insights in your data with advanced analytics.",
        href: "/data-science",
        icon: "🔬"
      },
      {
        title: "ML Consultant",
        description: "Expert guidance on machine learning strategy, implementation, and scaling.",
        href: "/ml-consultant",
        icon: "🎯"
      },
      {
        title: "AI Software Development",
        description: "Build intelligent software applications powered by AI and machine learning.",
        href: "/ai-software-development",
        icon: "💻"
      },
      {
        title: "Customer Experience Consulting",
        description: "Design data-driven customer experiences that increase satisfaction and retention.",
        href: "/customer-experience-consulting",
        icon: "👥"
      },
      {
        title: "ML Development",
        description: "Develop custom machine learning models and deploy them into production.",
        href: "/ml-development",
        icon: "⚙️"
      }
    ]
  },
  {
    title: "Generative AI & GPT",
    value: "generative-ai-gpt",
    gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
    backgroundImage: "/noisy-background.jpg",
    subServices: [
      {
        title: "Generative AI Consulting",
        description: "Strategic guidance on adopting and scaling generative AI responsibly.",
        href: "/generative-ai-consulting",
        icon: "🎯"
      },
      {
        title: "Generative AI Development",
        description: "Build custom generative AI applications for content creation and automation.",
        href: "/generative-ai-development",
        icon: "🔧"
      },
      {
        title: "GPT Integration Services",
        description: "Integrate GPT and large language models into your business applications.",
        href: "/gpt-integration",
        icon: "🤖"
      },
      {
        title: "AI Chatbot Development",
        description: "Build intelligent conversational agents powered by AI and NLP.",
        href: "/ai-chatbot-development",
        icon: "💬"
      },
      {
        title: "AI Agent Store",
        description: "Access pre-built AI agents for various business functions and workflows.",
        href: "/ai-agent-store",
        icon: "🏪"
      }
    ]
  },
  {
    title: "Software Development",
    value: "software-development",
    gradient: "bg-gradient-to-br from-orange-600 to-red-600",
    backgroundImage: "/noisy-background.jpg",
    subServices: [
      {
        title: "Custom Web Development",
        description: "Build responsive, scalable web applications tailored to your business needs.",
        href: "/custom-web-development",
        icon: "🌐"
      },
      {
        title: "AI Mobile App Development",
        description: "Create intelligent mobile apps with AI-powered features and personalization.",
        href: "/ai-mobile-app-development",
        icon: "📱"
      }
    ]
  }
];

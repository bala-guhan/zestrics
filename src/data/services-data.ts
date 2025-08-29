import { ServiceData } from "../components/ui/service-card";

export interface SubServiceData {
  title: string;
  description: string;
  overview: string;
  benefits: string[];
  flowchart: string[];
  icon: string;
  gradient: string;
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
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/bg-noisy-slate.jpg"
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
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-bg-cyan.jpg"
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
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/bg-noisy-amber.jpg"
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
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg"
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
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/bg-noisy-slate.jpg"
  }
];

// New structure for tabs with sub-services
export const servicesTabsData: ServiceTabData[] = [
  {
    title: "AI Chatbot Development",
    value: "ai-chatbot-development",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg",
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "AI Consulting",
        description: "Artificial Intelligence (AI) is no longer just a buzzword, it's a game-changer that helps organizations unlock new opportunities, automate processes, and deliver smarter customer experiences. However, adopting AI effectively requires the right strategy, tools, and expertise.",
        overview: "Our AI Consulting Services empower businesses to identify, design, and implement AI solutions that align with their goals and create measurable impact. We help organizations cut through the hype and focus on AI applications that truly drive value.",
        benefits: [
          "Define AI strategy – align AI initiatives with business objectives and identify high-value use cases",
          "Leverage machine learning & deep learning – build intelligent models that learn, adapt, and improve over time",
          "Automate decision-making – deploy AI solutions that streamline workflows and improve efficiency",
          "Enhance customer engagement – use AI for personalization, recommendation engines, and predictive insights",
          "Scale with confidence – adopt AI responsibly with focus on governance, ethics, and compliance"
        ],
        flowchart: [
          "Identify AI opportunities & use cases",
          "Assess data quality & feasibility",
          "Build AI adoption roadmap",
          "Recommend tools & frameworks",
          "Guide implementation & governance"
        ],
        icon: "💡",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      }
    ]
  },
  {
    title: "Business Intelligence",
    value: "business-intelligence",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg",
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg",
      },
      {
        title: "BI & Data Visualization",
        description: "Data is only valuable when it can be understood, shared, and acted upon. Business Intelligence (BI) and Data Visualization bring clarity to complexity by transforming raw data into interactive dashboards, reports, and visual stories that empower decision-makers at every level.",
        overview: "Our BI & Data Visualization Services help organizations design and implement solutions that deliver real-time, actionable insights in an intuitive and accessible format. By combining deep analytics expertise with leading BI tools and visualization platforms, we enable businesses to see the bigger picture while drilling down into the details that matter.",
        benefits: [
          "Turn data into decisions – deliver clear, accurate, and interactive reports to stakeholders",
          "Enable self-service analytics – empower business teams with user-friendly dashboards",
          "Monitor KPIs in real-time – track performance, spot trends, and act quickly",
          "Enhance storytelling with data – communicate insights visually for stronger impact",
          "Integrate multiple sources – bring together data across systems for a unified view"
        ],
        flowchart: [
          "Understand business reporting needs",
          "Design interactive BI dashboards",
          "Integrate multiple data sources",
          "Apply visualization best practices",
          "Deploy dashboards & train teams"
        ],
        icon: "📊",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Customer Experience Consulting Services",
        description: "In today's competitive marketplace, customer experience is the key differentiator that drives loyalty, growth, and long-term success. Delivering seamless, personalized, and engaging experiences requires more than intuition—it demands a data-driven approach backed by the right strategy, insights, and technology.",
        overview: "Our Customer Experience Consulting Services help organizations design and implement strategies that place customers at the center of every interaction. By leveraging analytics, process design, and digital tools, we enable businesses to understand their customers deeply and deliver value at every touchpoint.",
        benefits: [
          "Map customer journeys – identify gaps and opportunities across all engagement channels",
          "Leverage customer analytics – use data to understand behavior, preferences, and sentiment",
          "Personalize interactions – create tailored experiences that increase satisfaction and retention",
          "Optimize digital touchpoints – streamline websites, apps, and service channels for better usability",
          "Strengthen loyalty programs – design strategies that enhance customer retention and advocacy"
        ],
        flowchart: [
          "Analyze current customer experience",
          "Design customer journey maps",
          "Implement personalization strategies",
          "Optimize digital touchpoints",
          "Monitor & improve continuously"
        ],
        icon: "👥",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      }
    ]
  },
  {
    title: "Data Engineering",
    value: "data-engineering",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg",
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg",
      },
      {
        title: "Data Warehousing",
        description: "A well-structured data warehouse is the backbone of reliable business intelligence. It brings together data from multiple sources, organizes it in a consistent way, and makes it readily available for reporting, analytics, and decision-making.",
        overview: "Our Data Warehousing Services help organizations design, build, and modernize data warehouses that are scalable, secure, and business-ready. We combine industry best practices with modern cloud and on-premises technologies to deliver platforms that support both current needs and future growth.",
        benefits: [
          "Unify data sources – integrate data from diverse systems into a single trusted repository",
          "Enhance performance – optimize query speed and reporting efficiency",
          "Enable advanced analytics – prepare data for AI/ML, predictive, and prescriptive insights",
          "Scale with confidence – leverage modern cloud-based data warehouses for elasticity and cost efficiency",
          "Maintain governance & security – ensure data quality, compliance, and protection at every stage"
        ],
        flowchart: [
          "Understand business reporting & analytics needs",
          "Design a modern data warehouse architecture",
          "Implement ETL/ELT pipelines",
          "Optimize queries & storage",
          "Deploy with governance & security"
        ],
        icon: "🏗️",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Data Engineering Services",
        description: "Reliable analytics starts with a strong data foundation. Data Engineering is the process of designing, building, and managing the systems and pipelines that make data accessible, accurate, and analytics-ready.",
        overview: "Our Data Engineering Services help organizations turn raw, fragmented data into structured, high-quality information that powers business intelligence, reporting, and advanced analytics. We bring together deep expertise in modern tools, cloud platforms, and scalable architectures to create data ecosystems that grow with your business.",
        benefits: [
          "Design modern data pipelines – automate ingestion, transformation, and integration across multiple sources",
          "Ensure data quality – clean, validate, and enrich data to improve trust and usability",
          "Enable real-time processing – handle streaming and batch data for faster insights",
          "Optimize for scale – build architectures that adapt to growing data volumes and business needs",
          "Reduce costs – streamline operations with efficient, cloud-native data engineering practices"
        ],
        flowchart: [
          "Assess data sources & integration points",
          "Design robust data pipelines",
          "Build scalable ETL/ELT workflows",
          "Automate data quality & validation",
          "Deploy with monitoring & support"
        ],
        icon: "🔧",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Modern Data Architecture",
        description: "The way organizations use data has evolved — and so must the architecture that supports it. Traditional systems often struggle with today's demands for real-time insights, multi-cloud environments, and ever-growing data volumes. A modern data architecture ensures that your business has the agility, scalability, and flexibility needed to thrive in the digital era.",
        overview: "Our Modern Data Architecture Services help organizations reimagine how data is collected, stored, processed, and consumed. By leveraging cloud-native platforms, data lakes, data mesh, and advanced integration frameworks, we design architectures that are built for speed, scale, and future growth.",
        benefits: [
          "Unify data environments – seamlessly integrate structured, semi-structured, and unstructured data",
          "Enable flexibility – design architectures that adapt to business changes and new technologies",
          "Support real-time insights – enable streaming and event-driven architectures for instant decision-making",
          "Empower self-service BI – make data easily accessible to business teams without heavy IT dependency",
          "Future-proof systems – adopt architectures that support AI/ML, advanced analytics, and compliance needs"
        ],
        flowchart: [
          "Assess legacy architecture gaps",
          "Design modular & scalable architecture (cloud/hybrid)",
          "Migrate data & apps securely",
          "Integrate with analytics/BI platforms",
          "Deploy with a continuous improvement plan"
        ],
        icon: "🏛️",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Big Data Development",
        description: "As organizations scale, the complexity and volume of data grow exponentially. To stay competitive, businesses need powerful platforms and applications that can capture, process, and analyze data at scale. Big Data Development ensures that the right systems, tools, and applications are built to transform raw data into business-ready intelligence.",
        overview: "Our Big Data Development Services help organizations design and implement custom big data solutions tailored to their unique business needs. From data pipelines to analytics platforms, we create scalable, high-performance systems that support decision-making, innovation, and growth.",
        benefits: [
          "Build scalable data platforms – design and deploy cloud and on-premise big data environments",
          "Develop custom applications – create solutions for data ingestion, transformation, and analytics",
          "Enable real-time data processing – manage streaming and batch data for faster insights",
          "Integrate diverse data sources – connect structured, semi-structured, and unstructured data",
          "Ensure performance & security – optimize systems for reliability, governance, and compliance"
        ],
        flowchart: [
          "Assess project requirements & goals",
          "Select suitable big data tech stack",
          "Develop scalable applications",
          "Test performance & scalability",
          "Deploy solutions with monitoring"
        ],
        icon: "📊",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      }
    ]
  },
  {
    title: "Machine Learning",
    value: "machine-learning",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg",
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "ML Consultant",
        description: "Machine Learning (ML) is at the heart of modern data-driven transformation. It enables organizations to move beyond descriptive analytics and adopt predictive and prescriptive intelligence that fuels growth, efficiency, and innovation. However, success with ML requires not just algorithms, but the right strategy, data readiness, and deployment approach.",
        overview: "Our ML Consulting Services help businesses identify high-impact opportunities for ML, design robust models, and implement solutions that integrate seamlessly with existing systems. We ensure ML initiatives deliver tangible business outcomes, not just experiments.",
        benefits: [
          "Assess ML readiness – evaluate data quality, infrastructure, and business use cases",
          "Design & build ML models – create predictive and adaptive algorithms tailored to specific challenges",
          "Operationalize ML at scale – deploy models into production with monitoring and continuous improvement",
          "Enhance decision-making – use ML to automate tasks, reduce risks, and unlock new revenue streams",
          "Stay future-ready – adopt best practices in model governance, fairness, and compliance"
        ],
        flowchart: [
          "Assess ML readiness & opportunities",
          "Define ML use cases & roadmap",
          "Evaluate tech stack & infrastructure",
          "Provide implementation strategy",
          "Guide deployment & scaling"
        ],
        icon: "🎯",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "ML Development",
        description: "Machine Learning has the power to turn massive volumes of data into actionable intelligence by identifying patterns, predicting outcomes, and automating decision-making. To unlock this potential, organizations need custom ML solutions that are designed, trained, and deployed to address their unique business challenges.",
        overview: "Our ML Development Services focus on building end-to-end solutions that go beyond experimentation—delivering models that are accurate, scalable, and production-ready.",
        benefits: [
          "Develop custom ML models – tailored algorithms for classification, prediction, clustering, and recommendation",
          "Implement deep learning solutions – apply advanced neural networks for NLP, image, and speech recognition",
          "Embed ML into products – integrate intelligent features into enterprise applications and digital platforms",
          "Automate workflows – use ML to streamline processes, reduce errors, and increase efficiency",
          "Monitor & optimize models – ensure continuous improvement through retraining and performance tracking"
        ],
        flowchart: [
          "Define problem statement & dataset",
          "Build ML models with algorithms",
          "Train & validate models",
          "Integrate ML models with applications",
          "Deploy with monitoring & retraining"
        ],
        icon: "⚙️",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      }
    ]
  },
  {
    title: "Data Science",
    value: "data-science",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg",
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Big Data Analytics",
        description: "In the era of digital transformation, organizations generate more data than ever before. The true challenge lies not in collecting it, but in unlocking the insights hidden within. Big Data Analytics empowers businesses to make faster, smarter, and more confident decisions by turning massive volumes of complex data into meaningful intelligence.",
        overview: "Our Big Data Analytics Services enable organizations to harness advanced analytics, machine learning, and cloud technologies to uncover patterns, trends, and opportunities that drive measurable business value.",
        benefits: [
          "Transform raw data into insights – analyze structured and unstructured data from multiple sources",
          "Discover patterns & trends – use predictive and prescriptive analytics for smarter decision-making",
          "Enhance customer experience – understand behavior, preferences, and journeys at scale",
          "Optimize operations – improve efficiency, reduce costs, and identify process improvements",
          "Drive innovation – enable data-driven products, services, and strategies"
        ],
        flowchart: [
          "Define business KPIs & analytics goals",
          "Collect & preprocess big data",
          "Apply statistical & predictive models",
          "Visualize insights for decision-making",
          "Deploy dashboards & optimize performance"
        ],
        icon: "📈",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      }
    ]
  },
  {
    title: "Generative AI",
    value: "generative-ai",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg",
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "AI Product Development",
        description: "Transforming ideas into intelligent products requires the right balance of strategy, innovation, and technology expertise. AI Product Development enables organizations to create next-generation solutions that learn, adapt, and deliver smarter outcomes across industries.",
        overview: "Our AI Product Development Services help businesses conceptualize, design, and deploy AI-powered products that solve real-world challenges and create competitive advantage. From prototypes to full-scale applications, we guide clients through every stage of the product lifecycle.",
        benefits: [
          "Design AI-powered applications – build products that leverage machine learning, NLP, computer vision, and predictive analytics",
          "Develop scalable platforms – architect solutions that grow with business needs and user adoption",
          "Accelerate time-to-market – use pre-built frameworks, reusable components, and agile methodologies",
          "Integrate seamlessly – embed AI into existing systems, workflows, and customer-facing applications",
          "Ensure reliability & compliance – deploy products that meet security, ethical, and regulatory standards"
        ],
        flowchart: [
          "Understand product vision & scope",
          "Design AI-driven product architecture",
          "Develop & integrate AI models",
          "Test product usability & performance",
          "Launch & scale product"
        ],
        icon: "🚀",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Generative AI Consulting",
        description: "Generative AI is transforming the way businesses create, communicate, and innovate. From producing personalized content to designing intelligent automation workflows, Generative AI helps organizations unlock new possibilities and deliver value faster. But success with GenAI requires the right use cases, governance, and integration with existing business processes.",
        overview: "Our Generative AI Consulting Services guide organizations in understanding, adopting, and scaling GenAI responsibly and effectively. We help you identify opportunities where GenAI can drive measurable impact, build strategies for implementation, and ensure ethical and secure adoption.",
        benefits: [
          "Discover GenAI opportunities – identify use cases in content generation, customer support, product design, and automation",
          "Build a GenAI roadmap – define strategy, tools, and frameworks tailored to your business",
          "Integrate with workflows – embed GenAI into existing processes and applications for seamless adoption",
          "Ensure responsible AI – address ethics, data privacy, and compliance in GenAI implementations",
          "Drive innovation & speed – empower teams to achieve more with AI-driven creativity and efficiency"
        ],
        flowchart: [
          "Identify generative AI opportunities",
          "Assess ethical, compliance, and risk factors",
          "Define business use cases & roadmap",
          "Recommend frameworks & models",
          "Provide governance & adoption support"
        ],
        icon: "🎯",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Generative AI Development",
        description: "Generative AI is reshaping industries by enabling businesses to create intelligent, adaptive, and human-like solutions. From conversational agents to content generation and synthetic data creation, GenAI-powered applications help organizations accelerate innovation, personalize experiences, and optimize operations.",
        overview: "Our Generative AI Development Services focus on building custom, scalable solutions that align with your unique business needs. We design and implement GenAI-powered applications that integrate seamlessly with your ecosystem and deliver real business outcomes.",
        benefits: [
          "Develop GenAI-powered applications – build intelligent chatbots, assistants, and automation tools",
          "Enable content generation – create personalized text, audio, image, or video content at scale",
          "Enhance customer engagement – power recommendation engines, marketing tools, and interactive experiences",
          "Generate synthetic data – create high-quality datasets for training, testing, and model improvement",
          "Ensure scalability & governance – deploy secure, ethical, and compliant GenAI solutions"
        ],
        flowchart: [
          "Define business-specific generative use case",
          "Design solution architecture",
          "Build & fine-tune generative models",
          "Integrate into workflows/products",
          "Deploy with monitoring & iteration"
        ],
        icon: "🔧",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "GPT Integration Services",
        description: "Large Language Models (LLMs) like GPT are redefining how businesses interact with data, customers, and workflows. By integrating GPT into enterprise systems, organizations can automate conversations, summarize insights, generate content, and enhance decision-making with unprecedented efficiency.",
        overview: "Our GPT Integration Services help businesses harness the power of GPT safely and effectively by embedding it into applications, platforms, and processes. We design and deploy solutions that align with your business goals while ensuring security, scalability, and compliance.",
        benefits: [
          "Develop GPT-powered chatbots & virtual assistants – deliver natural, human-like conversations",
          "Automate knowledge management – enable document summarization, report generation, and FAQ automation",
          "Enhance customer engagement – provide personalized recommendations and real-time query resolution",
          "Integrate GPT into enterprise systems – embed into CRMs, ERPs, HR tools, and business workflows",
          "Ensure responsible AI adoption – address data privacy, ethical usage, and model fine-tuning"
        ],
        flowchart: [
          "Identify GPT-powered use cases (chat, automation, etc.)",
          "Design integration blueprint",
          "Customize GPT responses & workflows",
          "Integrate with apps/CRMs/ERPs",
          "Deploy & optimize performance"
        ],
        icon: "🤖",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "AI Agent Store",
        description: "As businesses increasingly adopt AI, the need for ready-to-deploy, task-specific AI agents is growing rapidly. AI Agents go beyond simple chatbots— they are autonomous, intelligent assistants that can analyze data, make decisions, and perform actions across business systems.",
        overview: "Our AI Agent Store Services provide organizations with a marketplace of customizable AI agents designed for diverse business functions. From customer support to analytics, marketing, and operations, we help you choose, customize, and integrate AI agents that accelerate digital transformation.",
        benefits: [
          "Access a library of pre-built AI agents – for customer service, HR, sales, finance, and IT support",
          "Customize agents for unique workflows – tailor responses, logic, and integrations to business needs",
          "Enable multi-system integration – connect agents with CRMs, ERPs, analytics dashboards, and cloud apps",
          "Deploy securely and at scale – ensure compliance, data governance, and enterprise-level scalability",
          "Continuously improve performance – monitor, retrain, and optimize agents for evolving use cases"
        ],
        flowchart: [
          "Assess business workflows needing automation",
          "Select pre-built/custom AI agents",
          "Customize agents for business needs",
          "Integrate with systems & workflows",
          "Deploy & scale agents enterprise-wide"
        ],
        icon: "🏪",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      }
    ]
  },
  {
    title: "Full Stack Development",
    value: "full-stack-development",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    backgroundImage: "/noisy-background.jpg",
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
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
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "Cloud & DevOps Services",
        description: "In today's fast-paced digital landscape, businesses need agility, scalability, and reliability to stay ahead. Cloud and DevOps together empower organizations to accelerate innovation, reduce time-to-market, and ensure seamless operations. By combining cloud-native solutions with modern DevOps practices, enterprises can transform the way they build, deploy, and manage applications.",
        overview: "Our Cloud & DevOps Services help organizations modernize their IT infrastructure, automate workflows, and enable continuous delivery pipelines that drive efficiency and resilience.",
        benefits: [
          "Migrate & modernize on the cloud – move applications and data to cloud platforms with minimal disruption",
          "Enable automation – streamline deployment, monitoring, and operations through DevOps toolchains",
          "Accelerate release cycles – adopt CI/CD pipelines for faster and more reliable software delivery",
          "Improve scalability & performance – leverage cloud elasticity to meet dynamic business demands",
          "Ensure governance & security – implement robust policies for compliance, monitoring, and resilience"
        ],
        flowchart: [
          "Assess infrastructure & DevOps readiness",
          "Design cloud-native CI/CD pipelines",
          "Automate infrastructure & workflows",
          "Monitor for performance & security",
          "Scale with continuous improvement"
        ],
        icon: "☁️",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      },
      {
        title: "AI Software Development",
        description: "Artificial Intelligence is redefining how businesses operate, interact, and grow. To truly capture its potential, organizations need custom AI-powered software solutions that align with their goals, processes, and industry requirements.",
        overview: "Our AI Software Development Services enable businesses to design and build intelligent applications that automate tasks, enhance decision-making, and deliver exceptional user experiences. From concept to deployment, we develop scalable AI solutions that integrate seamlessly with existing systems.",
        benefits: [
          "Develop AI-driven applications – create software powered by machine learning, NLP, computer vision, and predictive analytics",
          "Automate workflows – design solutions that reduce manual effort and increase operational efficiency",
          "Enhance customer engagement – build intelligent chatbots, recommendation engines, and personalized platforms",
          "Ensure scalability & integration – deliver solutions that grow with your business and work across platforms",
          "Maintain reliability & compliance – design software with strong governance, ethics, and data security"
        ],
        flowchart: [
          "Define problem statement & dataset",
          "Build ML models with algorithms",
          "Train & validate models",
          "Integrate ML models with applications",
          "Deploy with monitoring & retraining"
        ],
        icon: "💻",
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "/noisy-background.jpg"
      }
    ]
  }
];

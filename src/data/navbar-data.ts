export interface NavbarServiceItem {
  title: string;
  href: string;
}

export interface NavbarServiceCategory {
  title: string;
  items: NavbarServiceItem[];
}

export interface NavbarData {
  services: NavbarServiceCategory[];
  researchAndPatents: NavbarServiceCategory[];
}

export const navbarData: NavbarData = {
  services: [
    {
      title: "Big Data & Cloud Frameworks",
      items: [
        { title: "Data Warehouse", href: "/data-warehousing" },
        { title: "Data Engineering Services", href: "/data-engineering" },
        { title: "Modern Data Architecture", href: "/modern-data-architecture" },
        { title: "Big Data Analytics", href: "/big-data-analytics" },
        { title: "BI & Data Visualization", href: "/bi-data-visualization" },
        { title: "Big Data Development", href: "/big-data-development" },
        { title: "Cloud & DevOps Services", href: "/cloud-devops" }
      ]
    },
    {
      title: "AI/ML",
      items: [
        { title: "AI Consulting", href: "/ai-consulting" },
        { title: "AI Product Development", href: "/ai-product-development" },
        { title: "Data Science", href: "/data-science" },
        { title: "ML Consultant", href: "/ml-consultant" },
        { title: "AI Software Development", href: "/ai-software-development" },
        { title: "Customer Experience Consulting Services", href: "/customer-experience-consulting" },
        { title: "ML Development", href: "/ml-development" }
      ]
    },
    {
      title: "Generative AI & GPT",
      items: [
        { title: "Generative AI Consulting", href: "/generative-ai-consulting" },
        { title: "Generative AI Development", href: "/generative-ai-development" },
        { title: "GPT Integration Services", href: "/gpt-integration" },
        { title: "AI Chatbot Development", href: "/ai-chatbot-development" },
        { title: "AI Agent Store", href: "/ai-agent-store" }
      ]
    },
    {
      title: "Software Development",
      items: [
        { title: "Custom Web Development", href: "/custom-web-development" },
        { title: "AI Mobile App Development", href: "/ai-mobile-app-development" }
      ]
    }
  ],
  researchAndPatents: [
    {
      title: "Patent Search & Analysis",
      items: [
        { title: "IP Search", href: "/research#patent-search" },
        { title: "Patent Invalidation Search", href: "/research#patent-search" },
        { title: "Patent Infringement Search", href: "/research#patent-search" },
        { title: "Freedom to Operate Search", href: "/research#patent-search" },
        { title: "Patentability Search", href: "/research#patent-search" },
        { title: "Design Patent Search", href: "/research#patent-search" },
        { title: "State of Art Search (SOA)", href: "/research#patent-search" }
      ]
    },
    {
      title: "Portfolio Management",
      items: [
        { title: "Patent Portfolio Management", href: "/research#portfolio-management" },
        { title: "Patent Portfolio Analysis", href: "/research#portfolio-management" },
        { title: "Patent Ranking", href: "/research#portfolio-management" },
        { title: "Patent Commercialisation", href: "/research#portfolio-management" }
      ]
    },
    {
      title: "Patent Services",
      items: [
        { title: "Patent Drafting & Illustrations", href: "/research#patent-services" },
        { title: "Patent Filing/ FER/ Grant Support", href: "/research#patent-services" },
        { title: "Drafting & Prosecution Support", href: "/research#patent-services" },
        { title: "M&A – Patent Due Diligence", href: "/research#patent-services" },
        { title: "Standard Essential Patents (SEPs)", href: "/research#patent-services" }
      ]
    }
  ]
};

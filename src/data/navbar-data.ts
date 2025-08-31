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
      title: "IP Search",
      items: [
        { title: "Patent Invalidation Search", href: "/research-patents#patent-invalidation-search" },
        { title: "Patent Infringement Search", href: "/research-patents#patent-infringement-search" },
        { title: "Freedom to Operate Search", href: "/research-patents#freedom-to-operate-search" },
        { title: "Patentability Search", href: "/research-patents#patentability-search" },
        { title: "Design Patent Search", href: "/research-patents#design-patent-search" },
        { title: "State of Art Search (SOA)", href: "/research-patents#state-of-art-search" },
        { title: "Standard Essential Patents (SEPs)", href: "/research-patents#standard-essential-patents" }
      ]
    },
    {
      title: "Patent Portfolio Management",
      items: [
        { title: "Patent Portfolio Analysis", href: "/research-patents#patent-portfolio-analysis" },
        { title: "M&A – Patent Due Diligence", href: "/research-patents#ma-patent-due-diligence" },
        { title: "Patent Ranking", href: "/research-patents#patent-ranking" },
        { title: "Patent Commercialisation", href: "/research-patents#patent-commercialisation" },
        { title: "Patent Drafting & Illustrations", href: "/research-patents#patent-drafting-illustrations" },
        { title: "Patent Filing/ FER/ Grant Support", href: "/research-patents#patent-filing-fer-grant-support" },
        { title: "Drafting & Prosecution Support", href: "/research-patents#drafting-prosecution-support" }
      ]
    }
  ]
};

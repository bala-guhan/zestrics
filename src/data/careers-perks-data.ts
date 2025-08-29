import { Target, Briefcase, Link, Rocket, Handshake, Globe } from "lucide-react";

export interface CareerPerk {
  id: number;
  header: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const careersPerksData: CareerPerk[] = [
  {
    id: 1,
    header: "13+ Years of Proven Expertise",
    description: "With over a decade of experience, we bring deep knowledge in data, analytics, and digital transformation, helping businesses across industries make smarter, faster, and more confident decisions.",
    icon: Target
  },
  {
    id: 2,
    header: "Business-First, Technology-Next Approach",
    description: "We focus on understanding your business challenges first and then design tailored data-driven solutions that align with your goals, rather than just deploying tools.",
    icon: Briefcase
  },
  {
    id: 3,
    header: "End-to-End Capabilities",
    description: "From data engineering, BI, analytics, AI/ML, to cloud and digital solutions, we provide a complete suite of services—ensuring seamless execution under one roof.",
    icon: Link
  },
  {
    id: 4,
    header: "Innovation with Practicality",
    description: "We combine the latest advancements in Big Data, BI, and AI with a pragmatic approach to ensure solutions are not just innovative, but also scalable, cost-effective, and business-ready.",
    icon: Rocket
  },
  {
    id: 5,
    header: "Strong Focus on Client Success",
    description: "Our success is measured by your outcomes. We work as trusted advisors, offering transparency, continuous collaboration, and post-deployment support to ensure lasting impact.",
    icon: Handshake
  },
  {
    id: 6,
    header: "Global Delivery with Local Sensibility",
    description: "With a global presence and industry-specific expertise, we understand market dynamics and deliver solutions tailored to your industry, geography, and business culture.",
    icon: Globe
  }
];

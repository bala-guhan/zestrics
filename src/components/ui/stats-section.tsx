"use client";
import { motion } from "motion/react";
import { NumberTicker } from "../magicui/number-ticker";
import { Users, Briefcase, Building2, MapPin, ArrowRight } from "lucide-react";

interface StatCardProps {
  title: string;
  number: number;
  subtitle: string;
  details: string[];
  actionText?: string;
  actionLink?: string;
  delay?: number;
  icon: React.ReactNode;
}

const StatCard = ({ title, number, subtitle, details, actionText, actionLink, delay = 0, icon }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/noisy-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative z-10 p-6 backdrop-blur-sm">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        
        <div className="text-4xl font-bold text-blue-500 mb-2">
          <NumberTicker value={number} />
          <span className="text-2xl">+</span>
        </div>
        
        <p className="text-sm font-semibold text-gray-900 mb-4">{subtitle}</p>
        
        <div className="space-y-1 mb-4">
          {details.map((detail, index) => (
            <p key={index} className="text-sm text-gray-700">
              {detail}
            </p>
          ))}
        </div>
        
        {actionText && actionLink && (
          <a
            href={actionLink}
            className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
          >
            {actionText} <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      title: "Employees",
      number: 80,
      subtitle: "We Are",
      details: [
        "Data Scientists",
        "Engineers", 
        "Architects",
        "Analysts",
        "Designers"
      ],
      actionText: "Join Us",
      actionLink: "/careers",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Projects Delivered",
      number: 150,
      subtitle: "Clients Geography",
      details: [
        "USA",
        "UK", 
        "EU",
        "Japan"
      ],
      actionText: "See Our Work",
      actionLink: "/case-studies",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Key Industries",
      number: 5,
      subtitle: "Industry Focus",
      details: [
        "Marketing & Advertising",
        "E-commerce",
        "Logistics",
        "Fintech",
        "Digital Health",
        "IoT"
      ],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Locations",
      number: 3,
      subtitle: "Our Offices",
      details: [
        "Cyprus (HQ)",
        "USA",
        "Lithuania"
      ],
      actionText: "Contact Us",
      actionLink: "/#contact",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600">
            Numbers that reflect our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              number={stat.number}
              subtitle={stat.subtitle}
              details={stat.details}
              actionText={stat.actionText}
              actionLink={stat.actionLink}
              delay={index * 0.1}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

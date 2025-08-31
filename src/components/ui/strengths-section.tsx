"use client";
import { motion } from "motion/react";
import { Brain, GraduationCap, BarChart3, Smartphone, Eye, Database } from "lucide-react";


interface StrengthBarProps {
  title: string;
  percentage: number;
  color: string;
  delay?: number;
  icon?: React.ReactNode;
}

const StrengthBar = ({ title, percentage, color, delay = 0, icon }: StrengthBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {icon && (
            <div className="text-blue-600 mr-2">
              {icon}
            </div>
          )}
          <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        </div>
        <span className="text-sm font-semibold text-gray-900">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-3 rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
};

export const StrengthsSection = () => {
  const coreCompetencies = [
    { title: "Predictive Analytics & Big Data", percentage: 50, color: "bg-blue-600", icon: <Database className="w-4 h-4" /> },
    { title: "NLP", percentage: 20, color: "bg-blue-500", icon: <Brain className="w-4 h-4" /> },
    { title: "CV and OCR", percentage: 15, color: "bg-blue-400", icon: <Eye className="w-4 h-4" /> },
    { title: "AI Mobile Apps Development", percentage: 15, color: "bg-blue-300", icon: <Smartphone className="w-4 h-4" /> }
  ];

  const educationalLevels = [
    { title: "Master's Degree in Applied Mathematics, System Analysis, and Computer Science", percentage: 59, color: "bg-blue-600", icon: <GraduationCap className="w-4 h-4" /> },
    { title: "Bachelor's Degree", percentage: 29, color: "bg-blue-500", icon: <GraduationCap className="w-4 h-4" /> },
    { title: "University Undergraduates", percentage: 12, color: "bg-blue-400", icon: <GraduationCap className="w-4 h-4" /> }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/bg-noisy-slate.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Competencies and Educational Level
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Core Competencies</h3>
            </div>
            {coreCompetencies.map((competency, index) => (
              <StrengthBar
                key={index}
                title={competency.title}
                percentage={competency.percentage}
                color={competency.color}
                delay={index * 0.1}
                icon={competency.icon}
              />
            ))}
          </motion.div>

          {/* Educational Level */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Educational Level</h3>
            </div>
            {educationalLevels.map((level, index) => (
              <StrengthBar
                key={index}
                title={level.title}
                percentage={level.percentage}
                color={level.color}
                delay={index * 0.1}
                icon={level.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

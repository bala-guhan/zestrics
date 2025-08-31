"use client";
import { motion } from "motion/react";
import { Calendar, Users, Award, Rocket, Globe, TrendingUp } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  achievement?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Zestrics was established with a vision to transform businesses through data-driven solutions.",
    icon: <Rocket className="w-6 h-6" />,
    achievement: "Started with 5 team members"
  },
  {
    year: "2013",
    title: "First Major Client",
    description: "Secured our first enterprise client, marking the beginning of our growth journey.",
    icon: <Users className="w-6 h-6" />,
    achievement: "50+ projects delivered"
  },
  {
    year: "2016",
    title: "AI & ML Expansion",
    description: "Expanded our expertise into artificial intelligence and machine learning solutions.",
    icon: <TrendingUp className="w-6 h-6" />,
    achievement: "100+ AI projects"
  },
  {
    year: "2019",
    title: "Global Expansion",
    description: "Opened offices in USA and Lithuania, establishing our global presence.",
    icon: <Globe className="w-6 h-6" />,
    achievement: "3 international offices"
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Received multiple industry awards for innovation and excellence in data science.",
    icon: <Award className="w-6 h-6" />,
    achievement: "5+ industry awards"
  },
  {
    year: "2024",
    title: "Future Forward",
    description: "Leading the way in next-generation AI solutions and digital transformation.",
    icon: <Calendar className="w-6 h-6" />,
    achievement: "150+ projects, 80+ team members"
  }
];

export const TimelineSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600">
            Over 14 years of innovation, growth, and excellence in technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                {/* Timeline Item */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-blue-600">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    {item.achievement && (
                      <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.achievement}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Year */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                  <div className="text-sm text-gray-500">
                    {index === timelineData.length - 1 ? 'Present' : `${parseInt(item.year) + 1} - ${timelineData[index + 1]?.year || 'Present'}`}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">14+</div>
            <div className="text-gray-600">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600">Global Offices</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

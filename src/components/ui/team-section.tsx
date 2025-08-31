"use client";
import { motion } from "motion/react";

interface TeamRole {
  title: string;
  description: string;
}

const teamRoles: TeamRole[] = [
  {
    title: "Data Scientists",
    description: "Who build machine learning pipelines and personalized data products."
  },
  {
    title: "Data Analysts",
    description: "Ready to help you to get valuable insights from your data."
  },
  {
    title: "Consultants",
    description: "Who are ready to help you with the right decision."
  },
  {
    title: "Architects",
    description: "With experience in large scale systems design and implementation."
  },
  {
    title: "Engineers",
    description: "Proficient in big data management technologies."
  },
  {
    title: "Designers",
    description: "With years of experience in UI/UX design."
  }
];

export const TeamSection = () => {
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
            Who We Are
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Single Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/group-photo.jpeg"
                alt="Team Working Together"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Roles Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Team</h3>
            
            <div className="space-y-4">
              {teamRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {role.title}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

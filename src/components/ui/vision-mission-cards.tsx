
import { motion } from "motion/react";
import { TextAnimate } from "../magicui/text-animate";

interface VisionMissionCardProps {
  type: "vision" | "mission";
  title: string;
  content: string;
  className?: string;
}

const VisionMissionCard = ({ type, title, content, className }: VisionMissionCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl p-8 text-white ${className}`}
      style={{
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${type === 'vision' ? '/bg-noisy-slate.jpg' : '/noisy-bg-cyan.jpg'})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <TextAnimate className="leading-relaxed text-white/90">
            {content}
          </TextAnimate>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white/5"></div>
      </div>
    </motion.div>
  );
};

export const VisionMissionCards = () => {
  const visionContent = `To be the most trusted partner for businesses in transforming data into intelligence and intelligence into growth.

We envision a world where every organization, regardless of size or industry, can harness the full potential of its data. By enabling smarter decisions and creating meaningful insights, we aim to shape a future where data is not just an asset, but a true driver of innovation, efficiency, and growth.`;

  const missionContent = `To empower organizations with analytics and business intelligence solutions that drive clarity, innovation, and measurable impact.

Our mission is to simplify complexity, turning raw data into actionable intelligence. We are committed to building analytics-first ecosystems that not only solve today's challenges but also prepare businesses for tomorrow's opportunities. Through a blend of strategy, technology, and domain expertise, we deliver measurable value that helps our clients thrive in a rapidly evolving digital landscape.`;

  return (
    <section className="px-4 md:px-32 bg-white py-16 pb-32">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl mb-2">Our Vision & Mission</h2>
        <TextAnimate className="text-gray-500">
          Driving the future of data intelligence and business transformation
        </TextAnimate>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <VisionMissionCard
          type="vision"
          title="Our Vision"
          content={visionContent}
        />
        <VisionMissionCard
          type="mission"
          title="Our Mission"
          content={missionContent}
        />
      </div>
    </section>
  );
};

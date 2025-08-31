"use client";
import { motion } from "motion/react";
import { Navbar } from "../components/ui/navbar";
import { StatsSection } from "../components/ui/stats-section";
import { StrengthsSection } from "../components/ui/strengths-section";
import { TeamSection } from "../components/ui/team-section";
import { VisionMissionCards } from "../components/ui/vision-mission-cards";
import { TimelineSection } from "../components/ui/timeline-section";
import { TextAnimate } from "../components/magicui/text-animate";
import { ShinyButton } from "../components/magicui/shiny-button";


export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zestrics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking technology company specializing in AI, data science, and digital transformation solutions that drive business growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Strengths Section */}
      <StrengthsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Vision & Mission Section */}
      <VisionMissionCards />

      {/* Timeline Section */}
      <TimelineSection />

      <div className="px-4 md:px-32 bg-white pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Ready to Join Us?
          </h2>
          <TextAnimate className="text-gray-600 mb-2 text-lg">
            Find your best match and join us in our journey. Let us build something great together.
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton className="bg-white border border-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50"
            onClick={() => {
              window.location.href = "/careers";
            }}
            >
              Join Us
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>
  );
}

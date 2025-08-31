"use client";
import { ServicePage } from "../components/ServicePage";
import { aiChatbotDevelopmentData } from "../data/ai-chatbot-development-data";

export function AIChatbotDevelopmentPage() {
  return <ServicePage {...aiChatbotDevelopmentData} />;
}

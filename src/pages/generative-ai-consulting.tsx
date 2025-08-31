"use client";
import { ServicePage } from "../components/ServicePage";
import { generativeAIConsultingData } from "../data/generative-ai-consulting-data";

export function GenerativeAIConsultingPage() {
  return <ServicePage {...generativeAIConsultingData} />;
}

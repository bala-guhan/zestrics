"use client";
import { ServicePage } from "../components/ServicePage";
import { aiConsultingData } from "../data/ai-consulting-data";

export function AIConsultingPage() {
  return <ServicePage {...aiConsultingData} />;
}

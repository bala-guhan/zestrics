"use client";
import { ServicePage } from "../components/ServicePage";
import { aiSoftwareDevelopmentData } from "../data/ai-software-development-data";

export function AISoftwareDevelopmentPage() {
  return <ServicePage {...aiSoftwareDevelopmentData} />;
}

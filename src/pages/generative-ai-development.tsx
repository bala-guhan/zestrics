"use client";
import { ServicePage } from "../components/ServicePage";
import { generativeAIDevelopmentData } from "../data/generative-ai-development-data";

export function GenerativeAIDevelopmentPage() {
  return <ServicePage {...generativeAIDevelopmentData} />;
}

"use client";
import { ServicePage } from "../components/ServicePage";
import { gptIntegrationData } from "../data/gpt-integration-data";

export function GPTIntegrationPage() {
  return <ServicePage {...gptIntegrationData} />;
}

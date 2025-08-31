"use client";
import { ServicePage } from "../components/ServicePage";
import { aiAgentStoreData } from "../data/ai-agent-store-data";

export function AIAgentStorePage() {
  return <ServicePage {...aiAgentStoreData} />;
}

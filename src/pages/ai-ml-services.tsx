"use client";
import { ServicePage } from "../components/ServicePage";
import { aiMlData } from "../data/ai-ml-data";

export function AIMLServicesPage() {
  return <ServicePage {...aiMlData} />;
}

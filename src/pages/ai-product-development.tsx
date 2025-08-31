"use client";
import { ServicePage } from "../components/ServicePage";
import { aiProductDevelopmentData } from "../data/ai-product-development-data";

export function AIProductDevelopmentPage() {
  return <ServicePage {...aiProductDevelopmentData} />;
}

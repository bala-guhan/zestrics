"use client";
import { ServicePage } from "../components/ServicePage";
import { bigDataDevelopmentData } from "../data/big-data-development-data";

export function BigDataDevelopmentPage() {
  return <ServicePage {...bigDataDevelopmentData} />;
}

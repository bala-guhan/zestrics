"use client";
import { ServicePage } from "../components/ServicePage";
import { mlDevelopmentData } from "../data/ml-development-data";

export function MLDevelopmentPage() {
  return <ServicePage {...mlDevelopmentData} />;
}

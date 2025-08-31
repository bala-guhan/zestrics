"use client";
import { ServicePage } from "../components/ServicePage";
import { mlConsultantData } from "../data/ml-consultant-data";

export function MLConsultantPage() {
  return <ServicePage {...mlConsultantData} />;
}

"use client";
import { ServicePage } from "../components/ServicePage";
import { dataEngineeringData } from "../data/data-engineering-data";

export function DataEngineeringPage() {
  return <ServicePage {...dataEngineeringData} />;
}

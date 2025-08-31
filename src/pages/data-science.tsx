"use client";
import { ServicePage } from "../components/ServicePage";
import { dataScienceData } from "../data/data-science-data";

export function DataSciencePage() {
  return <ServicePage {...dataScienceData} />;
}

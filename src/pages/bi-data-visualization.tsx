"use client";
import { ServicePage } from "../components/ServicePage";
import { biDataVisualizationData } from "../data/bi-data-visualization-data";

export function BiDataVisualizationPage() {
  return <ServicePage {...biDataVisualizationData} />;
}

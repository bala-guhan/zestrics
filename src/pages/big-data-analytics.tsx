"use client";
import { ServicePage } from "../components/ServicePage";
import { bigDataAnalyticsData } from "../data/big-data-analytics-data";

export function BigDataAnalyticsPage() {
  return <ServicePage {...bigDataAnalyticsData} />;
}

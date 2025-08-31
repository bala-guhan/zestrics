"use client";
import { ServicePage } from "../components/ServicePage";
import { bigDataCloudData } from "../data/big-data-cloud-data";

export function BigDataCloudServicesPage() {
  return <ServicePage {...bigDataCloudData} />;
}

"use client";
import { ServicePage } from "../components/ServicePage";
import { cloudDevopsData } from "../data/cloud-devops-data";

export function CloudDevopsPage() {
  return <ServicePage {...cloudDevopsData} />;
}

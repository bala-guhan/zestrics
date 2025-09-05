"use client";
import { ServicePage } from "../components/ServicePage";
import { industriesData } from "../data/industries-data";

export function IndustriesPage() {
  return <ServicePage {...industriesData} />;
}

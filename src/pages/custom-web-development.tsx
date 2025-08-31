"use client";
import { ServicePage } from "../components/ServicePage";
import { customWebDevelopmentData } from "../data/custom-web-development-data";

export function CustomWebDevelopmentPage() {
  return <ServicePage {...customWebDevelopmentData} />;
}

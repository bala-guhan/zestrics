"use client";
import { ServicePage } from "../components/ServicePage";
import { customerExperienceConsultingData } from "../data/customer-experience-consulting-data";

export function CustomerExperienceConsultingPage() {
  return <ServicePage {...customerExperienceConsultingData} />;
}

"use client";
import { ServicePage } from "../components/ServicePage";
import { solutionsData } from "../data/solutions-data";

export function SolutionsPage() {
  return <ServicePage {...solutionsData} />;
}

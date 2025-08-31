"use client";
import { ServicePage } from "../components/ServicePage";
import { dataWarehousingData } from "../data/data-warehousing-data";

export function DataWarehousingPage() {
  return <ServicePage {...dataWarehousingData} />;
}

"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import PackageCard from "../../../components/package-card";
import { useParams } from "next/navigation";
import { tvBills } from "@/data";
import { useState } from "react";
import { PackageI } from "@/types";

const TvPackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageI>(
    tvBills[0].packages[0]
  );

  const { id } = useParams();

  const bill = tvBills.find((bill) => bill.id === Number(id));

  if (!bill) return null;

  return (
    <SecondaryLayout
      header="TV Bills"
      title="Select Package to Buy"
      route="/home"
      submit
    >
      {bill.packages &&
        bill.packages.map((item) => (
          <PackageCard
            key={item.id}
            item={item}
            selectedPackage={selectedPackage}
            setPackage={setSelectedPackage}
          />
        ))}
    </SecondaryLayout>
  );
};

export default TvPackagesPage;

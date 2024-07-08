"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import { waterBills } from "@/data";
import React from "react";
import PowerCard from "../power/components/power-card";

const WaterPageContent = () => {
  const [selectedBill, setSelectedBill] = React.useState(waterBills[0]);

  return (
    <SecondaryLayout
      header="Water Bills"
      route={`/water/pay/${selectedBill.id}`}
    >
      {waterBills.map((bill) => (
        <PowerCard
          key={bill.id}
          bill={bill}
          selectedBill={selectedBill}
          setBill={setSelectedBill}
        />
      ))}
    </SecondaryLayout>
  );
};

export default WaterPageContent;

"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import React from "react";
import PowerCard from "./components/power-card";
import { powerBills } from "@/data";

const PowerPageContent = () => {
  const [selectedBill, setSelectedBill] = React.useState(powerBills[0]);
  return (
    <SecondaryLayout
      header="Electricity Bills"
      route={`/power/pay/${selectedBill.id}`}
    >
      {powerBills.map((bill) => (
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

export default PowerPageContent;

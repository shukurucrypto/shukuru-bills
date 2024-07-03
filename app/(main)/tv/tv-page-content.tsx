"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import { tvBills } from "@/data";
import { BillI } from "@/types";
import { useState } from "react";
import CardComponent from "./components/card-component";

const TvPageContent = () => {
  const [selectedBill, setSelectedBill] = useState<BillI>(tvBills[0]);

  return (
    <SecondaryLayout
      title="Select the bill you want to buy"
      route={`/tv/pay/${selectedBill.id}`}
    >
      {tvBills.map((bill) => (
        <CardComponent
          key={bill.id}
          bill={bill}
          selectedBill={selectedBill}
          setBill={setSelectedBill}
        />
      ))}
    </SecondaryLayout>
  );
};

export default TvPageContent;

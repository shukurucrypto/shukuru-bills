"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import { Input } from "@/components/ui/input";
import { pricing } from "@/data";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PriceCard from "@/app/(main)/power/components/price-card";

const EnterAmountPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(pricing[0]);

  const searchParams = useSearchParams();

  const account = searchParams.get("acc");

  if (!account)
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-lg font-medium">Please enter your account number</p>
      </div>
    );

  return (
    <SecondaryLayout
      header="Water Bills"
      title="Enter your amount to pay"
      route="/power/pay/1/amount?0x6fahsd8asdgjhas"
      submit
    >
      <div className="flex w-full items-center mb-5">
        <Input
          placeholder="Amount to pay"
          autoFocus
          defaultValue={selectedAmount.amount.toLocaleString()}
          className="text-lg border-2 h-14 rounded-md px-4 w-full outline-none "
          type="number"
        />
      </div>

      <div className="flex flex-row items-center w-full flex-wrap  gap-4 justify-between">
        {pricing.map((price) => (
          <PriceCard
            key={price.id}
            item={price}
            selectedAmount={selectedAmount}
            setAmount={setSelectedAmount}
          />
        ))}
      </div>

      <div className="w-full flex-col items-center justify-between py-5 my-4 border rounded-lg px-4 bg-slate-50 shadow-sm">
        <div className="flex w-full flex-row items-center justify-between">
          <p className="text-base">Account Name</p>
          <p className="text-base font-medium">Kigozii Paul Kulumba</p>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <p className="text-base">Meter Number</p>
          <p className="text-base font-medium">{account}</p>
        </div>
      </div>
    </SecondaryLayout>
  );
};

export default EnterAmountPage;

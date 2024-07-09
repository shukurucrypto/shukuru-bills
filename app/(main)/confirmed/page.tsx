"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import React from "react";
import ConfirmedCard from "../power/components/confirmed-card";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { powerBills } from "@/data";

interface Params {
  phone: string;
  account: string;
  amount: string;
  easypayId: string;
  units: string;
  transferCode: string;
  energyToken: string;
  type: string;
  reference: string;
  date: string;
}

const TransactionConfirmedPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Define the keys of the query parameters you want to extract
  const paramKeys: (keyof Params)[] = [
    "phone",
    "account",
    "amount",
    "easypayId",
    "units",
    "transferCode",
    "energyToken",
    "type",
    "reference",
    "date",
  ];

  // Extract the query parameters into an object
  const params: Params = paramKeys.reduce((acc, key) => {
    acc[key] = searchParams.get(key) || "N/A";
    return acc;
  }, {} as Params);

  // Function to handle the "Done" button click
  const handleDoneClick = () => {
    const receipt = {
      energyToken: params.energyToken,
      amount: params.amount,
    };

    // Save the receipt to local storage
    localStorage.setItem("receipt", JSON.stringify(receipt));

    // Navigate to the home page
    router.push("/home");
  };

  return (
    <SecondaryLayout
      header="Order Info"
      title=""
      route="/power/pay/confirmed"
      noButton
    >
      <div className="flex flex-1 items-center justify-between flex-col h-full flex-grow">
        <div className="w-full flex flex-row justify-between h-16 mb-8">
          <div className="flex flex-row">
            <div className="size-14 bg-green-600 rounded-full relative overflow-hidden">
              <Image src={powerBills[0].image} layout="fill" alt="bill-logo" />
            </div>

            <div className="flex flex-col mx-3">
              <h1 className="font-semibold">Yaka (PrePaid Bill)</h1>
              <p className="text-xs font-light">{params.date}</p>
              <p className="text-xs font-light">ID: {params.transferCode}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold">{params.units} Units</h1>
          </div>
        </div>

        <div className="w-full h-full border rounded-sm flex-1 px-4">
          <ConfirmedCard title="Contact" value={params.phone} />
          <ConfirmedCard title="Account" value={params.account} />
          <ConfirmedCard title="Amount" value={params.amount} />
          <ConfirmedCard title="Units" value={params.units} />
          <ConfirmedCard title="Bill Type" value={params.type} />
          <ConfirmedCard title="Token" value={params.energyToken} token />

          <div className="w-full flex h-12 items-center justify-between flex-row">
            <p className="text-[11px] font-semibold text-neutral-400">Date</p>
            <p className="text-[11px]">{params.date}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <Button
          className="w-full rounded-full bg-defaultColor text-slate-800 font-semibold"
          onClick={handleDoneClick}
        >
          Done
        </Button>
      </div>
    </SecondaryLayout>
  );
};

export default TransactionConfirmedPage;

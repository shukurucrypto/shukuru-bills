"use client";

import { powerBills } from "@/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Receipt {
  energyToken: string;
  amount: string;
}

const ActivityCard = () => {
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  useEffect(() => {
    const savedReceipt = localStorage.getItem("receipt");
    if (savedReceipt) {
      setReceipt(JSON.parse(savedReceipt));
    }
  }, []);

  if (!receipt) {
    return <div>No receipt found</div>;
  }

  const renderImage = (asset: string) => {
    switch (asset) {
      case "cUSD":
        return "/cusd.png";
      case "USDC":
        return "/usdc.png";
      case "USDT":
        return "/usdt.png";
      default:
        return "/cusd.png";
    }
  };

  if (!receipt) return null;

  return (
    <div className="w-full h-20 cursor-pointer bg-white items-center p-3 border-b flex flex-row">
      <div className="size-12 rounded-md overflow-hidden bg-neutral-100 relative">
        <Image src={powerBills[0].image} layout="fill" alt="asset" />
      </div>
      <div className="flex flex-col px-3  flex-1">
        <h1 className="text-sm font-bold">Bought Yaka (Electricity)</h1>
        <h3 className="text-[11px] font-thin ">
          UGX {receipt.amount} | 10 Units
        </h3>
        <h4 className="text-[11px] font-normal">{receipt.energyToken}</h4>
      </div>

      <div className="size-10 bg-neutral-50 rounded-full relative">
        <Image src="/cusd.png" layout="fill" alt="arrow" />

        <div className="absolute bg-white bottom-0 right-0 rounded-md shadow-md p-1">
          <ArrowRight className="text-blue-500" size={13} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

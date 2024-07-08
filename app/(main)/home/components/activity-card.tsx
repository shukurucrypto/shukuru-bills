import { tvBills } from "@/data";
import { ActivityI } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ActivityCard = ({ activity }: { activity: ActivityI }) => {
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

  return (
    <div className="w-full h-20 cursor-pointer bg-white items-center p-3 border-b flex flex-row">
      <div className="size-12 rounded-md overflow-hidden bg-neutral-100 relative">
        <Image src={tvBills[0].image} layout="fill" alt="asset" />
      </div>
      <div className="flex flex-col px-3  flex-1">
        <h1 className="text-sm font-bold">{activity.title}</h1>
        <h3 className="text-xs font-thin ">UGX {activity.amount}</h3>
        <h4 className="text-xs font-thin">{activity.type}</h4>
      </div>

      <div className="size-10 bg-neutral-50 rounded-full relative">
        <Image src={renderImage(activity.asset)} layout="fill" alt="arrow" />

        <div className="absolute bg-white bottom-0 right-0 rounded-md shadow-md p-1">
          <ArrowRight className="text-blue-500" size={13} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

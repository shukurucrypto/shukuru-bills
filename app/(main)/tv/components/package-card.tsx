import { PackageI } from "@/types";
import { ChevronRight } from "lucide-react";
import React from "react";

const PackageCard = ({
  item,
  selectedPackage,
  setPackage,
}: {
  item: PackageI;
  selectedPackage: PackageI;
  setPackage: any;
}) => {
  const isSelected = selectedPackage.id === item.id;

  return (
    <div
      onClick={() => setPackage(item)}
      className={`w-full p-3 mb-4 flex flex-row cursor-pointer  ${
        isSelected
          ? "bg-yellow-50 border-[1.5px] border-defaultColor"
          : "bg-slate-100"
      } rounded-md items-center justify-between`}
    >
      <h1 className="text-base font-semibold">{item.name}</h1>

      <div className="flex flex-row items-center ">
        <div className="flex flex-col items-end mr-2">
          <h1 className="text-base font-semibold">
            {item.country} {item.fiat.toLocaleString()}
          </h1>
          <p className="text-[11px]">cUSD {item.amount}</p>
        </div>

        <ChevronRight size={28} className="" />
      </div>
    </div>
  );
};

export default PackageCard;

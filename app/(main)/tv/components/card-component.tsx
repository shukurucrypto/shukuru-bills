import { BillI } from "@/types";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardComponent = ({
  bill,
  selectedBill,
  setBill,
}: {
  bill: BillI;
  selectedBill: BillI;
  setBill: any;
}) => {
  const isSelected = selectedBill.id === bill.id;

  return (
    <div
      onClick={() => setBill(bill)}
      className={`w-full h-16  cursor-pointer ${
        isSelected
          ? "bg-yellow-50 border-[1.5px] border-defaultColor"
          : " bg-white border"
      } rounded-md p-2 flex overflow-hidden flex-row items-center mb-4 `}
    >
      <div className="h-full w-12 bg-neutral-50 mr-3 rounded-md overflow-hidden  relative ">
        <Image src={bill.image} layout="fill" alt="bill" />
      </div>
      <div className="flex flex-col flex-1 ">
        <p className="text-sm font-semibold">{bill.name}</p>
        <p className="text-[11px] font-light">
          All {bill.packages?.length} packages
        </p>
      </div>

      {isSelected && (
        <div className="">
          <CheckCircleIcon className="size-4 text-defaultColor" />
        </div>
      )}
    </div>
  );
};

export default CardComponent;

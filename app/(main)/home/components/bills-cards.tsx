import { ArrowUpDown, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

const BillsCards = () => {
  return (
    <>
      <div className="flex w-full flex-row ">
        <div className="w-full h-32 border mb-3 bg-white rounded-md flex flex-col items-center p-3">
          <div className="flex flex-1 items-center"></div>
          <p className="text-xs font-semibold text-center">Airtime & Data</p>
        </div>

        <Link
          href="/tv"
          className="w-full h-32 border bg-white mx-3 rounded-md flex flex-col items-center p-3"
        >
          <div className="flex flex-1"></div>
          <p className="text-xs font-semibold text-center">TV</p>
        </Link>

        <div className="w-full h-32 border bg-white rounded-md flex flex-col items-center p-3">
          <div className="flex flex-1"></div>
          <p className="text-xs font-semibold text-center">Electricity</p>
        </div>
      </div>
      <div className="flex w-full flex-row ">
        <div className="w-full h-32 border bg-white rounded-md flex flex-col items-center p-3">
          <div className="flex flex-1"></div>
          <p className="text-xs font-semibold text-center">Water</p>
        </div>

        <div className="w-full h-32  mx-3 rounded-md flex flex-col items-center p-3"></div>
        <div className="w-full h-32   rounded-md flex flex-col items-center p-3"></div>
      </div>
    </>
  );
};

export default BillsCards;

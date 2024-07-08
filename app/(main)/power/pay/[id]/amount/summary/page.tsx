"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import { powerBills } from "@/data";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

const PowerBillSummary = () => {
  const { id } = useParams();

  const searchParams = useSearchParams();

  const bill = powerBills.find((bill) => bill.id === Number(id));

  const account = searchParams.get("acc");

  const amt = searchParams.get("amt");

  if (!bill || !account || !amt) return null;

  return (
    <SecondaryLayout header="Payment Summary" title="" route="" submit>
      <div className="w-full h-full border rounded-md p-4">
        <div className="w-full flex items-center justify-center">
          <div className="size-14 rounded-full bg-neutral-200 relative overflow-hidden">
            <Image src={bill.image} layout="fill" alt="bill-logo" />
          </div>
        </div>

        <div className="w-full flex flex-row items-center my-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">Biller</h1>
          <h1 className="text-base ">{bill.name} Prepaid</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">
            Account Name
          </h1>
          <h1 className="text-base ">NANSUBUGA PROSSIE</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">
            Meter Number
          </h1>
          <h1 className="text-base ">{account}</h1>
        </div>

        <div className="w-full h-[1px] bg-neutral-200 my-5" />

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">Charge</h1>
          <h1 className="text-base ">UGX {amt}</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">Balance</h1>
          <h1 className="text-base ">UGX 15,000</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">
            Charges Balance
          </h1>
          <h1 className="text-base ">UGX 1</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-500 font-semibold">
            Total Payments With Charges
          </h1>
          <h1 className="text-base text-defaultColor font-bold ">UGX 10,001</h1>
        </div>
      </div>
    </SecondaryLayout>
  );
};

export default PowerBillSummary;

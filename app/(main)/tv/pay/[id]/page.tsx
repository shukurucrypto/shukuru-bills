"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import { Input } from "@/components/ui/input";
import { tvBills } from "@/data";
import Image from "next/image";
import { useParams } from "next/navigation";

const PayTvPage = () => {
  const { id } = useParams();

  const bill = tvBills.find((bill) => bill.id === Number(id));

  if (!bill) return null;

  return (
    <SecondaryLayout
      title={`Enter your ${bill.name} smart card number`}
      route={`/tv/pay/${id}/packages`}
    >
      <div className="flex w-full items-center">
        <div className="h-14 w-16 rounded-md mr-3 p-3 bg-neutral-200 relative overflow-hidden">
          <Image src={bill.image} layout="fill" alt="bill-logo" />
        </div>
        <Input
          placeholder="Card Number"
          autoFocus
          className="text-lg border-2 h-14 rounded-md px-4 w-full outline-none "
          type="number"
        />
      </div>
    </SecondaryLayout>
  );
};

export default PayTvPage;

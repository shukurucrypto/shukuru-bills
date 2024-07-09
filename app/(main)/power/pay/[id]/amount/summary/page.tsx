"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import { powerBills } from "@/data";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";

const PowerBillSummary = () => {
  const { id } = useParams();

  const searchParams = useSearchParams();

  const router = useRouter();

  const bill = powerBills.find((bill) => bill.id === Number(id));

  // http://localhost:3000/power/pay/1/amount/summary?acc=14352987862&amt=2000

  const account = searchParams.get("acc");

  const outstanding = searchParams.get("outstanding");

  const meter = searchParams.get("meter");

  const amt = searchParams.get("amt");

  if (!bill || !account || !amt || !meter || !outstanding) {
    router.back();
    return;
  }

  const createUrlString = () => {
    const data = {
      phone: "0787.....",
      account: "0424...",
      amount: "1000",
      easypayId: "5345351",
      units: "1.2",
      transferCode: "0424xxx-UMEME834561",
      energyToken: "6642 1234 4567 1234 1247",
      type: "PREPAID",
      reference: "Your order ref",
      date: "2018-10-27 13:10:28",
    };

    // Serialize the data object to a query string
    const queryString = qs.stringify(data);

    // Use the query string in the route prop
    return `/confirmed?${queryString}`;
  };

  return (
    <SecondaryLayout
      header="Summary"
      title=""
      // route={`/confirmed/${bill.id}`}
      route={createUrlString()}
      noWalletBalances
    >
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
          <h1 className="text-base ">{meter}</h1>
        </div>

        <div className="w-full h-[1px] bg-neutral-200 my-5" />

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">Amount</h1>
          <h1 className="text-base ">UGX {amt}</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">
            Outstanding Balance
          </h1>
          <h1 className="text-base ">UGX {outstanding}</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-400 font-semibold">Charges</h1>
          <h1 className="text-base ">UGX 1</h1>
        </div>

        <div className="w-full flex flex-row items-center mb-2 justify-between">
          <h1 className="text-base text-neutral-500 font-semibold">
            Total Payments With Charges
          </h1>
          <h1 className="text-base text-defaultColor font-bold ">
            UGX {Number(amt) + 1}{" "}
          </h1>
        </div>
      </div>
    </SecondaryLayout>
  );
};

export default PowerBillSummary;

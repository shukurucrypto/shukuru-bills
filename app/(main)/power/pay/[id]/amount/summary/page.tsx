"use client";

import { upsertPayBill } from "@/app/actions";
import SecondaryLayout from "@/app/components/secondary-layout";
import { useBillMutation } from "@/app/hooks/mutations/useBillMutation";
import { powerAccount, powerBills } from "@/data";
import { PayBillI } from "@/types";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { toast } from "sonner";

const PowerBillSummary = () => {
  const { id } = useParams();

  const searchParams = useSearchParams();

  const router = useRouter();

  const bill = powerBills.find((bill) => bill.id === Number(id));

  const mutation = useBillMutation(upsertPayBill);
  // http://localhost:3000/power/pay/1/amount/summary?acc=14352987862&amt=2000

  const account = searchParams.get("acc");

  const outstanding = searchParams.get("outstanding");

  const meter = searchParams.get("meter");

  const amt = searchParams.get("amt");

  const handleSubmit = () => {
    const billData: PayBillI = {
      account: meter!,
      action: "paybill",
      amount: amt!,
      phone: powerAccount.phone,
      provider: "umeme",
    };

    mutation.mutate(billData);
  };

  if (!bill || !account || !amt || !meter || !outstanding) {
    router.back();
    return;
  }

  if (mutation.isSuccess && mutation.data && mutation.data.success === 1) {
    // Serialize the data object to a query string
    const queryString = qs.stringify(mutation.data.details);

    // Use the query string in the route prop
    const routerString = `/confirmed?${queryString}`;

    router.push(routerString);
  }

  if (mutation.isSuccess && mutation.data && mutation.data.success === 0) {
    toast("Failed to fetch bill information");
  }

  return (
    <SecondaryLayout
      header="Summary"
      title=""
      route={`/confirmed/${bill.id}`}
      submit
      submitText="Next"
      loading={mutation.isPending}
      onSubmit={handleSubmit}
      isError={mutation.isError && mutation.error.message}
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

"use client";

import PriceCard from "@/app/(main)/power/components/price-card";
import { upsertGetBillingInfo } from "@/app/actions";
import SecondaryLayout from "@/app/components/secondary-layout";
import { useBillMutation } from "@/app/hooks/mutations/useBillMutation";
import { Input } from "@/components/ui/input";
import { pricing } from "@/data";
import { BillInfoI, PriceI } from "@/types";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const EnterAmountPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<PriceI>(pricing[0]);

  const searchParams = useSearchParams();

  const mutation = useBillMutation(upsertGetBillingInfo);

  const { id } = useParams();

  const account = searchParams.get("acc");

  const router = useRouter();

  const handleSubmit = () => {
    if (!account) {
      toast("Please enter your account number");
      return;
    }

    const billData: BillInfoI = {
      provider: "umeme",
      account: account!,
      action: "paybilladvice",
      amount: selectedAmount.amount.toString(),
    };

    mutation.mutate(billData);
  };

  if (!account)
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-lg font-medium">Please enter your account number</p>
      </div>
    );

  if (mutation.isSuccess && mutation.data && mutation.data.success === 1) {
    const { CustomerId, CustomerName, outstanding } = mutation.data.data;

    router.push(
      `/power/pay/${id}/amount/summary?acc=${CustomerName}&amt=${selectedAmount.amount}&outstanding=${outstanding}&meter=${account}&customer=${CustomerId}`
    );
  }

  if (mutation.isSuccess && mutation.data && mutation.data.success === 0) {
    toast("Failed to fetch bill information");
  }

  return (
    <SecondaryLayout
      header="Power Bills"
      title="Enter your amount to pay"
      route={`/power/pay/${id}/amount/summary?acc=${account}&amt=${selectedAmount.amount}`}
      submit
      submitText="Next"
      loading={mutation.isPending}
      onSubmit={handleSubmit}
      isError={mutation.isError && mutation.error.message}
    >
      <div className="flex w-full items-center mb-5">
        <Input
          placeholder="Amount to pay"
          autoFocus
          className="text-lg border-2 h-14 rounded-md px-4 w-full outline-none "
          type="number"
          value={selectedAmount.amount}
          // @ts-ignore
          onChange={(e) => setSelectedAmount(e.target.value)}
        />
      </div>

      <div className="flex flex-row items-center w-full flex-wrap  gap-4 justify-between">
        {pricing.map((price) => (
          <PriceCard
            key={price.id}
            item={price}
            selectedAmount={selectedAmount}
            setAmount={setSelectedAmount}
          />
        ))}
      </div>

      <div className="w-full flex-col items-center justify-between py-5 my-4 border rounded-lg px-4 bg-slate-50 shadow-sm">
        <div className="flex w-full flex-row items-center justify-between">
          <p className="text-base">Account Number</p>
          <p className="text-base font-medium">{account}</p>
        </div>
      </div>
    </SecondaryLayout>
  );
};

export default EnterAmountPage;

"use client";

import SecondaryLayout from "@/app/components/secondary-layout";
import { Input } from "@/components/ui/input";
import { powerAccount, powerBills } from "@/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import AccountCard from "../../components/account-card";

const EnterAccountPage = () => {
  const { id } = useParams();
  const [accountNumber, setAccountNumber] = useState("");

  const bill = powerBills.find((bill) => bill.id === Number(id));

  if (!bill) return null;

  return (
    <SecondaryLayout
      header="Power Bills"
      title={`Enter your ${bill.name} smart card number`}
      route={`/power/pay/${id}/amount?acc=${
        accountNumber ? accountNumber : powerAccount.accountNo
      }`}
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
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>

      <div className="w-full flex items-center justify-center my-6 gap-x-4">
        <div className="w-full h-[2px] bg-neutral-200"></div>
        <h1 className="text-base font-semibold text-neutral-400">Or</h1>
        <div className="w-full h-[2px] bg-neutral-200"></div>
      </div>

      <AccountCard
        account={powerAccount}
        selected={accountNumber}
        setAccount={setAccountNumber}
      />
    </SecondaryLayout>
  );
};

export default EnterAccountPage;

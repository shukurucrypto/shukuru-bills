import { AccountI } from "@/types";
import React from "react";

const AccountCard = ({
  account,
  selected,
  setAccount,
}: {
  account: AccountI;
  selected: string;
  setAccount: any;
}) => {
  const isSelected = selected === account.accountNo;

  return (
    <div
      onClick={() => setAccount(account.accountNo)}
      className={`w-full  border ${
        isSelected && "border-2 bg-yellow-50 border-defaultColor"
      } rounded-md p-2 relative cursor-pointer`}
    >
      <div className="w-full my-2 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-neutral-400">A/C Name:</h1>
        <h1 className="text-sm font-medium">{account.name}</h1>
      </div>

      <div className="w-full mb-2 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-neutral-400">A/C No:</h1>
        <h1 className="text-sm font-medium">{account.accountNo}</h1>
      </div>

      <div className="w-full mb-2 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-neutral-400">Phone:</h1>
        <h1 className="text-sm font-medium">{account.phone}</h1>
      </div>

      <div className="w-full my-2 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-neutral-400">Address:</h1>
        <h1 className="text-sm font-medium">{account.address}</h1>
      </div>
    </div>
  );
};

export default AccountCard;

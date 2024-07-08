import { PriceI } from "@/types";
import React from "react";

const PriceCard = ({
  item,
  selectedAmount,
  setAmount,
}: {
  item: PriceI;
  selectedAmount: PriceI;
  setAmount: any;
}) => {
  const isSelected = selectedAmount.id === item.id;

  return (
    <div
      onClick={() => setAmount(item)}
      className={`size-28 flex ${
        isSelected && "border-2 border-defaultColor bg-yellow-100 text-black"
      } items-center cursor-pointer flex-col mb-2 justify-center border shadow-md p-2 rounded-xl`}
    >
      <h1 className="text-xl font-bold">{item.amount.toLocaleString()}</h1>
      <h1 className="font-semibold text-neutral-400">{item.country}</h1>
    </div>
  );
};

export default PriceCard;

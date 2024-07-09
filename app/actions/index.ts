"use server";

import { BILL_API_URL } from "@/data";
import { BillInfoI } from "@/types";

export const upsertGetBillingInfo = async (data: BillInfoI) => {
  const requestData: BillInfoI = {
    username: process.env.EASYPAY_CLIENT!,
    password: process.env.EASYPAY_SECRET!,
    ...data,
  };

  const response = await fetch(BILL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch billing info");
  }

  return response.json();
};

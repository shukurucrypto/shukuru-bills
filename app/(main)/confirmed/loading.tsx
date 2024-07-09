import { Loader } from "lucide-react";
import React from "react";

const PaymentConfirmedLoading = () => {
  return (
    <div className="flex flex-col flex-1 h-screen items-center justify-center">
      <Loader size={35} className="animate-spin" />
    </div>
  );
};

export default PaymentConfirmedLoading;

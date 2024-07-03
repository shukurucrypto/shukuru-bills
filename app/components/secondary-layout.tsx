"use client";

import SecondaryHeader from "@/app/components/secondary-header";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

const SecondaryLayout = ({
  children,
  route,
  title,
}: {
  children: ReactNode;
  route: string;
  title: string;
}) => {
  const [showBalance, setShowBalance] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col bg-white">
      <SecondaryHeader title="TV Bills" />
      <div className="px-5 flex flex-1 flex-col flex-grow pt-24 pb-36">
        <h1 className="text-md font-bold mb-5">{title}</h1>

        {children}
      </div>

      <div className="w-full p-4 fixed bottom-0 z-20 right-0 left-0  bg-neutral-50 h-36 items-center justify-between">
        <div className="flex flex-grow w-full flex-col pb-5">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-base text-neutral-500">Total payment:</h1>
            <h1 className="text-lg font-bold text-orange-500">UGX 45,000</h1>
          </div>
          <div className="flex w-full items-center justify-between">
            <h1 className="text-base text-slate-600">My Balance:</h1>
            {!showBalance ? (
              <div
                onClick={() => setShowBalance(!showBalance)}
                className="flex flex-row items-center gap-x-2"
              >
                <Eye size={20} className="cursor-pointer text-green-500" />
                <h1 className="text-base font-bold text-green-500">
                  Show balance
                </h1>
              </div>
            ) : (
              <div
                onClick={() => setShowBalance(!showBalance)}
                className="flex flex-row items-center gap-x-2"
              >
                <EyeOff size={20} className="cursor-pointer text-green-500" />
                <h1 className="text-base font-bold text-green-500">
                  UGX 104,000
                </h1>
              </div>
            )}
          </div>
        </div>

        <div className="flex h-full w-full">
          <Button
            onClick={() => router.push(route)}
            className="w-full uppercase h-12 text-base font-bold rounded-full bg-defaultColor text-black hover:text-white"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondaryLayout;

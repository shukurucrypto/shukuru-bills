import { useAccountBalance } from "@/app/hooks/useAccountBalance";
import useConnectWallet from "@/app/hooks/useConnectWallet";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Wallet } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const BalancesCard = () => {
  const { balance, isLoading, isError, address } = useAccountBalance();

  const { connectMyWallet, isConnected } = useConnectWallet();

  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="w-full h-52 shadow-sm my-5 bg-white border overflow-hidden rounded-md flex flex-col">
      <div className="w-full h-full p-2 bg-defaultColor flex flex-col justify-evenly ">
        <p className="text-xs font-medium">My wallet</p>

        <div className="flex flex-row items-center">
          {showBalance ? (
            <>
              <h1 className="text-xl font-bold">
                UGX {balance && balance.toLocaleString()}
              </h1>
              <div onClick={() => setShowBalance(!showBalance)} className="">
                <Eye className="ml-2" size={15} />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold">*****</h1>
              <div onClick={() => setShowBalance(!showBalance)} className="">
                <EyeOff className="ml-2" size={15} />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center w-full h-full  justify-evenly ">
        <div className="flex flex-col items-center">
          <div className="size-8 relative">
            <Image src="/cusd.png" layout="fill" alt="token" />
          </div>
          {showBalance ? (
            <p className="text-[10px] mt-1">
              UGX {balance && balance.toLocaleString()}
            </p>
          ) : (
            <p className="text-[10px] mt-1">****</p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="size-8 relative">
            <Image src="/usdc.png" layout="fill" alt="token" />
          </div>
          {showBalance ? (
            <p className="text-[10px] mt-1">UGX 0,0</p>
          ) : (
            <p className="text-[10px] mt-1">****</p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="size-8 relative">
            <Image src="/usdt.png" layout="fill" alt="token" />
          </div>
          {showBalance ? (
            <p className="text-[10px] mt-1">UGX 0,0</p>
          ) : (
            <p className="text-[10px] mt-1">****</p>
          )}
        </div>
      </div>

      <Button className="rounded-b-md p-3 rounded-t-none bg-green-600 font-semibold flex flex-row items-center">
        <Wallet className="mr-2" size={15} />
        Deposit Money
      </Button>
    </div>
  );
};

export default BalancesCard;

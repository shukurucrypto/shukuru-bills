import { useEffect, useState } from "react";
import { useReadContract, useAccount } from "wagmi";
import { CUSD_ABI, CUSD_ADDRESS, USD_EXCHANGE_RATE } from "@/data";

export const useAccountBalance = () => {
  const { address } = useAccount();
  const [balance, setBalance] = useState<number | null>(0.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    data: balanceData,
    isError: contractError,
    isLoading: contractLoading,
  } = useReadContract({
    abi: CUSD_ABI,
    address: CUSD_ADDRESS,
    functionName: "balanceOf",
    // @ts-ignore
    args: [address],
  });

  useEffect(() => {
    if (contractLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      if (contractError) {
        setIsError(true);
      } else {
        if (balanceData) {
          const rawBalance = balanceData.toString();
          const formattedBalanceUSD = parseFloat(rawBalance) / 1e18; // Convert Wei to Ether (cUSD)
          const exchangeRate = USD_EXCHANGE_RATE; // 1 USD to UGX
          const formattedBalanceUGX = (
            formattedBalanceUSD * exchangeRate
          ).toFixed(); // Convert USD to UGX and format
          setBalance(Number(formattedBalanceUGX));
        } else {
          setBalance(null);
        }
        setIsError(false);
      }
    }
  }, [balanceData, contractError, contractLoading]);

  return { balance, isLoading, isError, address };
};

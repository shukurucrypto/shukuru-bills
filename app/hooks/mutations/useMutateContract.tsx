import { CUSD_ABI, CUSD_ADDRESS } from "@/data";
import { useWriteContract } from "wagmi";

const useMutateContract = ({
  functionName,
  args,
}: {
  functionName: string;
  args: any;
}) => {
  const mutation = useWriteContract();

  const request = async () => {
    mutation.writeContract({
      abi: CUSD_ABI,
      address: CUSD_ADDRESS,
      functionName: functionName,
      args: args,
    });
  };

  return {
    request,
    mutation,
  };
};

export default useMutateContract;

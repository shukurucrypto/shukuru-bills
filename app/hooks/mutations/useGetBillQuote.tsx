import { BillInfoI } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetBillQuote = (mutationFunction: any) => {
  const queryClient = useQueryClient(); // Access the query client instance

  const createMutation = useMutation({
    mutationFn: async (data: BillInfoI) => {
      const response = await mutationFunction(data);
      return response;
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast("Action failed");
    },
    onSuccess: () => {
      toast("Action successful");
    },
  });
  return createMutation;
};

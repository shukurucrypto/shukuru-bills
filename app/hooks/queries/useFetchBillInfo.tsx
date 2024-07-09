import { useQuery } from "@tanstack/react-query";

const useFetchBillInfo = (queryName: string, fetchFunction: any) => {
  const response = useQuery({
    queryKey: [queryName],
    queryFn: async () => fetchFunction,
  });

  return {
    ...response,
  };
};

export default useFetchBillInfo;

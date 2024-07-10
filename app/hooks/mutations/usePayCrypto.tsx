import { upsertPayBill } from "@/app/actions";
import { SHUKURU_ADMIN_ADDRESS, USD_EXCHANGE_RATE } from "@/data";
import { PayBillI } from "@/types";
import { newKitFromWeb3 } from "@celo/contractkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Web3 from "web3";

const usePayCrypto = () => {
  const queryClient = useQueryClient(); // Access the query client instance

  const handleSubmit = async (billData: PayBillI) => {
    // Convert the price back to USD
    const rate = USD_EXCHANGE_RATE;
    const price = Number(billData.amount) / rate;

    // Get the connected provider and signer
    const web3 = new Web3(window.ethereum);
    const kit = newKitFromWeb3(web3);

    let accounts = await web3.eth.getAccounts();

    // @ts-ignore
    kit.defaultAccount = accounts[0];

    const cUSDcontract = await kit.contracts.getStableToken();
    const amount = kit.web3.utils.toWei(price.toString());

    // First send the cUSD to the contract
    const txResponse = await cUSDcontract
      .transfer(SHUKURU_ADMIN_ADDRESS, amount)
      .send({
        from: kit.defaultAccount,
        feeCurrency: cUSDcontract.address,
      });

    // Wait for the transaction to be processed if was successful then proceed to make the order
    const recipt = await txResponse.waitReceipt();

    // Check to see if the transaction was successful

    // Send the order to the contract
    if (!recipt.status) {
      throw new Error("Transaction failed");
    }

    // Make the momo payment here...
    const result = await upsertPayBill(billData);

    return result;
  };

  const payMutation = useMutation({
    mutationFn: async ({ billData }: { billData: PayBillI }) =>
      handleSubmit(billData),
    onSettled: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast("Transaction failed");
    },
    onSuccess: () => {
      toast("Successfully paid 🎉");
    },
  });

  return payMutation;
};

export default usePayCrypto;

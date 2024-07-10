import React, { ReactNode } from "react";
import ReactQueryProvider from "../context/reactquery-provider";
import { Toaster } from "sonner";
import WagmiContextProvider from "@/providers/wagmi-context-provider";
import WalletConnectLayout from "../components/walletconnect-layout";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiContextProvider>
      <ReactQueryProvider>
        <WalletConnectLayout>
          <div className="flex flex-1 flex-grow bg-slate-50 flex-col min-h-screen">
            {children}

            <Toaster />
          </div>
        </WalletConnectLayout>
      </ReactQueryProvider>
    </WagmiContextProvider>
  );
};

export default MainLayout;

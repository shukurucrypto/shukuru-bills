"use client";

import { ReactNode, useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

const WalletConnectLayout = ({ children }: { children: ReactNode }) => {
  const { isConnected, isDisconnected } = useAccount();
  const { connect } = useConnect();

  useEffect(() => {
    if (window.ethereum && !isConnected) {
      connectMyWallet();
    }
  }, [isConnected]);

  const connectMyWallet = async () => {
    connect({ connector: injected() });
  };

  return <>{children}</>;
};

export default WalletConnectLayout;

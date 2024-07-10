"use client";

import React, { ReactNode, useEffect } from "react";
import useConnectWallet from "../hooks/useConnectWallet";
import { injected } from "wagmi/connectors";

const WalletConnectLayout = ({ children }: { children: ReactNode }) => {
  const { isConnected, connect } = useConnectWallet();

  useEffect(() => {
    if (!isConnected) {
      connect({
        connector: injected({ target: "metaMask" }),
      });
    }
  }, [isConnected, connect]);

  return <>{children}</>;
};

export default WalletConnectLayout;

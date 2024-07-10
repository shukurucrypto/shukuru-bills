import React, { useEffect, useState } from "react";
import { useConnect, useAccount } from "wagmi";
import { injected } from "wagmi/connectors";

const useConnectWallet = () => {
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect();
  const { isConnected, isDisconnected } = useAccount();

  useEffect(() => {
    if (window.ethereum && !isConnected) {
      connectMyWallet();
      setHideConnectBtn(true);
    }
  }, [isConnected, isDisconnected]);

  const connectMyWallet = async () => {
    connect({ connector: injected() });
  };

  return { hideConnectBtn, isConnected, connect, connectMyWallet };
};

export default useConnectWallet;

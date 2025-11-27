import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { checkWalletConnected } from "../wallet_utils";

export function AppProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    const fetchWallet = async () => {
      const addressResult = await checkWalletConnected();

      if (addressResult) {
        setAddress(addressResult);
      }
    };
    fetchWallet();
  }, []);

  return (
    <AppContext.Provider value={{ address, setAddress, chainId, setChainId }}>
      {children}
    </AppContext.Provider>
  );
}

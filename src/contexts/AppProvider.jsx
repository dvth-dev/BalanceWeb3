import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { checkWalletConnected } from "../wallet_utils";
import { useBalance } from "../hooks/UseBalance";

export function AppProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    console.log("getttttt");

    const fetchWallet = async () => {
      const addressResult = await checkWalletConnected();

      if (addressResult) {
        setAddress(addressResult);
      }
    };

    fetchWallet();
  }, []);
  const { balance, isLoading } = useBalance(address);

  return (
    <AppContext.Provider
      value={{ address, setAddress, chainId, setChainId, balance, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
}

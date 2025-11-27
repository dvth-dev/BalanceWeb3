import { useEffect, useState } from "react";

export function useBalance(account) {
  const [balance, setBalance] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      !account ||
      typeof account !== "string" ||
      account.length !== 42 ||
      !account.startsWith("0x")
    ) {
      setBalance(null);
      setIsLoading(false);
      return;
    }

    const fetchBalance = async () => {
      setIsLoading(true);

      try {
        const balanceWei = await window.ethereum.request({
          method: "eth_getBalance",
          params: [account, "latest"],
        });

        const balanceInEth = parseInt(balanceWei, 16) / 1e18;
        console.log("🚀 - fetchBalance - balanceInEth:", balanceInEth);
        setBalance(balanceInEth);
      } catch (error) {
        console.log("🚀 - fetchBalance - error:", error);
        setBalance(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBalance();
  }, [account]);

  return { balance, isLoading };
}

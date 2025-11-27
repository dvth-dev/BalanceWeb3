export async function ConnectWallet() {
  if (!window.ethereum) throw console.error("Metamask not installed");

  try {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const addressWallet = account[0];
    const chainWallet = await window.ethereum.request({
      method: "eth_chainId",
    });

    return { addressWallet, chainWallet };
  } catch (error) {
    console.log("🚀 - connectWallet - error:", error);
  }
}
export async function checkWalletConnected() {
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  console.log("🚀 - checkWalletConnected - accounts:", accounts);

  return accounts.length > 0 ? accounts[0] : null;
}

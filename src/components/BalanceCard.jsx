import user from "@assets/user.png";
import { ConnectWallet } from "../wallet_utils";
import { useAppContext } from "../contexts/AppContext";
import { formatAddress } from "../utils.js";
const BalanceCard = () => {
  const { address, setAddress, balance, isLoading } = useAppContext();

  const handleConnectWallet = async () => {
    if (address) {
      setAddress(null);
    } else {
      const result = await ConnectWallet();

      const { addressWallet } = result;

      setAddress(addressWallet);
    }
  };

  if (isLoading) {
    return (
      <div className="flex bg-card rounded-full border border-card-border">
        <p className="text-lg font-medium p-3 cursor-pointer">Loading...</p>
      </div>
    );
  }

  if (!address) {
    return (
      <div
        className="flex bg-card rounded-full border border-card-border"
        onClick={handleConnectWallet}
      >
        <p className="text-lg font-medium p-3 cursor-pointer">Connect Wallet</p>
      </div>
    );
  }

  return (
    <div
      className="flex bg-card rounded-full border border-card-border"
      onClick={handleConnectWallet}
    >
      <div className="p-3 border-r border-card-border text-lg">
        {balance} ETH
      </div>

      <div className="flex p-3 gap-3">
        <p className="text-lg font-medium">{formatAddress(address)}</p>
        <img src={user} alt="User Logo" className="mr-3 w-7 h-7" />
      </div>
    </div>
  );
};

export default BalanceCard;

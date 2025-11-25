import React from "react";
import user from "@assets/user.png";

const BalanceCard = () => {
  return (
    <div className="flex bg-card rounded-full border border-card-border">
      <div className="p-3 border-r border-card-border text-lg">1.25 ETH</div>

      <div className="flex p-3 gap-3">
        <p className="text-lg font-medium">0x123...abcd</p>
        <img src={user} alt="User Logo" className="mr-3 w-7 h-7" />
      </div>
    </div>
  );
};

export default BalanceCard;

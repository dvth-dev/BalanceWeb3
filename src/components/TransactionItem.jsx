import React from "react";
import { formatTransactionDate } from "../utils";
const TransactionItem = ({ hash, amount, token, date, status }) => {
  const isProfit = amount >= 0;
  const dateDisplay = formatTransactionDate(date);

  const statusMap = {
    success: "tx-success",
    failed: "tx-failed",
    pending: "tx-pending",
  };

  console.log(statusMap[status]);

  return (
    <tr key={hash} className="data-row">
      <td className="text-text">
        <div>{hash}</div>
      </td>
      <td className={`${isProfit ? "text-success" : "text-failed"}`}>
        {amount} {token}
      </td>
      <td>{dateDisplay}</td>
      <td>
        <div className={`${statusMap[status]}`}>{status}</div>
      </td>
    </tr>
  );
};

export default TransactionItem;

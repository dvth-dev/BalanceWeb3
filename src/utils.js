export function formatTransactionDate(dateStr) {
  if (!dateStr) return "N/A";

  try {
    const date = new Date(dateStr);

    const formatted = date.toLocaleString("en-US", {
      month: "short", // Oct
      day: "2-digit", // 26
      year: "numeric", // 2023
      hour: "2-digit", // 10
      minute: "2-digit", // 45
      hour12: true, // PM/AM
    });

    return formatted;
  } catch (error) {
    console.error(`Error fun [formatTransactionDate]: ${error}`);
    return "N/A";
  }
}

export const NAV_ITEMS = ["Create", "Share", "Pay", "Status"] as const;

export const HERO_METRICS = [
  { label: "Bill", value: "250", suffix: "USDC" },
  { label: "Paid", value: "2/4" },
  { label: "Hidden", value: "100%" },
] as const;

export const SPLIT_MEMBERS = [
  { name: "Vijay", state: "Paid" },
  { name: "Rahul", state: "Paid" },
  { name: "Anika", state: "Pending" },
  { name: "Mira", state: "Pending" },
] as const;

export const SPLIT_FIELDS = [
  { label: "Split link", value: "/split/abc123" },
  { label: "Your share", value: "62.50 USDC" },
] as const;

export const SPLIT_STATS = [
  { label: "Total", value: "250 USDC" },
  { label: "Remaining", value: "2 friends" },
] as const;

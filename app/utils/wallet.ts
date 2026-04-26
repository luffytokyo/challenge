import { PublicKey } from "@solana/web3.js";

export function truncateAddress(address: string) {
  try {
    const key = new PublicKey(address);
    const base58 = key.toBase58();
    return `${base58.slice(0, 4)}...${base58.slice(-4)}`;
  } catch {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }
}

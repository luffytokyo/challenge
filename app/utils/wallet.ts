import { PublicKey } from "@solana/web3.js";

export type WalletState = "idle" | "connecting" | "connected" | "missing" | "error";

export type SolanaProvider = {
  isPhantom?: boolean;
  publicKey?: { toBase58: () => string };
  connect: () => Promise<{ publicKey: { toBase58: () => string } }>;
  disconnect?: () => Promise<void>;
};

declare global {
  interface Window {
    solana?: SolanaProvider;
  }
}

export function truncateAddress(address: string) {
  try {
    const key = new PublicKey(address);
    const base58 = key.toBase58();
    return `${base58.slice(0, 4)}...${base58.slice(-4)}`;
  } catch {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }
}

export function assertSolanaPublicKey(address: string) {
  return new PublicKey(address).toBase58();
}

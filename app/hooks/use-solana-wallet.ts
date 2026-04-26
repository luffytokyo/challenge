"use client";

import { useMemo, useState } from "react";

import {
  assertSolanaPublicKey,
  truncateAddress,
  type WalletState,
} from "../utils/wallet";

export function useSolanaWallet() {
  const [walletState, setWalletState] = useState<WalletState>("idle");
  const [address, setAddress] = useState("");
  const [walletMessage, setWalletMessage] = useState("");

  const connectedLabel = useMemo(
    () => (address ? truncateAddress(address) : "Wallet connected"),
    [address],
  );

  const connectWallet = async () => {
    if (walletState === "connected") {
      await window.solana?.disconnect?.();
      setWalletState("idle");
      setAddress("");
      setWalletMessage("");
      return;
    }

    const provider = window.solana;
    if (!provider) {
      setWalletState("missing");
      setWalletMessage("Install a Solana wallet to connect.");
      return;
    }

    try {
      setWalletState("connecting");
      setWalletMessage("");
      const response = await provider.connect();
      const publicKey = assertSolanaPublicKey(response.publicKey.toBase58());
      setAddress(publicKey);
      setWalletState("connected");
    } catch {
      setWalletState("error");
      setWalletMessage("Connection cancelled.");
    }
  };

  return {
    connectedLabel,
    connectWallet,
    walletMessage,
    walletState,
  };
}

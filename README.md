# SplitSafe

SplitSafe is a private bill-splitting app built on Solana with Loyal's Private Transactions SDK. It lets a creator make a fixed-share USDC split, share a payment link, and collect payments without exposing every payer's transfer details in a public group flow.

## What It Does

- Create a private split with a title, total amount, and number of people.
- Generate a shareable `/split/[splitId]` payment link.
- Let the receiver prepare a Loyal private deposit before sharing the split.
- Let payers connect a Solana wallet and pay their fixed share privately.
- Track paid wallets and split completion status in a dashboard.
- Prevent duplicate payments from the same wallet.

## Private Payment Flow

SplitSafe uses Loyal's private transaction lifecycle for each payment:

1. The receiver connects the receiver wallet and prepares a private receiving deposit.
2. A payer opens the shared split link and connects a wallet.
3. The app initializes the payer deposit if needed.
4. The payer's USDC share is shielded into the private layer.
5. The payer deposit is delegated to MagicBlock PER.
6. Loyal's `transferDeposit` sends the fixed share privately to the receiver deposit.
7. SplitSafe updates the split's paid status only after the private transfer succeeds.

## Tech Stack

- Next.js App Router
- React
- Bun
- Tailwind CSS
- Solana wallet adapter
- Loyal Private Transactions SDK
- MagicBlock PER
- Neon Postgres for split storage

## Main Routes

- `/` - product landing page
- `/create` - create a new private split
- `/split/[splitId]` - shared payment page
- `/success/[splitId]` - private payment confirmation
- `/dashboard` - creator dashboard for split status and share links

## Environment

Create `.env` with:

```bash
DB_URL=postgresql://...
NEXT_PUBLIC_SOLANA_RPC_URL=https://devnet.helius-rpc.com/?api-key=...
NEXT_PUBLIC_LOYAL_EPHEMERAL_RPC=https://tee.magicblock.app
NEXT_PUBLIC_LOYAL_EPHEMERAL_WS=wss://tee.magicblock.app
NEXT_PUBLIC_LOYAL_TOKEN_MINT=4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU
NEXT_PUBLIC_LOYAL_TOKEN_DECIMALS=6
```

The default token configuration is devnet USDC.

## Run Locally

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Verify

```bash
bun run lint
bun run build
```

## Product Goal

Group payments should be easy to share, easy to verify, and less awkward in public. SplitSafe keeps the social part visible, like who has paid, while moving the sensitive payment transfer through Loyal's private transaction flow.

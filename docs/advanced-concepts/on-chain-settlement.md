# ⛓️ On-Chain Settlement

Foresure leverages the **Base Network** (an Optimistic Rollup on Ethereum) for final settlement.

## L2 to L1 Finality

1.  **Transaction Execution**: Trades on Foresure are executed instantly on the Base sequencer (sub-second).
2.  **Batching**: Base batches these transactions and posts them to Ethereum L1 (approx every few minutes).
3.  **Finalization**: Once the data is on L1, it inherits Ethereum's security.

## Why this matters?
*   **Censorship Resistance**: Even if the Foresure UI goes down, you can interact directly with the smart contracts on Base.
*   **Exit Guarantees**: You can always withdraw your funds back to Ethereum L1 via the bridge, ensuring your assets are never "stuck" in the L2.

## Atomic Settlement
All trades are atomic.
*   Either the swap happens **completely**, or it **fails completely**.
*   There is no "partial execution" where you lose funds without getting tokens.

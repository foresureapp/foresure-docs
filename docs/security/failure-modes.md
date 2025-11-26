# ⚠️ Failure Modes

We have designed the system to be resilient, but we also plan for the worst.

## Oracle Failure
**Scenario**: The Optimistic Oracle stops responding or is censored.
*   **Mitigation**: The DAO can vote to replace the Oracle contract address in the `MarketFactory`.
*   **Fallback**: If no oracle data is received for 14 days, markets default to `INVALID` (refund).

## L2 Sequencer Downtime
**Scenario**: Base Network stops producing blocks.
*   **Impact**: Trading halts. Funds are safe on L2 state.
*   **Resolution**: Wait for Base to resume. If Base is permanently down (highly unlikely), users can force-withdraw from L1 using the Optimism stack's escape hatch (after 7 days).

## Frontend Censorship
**Scenario**: The `foresure.market` domain is seized.
*   **Mitigation**: The frontend is open-source and can be hosted on IPFS/Arweave.
*   **Direct Access**: Users can interact directly with smart contracts via Etherscan or CLI.

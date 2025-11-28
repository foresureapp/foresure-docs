# <span class="sidebar-icon" style="--icon: url('/icons/shield-check.svg')"></span> Security Model


*This documentation is in editing mode. The content here is not finalized.*

Security is paramount for a financial protocol. Foresure employs multiple layers of defense.

## Smart Contract Security
*   **Audits**: Contracts are audited by top-tier firms (Trail of Bits, OpenZeppelin).
*   **Immutable Core**: The core AMM logic is immutable.
*   **Pausability**: An emergency "Circuit Breaker" allows the DAO to pause trading in the event of a critical bug.

## Economic Security (Slashing)
Bad actors are punished economically.

*   **Oracle Disputes**: If a proposer submits a false outcome and is successfully disputed, their bond is **slashed**.
    *   50% goes to the disputer (reward for policing).
    *   50% is burned or sent to the treasury.
*   **Juror Slashing**: Jurors who vote against the majority (consensus) in a dispute may lose a portion of their staked tokens.

## MEV Resistance
Front-running is a risk on public blockchains.
*   **Slippage Tolerance**: Users define max slippage.
*   **Batch Auctions**: (Future Roadmap) Grouping orders in blocks to prevent ordering manipulation.
*   **L2 Finality**: Base's fast block times (2s) make sandwich attacks harder compared to L1.

::: danger Critical
Never share your private keys. Foresure team will NEVER ask for your seed phrase.
:::

# 🤹 Multi-Outcome Model

While binary (Yes/No) markets are simple, the real world is often non-binary. Foresure supports **Categorical Markets** with $N$ mutually exclusive outcomes.



## Logic

For a market with outcomes $\{O_1, O_2, ..., O_n\}$:


yet to be added. 


### Invalid Markets
If a market is ambiguous or the event is cancelled, it resolves to **INVALID**.
*   **Refund**: All trades are reversed? No.
*   **Equal Split**: Typically, the pot is split equally or returned pro-rata depending on the specific ruleset defined at creation. On Foresure, INVALID usually results in a 50/50 (or 1/N) payout, effectively refunding the *initial* probability state.

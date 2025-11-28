# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-monetization-on.svg')"></span> Protocol Economics

*This documentation is in editing mode. The content here is not finalized.*

Foresure generates revenue through trading fees, ensuring the sustainability of the platform without relying solely on token inflation.

## Fee Structure

Every trade on Foresure incurs a fee, which is split between Liquidity Providers (LPs) and the Protocol Treasury.

| Fee Type | Rate | Recipient | Purpose |
| :--- | :--- | :--- | :--- |
| **Liquidity Fee** | **1.0% - 5.0%** | **LPs** | Compensates LPs for risk and Impermanent Loss. |
| **Protocol Fee** | **0.5%** | **Treasury** | Funds development, security audits, and operations. |

```mermaid
pie title Fee Distribution
    "Liquidity Providers (LPs)" : 80
    "Protocol Treasury" : 20
```

*Note: Fees are dynamic based on market volatility. Stable markets have lower fees.*

## Revenue Flow

1.  **User Trades**: A user buys $100 worth of "YES" tokens.
2.  **Fee Deduction**: $1.50 (1.5%) is deducted.
    *   $1.00 goes to the Liquidity Pool (increasing share value for LPs).
    *   $0.50 is sent to the Treasury Contract.
3.  **Net Trade**: $98.50 is used to purchase the outcome tokens.

```mermaid
flowchart LR
    User([User]) -- $100 USDC --> Contract[Smart Contract]
    Contract -- $1.50 Fee --> Split{Splitter}
    Split -- $1.00 --> LP[Liquidity Pool]
    Split -- $0.50 --> Treasury[Treasury]
    Contract -- $98.50 --> Market[Prediction Market]
    Market -- Tokens --> User
```

## Treasury Usage

The Treasury funds are managed by the Governance Multi-Sig (and eventually the DAO).
*   **Development**: paying contributors and infrastructure costs.
*   **Security**: Bug bounties and audits.
*   **Growth**: Marketing campaigns and trading competitions.
*   **Insurance Fund**: A portion is set aside to cover potential shortfall events (e.g., critical bugs).

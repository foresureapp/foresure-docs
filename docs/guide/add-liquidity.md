# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-local-cafe.svg')"></span> Add Liquidity

Liquidity Providers (LPs) are the backbone of Foresure. By adding liquidity, you earn fees from every trade.

## Hybrid AMM Position Sizing

Unlike Uniswap V3, you don't need to manage tick ranges. You simply deposit USDC, and the AMM automatically distributes it across all outcomes according to the current probability distribution.

### How it works
If the market probability is **YES: 60% / NO: 40%**:
*   You deposit **$100 USDC**.
*   The protocol mints **$60 worth of YES** and **$40 worth of NO** (conceptually) and adds them to the pool.
*   You receive **LP Tokens** representing your share of the pool.

## Impermanent Loss (IL) Mitigation

Prediction markets have a unique property: **At expiration, one outcome goes to $1.00 and others to $0.00.**

*   **Risk**: If you hold LP tokens until the very end, you might end up holding only the losing tokens (which are worthless) if the pool is drained by informed traders.
*   **Strategy**:
    1.  **Provide Early**: Earn high fees during volatility.
    2.  **Exit Before Resolution**: Remove liquidity *before* the event outcome becomes obvious to avoid being "picked off" by traders who know the answer.

## Fee Tiers

| Tier | Fee | Best For |
| :--- | :--- | :--- |
| **Stable** | 0.1% | Low volatility events (e.g., Stablecoin pegs). |
| **Standard** | 1.0% | Most sports and political events. |
| **Exotic** | 5.0% | High risk, long-tail markets with scarce info. |

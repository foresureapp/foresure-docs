# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-brush.svg')"></span> Creator Earnings

Anyone can create a market on Foresure. It's permissionless.

## Creating Pred Tokens
When you create a market, you are effectively deploying a new set of **ERC-1155** tokens representing the outcomes (e.g., YES/NO).
*   **Initial Liquidity**: As a creator, you must provide the initial liquidity (seed funding) to allow others to start trading.
*   **Bootstrap**: We recommend seeding at least $100 USDC to prevent high volatility.

## Creator Fees
*   **Current State**: Currently, market creators earn **LP Fees** on the liquidity they provide.
*   **Future Update**: We are exploring a dedicated **Creator Fee** (e.g., 0.1% of volume) that goes directly to the wallet that created the market, incentivizing users to find and create viral markets.

## The Multi-Outcome Model
You aren't limited to Yes/No.
*   **Categorical**: Create a market with up to 8 outcomes.
*   **Example**: "Winner of the Euro Cup" -> [France, England, Spain, Germany, Other].
*   **Settlement**: The "Other" bucket ensures the market can always resolve, even if a dark horse wins.

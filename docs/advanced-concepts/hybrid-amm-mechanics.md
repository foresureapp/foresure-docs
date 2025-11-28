# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-hub.svg')"></span> Hybrid AMM Mechanics

Foresure's "Hybrid" nature comes from blending the **Constant Product Market Maker (CPMM)** model (popularized by Uniswap) with the specific needs of prediction markets (binary/categorical outcomes).

## The Invariant

We use a weighted geometric mean invariant:

$$ \prod_{i} R_i^{w_i} = k $$

Unlike Uniswap where $w_A = w_B = 0.5$, in prediction markets, the weights can be dynamic or fixed depending on the implementation. For simplicity, we often treat them as equal but normalize the *prices*.

## Virtual Liquidity

To prevent the pool from draining completely (which would send prices to infinity), we can utilize **Virtual Liquidity**.
*   The AMM acts as if there is more liquidity than actually exists.
*   This flattens the bonding curve near the edges (0% and 100%), making it harder to manipulate the price to extremes with small amounts of capital.

## CPMM vs. LMSR

| Feature | CPMM (Foresure) | LMSR (Traditional) |
| :--- | :--- | :--- |
| **Computational Cost** | Low (Simple multiplication) | High (Exponentials/Logs) |
| **Bounded Loss** | Yes (Pool cannot go negative) | Yes (with parameter $b$) |
| **Liquidity Adding** | Permissionless (ERC-20 style) | Complex (requires adjusting $b$) |

By choosing CPMM, we allow anyone to become an LP by simply depositing USDC, which is automatically split into outcome tokens and added to the reserves.

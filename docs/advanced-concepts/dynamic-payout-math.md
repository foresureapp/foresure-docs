# <span class="sidebar-icon" style="--icon: url('/icons/functions.svg')"></span> Dynamic Payout Math

This section dives deep into the mathematical formulas that power Foresure's adaptive reward system.

## Probability Density Function (PDF)

The price of an outcome token represents the market's estimated probability of that event occurring.

$$ P(x) = \frac{\partial C}{\partial q_x} $$

Where:
*   $C$ is the cost function of the AMM.
*   $q_x$ is the quantity of outcome tokens for outcome $x$.

## Logarithmic Market Scoring Rule (LMSR)

While we use a CPMM approximation, the theoretical foundation is LMSR. The cost function is:

$$ C(\mathbf{q}) = b \cdot \ln \left( \sum_{i} e^{q_i / b} \right) $$

*   $b$: Liquidity parameter (determines market depth).
*   $\mathbf{q}$: Vector of quantities held by the market maker.

## Slippage Calculation

When a user buys $\Delta q$ shares, the price moves. The average price paid is:

$$ \bar{P} = \frac{C(\mathbf{q} + \Delta \mathbf{q}) - C(\mathbf{q})}{\Delta q} $$

As $\Delta q$ increases relative to $b$, $\bar{P}$ increases, resulting in slippage.

### Impact of Liquidity ($b$)
*   **High $b$**: Low slippage, requires more capital.
*   **Low $b$**: High slippage, price is very sensitive to small trades.

## ROI Curves

The potential ROI is non-linear.

$$ \text{MaxROI} = \frac{1 - P_{entry}}{P_{entry}} $$

This creates a "long-shot bias" where unlikely events offer massive multiples (e.g., 100x), attracting retail speculators.

# 💧 Liquidity Impact

Liquidity depth directly affects the trading experience.

## Price Impact Formula

Price impact is the difference between the market price and the estimated fill price of a trade.

$$ \text{Impact} \% = \frac{P_{fill} - P_{spot}}{P_{spot}} \times 100 $$

## Depth Charts

A "Deep" market allows for large trades with minimal price movement.

*   **Shallow Market**: A $1,000 buy moves the price by 10%.
*   **Deep Market**: A $1,000 buy moves the price by 0.1%.

## Slippage Settings

Users can configure their **Max Slippage** tolerance in the UI.
*   **Default**: 0.5%
*   **High Volatility**: 1.0% - 5.0%

If the price impact exceeds your slippage tolerance (e.g., due to a front-running bot or low liquidity), the transaction will **revert** to protect you from a bad fill.

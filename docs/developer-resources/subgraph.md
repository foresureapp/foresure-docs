# 📊 Subgraph & Analytics

Foresure provides a powerful GraphQL API via The Graph to query market data, trade history, and liquidity stats.

## Endpoints

*   **Base Mainnet**: `https://api.thegraph.com/subgraphs/name/foresure/base-mainnet`
*   **Base Sepolia**: `https://api.thegraph.com/subgraphs/name/foresure/base-sepolia`

## Query Examples

### Get Active Markets

Retrieve the latest 5 active markets with their current volume and liquidity.

```graphql
{
  markets(first: 5, where: { active: true }, orderBy: creationTimestamp, orderDirection: desc) {
    id
    question
    totalVolume
    liquidity
    outcomes {
      id
      name
      currentPrice
    }
  }
}
```

### Get User Trades

Fetch all trades for a specific user address.

```graphql
{
  trades(where: { user: "0xYourAddress..." }, orderBy: timestamp, orderDirection: desc) {
    id
    market {
      question
    }
    outcomeIndex
    amountIn
    amountOut
    timestamp
  }
}
```

### Get Market History (Candles)

Useful for charting price history.

```graphql
{
  marketHourlySnapshots(where: { market: "0xMarketId..." }, first: 24, orderBy: timestamp, orderDirection: desc) {
    timestamp
    outcomePrices
    volume
  }
}
```

## Schema

The full schema includes entities for:
*   `Market`
*   `Outcome`
*   `Trade`
*   `LiquidityPosition`
*   `User`

# API Reference

## Market Creation

Create a new prediction market.

**Endpoint**: `POST /api/markets`

### Request Body

| Param Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | string | Yes | Market title/description |
| `outcomes` | array | Yes | Array of outcome names (e.g., ["Yes", "No"]) |
| `category` | string | Yes | Market category |
| `resolutionDate` | string | Yes | ISO date string for resolution |
| `initialLiquidity` | number | Yes | Initial liquidity in ETH |
| `creatorFee` | number | Yes | Creator fee percentage (0-10%) |

**Example:**
```json
{
  "title": "Will BTC exceed $100k by end of 2024?",
  "outcomes": ["Yes", "No", "Exactly $100k"],
  "category": "Cryptocurrency",
  "resolutionDate": "2024-12-31T23:59:59Z",
  "initialLiquidity": 1.0,
  "creatorFee": 2.0
}
```

### Response

| Param Name | Type | Description |
|------------|------|-------------|
| `marketId` | string | Unique market identifier |
| `transactionHash` | string | Blockchain transaction hash |
| `status` | string | Creation status |

---

## Trade Execution

Execute a buy or sell order.

**Endpoint**: `POST /api/trade`

### Request Body

| Param Name | Type | Required | Description |
|------------|------|----------|-------------|
| `marketId` | string | Yes | Market identifier |
| `outcomeId` | number | Yes | Outcome index |
| `amount` | string | Yes | Trade amount in wei |
| `type` | string | Yes | "buy" or "sell" |
| `maxSlippage` | number | No | Maximum slippage percentage |

### Response

| Param Name | Type | Description |
|------------|------|-------------|
| `tradeId` | string | Unique trade identifier |
| `transactionHash` | string | Blockchain transaction hash |
| `newPrice` | string | New outcome price |
| `cost` | string | Total cost in wei |

---

## Liquidity Management

Add or remove liquidity from a market.

**Endpoint**: `POST /api/liquidity`

### Request Body

| Param Name | Type | Required | Description |
|------------|------|----------|-------------|
| `marketId` | string | Yes | Market identifier |
| `action` | string | Yes | "add" or "remove" |
| `amount` | string | Yes | Liquidity amount in wei |
| `weights` | array | No | Outcome weights for removal |

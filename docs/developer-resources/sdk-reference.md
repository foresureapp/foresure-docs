# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-logo-dev.svg')"></span> SDK Reference

The `@foresure/sdk` library allows you to interact with the protocol programmatically.

## Installation

```bash
npm install @foresure/sdk ethers
```

## Initialization

```typescript
import { ForesureSDK } from '@foresure/sdk';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const sdk = new ForesureSDK(signer, { chainId: 8453 });
```

## Create a Market

```typescript
const marketParams = {
  question: "Will ETH be above $3000 on Dec 31?",
  outcomes: ["YES", "NO"],
  resolutionTime: 1735689600, // Unix timestamp
  bondAmount: ethers.utils.parseUnits("50", 6) // 50 USDC
};

const tx = await sdk.createMarket(marketParams);
await tx.wait();
console.log("Market created!");
```

## Place a Trade

```typescript
// Buy 100 USDC worth of YES outcome
const tradeParams = {
  marketId: "0xMarketAddress...",
  outcomeIndex: 0, // 0 = YES
  amountIn: ethers.utils.parseUnits("100", 6),
  minAmountOut: ethers.utils.parseUnits("95", 18) // 5% slippage tolerance
};

const tx = await sdk.trade(tradeParams);
await tx.wait();
console.log("Trade executed!");
```

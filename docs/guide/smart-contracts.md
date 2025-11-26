# Smart Contracts

Foresure interacts with smart contracts on the **Base Network** (EVM compatible).

## Contract Architecture

The core logic is handled by the `PredictionMarket` contract.

```solidity
// PredictionMarket.sol
contract PredictionMarket {
    struct Market {
        address creator;
        string title;
        uint256 resolutionTime;
        uint8 outcomeCount;
        uint256 totalLiquidity;
        uint256 creatorFee;
        MarketStatus status;
        uint256 finalOutcome;
        uint256 disputeEndTime;
    }

    struct Outcome {
        uint256 shares;
        uint256 price;
        mapping(address => uint256) userShares;
    }

    // Core functions
    function createMarket(
        string memory title,
        uint8 outcomeCount,
        uint256 resolutionTime,
        uint256 creatorFee
    ) external payable returns (uint256 marketId);

    function buyShares(
        uint256 marketId,
        uint8 outcome,
        uint256 amount
    ) external payable;

    function sellShares(
        uint256 marketId,
        uint8 outcome,
        uint256 shares
    ) external;

    function addLiquidity(
        uint256 marketId,
        uint256 amount
    ) external payable;

    function removeLiquidity(
        uint256 marketId,
        uint256 shares
    ) external;

    function finalizeMarket(
        uint256 marketId,
        uint8 outcome
    ) external;

    function disputeOutcome(
        uint256 marketId,
        uint8 proposedOutcome
    ) external payable;
}
```

## Web3 Service Layer

The backend interacts with the blockchain using `ethers.js`.

### Service Implementation

```javascript
// services/web3Service.js
class Web3Service {
    constructor() {
        this.provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
        this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
        this.contract = new ethers.Contract(
            process.env.MARKET_CONTRACT_ADDRESS,
            MARKET_ABI,
            this.wallet
        );
    }

    async createMarket(marketData) {
        const tx = await this.contract.createMarket(
            marketData.title,
            marketData.outcomeCount,
            marketData.resolutionTime,
            marketData.creatorFee,
            { value: marketData.initialLiquidity }
        );
        return await tx.wait();
    }
}
```

## Key Concepts

*   **AMM (Automated Market Maker)**: Prices are determined by a Constant Product Invariant algorithm.
*   **Liquidity Pools**: Each market has its own liquidity pool shared across all outcomes.
*   **Resolution**: The creator proposes a resolution. If no dispute occurs within the window (1 hour), it finalizes.
*   **Disputes**: Users can dispute a proposed outcome by bonding tokens. A jury system resolves disputes.

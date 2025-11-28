# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-lightbulb.svg')"></span> Integration: Custom Oracle

For advanced users, you can integrate your own data feeds into Foresure markets.

## The `IOracle` Interface

Any contract that implements the `IOracle` interface can be used as a resolution source.

```solidity
interface IOracle {
    function getOutcome(bytes32 marketId) external view returns (uint256);
    function isFinalized(bytes32 marketId) external view returns (bool);
}
```

## Using Chainlink

You can wrap a Chainlink Price Feed to resolve scalar markets.

```solidity
contract ChainlinkAdapter is IOracle {
    AggregatorV3Interface internal priceFeed;

    constructor(address _feed) {
        priceFeed = AggregatorV3Interface(_feed);
    }

    function getOutcome(bytes32) external view returns (uint256) {
        (, int price, , , ) = priceFeed.latestRoundData();
        return uint256(price);
    }
}
```

## Using API3 / Pyth

Similar adapters can be built for API3 Airnodes or Pyth Network updates, allowing for low-latency resolution of crypto price markets.

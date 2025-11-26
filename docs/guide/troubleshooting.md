# 🔧 Troubleshooting

Encountering an issue? Here are solutions to common problems.

## Wallet & Connection

### "Wrong Network" Error
**Issue**: Your wallet is connected to Ethereum Mainnet or another chain.
**Fix**: Switch your wallet to **Base Mainnet**.
1.  Open your wallet extension.
2.  Select the network dropdown.
3.  Choose "Base". If it's not there, see [Network Setup](../getting-started/network-setup.md).

### Transaction Stuck / Pending
**Issue**: A transaction is pending for a long time.
**Fix**:
1.  **Speed Up**: In your wallet, look for a "Speed Up" button on the transaction. This increases the gas fee.
2.  **Cancel**: You can attempt to cancel the transaction by sending a 0 ETH transaction with the same "Nonce".
3.  **Wait**: Base is usually fast, but network congestion can happen.

## Trading

### "Slippage Tolerance Exceeded"
**Issue**: The price moved unfavorably while your transaction was processing.
**Fix**:
1.  Open the **Settings** (gear icon) in the trade modal.
2.  Increase **Slippage Tolerance** (e.g., from 0.5% to 1.0%).
3.  *Warning*: Higher slippage means you might get a worse price.

### "Insufficient Balance"
**Issue**: You don't have enough ETH for gas or USDC for the trade.
**Fix**:
1.  Check your **ETH** balance. You need ~$0.05 worth of ETH for gas.
2.  Check your **USDC** balance. Ensure you have the correct version of USDC on Base (`0x8335...`).

## Oracle & Resolution

### "Why hasn't my market resolved?"
**Issue**: The event has passed, but the market is still "Open".
**Fix**:
1.  Check the **Resolution Date**. The market cannot resolve before this timestamp.
2.  If the date has passed, anyone can trigger resolution. You can click **"Propose Outcome"** on the market page (requires a bond).

### "I won, but I can't claim."
**Issue**: The market is in the "Challenge Period".
**Fix**:
1.  Wait for the 24-hour challenge window to close.
2.  Once the status changes to **Finalized**, you can redeem your winnings.

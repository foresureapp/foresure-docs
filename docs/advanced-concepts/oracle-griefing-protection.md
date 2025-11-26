# 🛡️ Oracle Griefing Protection

"Griefing" is an attack where a user maliciously disputes a correct outcome to delay settlement, even if they know they will lose the bond.

## Delay Windows

Every dispute adds a time delay to the settlement.
*   **Initial Window**: 24 hours.
*   **Dispute 1**: Adds 24 hours.
*   **Dispute 2**: Adds 48 hours.

## Exponential Bonding

To counter this, the cost to dispute rises exponentially.

$$ \text{Bond Cost}_n = \text{InitialBond} \times 2^{(n-1)} $$

### Example Scenario
*   **Initial Bond**: $100
*   **Dispute 1**: Attacker pays $100.
*   **Dispute 2**: Attacker pays $200.
*   **Dispute 3**: Attacker pays $400.
*   **Dispute 10**: Attacker pays **$51,200**.

This rapidly makes griefing attacks economically ruinous.

## The "Cost of Corruption" (CoC)

The system is secure as long as:
$$ \text{Cost of Corruption} > \text{Profit from Corruption} $$

By scaling bonds, we ensure CoC exceeds any potential profit from delaying the market (e.g., avoiding liquidation elsewhere).

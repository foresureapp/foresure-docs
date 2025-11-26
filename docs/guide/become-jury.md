# 🧑‍⚖️ Become a Juror

Join the Foresure Jury to help adjudicate disputes and earn rewards.

## Juror Staking Requirements

To prevent sybil attacks, jurors must stake **$SURE** tokens.
*   **Minimum Stake**: 1,000 $SURE.
*   **Lock-up Period**: 7 days.

## Voting Interface Guide

When a dispute is escalated to the Jury:
1.  **Notification**: You receive an alert in the "Jury Duty" tab.
2.  **Review**: Read the market question, rules, and the evidence provided by both the Proposer and Disputer.
3.  **Vote**: Select **Outcome A**, **Outcome B**, or **Invalid**.
4.  **Commit/Reveal**: To prevent copy-voting, we use a commit-reveal scheme.
    *   *Commit Phase*: Submit a hash of your vote + salt.
    *   *Reveal Phase*: Reveal your actual vote.

## Reward Distribution

*   **Consensus Reward**: If you vote with the majority, you earn a share of the loser's bond + protocol fees.
*   **Penalty**: If you vote against the majority (incoherent), you are slashed.

$$ \text{Reward} = \frac{\text{Stake}_{you}}{\text{Stake}_{total\_winning}} \times \text{SlashedBond} $$

::: info
Consistent jurors build "Reputation" which increases their voting weight over time.
:::

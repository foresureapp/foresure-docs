# <span class="sidebar-icon" style="--icon: url('/icons/box.svg')"></span> Foresure Whitepaper

**Version 1.0**

Welcome to the technical documentation and whitepaper for the Foresure Protocol. This section covers the theoretical underpinnings, mathematical models, and payout decisions that power the platform.

If you would like to read the whitepaper pdf (heavy math!), read it [here](https://www.dropbox.com/scl/fo/p2j80zjx3qwy5d8af4u0w/AFYS_75_cCAFftmPw2ZDXpA?rlkey=34dxgnzoklezmrb03134kq6gu&st=upmkf3pv&dl=0). 


## Abstract
Prediction markets have long been hailed as the "holy grail" of information aggregation, yet they have struggled to gain mainstream adoption due to low liquidity, high latency, and poor user experience. 

In order to unleash the On-chain potential of predictions markets, last decade was spent on trying to adapt Market Scoring Rules (MSRs) as Automated Market Makers (AMM). All of that AMM setup has liquidity crisis as well as bounded losses to liquidity providers. This paper introduces a new framework that addresses these inherent limitations of current prediction markets.

 The key paradigm shift proposed is that belief-driven actions in the outcome by participants' trading actions should determine outcome consensus probabilities, rather than prices directly representing those probabilities. 
 
 Consensus AMM (CAMM) builds on this philosophy and enforces zero-LP-loss, bounded reward function and stable wisdom of crowd probability expectation of the outcomes ensuring robust liquidity, fair payout, and accurate collective inference in decentralized prediction environments.**Foresure** addresses these challenges by introducing a **Hybrid Consensus Automated Market Maker (CAMM)** on the **Base Network**.
## Table of Contents

*   [**The Problem**](./problem.md): A high-level summary of Current Prediction Market Issues, why Foresure?.
*   [**Hybrid CAMM Design**](./hybrid-camm-design.md): Detailed mechanics of our Constant Product Market Maker adapted for prediction markets.
*   [**CAMM Math**](./camm-math.md): Detailed mechanics of our Constant Product Market Maker adapted for prediction markets.
*   [**Dynamic Payouts**](./dynamic-payouts.md): The mathematics governing our adaptive reward payouts.
*   [**Optimistic Oracle**](./optimistic-oracle.md): How we resolve markets trustlessly.
*   [**Multi-Outcome Model**](./multi-outcome-model.md): Handling markets with N > 2 outcomes.
*   [**Security Model**](./security-model.md): Analysis of attack vectors and mitigation strategies.

::: info Research Oriented
This section is intended for developers, researchers, and auditors. For a user guide, please visit the [Guide](../guide/create.md) section.
:::

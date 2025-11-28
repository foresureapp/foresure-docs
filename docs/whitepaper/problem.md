# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-article.svg')"></span> The Problem

From the seminal article in 1945 *``The Use of Knowledge in Society,''* Nobel Laureate Friedrich A. Hayek argued that the price system as a mechanism for aggregating and transmitting information dispersed among individuals. 
There has been continuous attempt of making prediction market to be the next big thing in the decentralized
blockchain space as it can help to aggreagate crowd wisdom.


A quick example before you read the theory. 
## Example Analysis
You can check the recently concluded events as Top 15 shareholders of both sides of events such as who would win the Noble Peace Price for 2025 (Refer Table: 1), many bought Trump's No tokens and similarly for the winning candidate's share was traded heavily in few hours might have led huge loss even though it is bounded. While these losses accumulating can lead to huge sum of money is a major concern for the investors. In fact, many research firms are exploring and researching to overcome these shortcomings of MSRs.

|Yes | 3,259,600 | No | 4,402,711|
|:--- |:--- |:--- |:--- |
|
| satoshiAncap | 420,000 | Kapii | 518,310 |
| slavaamerica2 | 359,765 | SwissMiss | 500,000 |
| Lyamchik3 | 356,848 | yjcr | 403,357 |
| stereoscorge | 293,212 | How.Dare.You | 308,991|
| PollsR4Dummies | 239,356 | vrv | 292,806|
| VorVZakone | 219,196 | scottilicious | 286,441|
| Turbulent-Seagull | 212,856 | wkmfa57 | 283,657|
| ArcLing | 177,777 | Nouveau | 274,400|
| iknowitall9393 | 176,148 | theo5 | 243,774|
| MrWilliam | 172,419 | Warlike-Horn | 239,500|
| fragileshark | 169,003 | HappyHacking | 232,045|
| dresden77 | 167,211 | Erasmus | 228,688|
| stonefield92 | 150,000 | Dead-Skylight | 209,352|
| qqq89 | 145,809 | xhinra37 | 198,434|
| Stefanlecca | 137,339 | 025d | 182,956|

::: info Table Explanation
Donald Trump for Nobel Price 2025 - 29 million Volume, Top 15 sum 3,259,600 contracts for YES and 4,402,711 for NO. The difference of 1,143,111 shares, each should be paid $1$USD. Note that LPs who placed orders on both sides get back their $1, then who paid the remaining money. The upper bound of loss incurred might not be the amount stated due to difference of token price, but still there would be substantial loss should have occurred. Cumulatively bounded loss becomes infinite. This is why they are still in centralized mode.
::: 

## Market Scoring Rules
Market Scoring Rule (MSR) is a mathematical construct to make sure, that probability of event over a period of time reflecting the true belief of a predictor. The pricing formula is nothing but probability since its cost function should be convex and its convex conjugate as market scoring rule. There is also testing conditions to test whether
the given MSR is proper or not. So, traders buy shares which is equivalent to probability, so from $0.01$USD to $99.99$USD. At the finality you get paid $1$USD for each share you are holding, because when the event happened, the probability is 1, otherwise it is 0. There are many MSRs but the famous one is Logarithmic Market Scoring Rule (LMSR) introduced by Hanson. While many protocols tried to adapt LMSR, real world scenarios are not kind to MSRs and failed to fly in decentral world. 

## Problem with MSRs

Without going into details of the formula, there is a parameter $b$ that defines curvature of the price curve which is shaped as Sigmoid curve. This ensures that there is no arbitrage due to pricing function. LMSR is strictly
proper and hence its cost function is convex. These two necessary conditions always make sure there is a bounded loss in utilizing MSRs as AMMs. The bounded loss depends on the parameter $b$ and the number of outcomes which means that as number of outcomes increase the liquidity requirement also arises and so does the bounded loss they often result in unbalanced exposure and inefficient liquidity usage for LPs and could risk to lose all of their pooled liquidity.

## Issues with Polymarket and Augur

Polymarket platform started with their implementation of LMSR where they have to fix the value of $b$ which become very restrictive to use where there is huge incoming of volumes/orders. If a large value of $b$ is fixed at the start, then the loss is also increased. Hence Polymarket scaled back to traditional CLOB orderbook to cater
the large volume of transactions. This shows the failure of adaption of AMM based on LMSR. There are many other protocols have died along the way by using LMSRs. Even with current orderbook for trading, either Polymarket should be losing money as market maker or their liquidity providers. The lose is due to keeping payout structure similar to
MSRs. 

## Recent Academic Research 
Recently developed pm-AMM (from Paradigm) which tries to incorporate Gaussian normalization along with the concept of loss-vs-rebalancing (LVR) aimed to solve the existing liquidity issues. Nevertheless, LMSR and pm-AMM both contains transcendal functions which is very computationally intensive on EVM and increase gas costs. Hence, they are still not suitable for on-chain AMM. In order to overcome the issue, I have developed Bounded Rational Price Curve (BRPC) MSR {[}6{]} with two tunable parameters to reduce the computational gas cost on-chain and better than LMSR and pm-AMM for binary markets in EVM. Irrespective of gas costs optimizations, MSRs are loss making venture for liquidity providers due to the way of their math constructions structured. Hence recent MSRs like pm-AMM, and BRPC are not suitable to become path breaking AMM for permissionless onchain decentralized apps.


## Major observations

1. **LP providers are facing substantial losses due to the boundedloss property of Market Scoring Rules**.

But remember that, even with orderbooks, market makers in Polymarket and Kalshi might be losing money due to pricing and payout structure. What Table: 1 show that these orderbook based platforms would lose money over time for their
payout structure irrespective of how users adapt to their system, this leads to the second point.

2. **MSRs are mathematical containers, these platforms are trying to put the reality into those containers**. 

The price of the share is probability value depends on the quantity of tokens at state. So even if the users are willing to pay, the price can't go above $1$USD. Since outcome tokens settle at 1USD if true, their price is bounded within $[0,1]$. It means that if one believes in expectation of an outcome and willing to pay more irrespective of payout structure is a major constrain. This constrains market expression of belief intensity, limiting capital-weighted conviction. 

3. **Risk to reward ratio is very high**

Irrespective of which price you bought the shares, if the final outcome is 1, then the you get the same amount for that quantity. Hence the number of players would not risk to participate. This also limits the exposure for institutional money.

4. **The Problem with Order Books**


Central Limit Order Books (CLOBs) require active market makers to provide liquidity on both sides of a trade. In niche prediction markets, this often leads to wide spreads and thin depth.



## The Vision
Foresure aims to become the global settlement layer for truth, enabling anyone to hedge risk or speculate on future events with the same ease as trading a token on Uniswap.



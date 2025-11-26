# Unified Automated Market Maker with Zero-LP-Loss for Prediction Markets 

## Abstract 

In order to unleash the On-chain potential of predictions markets, last decade was spent on trying to adapt Market Scoring Rules (MSRs) as Automated Market Makers (AMM). All of that AMM setup has liquidity crisis as well as bounded losses to liquidity providers. This paper introduces a new framework that addresses these inherent limitations of current prediction markets. The key paradigm shift proposed is that belief-driven actions in the outcome by participants' trading actions should determine outcome probabilities, rather than prices directly representing those probabilities. SAMM builds on it and enforces zero-LP-loss, bounded reward function and stable wisdom of crowd probability expectation of the outcomes ensuring robust liquidity, fair payout, and accurate collective inference in decentralized prediction environments


## Introduction

From the seminal article in 1945 [1] “The Use of Knowledge in Society” , Nobel Laureate Friedrich A. Hayek argued that the price system as a mechanism for aggregating and transmitting information dispersed among individuals. There has been continuous attempt of making prediction market to be the next big thing in the decentralized blockchain space as it can help to aggreagate crowd wisdom. In a prediction market platform, traders are allowed to predict the outcome for any event. In the case of two outcomes, binary YES / No which means, event will happen or not. All of the multi outcome events such as who will win the Noble Peace Price in 2025, there may be potential candidates, but all of them can be decomposed to binary of each of its own. The main idea of prediction market is to trade your belief! If you predict the outcome of event to happen, then you buy its relative shares and after the finality of the event, if the same outcome happened, you get paid! 

Market Scoring Rule (MSR) is a mathematical construct to make sure, that probability of event over a period of time reflecting the true belief of a predictor. The pricing formula is nothing but probability since its cost function should be convex and its convex conjugate as market scoring rule. There is also testing conditions to test whether the given MSR is proper or not. So, traders buy shares which is equivalent to probability, so from 0.01USD to 99.99USD. At the finality you get paid 1USD for each share you are holding, because when the event happened, the probability is 1, otherwise it is 0. 

There are many MSRs but the famous one is Logarithmic Market Scoring Rule (LMSR) introduced by Hanson [2]. While many protocols [3] tried to adapt LMSR, real world scenarios are not kind to MSRs and failed to fly in decentral world. Without going into details of the formula, there is a parameter b that defines curvature of the price curve which is shaped as Sigmoid curve. This ensures that there is no arbitrage due to pricing function. LMSR is strictly proper and hence its cost function is convex. These two necessary conditions always make sure there is a bounded loss in utilizing MSRs as AMMs [3, 4]. The bounded loss depends on the parameter b and the number of outcomes which means that as number of outcomes increase the liquidity requirement also arises and so does the bounded loss they often result in unbalanced exposure and inefficient liquidity usage for LPs and could risk to lose all of their pooled liquidity.

Polymarket platform started with their implementation of LMSR where they have to fix the value of b which become very restrictive to use where there is huge incoming of volumes/orders. If a large value of b is fixed at the start, then the loss is also increased. Hence Polymarket scaled back to traditional CLOB orderbook to cater the large volume of transactions. This shows the failure of adaption of AMM based on LMSR. There are many other protocols have died along the way by using LMSRs. Even with current orderbook for trading, either Polymarket should be losing money as market maker or their liquidity providers. The lose is due to keeping payout structure similar to MSRs. You can check the recently concluded events as Top 15 shareholders of both sides of events such as who would win the Noble Peace Price for 2025 (Refer Table: 1), many bought Trump's No tokens and similarly for the winning candidate's share was traded heavily in few hours might have led huge loss even though it is bounded. While these losses accumulating can lead to huge sum of money is a major concern for the investors. In fact, many research firms are exploring and researching to overcome these shortcomings of MSRs.

Recently developed pm-AMM [5] which tries to incorporate Gaussian normalization along with the concept of loss-vs-rebalancing (LVR) aimed to solve the existing liquidity issues. Nevertheless, LMSR and pm-AMM both contains transcendal functions which is very computationally intensive on EVM and increase gas costs. Hence, they are still not suitable for on-chain AMM. In order to overcome the issue, I have developed Bounded Rational Price Curve (BRPC) MSR [6] with two tunable parameters to reduce the computational gas cost on-chain and better than LMSR and pm-AMM for binary markets in EVM. Irrespective of gas costs optimizations, MSRs are loss making venture for liquidity providers due to the way of their math constructions structured. Hence recent MSRs like pm-AMM, and BRPC are not suitable to become path breaking AMM for permissionless onchain decentralized apps.


```latex
\begin{table}
\caption{Donald Trump for Nobel Price 2025 - 29 million Volume, The difference
of 1,143,111 shares, each should be paid $1$USD, The upper bound
of loss incurred might not be the amount stated due to difference
of token price, but still there would be substantial loss should have
occurred.}
\begin{tabular}{|c|c|c|c|}
\hline 
Yes & 3,259,600 & No & 4,402,711\tabularnewline
\hline 
\hline 
satoshiAncap & 420,000 & Kapii & 518,310\tabularnewline
\hline 
slavaamerica2 & 359,765 & SwissMiss & 500,000\tabularnewline
\hline 
Lyamchik3 & 356,848 & yjcr & 403,357\tabularnewline
\hline 
stereoscorge & 293,212 & How.Dare.You & 308,991\tabularnewline
\hline 
PollsR4Dummies & 239,356 & vrv & 292,806\tabularnewline
\hline 
VorVZakone & 219,196 & scottilicious & 286,441\tabularnewline
\hline 
Turbulent-Seagull & 212,856 & wkmfa57 & 283,657\tabularnewline
\hline 
ArcLing & 177,777 & Nouveau & 274,400\tabularnewline
\hline 
iknowitall9393 & 176,148 & theo5 & 243,774\tabularnewline
\hline 
MrWilliam & 172,419 & Warlike-Horn & 239,500\tabularnewline
\hline 
fragileshark & 169,003 & HappyHacking & 232,045\tabularnewline
\hline 
dresden77 & 167,211 & Erasmus & 228,688\tabularnewline
\hline 
stonefield92 & 150,000 & Dead-Skylight & 209,352\tabularnewline
\hline 
qqq89 & 145,809 & xhinra37 & 198,434\tabularnewline
\hline 
Stefanlecca & 137,339 & 025d & 182,956\tabularnewline
\hline 
\end{tabular}
\end{table}
```

### Major Observertaions

1. The LP providers are facing substantial losses due to the bounded loss property of Market Scoring Rules. But remember that, even with orderbooks, market makers in Polymarket and Kalshi might be losing money due to pricing and payout structure. What Table: 1 show that these orderbook based platforms would lose money over time for their payout structure irrespective of how users adapt to their system, this leads to the second point.

2. MSRs are mathematical containers, these platforms are trying to put the reality into those containers. The price of the share is probability value depends on the quantity of tokens at state. So even if the users are willing to pay, the price can't go above 1USD. Since outcome tokens settle at 1USD if true, their price is bounded within [0,1]. It means that if one believes in expectation of an outcome and willing to pay more irrespective of payout structure is a major constrain. This constrains market expression of belief intensity, limiting capital-weighted conviction. 

3. Irrespective of which price you bought the shares, if the final outcome is 1, then the you get the same amount for that quantity. Risk to reward ratio is very high, hence the number of players would not risk to participate. This also limits the exposure for institutional money.
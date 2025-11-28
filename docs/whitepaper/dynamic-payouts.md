# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-monetization-on.svg')"></span> Dynamic Payouts

*This documentation is in editing mode. The content here is not finalized.*

Foresure's payout model is designed to reward early and accurate predictions while ensuring solvency of the market.


## Reward Distribution at Finality

Let the state $t=t_{end}$ be the finality time and resolution of
true outcome $r\in\left\{ 1,2,\dots,n\right\}$ is confirmed by Oracle.
Trading halts at block $B(t_{\text{end}})$. Snapshot taken at block
$B(t_{snap})<B(t_{\text{end}})$. Eligible addresses for the reward
of holding true belief are those who are holding the true outcome
tokens $q_{r}(B(t_{\text{snap}}))>0$ and did not sell tokens of any
outcome after a lock period from $t_{snap}$ to $t_{\text{end}}$.
Let $h$ be that holder address. Hence the total eligible rewarding
tokens for all of the addresses can be calculated as 

$$
Q=\sum_{\forall h}q_{r}\left(B(t_{\text{snap}})\right).
$$
 All losing outcome tokens $i\neq r$ expire worthless. The reward
pool $R_{p}$ can be computed as,

$$
R_{p}=\sigma(t)-Y_{0}-\sum L_{p}(t_{end})+\sum RRF.
$$
Note that $R_{p}>0$ since there is no short selling or liquidity
drain. Note that the reward pool depends on the total stables at liquidity
reserve $\sigma(t)$ and accumulated Rewards Reserve Fee. Sum of all
liquidity added by LPs and Initial pool creation Liquidity are returned
back to corresponding providers. Note that being constant product
invariant is used at the core for each outcome pool, there is the
possiblity of sniping tokens earlier for less stables and later on
when nearing finality trader might need to spend more stables to get
same amount of tokens. Hence the new hybrid weighted reward distribution
is proposed:

For each holder $h$, the normalized payout is 
$$
R_{h}=\frac{\omega_{h}}{\sum_{u}\omega_{u}}R_{p},
$$
where $\omega_{h}$ is the weight contribution by the token holder
and it can be calculated as 
$$
\omega_{h}=\varphi\frac{U_{h}}{\sum_{u}U_{u}}+(1-\varphi)\frac{H_{h}}{\sum_{u}H_{u}},
$$
where $\frac{U_{h}}{\sum_{u}U_{u}}$ represents USD-weight to reward
for the capital allocation and $\frac{H_{h}}{\sum_{u}H_{u}}$ represents
eligible holders token weight which considers the early buyers. $\varphi$
helps to preserver the proportionality and helps to mitigate the gaming
the market. 
# <span class="sidebar-icon" style="--icon: url('/icons/ic--baseline-gpp-good.svg')"></span> CAMM Math
This section contains lots of math. 

## Pron Initialization and Price Peg

Let us define, for any Pron having $n\ge2$ mutually exclusive and exhaustive outcomes and each outcome $i \in \left \{ 1,2,\dots,n\right\}$, at any given time $t$ ($t$ is discrete state due to swap and trade), $T_{i}(t)$ be the total tokens minted, $S_{i}(t)$ be tokens in supply, $q_{i}(t)$ be the quantity of outcome tokens at each pool, and $y_{i}(t)$ be the stable reserve (denominated in USD or USDC) ensuring the constant invariant 


$$q_{i}(t)y_{i}(t)=k_{i},,$$
where $k_{i}$ is a constant $\forall i$. The price of outcome $i$'s
token at any given time $t$ is $\frac{y_{i}(t)}{q_{i}(t)}$.

## Liquidity Provisioning

After the initialization, LPs can add liquidity to increase the depth
of the price which could help to increase the volume. Let us say a
LP wants to add $L_{p}$ the amount of stable liquidity, depositing
the same percentage $\vartheta$ of both reserves and using the equation, 


$$\frac{\frac{L_{p}}{n}}{y_{i}(t)}=\frac{\epsilon_{i}}{q_{i}(t)}=\vartheta,$$
where quantity of each outcome tokens to be minted is $\epsilon_{i}$,
calculated as 

$$\epsilon_{i}=\frac{q_{i}(t)L_{p}}{ny_{i}(t)},$$

with new reserve values can be updated with $\grave{y}_{i}(t)=y_{i}(t)+\frac{L_{p}}{n}$,
$\grave{q}_{i}(t)=q_{i}(t)+\epsilon_{i}$. LP exits are pretty similar
calculations as per constant product invariants. After the resolution
finality time $t_{end}$, LP exit is exact stables added. The trading
fees are added only for those period when $L_{p}$ is active which
is implicitly time weighted. 

## Trading Mechanics - Buy Operation

At any given state, let total stables at liquidity reserve be $\sigma(t)=\sum_{i}y_{i}(t)$.
Let us say, a trader wants to buy $\Delta q$ quantity of tokens for
the $i^{th}$ outcome. The trader pays $\Delta y$ stables to the
$i^{th}$ pool. Let trading fee rate be $f\in[0,1)$ (e.g. ($f=0.003$)
like in Uniswap). Then from equation (\ref{eq: samm}),

$$
(q_{i}(t)-\Delta q)(y_{i}(t)+(1-f)\Delta y)=k,
$$
which then leads to 

$$
\Delta q=q_{i}(t)-\frac{k}{y_{i}(t)+(1-f)\Delta y}.
$$
The new pool states can be updated as 

$$
\grave{q}_{i}(t)=q_{i}(t)-\Delta q,\quad\grave{y}_{i}(t)=y_{i}(t)+(1-f)\Delta y.
$$
Thus total stables at liquidity reserve be $\grave{\sigma}(t)=\sum_{i}y_{i}(t)+(1-f)\Delta y$.
Now the trading fees $f\Delta y$ can be distributed with fractions
$\alpha$ to LPs (retained in outside of reserve pool), $\beta$ to
insurance, and $\gamma$ to protocol treasury, with $\alpha+\beta+\gamma=1$.
Then the trader receives $\Delta q$ tokens of outcome $i$.

## Trading Mechanics - Sell Operation

Let us say, a trader wants to sell $\Delta q$ tokens of outcome $i$.
When $\Delta q$ is returned to pool for the equivalent value $\Delta y$
in stables can be extracted from equation (\ref{eq: samm}),

$$
(q_{i}(t)+\Delta q)(y_{i}(t)-\Delta y)=k,
$$
then for tokens in and stables out swap trading is calculated as 

$$
\Delta y=y_{i}(t)-\frac{k}{q_{i}(t)+\Delta q}.
$$
Since CAMM need to incentivizes prediction rather than pump and dump
like regular meme tokens. The sell operation need to tackle the following
issues. 1. Sniping at Low Price after initialization. 2. Profit taking
by draining the liquidity pool 3. Rekking the community by removing
the full liqudity. 4. A rewards pool that incentivicing holder for
predicting the outcome. 

Note that it is straight forward to introduce a levy on sells to reward
long-term belief holders. Let $L$ be the total levy collected at
any given state. At the initial stage or if there is no sell, then
$L=0$. Let levy rate be $\lambda\in[0,1)$. When selling, the trader
must pay levy proportional to gross stable outflow as $\lambda(1-f)\Delta y$
and the total levy pool value is 

$$
\grave{L}=L+\lambda(1-f)\Delta y.
$$
Depending on implementation, $\lambda$ can be time weighted function
too and the trading fee $f$ can be distributed as like buy operation.
One of the best choice of $\lambda$ can be $\frac{1}{n}$. Note that
this levy is calculated after stables are calculated and levy deduction
from the swap output before receiving stables is not desirable. This
levy discourages short-term churn, but this mechanism does not provide
good trading consensus.

Hence CAMM introduces new mechanism of Rewards Reserve Fee (RRF) ensures
profit redistribution and goes directly to rewards pool. RRF is sum
of portion of realized profit ($V$) and slippage weighted fee ($W$).
Per sell, slippage weighted fee can be calculated as follows:

$$
W=\kappa\Delta y\max(0,\theta-\xi)^{2},
$$
where $\kappa$ is the slippage coefficient and $\xi$ a tiny threshold
for micro movement transactions and $\theta$ is the fractional slippage.
$W$ helps to mitigate the issue of large dumps but when sequential
chunk sells it is not effective. Hence let us introduce the profit
tax:

$$
V=\lambda\left(\max\left(0,\pi\right)\right)^{\rho},
$$
where $\rho\geq1$ and $\rho>1$ increases penalities on big profits.
Since $\Delta y$ is the gross stable payout from the pool, the net
stables collectible is $(1-f)\Delta y-RRF$. Note that unlike sell
tax, this method only affects profit. Also note that due to onchain
functionality, there would be aggregated profit tax calculation as
the trader can buy and sell in chunks.

## Reward Distribution at Finality

Let the state $t=t_{end}$ be the finality time and resolution of
true outcome $r\in\left\{ 1,2,\dots,n\right\} $ is confirmed by Oracle.
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

## Consensus Probability

As the traders trading the outcome tokens with CAMM, the supplied
tokens of outcomes reflects the expectation behaviour of the outcome
for that event and which results in the probability. Since all outcome
pools share the same stable denomination, crowd allocation of belief
can be automatically reflected via outcome token accumulation quantities
in supply. This does not require onchain calculations, as it is reflected
only in user interface. The crowd wisdom probability signal of the
outcome $i$ is defined as $P_{i}(t)$ expresses aggregate market
belief with accumulated total quantity of $n$ outcomes. After the
initialization and trading enabled, initial crowd expectation probability
of all outcomes is equal to $P_{i}(0)=\frac{1}{n}$. At any time $t$,
with smoothening value $m\in(0.7,1]$, the consensus probability$P_{i}(t)$
can be calculated as 

$$
P_{i}(t)=\frac{S_{i}(t)^{m}}{\sum_{j=1}^{n}S_{j}(t)^{m}}.
$$
This reflects relative conviction weights expressed by cumulative
token holdings.

# Chapter 1 Introduction

## 1.1 Fundamental Concepts in Finance

1. **Definition 1 (Discrete time financial model)**

   1. At initial time 0, n assets with values $S^0=(S_1^0,...,S_n^0)'$

   2. At maturity time T: m scenarios
      $$
      S = 
      \begin{pmatrix}
      S^1_1 & S^1_2 & \cdots & S^1_n \\
      S^2_1 & S^2_2 & \cdots & S^2_n \\
      S^3_1 & S^3_2 & \cdots & S^3_n \\
      \vdots & \vdots & \ddots & \vdots \\
      S^m_1 & S^m_2 & \cdots & S^m_n
      \end{pmatrix}.
      $$

2. **Definition 2** **(Complete market)**

   1. Portfolio $\sum_{j=1}^n w_jS_j$
   2. Payoff vector / Payoff $F=(F^1, ...,F^m) \in \mathbb R^m$
   3. **Complete**: A market is complete $\Leftrightarrow  F \in \mathbb R^M, \exist w \in \mathbb R^n, F=Sw$

3. **Definition 3 (Arbitrage)**

   An arbitrage is a portfolio w that satisfies $w'S^0 \le 0 \text{ and } Sw>0 \text{ or } w'S<0 \text{ and }Sw \ge 0$

   Notations:

   - $Sw \ge 0$ means all entries nonnegative
   - $Sw>0$ means all entries nonnegative and at least one entry is positive

   - $Sw \gg 0$ means all entries are positive

4. **Remark 4 (No arbitrage)**

   no arbitrage opportunity exists for all w if $Sw>0 \Rightarrow w'S>0 \text{ and } Sw \ge 0 \Rightarrow w'S^0 \ge 0$

## 1.2 Principles of No Arbitrage Pricing

1. **Principle of no arbitrage pricing**: Find a portfolio $\sum_{j=1}^n w_j S_j$ s.t. its payoff matches F at every scenario at T

​	Steps:

​	1. (Replication): find a replicating portfolio w such that $F=Sw$

​	2. (Pricing): $F^0=w'S^0$

2. **Assumptions:**

   -  Assumption 6 (Linearly Independent Columns of S):  S has linearly independent columns.


   -  Assumption 7 Number of scenarios is the same as number of assets, i.e., m = n


3. **Theorem 8 (Replicating Portfolio)**

   Under assumption 6&7, for **any** given payoff vector F, the weight of *replicating portfolio* is given by $w=S^{-1}F$

4. **Corollary 9 (Pricing)**

   For any payoff F and asset structure $\{S^0, S\}$, the price is $F^0 ≜(S^0)'S^{−1}F$.

## 1.3 State price vector and risk neutral probabilities

1. **State price vector**
   - $F^0 ≜(S^0)'S^{−1}F=\psi'F=\sum_{j=1}^n \psi_j F^j$
   - Meaning of state price:
     - If $F_i = 1$ and $F_j = 0$ for $j \ne i$, then $F = (0,...,1,...,0)'$ represents 1 dollar at State i and $F^0 = ψ'F = ψ_i$ is the price
   
2. **Discount factor**: the sum $\bar \psi=\sum_{i=1}^m \psi_i$
3. **Risk Neutral Probabilities**: $\tilde \psi=\frac{\psi}{\bar \psi}$,
   - The price $F_0 = \bar ψ \sum_{i=1}^m ψ_i F_i$ is the discounted expected F under $\tilde ψ$
   - Meaning of risk neutral: $(S^0)'=\bar \psi \tilde \psi' S$, 表明 $S^0_i$ is the fair price of $(S_i^1,...,S_i^m)$ under $\tilde \psi$
4. **Proposition 11**: No arbitrage $\Leftrightarrow \psi \gg 0$
5. **Theorem 12**: $F^0=\psi'F=\bar\psi E_{\tilde \psi}(F)$

## 1.4 Binomial Model

1. **Definition 14 (Binomial model)**
   $$
   S^0=(1,s)', S=\begin{pmatrix} e^{rT} & su \\ e^{rT} & sd \end{pmatrix}
   $$

2. **Theorem 15**

   1. (Replicating Portfolio) $w = S^{-1}F = \left( \frac{F_d u - F_u d}{e^{rT} (u - d)} , \frac{F_u - F_d}{s (u - d)}\right)'$

   2. (Risk Neutral Probabilities)
      $$
      \psi = \left( (S^0)^{-1} S^{-1} \right)' = \frac{1}{e^{rT} (u - d)} \left( e^{rT} - d, u - e^{rT}  \right)'
      $$

      $$
      \bar{\psi} = \sum_{j=1}^{2} \psi_j = e^{-r^T}, \quad \tilde{\psi} = \left( \frac{e^{rT} - d}{u - d}, \frac{u - e^{rT} }{u - d} \right)' .
      $$

    3. (Pricing)
       $$
       F^0 = \psi' F = \frac{F_u (e^{rT}- d) + F_d (u - e^{rT})}{e^{rT} (u - d)}
       $$

    	4. (Arbitrage) arbitrage exists if $u>d\ge e^{rT}$ or $d<u\le e^{rT}$

## 1.5 Multi-period Binomial models

1. N-period Binomial Model

   - Market is observable at $0 = t_0 < t_1 < \cdots < t_N = T$, $t_i = i\delta$.

   - Each $[t_i, t_{i+1}]$: a binomial model with a bond and a stock.

   - At time \(0\): $(B_0, S_0) = (1, s)$,
   - At time $t_i$: 

$$
B_i = e^{r t_i}, \quad S_i = 
\begin{cases} 
S_{i-1} u & \text{if market goes up} \\ 
S_{i-1} d & \text{if market goes down} 
\end{cases}
$$

2. **Remark 17 (State Price Vector at each branch)**
   $$
   \psi' = (S^0)'S^{-1} =\frac{1}{e^{r\delta}(u-d)}(e^{r\delta}-d, u-e^{r\delta})=:(\psi_u, \psi_d)
   $$

3. **Definition 18 (Path)**

   The path $\omega_t=(Z_1, ..., Z_t)'$ is a t-dimensional vector specifying the evolution of the market up to time t

4. **Theorem 20**

   - State price vector $\Psi=(\Psi^1, ..., \Psi^{2^N})$, where $\Psi^j=\prod_{t=1}^N \left(\psi_u 1\{ Z_t^j=1 \}+\psi_d 1\{ Z_t^j=-1 \}\right)$

   - Price of F at t=0: $F^0=\sum_{j=1}^{2^N} \Psi^jF^j=E_{\Psi} (F)$

## 1.6 Extension to Continuous Time Model

1. Model:
   $$
   S_{k\delta}=S_{(k-1)\delta} \exp(\mu\delta+\sigma \sqrt\delta Z_k) \\
   S_t=S_0 \exp(\mu m \delta+\sigma m \delta \frac{2p-1}{\sqrt \delta}) +\sigma \sqrt{4\delta p (1-p)} \sum_{k=1}^m Y_k
   $$

2. Distribution of $S_t$

$$
S_t=S_0 \exp(\mu t+\sigma t \frac{2p-1}{\sqrt \delta}) +\sigma \sqrt{4 p (1-p)} \frac{\sum_{k=1}^m Y_k}{\sqrt n}
$$

3. **Functional CLT & Continuous Mapping Theorem**

   1. **Functional CentralLimit Theorem (FCLT)**

      - Suppose that $\{Y_k\} \overset{\text{iid}}{\sim} \text{mean 0 \& variance 1}$. 

      - Define **partial sum process** $S_Y(t)$ as:  $S_Y(t) \triangleq \sum_{k=1}^{[nt]} Y_k.$
        - A random function mapping from $t \in [0, \infty)$ to $\mathbb{R}$.
      - As $n \to \infty$,  $\frac{S_Y(t)}{\sqrt n} = \frac{\sum_{k=1}^{[nt]} Y_k}{\sqrt n} \overset{D}{\rightarrow} W_t$
        - $W_t$ is **Brownian Motion** (Wiener process), $W_t \sim N(0, t)$.  
        - $\overset{D}{\rightarrow}$ denotes **weak convergence** of stochastic processes.

   	2. **Continuous Mapping Theorem**
       - Suppose $X_n \overset{D}{\rightarrow} X$ and $f(.)$ is a continuous function, then $f(X_n) \overset{D}{\rightarrow} f(X)$

4. **Black-Scholes Model**

   - Model: $S_t=S_0 \exp(\mu t+\sigma t \frac{2p-1}{\sqrt \delta}) +\sigma \sqrt{4 p (1-p)} \frac{\sum_{k=1}^m Y_k}{\sqrt n}$

   - Limits: $p \rightarrow 1/2,\ \frac{2p-1}{\sqrt \delta} \rightarrow -\frac{1}{\sigma}(\mu+\frac{1}{2}\sigma^2-r), \frac{\sum_{k=1}^{[nt]} Y_k}{\sqrt n} \simeq W_t$

   - By FCLT and the continuous mapping theorem,
     $$
     S_t \overset{D}{\rightarrow} S_0 \exp\{ \mu t -\sigma t/\sigma (\mu+\frac{1}{2}\sigma^2-r)+\sigma W_t \} \\ =  S_0 \exp\{ (r-\frac{1}{2}\sigma^2)t+\sigma W_t \} 
     $$

5. **Theorem 21**

   If a financial derivative F has payoff $F_T=f(S_T)$, then the price $F^0$ is
   $$
   F^0=E_\psi(f(S_T))=e^{-rT} \int f(S_0 \exp\{(r-\frac{1}{2}\sigma^2)T+\sigma x\}) \phi_T(x) d x
   $$

6. **Example 22 (Black and Scholes Call Option Formula (1973))**

 - Price of European call option: $F^0=N(d_1)S_0-N(d_2)K e^{-rT}$
   - $d_1=\frac{[\ln(\frac{S_0}{K})+(r+\frac{\sigma^2}{2})T]}{\sigma\sqrt T}$
   - $d_2=d_1-\sigma \sqrt T$
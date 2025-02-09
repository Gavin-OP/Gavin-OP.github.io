# Chapter 3 Integration

## 3.1 Introduction

measure -> probability; integral -> expectation

Lebesgue measure defines integrals that **generalize** Riemann integrals

## 3.2 Riemann and Lebesgue Intervals

### 3.2.1 Riemann Integral

1. **Definition 1 (Step function)**
   - Step function is a function $f: [a,b] \rightarrow \mathbb R$ such that $f(x)=c_i$ if $x_{i-1} \le x < x_i$ where $a=x_0<x_1<...<x_n=b$
2. **Definition 2 (Riemann Integral)**
   - Partition: A finite set $P=\{a_0,a_1,...,a_n\}$ satisfying $a=a_0<a_1<a_2<...<a_n=b$ is a partition of [a, b]. 
   - let $\Delta a_i = a_i-a_{i-1}$ 
   - $M=\sup_{a_{i-1} \le x \le a_{i}} f(x)$ and $m=\inf_{a_{i-1} \le x \le a_i} f(x)$
   -  The upper and lower Riemann sums corresponding to the partition P are $U_R(P,f)=\sum_{i=1}^n M_i \Delta a_i$ and $L_R(P,f)=\sum_{i=1}^n m_i \Delta a_i$
   -  **If the supremum of $L_R(P,f)$ and the infimum of $U_R(P,f)$ are equal**, then the common value is called the **Riemann Integral** of the function f , $\int_a^b f(x) dx$

### 3.2.2 Non-Riemann Integrable function

1.  **Example 3 (Non-Riemann Integrable function)**
   - $f(x) = 1\{ x \in \mathbb Q[0,1]\}$
     - Any $(a_{i-1}, a_i)$ contains both rational and irrational numbers
     - Thus $M_i=1, m_i=0$ for any $i$ and any partition $P$
     - $\inf_P U_R(P,f) =1 \ne 0 = \sup_P L_R(P,f)$ and  Riemann Integral not exists

### 3.2.3 Lebesgue Integral

1. **Definition 4 (Simple function)**
   -  $f: [a,b] \rightarrow [0,\infty)$ is a simple function if its range is $\{a_1,..., a_n\}$: $f(x)=\sum_{i=1}^n a_i 1_{A_i(x)}$, where $A_i$s are pairwise disjoint and  $\cup_{i=1}^n A_i=[a,b]$
2. **Definition 5 (Lebesgue Integral)**
   -  Consider a partition $P=\{a_0,a_1,...,a_n\}$of the range of $f$,where $−\infty < a_0 < a_1 <...<a_n<\infty$. Let $A_i=[a_{i-1},a_i)$. Then the partition $P$ gives the upper and lower Lebesgue sums:
   - $U_\lambda (P,f)=\sum_{i=1}^n a_i \lambda(f^{-1} (A_i))$, $L_\lambda (P,f)=\sum_{i=1}^n a_{i-1} \lambda(f^{-1} (A_i))$
   -  If the **supremum** of $L_λ(P,f)$and the **infimum** of $U_λ(P,f)$ (taking over all possible partitions $P$ ) are equal, then the common value is called the **Lebesgue Integral** of the function f, denoted by $\int fdλ$.

### 3.2.4 Riemann Integral v.s. Lebesgue Integral

1. **Theorem 6 (Lebesgue Integral is a generalization of Riemann Integral)**
   - If $f : [a,b]→[0,∞)$ is Riemann integrable,then f is Lebesgue Integrable and the two integrals are the same.
   - Proof: Idea (not included in exams)
     - Riemann Integrable $\Rightarrow$ $\lim_{n→∞}L_R(P_n,f)=\lim_{n→∞}\sum^{N_n}_{i=1} m_i(x_{ni}−x_{n,i−1})=\sup_P L_R(P,f)$ for some partitions $\{P_n\}_{n≥1}$ 
     - Show that $L_R(P_n,f)≤L_λ(\tilde P_n,f)$ for the partition $\tilde P_n=\{a_1,...,a_{N_n}\}$,where $a_1<...<a_{N_n}$ are the sorted values of $m_1,...,m_{N_n}$. Thus, $\sup_p L_R(P,f)=\lim_{n→∞}L_R(P_n,f) \le \lim_{n→∞} L_λ(\tilde P_n,f) \le \sup_{\tilde P}L_λ(\tilde P,f)$
     - Similarly, $\inf_P U_R(P,f) \ge \inf_{\tilde P} U_\lambda (\tilde P, f)$
     - Thus, $\sup_p L_R(P,f) \le \sup_{\tilde P}L_λ(\tilde P,f) \le \inf_{\tilde P} U_\lambda (\tilde P, f) \le \inf_P U_R(P,f)$, but the 1st and the 4th terms are equal.
2.  **Example 7 (Lebesgue integral is more powerful than Riemann integral)**
   - $f(x) = 1\{ x \in \mathbb Q[0,1]\}$ is not Riemann integrable. 
   - Use Lebesgue integral: $\int f d \lambda =1*\lambda(\mathbb Q[0,1]) + 0* \lambda(\mathbb R \backslash \mathbb Q_{[0,1]})=0$
   - f is Lebesgue integrable
3. **Remark 8**
   - Lebesgue: partitioning the **range**: $a_i$ and $a_{i−1}$ converge to each other
   - Riemann: partitioning the **domain**: $M_i$ and $m_i$ may not converge
   - If f is Riemann integrable, then f is Lebesgue Integrable & the two integrals are the same. 
   - If f is Lebesgue integrable, then f may not be Riemann integrable.

## 3.3 Riemann and Lebesgue Intervals on the real line

### 3.3.1  Riemann Integrals on the real line

1. **Definition 9 (Improper Riemann integral)**

   - For a non-negative function $f: \mathbb{R} \rightarrow [0, \infty)$, the Riemann integral of $f$ over $\mathbb{R}$ is given by

   $$
   \int_{-\infty}^{\infty} f(x) \, dx = \lim_{a \to -\infty, b \to \infty} \int_{a}^{b} f(x) \, dx,
   $$

   whenever the double limit exists.

### 3.3.2 Lebesgue Integrals on the real line

1. Problem arises in Lebesgue integral if the domain of $f$ is unbounded

   - see Example 10

2. **Definition 11 (Lebesgue Integral for $f≥0$ on $\mathbb R$)**

   - Consider a non-negative function $f: \mathbb R \rightarrow [0, \infty)$. Define
   - $P=\{a_0,...,a_n\}$ of $[0,\infty); 0=a_0<a_1<...<a_n=\infty$
   - $A_i=[a_{i-1},a_i)$
   - **Lower Lebesgue sums** w.r.t P: $L_\lambda(P,f)=\sum_{i=1}^n a_{i-1} \lambda(f^{-1}(A_i))$
   - The **Lebesgue Integral** of the function f is defined as $\int_\mathbb R f d\lambda=\int f d \lambda = \sup_P L_{\lambda} (P,f)$

   - For any Lebesgue measurable set A, $\int_A f d \lambda = \int f1_A d \lambda$

3. **Definition12 (Lebesgue Integral for functions on $\mathbb R$)**
   - Consider a measurable function $f: \mathbb R \rightarrow \mathbb R$, define
     - positive part: $f^+=f 1_{\{f \ge 0\}}$
     - positive part: $f^-=-f 1_{\{f < 0\}}$
     - Both are non-negative measurable functions on $\mathbb R$
   - The Lebesgue Integral of the function f is defined as $\int f d \lambda =\int f^+ d \lambda - \int f^- d \lambda$

## 3.4 Properties of Lebesgue Integrals

1. **Lemma 13 **(get from the definition. will be used in proof of theorem 14)

   Consider a measurable function $f :R→[0,∞)$ on $(\mathbb R,\mathcal M,λ)$.

   - If $r$ is a simple function satisfying $r(x)≤f(x)$ for all $x∈\mathbb R$, then $\int r d\lambda \le \int f d \lambda$
   - There exists a sequence of simple functions $\{r_k\}_{k≥1}$ s.t.
     - $r_k(x) \le f(x)$ for all $x \in \mathbb R$
     - $\int f d \lambda=\lim_{k \rightarrow \infty} \int r_k d \lambda$
   - Fix$[a,b]$, there exists a sequence of simple functions $\{u_k\}_{k≥1}$ s.t.
     - $u_k(x) \ge f(x)$ for all $x \in \mathbb [a,b]$
     - $\int_{[a,b]} f d \lambda=\lim_{k \rightarrow} \infty \int_{[a,b]} r_k d \lambda$

2. **Theorem 14 (Properties of Lebesgue Integrals)** **不直接考數學證明，會考察idea。**

   Let $f,g$ be measurable functions on $\mathbb R$, and $a,b∈ \mathbb R$. Then,

   1. If $f(x) < g(x)$ for all $x \in \mathbb{R}$, then $\int f \, d\lambda \leq \int g \, d\lambda$ (monotonicity). 

      - For the case $f(x)\ge 0$, find the simple functions ${r_n}$ s.t.

        - $r_n(x) \le f(x) \le g(x)$ for all $x \in \mathbb R$
        - $\int f \, d\lambda = \lim_{n \rightarrow \infty} \int r_n \, d\lambda$
        - $\int r_n \, d\lambda \le \int g \, d\lambda$ take limits $\Rightarrow \int f \, d\lambda \leq \int g \, d\lambda$

      - For general f and g 

      - For general $f$ and $g$, $f \leq g$ implies $f^+ \leq g^+$ and $g^- \leq f^-$.

        - $\int f^+ \, d\lambda \leq \int g^+ \, d\lambda$

        - $\int g^- \, d\lambda \leq \int f^- \, d\lambda$

        - Therefore, $\int f \, d \lambda = \int f^+ \, d\lambda - \int f^- \, d\lambda \leq \int g^+ \, d\lambda - \int g^- \, d\lambda = \int g \, d\lambda.$

        Separately handle +ve and -ve parts $\Rightarrow$ focus on $f \geq 0$ and  $g \ge 0$.

   2. $\int af \, d\lambda=a \int f \, d\lambda$

      - Consider simple functions $r_n(x) = \sum_{i=1}^{N_n} a_{ni} 1_{B_{ni}}(x)$.

        $$
        a \int r_n \, d\lambda = a \sum_{i=1}^{N_n} a_{ni} \lambda(B_{ni}) = \sum_{i=1}^{N_n} a a_{ni} \lambda( B_{ni}) = \int a r_n \, d\lambda.
        $$

  - Find simple function $\{r_n\}$ such that
    - $r_n \leq f$   &   $\int f d \lambda=\lim_{n \to \infty} \int r_n \, d\lambda$.
    - $a \int r_n \, d\lambda=\int a r_n d\lambda \leq \int af \, d\lambda$.
    - $\Rightarrow a \int f d \lambda \le \int a f d \lambda$
  - Find simple function $\{s_n\}$ such that
    - $s_n \le af$  &  $\int a f d \lambda = \lim_{n \rightarrow \infty } \int s_n d \lambda$
    - $a^{-1} \int s_n d \lambda = \int a^{-1}s_n d \lambda \le \int f d \lambda$
    - $\int a f d \lambda \le a \int f d \lambda$
  - Idea: 欲證明相等，則證明兩個不等式。欲證明綫性關係，考慮simple functions的綫性特徵。用simple function的積分極限逼近f的積分。

   3. $\int (af + bg) \, d\lambda = a \int f \, d\lambda + b \int g \, d\lambda$ (linearity).  **(proof optional)**

   4.  $| \int f \, d\lambda | \leq \int |f| \, d\lambda$ 

      - Since $f=f^+-f^-$ and $|f|=f^++f^-$
      - $|\int f d \lambda|=|\int f^+-f^- d\lambda|=|\int f^+ d \lambda-\int f^- d \lambda| \le \int f^+ d \lambda+\int f^- d \lambda=\int |f| d \lambda$
      - Idea: 利用f的正負分解。

   5. If $\int_A f(x) \, d\lambda =\int_A g(x) \, d\lambda$ for all $a \in \mathcal{M}$, then \( f = g \) almost everywhere, i.e., $\lambda(x \in \mathbb{R}: f(x) \neq g(x)) = 0$ (**Interesting proof)**

      -  Consider $A_n=\{f(x)-g(x) > 1/n\}$, which is $\mathcal M$-measurable. Note that $\frac{1}{n} \lambda(A_n)=\int_{A_n} \frac{1}{n} \, d\lambda < \int_{A_n} f(x)-g(x) \, d\lambda = \int_{A_n} f(x) \, d\lambda-\int_{A_n} g(x) \, d\lambda=0$

      - Thus $\lambda(A_n)=\lambda(f(x)-g(x) > 1/n)=0$ for all $n \ge 1$

      - Similarly $\lambda(f(x)-g(x) < -1/n)=0$ for all $n \ge 1$

      - Putting together, we have 

      - $\lambda(f \neq g) = \lambda \left( \bigcup_{n=1}^{\infty} \left( \{ f(x) - g(x) > \frac{1}{n} \} \cup \{ f(x) - g(x) < -\frac{1}{n} \} \right) \right)$

        $\leq \sum_{n=1}^{\infty} \left( \lambda  \{ f(x) - g(x) > \frac{1}{n} \}  + \lambda\{ f(x) - g(x) < -\frac{1}{n} \} \right) = 0$

      - Idea: 注意這種用$\bigcup_{n=1}^\infty$ 表示不等式的形式。

   6. If $f \geq 0$, then the ***set function*** $M(A) = \int_A f \, d\lambda$ is a measure.

      - $ M(A) $ is a measure:

        1. $M(A) = \int_A f \, d\lambda \ge 0$ for all $A \in \mathcal{M}$ since $f$ is bounded below by the simple function $g = 0$, and $\int g \, d\lambda = 0$.

        2. $M(\emptyset) = 0$:
           $$
           0 \leq \int_{\emptyset} f \, d\lambda \leq \int_{\emptyset} \sup f \, d\lambda \leq (\sup f) \int_{\emptyset} \, d\lambda=(\sup f) \lambda(\emptyset) = 0.
           $$

        3. Countable additivity: If $ A_i \in \mathcal{M} $ are disjoint for $ i = 1, 2, \ldots $, then
           
           $M\left( \bigcup_{i=1}^{\infty} A_i \right) = \int f 1_{\cup_{i=1}^\infty A_i} \, d\lambda = \int \sum_{i=1}^\infty f 1_{A_i} \, d\lambda \\ =\sum_{i=1}^\infty \int f 1_{A_i} \, d\lambda= \sum_{i=1}^{\infty} M(A_i)$

      - Idea：用$\sup f$這個常數放縮f，起到可以提出的效果。

## 3.5 Lebesgue Integration and Expectation

### 3.5.1 Expectation of Discrete Random Variable

- Discrete random variable $X : Ω → X = {x_0,x_1,x_2,...}$ (WLOG: $x_0 < x_1 < ···)$

  - Induced Probability Space: $(\mathbb X, 2^{\mathbb X}, \mathbb P_X)$

    - $\mathbb P_X(\{x_i\})=p_i, \ \sum_{i=1}^\infty p_i=1$

  - Original Probability Space: $(\Omega, \sigma(X), \mathbb P)$

    - $\mathbb P(\{X=x_i\})=p_i, \ \sum_{i=1}^\infty p_i=1$

  - Expectation = Integral of X under probability measure $\mathbb P$

    $E(X)=\int_\Omega X \, d \mathbb P= \sum_{i=1}^\infty x_{i-1} \mathbb P(A_i) = \sum_{i=0}^\infty x_i \mathbb P(\{X=x_i \})$ where

    - Partition: $P=\{x_1,...,x_2\}$
    - $A_i=\{X=x_{i-1}\}=X^{-1}([x_{i-1},x_i))=X^{-1}(\{x_{i-1}\}),\  \bigcup_{i=1}^n A_i=\Omega$

### 3.5.2  Expectation of Arbitrary Random Variable

- Arbitrary random variable $X: \Omega \rightarrow \mathbb{R}$

  - Approximate X by discrete random variables $\underline X_p(\omega)=\sum_{i=1}^n x_{i-1} 1_{\{\omega \in A_i\}}$ where
    $A_i=X^{-1}([x_{i-1}, x_i))$ and $P=\{x_0, x_1,..,x_n \}$ partitions range of X

  - Lower $\mathbb P$-sums of X: $L_{\mathbb P}(P,X)=\sum_{i=1}^n x_{i-1} \mathbb P(A_i)$
  - The expectation is defined as $E(X)=\int_\Omega X(\omega) \mathbb P(d\omega) = \int_{\Omega} X d \mathbb P = \sup_P L_{\mathbb P} (P,X)$

### 3.5.3 $L^1$ and Expectation; $L^2$ and Variance

1. **Definition15 (R.V. in $\mathcal L^1$ (Integrable) and Expectation)**

   - $X: \Omega \rightarrow \mathbb R$ is integrable (or in $\mathcal L^1$) if $\int_{\Omega}|X| d\mathbb P < \infty$
   - If $X \in \mathcal L^1$, then expectation $E(X)=\int_{\Omega} X d\mathbb P$ exists
   - If $h: \mathbb R \rightarrow \mathbb R$ is Borel measurable and $\int_\Omega |h(X)| d\mathbb P < \infty$, then $E(h(X))=\int_\Omega h(X) d\mathbb P$

2. **Definition 16 (R.V. in $\mathcal L^2$ (Square-Integrable) and Variance)**

   - $X: \Omega \rightarrow \mathbb R$ is square-integrable (or in $\mathcal L^2$) if $\int_{\Omega}|X|^2 d\mathbb P < \infty$
   - If $X \in \mathcal L^2$, then the variance of X is $Var(X) = E()(X-E(X))^2)=\int_\Omega (X-E(X))^2 d\mathbb P$

3. **Remark 17** 

   1. For any $F \in \mathcal F$, the integral of X over F is $\int_F X d\mathbb P=\int_\Omega X 1_F d\mathbb P=\int_\Omega X(\omega) 1_{\{\omega \in F\}} \mathbb P(d\omega)$

   2.  Expectation can be expressed in the original or induced probability space

      $E(h(X))=\int_\Omega h(X) d \mathbb P =\int_\Omega h(X(\omega)) \mathbb P(d\omega)=\int_{\mathbb R} h(x) d \mathbb P_X(x)$

      
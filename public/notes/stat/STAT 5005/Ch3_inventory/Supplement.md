# Chapter 3. Supplement

## 1. Theorem 3.4.3.

### Message From You:

If $z_1,...,z_n.\;\; w_1,...,w_n$ are complex, and $|Z_i|\le 1$, $|w_i|\le 1$ for all $i$, then:
  $
  \left|\prod_{i=1}^nz_i-\prod_{i=1}^nw_i\right|\le \sum_{i=1}^n\big|z_i-w_i\big|
  $

### Message From ChatGPT:

- The inequality:

$$
\left|\prod_{i=1}^n z_i - \prod_{i=1}^n w_i\right| \le \sum_{i=1}^n |z_i - w_i|,
$$

- **Base Case: $ n = 1 $**

    For $ n = 1 $, the inequality becomes 

    $$
    |z_1 - w_1| \le |z_1 - w_1|,
    $$
    which is trivially true.

- **Inductive Step:**

    - Assume that the inequality holds for $ n = k $, i.e.,

    $$
    \left|\prod_{i=1}^k z_i - \prod_{i=1}^k w_i\right| \le \sum_{i=1}^k |z_i - w_i|.
    $$

    - We need to show it for $ n = k+1 $. Consider

    $$
    \prod_{i=1}^{k+1} z_i - \prod_{i=1}^{k+1} w_i = \left(\prod_{i=1}^k z_i \cdot z_{k+1}\right) - \left(\prod_{i=1}^k w_i \cdot w_{k+1}\right).
    $$

    - We can rewrite this as

    $$
    = \left(\prod_{i=1}^k z_i \cdot z_{k+1} - \prod_{i=1}^k z_i \cdot w_{k+1}\right) + \left(\prod_{i=1}^k z_i \cdot w_{k+1} - \prod_{i=1}^k w_i \cdot w_{k+1}\right).
    $$

    - Applying the triangle inequality, we have

    $$
    \left|\prod_{i=1}^{k+1} z_i - \prod_{i=1}^{k+1} w_i\right| \le \left|\prod_{i=1}^k z_i \cdot z_{k+1} - \prod_{i=1}^k z_i \cdot w_{k+1}\right| + \left|\prod_{i=1}^k z_i \cdot w_{k+1} - \prod_{i=1}^k w_i \cdot w_{k+1}\right|.
    $$

    - For the first term, factor out $\prod_{i=1}^k z_i$:

    $$
    = \left|\prod_{i=1}^k z_i\right| \cdot |z_{k+1} - w_{k+1}|.
    $$

    - Since $|z_i| \le 1$ for each $i$, it follows that $\left|\prod_{i=1}^k z_i\right| \le 1$, thus

    $$
    \left|\prod_{i=1}^k z_i \cdot z_{k+1} - \prod_{i=1}^k z_i \cdot w_{k+1}\right| \le |z_{k+1} - w_{k+1}|.
    $$

    - For the second term, factor out $w_{k+1}$:

    $$
    = |w_{k+1}| \cdot \left|\prod_{i=1}^k z_i - \prod_{i=1}^k w_i\right|.
    $$

    - Since $|w_{k+1}| \le 1$, it follows that

    $$
    \left|\prod_{i=1}^k z_i \cdot w_{k+1} - \prod_{i=1}^k w_i \cdot w_{k+1}\right| \le \left|\prod_{i=1}^k z_i - \prod_{i=1}^k w_i\right|.
    $$

    - By the inductive hypothesis, we have

    $$
    \left|\prod_{i=1}^k z_i - \prod_{i=1}^k w_i\right| \le \sum_{i=1}^k |z_i - w_i|.
    $$

    - Combining these, we get

    $$
    \left|\prod_{i=1}^{k+1} z_i - \prod_{i=1}^{k+1} w_i\right| \le |z_{k+1} - w_{k+1}| + \sum_{i=1}^k |z_i - w_i| = \sum_{i=1}^{k+1} |z_i - w_i|.
    $$

- Thus, by induction, the inequality holds for all $ n $.

### Message From You:

any name for this inequality?

### Message From ChatGPT:

This inequality is known as the **Triangle Inequality for Complex Numbers**, applied in a product form. It is sometimes referred to as the **Minkowski Inequality** for complex numbers in the context of products. It essentially extends the triangle inequality to products of complex numbers, showing how the difference between two products can be bounded by the sum of the differences of their factors.



## 2. About Taylor Expansion and Complex-valued function

- **Theorem 3.3.8.** (Property 6 for ch.f.) If $EX^2<\infty$, and $\varphi_X(t)=Ee^{itX}$, then $\varphi_X(t)=1+itE(X)-\frac{t^2}{2}E(X^2)+o(t^2)$ as $t\to0$. 

  **Proof:**
  $$
  \begin{align}
  \varphi_X(t)=Ee^{itX}&=E\left[1+itX+\frac{(itX)^2}2+R_2(itX) \right]\\
  &=1+itE(X)-\frac{t^2}2E(X^2)+E(R_2)\\
  \end{align}
  $$

  - Note that $|R_2|=\big|\frac{(itX)^3}{3!}+\frac{(itX)^4}{4!}+\cdots\big|\le \big|\frac{(itX)^3}{3!}\big|+\big|\frac{(itX)^4}{4!}\big|+\cdots=\frac{|tX|^3}{3!}+\frac{|tX|^4}{4!}+\cdots$, so we have:
    $$
    |R_2|\le C_1|tX|^3,\quad |R_2|\le |R_1|=\left|\frac{(itX)^2}2+R_2\right|\le C_2|tX|^2\\\Downarrow\\
    |R_2|\le C\min(|tX|^3,|tX|^2)\quad\text{for some constant }C>0
    $$

  - So $E|R_2|\le Ct^2E\left\{\min(|t||X|^3,|X|^2)\right\}$. Now that when $t\to0$, we know $\min(|t||X|^3+|X|^2)\to0$, then by DCT, we have:
    $$
    E|R_2|/t^2\le CE\left\{\min(|t||X|^3,|X|^2)\right\}\to C\cdot0=0
    $$

  - which means $E|R_2|/t^2=o(1)$, and thus $E|R_2|=o(t^2)$. 

- There are several points to be noted about Theorem 3.3.8

  - **When we say a complex-valued function $f(t)$ is $o(t^2)$ as $t\to0$, we mean its mod (which is real) $|f(t)|=o(t^2)$ as $t\to0$**. In this theorem, treat $R_2$ as the complex-valued function of $t$, so if we write the complex $R_2=o(t^2)$, we actually mean the mod $|R_2|=o(t^2)$, which is real-valued and all follows principles of small-$o$ notation

  - In the proof of CLT, where we expand the characteristic function of $\varphi_i(t)=Ee^{\frac{it}{\sqrt n}X_i}$ by theorem 3.3.8, we could replace $t$ with $\frac{t}{\sqrt n}$:
    $$
    \varphi_i(t/\sqrt n)=1+itE({X_i})/{\sqrt n}-\frac{t^2}{2n}E(X_i^2)+o(t^2/n)\quad as\;\; n\to\infty
    $$

    - **Note that the small-$o$ notation in Theorem 3.3.8 is based on the asymptotic sense of $t\to0$.**
    -  Here, if we want to insert $t/\sqrt n$ into the formula, we must ensure $t/\sqrt n\to0$ as a whole in some asymptotic way. It is obvious that if we fix $t\in\mathbb R$ (non-asymptotic) and let $n\to\infty$ (asymptotic), then the asymptotic feature $t/\sqrt n\to0$ is fulfilled. So we can insert $t/\sqrt n\to0$ into formula of theorem 3.3.8 and specify $o(t^2/n)$ is under domain of $n\to\infty$

  - Why $|R_2|\le C_1|tX|^3$: consider [Explicit form of Lagrange remainder](https://en.wikipedia.org/wiki/Taylor%27s_theorem#Explicit_formulas_for_the_remainder):  

    - Suppose $f:\mathbb R\to\mathbb R$ be $k+1$ differentiable on the open interval with $f^{(k)}$ continuous on the closed interval $[a,x]$. 

    - The Taylor expansion and remainder $R_k(x)$ is:
      $$
      f(x)=\sum_{m=0}^\infty\frac{f^{(m)}(a)}{m!}f(x-a)^m=\underbrace{\sum_{m=0}^k\frac{f^{(m)}(a)}{m!}f(x-a)^m}_{P_k(x)}+\underbrace{\sum_{m=k+1}^\infty\frac{f^{(m)}(a)}{m!}f(x-a)^m}_{R_k(x)}
      $$

    - Then there exists some $\xi\in(a,x)$ such that the remainder of Taylor expansion:

    $$
    R_k(x)=\frac{f^{(k+1)}(\xi)}{(k+1)!}(x-a)^{k+1}
    $$

    - For $e^x$ (so expand with $a=0$), we have:
      $$
      R_2(x)=\frac{e^\xi}{3!}x^3
      $$
      which is bounded by scaler of $x^3$

  - Now we know $|R_2|\le C_1|tX|^3$, and it is also obvious $|R_2|\le |R_1|\le C_2|tX|^2$ because of triangular relation for $|R_2|\le |R_1|$. 



## 3. About $\limsup$

# Limit superior comparison with bounds

### Message From You:

if $a_n\le b_n$ for all $n$, and $\lim b_n=b$, then does $\limsup\le b$?

### Message From ChatGPT:

Yes, if $ a_n \leq b_n $ for all $ n $, and $\lim_{n \to \infty} b_n = b$, then $\limsup_{n \to \infty} a_n \leq b$. Here's why:

1. **Definition of $\limsup$:** The limit superior (lim sup) of a sequence $(a_n)$ is defined as:
   $$
   \limsup_{n \to \infty} a_n = \lim_{n \to \infty} \sup_{k \geq n} a_k.
   $$
   This represents the largest value that the sequence $(a_n)$ approaches infinitely often.

2. **Behavior of $(b_n)$:** Since $\lim_{n \to \infty} b_n = b$, for any $\epsilon > 0$, there exists an $N$ such that for all $n \geq N$, $b_n < b + \epsilon$.

3. **Comparison of $(a_n)$ and $(b_n)$:** Since $a_n \leq b_n$ for all $n$, it follows that for $n \geq N$, $a_n \leq b_n < b + \epsilon$.

4. **Supremum bound:** For any $n \geq N$, the supremum of $(a_k)$ for $k \geq n$ is bounded by $(b_k)$ for $k \geq n$, i.e., $\sup_{k \geq n} a_k \leq \sup_{k \geq n} b_k \leq b + \epsilon$.

5. **Taking the limit:** As $n \to \infty$, $\sup_{k \geq n} a_k$ approaches $\limsup_{n \to \infty} a_n$. Therefore, $\limsup_{n \to \infty} a_n \leq b + \epsilon$.

6. **Conclusion:** Since $\epsilon > 0$ is arbitrary, we conclude that $\limsup_{n \to \infty} a_n \leq b$.

Thus, $\limsup_{n \to \infty} a_n \leq b$.



## About proof of $X_nY_n\overset{d}\to cX$ in Slutsky Theorem above

- When $c>0$:  set the sequence $\epsilon,\epsilon'$ which with bound of $0<\epsilon<c$, $\epsilon'>0$. then: 
  $$
  \begin{align}
  \{X_nY_n\leq x\}&=\big(\{X_nY_n\leq x\}\cap\{|Y_n-c|\ge \epsilon\}\big)\cup\big(\{X_nY_n\leq x\}\cap\{|Y_n-c|<\epsilon\}\big)\\
  &\subset\{|Y_n-c|\ge \epsilon\}\cup\{X_n\le x/(c-\epsilon)\}\\
  \{X_nY_n\le x\}\cap\{|Y_n-c|\ge\epsilon'\}&=\{X_nY_n\le x\}\cap\big(\{Y_n\ge c+\epsilon'\}\cup \{Y_n\le c-\epsilon'\}\big)\\
  &\supset\{X_nY_n\le x\}\cap \{Y_n\ge c+\epsilon'\}=\{X_n\le x/(c+\epsilon')\}\\&\Downarrow\\
  P(X_nY_n\leq x)&\le P(|Y_n-c|\ge \epsilon)+P(X_n\le x/(c-\epsilon))\to0+P(X\le x/(c-\epsilon))
  \\
  P(X_nY_n\le x)&\ge -P(|Y_n-c|\ge\epsilon')+P(X_n\le x/(c+\epsilon'))\to0+P(X\le x/(c+\epsilon'))\\&\Downarrow\\
  
  P(X\le x/(c+\epsilon'))\le \liminf_{n\to\infty}P(X_nY_n\le x)&\le \limsup_{n\to\infty}P(X_nY_n\leq x)\le P(X\leq x/(c-\epsilon))
  \end{align}
  $$

- When $c<0$: let $0<\epsilon<-c$, $\epsilon'>0$, then:
  $$
  \begin{align}
  \{X_nY_n\leq x\}\cap\{|Y_n-c|<\epsilon\}&\subset \{X_nY_n\leq x\}\cap\{Y_n<c+\epsilon<0\}\subset \{X_n\ge x/(c+\epsilon)\}\\&\Downarrow\\
  \{X_nY_n\leq x\}&=\big(\{X_nY_n\leq x\}\cap\{|Y_n-c|\ge \epsilon\}\big)\cup\big(\{X_nY_n\leq x\}\cap\{|Y_n-c|<\epsilon\}\big)\\
  &\subset\{|Y_n-c|\ge \epsilon\}\cup\boxed{\{X_n\ge x/(c+\epsilon)\}}\\
  \{X_nY_n\le x\}\cap\{|Y_n-c|\ge\epsilon'\}&=\{X_nY_n\le x\}\cap\big(\{Y_n\ge c+\epsilon'\}\cup \{Y_n\le c-\epsilon'\}\big)\\
  &\supset\{X_nY_n\le x\}\cap \boxed{\{Y_n\le c-\epsilon'\}}=\boxed{\{X_n\ge x/(c-\epsilon')\}}\\&\Downarrow\\
  P(X_nY_n\leq x)&\le P(|Y_n-c|\ge \epsilon)+P(X_n\ge x/(c+\epsilon))\to0+\boxed{P(X\ge x/(c+\epsilon))
  }\\
  P(X_nY_n\le x)&\ge -P(|Y_n-c|\ge\epsilon')+P(X_n\le x/(c-\epsilon'))\to0+\boxed{P(X\ge x/(c-\epsilon'))}\\&\Downarrow\\
  P(X\ge x/(c-\epsilon'))\le \liminf_{n\to\infty}P(X_nY_n\le x)&\le \limsup_{n\to\infty}P(X_nY_n\leq x)\le P(X\geq x/(c+\epsilon))\\&\Downarrow\\
  P(cX\le x)\le \liminf_{n\to\infty}P(X_nY_n\le x)&\le \limsup_{n\to\infty}P(X_nY_n\leq x)\le P(cX\leq c)
  \end{align}
  $$

- Note the when $c<0$, the operations should take these into account:

  - Direction of inequality would change when dividing $X_nY_n$ by $Y_n$ when on the set of $\{Y_n<c+\epsilon\}$ or on the set of $\{Y_n\le c-\epsilon'\}$, where $c+\epsilon<0$ and $c-\epsilon'<0$ when $0<\epsilon<-c$ and $\epsilon'>0$
  - We used $P(X_n\ge x/(c+\epsilon))\to P(X\ge x/(c+\epsilon))$ (or $\epsilon'$) above, which is equivalent to $P(X_n< \cdot)\to P(X<\cdot)$. Also, since we consider only continuous points of the d.f., it means the equality does not matter because $P(X<\cdot)=P(X\le\cdot)$



### **Application of Slutsky Theorem on iid CLT**

- Suppose $X_1,X_2,...$ i.i.d. with $EX_i=\mu$ and $Var(X_1)=\sigma^2$.

- By CLT, for $\overline X_n=\frac{S_n}{n}$, we have $T_n=\frac{\sqrt n(\bar X_n-\mu)}{\sigma^2}\overset d\to N(0,1)$. 

- If $\sigma$ is unknow, then let $C_n=\frac{\sigma_n^2}{\hat\sigma^2}$. Note that
  $$
  \hat\sigma^2_n=\frac1{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2=\frac1{n-1}\sum_{i=1}^nX_i^2-\frac{n}{n-1}\bar X_n^2
  $$

  - Note we can apply LLN (**Theorem 2.2.9.**) to $\frac{\sum_{i=1}^nX_i^2}n\to E(X_i^2)=\sigma^2+\mu^2$ in probability (thus also in distribution), and since $\frac{n}{n-1}\to1$ fore sure (thus also in probability), then apply Slutsky theorem, we know $\frac1{n-1}\sum_{i=1}^nX_i^2\to\sigma^2$ in distribution
  - For second part, we know $E\bar X_n=\mu,Var(\bar X_n)=\frac{\sigma^2}n$, so $E(\bar X^2_n)=\frac{\sigma^2}{n}+\mu^2\to\mu^2$ fore sure (thus also in distribution). And $\frac{n}{n-1}\to1$ fore sure (thus also in probability), so apply Slutsky theorem, we know $\frac{n}{n-1}\sum_{i=1}^n\bar X_i^2\to\mu^2$ in distribution
  - So $\hat\sigma^2_n\to\sigma^2$ in distribution, and thus in probability because $\sigma^2$ is a constant. Also, by definition check, we could also show $\frac1{\hat\sigma^2_n}\to\frac1{\sigma^2}$ and thus by Slutsky theorem, $C_n=\frac{\sigma_n^2}{\hat\sigma^2}\to 1$ in probability

- Now we have:
  $$
  C_n\overset{pr.}\to 1,\quad T_n\overset{d}\to N(0,\sigma^2)\\\Downarrow\\
  C_nT_n=\frac{\sqrt n(\bar X_n-\mu)}{\hat\sigma^2}\overset d\to N(0,1)\cdot 1=N(0,1)
  $$

- Note that this is a little bit messy when discussing about convergence for sure (by fore sure I mean it is actually a deterministic convergence, not in stochastic way), convergence in probability, and in distribution. However, if we use continuous mapping theorem, the process would be more neat.





### Variance Upper Bound

- Suppose a random variable $X$ fulfills $a\le X\le b$ almost surely, then [its variance has bound](https://math.stackexchange.com/questions/2789143/why-is-operatornamevarx%E2%89%A4b%E2%88%92a2-4-if-x-is-a-random-variable-with-values):
  $$
  Var(X)\le \frac{(a-b)^2}{4}
  $$

  - Let $Y=X-\frac{a+b}{2}$, then $Var(Y)=Var(X)$
  - We can show $|Y|\le \big|\frac{b-a}2\big|$: ([link](https://math.stackexchange.com/questions/2789143/why-is-operatornamevarx%E2%89%A4b%E2%88%92a2-4-if-x-is-a-random-variable-with-values))
    - $X\le b$ implies $Y=X-\frac{a+b}{2}\le b-\frac{a+b}{2}=\frac{b-a}2\le \big|\frac{b-a}2\big|$
    - $X\ge a$ implies $Y=X-\frac{a+b}{2}\ge a-\frac{a+b}{2}=\frac{a-b}2\ge -\big|\frac{b-a}2\big|$
    - Combine them together we have $|Y|\le \big|\frac{b-a}2\big|$





### Convergence a.s. and Continuous Function

## Message From ChatGPT:
To prove that if $X_n \to X$ almost surely and $f$ is continuous at $X(\omega)$ for almost every $\omega$, then $f(X_n) \to f(X)$ almost surely, we can proceed as follows:

1. **Definition of Almost Sure Convergence**: By the definition of almost sure convergence, $X_n \to X$ almost surely means that there exists a set $A \subseteq \Omega$ with $\mathbb{P}(A) = 1$ such that for every $\omega \in A$, $X_n(\omega) \to X(\omega)$.

2. **Continuity Assumption**: Assume $f$ is continuous at $X(\omega)$ for almost every $\omega$. This means there exists a set $B \subseteq \Omega$ with $\mathbb{P}(B) = 1$ such that for every $\omega \in B$, $f$ is continuous at $X(\omega)$.

3. **Intersection of Sets**: Consider the set $C = A \cap B$. Since both $A$ and $B$ have probability 1, their intersection $C$ also satisfies $\mathbb{P}(C) = 1$.

4. **Pointwise Convergence on $C$**: For every $\omega \in C$, we have:
   - $X_n(\omega) \to X(\omega)$ because $\omega \in A$.
   - $f$ is continuous at $X(\omega)$ because $\omega \in B$.

5. **Application of Continuity**: By the continuity of $f$ at $X(\omega)$, the convergence $X_n(\omega) \to X(\omega)$ implies that $f(X_n(\omega)) \to f(X(\omega))$.

6. **Conclusion**: Therefore, for every $\omega \in C$, $f(X_n(\omega)) \to f(X(\omega))$. Since $\mathbb{P}(C) = 1$, this shows that $f(X_n) \to f(X)$ almost surely.

This argument relies on the fact that continuity preserves limits, and the set where the convergence and continuity conditions both hold has full measure, ensuring almost sure convergence of $f(X_n)$ to $f(X)$.
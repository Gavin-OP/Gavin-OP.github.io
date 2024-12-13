# Chapter 2: Law of Large Numbers

[toc]

## 1. Independence

- **Probability Space Setup**

  - Raw form: $X:\Omega\to\mathbb R,E(X)=\int_\Omega XdP$
  
  - Functional form: $f:(\Omega,\mathcal F,\mu)\to\mathbb R, E_\mu(f)=\int_\Omega fd\mu$
  
  - Bivariate Probability Space example: $(\Omega_{1}\times \Omega_{2},\mathcal F_{1}\times \mathcal F_{2},\mu_{1}\times \mu_{2})$. Then $f:\Omega_1\times \Omega_2\to\mathbb R$
    - Expectation: $E(f)=\int_{\Omega_1}\int_{\Omega_2}f(\omega_1,\omega_2)d\mu_1(\omega_1)d\mu_2(\omega_2)$
    
    - Graph for joint probability measure for some event: let $\Omega_1,\Omega_1\subset\mathbb R$ , and $\mu_1=\mu_2$ be uniform, then for event $A$ of two independent sub-events (both intervals), the joint probability measure is the area like below:
    
      <img src="Ch2_inventory/bivariate.jpg" style="zoom:50%;" />  

- **Fubini's Theorem**: If $f\ge 0$, or $\int_\Omega |f|d\mu<\infty$, then:
  $$
  \int_{\Omega=\Omega_1\times\Omega_2} fd\mu=\int_{\Omega_2}\left(\int_{\Omega_1}f(x,y)d\mu_1(x)\right)d\mu_2(y)=\int_{\Omega_1}\left(\int_{\Omega_2}f(x,y)d\mu_2(y)\right)d\mu_1(x)
  $$

  - Note that $f\ge0$ is proposed by Tonelli, while finite integral is proposed by Fubini. Both conditions are sufficient for above iterated integration. Also, the key insight from Fubini theorem is when considering joint density integration, we can integrate one variable and then another. This insight is correct event when two random variables are correlated, and this provides a nice benckmark for us to discuss on relation between joint density and marginal density. 

  - **Fubini's Theorem for Infinite Series**: If $f(i,j)\ge 0$ or $\sum_{i=1}^\infty\sum_{j=1}^\infty f(i,j)<\infty$, then:
    $$
    \sum_{i=1}^\infty\sum_{j=1}^\infty f(i,j)=\sum_{j=1}^\infty\sum_{i=1}^\infty f(i,j)
    $$
    
  - **Lemma**: If $Y\ge0,p>0$, then:
    $$
    E(Y^p)=\int_0^\infty py^{p-1}P(Y>y)dy
    $$
    proof:
    $$
    \begin{align}
    E(Y^p):&=\int_\Omega Y^pdP:=\int_\Omega\left(\int_0^{Y} py^{p-1}dy\right)dP&\left(\text{see in this way: }Y^p(\omega)=\int_0^{Y(\omega)} py^{p-1}dy\right)\\
    &=\int_\Omega\left(\int_0^\infty py^{p-1}1_{(Y>y)}dy\right)dP&\text{(change upper bound with indicator function)}\\
    &=\int_0^\infty\int_\Omega py^{p-1}1_{(Y>y)}dPdy&\text{(Fubini's Theorem)}\\
    &=\int_0^\infty \left(py^{p-1}\cdot\int_\Omega 1_{(Y(\omega)>y)}dP(\omega)\right)dy&\text{(full form of iterated Integral)}\\
    &=\int_0^\infty py^{p-1} P(Y>y)dy
    \end{align}
    $$
    
    - [reference](https://mathweb.ucsd.edu/~pfitz/downloads/tailsum.pdf)

### 1.1 Definition of Independence

- **Definition 1: Independent Event**. Events $A_1,...,A_n$ are independent if:
  $$
  P(\cap_{i\in I}A_i)=\prod_{i\in I}P(A_i),\quad\forall\:I\subset\{1,\ldots,n\}
  $$
   or equivalently:
  $$
  P(B_1\cdots B_n)=P(B_1)\cdots P(B_n),\text{ where for each }i=1,...,n,\text{ we have either } B_i=A_i\text{ or }B_i=\Omega
  $$

  - We let $I\subset\{1,\ldots,n\}$ is to make sure **all the events are pairwise disjoint**
  - Either $B_i=\Omega$ means we can let some event $B_i$ ignored. E.g., $B_1=A_1,B_2=A_2,\;\;B_3,...,B_n=\Omega$ and thus $P(B_3)=\cdots=P(B_n)=1$, then we have $P(B_1B_2)=P(B_1)P(B_2)$, which **also ensure pairwise disjoint property.**

- **Definition 2: Independent Collections of Events**. collections of events $\mathcal A_1,...,\mathcal A_n$ are independent if:
  $$
  P(A_1\cap\cdots\cap A_n)=P(A_1)\times\cdots\times P(A_n),\quad\forall A_1,...,A_n\;\mathrm{ where~}A_i\in\mathcal{A}_i\mathrm{~or~}A_i=\Omega.
  $$

- **Definition 3: Independent $\sigma$-fields**: $\mathcal F_1,\mathcal F_1,...$ are pairwise disjoint if $\mathcal F_i$ is independent of $\mathcal F_j$ when $i\ne j$. Independent $\sigma$-fields can be defined as below (because **$\sigma$-fields are just collections of events**):  
  $$
  P(A_1\cap\cdots\cap A_n)=P(A_1)\times\cdots\times P(A_n),\quad\forall A_1,...,A_n\;\mathrm{ where~}A_i\in\mathcal{F}_i\quad(\Omega\in \mathcal F_i)
  $$

- **Definition 4: Independent Random Variable**: Some random variables $X_1,...,X_n$ defined on the same probability space $(\Omega,\mathcal F,P)$ are independent if $\sigma(X_1),...,\sigma(X_n)$ are independent. Alternative definitions:

  - $P[X_1^{-1}(B_1)\cap \cdots\cap X_n^{-1}(B_n)]=P[X_1^{-1}(B_1)]\cdots P[X_n^{-1}(B_n)],\forall B_1,...,B_n\in\mathcal B$
  - $P(X_1\le x_1,...,X_n\le x_n)=\Pi_{i=1}^n P(X_i\le x_i),\forall x_i\in\mathbb R$.
  
- **Definition 5: Independence under Infinite**: An infinite collection of objects ($\sigma$-fields, random variables, or sets) is said to be independent if every finite subcollection is independent. So this definition extend all above definitions about independence among the collection of finite objects to the collection of infinite objects.



### 1.2 Properties

- **Theorem 1**. If $\mathcal A_1,...,A_n$ are independent, and each $\mathcal A_i$ is a $\pi$-system, then $\sigma(\mathcal A_1),...,\sigma(\mathcal A_n)$ are independent. Proof:

  - Only need to show:
    $$
    P(B_1\cap\cdots\cap B_n)=P(B_1)\times\cdots\times P(B_n),\quad\forall\:B_i\in\sigma(\mathcal{A}_i)
    $$

  - We consider define a system about the range of $B_1$ below, in which all other $B_i\in\mathcal A_i$ or $B_i=\Omega$ for $i=2,...,n$:
    $$
    \mathcal{L}_1:=\{B_1\in\sigma(\mathcal{A}_1):P(B_1\cap\cdots\cap B_n)=P(B_1)\times\cdots\times P(B_n)\}.
    $$

  - clearly, $\mathcal A_1\subset \mathcal L_1$ by condition that $\mathcal A_1,...,A_n$ are independent. Also, $\mathcal L_1$ is a $\lambda$-system because:

    - $\Omega\in\mathcal L_1$ by condition of independence. 

    - If $A,B\in\mathcal L_1,\;\;A\subset B$, then:
      $$
      \underbrace{(B-A) \cap B_2 \cap \cdots \cap B_n}_{(1)} = 
      \underbrace{(B \cap B_2 \cap \cdots \cap B_n)}_{(2)} - 
      \underbrace{(A \cap B_2 \cap \cdots \cap B_n)}_{(3)}
      $$
      

      Since $(1)$ and $(2)$ are disjoint sets, then $P(2)=P(1)+P(3)$, so:
      $$
      \begin{align}
      P[(B-A)\cap B_2\cap\cdots\cap B_n]&=P(B\cap B_2\cap\cdots\cap B_n)-P(A\cap B_2\cap\cdots\cap B_n)\\
      &=P(B)\times P(B_2\cap\cdots\cap B_n)-P(A)\times P(B_2\cap\cdots\cap B_n)\\
      &=[P(B)-P(A)]P(B_2\cap\cdots\cap B_n)\\
      &=P(B-A)P(B_2\cap\cdots\cap B_n)=P(B-A)\times P(B_2)\times\cdots\times P(B_n)
      \end{align}
      $$
      so $B-A\in\mathcal L_1$

    - Let $A_k\in\mathcal L_1$ and $A_k\uparrow A$, then $(A_k\cap F)\uparrow(A\cap F)$, then:
      $$
      P(A\cap B_2\cap\cdots\cap B_n)=\lim_k P(A_k\cap B_2\cap\cdots\cap B_n)\\=\lim_k P(A_k)\times P(B_2)\cdots\times P(B_n)=P(A)\times P(B_2)\cdots\times P(B_n)
      $$

  - Since $\mathcal A_1$ is a $\pi$-system, $\mathcal L_1$ is a $\lambda$-system, and $\mathcal A_1\subset\mathcal L_1$, then with $\lambda$-$\pi$ theorem, we have $\sigma(\mathcal A_1)\subset \mathcal L_1$

    - It implies $\forall B_1\in\sigma(\mathcal A_1)$, we have $P(B_1\cap\cdots\cap B_n)=P(B_1)\times\cdots\times P(B_n)$, where $B_2,...,B_n$ could be any events in  $\mathcal A_2,...,\mathcal A_n$
    - Here we therefore knows $\sigma(\mathcal A_1),\mathcal A_2,...,\mathcal A_n$ are independent
    - Construct $\mathcal{L}_2:=\{B_2\in\sigma(\mathcal{A}_2):P(B_1\cap\cdots\cap B_n)=P(B_1)\times\cdots\times P(B_n)\}$, where $B_1\in\sigma(\mathcal A_i)$, $B_i=A_i$ or $B_i=\Omega$ for $i=3,...,n$. Then we can prove $\sigma(\mathcal A_1),\sigma(\mathcal A_2),...,\mathcal A_n$ are independent. Iterate this process and eventually we get all $\sigma(\mathcal A_i)$ are independent

- **Exercise 1.3.1**. Show that if $\mathcal A$ generates $\mathcal S$ (i.e. $\mathcal S=\sigma(\mathcal A)$), then $X^{-1}(\mathcal{A})\equiv\{\{X\in A\}:A\in\mathcal{A}\}$ generates $\sigma(X)=\{\{X\in B\}:B\in\mathcal S\}$. 

  We need to prove:
  $$
  \sigma(X^{-1}(\mathcal A))=\sigma(X)
  $$

  - $\subset$: note that $X^{-1}(\mathcal A)\subset\sigma(X)$ so both $\sigma(X^{-1}(\mathcal A))$ and $\sigma(X)$ are $\sigma$-fields containing $X^{-1}(\mathcal A)$ (with the former one being the smallest $\sigma$-field containing it). So $\sigma(X^{-1}(\mathcal A))\subset\sigma(X)$

  - $\supset$: for any $\sigma$-feild $\mathcal D$ on $\Omega$, we construct:
    $$
    \mathcal{T}\:=\:\{B\:\in\:\mathcal{S}\::\:\{X\:\in\:B\}\:\in\:\mathcal{D}\}
    $$

    - Given properties of measurable function, we know $\mathcal T$ is also a $\sigma$-field on the sample space of $X$ (say it is $S$). 
    - Let $\mathcal D=\sigma(X^{-1}(\mathcal A))$, then $\mathcal T$ is a $\sigma$-field containing $\mathcal A$ (think like this: any element $B$ in $\mathcal A$ are in the domain of $\mathcal T$, which is $B\in \mathcal S$; the event $\{X\:\in\:B\}$ is also in $\mathcal D=\sigma(X^{-1}(\mathcal A))$). 
    - Since $\mathcal S=\sigma(\mathcal A)$ is smallest $\sigma$-field containing $\mathcal A$, then $\mathcal S\subset \mathcal T$, which by definition of $\mathcal T$ means $\forall B\in \mathcal S$, we have $\{X\:\in\:B\}\in\sigma(X^{-1}(\mathcal A))$. This further means $\forall B\in \sigma(X)$, this $B\in\sigma(X^{-1}(\mathcal A))$ too. This proves the $\supset$ claim

- **Theorem 2**: Random variables $X_1,...,X_n$ are independent $\Leftrightarrow$ $P(X_1\le x_1,...,X_n\le x_n)=\Pi_{i=1}^n P(X_i\le x_i),\forall x_i\in\mathbb R$

  - $\Rightarrow:$ by above definition

  - $\Leftarrow:$ Let $\mathcal A_i=\{\{X_i\le x_i\}:x_i\in\mathbb (-\infty,\infty]\}$. 

    - Note that this notation is equivalent to $\mathcal A_i=\{\{\omega: X_i(\omega)\le x_i\}:x_i\in\mathbb (-\infty,\infty]\}$. The notation could also be understood as: $\mathcal A_i=\{X_i^{-1}((-\infty,x_i]):x_i\in\mathbb (-\infty,\infty]\}$, where $B=(-\infty,x_i]$

    - $\mathcal A_i$ is a $\pi$--system because for all event $A=\{X_i\le x\}\in\mathcal A_i$ and $B=\{X_i\le y\}\in\mathcal A_i$, we have $A\cap B=\{X_i\le x,X_i\le y\}:=\{X_i\le (x\and y)\}\in\mathcal A_i$. 
    - Since $\mathcal A_1,...,\mathcal A_n$ and all of them are $\pi$-system, then with Theorem 1, we have $\sigma(\mathcal A_1),...,\sigma(\mathcal A_n)$ are independent too.
    - It could be proved that $\sigma(\mathcal A_i)=\sigma(X_i)$ from exercise $1.3.1$ above (because $\mathcal A_i$ generates $\mathcal \sigma(\mathcal A)$), then we know equivalently, $\sigma(X_1),...,\sigma(X_n)$ are independent, so the random variables $X_1,...,X_n$ are independent by Definition 4.

- **Corollary 1**: Suppose $(X_1,...,X_n)$ has density $f(x_1,...,x_n)$ (so $\int_{\mathbb R^n}fd\boldsymbol{x}=1$) and the density could be expressed as $f(x_1,\ldots,x_n)=g_1(x_1)\times\cdots\times g_n(x_n)$, where $g_i\ge 0$ is measurable. Then, $X_1,...,X_n$ are independent. Proof:

  - By Theorem 2, it suffices to prove:
    $$
    P(X_1~\leq~z_1,\ldots,X_n~\leq~z_n)~=\Pi_{i=1}^nP(X_i\:\leq\:z_i)
    $$

  - Let $c_i=\int_{-\infty}^zg_i(x_i)dx_i,~i=1,...,n$. Then with density definition, we have: $LHS=1$, $RHS=c_1c_2\cdots c_n$ from below, thus $c_1c_2\cdots c_n=1$
    $$
    \begin{align}
    \int_{\mathbb R^n}fd\boldsymbol{x}:&=\int_{\mathbb R}\int_{\mathbb R}\dots \int_{\mathbb R}g_1(x_1)\times\cdots \times g_n(x_n)dx_1dx_2\dots dx_n\\
    \end{align}
    $$

  - Using Fubini's theorem, we can show:
    $$
    \begin{align}
    P(X_i\leq z_i)&=P(\{-\infty<X_i\leq z_i\}\cap\{-\infty<X_k<\infty:k\ne i\})\\
    &=\int_{\mathbb R}g_i(x_i)\left(\int_{\mathbb R^{n-1}}g_1(x_1)\times\cdots\times g_{i-1}(x_{i-1})\times g_{i+1}(x_{i+1})\times\cdots\times g_n(x_n)d(\boldsymbol{x}\backslash x_i)\dots \right)dx_i\\
    &=(c_1\times\cdots\times c_{i-1}\times c_{i+1}\times\cdots\times c_n)\int_{-\infty}^{z_1}g_1(x_1)dx_1\\
    &=\frac1{c_i}\int_{-\infty}^{z_i}g_1(x_1)dx_1
    \end{align}
    $$

  - The key way to use Fubini theorem is to subtract integration on $g(x_i)$ to most outer layer. Then we have:
    $$
    \begin{align}
    P(X_1\leq z_1,\ldots,X_n\leq z_n)&=\int_{-\infty}^{z_1}\int_{-\infty}^{z_2}\dots \int_{-\infty}^{z_n} g_1(x_1)\times\cdots \times g_n(x_n)dx_1dx_2\dots dx_n\\
    &=\int_{-\infty}^{z_1}g_1(x_1)\int_{-\infty}^{z_2}g_2(x_2)\dots\left(\int_{-\infty}^{z_n} g_n(x_n)dx_n\right)dx_{n-1}\dots dx_1\\
    &=\left(\int_{-\infty}^{z_1}g_1(x_1)dx_1\right)\times\dots\times\left(\int_{-\infty}^{z_n}g_n(x_n)dx_n\right)\\
    &=\left(\frac{1}{c_1}\int_{-\infty}^{z_1}g_1(x_1)dx_1\right)\dots\left(\frac{1}{c_n}\int_{-\infty}^{z_n}g_n(x_n)dx_n\right)\\&=\prod_{i=1}^nP(X_i\leq z_i)
    \end{align}
    $$
    QED.

- **Corollary 2**: Suppose $X_1,...,X_n$ are discrete random variables. Then $X_1,...,X_n$ are independent if and only if:
  $$
  P(X_1=x_1,\ldots,X_n=x_n)=\prod_{i=1}^nP(X_i=x_i),\quad\text{for all possible values }x_i
  $$

  - $\Rightarrow$: by Definition 4.
  
  - $\Leftarrow$: Let $\mathcal{A}_i=\{X_i^{-1}(x_i):x_i\in S_i\}\cup\{\emptyset,\Omega\}$, and let $I=\{n_1,\ldots,n_k\}\subset\{1,\ldots,n\}$ and $J=\{m_1,\ldots,m_{n-k}\}=\{1,\ldots,n\}\setminus I$.
    - We check independence of $\mathcal A_i$:
      $$
      \begin{align}
      P(X_{n_1}=x_{n_1},\cdots,X_{n_k}=x_{n_k})&=\sum_{x_{m_1}\in S_{m_1}}\dots\sum_{x_{m_{n-k}}\in S_{m_{n-k}}}P(X_1=x_1,\cdots,X_n=x_n)=\prod_{i\in I}P(X_i=x_i)\\
      \end{align}
      $$
    
      $$
      \text{(think of the the below example, where }n = 4,\;I=\{1,2\},\;J=\{3,4\}:\\
      \left(\begin{align}
      P(X_1=x_1,X_2=x_2)&=\sum_{x_3\in S_{3}}\sum_{x_{4}\in S_{4}}P(X_1=x_1,X_2=x_2,X_3=x_3,X_4=x_4)\\
      \\&=\sum_{x_3\in S_{3}}P(X_1=x_1)P(X_2=x_2)P(X_3=x_3)\cdot\sum_{x_{4}\in S_{4}}P(X_4=x_4)&\text{(condition of the corollary)}\\
      &=\sum_{x_3\in S_{3}}P(X_1=x_1)P(X_2=x_2)P(X_3=x_3)\cdot 1\\
      &=\sum_{x_3\in S_{3}}P(X_1=x_1)P(X_2=x_2)
      \end{align}\right)
      $$
    
    - So by Definition 2, we know collection of sets $\mathcal A_1,...,\mathcal A_n$ are independent. Given Theorem 1, $\sigma(\mathcal A_1),...,\sigma(\mathcal A_n)$ are also independent because ($\mathcal A_i$) is $\pi$-system
    
    - Suppose $X_i$ is defined on $\sigma$-field generated by $\mathcal A_i$. Then with above Exercise 1.3.1, we have $\sigma(\mathcal A_i)=\sigma(X_i)$. So $\sigma(X_1),...,\sigma(X_n)$ are also independent, which proves independence of random variables $X_1,...,X_n$
  
- **Theorem 3**. If $X_1,...,X_n$ are independent and $I\in\{1,2,...,n\}$, then $\sigma(X_i,i\in I)$ and $\sigma(X_j,j\in I^c)$ are independent. Proof:

  - The two $\sigma$-fields are defined as:
    $$
    \sigma(X_i:i\in I)=\sigma(\{\cap_{i\in I}A_i:A_i\in\sigma(X_i)\})\\
    \sigma(X_j:j\in I^c)=\sigma(\{\cap_{j\in I^c}B_j:B_j\in\sigma(X_j)\}).
    $$

  - Note that the two inner sets are $\{\cap_{i\in I}A_i:A_i\in\sigma(X_i)\}$ and $\{\cap_{j\in I^c}B_j:B_j\in\sigma(X_j)\}$ are both $\pi$-systems. This could be verified:

    - suppose two events $\cap_{i\in I}A_{1i},\;\cap_{i\in I}A_{2i}\;\in\;\{\cap_{i\in I}A_i:A_i\in\sigma(X_i)\}$, then  $(\cap_{i\in I}A_{1i})\;\cap\;(\cap_{i\in I}A_{2i})=\cap_{i\in I}(A_{1i}\cap A_{2i})$. 
    - Since $(A_{1i}\cap A_{2i})\in\sigma(X_i)$, we know:

    $$
    (\cap_{i\in I}A_{1i})\;\cap\;(\cap_{i\in I}A_{2i})\in \{\cap_{i\in I}A_i:A_i\in\sigma(X_i)\}
    $$

  - Now we check whether the two collection of events $\{\cap_{i\in I}A_i:A_i\in\sigma(X_i)\}$ and $\{\cap_{j\in I^c}B_j:B_j\in\sigma(X_j)\}$ are independent. By Definition 2, we just check whether all $\cap_{i\in I}A_i$ and $\cap_{j\in I^c}B_j$ in the two collections of sets are independent:
    $$
    \begin{align}
    P((\cap_{i\in I}A_i)\cap(\cap_{j\in I^c}B_j))&=\prod_{i\in I}P(A_i)\times\prod_{j\in I^c}P(B_j)&\text{(because independent r.v.)}\\
    &=P(\cap_{i\in I}A_i)\times P(\cap_{i\in I^c}B_j)
    \end{align}
    $$

  - By Theorem 1, we know the above two $\sigma$-fields are also independent.

  - **Corollary 3**: given same above conditions, we know $g(X_i,i\in I)$ and $h(X_j,j\in I^c)$ are independent if $g,h$ are measurable functions. This is because we already knows $\sigma(X_i,i\in I)$ and $\sigma(X_j,j\in I^c)$ are independent and from Exercise 1.3.1, we know $\sigma(X_i,i\in I)=\sigma(g),\sigma(X_j,j\in I^c)=\sigma(h)$, so $g,h$ as two random variables are also independent

- **Theorem 4**. Kolmogorov’s 0-1 Law. Suppose $X_1,...,X_n$ are independent. Define tail $\sigma$-field as:
  $$
  \mathcal{T}=\cap_{n=1}^\infty\sigma(X_n,X_{n+1},\ldots)
  $$
  Then $P(A)=0$ or $P(A)=1$ for any $A\in\mathcal T$. 

  - Example of tail event: the two event below is in tail $\sigma$-field $\mathcal{T}$:
    $$
    A=\left\{\lim_{N\to\infty}\frac{X_1+\cdots+X_N}N<\infty\right\}\\
    B=\left\{\lim_{N\to\infty}\frac{X_1+\cdots+X_N}N=a\right\}
    $$

    - [Understand like this](https://math.stackexchange.com/questions/3128310/tail-event-example): first the events could be seen as (assume $\forall i:X_i<\infty$):
      $$
      A=\left\{(\omega_1,\omega_2,...):\lim_{N\to\infty}\frac{X_1+\cdots+X_N}N<\infty\right\}\\
      B=\left\{(\omega_1,\omega_2,...):\lim_{N\to\infty}\frac{X_1+\cdots+X_N}N=a\right\}
      $$
      
    - $A\in\sigma(X_1,X_2...,)$ because it is event formed by $(\omega_1,\omega_2,...)$ that make the sample mean limit exist. $A$ also in $\sigma(X_{n+1},X_{n+2},...),\;n\ge 1$ because (note that below random variable $X_i(\omega_i)$ is written in short form of $X_i$):
      $$
      A=\left\{(\omega_1,\omega_2,...):\lim_{N\to\infty}\frac{X_1+\cdots+X_N}N<\infty\right\}\\
      =\left\{(\omega_1,\omega_2,...):\lim_{N\to\infty}\frac{X_1+\cdots+X_n}N+\frac{X_{n+1}+\cdots+X_N}N<\infty\right\}\\
      =\left\{(\omega_1,\omega_2,...):0+\lim_{N\to\infty}\frac{X_{n+1}+\cdots+X_N}N<\infty\right\}\\
      =\left\{(\omega_{n+1},\omega_{n+2},...):\lim_{N\to\infty}\frac{X_{n+1}+\cdots+X_N}N<\infty\right\}
      $$
    
    - So event $A$ is also formed by $(\omega_1,\omega_2,...)$ that make the limit exist. Since $A$ is in every intersected $\sigma$-fields by tail $\sigma$-field definition, we know $A$ is a tail event. In plain text, for the sample mean from a sequence of random variables, whether its limit exists is determined by asymptotic  random variables in the sequence. Similar for B.
    
    **Proof as below:**
    
  - **Important claims (*)**:  if $\mathcal F$ is a $\sigma$-field, then $\sigma(\mathcal F)=\mathcal F$. The claims holds because: since $\sigma(\mathcal F)$ is to find smallest $\sigma$-field contains $\mathcal F$, and $\mathcal F$ is already a $\sigma$-fields, so the smallest $\sigma$-field containing $\mathcal F$ is exactly $\mathcal F$ itself.
  
  - Fact: If a collection of event is independent of itself, then for any event $A$ in this collection, we have $P(A)=0$ or $P(A)=1$
  
  - Step 1: show $\sigma(X_1,...,X_j)$ is independent of $\sigma(X_{j+1},X_{j+2},...)$. 
  
    - We can write $\sigma(X_{j+1},X_{j+2},\ldots)=\sigma(\cup_{m=1}^{\infty}\sigma(X_{j+1},\ldots,X_{j+m}))$. 
  
    - Note that $\cup_{m=1}^{\infty}\sigma(X_{j+1},\ldots,X_{j+m})$ is $\pi$-system because if $A\in\sigma(X_{j+1},\ldots,X_{j+j_1}),\;B\in\sigma(X_{j+1},\ldots,X_{j+j_2}),\;j_1\le j_2$, then we have $A\cap B\in \sigma(X_{j+1},\ldots,X_{j+j_2})$, which is still in $\cup_{m=1}^{\infty}\sigma(X_{j+1},\ldots,X_{j+m})$
  
    - $\sigma(X_1,...,X_j)$ is also a $\pi$-system because it is $\sigma$-algebra. Also, $\sigma(X_1,...,X_j)$ and $\cup_{m=1}^{\infty}\sigma(X_{j+1},\ldots,X_{j+m})$ is independent, which equivalently means $\sigma(X_1,...,X_j)$ independent of $\sigma(X_{j+1},...,X_{j+m})$ for all $m\ge 1$. By Theorem 3, we know it is correct
    - Since $\sigma(X_1,...,X_j)$ and $\cup_{m=1}^{\infty}\sigma(X_{j+1},\ldots,X_{j+m})$ is independent, then by Theorem 1, we have $\sigma(X_1,...,X_j)=\sigma\big(\sigma(X_1,...,X_j)\big)$ and $\sigma(X_{j+1},X_{j+2},\ldots)=\sigma(\cup_{m=1}^{\infty}\sigma(X_{j+1},\ldots,X_{j+m}))$ are independent
  
  - Step 2: show $\sigma(X_1,X_2,...)$ and $\mathcal{T}=\cap_{n=1}^\infty\sigma(X_n,X_{n+1},\ldots)$ are independent.
  
    - We can write $\sigma(X_1,X_2,...)=\sigma\big(\cup_{j=1}^\infty \sigma(X_1,...,X_j)\big)$
    - With Step 1, we have $\sigma(X_1,...,X_j)$ independent of $\sigma(X_{j+1},X_{j+2},\ldots)$ for any $j\ge 1$
    - Since $\mathcal T\sub \sigma(X_{j+1},X_{j+2},...)$ for all $j\ge 1$, then independence between $\sigma(X_1,...,X_j)$ and $\sigma(X_{j+1},X_{j+2},\ldots)$ implies $\mathcal T$ is independent of $\sigma(X_1,...,X_j)$ for any $j\ge 1$, which further means $\mathcal T$ is independent of $\cup_{j=1}^\infty \sigma(X_1,...,X_j)$. 
    - By same trick, we can verify $\mathcal T$ and $\cup_{j=1}^\infty \sigma(X_1,...,X_j)$ are both $\pi$-system, so $\sigma(\mathcal T)=\mathcal T$ and $\sigma(X_1,X_2,...)=\sigma\big(\cup_{j=1}^\infty \sigma(X_1,...,X_j)\big)$ are also independent by Theorem 1.
  
  - Step 3:

    - Because of Step 2, we know that $\forall A\in\mathcal T$ is independent of all events in $\sigma(X_1,X_2,...)$. 
    - And since $\mathcal T\subset \sigma(X_1,X_2,...)$, we know $\forall A\in\mathcal T$, it is also the case that $A\in \sigma(X_1,X_2,...)$. 
    - So $A$ is independent of itself $\forall A\in\mathcal T$, which means $\mathcal T$ is independent of itself
  - So $P(A)\in\{0,1\}$ for any $A\in\mathcal T$
  
- **Theorem 5**. If $X,Y$ are independent random variables on $(\Omega,\mathcal F, P)$ with $E|X|,E|Y|<\infty$ or $X,Y\ge 0$, then:
  $$
  E(XY)=E(X)E(Y)
  $$

  - Case 1: indicator random variable. when $X=1_A,Y=1_B$ 
    $$
    E(XY)=E(1_{(A\cap B)})=P(A\cap B)= P(A)P(B)=E(X)E(Y)
    $$
    note that $P(A\cap B)= P(A)P(B)$ is because $A=X^{-1}(1),B^{-1}(1)$

  - Case 2: simple random variable. $X\:=\:\sum_{i=1}^{n}a_{i}1_{A_{i}},\:Y\:=\:\sum_{j=1}^{m}b_{j}1_{B_{j}}$, where $a_1,...,a_n$ are disjoint, $b_1,...,b_m$ are disjoint. Then $X,Y$ are independent implies $P(A_iB_j)=P(A_i)P(B_j)$ for any $i,j$. Then we have:
    $$
    \begin{aligned}
    E(XY)=E\left[\sum_{i=1}^n\sum_{j=1}^ma_ib_j1_{A\cap B}\right]=\sum_{i=1}^n\sum_{j=1}^ma_ib_jP(A_i\cap B_j)=\sum_{i=1}^n\sum_{j=1}^ma_ib_jP(A_i)P(B_j)=E(X)E(Y)
    \end{aligned}
    $$

  - Case 3: nonnegative random variable. When $X,Y\ge 0$, choose a sequence of simple random variables $X_n\uparrow X$ (we can use $X_M^{(l)}$ as $X_M$ for some $n=M$). Also choose some simple random variables $Y_n\uparrow Y$. Case two implies $E(X_nY_n)=E(X_n)E(Y_n)$, then:
    $$
    E(XY)=\lim_{n\to\infty}E(X_nY_n)=\lim_{n\to\infty}E(X_n)E(Y_n)=E(X)E(Y)
    $$

  - Case 4: For the case $|X|,|Y|<\infty$, write $X=X^+-X^-,Y=Y^+-Y^-$, then:
    $$
    E(XY)=E(X^+Y^++X^-Y^--X^+Y^--X^-Y^+)\\
    =E(X^+Y^+)+E(X^-Y^-)-E(X^+Y^-)-E(X^-Y^+)\\
    =E(X^+)E(Y^+)+E(X^-)E(Y^-)-E(X^+)E(Y^-)-E(X^-)E(Y^+)\\
    =E(X^+-X^-)E(Y^+-Y^-)=E(X)E(Y)
    $$
    



## 2. Law of Large Numbers

- **Motivation**
  - If $X_1,...,X_n\overset{iid}\sim P$, where $P(-1)=P(1)=\frac12$.
  - Suppose a new random variable $S_n=\sum_{i=1}^nX_i$, then $E(S_n)=0,Var(S_n)=n$

### 2.1 Weak Law of Large Numbers

- **Definition**. If two random variables $X, Y$ are square-integrable (i.e., $E(X^2),E(Y^2)<\infty$), then the **covariance** between them are defined:
  $$
  Cov(X,Y):=E[(X-EX)(Y-EX)]=E[XY]-[EX][EY]
  $$

  - **Uncorrelated**: if $Cov(X,Y)=0$. 
    - Note that independence implies uncorrelation because of definition, but the reverse is not true
    - If $X,Y$ are both random variables and they have zero covariance, then they are independent
    
  - Algebra from definition of covariance:
    - $Cov(X+Y,Z)=Cov(X,Z)+Cov(Y,Z)$
    - $Var(X_1+\cdots+X_n)=Cov(X_1+\cdots+X_n,X_1+\cdots+X_n)$. If $X_1,...,X_n$ independent, then $Var(X_1+\cdots+X_n)=Var(X_1)+\cdots+Var(X_n)$
    
  - **Correlation**:
    $$
    Corr(X,Y)=\frac{Cov(X,Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}.\\
    Corr(aX+b,cY+d)=Corr(X,Y)\cdot sign(ac)
    $$
  
- **Definition**. 

  - We say $(Y_n)_{n=1}^\infty$ **convergences in probability** to $Y$ if $\forall\varepsilon>0$, we have:

  $$
  P(|Y_n-Y|>\varepsilon)\to0,\quad\mathrm{as~}n\to\infty.
  $$

  - For $p>0$, we say $(Y_n)_{n=1}^\infty$ converges in $L_p$ to $Y$ if $E|Y_n|^p,E|Y|<\infty$ for all $n$ and:
    $$
    E|Y_n-Y|^p\to0,\quad\mathrm{as~}n\to\infty.
    $$

- **Fact**. If $Y_n\to Y$ in $L_p$, then $Y_n\to Y$ in probability because by Markov's inequality:
  $$
  P(|Y_n-Y|>\varepsilon)=P(|Y_n-Y|^p>\varepsilon^p)\leq\frac{E|Y_n-Y|^p}{\varepsilon^p}\to0
  $$
  where $E|Y_n-Y|^p\to 0$ is by definition of convergence in $L_p$
  
- **Theorem**. WLLN with finite second moment: If $X_1,X_2,...$ are uncorrelated, and $E(X_i)=\mu_i,Var(X_i)\le c<\infty$. Let $S_n=\sum_{i=1}^nX_i$, then:
  $$
  \frac{S_n-\sum_{i=1}^n\mu_i}n\overset{L_2}\to0\quad(\text{thus also in probability})
  $$
  because:
  $$
  E\left(\frac{S_n-\sum_{i=1}^n\mu_i}n\right)^2=\frac{Var\left({S_n}\right)}{n^2}=\frac{\sum_{i=1}^nVar\left(X_i\right)}{n^2}\overset{\text{condition}}\le\frac{cn}{n^2}=\frac cn\to0
  $$

- **Theorem**. If $(S_n)_{n=1}^\infty$ is a sequence of random variables with $\sigma_n^2=Var(S_n)$ and $\frac{\sigma_n^2}{b_n^2}\to 0$, then:
  $$
  \frac{S_n-E(S_n)}{b_n}\overset{L_2}\to0\quad(\text{thus also in probability})
  $$
  because:
  $$
  E\left[\frac{S_n-E(S_n)}{b_n}\right]^2=\frac{Var(S_n)}{b_n^2}\overset{\text{condition}}{=}\frac{Var(S_n)}{b_n^2}\to0
  $$
  
  - Note this theorem is a more generalized way for **WLLN** because we can let $b_n=n,S_n=\sum_{i=1}^nX_i$. When $Var(X_i)\le c<\infty$, we have shown $\frac{\sigma^2}{b_n^2}\to 0$. But some cases, say $Var(X_1)=n$, there is no $c$ such that $Var(X_i)\le c<\infty$, but if other $Var(X_i)=c$, $\frac{\sigma^2}{b_n^2}\to 0$ still holds. So the condition is $\frac{\sigma^2}{b_n^2}\to 0$ necessary for $Var(X_i)\le c<\infty$
  
- **Example 2.2.3**. Coupon Collector's Problem. Let $n\ge 1$ be an integer and $X_1,X_2,...$ be independent and uniformly distributed on $\{1,...,n\}$. Define for $k=0,1,...,k$:
  $$
  \tau_k^n=\inf\{m\geq0:|\{X_1,\ldots,X_m\}|=k\}
  $$
  where $|\cdot|$ denotes the size of a set. Let $T_n=\tau_n^n$, then we have:
  $$
  \frac{T_n}{n\log n}\overset{p.r.}\to1
  $$

  - $\tau_k^n$ is actually a random variable: $\tau_k^n(\omega)=\inf\{m\geq0:|\{X_1(\omega),\ldots,X_m(\omega)\}|=k\}$. Imagine for each experiment, we take a infinite uniform sample from $\{1,...,n\}$ (realized sample point is $\omega=\omega_1\omega_2\dots$ and realized value from random variables to be $(X_1(\omega_1),X_2(\omega_2),...)$). For each realization $\omega$, there exists $m$ such that the first $m$  in the tuple of $(X_1(\omega_1),X_2(\omega_2),...)$ have $k$ unique values. And for digits larger than $m$, there could be some repeated values and make and thus we take inf.

  - After this, we prove the example.

  - Let $Y_k=\tau_k^n-\tau_{k-1}^n,\;k=1,2,...,n$. Then $Y_k$ follows a geometric distribution with parameter $p=\frac{n-k+1}{n}$, i.e., pmf: $f(z)=\left(1-p\right)^{z-1}\cdot p,\;z=1,2,...$ because we need one additional new value (there are $n-k+1$ such values) beyond current $k$ unique values and we still need to sample uniformly from $\{1,...,n\}$ for this new unique value, which determines the ratio $p=\frac{n-k+1}{n}$

  - Also, we have these:

    - By the expansion of $\sum_{z=0}^\infty x^z=\frac1{1-x}\;\mathrm{for}\;|x|<1$, and take differentiation on both sides w.r.t $x$, so  $\sum_{z=0}^\infty z\cdot x^{z-1}=\frac1{(1-x)^2}$. Let $x=1-p$:
    
    $$
    \begin{align}
    EY_k & = p\cdot\sum_{z=1}^\infty z\cdot(1-p)^{z-1}=\frac p{[1-(1-p)]^2}=\frac n{n-k+1}
    \end{align}
    $$
    
    - Also, using similar tricks from differentiating $\sum_{n=1}^\infty nx^n=\frac x{(1-x)^2}$ and some transformation, we have:
      $$
      \mathrm{Var}(Y_k)= \frac{k-1}n\cdot\frac{n^2}{(n-k+1)^2}
      $$

  - We also know: 
    
    - $Y_1,...,Y_n$ are independent (think of $Y_2=\tau^n_2-\tau^n_1$ is defined on $\sigma(X_{\tau_1+1},...,X_{\tau_{2}})$ and $Y_3=\tau^n_3-\tau^n_2$ defined on $\sigma(X_{\tau_2+1},...,X_{\tau_{3}})$, which are disjoint set of random variables)
    
    -  $T_n=\sum_{k=1}^nY_k$ 
    
    - Therefore, we can get:
      $$
      \begin{align}
      E(T_n)&=\sum_{k=1}^nEY_k=n\left(1+\frac12+\cdots+\frac1n\right)\sim n\log n\\
      \mathrm{Var}(T_n)&=\sum_{k=1}^n\mathrm{Var}(Y_k)\leq\sum_{k=1}^n\frac{n^2}{(n-k+1)^2}\leq Cn^2,\;\;
      \text{for some constant } C
      \end{align}
      $$
    
  - If we let $b_n=n\log(n)$, then $\frac{Var(T_n)}{b_n^2}\to0$, with previous theorem we can conclude:
    $$
    \frac{T_n-E(T_n)}{b_n}\;\overset{L_2}\to0\;\Leftrightarrow\frac{T_n-n\log(n)}{n\log(n)}\;\overset{L_2}\to0\;
    $$
    by continuous transformation theorem and relation between $\overset{p.r.}\to$ and $\overset{L_2}\to$, we have:
    $$
    \frac{T_n}{n\log n}\overset{p.r.}\to1
    $$

- **Theorem**. Weak LLN for Triangular Arrays. Assume for each $n\ge 1,\;\{X_{n,k}:1\le k\le n\}$ are independent, the triangular array is in the form:
  $$
  \left[
  \begin{array}{cccccc}
  X_{1,1} &        &        &        &        & \\
  X_{2,1} & X_{2,2} &        &        &        & \\
  X_{3,1} & X_{3,2} & X_{3,3} &        &        & \\
  \vdots  & \vdots  & \vdots  & \ddots &        & \\
  X_{n,1} & X_{n,2} & X_{n,3} & \cdots & X_{n,n} &
  \end{array}
  \right]
  $$

  - Let $b_n>0$ and $\bar{X}_{n,k}=X_{n,k}1_{\{|X_{n,k}|\leq b_n\}}$. If these two conditions hold:

  $$
  (i)\quad\sum_{k=1}^nP(|X_{n,k}|>b_n)\to0&\text{(truncation not matter)}
  \\(ii)\quad b_n^{-2}\sum_{k=1}^nE[(\bar{X}_{n,k})^2]\to0,&\text{(2nd moment bounded)}
  $$

  - then with $S_n=\sum_{k=1}^nX_{n,k}$ and $a_n=\sum_{k=1}^nE\bar{X}_{n,k}$, we have:

  $$
  \frac{S_n-a_n}{b_n}\overset{p.r.}\to0
  $$

  **Proof:**

  - Let $\bar{S}_n=\sum_{k=1}^n\bar{X}_{n,k}$. We can deduce:
    $$
    P\left(\left|\frac{S_n-a_n}{b_n}\right|>\epsilon\right)\leq P(S_n\neq\bar{S}_n)+P\left(\left|\frac{\bar{S}_n-a_n}{b_n}\right|>\epsilon\right)
    $$
    because:
    
    - The statement is true: If $\bar S_n=S_n$ and $\left|\frac{S_n-a_n}{b_n}\right|\leq \epsilon$, then we have $\left|\frac{\bar S_n-a_n}{b_n}\right|\leq \epsilon$
    
    - Take inverse negation of the statement: if $\left|\frac{\bar S_n-a_n}{b_n}\right|> \epsilon$, then $\bar S_n\ne S_n$ or $\left|\frac{S_n-a_n}{b_n}\right|> \epsilon$. So we have event relation:
      $$
      \left\{\left|\frac{\bar S_n-a_n}{b_n}\right|> \epsilon\right\}\subset
      \left\{\bar S_n\ne S_n\right\}\bigcup
      \left\{\left|\frac{S_n-a_n}{b_n}\right|> \epsilon\right\}
      $$
    
    - Then by property of measure, we have above inequality
    
  - Note that the following proof is wrong:

    - define events:

    $$
    A=\left\{\left|\frac{S_n-a_n}{b_n}\right|>\varepsilon\right\},\quad\bar A=\left\{\left|\frac{\bar S_n-a_n}{b_n}\right|>\varepsilon\right\},\quad B=\big\{\forall k\ge 1:|X_{n,k}|\le b_n\big\}
    $$

    - Then by Bayes rule:

    $$
    P(\bar A)=P(\bar A\cap B)+P(\bar A\cap B^c)\ge P(\bar A\cap B)=P(A)\\
    \Rightarrow
    P(\bar A)\ge P(A)
    $$

    - The claim is false because $(\bar A\cap B)\ne A$. We only know $(\bar A\cap B)\subset A$. In fact, under most circumstances, the $\subset$ is strict.

  - Now we have the probability relation:
    $$
    \begin{align}
    P\left(\left|\frac{S_n-a_n}{b_n}\right|>\epsilon\right)&\leq P(S_n\neq\bar{S}_n)+P\left(\left|\frac{\bar{S}_n-a_n}{b_n}\right|>\epsilon\right)&\text{(discussed above)}\\
    &=P\big(\big\{\text{at least one } k\in\{1,...,n\}\text{ s.t. }|X_{n,k}|>b_n,\big\}\big)+P\left(\left|\frac{\bar{S}_n-a_n}{b_n}\right|>\epsilon\right)\\
    &=P\left(\bigcup_{k=1}^n\big\{|X_{n,k}|>b_n\big\}\right)+P\left(\left|\frac{\bar{S}_n-a_n}{b_n}\right|>\epsilon\right)&\text{(Equivalent event description)}\\
    &\le \sum_{k=1}^nP(|X_{n,k}|>b_n)+P\left(\left|\frac{\bar{S}_n-a_n}{b_n}\right|>\epsilon\right)&\text{(measure property)}\\ 
    \end{align}
    $$

  - Note that the first term above tends to be zero with condition $(i)$ while the second term tends to be 0 by condition $(ii)$ and Chebyshev inequality:
    $$
    P\left(\left\{\left|\frac{\bar S_n-a_n}{b_n}\right|>\varepsilon\right\}\right)=P\left(\left\{\left|\bar S_n-a_n\right|^2>b_n^2\varepsilon^2\right\}\right)\le \frac{E\left|\bar S_n-a_n\right|^2}{b_n^2\varepsilon^2}\to0\;\text{(by condition ii)}
    $$

  - Note that in condition $(i)$, $b_n$ could also be other $M_n\ne b_n$ as is in condition $(ii)$. The proof does not change

- **Theorem**. WLLN without moment assumption. Let $X_1,X_2,...$ be $i.i.d$ with $xP(|X_1|>x)\to0,\;\mathrm{as~}x\to\infty$. Also let $S_{n}=\sum_{i=1}^{n}X_{i},\:\mu_{n}=E(X_{1}1_{\{|X_{1}|\leq n\}})$, then we have:
  $$
  \frac{S_n}n-\mu_n\to0\quad\text{in probability.}
  $$
  **Proof**:

  - We will apply previous theorem to check this theorem, so we need to verify whether two conditions in previous theorem holds.

  - For first condition, where $LHS=\sum_{k=1}^nP(|X_{n,k}|>b_n)$, here we can let $X_{n,k}=X_k$ (so think of: in the triangular array, every element in each column equals, which means $X_{n,k}=X_{m,k}=X_k$ for different row $m,n$). Also let $b_n=n$. Then $\bar{X}_{n,k}=X_k1_{\{|X_k|\leq n\}}=\bar X_k$ and the LHS of condition $(i)$ goes to zero:
    $$
    \sum_{k=1}^nP(|X_{n,k}|>b_n)=\sum_{k=1}^nP(|X_k|>n)\overset{iid}=nP(|X_1|>n)\to0
    $$
    the last equality is because condition in this theorem: $xP(|X_1|>x)\to0,\;\mathrm{as~}x\to\infty$

  - Also, to verify condition $(ii)$:

    - Here LHS of condition $(ii)$ is:
      $$
      b_n^{-2}\sum_{k=1}^nE(\bar{X}_{n,k})^2=n^{-2}\sum_{k=1}^nE[(X_k1_{\{|X_k|\leq n\}})^2]=n^{-1}E({X}_1^21_{\{|X_1|\leq n\}})=n^{-1}E(\bar{X}_1^2)
      $$

    - By **Lemma of Fubini Theorem** ($E(Y^p)=\int_0^\infty py^{p-1}P(Y>y)dy$), we have:
      $$
      \begin{align}
      n^{-1}E(\bar{X}_1^2)&=n^{-1}\int_0^\infty 2yP(|\bar X_1|>y)dy\\
      &=n^{-1}\int_0^n 2yP(|{X}_11_{\{|X_1|\leq n\}}|>y)dy+n^{-1}\int_n^\infty 2yP(|{X}_11_{\{|X_1|\leq n\}}|>y)dy\\
      &=n^{-1}\int_0^n 2yP(|{X}_1|>y)dy+0\\
      \end{align}
      $$

    - Note that $n^{-1}\int_0^n 2yP(|{X}_1|>y)dy\to0$. We can verify this by: since $0\le g(y)\le 2y$ and $g(y)\to0$ as $y\to\infty$, so $M=\sup g(y)<\infty$ (bounded). Also let $\varepsilon_K=\sup\{g(y):y>K\}$, then decompose the integral:
      $$
      \int_0^n2yP(|X_1|>y)dy=\int_0^K2yP(|X_1|>y)dy+\int_K^n2yP(|X_1|>y)dy\\
      \leq KM+(n-K)\epsilon_K
      $$
      Note that $KM$ means we take area of a rectangle that cover the whole area represented by the integral in domain of $[0,K]$. Then divide both sides by $n$ and take limit, and we can see $n^{-1}\int_0^n 2yP(|{X}_1|>y)dy\to0$
      $$
      \lim_{n\to\infty}\frac1n\int_0^n2yP(|X_1|>y)dy\leq\epsilon_K
      $$

  - The result follows

- **Theorem 2.2.9**. WLLN with finite first moment. Let $X_1,X_2,...$ be $i.i.d.$ with $E|X_1|<\infty$. Let $S_n=\sum_{i=1}^nX_i,\;\mu=EX_1$. Then:
  $$
  \frac{S_n}n\to\mu\quad\text{in probability.}
  $$
  **Proof**. 

  - When $n\to\infty$, we have:
    $$
    \begin{align}
    |X_1|1_{\{|X_1|>n\}}&\to 0\;\;a.s.\\
    &\Downarrow\\
    E(|X_1|1_{\{|X_1|>n\}})&\to E(0)=0\quad\text{(by DCT)}\\&\Downarrow\\
    n P(|X_1|>n)&=E(n1_{\{|X_1|>n\}})\le E(|X_1|1_{\{|X_1|>n\}})\to0\\&\Downarrow\\
    n P(|X_1|>n)&\to0
    \end{align}
    $$

  - When $n\to\infty$, we also have:
    $$
    \begin{align}
    X_11_{\{|X_1|\le n\}}&\to X_1\;\;a.s.\\
    &\Downarrow\\
    \mu_n:=E(X_11_{\{|X_1|\le n\}})&\to E(X_1)=\mu\quad\text{(by DCT)}
    \end{align}
    $$
    
  - Now recall previous theorem, the condition $n P(|X_1|>n)\to0$ holds, and we know $\frac{S_n}n-\mu_n\overset{p.r.}\to0$, which by definition of $\overset{p.r.}\to$ implies:
    $$
    P\left(\left|\frac{S_n}n-\mu_n\right|>\frac\epsilon2\right)\to 0,\forall\epsilon>0
    $$
    we can see this implies $P\left(\left|\frac{S_n}n-\mu\right|>\epsilon\right)\to 0$ because:
    $$
    \begin{align}
    \left|\frac{S_n}n-\mu\right|&\leq\left|\frac{S_n}n-\mu_n\right|+|\mu_n-\mu|\quad\text{(triangular inequality)}\\
    \\&\Downarrow\\
    \left\{\left|\frac{S_n}n-\mu\right|>\epsilon\right\}&\subset
     \left\{\left|\frac{S_n}n-\mu_n\right|+|\mu_n-\mu|>\epsilon\right\}\subset
     \left\{\left|\frac{S_n}n-\mu_n\right|>\frac\epsilon2\right\}\bigcup\left\{|\mu_n-\mu|>\frac\epsilon2\right\}\quad(*)\\
    \\&\Downarrow\\
    P\left(\left|\frac{S_n}n-\mu\right|>\epsilon\right)&\le P\left(\left|\frac{S_n}n-\mu_n\right|>\frac\epsilon2\right)+P\left(|\mu_n-\mu|>\frac\epsilon2\right)\to0
    \end{align}
    $$
    **Note**: $(*)$ can be derived through:

    - First it is easy to see $\{X\le\frac\epsilon2\}\cap\{Y\le\frac\epsilon2\}\subset \{X+Y\le\epsilon\}$ since $LHS\Rightarrow RHS$
    - Then take complement and using De Morgan's law: $\{X+Y>\epsilon\}\subset \{X>\frac\epsilon2\}\cup\{Y>\frac\epsilon2\}$

### 2.2 Strong Law of Large Numbers

- **Definition**. We say a sequence of random variables $Y_n$ converges to $Y$ almost surely (a.s.) if:
  $$
  P(w:\lim_{n\to\infty}Y_n(w)=Y(w))=1
  $$

  - Counter-example: 
    $$
    \begin{align}
    Y_1&=1_{\{0,\frac12\}},\;Y_2=1_{\{\frac12,1\}},\\
    Y_3&=1_{\{0,\frac13\}},\;Y_4=1_{\{\frac13,\frac23\}},\;Y_5=1_{\{\frac23,1\}}\\
    &...
    \end{align}
    $$
    

- **Definition**. Let $A_1,A_2,...$ be a sequence of events. The event that they **occur infinitely often** is defined in different but equivalent format:
  $$
  \begin{aligned}
  \{A_{n}\:i.o.\}:&=\{\omega\in\Omega:\omega\text{ is in infinitely many }A_i\text{'s}\}=\{\omega:\exists\text{ a subsequence }n_k,\:\omega\in\cap_kA_{n_k}\}\\
  &=\cap_{n=1}^\infty\cup_{k=n}^\infty A_k=\lim_{n\to\infty}\cup_{k=n}^\infty A_k:=\lim\sup A_n
  \end{aligned}
  $$

  - First line: Basically infinitely often means we can find infinitely many $A_i,i=n_1,n_2...,$ which is subsequence of the original ordered sequence, such that some $\omega$ are in all these events and the event formed by these $\omega$ are event that occurs infinitely often.
  - Second line: 
    - understand $\cap_{n=1}^\infty\cup_{k=n}^\infty A_k$ from outside to inner: some $\omega$ in this event means $\omega\in\cup_{k=n}^\infty A_k,\forall n\ge1$. It means the sample point exists in union of $A_n,A_{n+1},...$ for every $n$. So from perspective of convergence, it means no matter how we find a large enough number $n$ and take unions of $A_n,A_{n+1},...$, we know $\omega$ is in it. And by "find a larger enough number" I mean we can pick lots of large numbers and $\omega$ exists in all these unions. 
    - Mathematically, we know $(\cup_{k=n}^\infty A_k)_{n=1}^\infty$ is non-increasing and thus we have equivalence of $\cap_{n=1}^\infty\cup_{k=n}^\infty A_k=\lim_{n\to\infty}\cup_{k=n}^\infty A_k$. But intuitively, following above intuition, $\lim_{n\to\infty}\cup_{k=n}^\infty A_k$ should be understood in a convergence way, i.e., we let $n\to\infty$ means we consider many large $n$ and these $n$ could go to infinity. Also note that $\lim\sup A_n$ is defined as $\lim_{n\to\infty}\cup_{k=n}^\infty A_k$

- **Fact**. $Y_n\to Y$ a.s. if and only if $P(|Y_n-Y|>\varepsilon\:i.o.)=0$ for all $\varepsilon>0$. Proof:

  - Note that the equivalence relation:
    $$
    \begin{align}
    &\quad P(|Y_n-Y|>\varepsilon\:i.o.)=0\\
    \Leftrightarrow&\quad P\left\{\bigcup_{n=1}^\infty\bigcap_{m=n}^\infty\{\omega\in\Omega:|Y_m(\omega)-Y(\omega)|<\varepsilon\}\right\}=1\\
    \Leftrightarrow&\quad P\left\{\bigcup_{n=1}^\infty\left\{\omega\in\Omega:\sup_{m\ge n}|Y_m(\omega)-Y(\omega)|<\varepsilon\right\}\right\}=1\\
    \Leftrightarrow&\quad P\left\{\omega\in\Omega:\lim_{n\to\infty}\left\{\sup_{m\ge n}|Y_m(\omega)-Y(\omega)|<\varepsilon\right\}\right\}=1\\
    \Leftrightarrow&\quad P\left(\omega\in\Omega:\limsup_{n\to\infty}|Y_n(\omega)-Y(\omega)|\le\varepsilon\right):=P\left(\limsup_{n\to\infty}|Y_n-Y|\le\varepsilon\right)=1
    \end{align}
    $$
    
  - Then by  continuity from above property of probability measures:
    $$
    P(\lim\sup_{n\to\infty}|Y_n-Y|=0)=\lim_{\varepsilon\downarrow0}P(\lim\sup_{n\to\infty}|Y_n-Y|\leq\varepsilon)=1
    $$
    note that $P(\lim\sup_{n\to\infty}|Y_n-Y|=0)$ is equivalent to $P(\lim_{n\to\infty}|Y_n-Y|=0)$ since $\sup$ is zero and $|Y_n-Y|\ge 0$. So we found this is consistent with convergence a.s.
  
- **Fact**. Convergence almost surely implies convergence in probability.
  $$
  \begin{align}
  \lim_{n\to\infty} P(|Y_n-Y|>\varepsilon)&\le\lim_{n\to\infty} P(\cup_{m\ge n}\{\omega:|Y_n(\omega)-Y(\omega)|>\varepsilon\})\\
  &=P(\cap_{n\ge 1}\cup_{m\ge n}\{\omega:|Y_n(\omega)-Y(\omega)|>\varepsilon\}) &\text{(continuity of measure)}\\
  &\to 0&\text{(by definition of }\overset{a.s.}\to)
  \end{align}
  $$

- **Theorem**. Borel-Cantelli Two Lemmas:
  $$
  \begin{array}{l}\text{(i) If }\sum_{n=1}^\infty P(A_n)<\infty\text{, then }P(A_n\text{ }i.o.)=0;\\\text{(ii) If }A_n\text{'s are independent, then }\sum_{n=1}^\infty P(A_n)=\infty\text{ implies }P(A_n\text{ }i.o.)=1.\end{array}
  $$

  - Proof of $(i)$:
    $$
    P(A_n\:i.o.)=P(\cap_{n=1}^\infty\cup_{k=n}^\infty A_k)\\
    =\lim_{n\to\infty}P(\cup_{k=n}^\infty A_k)\le \lim_{n\to\infty}\sum_{k=n}^\infty P(A_k)=0,
    $$
    note that the last equality is because $\lim_{n\to\infty}\sum_{k=n}^\infty P(A_k)$ can be treated as $\sum_{n=\infty}^\infty P(A_n)$, and by condition of $\sum_{n=1}^\infty P(A_n)<\infty$, we have zero result

  - Proof of $(ii)$:
    $$
    \begin{aligned}P(A_n\:i.o.)&=1-P(\cup_{n=1}^\infty\cap_{k=n}^\infty A_k^c)\\&=1-\lim_{n\to\infty}P(\cap_{k=n}^\infty A_k^c)\\&=1-\lim_{n\to\infty}\prod_{k=n}^\infty P(A_k^c)&\text{(by independence)}\\&=1-\lim_{n\to\infty}\prod_{k=n}^\infty(1-P(A_k))\\&\ge1-\lim_{n\to\infty}\prod_{k=n}^\infty e^{-P(A_k)}&\text{(from }1+x\le e^x)\\&=1-\lim_{n\to\infty}e^{-\sum_{k=n}^\infty P(A_k)}\\&=1.&\text{(by condition)}\end{aligned}
    $$

  - **Implication** of $(ii)$: Let $A_n=\{|Y_n-Y|>\varepsilon\}$ and using the lemma, we have the following result: if $\forall\varepsilon>0:\sum_{n=1}^\infty P(|Y_n-Y|>\varepsilon)<\infty$, then $Y_n\overset{a.s.}\to Y$

- **Theorem 2.3.5**. Let $X_1,X_2,...$ be $i.i.d.$ with $EX_1=\mu$ and $EX_1^4<\infty$. If $S_n=\sum_{i=1}^nX_i$, then $\frac{S_n}n\overset{a.s.}\to\mu$. Proof:

  - Assume $\mu=0$, otherwise consider $X_i-\mu$ as $X_i$

  - With above implication, it suffices to show $\forall\varepsilon>0:\sum_{n=1}^\infty P\left(\big|\frac{S_n}{n}\big|>\varepsilon\right)<\infty$

  - We show this by checking:
    $$
    \begin{align}
    \sum_{n=1}^\infty P\left(\big|\frac{S_n}{n}\big|>\varepsilon\right)&=\sum_{n=1}^\infty P\left(\left|\frac{S_n}{n}\right|^4>\varepsilon^4\right)\le\sum_{n=1}^\infty\frac{E(S_n)^4}{n^4\varepsilon^4}&\text{(Markov inequality)}\\
    &=\sum_{n=1}^\infty\frac{\sum_{i,j,k,l=1}E(X_iX_jX_kX_l)}{n^4\varepsilon^4}\\
    &=\sum_{n=1}^\infty\frac{nEX_1^4+3(n^2-n)(EX_1^2)^2}{n^4\varepsilon^4}\\
    &\le \sum_{n=1}^\infty\frac{Cn^2}{n^4\varepsilon^4}=\sum_{n=1}^\infty\frac{C}{n^2\varepsilon^4}<\infty
    \end{align}
    $$

- **Theorem**. If $Y_n\to Y$ in probability, then there exists a subsequence $n_k$ such that $Y_{n_k}\to Y$ a.s.

  - Choose a subsequence of $n_1<n_2<\cdots$ such that:
    $$
    P(|Y_{n_k}-Y|>\frac1{2^k})\leq\frac1{2^k}
    $$

    - such a subsequence exists because the condition is convergence in probability. So let's say when $k=1$, if initial picked $n_k$ cannot make the inequality $P(|Y_{n_k}-Y|>\frac1{2})\leq\frac1{2}$ holds, we can make this hold by picking large enough $n_k$ because convergence in probability means the probability must go to zero when $n_k$ grows to infinity
    - we can also take $P(|Y_{n_k}-Y|>\frac1{k^2})\leq\frac1{k^2}$, which is equivalent

  - For this subsequence, we have:
    $$
    \sum_{k=1}^\infty P(|Y_{n_k}-Y|>\frac1{2^k})=\sum_{k=1}^\infty\frac1{2^k}<\infty
    $$

  - By B-C lemma $(i)$, we have $P(|Y_{n_k}-Y|>\frac1{2^k}\:i.o.)=0$, which could be expressed using: $A_k=\big\{\omega:|Y_{n_k}(\omega)-Y(\omega)|>\frac1{2^k}\big\}$:
    $$
    0=P(|Y_{n_k}-Y|>\frac1{2^k}\:i.o.)=P(A_k\:i.o.)=P(\lim_{k\to\infty}\cup_{m=k}^\infty A_m)\\
    =P\left(\lim_{k\to\infty}\cup_{m=k}^\infty \big\{\omega:|Y_{n_k}(\omega)-Y(\omega)|>\frac1{2^m}\big\}\right)\\
    \ge P\left(\lim_{k\to\infty}\cup_{m=k}^\infty \big\{\omega:|Y_{n_k}(\omega)-Y(\omega)|>\varepsilon\big\}\right),\forall \varepsilon>0
    $$

  - The last inequality is because $\frac1{2^m}$ tends to be zero, so whenever we take $\varepsilon>0$, the event get smaller and thus the $\ge$ holds. Then it implies $P(|Y_{n_k}-Y|>\varepsilon\:i.o.)=0\text{ for any }\varepsilon>0$, which further means convergence a.s.

- **Theorem 2.3.8**. Generalized B-C lemma $(ii)$. If $A_1,A_2,...$ are pairwise independent, and $\sum_{i=1}^\infty P(A_i)=\infty$, then as $n\to\infty$ we have:
  $$
  \frac{\sum_{i=1}^n1_{A_i}}{\sum_{i=1}^nP(A_i)}\to1\quad a.s.
  $$
  **Proof:**

  - Let $S_n=\sum_{i=1}^n1_{A_i},b_n=\sum_{i=1}^nP(A_i)$, then $E(S_n/b_n)=1$ according to property of indicator random variable. For $\varepsilon>0$ we have:
    $$
    \begin{aligned}
    P\left(\left|\frac{S_n}{b_n}-1\right|>\varepsilon\right)&\leq\frac{\mathrm{Var}(S_n/b_n)}{\varepsilon^2}&\text{(Markov inequality)}\\
    &=\frac{\sum_{i=1}^nP(A_i)(1-P(A_i))}{\varepsilon^2b_n^2}&\text{(variance of $1_{A_i}$)}\\
    &\leq\frac{\sum_{i=1}^nP(A_i)}{\varepsilon^2(\sum_{i=1}^nP(A_i))^2}=\frac1{\varepsilon^2 b_n}
    \end{aligned}
    $$

  - Thus we can further have:
    $$
    \sum_{n=1}^\infty P\left(\left|\frac{S_n}{b_n}-1\right|>\varepsilon\right)\le\sum_{n=1}^\infty\frac1{\varepsilon^2 b_n}<\infty
    $$
    
  - Choose a sequence $n_k=\min\{m:b_m\ge k^2\}$. 
  
    - such choosing is possible because: for each large $k$, since $\lim_{n\to\infty}b_n=\infty$ (this is condition), then we can always find some $m$ that makes $b_m\ge k^2$. 
    - With above finite $\sum_{n=1}^\infty P\left(\left|\frac{S_n}{b_n}-1\right|>\varepsilon\right)$, we also have finite subsequence version:
  
    $$
    \sum_{k=1}^\infty P\left(\left|\frac{S_{n_k}}{b_{n_k}}-1\right|>\varepsilon\right)<\infty
    $$
  
  - By B-C lemma $(i)$, we have:
    $$
    \frac{S_{n_k}}{b_{n_k}}\to1\quad a.s.
    $$
  
  - Now for any sufficient large integer $m$, there exists $k$ such that $n_{k-1}\leq m\leq n_{k}$, and since $S_n,b_n$ are both non-decreasing, then we have:
    $$
    \frac{S_{n_{k-1}}}{b_{n_{k-1}}}\frac{b_{n_{k-1}}}{b_{n_k}}=\frac{S_{n_{k-1}}}{b_{n_k}}\leq\frac{S_m}{b_m}\leq\frac{S_{n_k}}{b_{n_{k-1}}}=\frac{S_{n_k}}{b_{n_k}}\frac{b_{n_k}}{b_{n_{k-1}}}
    $$
  
    - $\frac{S_{n_{k-1}}}{b_{n_{k-1}}}$ and $\frac{S_{n_{k}}}{b_{n_{k}}}$ converges to $1$ a.s. as is shown in previous bullet point
  
    - Since $n_k=\min\{m:b_m\ge k^2\}$, it means $n_k$ is smallest $m$ that makes $b_m\ge k^2$, then we have $b_{n_k}\ge k^2$. Also, $b_{n_k-1}< k^2$ because the index $n_k-1$ is smaller than $n_k$, and thus no long be able to make $b_m\ge k^2$. Also, since $b_m$ is summation of probability, it means $b_{n_k}\le b_{n_k-1}+1\le k^2+1$
  
    - So we have:
      $$
      (k-1)^2\le b_{n_{k-1}}\le b_{n_{k}}\le k^2+1
      $$
       since $\frac{(k-1)^2}{k^2+1}\to1$ when $k\to\infty$, then $b_{n_{k-1}}- b_{n_{k}}\to 0$
  
- **Theorem 2.4.1**. Strong Law of Large Number. Let $X_1,X_2,...$ be iid with $E|X_i|<\infty,\; EX_i=\mu$. Let $S_n=\sum_{i=1}^n X_i$. Then:
  $$
  \frac{S_n}n\to\mu\quad a.s.
  $$

  - WLOG, assume $X_i\ge 0$, otherwise consider $X_i=X^+_i-X^-_i$. There are three steps to prove it.

  - **Lemma**: $\sum_{k=1}^\infty P(|X_k|>k)\leq E|X_1|\le \sum_{k=0}^\infty P(|X_k|>k)$

    - According to Fubini Theorem **Lemma**, when $p=1$, we have $E(Y)=\int_0^\infty P(Y>y)dy$

    - Then we can prove the second $\le$:
      $$
      \begin{align}
      E|X_1|&=\int_0^\infty P(|X_1|>t)\:dt&\text{(Fubini Therom Lemma)}\\
      &=\sum_{k=0}^\infty\int_k^{k+1}P(|X_1|>t)\:dt.&\text{(Integration Partition)}\\
      &\le \sum_{k=0}^\infty (k+1-k)\cdot P(|X_1|>k)&\text{(Rectangle that covers the area by Integration)}\\
      &=\sum_{k=0}^\infty P(|X_1|>k)
      \end{align}
      $$

    - The first inequality can be derived similarly:
      $$
      \begin{align}
      E|X_1|&=\sum_{k=0}^\infty\int_k^{k+1}P(|X_1|>t)\:dt.&\text{(same as above)}\\
      &\ge \sum_{k=0}^\infty P(|X_1|>k+1)&\text{(rectangle covered by integration area)}\\
      &=\sum_{k=1}^\infty P(|X_1|>k)&\text{(just change index)}
      \end{align}
      $$

  - Step 1: Truncation. Let $Y_{k}=X_{k}1_{\{|X_{k}|\leq k\}},\:T_{n}=\sum_{i=1}^{n}Y_{i}$

    - By above lemma, we have $\sum_{k=1}^\infty P(|X_k|>k)\leq E|X_1|<\infty$, and thus:
      $$
      \sum_{k=1}^\infty P(|X_k|>k)=\sum_{k=1}^\infty P(X_k\ne Y_k)<\infty
      $$

    - By B-C lemma $(i)$, we have: $P(X_k\neq Y_k\:i.o.)=0$, so we also have $P(T_n\ne S_n\:i.o.)=0$

    - Recall the **Fact**: $Y_n\to Y$ a.s. if and only if $P(|Y_n-Y|>\varepsilon\:i.o.)=0$ for all $\varepsilon>0$. Then $P(T_n\ne S_n\:i.o.)=0$ means $T_n\to\ S_n$ a.s. 

    - So fundamentally, we consider:
      $$
      P\left(\frac{S_n(\omega)}{n}\to\mu\right)=P\left(\frac{S_n(\omega)}{n}-\frac{T_n(\omega)}{n}+\frac{T_n(\omega)}{n}\to\mu\right)
      $$

    - Since $\frac{S_n(\omega)}{n}-\frac{T_n(\omega)}{n}\to0$, if we prove $P\left(\frac{T_n(\omega)}{n}\to\mu\right)=0$, then it also holds that $P\left(\frac{S_n(\omega)}{n}\to\mu\right)$. i.e., it suffices to show $\frac{T_n}{n}\to\mu\;\;a.s.$

  -  Step 2: 2nd Moment Calculation. Fix $\alpha>1$ and let $k(n)=\lfloor{\alpha^n}\rfloor$. Apparently, $k(n)\ge \alpha^n/2$

    - For any $\epsilon>0$, we have:
      $$
      \begin{align}
      &\sum_{n=1}^\infty P\left(\left|\frac{T_{k(n)}-ET_{k(n)}}{k(n)}\right|>\varepsilon\right)\\
      
      \leq&\varepsilon^{-2}\sum_{n=1}^\infty\frac{\operatorname{Var}(T_{k(n)})}
      {(k(n))^2}=\varepsilon^{-2}\sum_{n=1}^\infty\frac{1}{(k(n))^2}\sum_{m=1}^{k(n)}\operatorname{Var}(Y_m)&\text{(Markov)}\\
      
      =&\varepsilon^{-2}\sum_{m=1}^\infty\operatorname{Var}(Y_m)\sum_{n:k(n)\ge m}(k(n))^{-2}&\text{(Fubini)}\\
      
      \leq&\varepsilon^{-2}\sum_{m=1}^\infty\operatorname{Var}(Y_m)\sum_{n:\alpha^n\ge m}4\alpha^{-2n}&(k(n)\ge \alpha^n/2)\\
      
      \leq&4(1-\alpha^{-2})^{-1}\varepsilon^{-2}\sum_{m=1}^\infty\frac{\operatorname{Var}(Y_m)}{m^2}
      \end{align}
      $$

      - note the Fubini's theorem used here. It is valid because the expansion of iterated summations are the same. Suppose $k(1)=2,k(2)=4$, then think of the expansion:
        $$
        \begin{align}
        \frac1{(k(1))^2}&\cdot[Var(Y_1)+Var(Y_2)]\\
        \frac1{(k(2))^2}&\cdot[Var(Y_1)+Var(Y_2)+Var(Y_3)+Var(Y_4)]
        \end{align}
        $$
        so subscript $n:k(n)\ge m$ ensure summation of same $Y_m$. For example, $m=3$, then we start from scaler $\frac1{(k(2))^2}$

      - note in the fourth line: the subscript change from $n:k(n)\ge m$ to $n:\alpha^n\ge m$ is equivalent because the floor operation

      - the last line is because: think of $n_0$ being smallest $n$ that makes $\alpha^{n}\ge m$. Since $\alpha^n$ is monotonically increasing wrt $n$, we know $\alpha^{n}\ge m$ for all $n\ge n_0$. So $\sum_{n\ge n_0}\alpha^{-2n}$ is a geometric progress summation. Now if $\alpha^{n_0}=m$, the progress summation starts from $\alpha^{-2n_0}=m^{-2}$; if $\alpha^{n_0}>m$, then the first term is $\alpha^{-2n_0}<m^{-2}$. This makes the $\le$ in above last line sensible.

    - Then:
      $$
      \begin{align}
      \sum_{m=1}^\infty\frac{\operatorname{Var}(Y_m)}{m^2}&\leq\sum_{m=1}^\infty\frac{EY_m^2}{m^2}&(Var(X)=E(X^2)-(EX)^2)\\
      &=\sum_{m=1}^\infty\frac{\int_0^\infty2yP(|Y_m|>y)dy}{m^2}&\text{(Fubini Lemma)}\\
      &=\sum_{m=1}^\infty\frac{\int_0^m2yP(|X_1|>y)dy}{m^2}&(P(|Y_m|>y)=0,\forall y\ge m)\\
      &=\sum_{m=1}^\infty\frac{\int_0^\infty2y1_{\{y<m\}}P(|X_1|>y)dy}{m^2}\\
      &=\int_0^\infty\left(\sum_{m=1}\frac{1_{\{y<m\}}}{m^2}\right)2yP(|X_1|>y)dy&\text{(Fubini)}
      \end{align}
      $$

    - We can prove $\left(\sum_{m=1}\frac{1_{\{y<m\}}}{m^2}\right)2y\le 4$ by:

      - For $m\ge 2$, we have:
        $$
        \sum_{k\geq m}k^{-2}\leq \sum_{n=m}^\infty\int_{n-1}^n x^{-2}dx=\int_{m-1}^\infty x^{-2}dx=(m-1)^{-1}
        $$

      - When $y\ge1$, then $\sum_{k>y}k^{-2}$ means k starts from $\lfloor y\rfloor+1\ge2$ (since $k$ is integer), which fulfills above $m\ge 2$. Then we have:
        $$
        2y\sum_{k>y}k^{-2}\leq2y/[y]\leq4
        $$

      - When $0\le y<1$, we bound $y$ with 1 and then we have:
        $$
        2y\sum_{k>y}k^{-2}\leq2\left(1+\sum_{k=2}^{\infty}k^{-2}\right)\leq4
        $$

    - Therefore:
      $$
      \sum_{m=1}^\infty\frac{\operatorname{Var}(Y_m)}{m^2}\leq \int_0^\infty 4\cdot P(|X_1|>y)dy=4E|X_1|<\infty
      $$

    - So the most beginning term is bounded:
      $$
      \sum_{n=1}^\infty P\left(\left|\frac{T_{k(n)}-ET_{k(n)}}{k(n)}\right|>\varepsilon\right)<\infty
      $$

    - By B-C lemma $(i)$, we have:
      $$
      \frac{T_{k(n)}-ET_{k(n)}}{k(n)}\to0\quad a.s.
      $$

    - Also, since we have proved $P(X_k\neq Y_k\:i.o.)=0$ before, it means $X_n=Y_n$ almost surely when $n\to\infty$, and therefore by DCT we have $EY_m=EX_11_{\{|X_1|\leq m\}}\to E(X_1)=\mu$ and thus
      $$
      \frac{ET_{k(n)}}{k(n)}=\frac{\sum_{m=1}^{k(n)}EY_m}{k(n)}\to\mu
      \\\Downarrow\\
      \frac{T_{k(n)}}{k(n)}\to\mu\quad a.s
      $$

  - Step 3: Subsequence method. For $k(n)\le m\le k(n+1)$, we have
    $$
    \frac{k(n)}{k(n+1)}\frac{T_{k(n)}}{k(n)}=\boxed{\frac{T_{k(n)}}{k(n+1)}\leq\frac{T_m}m\leq\frac{T_{k(n+1)}}{k(n)}}=\frac{k(n+1)}{k(n)}\frac{T_{k(n+1)}}{k(n+1)}
    $$

    - since $\frac{T_{k(n)}}{k(n)},\frac{T_{k(n+1)}}{k(n+1)}$ tends to be $\mu$ and $\frac{k(n)}{k(n+1)},\frac{k(n+1)}{k(n)}$ tends to be $1/\alpha,\alpha$. So we have:
      $$
      \limsup_{m\to\infty}\frac{T_m}m\leq\mu\alpha,\quad\liminf_{m\to\infty}\frac{T_m}m\geq\mu/\alpha
      $$

    - when $\alpha\downarrow1$, we have $\limsup_{m\to\infty}\frac{T_m}m=\liminf_{m\to\infty}\frac{T_m}m=\mu$, which means $\frac{T_n(\omega)}{n}\to\mu$ almost surely

- **Remark**. Let $X_1,X_2,...$ be iid and $S_n=\sum_{i=1}^n X_i$. If $\frac{S_n}n\to\mu$ a.s. for some finite number $\mu$, then we must have $E|X_i|<\infty$. This means necessary condition in SLLN. Proof:

  - Given condition of $S_n=\sum_{i=1}^n X_i\to \mu$ a.s., we know $\frac{X_n}n\to0$ a.s. because it could be decomposed into:
    $$
    \frac{X_n}n=\frac{S_n-S_{n-1}}{n}=\frac{S_n}n-\frac{S_{n-1}}{n-1}\frac{n-1}n\to0\;\;a.s.
    $$

  - By almost surely **Fact**, we let $\epsilon=1$, then we have $P(|\frac{X_{n}}{n}|>1\:i.o.)=0$, and by contraposition of B-C lemma $(ii)$, we know:
    $$
    \sum_{n=1}^\infty P(|\frac{X_n}n|>1)<\infty
    $$

  - Therefore, from iid assumption, we have:
    $$
    E|X_1|\overset{lemma}\leq\sum_{n=0}^\infty P(|X_1|>n)\le1+\sum_{n=1}^\infty P(|X_1|>n)=1+\sum_{n=1}^\infty P(|X_n|>n)<\infty
    $$

- **Theorem**. Let $X_1,X_2,...$ be iid and $S_n=\sum_{i=1}^nX_i$, if $E(X_i^+)=\infty$ and $E(X_i^-)<\infty$, then:
  $$
  \frac{S_n}n\to\infty\quad a.s.
  $$
  Proof:

  - Define $X_i^M=X_i\and M$, where $M$ is a real number. Then $E|X_i^M|<\infty $. By SLLN, for $S_n^M:=\sum_{i=1}^nX_i^M$, we have:
    $$
    \frac{S_n^M}n\to EX_i^M\quad a.s.
    $$

  - Then, since a.s. convergence means limit exists, represented as $\limsup_{n\to\infty}\frac{S_n^M}n=\lim_{n\to\infty}\frac{S_n^M}n$, then:
    $$
    \liminf_{n\to\infty}\frac{S_n}n:=\boxed{\lim_{n\to\infty}\inf_{m\ge n}\frac{S_m}m\geq\lim_{n\to\infty}\inf_{m\ge n}\frac{S_m^M}m}:=\limsup_{n\to\infty}\frac{S_n^M}n\\
    =\lim_{n\to\infty}\frac{S_n^M}n=EX_i^M\to\infty,\text{ as }M\to\infty.
    $$

  - So $\liminf_{n\to\infty}\frac{S_n}n=\infty$ and thus its limit must be $\infty$ (corresponding to converge to infinity a.s. because it must be the case that $\limsup_{n\to\infty}\frac{S_n}n=\infty$)

- **Example**. Let $X_1,X_2,\ldots $ be iid from a population distribution $F(x)$. Define the **empirical distribution function**:
  $$
  F_n(x)=\frac1n\sum_{i=1}^n1_{\{X_i\leq x\}}
  $$
  Let $Z_i=1_{\{X_i\le x\}}\sim\mathrm{Bern}(F(x))$, and thus $E(Z_i)=F(x)$, then by SLLN, we have $F_n(x)\to F(x)$ a.s. for any $x\in\mathbb R$

  - **Theorem 2.4.7**. The Glivenko-Cantelli Theorem. Under the settings in the example, we have:
    $$
    \sup_{x\in\mathbb{R}}|F_n(x)-F(x)|\to0\quad a.s.
    $$
## 3. Convergence of Random Series

### 3.1 Kolmogorov’s Maximal Inequality

- **Theorem 2.5.2**. Komogorov’s Maximal Inequality. Let $X_1,X_2,...$ be independent with $EX_i=0,\;E(X_i^2)<\infty$ for all $i$. Let $S_n=\sum_{i=1}^nX_i$. Then for any $x>0$, we have:
  $$
  P\left(\max_{1\leq k\leq n}|S_k|\geq x\right)\leq\frac{E(S_n^2)}{x^2}
  $$
  **Proof:**

  - Define event:
    $$
    A_k:=\{|S_i|<x\text{ for }i<k,|S_k|\geq x\}
    $$

  - $A_k$ gives a way to check which $S_i(\omega)$ gives the largest value among $i=1,...,n$. If $\omega_0\in A_k$, then this $\omega_0$ cannot be within $A_{l}$ for any $l\ne k$. So $A_k$ are disjoint:
    $$
    \left\{\max_{1\leq k\leq n}|S_k|\geq x\right\}=\cup_{k=1}^nA_k\\
    \Downarrow\\
    P\left(\max_{1\leq k\leq n}|S_k|\geq x\right)=P(\cup_{k=1}^nA_k)\overset{disjoint}{=}\sum_{k=1}^nP(A_k)
    $$

  - Also, if $\omega\in A_k$, then $1_{A_k}(\omega)=1,\; |S_k(\omega)|\ge x$, so $|S_k(\omega)|1_{A_k}(\omega)\ge x$ also holds. This implies $A_k\subset \{\omega:|S_k|1_{A_k}\ge x\}$. So we have:
    $$
    \sum_{k=1}^nP(A_k)\leq\sum_{k=1}^nP(\{|S_k|1_{A_k}\ge x\})\le\sum_{k=1}^n\frac{E(S_k^21_{A_k})}{x^2}=\frac1{x^2}\sum_{k=1}^nE(S_k^21_{A_k})
    $$

  - Now consider $E(S_n^21_{A_k})$
    $$
    \begin{align}
    E(S_n^21_{A_k})&=E[(S_k+S_n-S_k)^21_{A_k}]\\
    &=E(S_k^21_{A_k})+2E[\underbrace{S_k1_{A_k}\;\cdot\;(S_n-S_k)}_{\text{independence}}]+E[(S_n-S_k)^21_{A_k}]\\
    &=E(S_k^21_{A_k})+2E[S_k1_{A_k}]\underbrace{E[(S_n-S_k)]}_0+\underbrace{E[(S_n-S_k)^21_{A_k}]}_{\ge0}\\
    &\ge E(S_k^21_{A_k})
    \end{align}
    $$

  - Note that Chebyshev inequality could give
    $$
    P(|S_n|\geq x)\leq x^{-2}\operatorname{var}(S_n)
    $$

  - Therefore, we have:
    $$
    P(\max_{1\leq k\leq n}|S_k|\geq x)\leq\frac1{x^2}\sum_{k=1}^nE(S_k^21_{A_k})\le\frac1{x^2}\sum_{k=1}^nE(S_n^21_{A_k})\leq\frac{E(S_n^2)}{x^2}
    $$
    Note that we use $S_n1_{A_k}$ instead of $S_n$ because in the final step, we can have this relation: $\sum_{k=1}^nE(S_n^21_{A_k})\leq{E(S_n^2)}$ because there could be only one $k\in\{1,...,n\}$ that could make $A_k=1$ and let the RHS of inequality to be $E(S_n^2)$. If we use $S_n$ instead of $S_n1_{A_k}$, we can only have  inequality of $\sum_{k=1}^nE(S_k^2)$, which means the bound is larger than the bound that we want to prove here.

- **Theorem 2.5.3**. Let $X_1,X_2,...$ be a sequence of independent random variables with $EX_i=0$ for all $i$. If $\sum_{i=1}^\infty E(X_i^2)<\infty$, then $\sum_{i=1}^\infty X_i$ converges almost surely (i.e., $\lim_{n\to\infty}\sum_{i=1}^n X_i(\omega)<\infty$ for almost all $\omega\in\Omega$). **Proof**:
  
  - We can use random version of Cauchy sequence to prove it. 
  
    - Firstly, $S_1,S_2,...$ is a real Cauchy sequence if (below is multiple equivalent representations):
      $$
      \forall\epsilon>0:\;\exists M\in N_+ \text{ such that for all } m\ge n\ge M, \text{ we have }|S_m-S_n|<\epsilon\\
      \Updownarrow\\
      \forall\epsilon>0:\;\exists M\in N_+ \text{ such that }\sup_{m\ge n\ge M}|S_m-S_n|<\epsilon\\
      \Updownarrow\\
      \lim_{M\to\infty}\left[\sup_{m\ge n\ge M}\big|S_m-S_n\big|\right]=0\\
      \Updownarrow\\
      \sup_{m\ge n\ge M}\big|S_m-S_n\big|\to0\text{ as }M\to\infty\\
      \Downarrow\\
      \text{if }S_j=\sum_{k=1}^jx_k\Rightarrow \sup_{m\ge n\ge M}|\sum_{k=n+1}^mx_k|\to0\text{ as }M\to\infty
      $$
  
    - For most cases Cauchy sequence is equivalent to a sequence that could converge (think of converge definition $\forall\epsilon>0,\exists N\in\mathbb{N},\forall n>N,\:|x_n-L|<\epsilon$). So the only non-equivalence is driven by $L$ is not well defined. For example, the sequence $1.4,1.41,1.414,...$  is defined on rational numbers and it converges to $\sqrt 2$, which is irrational. So convergence is not well defined but it is still Cauchy sequence. (keyword for this issue: incomplete metric space)
  
    - Now we consider random version. Let $\omega_M:=\sup_{m,n\ge M}|S_m-S_n|$. When a sequence of random variables converges almost surely to another one, it means almost all $\omega\in\Omega$ could make $S_n(\omega)\to S(\omega)$ when $n\to\infty$, so it is just extended version of convergence of real sequence. **So with above discussion, to prove $S_n$ converges, we only need to prove $\omega_M\to0$ a.s. as $M\to\infty$**
  
  - For any $\epsilon>0$, we write:
    $$
    \begin{align}
    P(\omega_{M}>2\varepsilon\:i.o.)&=P\left\{\bigcap_{M=1}^\infty\bigcup_{n=M}^\infty\big\{\omega\in\Omega:\omega_{n}>2\varepsilon\big\}\right\}\\
    &=P\left\{\bigcap_{M=1}^\infty\big\{\omega\in\Omega:\omega_{M}>2\varepsilon\big\}\right\}&(\omega_n\text{ is non-increasing})\\
    &=P(\cap_M\{\omega_M>2\varepsilon\})=P(\omega_M>2\varepsilon,\forall\:M)\\
    &=\lim_{M\to\infty}P(\omega_M>2\varepsilon)&\text{(continuity of measure)}
    \end{align}
    $$
  
  - By definition of $\omega_M$ and union bound, we have:
    $$
    \begin{align}
    P(\omega_{M}>2\varepsilon)&=P\left(\sup_{m,n\geq M}|S_m-S_n|>2\varepsilon\right)\\
    &\le P\left(\sup_{m\geq M}|S_m-S_M|>\varepsilon\right)+P\left(\sup_{n\geq M}|S_n-S_M|>\varepsilon\right)\\
    &=2P\left(\sup_{m\geq M}|S_m-S_M|>\varepsilon\right)
    \end{align}
    $$
  
    - The second line could be derived by defining events $A,B,C$:
  
    $$
    A=\left\{\sup_{m\geq M}|S_m-S_M|\le\varepsilon\right\},\; B=\left\{\sup_{n\geq M}|S_n-S_M|\le\varepsilon\right\},\;C=\left\{\sup_{m,n\geq M}|S_m-S_n|\le2\varepsilon\right\}\\
    $$
  
    - Then for $\omega\in A\cap B$, we have
      $$
      \begin{align}
      \sup_{m,n\geq M}|S_m(\omega)-S_M(\omega)|\le\epsilon,&\;\sup_{m,n\geq M}|S_n(\omega)-S_M(\omega)|\le\epsilon\\&\Downarrow\\
      \sup_{m,n\geq M}|S_m(\omega)-S_n(\omega)|&=\sup_{m,n\geq M}|S_m(\omega)-S_M(\omega)+S_M(\omega)-S_n(\omega)|\\
      &\le\sup_{m,n\geq M}\big[|S_m(\omega)-S_M(\omega)|+|S_n(\omega)-S_M(\omega)|\big]\\
      &\le\sup_{m,n\geq M}|S_m(\omega)-S_M(\omega)|+\sup_{m,n\geq M}|S_n(\omega)-S_M(\omega)|\\
      &\le2\epsilon
      \end{align}
      $$
  
    - So $A\cap B\subset C$ and contraposition is $C^c\subset A^c\cup B^c$
  
  - Then Kolmogorov's maximal inequality could be further written as:
    $$
    P\left(\max_{1\leq k\leq n}|S_k|\geq x\right)\leq\frac{E(S_n^2)}{x^2}=\frac{Var(\sum_{i=1}^nX_i)}{x^2}\\
    \text{transit index: }P\left(\max_{M< k\leq N}|S_k|\geq x\right)\leq\frac{Var(\sum_{i=M+1}^NX_i)}{x^2}\\
    \text{(note that equivalent subscript: }M< k\leq N\Leftrightarrow M+1\le k\leq N)
    $$
    Then:
    $$
    \begin{align}
    P\left(\sup_{m\geq M}|S_m-S_M|>\varepsilon\right)&=\lim_{N\to\infty}P\left(\sup_{M\leq m\leq N}|S_m-S_M|>\varepsilon\right)\\
    &=\lim_{N\to\infty}P\left(\max_{M\leq m\leq N}|S_m-S_M|>\varepsilon\right)\\
    &=\lim_{N\to\infty}P\left(\max_{M< m\leq N}|S_m-S_M|>\varepsilon\right)&(S_m-S_M=0,\text{when }m=M)\\
    &\le\lim_{N\to\infty}\frac{Var(\sum_{i=M+1}^NX_i)}{x^2}\\
    &=\frac1{\varepsilon^2}\sum_{i=M+1}^\infty E(X_i^2)\to0&\text{(by condition of }\sum_{i=1}^\infty E(X_i^2)<\infty)
    \end{align}
    $$
  
  - By all above arguments, we have for all $\epsilon>0$, then:
    $$
    \begin{align}
    P(\omega_{M}>2\varepsilon\:i.o.)&=\lim_{M\to\infty}P(\omega_M>2\varepsilon)\le \lim_{M\to\infty}2P\left(\sup_{m\geq M}|S_m-S_M|>\varepsilon\right)\to 0
    \end{align}
    $$
    QED



- **Example**. Let $X_1,X_2,...$ be Rademacher variables, i.e., $P(X_i=1)=P(X_i=-1)=\frac12$.

  - Let $Y_i=\frac{X_i}{i^\alpha}$, where $\alpha>\frac12$. 

  - Since $\sum_{i=1}^\infty E(Y_i^2)=\sum_{i=1}^\infty\frac1{i^\alpha}<\infty$, then $\sum_{i=1}^\infty Y_i$ converges by **Theorem 2.5.3**



### 3.2 Kolmogorov’s Three-series Theorem

- **Theorem 2.5.4.** Kolmogorov’s Three-series Theorem. Let $X_1,X_2,...$ be a sequence of independent random variables. Let $A>0$ be a constant. Define $Y_i=X_i1_{\{|X_i|\le A\}}$. Then $\sum_{n=1}^\infty X_n$ converges if three conditions hold:
  $$
  \begin{array}{l}\mathrm{(i)~}\sum_{n=1}^\infty P(|X_n|>A)<\infty\\\mathrm{(ii)~}\sum_{n=1}^\infty EY_n\text{ converges, and}\\\mathrm{(iii)~}\sum_{n=1}^\infty\mathrm{Var}(Y_n)<\infty,\end{array}
  $$
  **Proof:**

  - Let $\mu_n=EY_n$. From condition $(iii)$, we know $\sum_{n=1}^\infty E(Y_n-\mu_n)^2<\infty$. By **theorem 2.5.3**, we know $\sum_{n=1}^\infty (Y_n-EY_n)$ converges almost surely. This implies $\sum_{n=1}^\infty Y_n-\sum_{n=1}^\infty EY_n$ converges almost surely. Again, $\sum_{n=1}^\infty EY_n$ is real, and think of for almost all $\omega\in\Omega$, we have $\sum_{n=1}^\infty Y_n(\omega)-\sum_{n=1}^\infty EY_n<\infty$.

  - From condition $(ii)$, since the real sequence $\sum_{n=1}^\infty EY_n$ converges, it means $\sum_{n=1}^\infty EY_n<\infty$, and thus $\sum_{n=1}^\infty Y_n$ converges almost surely.

  - Above condition $(i)$ implies $\sum_{n=1}^\infty P(|X_n|>A)=\sum_{n=1}^\infty P(X_n\ne Y_n)<\infty$, so with B-C lemma $(i)$, we have:
    $$
    P(X_n\neq Y_n\:i.o.)=0
    $$

  - Therefore, $X_n=Y_n$ almost surely and thus: $\sum_{n=1}^\infty X_n$ converges a.s. (see Theorem 2.4.1 proof Step 1: 4th and 5th bullet points)

- **Theorem 2.5.5**. Kronecker’s Lemma. If $a_n\to\infty$ and $\sum_{n=1}^\infty\frac{x_n}{a_n}$ converges, then $\frac{\sum_{i=1}^nx_n}{a_n}\to0$. Proof omitted.

- **Alternative Proof of Thoerem 2.4.1 (SLLN)**. 

  - Still, WLOG, assume $X_i\ge 0$, otherwise consider $X_i=X^+_i-X^-_i$. Let $Y_{k}=X_{k}1_{\{|X_{k}|\leq k\}},\:T_{n}=\sum_{i=1}^{n}Y_{i}$

  - In Step 1 of raw proof of SLLN, we have shown $P(X_{k}\neq Y_{k}\:i.o.)=0$ and thus it suffices to show $\frac{T_n}{n}\to\mu\;\;a.s.$

  - We also shown that $\frac{ET_n}{n}\to\mu$ as a subpoint in Step 2. To make it more clear, I draft it here again:

    - Since $P(X_{k}\neq Y_{k}\:i.o.)=0$, we have $X_n=Y_n\;\; a.s.$ and by DCT, we have $E(Y_n)\to E(X_n)=\mu$
    - Then $\frac{ET_n}{n}=\frac{\sum_{i=1}^nE(Y_n)}{n}\to\mu$.

  - Therefore, we only need to show:
    $$
    \frac{T_n-ET_n}{n}=\sum_{k=1}^n\frac{Y_k-EY_k}n\to0\quad a.s.
    $$

  - By Kronecker’s Lemma, we only NTS:
    $$
    \sum_{k=1}^n\frac{Y_k-EY_k}k\text{ converges a.s.}
    $$

  - Verify three conditions in **Theorem 2.5.4**

    - $(i)$: Let $A=1$:

    $$
    \sum_{k=1}^\infty P\left(\left|\frac{Y_k-EY_k}k\right|>1\right)=\sum_{k=1}^nP\left(\left|{Y_k-EY_k}\right|>k\right)\le E|Y_1-EY_1|\le E|Y_1|\le EX_1<\infty\\
    (\text{lemma in Theorem 2.4.1})
    $$

    - $(ii)$: Let $Z_k=\frac{Y_k-EY_k}k$, then $E(Z_k)=0,\forall k$. So:
      $$
      \sum_{k=1}^\infty E\left(Z_k1_{\{|Z_k|\le 1\}}\right)\le\sum_{k=1}^\infty E\left(Z_k\right)=0
      $$

    - $(iii)$:
      $$
      \sum_{k=1}^\infty\mathrm{Var}\left(\frac{Y_k-EY_k}k\right)\leq\sum_{k=1}^n\frac{E(Y_k^2)}{k^2}<\infty
      $$
      

### 3.3 Marcinkiewicz-Zygmund SLLN

- **Theorem 2.5.8**. Marcinkiewicz-Zygmund SLLN. Let $X_1,X_2,...$ be iid with $EX_i=0,\; E|X_i|^p$ for some $1<p<2$. Then with $S_n=\sum_{i=1}^n  X_i$, we have:
  $$
  \frac{S_n}{n^{1/p}}\to0\quad a.s.
  $$
  **Proof**

  - By Kronecker’s lemma, it suffices to prove:
    $$
    \sum_{n=1}^\infty\frac{X_n}{n^{1/p}}\quad\text{converges a.s.}
    $$

  - Choose $A=1$ in Kolmogorov’s Three-series Theorem, and thus define:
    $$
    Y_i=\frac{X_i}{i^{1/p}}1_{\{|X_i|\leq i^{1/p}\}}
    $$

  - Then verify three conditions:

    - $\mathrm{(i)}$: (note that the inequality below is because lemma in **Theorem** 2.4.1)

    $$
    \quad\sum_{n=1}^\infty P(|\frac{X_n}{n^{1/p}}|>1)=\sum_{n=1}^\infty P(|X_1|^p>n)\leq E|X_1|^p<\infty
    $$

    - $\mathrm{(ii)}$:
      $$
      \begin{aligned}
      \sum_{i=1}^\infty|EY_i|&=\sum_{i=1}^\infty\frac{1}{i^{1/p}}|EX_i1_{\{|X_i|\leq i^{1/p}\}}|\\
      
      &=\sum_{i=1}^\infty\frac{1}{i^{1/p}}|EX_i1_{\{|X_i|>i^{1/p}\}}|\quad\quad\quad\;\;\quad(\text{from }EX_i=0=E(X_i1_{\{|X_i|\le i^{1/p}\}}+X_i1_{\{|X_i|>i^{1/p}\}}))\\
      
      &\leq\sum_{i=1}^\infty\sum_{j=i}^\infty\frac{1}{i^{1/p}}E[|X_1|1_{\{j\leq|X_1|^p<j+1\}}]\quad(\text{from the i.i.d. assumption})\\
      
      &=\sum_{j=1}^\infty\sum_{i=1}^j\frac{1}{i^{1/p}}E[|X_1|1_{\{j\leq|X_1|^p<j+1\}}]\quad(\text{Fubini})\\
      
      &\leq C_p\sum_{j=1}^\infty j^{1-\frac{1}{p}}E[|X_1|1_{\{j\leq|X_1|^p<j+1\}}]\quad
      \left(\text{think of }\sum_{i=1}^j\frac1{i^{1/p}}=1+\sum_{i=2}^j\frac1{i^{1/p}}\le 1+\sum_{i=2}^j\int_{i-1}^i\frac1{x^{1/p}}dx=1+\int_{1}^j{x^{1/p}}dx\right)\\
      
      &\leq C_p\sum_{j=1}^\infty E\left\{(|X_1|^p)^{1-\frac{1}{p}}[|X_1|1_{\{j\leq|X_1|^p<j+1\}}]\right\}\;\;(j\le|X_1|^p \text{ make sense here is because }1_{\{j\leq|X_1|^p<j+1\}})\\
      
      &\leq C_pE[|X_1|^p]<\infty
      \end{aligned}
      $$

    - $(iii)$:
      $$
      \begin{aligned}
      \sum_{i=1}^\infty E[Y_i^2]&=\sum_{i=1}^\infty\frac{1}{i^{2/p}}E(X_i^21_{\{|X_i|\leq i^{1/p}\}})\\&=\sum_{i=1}^\infty\sum_{j=1}^i\frac{1}{i^{2/p}}E[X_1^21_{\{j-1<|X_1|^p\leq j\}}]\\&=\sum_{j=1}^\infty\sum_{i=j}^\infty\frac{1}{i^{2/p}}E[X_1^21_{\{j-1<|X_1|^p\leq j\}}]\\
      &\leq C_p\sum_{j=1}^\infty j^{1-\frac{2}{p}}E[X_1^21_{\{j-1<|X_1|^p\leq j\}}]\\&\leq C_p\sum_{j=1}^\infty E\left\{((|X_1|+1)^p)^{1-\frac{2}{p}}[X_1^21_{\{j\leq|X_1|^p<j+1\}}]\right\}\\&\leq C_pE[(|X_1|+1)^p]<\infty
      \end{aligned}
      $$
      

- **Exercise.** 

  - Proof: with all Theorem 2.5.8 setup, if $\frac{S_n}{n^{1/p}}\to0\;\;a.s.$, then $E|X_1|^p<\infty$.

    - We know from condition that:

    $$
    \frac{X_n}{n^{1/p}}=\frac{S_n}{n^{1/p}}-\frac{S_{n-1}}{(n-1)^{1/p}}\frac{(n-1)^{1/p}}{n^{1/p}}\to 0 \;\;a.s.
    $$

    - By almost surely **Fact**, let $\epsilon=1$, then we have $P(|\frac{X_{n}}{n^{1/p}}|>1\:i.o.)=0$. And by contraposition of B-C lemma $(ii)$, we know:

    $$
    \sum_{n=1}^\infty P\left(\left|\frac{X_n}{n^{1/p}}\right|>1\right)=\sum_{n=1}^\infty P\left(|X_n|^p>n\right)<\infty
    $$

    - Therefore by iid assumption:
      $$
      E|X_1|^p\overset{lemma}\leq\sum_{n=0}^\infty P(|X_1|^p>n)\le1+\sum_{n=1}^\infty P(|X_1|^p>n)\le1+\sum_{n=1}^\infty P(|X_n|^p>n)<\infty
      $$

  

  - Proof: Let $X_1,X_2,...$ be iid with $E|X_i|^p$ for some $0<p<1$. Then with $S_n=\sum_{i=1}^n  X_i$, we have:

  $$
  \frac{S_n}{n^{1/p}}\to0\quad a.s.
  $$

  ​	We just need to replace verification of $(iii)$ condition in the proof  of Marcinkiewicz-Zygmund SLLN by:

$$
\begin{aligned}
\sum_{i=1}^\infty |EY_i|&=\sum_{i=1}^\infty\frac{1}{i^{1/p}}|E(X_i1_{\{|X_i|\leq i^{1/p}\}})|\\
&\le\sum_{i=1}^\infty\sum_{j=1}^i\frac{1}{i^{1/p}}E[|X_1|1_{\{j-1<|X_1|^p\leq j\}}]\\
&=\sum_{j=1}^\infty\sum_{i=j}^\infty\frac{1}{i^{1/p}}E[|X_1|1_{\{j-1<|X_1|^p\leq j\}}]\\
&\leq C_p\sum_{j=1}^\infty j^{1-\frac{1}{p}}E[|X_1|1_{\{j-1<|X_1|^p\leq j\}}]\\
&\leq C_p\sum_{j=1}^\infty E\left\{((|X_1|+1)^p)^{1-\frac{1}{p}}[|X_1|1_{\{j\leq|X_1|^p<j+1\}}]\right\}\\&\leq C_pE[(|X_1|+1)^p]<\infty
\end{aligned}
$$



## Appendix

- Why countable unions of decreasing or increasing $\sigma$-field is not a $\sigma$-field?

  - Question: We has such equality of $\sigma$-field of infinitely many random variables:
    $$
    \sigma(X_1,X_2,...)=\sigma(\cup_{i=1}^\infty\sigma(X_1,...,X_i))
    $$

  - It seems right to express as (which is in fact wrong):
    $$
    \sigma(X_1)\subset\sigma(X_1,X_2)\subset\cdots\\\Downarrow\\
    \cup_{i=1}^\infty\sigma(X_1,...,X_i)=\sigma(X_1,X_2,...)
    $$

  - Why the latter is wrong? Because countably unions of $\sigma$-fields is not $\sigma$-field, even if these $\sigma$-field is sequentially decreasing or increasing. The latter is wrong because the $\cup_{i=1}^\infty\sigma(X_1,...,X_i)$ is infinite unions *from unions of many finite $\sigma$-field*, while the RHS is essentially a infinite one. In other words, it is wrong because of the essence of how we compute infinite unions

  - Think of an [example](https://math.stackexchange.com/questions/5119/example-where-union-of-increasing-sigma-algebras-is-not-a-sigma-algebra): Let $\mathcal F_n=\sigma(\{1,2,...,n\})$. Given the event $A_n=\{2n\}$, it is clear that $A_n\in\cup_{n=1}^\infty \mathcal F_n$. But $\cup_{n=1}^\infty A_n\not\in\cup_{n=1}^\infty \mathcal F_n$ because we can see $\cup_{n=1}^\infty A_n$ as all even numbers. Since it is impossible for any $\mathcal F_k$ to contain all even numbers on real line, then $\not\in$ holds. But you may ask why $\mathcal F_k$ does not contain even numbers when $k\to\infty$. It is because we take countable unions of finite index, which means we take limit by finding sufficiently large but still finite index.


# Probability Theorem

>  Author: OP
>
> Created time: 2022.04.09
>
> Last edited time: 2022.04.11

## Probability

$$
\textbf{Setting: }\\
\text{Probability is a real valued function $P$ that assigns to each event $A$}\\
\text{in the sample space $S$. }\text{It is called the probability of event $A$.}\\
\text{Let event $B$ have probability larger than 0.}\\
~\\

\text{Three axioms:}\\
P(A)\ge 0\text{, for all event $A$}\\
P(S)=1\\
\text{If $A_1,A_2,\dots$ are disjoint events i.e. $A_i\cap A_j=\empty$ for $i\ne j$, }\\
\left\{
\begin{aligned}
P(A_1\cup\dots\cup A_k)=P(A_1)+\dots+P(A_k),&\ \  \text{any positive integer k}\\
P(A_1\cup A_2\cup \dots)=P(A_1)+P(A_2)+\dots,&\ \  \text{a countably infinite number of events}\\
\end{aligned}
\right.\\
~\\

\textbf{Important properties: }\\
P(A^c)=1-P(A)\\
A\subset B\Rightarrow P(A)\le P(B)\\
P(A\cup B)=P(A)+P(B)-P(A\cap B)\\
P(A)=P(A\cap B)+P(A\cap B^c)\\
\\
$$

## Inclusion-exclusion Formula

$$
\textbf{Setting:}\\
\text{For any collection of events $A_1,A_2, A_3,\dots,A_n$, we have}\\
P\left( \bigcup_{i=1}^n A_i \right) = \sum_{1\le i \le n}P(A_i)\\
-\sum_{1\le i <j \le n}P(A_i \cap A_j)\\
+\sum_{1\le i <j < l\le n}P(A_i \cap A_j \cap A_l)\\
-\sum_{1\le i <j <l <h \le n}P(A_i \cap A_j\cap A_l \cap A_h)\\
\dots\\
+(-1)^{n-1}P(A_1\cap A_2\dots \cap A_n)\\
~\\
\textbf{Special case: }\\
\text{Let $P_i,1\le h\le  n$ be the probability of any intersections of $h$ subsets. }\\
\text{Any intersections of $h$ subsets has the same probability. }\\
i.e. P_1=P(A_1)=P(A_2)=\dots=P(A_n)\\
P_2=P(A_1 \cap A_2)=P(A_1 \cap A_3)=\dots =P(A_{n-1}\cap A_n)\\
~\\
P\left( \bigcup_{i=1}^n A_i \right) =C^n_1P_1\\
-C^n_2 P_2\\
+C^n_3 P_3\\
\dots\\
+(-1)^{n-1}C^n_nP(A_1\cap A_2\dots \cap A_n)\\
\\
$$

## Boole's Inequality

$$
\textbf{Setting:}\\
\text{For any collection of events $A_1,A_2, A_3,\dots,A_n$, we have}\\
P\left( \bigcup_{i=1}^n A_i \right)\le \sum_{i=1}^n P(A_i)\\
\\
\textbf{Generally:}\\
P\left( \bigcup_{i=1}^\infty A_i \right)\le \sum_{i=1}^\infty P(A_i)\\
\\
$$

## Bonferroni Inequality

$$
\textbf{Setting:}\\
\text{For any collection of events $A_1,A_2, A_3,\dots,A_n$, we have}\\
P\left( \bigcap_{i=1}^n A_i \right)\ge \sum_{i=1}^n P(A_i)-(n-1)\\
\\
$$

## Conditional Probability
$$
\textbf{Setting:}\\
\text{Let event $A$ be some random event.}\\
\text{Let event $B$ have probability larger than 0.}\\
\text{The conditional probability of $A$ given $B$ is denoted by $P(A|B)$.}\\
\\
P(A|B)=\frac{P(A\cap B)}{P(B)}\\
\Rightarrow P(A\cap B)=P(A|B)P(B)\\
\\
\textbf{Generally:}\\
\text{For any collection of events $A_1,A_2, A_3,\dots,A_n$,}\\
\text{if $P(A_1),P(A_1 \cap A_2),\dots,P(A_1\cap A_2 \cap A_3\cap \dots \cap A_{n-1})>0$, then:}\\
\\
P(A_1\cap A_2 \cap A_3\cap \dots \cap A_n)=P(A_n|A_1\cap A_2 \cap A_3\cap \dots \cap A_{n-1})\\
\times P(A_{n-1}|A_1\cap A_2 \cap A_3\cap \dots \cap A_{n-2})\\
\times P(A_{n-2}|A_1\cap A_2 \cap A_3\cap \dots \cap A_{n-3})\\
\dots\\
\times P(A_{3}|A_1\cap A_2)\times  P(A_{2}|A_1) \times P(A_1)\\
\\
\\
\textbf{Conditional Probability Density Function:}\\
\\
$$

## Chebyshev's Inequality

$$
\textbf{Setting:}\\
\text{Chebyshev's inequality uses the variance $\sigma^2$ to bound how far a random variable $X$}\\
\text{can deviate from its mean $\mu$.}\\
\\
P(|X-\mu|>t)\le\frac{\sigma^2}{t^2}, \text{ for any }t>0
$$



## Law of Total Probability

$$
\textbf{Setting:}\\
\text{Let denote $A\in 2^\Omega$.}\\
\text{Let denote $B_1,\dots,B_n$ is a partition of sample space $\Omega$,}\\
\text{which are disjoint events i.e. $B_i\cap B_j=\empty$ for $i\ne j$.}\\
\text{And they cover the whole sample space $\Omega$ i.i. $\bigcup_{i=1}^n B_i = \Omega$.}\\
\\
P(A)=
\left\{
\begin{aligned}
& \sum_{i=1}^nP(A|B_i)P(B_i)\\
& \int_{B_i\in S_B}P(A|B_i)P(B_i)\mathbf{d}B
\end{aligned}
\right.
\\
$$

## Bayes's Formula ==TBC==

$$
\textbf{Setting: }\\
\textbf{重写！！！！！！！！}\\
\text{Let denote $D\in 2^\Omega$.}\\
\text{Let denote $B_1,\dots,B_n$ is a partition of sample space $\Omega$.}\\
\\
\left\{
\begin{aligned}
P(B_i|D)&=\frac{P(D|B_i)P(B_i)}{\sum_{j=1}^n P(D|B_j)P(B_j)},\quad \text{for each $i=1,2,\dots,n$}\\
P(B_i|D)&=\frac{P(D|B_i)P(B_i)}{\int_{B_i\in S_B} f(D|B_j)f(B_j)\mathbf{d}B}\\
\end{aligned}
\right.\\
\\
\textbf{Remark:}\\
\text{The event $D$ represents the "Data".}\\
\text{The event $B_i$ represents a possible "state of nature".}\\
\text{$P(B_i)$ is the "prior probability" of $B_i$ before new data becomes available.}\\
\text{$P(D|B_i)$ represents the "likelihood (probability)" of the data}\\
\text{when the state of nature is $B_i$.}\\
\text{$P(B_i|D)$ is the "posterior probability" of the state of nature $B_i$}\\
\text{given the data $D$.}\\
posterior\ probability=\frac{likelihood\ \times\ prior\ probability}{total\ probability\ of\ event\ D}\\
\\
\textbf{Bayes's rule (statistical inference):}\\
p_\Theta(\theta):\text{prior distribution} \\
p_{\Theta|Y}(\theta|y):\text{posterior distrbution} \\
f_{Y|\Theta}(y|\theta):\text{likelihood}\\
\\
P(\Pi=\pi|Y=y)=\frac{P(\Pi=\pi \cap Y =y)}{P}\\
\\
$$

### Conjugate Distribution

$$
\textbf{Setting:}\\
\text{If the posterior distribution is in the same probability distribution family}\\
\text{as the prior probability distribution, }\\
\text{the prior and posterior are then called conjugate distributions.}\\
\text{The prior is called a conjugate prior for the likelihood function.}
$$

| $p_\Theta(\theta)$<br />Prior distribution<br />  $\Theta\sim \dots$ | $f_{Y_1,\dots,Y_n|\Theta}(y_1,\dots,y_n|\theta)$<br />Likelihood distribution  ($Y_1,\dots,Y_n$ are i.i.d.)<br />$Y_1,\dots,Y_n|\Theta=\theta\sim\dots$ | $p_{\Theta|Y_1,\dots,Y_n}(\theta|y_1,\dots,y_n)$<br />Posterior distribution<br /> $\Theta|Y_1,\dots,Y_n=y_1,\dots,y_n\sim\dots$ |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| $Beta(\alpha,\beta)$                                         | $ Bin(n,\theta)$                                             | $ Beta(\alpha+\sum_{i=1}^ny_i,\beta+n^2-\sum_{i=1}^ny_i)$    |
| $Gamma(\alpha,\lambda)$                                      | $Possion(\theta)$                                            | $Gamma(\alpha+\sum_{i=1}^ny_i,\lambda+n)$                    |
|                                                              | $G(\theta)$                                                  |                                                              |
|                                                              | $N(\theta,\sigma^2)$                                         |                                                              |

$$
\begin{array}{| c | c | c |}\hline

		p_\Theta(\theta) & f_{Y_1,\dots,Y_n\mid\Theta}(y_1,\dots,y_n\mid\theta) & p_{\Theta \mid Y_1, \dots, Y_n} (\theta \mid y_1, \dots, y_n)\\ 
        \textbf{Prior Distribution} & \textbf{Likelihood Distribution (}Y_1,\dots,Y_n \textbf{ are i.i.d.)} & \textbf{Posterior Distribution} \\
        \Theta \sim \dots & Y_1,\dots,Y_n\mid \Theta=\theta \sim \dots & \Theta \mid Y_1, \dots, Y_n=y_1, \dots, y_n \sim \dots \\ \hline
		Beta(\alpha,\beta) & Bin(n,\theta) & Beta(\alpha+\sum_{i=1}^n y_i,\beta+n^2-\sum_{i=1}^n y_i) \\ \hline
		Gamma(\alpha,\lambda) & Possion(\theta) & Gamma(\alpha + \sum_{i=1}^n y_i, \lambda + n) \\ \hline
		 & G(\theta) & \\ \hline
		 & N(\theta,\sigma^2) & \\ \hline

\end{array}
$$



### Credible Interval

$$
\textbf{Setting:}\\
\text{A credible interval for a parameter $\theta$ is computed as a range of values}\\
\text{for which the posterior distribution of $\Theta$ has some prescibed probability such as $95\%$.}\\
\\
\text{How to interpret credible interval?}\\
\text{No true value. Only subjective value based on observed data.}\\
\text{The probability that $\Theta$ lies in the interval is 0.95.}\\
$$
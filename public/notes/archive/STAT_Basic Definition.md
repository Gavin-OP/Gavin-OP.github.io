# Basic Definition

> Author: OP
>
> Created time: 2022.04.09
>
> Last edited time: 2022.04.11

## Cardinality

$$
\textbf{Setting:}\\
\text{In mathematics, the cardinality of a set $A$ is a measure of }\\
\text{the "number of elements" of the set, denoted by $|A|$.}\\
\\
\textbf{Example:}\\
\text{Let $\Omega=\{1,2,3\}.$}\\
|\Omega|=3\quad \text{i.e. The cardinality of sample sapce is 3.}\\
$$

## CDF

$$
\textbf{Setting: }\text{Cumulative distribution function (c.d.f.), denotes by $F(x).$}\\
F(x)=P(X\le x)\\
\\
\textbf{Properties:}\\
F(X)\text{ is non decreasing and right continuous.}\\
P(a<X\le b)=F(b)-F(a)\\
P(X>a)=1-F(a)\\
0\le F(X)\le 1\\
F(-\infty)=0\quad F(\infty)=1\\
\left\{
\begin{aligned}
f(x)=F(x)-F(x-1), \text{for discrete case}\\
f(x)=\frac{\mathbf{d}F(x)}{\mathbf{d}x}, \text{for continuous case}
\end{aligned}
\right.
\\
$$

## Combination

$$
\textbf{Setting: }\\
\text{A combination of size $m$ is a subset of $m$ items taken from a larger set}\\
\text{(with $n\ge m$ items). The number of this combinations is denoted by}\\
\text{ $_nC_m, C^n_m, or \binom{n}{m}$, read as "n choose m".}\\
\text{The order of the elements does NOT matter.}\\
\\
m\text{: size of the combinations}\\
n\text{: size of the set from which the combinations are drawn}\\
\\
C^n_m=\frac{n!}{m!(n-m)!}\\
\\
\textbf{Example:}\\
C^5_3=\frac{5!}{3!2!}=\frac{5\times4\times3\times2\times1}{3\times2\times1\times2\times1}=\frac{5\times4\times3}{3\times2\times1}
$$

## Event

$$
\textbf{Setting:}\\
\text{Events are subsets of $\Omega$, which denoted with upper case letter such as $A, B, C\dots $.}\\
\\
\textbf{Example:}\\
\text{Let event $A$ denotes that roll a dice with an even number.}\\
A=\{2,4,6\}\\
\text{Let event $B$ denotes that the optimal time for a chemical process.}\\
B=[9,\infty)	\\
$$

## Independence

$$
\textbf{Setting:}\\
\text{If occurrence of event $A$ and event $B$ does not affect the probability of other,}\\
\text{we name there two events independent events.}\\

\\
\textbf{Important properties:}\\
\text{If event $A$ and event $B$ are independent:}\\
P(A\cap B)=P(A)P(B)\\
P(A|B)=P(A)\\
A\cap B \ne \emptyset\\
A \text{ is not a subset of }B\\
A^c\text{ and }B,
A^c\text{ and }B^c,
A\text{ and }B^c\text{ are also independent.}\\
\\
\text{If event $A_1,A_2,\dots, A_n$ are independent:}\\
P(A_i\cap A_j\cap A_k \cap \dots \cap A_r)=P(A_i)P(A_j)P(A_k)\dots P(A_r)\\
\text{for all $1 \le i \le j \le k \le \dots \le r\le n$}\\
\\
\textbf{Independent random variables:}\\
\text{Random variables $X$ and $Y$ are independent}\\
\text{if and on if the following equivalent conditions hold:}\\
\\
f_{X,Y}(x,y)=f_X(x)f_Y(y)\\
f_{Y|Z}(y|z)=f_Y(y)\\
f_{Z|Y}(z|y)=f_Z(z)\\
$$

## MGF

$$
\textbf{Setting: }\text{Moment generating function (m.g.f), denotes by $M(t)$.}\\\text{ Let $X$ be a discrete random variable with p.m.f $f(x)$. }
M_x(t)=E(e^{tx})\\
\\
For\ discrete\ random\ variable,\ M_x(t)=\sum_xe^{tx}f(x)=\sum_xe^{tx}P(X=x)\\
For\ continuous\ random\ variable,\ M_x(t)=\int_{-\infty}^{\infty}e^{tx}f(x)\mathrm{d}x\\
\\
\textbf{Important properties:}\\
M_x^k(0)=E(X^k)\\
Z=aX+b\quad  (a, b \in \R),\quad M_z(t)=e^{bt}M_x(at)\\
Y=X_1+X_2+\dots + X_n, M_Y(t)=\prod_{i=1}^n M_{X_i}(t)\\
\text{Same MGF}
$$

## Mode

$$
\textbf{Setting:}\\
\text{THe mode of a distribution is a value maximizing the PMF or PDF.}\\
\text{It may not be unique.}
$$

## Moment

$$
\textbf{Setting:}\\
\text{Let $X$ be a random variable. }\\
\text{Its $k$th moment for $k=1,2,\dots$ is $E(X^k)$,}\\
\text{which exists if the expectation is finite. }\\
\\
\textbf{Important setting:}\\
M_x^k(0)=E(X^k)
$$



## Outcome

$$
\textbf{Setting: }\\
\text{An outcome is the result of a random experiment, which denotes by $\omega$.}\\
\\
\textbf{Property:}\\
\text{The relationship with sample space $\Omega$: $\omega \in \Omega$}\\
\text{The relationship with event $A$: $\omega \in A$}\\
\\
\textbf{Example:}\\
\text{Roll a dice once and the dice lands with 5. }\\
$$

## PDF

$$
\textbf{Setting: }\text{Probability density function (p.d.f.) is for continuous random variables $X$,}\\ 
\text{denotes by f(x).}\\
\text{f(x) can NOT be interpreted as a probability. }\\
\\
f(x)=\lim_{\Delta\rightarrow 0} \frac{P(x\le X\le x+\Delta)}{\Delta}\\
\\
\text{p.d.f. must satisfy: }\\
\left\{\begin{aligned}
& f(x)\ge0\\
& P(a\le X\le b)
=P(a< X< b)
=\int_a^bf(x)\mathrm{d}x
=F(b)-F(a)\\
& \int_{-\infty}^{\infty}f(x)\mathrm{d}x=1\\
\end{aligned}\right. \\
\\
\textbf{Relationship with c.d.f.(F(x)):}\\
F(x)=\int_{-\infty}^xf(t)\mathrm{d}t\\
f(x)=F'(x)\\
\\
\textbf{Joint PDF:}\\
\text{Suppose random variables $X$ and $Y$ are continuous,}\\
\text{joint PDF is the probability is denoted by $f_{X,Y}(x,y)$.}\\
\\

\textbf{Marginal PDF:}\\
\text{Marginal PDF of $X$ is denoted by }f_X(x).\\
\\
f_X(x)=\int_{Y\in S_Y}f_{X,Y}(x,y)\mathbf{d}y
$$

## Permutation

$$
\textbf{Setting: }\\
\text{A permutation of a set is an arrangement of its elements in a linear order, }\\
\text{denoted by $P^n_m$.}\\
\\
P^n_m=\frac{n!}{(n-m)!}=m!\times C^n_m\\
$$

## PMF

$$
\textbf{Setting: }\\
\text{Probability mass function (p.m.f.) is for discreate random variable $X$,}\\
\text{denotes by $f(x)$ or $p(x)$.}\\
\\
f(x)=p(x)=P(X=x)\\
\\
\textbf{Properties:}\\
f(x)\ge0\\
\sum_{x\in S_X}f(x)=1\\
P(X\in A)=\sum_{x\in A}f(X),\quad \left[e.g.\ P(X=1)=f(1)\right]\\

\\
\textbf{Joint PMF:}\\
\text{Suppose random variables $X$ and $Y$ are discrete,}\\
\text{joint PMF is the probability that $X$ takes the value $x$ and $Y$ takes the value $y$,}\\
\text{denoted by $f_{X,Y}(x,y)$.}\\
\\
f_{X,Y}(x,y)=P(X=x\cap Y=y)\\
\\
\textbf{Marginal PMF:}\\
\text{Marginal PMF of $X$ is denoted by }f_X(x).\\
\\
f_X(x)=\sum_{Y\in S_Y}f_{X,Y}(x,y)
$$

## Power Set

$$
\textbf{Setting:}\\
\text{The power set of sample space $\Omega$ is the set of all possible subsets of sample space, }\\
\text{denoted by $2^{\Omega}$.}\\
\\
\textbf{Property:}\\
\text{If $\Omega$ has $n$ elemets, then $2^{\Omega}$ has $2^n$ elements, denoted by $\# (2^{\Omega})=2^{\#\Omega}$}\\
\\
\textbf{Example:}\\
\text{Let $\Omega=\{1,2,3\}.$}\\
2^{\Omega}=\{\emptyset,\{1\},\{2\},\{3\},\{1,2\},\{1,3\},\{2,3\},\{1,2,3\}\}\\\
\# (2^{\Omega})=2^{\#\Omega}=2^3=8\\
$$

## Random Experiment

$$
\textbf{Setting:}\\
\text{An experiment whcih outcome cannot be determined beforehand.}\\
\\
\textbf{Example:}\\
\text{Roll a dice. }\\
\text{Record the wind speed in some region. }\\
$$

## Random Variable

$$
\textbf{Setting:}\\
\text{A Random variable is a numeric feature measured}\\
\text{from the outcome of a random event, which is denoted by $X,Y$ or etc.}\\
\text{A random variable is a function on the sample space.}\\
X:\Omega\rightarrow\R\\
X(\omega)=x\quad\text{for }\omega\in\Omega\\
~\\
\text{Discrete}\\
\text{A random variable $X$ is discrete if}\\
\R\text{ is finite (i.e. $\#(\R)<\infty$) or }\R\text{ is countable (e.g. $\R=\N$ or $\R = \Z$). }\\
~\\
\text{Continuous}\\
\text{A random variable $X$ is continuous if $\R$ is an interval.}\\
~\\
\textbf{Range:}\\
\text{The range of random variable $X$ is the set of all the possible values}\\
\text{that $X$ can take, which is denoted by $\R$.}\\
~\\

\textbf{Example:}\\
\text{We toss a coin 5 times.}\\
\Omega=\{(\omega_1,\omega_2,\omega_3,\omega_4,\omega_5),\ \omega_i\in\{H,T\}\}\\
X(\omega)=\text{number of heads in }\omega\\
X((H,H,T,T,T))=3\\
\R=\text{Range of }X=\{0,1,2,3,4,5\}\\
\\
$$

## Sample Space

$$
\textbf{Setting: }\\
\text{Sample space is a complete list (or description) of the possible outcomes}\\
\text{of a random experiment. }
\text{Denoted with $\Omega$ or $S$. }\\
~\\
\textbf{Example:}\\
\text{Assume we flip two coins, $H$ denoted head, $T$ denoted tail. }\\
\Omega=\{HH, HT, TT,TH\}\\
|\Omega|=4\quad \text{i.e. The cardinality of sample sapce is 4.}\\
~\\
\text{Let event $A$ denotes that first coin is a head.}\\
A=\{HH, HT\}\\
A\subset\Omega\\
~\\
HH\text{ is an outcome of sample space.}\\
\omega=HH\\
\omega\in \Omega\\
\omega \in A\\
~\\
2^\Omega=\{\emptyset,\{HH\},\{HT\},\{TT\},\{TH\},\{HH,HT\},\{HH,TT\},\\\{HH,TH\},\{HT,TT\},\{HT,TH\},\{TT,TH\},\{HH,HT,TT\},\\
\{HH,HT,TH\},\{HH,TT,TH\},\{HT,TT,TH\},\{HH,HT,TT,TH\}\}\\
\#2^\Omega=2^4=16\\
$$

## Set Operation

$$
\textbf{Setting:}\\
\text{Empty set: }\emptyset\\
~\\
\text{Is an element of: }\in\\
\omega \in A \text{ means $\omega$ is an element of event $A$.}\\
~\\
\text{Is not an element of: }\notin\\
\omega \notin A \text{ means $\omega$ is not an element of event $A$.}\\
~\\
\text{Subset: }\subseteq\\
D\subseteq D \text{ means $D$ is a proper subset of $D$. }\\
\{1,2,3,4\}\subseteq\{1,2,3,4\}\\
~\\
\text{Proper subset: }\subset\\
C\subset D \text{ means $C$ is a subset of $D$. }\\
\{1,2,3\}\subset\{1,2,3,4\}\\
~\\
\text{Union: }\cup\\
\omega \in A\cup B\Leftrightarrow \text{$\omega \in A$ or $\omega \in B$}\\
~\\
\text{Intersection: }\cap\\
\omega \in A\cap B\Leftrightarrow \text{$\omega \in A$ and $\omega \in B$}\\
~\\
\text{Complement: }A^c\\
\omega\in A^c \Leftrightarrow \omega \notin A\\
~\\
\text{Difference: }-\\
A-B\Leftrightarrow A \cap B^c\\
~\\
\text{Symmetric difference: }\\
A\triangle B\Leftrightarrow (A\cap B^c)\cup(A^c\cap B)\\
~\\
\textbf{Properties: }\\

\text{Commutative: }\\
\left\{
\begin{aligned}
A \cup B=B \cup A\\
A \cap B=B \cap A\\
\end{aligned}
\right.\\
~\\
\text{Associative: }\\
\left\{
\begin{aligned}
A\cup B\cup C =(A\cup B)\cup C=A\cup (B\cup C)\\
A\cap B\cap C =(A\cap B)\cap C=A\cap (B\cap C)\\
\end{aligned}
\right.\\
~\\
\text{Distributive: }\\
\left\{
\begin{aligned}
(A\cup B)\cap C=(A\cap C)\cup(B\cap C)\\
(A\cap B)\cup C=(A \cup C)\cap(B \cup C)\\
\end{aligned}
\right.\\
~\\
\text{De Morgan's Laws:}\\
\left\{
\begin{aligned}
(A\cup B)^c=A^c\cap B^c\\
(A\cap B)^c=A^c\cup B^c\\
\end{aligned}
\right.\\
~\\
\text{Mutually exclusive and exaustive:}\\
~\\
A=(A\cap B)\cup(A\cap B^c)\\
~\\
A\cup B = A \cup (B \cap A^c)\\
\\
$$

## Support

$$

$$












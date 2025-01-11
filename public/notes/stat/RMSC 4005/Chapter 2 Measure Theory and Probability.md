# Chapter 2 Measure Theory and Probability

# 2.1 Introduction

1. Probability Space $(\Omega, \mathcal{F}, \mathbb{P})$, where
   - $\Omega$ is the sample space
   - $\mathcal{F}$ is the $\sigma \text{-algebra}$ of $\Omega$
   - $\mathbb{P}$ is the probability measure
2. Random Variable X: $\Omega \rightarrow \R$ 
   - A function mapping from the sample space to a real number
   - X satisfies $X^{-1}(B) \in \mathcal{F}$, i.e, Given any range of real number, map it back, in the $\sigma \text{-algebra}$
   - 我们不能对所有的subset of sample space assign probabilities, 因此需要 $\sigma \text{-algebra}$

3. Necessities of defining the probability space:
   1. assign prob to events ≈ measure size of subsets of $\R$ 
   2. not able to assign probability to all possible events 
   3. focus on some **nice** subsets ($\mathcal{F}$) that we can assign probabilities

# 2.2 Countability of set

### 2.2.1 Definition of  finite,countable and uncountable

Definition 1 

- $J_n={1,2,··· ,n}$

- $J=\Z^+ \text{(all positive integers)}$
- $X∼Y$ if the sets X and Y can be put into **one-one correspondence** 

For any set A, we say: 

1. A is **finite** if $A∼ J_n$ for some n.

2.  A is **infinite** if A is not finite. 

3.  A is **countable** if $A∼J$ or $A∼J_n$ for some n.

4.  A is **uncountable** if A is neither finite nor countable.

Examples

1. A={9,5,2,7} is finite

   Bijective function $f : A \rightarrow J_4$ : e.g. 

   $f(9)=1, f(5)=2, f(2)=3, f(7)=4$

2.  A={2,4,···} is countable.

   Bijective function $f : A \rightarrow J$ : e.g. $f(x)=x/2$

3. $A={··· ,−3,−2,−1,0,1,2,3,···} $is countable.

   Bijective function $f : A \rightarrow J$ : e.g.

   $f(x)=(2x+1)1_{\{x \ge 0\}}+(-2x)1_{\{x < 0\}}$

   $f(0) = 1, f(−1) = 2, f(1) = 3, f(−2) = 4, f(2) = 5,..$

4. Array is countable

   - A **sequence** $\{x_i\}_{i=1,2,3,...}$ is **countable** (e.g. $f(x_i) = i$). 

   - A **double array** {xij}i=1,2,3···, j=1,2,3··· is **countable** using **diagonal argument:**

5.  **Rational number** $\Q = \{\frac{p}{q} : p,q \in \Z,q \ne 0\}$ is **countable**

   rational number can be regarded as a **double array**

6.  Let A be the set of **infinite sequence of** **binary numbers**, i.e., A is a set with elements taking the form such as 0.101100··· and 0.011001100···. The set A is **uncountable**
   -  Proof: *Suppose* on the contrary that A is *countable*. 
   - Then, there exists a bijective function $f : A \rightarrow J$ such that one can enumerate the elements in A as $x_1,x_2,...,x_n,....$
   - Construction: $y = 0.a_1 a_2 a_3 ··· $, where $a_i = 1− \text{the i-th digit of } x_i$. 
   - Contradiction: For any integer n, $y \ne x_n $ (different n-th digit) $ \Rightarrow y \notin A$.
   - Idea: 假设countable, 则存在双射f可以以sequence形式枚举出A中每一个元素，即可以把A按顺序count出来。因此可以建立一个y，这个y满足A的要求，却不在A里，因此有矛盾

# 2.2 Measurablity of sets

**Requirements for a measure** $l$:

1.  **Agreement to the concept of length**: $ l([a, b]) = b − a$
2. **Translational invariance**: $ l(E +c) = l(E),$ where $E +c =\{x+c|x \in E\},c \in \R.$
3.  **Countably additive**: $ l(\bigcup_{i=1}^\infty E_i)=\sum_{i=1}^\infty l(E_i)$  if $E_i$s are disjoint.

### 2.2.1 Singleton

1. **Singleton** = a set of a *single element*; e.g. $E_1 := \{\frac{1}{3}\} $

2. $l(E1) = 0$ 

   Proof: For any $\epsilon > 0, l(E_1) ≤ l [\frac{1}{3}− \frac{\epsilon}{2}, \frac{1}{3}+\frac{\epsilon}{2}] = \epsilon$.

3. Definition 8 (**Null set**): Null set $A ⊆ \R: l(A) = 0$

   In epsilon language: Formally, given any $\epsilon > 0$ we can find a sequence $\{I_n : n \ge 1\} $ of intervals such that $A \subseteq \bigcup_{n=1}^\infty I_n \quad \text{and} \quad \sum_{n=1}^\infty l(I_n) < \varepsilon$

4. Remark:  Empty set is null, but **null set may not be empty** (e.g. Singleton)

### 2.2.2 Open Intervals

1. **Open interval** $E_2 := (0, \frac{1}{3})$
2.  By  **countably additivity** property of measure, $\frac{1}{3}=l ([0, \frac{1}{3} ]) =l({0}) +l(E_2) +l(\frac{1}{3})=l(E_2)+0 $

### 2.2.3 Rational Numbers

-  One or finite number of singletons have measure 0.

- What about **infinitely many** singletons, e.g.  $E_3 := [0,1] \cap \Q$? A:  **null set**!

- proof: 

  1. $E_3$ is  a **countable** set $\Rightarrow E_3=\{x_1, x_2, x_3, ...\}$

  2. Fix $\epsilon > 0$,  a ***cover*** of $E_3 (E_3 \subseteq \bigcup_{n=1}^\infty I_n)$  can be constructed by:

     $I_1=(x_1-\frac{\varepsilon}{8}, x_1+\frac{\varepsilon}{8}) \\
     I_2=(x_2-\frac{\varepsilon}{16}, x_1+\frac{\varepsilon}{16}) \\
     I_3=(x_3-\frac{\varepsilon}{32}, x_1+\frac{\varepsilon}{32}) \\$

  3. $l(I_n) = \frac{\varepsilon}{2} \cdot \frac{1}{2^n} \quad \text{and} \quad \sum_{n=1}^\infty \frac{1}{2^n} = 1 \quad \Rightarrow \quad \sum_{n=1}^\infty l(I_n) = \frac{\varepsilon}{2} < \varepsilon$, 

  4. Idea: 这次建立cover时，我们用不固定(decreasing )的epsilon,使得sum收敛

- $l([0, 1]) = 1$ and $l(E_3) = 0$: there are far more irrational numbers in [0, 1] than rational numbers.

### 2.2.4 Cantor Set

The **Cantor set** is a typical example of **uncountable null** set.

1.  Define the interval $C_0 =[0, 1]$
2.  Remove $(\frac{1}{3}, \frac{2}{3})$, let $C_1 =[0, \frac{1}{3}] \cup [\frac{2}{3}, 1]$
3.  $C_2 =[0, \frac{1}{9}] \cup [\frac{2}{9}, \frac{3}{9}] \cup [\frac{6}{9}, \frac{7}{9}] \cup  [\frac{8}{9}, 1]$
4. Continuing in this way ⇒ C1 ⊃ C2 ⊃ C3 ⊃ ··· 
   Cn is the union of $2^n$ intervals, each of length $3^{-n}$
5. **Cantor set** is defined as the limit $E_4=\bigcap_{n=1}^\infty C_n $
6.  The Cantor set is closely related to **ternary expansion**:
   -  To locate a point $x \in [0,1]$ as $x=0.a_1a_2a_3···$with $a_i \in \{0,1,2\}$:
     1.  If x is at first, middle or last thirds of [0,1], assign $a_1=0,1,\text{or }2$
     2. If x is at first, middle or last thirds of $[\frac{a_1}{3}, \frac{a_1+1}{3}]$,assign $a_2=0,1,\text{or }2$
     3. ...continue forever
   -  $x \in E_4 \Rightarrow x=0.a_1a_2... \text{with } a_k \ne 1$

7. Cantor set $E_4$ is **uncountable** by the same argument for uncountable binary numbers
8. Cantor set $E_4$ is a **null** set
   -  Given any $\epsilon > 0$, choose a large n s.t. $(\frac{2}{3})^n < \epsilon$
   - $E_4=\bigcap_{n=1}^\infty C_n \ \Rightarrow \ E_4 \subseteq C_n \ \Rightarrow \  l(E_4) \le l(C_n) = (\frac{2}{3})^n < \epsilon$ 
   - Since $\epsilon$ is arbitrary, $l(E_4) = 0$

### 2.2.5 Non-measurable Set

1. Define a grouping rule of real number:
   - If $y-x \in \Q$, then we say $x ~ y$ or x and y are in the same group

2. The rule partitions $[0,1]=\bigcup_{\alpha \in \Gamma} A_\alpha$ into disjoint classes, e.g. $A_{\bar \alpha}=(\bigcup_{q \in \Q }(\pi+q)) \cap [0,1]$

3. Properties
   1. Any two elements in the same class differ by a rational number
   2. Elements from different classes differ by an irrational number
   3. Each $A_\alpha$ is countable since rational number is countable
   4. [0,1] is uncountable $\Rightarrow \ \Gamma$ is uncountable

4. Vitali set: 
   1. Pick one number $a_\alpha $ from each of the $A_\alpha$
   2. $E_5=\bigcup_{\alpha \in \Gamma}A_\alpha $
   3. Properties
      1. $x,y \in E_5, x \ne y, \Rightarrow x-y \notin \Q$
      2. $[0,1]=\bigcup_{\alpha \in \Gamma} A_\alpha \subseteq \bigcup_{q_n \in \Q \cap [-1,1]}(E_5+q_n) \subseteq [-1,2]$
      3. $[E_5+q_i] \cap (E_5+q_j)=\emptyset$
   4. Define $S_n=E_5+q_n$, where $\{q_n\}$ are rationals in [-1,1]
      1. $1=l([0,1]) \le l(\bigcup_{n=1}^\infty S_n) = \sum_{n=1}^\infty l(S_n)=\sum_{n=1}^\infty l(E_5) \le l([-1,2])=3$
      2. Contradiction: $\sum_{n=1}^\infty l(E_5) \in [1,3] $ is impossible since an infinite sum of the same non-negative constant = 0 or $\infty$
      3. $E_5$ is not measurable

   ## 2.4 Probability Space

   ###  2.4.1 Sample Space

   Probability Space is a triple $(\Omega, \mathcal{F}, \mathbb{P})$, where

   - $\Omega$ is the sample space,  a set describing all possible events
   - $\mathcal{F}$ is the $\sigma \text{-field}$, a class of subsets of $\Omega$
     - we assign probabilities to these “measurable sets”
   - $\mathbb{P}$ is the probability measure, a function $\mathbb{P}: \mathcal{F} \rightarrow [0,1]$ satisfying
     - $\mathbb{P}(\empty)=0, \mathbb{P}(\Omega)=1$
     - $\mathbb{P}(\bigcup_{i=1}^\infty A_i)=\sum_{i=1}^\infty \mathbb{P} (A_i)$

Remark: 

1. Domain of the function $\mathbb{P}$ is the $\sigma \text{-field } \mathcal{F} \text{ not } \Omega$ 
1. If $\omega \in \Omega \text{ and }  $




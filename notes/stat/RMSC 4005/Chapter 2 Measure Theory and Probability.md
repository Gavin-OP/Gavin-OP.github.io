# Chapter 2 Measure Theory and Probability

# 2.1 Introduction

1. Probability Space $(\Omega, \mathcal{F}, \mathbb{P})$, where
   - $\Omega$ is the sample space
   - $\mathcal{F}$ is the $\sigma \text{-algebra}$ of $\Omega$
   - $\mathbb{P}$ is the probability measure
2. Random Variable X: $\Omega \rightarrow \mathbb R$ 
   - A function mapping from the sample space to a real number
   - X satisfies $X^{-1}(B) \in \mathcal{F}$, i.e, Given any range of real number, map it back, in the $\sigma \text{-algebra}$
   - 我们不能对所有的subset of sample space assign probabilities, 因此需要 $\sigma \text{-algebra}$

3. Necessities of defining the probability space:
   1. assign prob to events ≈ measure size of subsets of $\mathbb R$ 
   2. not able to assign probability to all possible events 
   3. focus on some **nice** subsets ($\mathcal{F}$) that we can assign probabilities

# 2.2 Countability of set

### 2.2.1 Definition of  finite,countable and uncountable

Definition 1 

- $J_n={1,2,··· ,n}$

- $J=\mathbb Z^+ \text{(all positive integers)}$
- $X∼Y$ if the sets X and Y can be put into **one-one correspondence** 

For any set A, we say: 

1. A is **finite** if $A∼ J_n$ for some n.

2. A is **infinite** if A is not finite. 

3. A is **countable** if $A∼J$ or $A∼J_n$ for some n.

4. A is **uncountable** if A is neither finite nor countable.

Examples

1. A={9,5,2,7} is finite

   Bijective function $f : A \rightarrow J_4$ : e.g. 

   $f(9)=1, f(5)=2, f(2)=3, f(7)=4$

2. A={2,4,···} is countable.

   Bijective function $f : A \rightarrow J$ : e.g. $f(x)=x/2$

3. $A={··· ,−3,−2,−1,0,1,2,3,···} $is countable.

   Bijective function $f : A \rightarrow J$ : e.g.

   $f(x)=(2x+1)1_{\{x \ge 0\}}+(-2x)1_{\{x < 0\}}$

   $f(0) = 1, f(−1) = 2, f(1) = 3, f(−2) = 4, f(2) = 5,..$

4. Array is countable

   - A **sequence** $\{x_i\}_{i=1,2,3,...}$ is **countable** (e.g. $f(x_i) = i$). 

   - A **double array** {xij}i=1,2,3···, j=1,2,3··· is **countable** using **diagonal argument:**

5. **Rational number** $\mathbb Q = \{\frac{p}{q} : p,q \in \Z,q \ne 0\}$ is **countable**

   rational number can be regarded as a **double array**

6. Let A be the set of **infinite sequence of** **binary numbers**, i.e., A is a set with elements taking the form such as 0.101100··· and 0.011001100···. The set A is **uncountable**

   -  Proof: *Suppose* on the contrary that A is *countable*. 
   -  Then, there exists a bijective function $f : A \rightarrow J$ such that one can enumerate the elements in A as $x_1,x_2,...,x_n,....$
   -  Construction: $y = 0.a_1 a_2 a_3 ···$, where $a_i = 1− \text{the i-th digit of } x_i$. 
   -  Contradiction: For any integer n, $y \ne x_n$ (different n-th digit) $\Rightarrow y \notin A$.
   -  Idea: 假设countable, 则存在双射f可以以sequence形式枚举出A中每一个元素，即可以把A按顺序count出来。因此可以建立一个y，这个y满足A的要求，却不在A里，因此有矛盾

# 2.3 Measurablity of sets

**Requirements for a measure** $l$:

1.  **Agreement to the concept of length**: $l([a, b]) = b − a$
2.  **Translational invariance**: $l(E +c) = l(E),$ where $E +c =\{x+c|x \in E\},c \in \R.$
3.  **Countably additive**: $l(\bigcup_{i=1}^\infty E_i)=\sum_{i=1}^\infty l(E_i)$  if $E_i$s are disjoint.

### 2.3.1 Singleton (finite, null)

1. **Singleton** = a set of a *single element*; e.g. $E_1 := \{\frac{1}{3}\}$

2. $l(E_1) = 0$ 

   Proof: For any $\epsilon > 0, l(E_1) ≤ l [\frac{1}{3}− \frac{\epsilon}{2}, \frac{1}{3}+\frac{\epsilon}{2}] = \epsilon$.

3. Definition 8 (**Null set**): Null set $A ⊆ \mathbb R: l(A) = 0$

   In epsilon language: Formally, given any $\epsilon > 0$ we can find a sequence $\{I_n : n \ge 1\}$ of intervals such that $A \subseteq \bigcup_{n=1}^\infty I_n \quad \text{and} \quad \sum_{n=1}^\infty l(I_n) < \varepsilon$

4. Remark:  Empty set is null, but **null set may not be empty** (e.g. Singleton)

### 2.3.2 Open Intervals (uncountable, not null)

1. **Open interval** $E_2 := (0, \frac{1}{3})$
2. By  **countably additivity** property of measure, $\frac{1}{3}=l ([0, \frac{1}{3} ]) =l({0}) +l(E_2) +l(\frac{1}{3})=l(E_2)+0$

### 2.3.3 Rational Numbers (infinite and countable, null)

- One or finite number of singletons have measure 0.

- What about **infinitely many** singletons, e.g.  $E_3 := [0,1] \cap \mathbb Q$? A:  **null set**!

- proof: 

  1. $E_3$ is  a **countable** set $\Rightarrow E_3=\{x_1, x_2, x_3, ...\}$

  2. Fix $\epsilon > 0$,  a ***cover*** of $E_3 (E_3 \subseteq \bigcup_{n=1}^\infty I_n)$  can be constructed by:

     $I_1=(x_1-\frac{\varepsilon}{8}, x_1+\frac{\varepsilon}{8}) \\
     I_2=(x_2-\frac{\varepsilon}{16}, x_1+\frac{\varepsilon}{16}) \\
     I_3=(x_3-\frac{\varepsilon}{32}, x_1+\frac{\varepsilon}{32})$

  3. $l(I_n) = \frac{\varepsilon}{2} \cdot \frac{1}{2^n} \quad \text{and} \quad \sum_{n=1}^\infty \frac{1}{2^n} = 1 \quad \Rightarrow \quad \sum_{n=1}^\infty l(I_n) = \frac{\varepsilon}{2} < \varepsilon$, 

  4. Idea: 这次建立cover时，我们用不固定(decreasing )的epsilon,使得sum收敛

- $l([0, 1]) = 1$ and $l(E_3) = 0$: there are far more irrational numbers in [0, 1] than rational numbers.

### 2.3.4 Cantor Set (uncountable, null)

The **Cantor set** is a typical example of **uncountable null** set.

1.  Define the interval $C_0 =[0, 1]$
2.  Remove $(\frac{1}{3}, \frac{2}{3})$, let $C_1 =[0, \frac{1}{3}] \cup [\frac{2}{3}, 1]$
3.  $C_2 =[0, \frac{1}{9}] \cup [\frac{2}{9}, \frac{3}{9}] \cup [\frac{6}{9}, \frac{7}{9}] \cup  [\frac{8}{9}, 1]$
4.  Continuing in this way ⇒ C1 ⊃ C2 ⊃ C3 ⊃ ··· 
    Cn is the union of $2^n$ intervals, each of length $3^{-n}$
5.  **Cantor set** is defined as the limit $E_4=\bigcap_{n=1}^\infty C_n$
6.  The Cantor set is closely related to **ternary expansion**:
    -  To locate a point $x \in [0,1]$ as $x=0.a_1a_2a_3···$with $a_i \in \{0,1,2\}$:
       1.  If x is at first, middle or last thirds of [0,1], assign $a_1=0,1,\text{or }2$
       2.  If x is at first, middle or last thirds of $[\frac{a_1}{3}, \frac{a_1+1}{3}]$,assign $a_2=0,1,\text{or }2$
       3.  ...continue forever
    -  $x \in E_4 \Rightarrow x=0.a_1a_2... \text{with } a_k \ne 1$

7.  Cantor set $E_4$ is **uncountable** by the same argument for uncountable binary numbers
8.  Cantor set $E_4$ is a **null** set
    -  Given any $\epsilon > 0$, choose a large n s.t. $(\frac{2}{3})^n < \epsilon$
    -  $E_4=\bigcap_{n=1}^\infty C_n \ \Rightarrow \ E_4 \subseteq C_n \ \Rightarrow \  l(E_4) \le l(C_n) = (\frac{2}{3})^n < \epsilon$ 
    -  Since $\epsilon$ is arbitrary, $l(E_4) = 0$

### 2.3.5 Non-measurable Set (uncountable, not measurable)

Idea: try to partition the real line. 希望找到一個non-measurable的set，必須是uncountable

1. Define a grouping rule of real number:
   - If $y-x \in \mathbb Q$, then we say $x \sim y$ or x and y are in the same group
2. The rule partitions $[0,1]=\bigcup_{\alpha \in \Gamma} A_\alpha$ into disjoint classes, e.g. $A_{\bar \alpha}=(\bigcup_{q \in \mathbb Q } \{\pi+q\} )\cap [0,1], A_{\tilde \alpha}=(\bigcup_{q \in \mathbb Q }\{\sqrt{2}+q\}) \cap [0,1]$
3. Properties:
   1. Any two elements in the same class differ by a rational number
   2. Elements from different classes differ by an irrational number
   3. Each $A_\alpha$ is countable since $\mathbb Q$ is countable
   4. [0,1] is uncountable **$\Rightarrow \ \Gamma$ is uncountable**
4. **Vitali set:** 
   1. Pick one number $a_\alpha$ from each of the $A_\alpha$
   2. $E_5=\bigcup_{\alpha \in \Gamma}A_\alpha$
   3. Properties
      1. $x,y \in E_5, x \ne y \Rightarrow x-y \notin \mathbb Q$
      2. **(key property)** $[0,1]=\cup_{\alpha \in \Gamma} A_\alpha \subseteq \cup_{q_n \in \mathbb Q \cap [-1,1]}(E_5+q_n) \subseteq [-1,2]$ 
      3. $[E_5+q_i] \cap (E_5+q_j)=\emptyset$ i.e. translated Vitali sets are disjoint 
   4. Define $S_n=E_5+q_n$, where $\{q_n\}$ are rationals in [-1,1]
      1. we have: 
         - $l(S_n)=l(E_5)$
         - ${S_n}$ are disjoint
         - $[0,1] \subseteq \bigcup_{n=1}^\infty S_n \subseteq [-1,2]$
      2. $1=l([0,1]) \le l(\bigcup_{n=1}^\infty S_n) = \sum_{n=1}^\infty l(S_n)=\sum_{n=1}^\infty l(E_5) \le l([-1,2])=3$
      3. Contradiction: $\sum_{n=1}^\infty l(E_5) \in [1,3]$ is **impossible** since an **infinite sum** of the **same non-negative constant** = 0 or $\infty$
      4. $\Rightarrow E_5$ is **not measurable**


## 2.4 Probability Space

Probability Space is a triple $(\Omega, \mathcal{F}, \mathbb{P})$, where

- $\Omega$ is the sample space,  a set describing all possible events
- $\mathcal{F}$ is the $\sigma \text{-field}$, a **class of subsets** of $\Omega$
  - we assign probabilities to these “measurable sets”
- $\mathbb{P}$ is the probability measure, a function $\mathbb{P}: \mathcal{F} \rightarrow [0,1]$ satisfying
  - $\mathbb{P}(\empty)=0, \mathbb{P}(\Omega)=1$
  - $\mathbb{P}(\bigcup_{i=1}^\infty A_i)=\sum_{i=1}^\infty \mathbb{P} (A_i)$

Remark: 

1. Domain of the function $\mathbb{P}$ is the $\sigma \text{-field } \mathcal{F} \text{ not } \Omega$ 
1. If $\omega \in \Omega \text{ and }  $$\{\omega\} \in \mathcal F$ then $\mathbb P(\{\omega\})$ is well defined but $\mathbb P (\omega)$ is not. (will appear in MC questions)

### 2.4.1 Sample Space

- The **Sample Space** $\Omega$ is a set

  - may be finite, countable or uncountable.

  - consists of all possible outcomes of an experiment or observation in the **physical world**


- **Sample point**: An element ω of Ω is called a sample point

**Event**: A subset of Ω (e.g. $\{\omega\}, \{\omega_1,...,\omega_n\}$) is called an event

### 2.4.2 $\sigma \text{-field}$

- $\sigma \text{-field}$ is 

  -  a class of subsets of Ω (i.e. class of events)
  -  probability can be assigned for each element of a σ-field

- When Ω is finite:

  - the class of all possible subsets of Ω is the power set 2Ω (finite)
  - the probability P({ω}) is defined for each sample point ω ∈ Ω
  - the probabilities of all events can be defined according to the finite additivity rule P(A∪B) = P(A)+P(B) for disjoint events A and B

- When Ω is infinite or uncountable

  - σ-field should be closed under various operations in set theory: **unions, intersections and complements**

- **Definition 12 ($\sigma$-field)**

  A class $\mathcal F$of subsets of Ω is called a σ-field if 

  1.  $\empty, \Omega \in \mathcal F$
  2.  (Closure of complement)  $A \in \mathcal F \Rightarrow A^c \in \mathcal F$
  3.  (Closure of countable unions) $A_1, A_2,... \in \mathcal F \Rightarrow \bigcup_{i=1}^\infty A_i \in \mathcal F$

- Remark:

  -  Closure of complement & countable unions ⇒ Closure of countable intersections $A_i^c \in \mathcal F \Rightarrow \bigcup A_i^c \in \mathcal F \Rightarrow \bigcap A_i \in \mathcal F$
  -  The **largest** σ-field in Ω is *power* set $2^Ω$
  -  The **smallest** σ-field is {∅, Ω}.

- **Definition 17 (σ-field generated by a class of sets)**

  Let $\mathcal A$ be a class of subsets of Ω. The σ-field *generated by* $\mathcal A$,denoted by σ($\mathcal A$), is the smallest σ-field that contains $\mathcal A$.

  ​	Example 18: $\Omega = \{ 1,2,3,4,5,6 \}, \mathcal A=\{\{1\},\{1,3\} \} \\ \Rightarrow \sigma(\mathcal A)=\{\empty, \{1\},\{1,3\} ,\{3\}, \{2,4,5,6\}, \{2,3,4,5,6\}, \{1,2,4,5,6\}, \Omega  \}$

- Remarks： 

  - When Ω is finite, one can always construct the σ-field explicitly by union and complement operations.
  - when Ω and $\mathcal A$ are not finite, then one does not have explicit expressions for the elements of $\sigma(\mathcal A)$ in general.

- **Theorem 19 (σ-field generated by a class of sets)**

  Let  $\mathcal A$ be a class of subsets of Ω. The smallest σ-field generated by  $\mathcal A$ is uniquely defined by: $\sigma(\mathcal A)= \bigcap_{\mathcal F \text{is a } \sigma \text{-field}, A \subseteq \mathcal F} \mathcal F$

- **Example 20 (Borel σ-field)**

  - Let $\Omega=\mathbb R$ and $\mathcal A$ be the collection of all finite open intervals, i.e., $A=\{(l,u)|−\infty < l < u < \infty\}$ 

  - The ***Borel σ-field*** is defined as $\mathcal B := \mathcal B_{\mathbb R}=\sigma(\mathcal A)$, which is the smallest σ-field generated by finite open intervals $\mathcal A$

  - Remarks:

    -  **Borel sets**: elements of the Borel σ-field are called Borel sets
    -  **Borel σ-field on [a,b]**: $\mathcal B[a,b] := \{[a,b] ∩ B : B ∈ \mathcal B\}$

  - cannot define $\mathbb P: 2^{\mathbb R} \rightarrow \mathbb R$
    can define $\mathbb P: 2^{\mathbb B} \rightarrow \mathbb R$

  - **Example 21 (Borel Product σ-field on $\mathbb R^n$)**

    - For $\Omega=\mathbb R^n$, the **Product σ-field** is defined as


      $\begin{aligned}
      \mathcal{B}^n &= \sigma(\mathcal{B} \times \mathcal{B} \times \dots \times \mathcal{B}) \\
      &= \sigma\left(I_1 \times I_2 \times \dots \times I_n : I_i = (l_i, u_i) \subseteq \mathbb{R}, \text{ for } i = 1, \dots, n\right)
      \end{aligned}$

### 2.4.2 Probability Measure

1. Measure

   1. $(\Omega, \mathcal F)$: measurable space.
   2. $(\Omega, \mathcal F, v)$: measure space.
   3. $(\Omega, \mathcal F, \mathbb P)$: Probability space, (if $\mathbb P(\Omega)=1$)

2. **Definition 23 (Measure)**

   Let (Ω,F) be a measurable space. A function $v: \mathcal F \rightarrow \mathbb R \cup \{\infty\}$ is called ***a measure*** if it has the following properties:

   1. $0 \le v(A) \le \infty$ for any $A \in \mathcal F$
   2. $v(\empty)=0$
   3. **(countable additivity)** If $A_i \in \mathcal F , A_i \cap A_j=\empty$,  then $v(\cup_{i=1}^\infty A_i)=\sum_{i=1}^\infty v(A_i)$

   Remark: “measure” l is not well defined since we only assumed l([a,b])=b−a. measure應該是建立在sigma-algebra上的，但是l目前只定義在閉區間上

3. Construction of **Lebesgue Measure**

   1. Define **Lebesgue outer measure** for any set $A \sub \mathbb R$ by: $m^*(A) = \inf_{\{I_n\}} \left\{ \sum_{n=1}^{\infty} l(I_n) : A \subseteq \bigcup_{n=1}^{\infty} I_n, \, I_n \text{ are intervals} \right\}$

      - $m^*$ is well defined on $2^\mathbb R$ (can measure any $A \sub \mathbb R$)
      - $m^*$ is not a measure. (Vitali set violates countably additive)
        - $S_n = E_5 + q_{n}, [1,3] \in m^*\left(\bigcup_{n=1}^{\infty} S_n\right) \neq \sum_{n=1}^{\infty} m^*(S_n) \in \{0, \infty\}$

   2. Define the class of **Lebesgue-Measurable sets** $\mathcal M$ as follows:

      $\mathcal M = \{E:   m^∗(A) = m^∗(A∩E)+m^∗(A∩E^c), \forall A \subseteq \mathbb R  \}$

   3. The class of sets $\mathcal M$ is a σ-field containing $\mathcal B$.

   4. If we restrict $m^∗(·)$ on sets in $\mathcal M$, then $m^∗(·)$ is a measure.

   5. Lebesgue Measure $\lambda$ is defined as the outer measure $m^∗(·)$ on σ-field $\mathcal M$. The measure space is denoted as $(\mathbb R,\mathcal M , \lambda)$.

4. **Theorem 24 (Lebesgue and Borel σ-field)**: 
   Lebesgue σ-field ***strictly contains*** Borel σ-field. That is, $\mathcal B \sub \mathcal M$.

   - Proof: (Optional. If you don't understand,  it's okay)

     - ***Cantor function:***  $c(x) =  \begin{cases}  \frac{1}{2} \sum_{n=1}^{\infty} \frac{a_n}{2^n} & x \in \mathcal C, \\  c(\sup \{ z \in \mathcal C : z < x \}) & x \in [0, 1]  \backslash \mathcal C  \end{cases}$

     - Nickname: **Devil's staircase** $c(x)$ only increases in  $\mathcal C$  (measure 0), but keep horizontal in $[0, 1]  \backslash \mathcal C$ (measure 1)

     - Let $ f(x) = c(x)+x $, $\Rightarrow f$ is bijective $\Rightarrow f^{-1}$ well-defined. 

     - Construct $N \subseteq f(C)$, not $\mathcal M$ measurable. Let $E_6 = f^{-1}(N)$ 
       - $E_6 \not\in \mathcal B$; otherwise $N = f(f^{-1}(N)) = f(E_6) \in \mathcal B \sub M \Rightarrow \text{contradiction with N not M measurable}$ (By strictly increasing property, $E_6 \in \mathcal B \Rightarrow f(E_6) \in \mathcal B$)
       - $E_6 \in \mathcal M$ since $\lambda(E_6) < \lambda(f^{-1}(f(\mathcal C))) = 0$ (If a set has measure 0, then it's measurable)

5. Example 25 

   Let $F: \mathbb{R} \to \mathbb{R}$ be a right-continuous, non-decreasing function.

   ***Lebesgue-Stieltjes measure*** $\lambda_F$ on $\mathbb R$ **associated with** $F$ :

   - Outer measure:

     $$
     \lambda_F^*(A) = \inf \left\{ \sum_{n=1}^{\infty} l(I_n) : A \subseteq \bigcup_{n=1}^\infty I_n, \, I_n \text{ are intervals} \right\},
     $$

     ==where $l_F([a,b])=F(b)-F(a)$==  (The **only** important thing in this definition)

   - $\mathcal M_F: \  E \in M_F \text{ if } A \subseteq \mathbb{R}, \  \lambda^*_F(A) = \lambda^*_F(A \cap E) + \lambda^*_F(A \cap E^c).$

   - $\mathcal M_F$ is a $\sigma$-field on $\mathbb{R}$ that contains $\mathcal{B}$.

   - Restricting $\lambda^*_F$  on $\mathcal M_F$ gives the measure $\lambda_F$

   **Lebesgue measure** \( $\lambda$ \) associated with \( m \) on \( [0,1] \) is called uniform distribution on \( [0,1] \).

### 2.5 Random Variables

1. **Definition 27 (Random Variable)**

   On a measurable space (Ω,F), a function $X: \Omega \rightarrow \mathbb R$ is said to be an $\mathcal F$**-measurable random variable** if the inverse image $X^{−1}(B) \in \mathcal F$ for **every** Borel set $B \in \mathcal B$.

   - $X^{−1}(B) \in \mathcal F$: for any *reasonable* values that X can take (i.e., X ∈ B), the corresponding event $\{ω : X(ω) \in B\} \subseteq \Omega$  is  $\mathcal F$-measurable. 
   - so we can assign probability to any *reasonable* possibility of X 
     - we may assign probability to the event $\{X \in (0,1)\}$
     - we cannot assign probability to $\{X \in E_5\}$ (Vitali set) since Vitali set is not in $\mathcal F$
   - Notations:
     - $\{X \in B\} =X^{-1}(B)=\{ \omega \in \Omega: X(\omega ) \in B \} $
       - e.g. If $B=(-\infty, a],$ then $X^{-1}(B) = \{X \le a \}$
     - $X^{-1}(\mathcal B) \subseteq \mathcal F$ denotes $X^{-1}(B) \in \mathcal F$ for every Borel set $B \in \mathcal B$

2. Example 28

   Consider $\Omega=\{1,2,...,6\}$

   - $\mathcal F_1=2^\Omega$

   - $\mathcal F_2=\{ \empty, \{1,2,3\}, \{4,5,6\}, \Omega \}$

   - $X_1(\omega)=1\{\omega \le 4\}$

   - $X_2(\omega)=\omega$

   - $$
     X^{-1}(B) = 
     \begin{cases} 
     \Omega & \text{if } \{0,1\} \subset B \\ 
     \{4,5,6\} & \text{if } 0 \notin B \text{ and } 1 \in B \\ 
     \{1,2,3\} & \text{if } 0 \in B \text{ and } 1 \notin B \\ 
     \emptyset & \text{if } 0 \notin B \text{ and } 1 \notin B 
     \end{cases}
     $$

     - All four sets on the right are measurable by $\mathcal{F}_1$ and $\mathcal{F}_2$  

     - $\Rightarrow X_1$ is a r.v. on both $(\Omega, \mathcal{F}_1)$ and $(\Omega, \mathcal{F}_2)$.

     - $\Rightarrow X_2$ is a r.v. on  $(\Omega, \mathcal{F}_1)$ but nots $(\Omega, \mathcal{F}_2)$ since $X^{-1}_2(\{4\}) = \{4\} \notin \mathcal{F}_2$.

3. **Theorem 29 ( To check if $X: \Omega \rightarrow \mathbb R$ is measurable**, no need check $X^{−1}(B) \in \mathcal F$ for all for **every** Borel set $B \in \mathcal B$)

   - Given a measurable space $(Ω,\mathcal F)$, a function $X : Ω → \mathbb R$ is $\mathcal F$-measurable if $X^{−1}((a,∞)) ∈ \mathcal F$ for all $a ∈ \mathbb R$.

   - Proof: (won't be tested)
     - Given $X^{−1}((a,∞))$ is measurable for all $a ∈ \mathbb R$, show
       1.  $X^{−1}((a,∞)) \in \mathcal F$ and $X^{−1}((a,b)) ∈ \mathcal F$ for all real numbers a < b.
       2.  $(a,b) \in \mathcal G$, where $\mathcal G =\{ B \in \mathcal B: X^{-1}(B) \in \mathcal F \}$
       3.  $\mathcal G$ is a $\sigma$-field
     - Thus, $\sigma\{(a,b);a<b, a,b \in \mathbb R\}=\mathcal B \subseteq \mathcal G,$ i.e., $X^{-1}(\mathcal B) \in \mathcal F$ 

4. **Example 30 (Measurable functions)**

   1. Constant function X(ω)≡c is measurable

   2. If $A ∈ \mathcal F$ is measurable, then indicator $X(ω)=1\{ω∈A\}$ is measurable:

   3. If $(Ω,\mathcal F)=(\mathbb R, \mathcal B)$, then continuous function $X:\mathbb R→\mathbb R$ is measurable.

   4. Most commonly encountered functions are measurable: If $f_1, f_2,...$ are measurable functions from $\mathbb R$ to $\mathbb R$, then

      1. linear combination $\sum_{i=1}^\infty a_i f_i$
      2. product $\prod_{i=1}^\infty f_i$
      3. derivative $f', f'', f^{(k)}$
      4. integration $h: [a,\infty) \rightarrow \mathbb R, h(x) = \int f(\omega) 1\{[a,x]\}(\omega) \mathbb P(d\omega)$

      are all measurable functions

5. **Definition 31 (σ-field generated by a random variable)**

   The σ-field generated by a r.v.  $X : Ω → \mathbb R$ is defined as $\sigma(X)=\sigma\{ X^{-1}(B) | B \in \mathcal B \}$, which is the smallest  σ-field such that X is measurable

6. Example 32

   - $X_1(\omega)=1\{\omega \le 4\}$
   - $X_2(\omega)=\omega$
   - $X_3=1_{\{\omega \text{ is an even integer}\}}$
   - For  $\Omega=\{1,2,...,6\}$, the $\sigma $-field generated by $X_1, X_2, X_3$ are
     1. $\mathcal F_1 =\{ \empty, \{1,2,3\}, \{4,5,6\}, \Omega \}$
     2. $\mathcal F_2 =2^\Omega$
     3. $\mathcal F_3=\{ \empty, \{1,3,5\}, \{2,4,6\}, \Omega \}$
   - For  $\Omega=\mathbb R$, the $\sigma $-field generated by $X_1, X_2, X_3$ are
     1. $\mathcal F_1 =\{ \empty, (-\infty,4], [4,\infty), \mathbb R \}$
     2. $\mathcal F_2 = \mathcal B$
     3. $\mathcal F_3=\{ \empty, \mathbb R \backslash\{2k: k\in \mathbb Z\} , \{2k: k\in \mathbb Z\}, \mathbb R \}$

7. **Definition 33 (Induced Probability Measure)**

   On $(\Omega, \mathcal F, \mathbb P)$, $X: \Omega \rightarrow \mathcal F$ induces a probability measure $\mathbb P_X$ on ($\mathbb R, \mathcal B$):

   $$\mathbb P_X(B)=\mathbb P(\{\omega: X(\omega) \in B\})$$ for each Borel set $B \in \mathcal B$

8. Remark 34

   - $\mathbb P_X(B)=\mathbb P(\{\omega: X(\omega) \in B\})$
     - $\mathbb P$ measures events on the original sample space $\Omega$
     - $\mathbb P_X$ measures events from the induced sample space $\mathbb R$

       - We usually design probability measures $\mathbb P_X$ on $(\mathbb R,\mathcal B)$, and then define $P$ on $(Ω,σ(X))$ for completeness.




## Summary

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/476814323cc145eeb13c15fdddd13393.png)




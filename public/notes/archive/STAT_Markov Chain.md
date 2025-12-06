$$
\textbf{Setting: }
\text{A Markov process is a stochastic process,}\\
\text{which contain the state of process at time $t$, denoted by $X_t$.}\\
~\\
\textbf{Important Properties: }\\
\text{Given the value at time $𝑡$, denoted by $𝑋_𝑡$,}\\
\text{the value at time $𝑠$, denoted by $𝑋_𝑠$, for any $𝑠>𝑡$,}\\
\text{$X_t$ is not influenced by the value at time $𝑢$, denoted by $X_𝑢$, for any $𝑢<𝑡$.}\\
$$

$$
\textbf{Setting: }
\text{A future values of Markov processes}\\
\text{depends only on where the process is now, not where it has gone before.}
$$

$$
\textbf{Setting: }
\text{A discrete-time Markov Chain (DTMC) is a Markov process $X_t$}\\
\text{whose state space is a finite or countable set,}\\
\text{and whose (time) index set is $t=\{0, 1, 2, \dots\}$}\\
~\\
\textbf{Property of DTMC:}\\
P(X_n+1=j|X_0=i_0,\dots,X_{n-1}=i_{n-1},X_n=i)\\
= P(X_n+1=j|\text{All past history},X_n=i)\\
= P(X_n+1=j|X_n=i)\\
:=p_{ij}^{n,n+1}
$$

$$
\textbf{Setting: }
\text{transition probability gives the probability of the Markov Process $X_t$}\\
\text{moving from state $𝑖$ at time $𝑛$ to state $𝑗$ at time $n+1$,}\\
\text{denoted by $p_{ij}^{n,n+1}$.}\\
P(X_n+1=j|X_n=i):=p_{ij}^{n,n+1}\\
~\\
$$

$$
\textbf{Setting: }\\
\text{Stationary of a Markov Chain means transition probability $p_{ij}^{n,n+1}$}\\
\text{does not depend on time of the transition $𝑛$}\\
P(X_n+1=j|X_n=i):=p_{ij}\\
$$

$$
\textbf{Setting: }\\
\text{Transition probability matrix or Markov matrix of a stationary DTMC $X_t$}\\
\text{is constituted by transition probability between different states,}\\
\text{which has finitely many states $(n+1)$.}\\
\text{Transition probability matrix is denoted by $P$.}
~\\

P=
\begin{bmatrix}
p_{00}  &  p_{01}  &  \dots  &  p_{0{(n-1)}}  &  p_{0n}\\
p_{10}  &  p_{11}  &  \dots  &  p_{1{(n-1)}}  &  p_{1n}\\
\vdots  &&  \ddots  &&  \vdots\\
p_{(n-1)0}  &  p_{(n-1)1}  &  \dots  &  p_{(n-1){(n-1)}}  &  p_{(n-1)n}\\
p_{n0}  &  p_{n1}  &  \dots  &  p_{n{(n-1)}}  &  p_{nn}\\
\end{bmatrix}\\
~\\
\textbf{Important Properties:}\\
\text{The $(i+1)$ row and $(j+1)$ column is the probability of $X_{n+1}=j$ given that $X_n=i$.}\\
\Rightarrow p_{(i+1)(j+1)}=P(X_{n+1}=j|X_n=i)\\
p_{ij}\ge0\\
\sum_{j=0}^np_{ij}=1
$$

$$
\textbf{Setting: }
\text{Initial probabilities are where the DTMC $X_t$ starts, }\\
\text{which can be fixed or random, denoted by $q_i$.}\\
P(X_0=i)=q_i\\
~\\
\textbf{Example:}\\
\text{If $X_t$ starts from state $2$,}\\
P(X_0=2)=q_2=1,\quad P(X_0=i|i\ne2)=q_{i,i\ne2}=0
$$


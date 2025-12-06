# Basic Statistic

> Author: OP
>
> Created time: 2022.04.11
>
> Last edited time: 2022.04.11

## Correlation

$$
\textbf{Setting: }\\
\text{Correlation measures the relationship between $X$ and $Y$ in a unit-less quantity.}\\
Corr(X,Y)=\frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}}\ \ (i.e.\ \text{denote as $\rho$} )\\
\\
\textbf{Important properties:}\\
-1\le Corr(X,Y)\le 1\\
Corr(aX+b,cY+d)=
\left \{
\begin{aligned}
Corr(X,Y),&& where\ a\times c\ge 0\\
-Corr(X,Y),&& where\ a\times c<0\\
\end{aligned}
\right.\\
Corr(X,Y)=\left \{
\begin{aligned}
1,&& \text{Positive linear relationship}\\
-1,&& \text{Negative linear relationship}\\
\end{aligned}
\right.\\
\\
\text{If $X$ and $Y$ are uncorrelated \textbf{OR} independent. }\Rightarrow Corr(X,Y)=0\\
$$

## Covariance

$$
\textbf{Setting: } 
\\\text{Covariance can quantify the linear relationship between two random variables $X,Y$.}\\
\text{Covariance measures unit dependency, }\\
\text{since $Cov(X,Y)$ is in the unit of the product of units of $X$ and $Y$.}\\
Cov(X,Y)=E\left\{(X-E(X))(Y-E(Y)) \right\}\\
=E(XY)-E(X)E(Y)\ \ (i.e.\ \sigma_{xy}=\mu_{xy}-\mu_x\mu_y)\\
~\\
\textbf{Important properties:}\\
Var(X)=Cov(X,X)\\
Var(X\pm Y)=Var(X)+Var(Y)\pm 2Cov(X,Y)\\
Var(X\pm Y)=Var(X)+Var(Y)\quad\text{If $X$ and $Y$ are uncorrelated \textbf{OR} independent. }\\
~\\
Cov(X,Y)=Cov(Y,X)\\
Var(X)=Cov(X,X)\\
Cov(aX+b,cY+d)=acCov(X,Y), \quad (a,b,c,d \in \R)\\
Cov(X+Y,Z)=Cov(X,Z)+Cov(Y,Z)\\
~\\

\text{If $X$, $Y$ are \textbf{independent}}\Rightarrow Cov(X,Y)=0\\
\text{However, $Cov(X,Y)=0$ does not necessarily mean that}\\
\text{the variables $X,Y$ are independent.}\\
\text{It can be a nonlinear relationship. }\\
~\\
Cov(X,Y)=0\Rightarrow\text{$X$ and $Y$ are \textbf{uncorrelated}.}\\
\therefore \textbf{independent}\Rightarrow Cov(X,Y)=0\Rightarrow\text{$X$ and $Y$ are \textbf{uncorrelated}.}\\
\text{\textbf{Independent} means \textbf{uncorrelated}, }\\\text{but \textbf{uncorrelated} does not mean \textbf{independent}.}\\
~\\
Cov(aX_1+bX_2,cY_1+dY_2)=
\quad (a,b,c,d \in \R)\\
$$

## Degree of Freedom

## Expectation / Mean

$$
\textbf{Setting: }\text{Expactation interpretes as the weighted average of $x\in S_X$,}
\\\text{which is known as the $first\ moment$.}\\
E(X)=
\left\{
\begin{aligned}
\sum_{x\in S_X}xf(x)\\
\int_{x\in S_X}xf(x)\mathrm{d}x\\
\end{aligned}
\right.
=\mu\\
~\\
\textbf{Important properties:}\\
E(aX+b)=aE(X)+b\\
\text{Sample mean:}\overline{X_n}=\frac{1}{n}(X_1+X_2+X_3+\dots+X_n)\\
\text{Population mean:}\mu_X=E(X)\\
\text{When }n\rightarrow \infty\text{, }\overline{X_n}\rightarrow \mu_X\\
~\\
\textbf{Law of Unconscious Statistician:}\\
\text{Let $Y=g(X)$. }\\
E(Y)=E(g(X))=\left\{
\begin{aligned}
\sum_{x\in S_X}g(x)f(x)\\
\int_{x\in S_X}g(x)f(x)\mathrm{d}x\\
\end{aligned}
\right.\\
~\\
\textbf{Multivariable expectation:}\\
\text{Assume $\mathbf{A}$ is a $m\times m$constant matrix,}\\
\text{Assume $\mathbf{X}$ is a $m\times 1$ random vector.}\\
E(\mathbf{AX})=\mathbf{A}E(\mathbf{X})\\
~\\

\textbf{Conditional expectation:}\\

\textbf{Important properties:}\\
E(X+Y)=E(X)+E(Y)\\
\text{If $X$ and $Y$ are independent, } E(XY)=E(X)E(Y)\\
~\\
\text{If $X$ and $Y$ are independent and $E[g(X)]$ and $E[h(Y)]$ exist,}\\
E[g(X)h(Y)]=E[g(X)]E[h(Y)]\quad \text{for any $h$ and $g$}\\
~\\
\textbf{Clarify:}\\
\overline{xy}=E(XY)=\left\{
\begin{aligned}
\sum_{x\in S_X}\sum_{y\in S_Y}xyf(x,y)\\
\int_{x\in S_X}\int_{y\in S_Y}xyf(x,y)\mathrm{d}y\mathrm{d}x\\
\end{aligned}
\right.\\
\overline{x^2}=E(X^2)=\left\{
\begin{aligned}
\sum_{x\in S_X}x^2f_X(x)\\
\int_{x\in S_X}x^2f_X(x)\mathrm{d}x\\
\end{aligned}
\right.\\
\bar{x}^2=E(X)^2=\left\{
\begin{aligned}
\left[\sum_{x\in S_X}xf(x)\right]^2\\
\left[\int_{x\in S_X}xf(x)\mathrm{d}x\right]^2\\
\end{aligned}
\right.\\
~\\
\text{Tower rule:}\\
$$

## Standard Deviation

$$
\textbf{Setting:}\\
\text{The standard deviation is denoted by  $\sigma$. }\\
sd(X)=\sqrt{Var(X)}
$$

## Variance ==TBC==

$$
\textbf{Setting:}\\
\text{The variance of $X$ is the expected of the squared deviation of $X$ around its mean. }\\
\text{It is known as }second\ moment\ about\ \mu.\\
~\\
\sigma^2=E\left[(X-\mu)^2\right]=\left\{
\begin{aligned}
\sum_{x\in S_X}(x-\mu)^2f(x)\\
\int_{x\in S_X}(x-\mu)^2f(x)\mathrm{d}x
\end{aligned}\right.\\
=E\left[X^2-2\mu X+\mu^2\right]=E(X^2)-2\mu E(X)+\mu^2=E(X^2)-\mu^2\\
~\\
\textbf{Important properties:}\\
\text{Define that $X$ is a random variable, and $a,b \in \R$ are fixed constants}\\
Var[aX+b]=a^2Var(X)\\
SD(aX+b)=|a|SD(X)\\
Var(X\pm Y)=Var(X)+Var(Y)\pm 2Cov(X,Y)\\
~\\
\textbf{Multivariable variance:}\\
\text{Assume $\mathbf{A}$ is a $m\times m$ constant matrix,}\\
\text{Assume $\mathbf{X}$ is a $m\times 1$ random vector.}\\
Var(\mathbf{AX})=\mathbf{A}Var(\mathbf{X})\mathbf{A}^t\\
~\\
\text{Tower rule:}\\
\\
$$

## Quantile & Percentile ==TBC==

## Median

$$
\textbf{Setting:}\\
\text{The median $m$ of a random variable $X$ satisfied}\\
F(m) = P(X \le m) = \frac{1}{2} \text{ or }F(m) = P(X \le m)\approx \frac{1}{2}\\
\text{It is the smallest possible value of $X$ such that}\\
F(m) = P(X \le m) \ge \frac{1}{2}
$$



## Moments==TBC==

$$
\textbf{Setting: }\\
\text{In mechanics, the product of a distance and its weight}\\
\text{is called a moment that measures a turning effect. }\\
\text{Suppose a distribution with support $X$.}\\
\text{Define $r^{th}\ moment$ \textbf{(about the origin)}  of a distribution to be $E(X^r)$}\\
\text{Thus the collective $r^{th}$ moment of the distribution is simply }\\
E(X^r)=\left\{
\begin{aligned} 
\sum_{x\in S_X}x^rf(x)\text{,}  & \text{discrete random variable} \\
\int_{x\in S_X}x^rf(x) \mathrm{d}x\text{,} & \text{continuous random variable}
\end{aligned}\right.\\

~\\
\text{We can use definition to calculate each moment.}\\
First\ moment: E(X)=\left\{
\begin{aligned}
\sum_{x\in S_X}xf(x)\\
\int_{x\in S_X}xf(x)\mathrm{d}x
\end{aligned}\right.=\mu\\
Second\ moment: E(X^2)=\left\{
\begin{aligned}
\sum_{x\in S_X}x^2f(x)\\
\int_{x\in S_X}x^2f(x)\mathrm{d}x

\end{aligned}\right.
=\sigma^2+\mu^2\\
Second\ moment\ about\ \mu: \sigma^2=E\left[X-\mu\right]^2=\left\{
\begin{aligned}
\sum_{x\in S_X}(x-\mu)^2f(x)\\
\int_{x\in S_X}(x-\mu)^2f(x)\mathrm{d}x
\end{aligned}\right.\\
=E\left[X^2-2\mu X+\mu^2\right]=E(X^2)-2\mu E(X)+\mu^2=E(X^2)-\mu^2\\
\dots\\
~\\
\text{We can also use moment generating function to do it. }
$$


# 	Distribution

> Author: OP
>
> Created time: 2022.04.11
>
> Last edited time: 2022.04.11

## Bernoulli Trials

$$
\textbf{Setting:}\\
\text{\ Toss\ a\ coin\ 1\ times\ and\ define\ $X$\ to\ be\ the\ number\ of\ ''heads''\ observed.}\\
~\\
X\sim Bern(p)\\
pmf:\ f(0) = 1 - p\quad f(1)=p\\
E(X)=\mu=p
\ \ and\ \ 
Var(X)=\sigma^2=p\left(1-p\right) 

~\\

mgf:\ M\left(t\right)=
pe^t+1-p \\
$$



## Beta Distribution

$$
\textbf{Setting:}\\
\text{Continuous.}\\
~\\
X\sim Beta(\alpha, \beta)\text{ or }X\sim Be(\alpha, \beta),\quad \alpha,\beta>0\\
pdf:\ f(x)=\frac{1}{\mathbf{B}(\alpha,\beta)}x^{\alpha-1}(1-x)^{\beta-1}, \quad 0<x<1\\
E(X)=\mu=\frac{\alpha}{\alpha+\beta}
\ \ and\ \ 
Var(X)=\sigma^2=\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)} \\
mgf:\ M(t)=1+\sum_{k=1}^\infty\left( \prod_{r=0}^{k-1}\frac{\alpha+r}{\alpha+\beta+r} \right)\frac{t^k}{k!}\\
~\\
\textbf{Important properties:}\\
Beta(0,0)=Unif(0,1)\\
\text{The MGF of beta distribution is not useful.}
$$

## Beta Function

$$
\mathbf{B}(\alpha,\beta)\\
\mathbf{B}(\alpha,\beta)=\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}=\int_0^1x^{\alpha - 1}(1-x)^{\beta - 1}\mathbf{d}x
$$

## Binomial Distribution

$$
\textbf{Setting:}\text{\ Toss\ a\ coin\ 100\ times\ and\ define\ $X$\ to\ be\ the\ number\ of\ ''heads''\ observed.}\\
~\\

X \sim b(n,p) \quad or \quad X\sim Bin(n,p)\quad or \quad X\sim Binomial(n,p)\\

pmf:\ f\left(x\right)=
\binom{n}{x} p^x \left(1-p\right) ^{\left(n-x\right)}
,\ \ where\ x\ =0,1,\ldots,n \\

E(X)=\mu=np
\ \ and\ \ 
Var(X)=\sigma^2=np\left(1-p\right) 

~\\

mgf:\ M\left(t\right)=
\left(pe^t+1-p\right)^n \\

E\left(X^2\right)=
n^2p^2+np\left(1-p\right)\\
~\\
\textbf{Important properties:}\\
\text{Binomial distribution is the summation of bernoulli distrabution.}\\
$$

## Bivariate Normal Distribution

$$
\textbf{Setting:}\text{ Suppose $Z_1, \ Z_2$ are independent $N(0,1)$ random variables.}\\
\text{Define $X=\sigma_XZ_1+\mu_X\quad Y=\sigma_Y(\rho Z_1+\sqrt{1-\rho^2}Z_2)+\mu_Y$, }\\
\text{where $\mu_X,\mu_Y \in \R,\sigma_X>0,\sigma_Y>0,-1<\rho<1$ are chosen constants. }\\
\text{$(X,Y)$ follows Bivariate Normal Distribution.}\\
~\\
\begin{pmatrix}
X\\Y
\end{pmatrix}
\thicksim 
N_2\left(
\begin{pmatrix}
\mu_x\\\mu_y
\end{pmatrix},
\begin{pmatrix}
\sigma_x^2&\rho\sigma_x\sigma_y\\
\rho\sigma_x\sigma_y&\sigma_y^2
\end{pmatrix}
\right)\\
Joint\ pdf:\ f(x,y)=\frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}}\times e^{-\frac{1}{2(1-\rho^2)}\left[(\frac{x-\mu_X}{\sigma_X})^2-2\rho(\frac{x-\mu_X}{\sigma_X})(\frac{y-\mu_Y}{\sigma_Y})+(\frac{y-\mu_Y}{\sigma_Y})^2\right]}
~\\
\text{The plot for joint p.d.f. is elliptical shape and perfect for regression. }\\
\text{Need to include a 3d plot and 2d plot. }\\
~\\
\textbf{Important properties:}\\
Y|X=x\thicksim N\left(
\mu_y-\frac{\rho\sigma_x}{\sigma_y}(x-\mu_x),(1-\rho^2)\sigma_x^2
\right)\\
Cov(X,Y)=0 \iff X\text{ and }Y\text{ are independent normal random variables.}
~\\
\text{add picture here}
$$

## Chi-squared Distribution

$$
\textbf{Setting:}\\
\text{Continous.}\\
~\\
X \sim \chi^2\left(r\right)\\
pdf:\ f\left(x\right)=
\frac{1}{\Gamma\left(\frac{r}{2}\right)2^{\left(\frac{r}{2}\right)}}x^{\left(\frac{r}{2}-1\right)}e^{\left(-\frac{x}{2}\right)}
,\ \ for\ x\geq0\ \\

\mu=r
\ \ and\ \ 
\sigma^2=2r\\

mgf:\ M\left(t\right)=
\frac{1}{\left(1-2t\right)^\frac{r}{2}}
,\ \ for\ t<\frac{1}{2}\\
~\\
\textbf{Relationship with normal distribution:}\\
X\thicksim N(0,1)\Rightarrow Y=X^2\thicksim \chi^2(1)\\
X_i\thicksim N(0,1)\quad (i=1,2,\dots,n)\Rightarrow Y=\sum_i^n X^2\thicksim \chi^2(n)\\
$$

## Exponential Distribution

$$
\textbf{Setting:}\text{ Suppose\ that\ $\lambda$\ customers\ will\ arrive\ in\ one\ unit\ of\ time.}\\ \text{Let\ $X$\ be\ the\ waiting\ time\ for\ the\ first\ customer.}\\
\text{Continuous. }\\
~\\

X \sim Exponential\left(\theta\right), \ or \ X \sim Exponential(\lambda)
,\ \ \theta=\frac{1}{\lambda}\\

pdf:\ f\left(x\right)=
\frac{1}{\theta}e^{\left(-\frac{x}{\theta}\right)}
,\ \ 0\le x\le\infty\\
or\\
f(x)=\lambda e^{(-\lambda x)},\ \ 0\le x\le\infty\\\\
~\\
cdf:\ F\left(x\right)=
\left\{
\begin{aligned}
1-e^{(-\frac{x}{\theta})} & & ,for\ \ 0≤x<∞\\
0& &,for\ -∞<x<0\\
\end{aligned}
\right. \\
or\\
F\left(x\right)=
\left\{
\begin{aligned}
1-e^{(-\lambda x)} & & ,for\ \ 0≤x<∞\\
0& &,for\ -∞<x<0\\
\end{aligned}
\right. \\
~\\
\mu=\theta\ \ and\ \ \sigma^2=\theta^2\ \ and\ \ median = \ln(2)\theta\\
mgf:\ M\left(t\right)=
\frac{1}{1-\theta t}
,\ \ t<\frac{1}{\theta}\\
~\\
\textbf{Important properties:}\\
\text{No memory.}\\
\text{If }X_i\sim Exponential(\lambda)(i=1,2,\dots, n),\\
Y=X_1+X_2+\dots X_n \sim Gamma(n,\lambda)
$$

## F Distribution

$$
\textbf{Setting:}\\
\text{Continuous. }\\
~\\
X\sim F(d_1,d_2)\\
pdf:\ f(x)=\frac{\frac{d_1}{d_2}^{\frac{d_1}{2}}x^{\frac{d_1}{2}-1}}{\Beta(\frac{d_1}{2},\frac{d_2}{2})\left( 1+\frac{d_1}{d_2}x \right)^{\frac{d_1+d_2}{2}}}, \quad (y>0\quad d_1,d_2=1,2,\dots)\\
\mu=\frac{d_2}{d_2-2},(d_2>2) \ \ and\ \ \sigma^2=\frac{2d_2^2(d_1+d_2-2)}{d_1(d_2-2)^2(d_2-4)},(d_2>4)\\
~\\
\textbf{Important properties:}\\
\text{There is no MGF. }
$$



## Geometric Distribution (Geometric 1)

$$
\textbf{Setting:}\text{ Suppose\ you\ toss\ a\ coin\ repeatedly\ until\ a\ ''head''\ comes\ up.}\\
\text{Further\ assume\ the\ probability\ of\ getting\ a\ ''head''\ is\ $p$.}\\
\text{Let\ $X$\ be\ the\ number\ of\ tossing\ required.} \\
~\\
X\sim G(p)\text{ or }X\sim geometric(p) \text{ or }X \sim Geom1(p)\\
pmf:\ f\left(x\right)=
P\left(X=x\right)=
p\left(1-p\right)^{\left(x-1\right)}
,\ \ where\ x=1,2,\ldots\\

E\left(X\right)=
\frac{1}{p}
\ \ and\ \ 
Var\left(X\right)=
\frac{1-p}{p^2}\\

mgf:\ M\left(t\right)=
\frac{pe^t}{1-e^t\left(1-p\right)}
,\ \ where\ \left(1-p\right)e^t<1\\
~\\
\textbf{Important properties:}\\
X_i\sim Geom1(p)\quad(i=1, 2, 3,\dots, \infty),Y=\sum_{i=S_i}X_i\sim NegBin(\sum_{i\in S_i}i,p)\\
\text{No memory.}\\
\text{Sum of IID geometric random variables has a Negative Binomial Distribution.}\\
$$

## Geometric Distribution (Geometric 0)

$$
\textbf{Setting:}\text{ Suppose\ you\ toss\ a\ coin\ repeatedly\ until\ a\ ''head''\ comes\ up.}\\
\text{Further\ assume\ the\ probability\ of\ getting\ a\ ''head''\ is\ $p$.}\\
\text{Let\ $X$\ be\ the\ number\ of\ tossing\ required before a "head" comes up.} \\
~\\
X \sim Geom0(p)\\
pmf:\ f\left(x\right)=
P\left(X=x\right)=
p\left(1-p\right)^x
,\ \ where\ x=0,1,2,\ldots\\

E\left(X\right)=
\frac{1-p}{p}
\ \ and\ \ 
Var\left(X\right)=
\frac{1-p}{p^2}\\

mgf:\ M\left(t\right)=
\frac{p}{1-e^t\left(1-p\right)}
,\ \ where\ \left(1-p\right)e^t<1\\
$$



## Gamma Distribution

$$
\textbf{Setting:}\text{ Suppose\ that\ $\lambda$\ customers\ will\ arrive\ in\ one\ unit\ of\ time.}\\
\text{Let\ $X$\ be\ the\ waiting\ time\ for\ the\ $\alpha^{th}$\ customer.}\\
~\\

X \sim Gamma\left(\alpha,\theta\right)
,\ \ \theta=\frac{1}{\lambda}\\

pdf:\ f\left(x\right)=
\frac{x^{\left(\alpha-1\right)}e^{\left(-\frac{x}{\theta}\right)}}{\theta^\alpha\left(\alpha-1\right)!}
,\ \ x \geq 0\\

cdf:\ F\left(x\right)=
1-\sum_{k=0}^{\alpha-1}{\frac{e^{\left(-\frac{x}{\theta}\right)}\left(\frac{x}{\theta}\right)^k}{k!}\ }\\

\mu=\alpha\theta
\ \ and\ \ 
\sigma^2={\alpha\theta}^2\\

mgf:\ M\left(t\right)=
\frac{1}{\left(1-\theta t\right)^\alpha}
,\ \ for\ t<\frac{1}{\theta}\\

P\left(X>x\right)=
P\left(fewer\ than\ \alpha\ customers\ in\left[0,x\right]\right)=
\sum_{k=0}^{\alpha-1}{\frac{e^{\left(-\frac{x}{\theta}\right)}\left(\frac{x}{\theta}\right)^k}{k!}\ }\\
~\\
\textbf{Important properties:}\\
\text{If }X_i\sim Exponential(\lambda)(i=1,2,\dots, n),\\
Y=X_1+X_2+\dots X_n \sim Gamma(n,\lambda)
$$

## Gamma Function

$$
\Gamma(t)\\

\Gamma\left(t\right)=
\int_{0}^{\infty}{y^{\left(t-1\right)}e^{\left(-y\right)}}dy
,\ \ for\ t>0\\
=\left(t-1\right)\Gamma\left(t-1\right)=t!\\
~\\
\textbf{Important propertis:}\\
\Gamma(1)=1\\
\Gamma\left(\frac{1}{2}\right)=\sqrt{\pi}\\
$$

## Hypergeometric Distribution

$$
\textbf{Setting:} \text{ Suppose\ we\ have\ a\ box\ containing $N_1$ white\ balls\ and $N_2$ black\ balls.}\\
\text{Suppose\ we\ randomly\ select\ $n$\ balls\ $\left(n<N_1+N_2=N\right)$\ without\ replacement.}\\
\text{Let\ $X$\ be\ the\ number\ of\ balls\ being\ white.}\\
~\\

pmf:\ f\left(x\right)=
P\left(X=x\right)=
\frac{\binom{N_1}{x}\binom{N_2}{n-x}}{\binom{N}{n}}
,\ \ where\ x\le n,\ x\le N_1,\ n-x\le N_2\\

E\left(X\right)=
n\left(\frac{N_1}{N}\right)
\ \ and\ \ 
Var\left(X\right)=
n\left(\frac{N_1}{N}\right)
\left(\frac{N_2}{N}\right)
\left(\frac{N-n}{N-1}\right)
$$



## Inverse-Gamma Distribution

$$

$$



## Laplace Distribution

$$

$$



## Log Normal Distribution

$$
\textbf{Setting: }\text{If }X \sim N\left(\mu,\sigma^2\right)\text{, }Y=e^X\text{, }Y\text{ is lognormally distributed. }\\
\text{i.e. }\ln Y=X\sim\left(\mu,\sigma^2\right) \text{ is normally distributed. }\\
~\\
cdf:\ F(y)=P(Y\le y)=P(X<\log y)\\
=P\left(\frac{X-\mu}{\sigma}\le \frac{\log y-\mu}{\sigma}\right)\\
=\Phi(\frac{\log y-\mu}{\sigma})\\
\text{where $\Phi(z)$ denotes as standard normal distribution.}\\
\mu=E(e^X)=M_X(1)=e^{\mu+\frac{1}{2}\sigma^2}
\ \ and\ \ 
\sigma^2=e^{2\mu+\sigma^2}(e^{\sigma^2}-1)\\
~\\
pictures!!!
$$

## Multivariate Normal Distribution

$$
\textbf{Setting: }\text{Suppose $\mathbf{X}=\begin{bmatrix}X_1\\X_2\\\vdots\\X_n\end{bmatrix}$ is a $n$-dimensional random vector.}\\
\mathbf{X}\thicksim N_n(\boldsymbol{\mu,\Sigma}),\\\text{where } \boldsymbol{\mu}=\begin{bmatrix}\mu_1\\\mu_2\\\vdots\\\mu_n\end{bmatrix},\quad \boldsymbol{\Sigma_{n\times n}}=\begin{bmatrix}\sigma_{11}&\dots&\sigma_{1n}\\\vdots&\ddots&\vdots\\\sigma_{n1}&\dots&\sigma_{nn}\end{bmatrix}\\\text{ and $\boldsymbol{\Sigma_{n\times n}}$ is the variance-covariance matrix of $\mathbf{X}.$}\\
~\\
Joint\ pdf:\\ 
f(\mathbf{x})=\frac{1}{(2\pi)^{\frac{n}{2}}{\begin{vmatrix}
\boldsymbol{\Sigma}
\end{vmatrix}}^{\frac{1}{2}}}
e^{-\frac{1}{2}(\mathbf{X}-\boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{X}-\boldsymbol{\mu})}\ where\ -\infty<x_i<\infty,\ i=1,2,\dots,n\\
~\\
\textbf{Special cases:}\\
\text{When $n=1$, $X\thicksim N(\mu.\sigma^2)$}\\
pdf:\ f\left(x\right)=
\frac{1}{\sigma\sqrt{2\pi}}e^{\left(-\frac{\left(x-\mu\right)^2}{2\sigma^2}\right)}
,\ \ for\ -\infty\le\ x\le\infty\\
\text{When $n=2$, $\mathbf{X}=\begin{pmatrix}
X_1\\X_2
\end{pmatrix}
\thicksim 
N_2\left(
\begin{pmatrix}
\mu_{1}\\\mu_{2}
\end{pmatrix},
\begin{pmatrix}
\sigma_{1}^2&\rho\sigma_{1}\sigma_{2}\\
\rho\sigma_{1}\sigma_{2}&\sigma_{2}^2
\end{pmatrix}
\right)\\$}\\
Joint\ pdf:\ f(x_1,x_2)=\frac{1}{2\pi\sigma_{1}\sigma_{2}\sqrt{1-\rho^2}}\times e^{-\frac{1}{2(1-\rho^2)}\left[(\frac{x_1-\mu_{1}}{\sigma_{1}})^2-2\rho(\frac{x_1-\mu_{1}}{\sigma_{1}})(\frac{x_2-\mu_{2}}{\sigma_{2}})+(\frac{x_2-\mu_{2}}{\sigma_{2}})^2\right]}
\\
$$



## Negative Binomial Distribution

$$
\textbf{Setting:}\\
\text{ Suppose\ now\ you\ define\ $X$\ to\ be\ the\ number\ of\ tossings\ you\ need\ to\ get\ $r$\ ''heads''.}\\
\text{$X$\ follows\ a\ negative\ binomial\ distribution.}\\
~\\
X\sim NegBin(r,p)\\
pmf:\ f\left(x\right)=
P\left(X=x\right)=
\binom{x-1}{r-1}p^r\left(1-p\right)^{\left(x-r\right)}
,\ \ where\ x=r,r+1,\ldots \\

E\left(X\right)=
\frac{r}{p}
\ \ and\ \ 
Var\left(X\right)=
\frac{r(1-p)}{p^2}\\

mgf:\ M\left(t\right)=
\frac{\left(pe^t\right)^r}
{\left[1-e^t\left(1-p\right)\right]^r}
,\ \ where\ \left(1-p\right)e^t<1
$$

## Normal Distribution

$$
\textbf{Setting:}\\
\text{Symmetric distribution. }\\

X\sim N\left(\mu,\sigma^2\right)\\

pdf:\ f\left(x\right)=
\frac{1}{\sigma\sqrt{2\pi}}e^{\left(-\frac{\left(x-\mu\right)^2}{2\sigma^2}\right)}
,\ \ for\ -\infty\le\ x\le\infty\\

mgf:\ M\left(t\right)=
e^{\left(\mu t+\frac{\sigma^2t^2}{2}\right)}\\

\mu=\mu
\ \ and\ \ 
\sigma^2=\sigma^2\\
~\\

\textbf{Standardization:}\ 
Z=\frac{X-\mu}{\sigma} \sim N\left(0,1\right)\\
cdf:\ \Phi(z)\\
~\\
\textbf{Relationship with $\chi^2$ distribution:}\\
X\thicksim N(0,1)\Rightarrow Y=X^2\thicksim \chi^2(1)\\
~\\
\textbf{Important properties: }\\
\text{If $X\sim N(\mu_X,\sigma_X^2)$, $Y\sim N(\mu_Y,\sigma_Y^2)$, $Z=X+Y\sim(\mu_X+\mu_Y,\sigma_X^2+\sigma_Y^2)$,}\\
\Rightarrow\text{the sum of two independent normally distributed random variables is normal,}\\
\text{with its mean being the sum of the two means,}\\
\text{and its variance being the sum of the two variances. }\\
$$

## Poisson Distribution

$$
\textbf{Setting:}\text{ Suppose\ that\ $\lambda$\ customers\ will\ arrive\ in\ one\ unit\ of\ time.}\\
\text{We\ want\ to\ calculate\ the\ total\ number\ of\ customers\ $X$\ arrived\ in\ the\ given\ period.}\\
\text{Discrete.}\\
~\\

Y \sim Possion\left(\lambda\right)\\

pmf:\ f\left(x\right)=
P\left(X=x\right)=
\frac{\lambda^xe^{\left(-\lambda\right)}}{x!}
,\ \ where\ x=0,1,2,3,\ldots\\

E\left(X\right)=
\lambda
\ \ and\ \ 
Var\left(X\right)=\lambda\\

mgf:\ M\left(t\right)=
e^{\left(\lambda\left(e^t-1\right)\right)}\\
~\\

\textbf{Expansion:}\text{ Suppose\ that\ $\lambda$\ customers\ will\ arrive\ in\ one\ unit\ of\ time.}\\
\text{We\ want\ to\ calculate\ the\ total\ number\ of\ customers\ $X$}\\
\text{arrived\ in\ the\ given\ $t$\ unit\ of\ time.} \\
~\\

pmf:\ f\left(x\right)=
P\left(X=x\right)=
\frac{{(\lambda t)}^xe^{\left(-\lambda t\right)}}{x!}
,\ \ where\ x=0,1,2,3,\ldots\\
~\\
\textbf{Important properties:}\\
\text{If }X_i\sim Possion(\lambda_i)\text{ for }i = 1, 2, \dots\\
Y = \sum_{i\in S_i}X_i\sim Possion(\sum_{i\in S_i}\lambda_i)
$$

## Student's t Distribution

$$
X \sim t_d\\
pdf:\ \frac{1}{\Beta(\frac{1}{2},\frac{d}{2})\sqrt{d}}\left( 1+\frac{x^2}{d} \right)^{\frac{d+1}{2}}, \quad (t = 1, 2, \dots\quad -\infty<x<\infty)\\

\mu=0 (d > 1)
\ \ and\ \ 
\sigma^2=\frac{d}{d-2}(d>2)\\
~\\
\textbf{Important properties:}\\
\text{There is no MGF.}\\
X \sim N(0,1),Y\sim\chi^2(d),\text{$X$ and $Y$ are independent,}\\
\frac{Z}{\sqrt{\frac{X_d}{d}}}\sim t_d
$$



## Uniform Distribution
$$
\textbf{Setting:}\\
\text{Continuous.}\\
~\\
X \sim U\left(a,b\right), or \ X\sim Unif(a,b)
\ \ with\ \ a<b\\

pdf:\ f\left(x\right)=
\left\{
\begin{aligned}
\frac{1}{b-a} & & ,for\ a≤x≤b \\
0 & & ,for\ otherwise 
\end{aligned}
\right.\\

cdf:\ F\left(x\right)=
\left\{
\begin{aligned}
0 & &,\ for\ x<a\\
\frac{x-a}{b-a} & &,\ for\ a≤x≤b\\
1 & &, \ for\ x>b\\
\end{aligned}
\right. \\

\mu=\frac{a+b}{2}
\ \ and\ \ 
\sigma^2=\frac{\left(b-a\right)^2}{12}\\

mgf:\ M\left(t\right)=
\frac{e^{\left(tb\right)}-e^{\left(ta\right)}}{t\left(b-a\right)}
,\ \ for\ t\neq0,\ and\ M\left(0\right)=1\\
~\\
\textbf{Important properties:}\\
\Beta(0,0)=Unif(0, 1)
$$
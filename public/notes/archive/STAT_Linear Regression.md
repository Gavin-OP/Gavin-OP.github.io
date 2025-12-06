# Linear Regression

## Simple Linear Regression

###  Terminologies

$$
\textbf{Commonly used terminologies: }\\
\bar x=\frac{\sum_{i=1}^nx_i}{n}\\
\bar y=\frac{\sum_{i=1}^ny_i}{n}\\
SXX=\sum_{i=1}^n\left(x_i-\bar x\right)^2=\sum_{i=1}^nx_i^2-n\bar x^2=n(\overline{x_i^2}-\bar x^2)\\
SYY=\sum_{i=1}^n\left(y_i-\bar y\right)^2\sum_{i=1}^ny_i^2-n\bar y^2=n(\overline{y_i^2}-\bar y^2)\\
SXY=\sum_{i=1}^n\left(x_i-\bar x\right)\left(y_i-\bar y\right)=\sum_{i=1}^nx_iy_i-n\bar x\bar y=n(\overline{x_iy_i}-\bar x\bar y)\\
$$



### Ordinary Least Squares Estimates (OLS Estimates)

$$
\textbf{Setting: }\text{Let mean function be }E(Y|X=x)=\beta_0+\beta_1x\text{.}\\
\text{Let variance function be }Var(Y|X=x)=\sigma^2\text{.}\\
\text{Let error random variable be $e_i,\ i=1,2,\dots,n$ with }
\left\{\begin{aligned}
&E(e_i)=0,\\
&Var(e_i)=\sigma^2\text{, and}\\
&e_i\text{ are uncorrelated}
\end{aligned}\right.\\
\therefore y_i=\beta_0+\beta_1x_i+e_i,\quad i=1,2,\dots,n\\
~\\
(\hat\beta_0,\hat\beta_1)=\arg \min_{\beta_0,\beta_1}\sum_{i=1}^n\left[y_i-(\beta_0+\beta_1x_i)\right]^2\\
\Downarrow\\
proof\\
\Downarrow\\
\left\{\begin{aligned}
&\hat\beta_0=\bar y-\hat\beta_1\bar x\\
&\hat\beta_1=\frac{\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)}{\sum_{i=1}^n(x_i-\bar x)^2}=\frac{SXY}{SXX}\\
\end{aligned}\right.

~\\
\hat\sigma^2=\frac{1}{n-2}RSS=\frac{1}{n-2}\sum_{i=1}^n\hat e^2=\frac{1}{n-2}\left[SYY-\frac{SXY^2}{SXX}\right]
$$

### Maximum Likelihood Estimates (MLE)

$$
\textbf{Setting: }\text{Assume $e_i\stackrel{\text{i.i.d.}}{\sim} N(0,\sigma^2)$}\\
~\\
\text{Likelihood function }L\text{: }\\
L(\beta_0,\beta_1,\sigma^2)=\prod_{i-1}^n\text{pdf}(e_i)\\
=\prod_{i=1}^n\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{1}{2\sigma^2}(y_i-\beta_0-\beta_1x_i)^2}
=\frac{1}{(2\pi\sigma^2)^{\frac{n}{2}}}e^{-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-\beta_0-\beta_1x_i)^2}\\
~\\
\text{Loglikelihood function }l\text{:}\\
l(\beta_0,\beta_1,\sigma^2)=\ln\left(L(\beta_0,\beta_1,\sigma^2)\right)\\
=-\frac{n}{2}\ln(2\pi)-\frac{n}{2}\ln\sigma^2-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-\beta_0-\beta_1x_i)^2\\
\Downarrow\\
proof\\
\Downarrow\\

\left\{\begin{aligned}
&\widetilde\beta_0=\bar y-\widetilde\beta_1\bar x\\
&\widetilde\beta_1=\frac{\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)}{\sum_{i=1}^n(x_i-\bar x)^2}=\frac{SXY}{SXX}\\
\end{aligned}\right.

~\\
\widetilde\sigma^2=\frac{1}{n}\sum_{i=1}^n\widetilde e^2=\frac{1}{n}\left[SYY-\frac{SXY^2}{SXX}\right]
$$

## Multiple Linear Regression

### Terminologies

$$
\mathbf{X}=
\begin{bmatrix}
1 & x_{11} &x_{12} & \dots & x_{1(p-1)}& x_{1p}\\
1 & x_{21} &x_{22} & \dots  & x_{2(p-1)}& x_{2p}\\
\vdots& &&\ddots&&\vdots\\
1& x_{(n-1)1} &x_{(n-1)2} & \dots  & x_{(n-1)(p-1)}& x_{(n-1)p}\\
1 7& x_{n1} &x_{n2} & \dots  & x_{n(p-1)}& x_{np}\\
\end{bmatrix}\\
\mathbf{Y}=
\begin{bmatrix}
y_1\\y_2\\\vdots\\y_{(n-1)}\\y_n
\end{bmatrix}\\
$$

### Ordinary Least Squares Estimates (OLS Estimates)

$$

$$

### Maximum Likelihood Estimates (MLE)

$$

$$

## Polynomial Regression

## Residual Analysis

### ANOVA

|      |      |      |      |      |      |
| ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |      |
|      |      |      |      |      |      |
|      |      |      |      |      |      |
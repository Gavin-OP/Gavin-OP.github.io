# STAT4001 Big Data and Statistical Learning



## Chapter 1 Introduction



### 1.1 Supervised Learning & Unsupervised Learning

#### 1.1.1 Supervised Learning

- Have both **Y** *(dependent variable/response/target)* and **X** *(independent variables/covariates/features)*

#### 1.1.2 Unsupervised Learning

- Just **X**



### 1.2 Model Complexity Tradeoff

#### 1.2.1 Good fit vs Over/under fit

- Average squared prediction error over training data:

$$
MSE_{Tr}=\frac{1}{N}\sum_{i=1}^N[y_i-\hat{f}(x_i)]^2
$$

​	   *Biased toward more **overfit*** models -> Use **test data** for MSE

 - **Step 1:** fit models using training data

   **Step 2:** Calculate MSE using test data:
   $$
   MSE_{Te}=\frac{1}{M}\sum_{i=1}^M[y_i-\hat{f}(x_i)]^2
   $$

#### 1.2.2 Prediction Accuracy and Model Interpretability Tradeoff

- Simple models are easy to interpret, complex models are hard to interpret
- Complex models can be hard to fit
- The computational cost can be high for complex models



### 1.3 Classification problems

Suppose we have 2 classes, if y=0, then the observation is in class 1; if y=1, then the observation is class 2.
$$
y=
\begin{cases}
0,  Class 1 \\
1,  Class 2
\end{cases}
$$


#### 1.3.1 K-nearest neighbor (KNN)

- **Rigid KNN: (Majority vote)**

  Given a new observation $x$ to predict $y$. The k nearest observations to $x$ are called the neighbors of $x$:

  * $N_k(x, x_i) = 1$, if $x_i$ is a neighbor of $x$
  * $N_k(x, x_i) = 0$, if $x_i$ is not a neighbor of $x$
  
  The Classifier:
  $$
  C_k(x) = \frac{\sum_{i=1}^{n}N_k(x, x_i)y_i}{\sum_{i=1}^{n}N_k(x, x_i)}=\frac{\sum_{i=1}^{n}N_k(x, x_i)y_i}{k}
  $$
  If $C_k(x) < 0.5$, we predict that $y=0$; if C_k(x) > 0.5, we predict that $y = 1$

- **KNN using Kernel function:**
  $$
  C_k(x) = \frac{\sum_{i=1}^{n}K_{\lambda}(x, x_i)y_i}{\sum_{i=1}^{n}K_{\lambda}(x, x_i)}, where   \ K_{\lambda}(x, x_i) = e^{-\frac{(x-x_i)^2}{\lambda}}\ (kernel function)
  $$
  where the parameter $\lambda$ controls how "close" is close, when $\lambda$ is extremely large, all points are neighbors.







## Chapter 2 Linear Regression

### 2.1 Simple Linear Regression

- **Step 1:** Build the model $Y=\beta_0 + \beta_1X + \epsilon$
- **Step 2:** Estimate $\beta_0$ and $\beta_1$
  
  * Estimated $\hat{y_i}$:  $\hat{y_i} = \hat{\beta_0} + \hat{\beta_1}x_i$
  * Residual value $e_i$: $e_i = y_i - \hat{y_i}$
  * RSS (Residual Sum of Squares): $RSS=\sum_{i=1}^{n}e_i^2=\sum_{i=1}^n(y_i-\hat{\beta_0}-\hat{\beta_1}x_i)^2$
  * Estimated $\hat{\beta_0}$ and $\hat{\beta_0}$:  $\hat{\beta_1}=\frac{\sum_{i=1}^{n}x_iy_i-n\bar{x}\bar{y}}{\sum_{i=1}^{n}x_i^2-n\bar{x}^2}=\frac{\sum_{i=1}^{n}(x_i-\bar{x})(y_i-\bar{y})}{\sum_{i=1}^{n}(x_i-\bar{x})}$,  $\hat{\beta_0}=\bar{y}-\hat{\beta_1}\bar{x}$
  
- **Step 3:** Assessing the accuracy of coefficient estimates

  * Standard deviation of $\hat{\beta_1}$ and $\hat{\beta_0}$

    $SE(\hat{\beta_1})^2 = Var(\hat{\beta_1})=\frac{\sigma^2}{\sum_{i=1}{n}(x_i-\bar{x})^2}$,     $SE(\hat{\beta_0})=Var(\hat{\beta_0})=\sigma^2[\frac{1}{n}+\frac{\bar{x}^2}{\sum_{i=1}^{n}(x_i-\bar{x})^2]}$

  * Confidence Interval: (95%)

    CI for $\hat{\beta_0}$: $[\beta_0-2SE(\hat{\beta_0}), \beta_0+2SE(\hat{\beta_0})]$

    CI for $\hat{\beta_1}$: $[\beta_1-2SE(\hat{\beta_1}), \beta_1+2SE(\hat{\beta_1})]$



### 2.2 Hypothesis Testing

$$
H_0: There\ is\ no\ relationship\ between\ X\ and\ Y,\ \beta_1=0\\
H_1: There\ is\ some\ relationship\ between\ X\ and\ Y,\ \beta_1\ne0
$$

- **T-statistic:**  $t=\frac{\hat{\beta_1}-0}{SE(\hat{\beta_1})}$   **(Assuming $\beta_1=0$, $n-2$ degrees of freedom)*

- **P-value:**  The probability of observing any value equal to $|t|$ or larger

- **Total Sum of Squares (TSS):**  $TSS=\sum_{i=1}^{n}(y_i-\bar{y})^2$

  **Residual Sum of Squares (RSS):**  $RSS=\sum_{i=1}^{n}(y_i-\hat{y_i})^2$

  **R-squared:**  $R^2=\frac{TSS-RSS}{TSS}=1-\frac{RSS}{TSS}$

  **In Simple Linear Regression, $R^2=r^2$, where $r^2$ is the correlation between $X$ and $Y$.*

  

### 2.3 Multiple Linear Regression

#### 2.3.1 MLR Model

- Model: $Y = \beta_0 + \beta_1X_1+\beta_2X_2+...+\beta_pX_p+\epsilon$

  $\beta_j$: Average effect on $Y$ of a one unit increase in $X_j$, holding all other predictors fixed

- $RSS=\sum_{i=1}^{n}(y_i-\hat{y_i})^2=\sum_{i=1}^{n}(y_i-\hat{\beta_0}-\hat{\beta_1}x_{i1}-...-\hat{\beta_p}x_{ip})^2$

* **Multiple Linear Regression coefficients are not reliable when predicting the relationship between $Y$ and each predictor (negative correlated or positive correlated), we should check the correlation between $Y$ and each predictor to confirm the relationship.*

#### 2.3.2 Categorical Variables

- Two levels variable: (Dummy variable)
  $$
  x_i = \begin{cases}
  1\\
  0\ (baseline)
  \end{cases}
  $$
  Resulting model:
  $$
  y_i = \beta_0+\beta_1x_i+\epsilon_i=\begin{cases}
  \beta_0+\beta_1+\epsilon_i\\
  \beta_0+\epsilon_i
  \end{cases}
  $$

- More than two levels: *(Need more dummy variable)*

  e.g. How to show if an American is Asian, Caucasian or Black?

  Model:    $y_i=\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+\epsilon_i$

   $x_{i1}=\begin{cases}
  1,\ This\ American\ is\ Asian\\
  0,\ This\ American\ is\ not\ Asian      
  \end{cases}$           $x_{i2}=\begin{cases}
  1,\ This\ American\ is\ Caucasian\\
  0,\ This\ American\ is\ not\ Caucasian \end{cases} $

  $If\ x_{i1}=x_{i2}=0,\ the\ American\ is\ Black,\ which\ is\ the\ baseline\ of\ this\ model.$

#### 2.3.3 Interactions

- **Interaction effect:** 

  - <u>Two continuous variables:</u> Suppose that spending money on radio advertising actually increases the effectiveness of TV advertising, so that the slope term for TV should increase as radio increases.

  - Model example:
    $$
    sales = \beta_0+\beta_1\times TV+\beta_2\times radio+\beta_3\times (TV\times radio)+\epsilon \\ = \beta_0+(\beta_1+\beta_3\times radio)\times TV + \beta_2 \times radio +\epsilon
    $$

  - <u>A continuous and a categorical variable:</u> Consider the Credit data set, and suppose that we wish to predict balance using income (continuous) and student (categorical).

    Model example: 

  $$
  balance_i \approx \beta_0+\beta_1\times income_i+\begin{cases}
  \beta_2+\beta_3\times income_i,\ if\ student\\
  0,\ if\ not\ student\end{cases} \\ = \begin{cases}
  (\beta_0+\beta_2)+(\beta_1+\beta_3)\times income_i,\ if\ student\\
  \beta_0+\beta_1 \times income_i,\ if\ not\ student\end{cases}
  $$





- **Hierarchy principle**: If we include an interaction in a model, we should also include the main effects, even if the p-values associated with their coefficients are not significant.

#### 2.3.4 Non-linear effects

- Model example: polynomial regression on Auto data

  Variables: $mpg\ (miles\ per\ gallon),\ horsepower$
  $$
  mpg = \beta_0 +\beta_1 \times horsepower + \beta_2 \times horsepower^2 +\epsilon
  $$

- Some issues with linear regression:

  - High leverage points: unusual $x_i$ -> Remove it
  - Non-constant variance of error terms ->  $log(Y)$ can help


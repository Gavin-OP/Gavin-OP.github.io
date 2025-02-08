# STAT4001 Big Data and Statistical Learning



## Chapter 3 Classification



### 3.1 Logistic Regression

#### 3.1.1 Binary Cases

* For **binary outcome** (k=2): (k is the number of classes, in binary cases, k=2)
  $$
  Pr(Y=1|X) = \frac{e^{\beta_0+\beta_1X}}{1+e^{\beta_0+\beta_1X}} ,\ \ 
  Y=\left\{
  \begin{aligned}
  &0, \ if \ No \\
  &1,  \ if \ Yes\\
  \end{aligned}
  \right.
  \\
  log\frac{{Pr(Y=1|X)}}{1-Pr(Y=1|X)}=\beta_0+\beta_1X
  $$

  - Likelihood function: 
    $$
    L(\beta_0,\beta_1)=\Pi_{y_i=1}\frac{e^{\beta_0+\beta_1X}}{1+e^{\beta_0+\beta_1X}}\Pi_{y_i=0}\frac{1}{1+e^{\beta_0+\beta_1X}}
    $$

* Estimate parameters using **Newton's method**: $\beta_{t+1}=\beta_t-\frac{L'(\beta_t)}{L''(\beta_t)}$

  - Newton's Method, also known as the Newton-Raphson method, is an iterative numerical technique used to find approximate roots of a real-valued function.

  - **Formula:** Given a function \( f(x) \) and its derivative \( f'(x) \), the iterative formula is:  $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$

  - **Steps:**

    1. Choose an initial guess \( x_0 \).

    2. Compute the next approximation using the formula.

    3. Repeat until the value converges to a desired precision.



#### 3.1.2 More than two cases

* For more than two cases ($k\geq 2$):

$$
Pr(Y=1|X) = \frac{e^{\beta_0+\beta_1X+...+\beta_{pk}X_p}}{\Sigma^{K}_{l=1}e^{\beta_{0l}+\beta_{1l}X+...+\beta_{pl}X_p}}
$$



### 3.2 Discriminant Analysis

#### 3.2.1 Prior probability and density:

* **$\Pi_k$ (Prior Probability of Class $k$)**:
  $\Pi_k=P(Y=k)$ represents the **prior probability** of class $k$, which indicates how likely a randomly chosen observation belongs to class $k$ before considering any feature values. This can be estimated from training data as:
  $$
  \hat{\Pi}_k = \frac{N_K}{N}
  $$
  where $N_k$ is the number of observations in class $k$, and $N$ is the total number of observations.

* **$\theta_k$ (Parameters of the Class Distribution)**:
  These parameters define the probability distribution of the features given a specific class. In Gaussian-based discriminant analysis, $\theta_k$ includes:
  * **Mean vector** $\mu_k$, which represents the expected feature values for class $k$.
  * **Covariance matrix** $\Sigma_k$, which describes the variance and correlation of features within class $k$.

#### 3.2.2 Process of Discriminant Analysis (LDA and QDA)

* **Step 1:** Learning

  Use training data $\{x_i,y_i\}_i=1$, ..., n to estimate $\Pi_k$ and $theta_k$

* **Step 2:** Prediction

  New data point $X=x$, calculate $Pr(X=x|Y=k)=f(x;\theta = \theta_k) \equiv f_k(x)$

  Assign $x$ to the class with the highest posterior probability:
  $$
  \hat{y} = \arg\max_k P(Y = k \mid X = x)
  $$

  * Bayes formula:
    $$
    P(Y=k|X=x)=\frac{P(Y=k,X=x)}{P(X=x)}=\frac{P(Y=k,X=x)}{\Sigma^{k}_{l=1}P(Y=l,X=x)}\\
    =\frac{P(X=x|Y=l)P(Y=k)}{\Sigma^{k}_{l=1}P(X=x|Y=l)P(Y=l)}=\frac{f_k(x)\Pi_k}{\Sigma^{k}_{l=1}f_l(x)\Pi_l}
    $$



#### 3.2.3 Linear Discriminant Analysis (LDA)

* **Assumptions:** the data from each class follows a **multivariate normal distribution** with a common covariance matrix but different mean vectors.
  $$
  f_k(x) = N(\mu_k, \Sigma = \Sigma)
  $$

* **Discriminant Score:**

  * $$
    P_k(x) \equiv P(Y=k\ |\ X=x)=\frac{\Pi_k\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{1}{2}(\frac{x-\mu_k}{\sigma})^2}}{\Sigma^k_{l=1}\Pi_l\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{1}{2}(\frac{x-\mu_l}{\sigma})^2}}
    $$

  * Take log on the numerator of $P_k(x)$:
    $$
    log\Pi_k - \frac{1}{2}log(2\pi)-log\sigma-\frac{1}{2}(\frac{x-\mu_k}{\sigma})^2\\
    =log\Pi_k-\frac{\mu_{k}^2}{2\sigma^2}+\frac{\mu_k}{\sigma^2}x-\frac{1}{2}log(2\pi)-log\sigma - \frac{x^2}{2\sigma^2}
    $$
    where the last three terms are unrelated to $k$

  * Thus, the **discriminant score** is:
    $$
    \delta_k(x)=x\frac{\mu_k}{\sigma^2}-\frac{\mu_k^2}{2\sigma^2}+log\Pi_k
    $$
    where it is a linear function

  * If there are k=2 classes and $\Pi_1=\Pi_2=0.5$, then decision boundary: $x=\frac{\mu_1+\mu_2}{2}$

* **MLE** for LDA (k=2):
  $$
  L(\theta) = \Pi_{i=1}^{n}P(x_i,y_i)=\Pi_{i=1}^n(P(y_i)P(x_i|y_i))=\Pi_{i=1}^n(\Pi_1^{y_i}\Pi_0^{1-y_i}f_1(x_i))^{y_i}f_0(x_i)^{1-y_i}\\
  l(\theta)=log(L(\theta))=log\Pi_1\Sigma^n_{i=1}y_i+log\Pi_0\Sigma^n_{i=1}(1-y_i)+\Sigma^n_{i=1}y_ilogf_1(x_i)+\Sigma^n_{i=1}(1-y_i)logf_0(x_i)
  $$

* Calculate $\Pi_k$ (k=2):

  Plug in $\Pi_0+\Pi_1=1$ and take derivative on  $\Pi_1$:
  $$
  \frac{1}{\Pi_1}\Sigma^n_{i=1}y_i-\frac{1}{1-\Pi_1}\Sigma^n_{i=1}(1-y_i)=0
  $$
  So we get
  $$
  \hat{\Pi}_1=\frac{\Sigma^n_{i=1}y_i}{n}\ \ and \ \ \hat{\Pi}_0=1-\hat{\Pi}_1=\frac{n-\Sigma^n_{i=1}y_i}{n}
  $$

* Calculate $\theta_k$ (k=2):

  * $\hat{\mu}_1 = \frac{\Sigma^n_{i=1}(y_ix_i)}{\Sigma^n_{i=1}y_i}=\frac{\Sigma_{y_i=1}x_i}{n_1}$
  * $\hat{\mu}_0 = \frac{\Sigma^n_{i=0}x_i}{n_0}$

  * $\hat{\sigma}^2=\frac{1}{n-2}(\Sigma_{y_i=1}(x_1-\hat{\mu}_1)^2 + \Sigma_{y_i=0}(x_0-\hat{\mu}_0)^2) = \frac{n_1-1}{n-2}\hat{\sigma}^2_1+\frac{n_0-1}{n-2}\hat{\sigma}^2_0$

    where $\hat{\sigma}^2_1=\frac{1}{n_1-1}(\Sigma_{y_i=1}(x_1-\hat{\mu}_1)^2$,  $\hat{\sigma}^2_0=\frac{1}{n_0-1}(\Sigma_{y_i=0}(x_0-\hat{\mu}_0)^2$

#### 3.2.4 Difference between Logistic Regression and Discriminant Analysis:

| Feature               | Logistic Regression                       | Discriminant Analysis (LDA/QDA)           |
| --------------------- | ----------------------------------------- | ----------------------------------------- |
| **Model Type**        | Discriminative                            | Generative                                |
| **Assumption on $X$** | No distributional assumption              | Assumes normality (Gaussian)              |
| **Decision Boundary** | Linear (for standard logistic regression) | Linear (LDA) or Quadratic (QDA)           |
| **Estimation Method** | Maximum Likelihood Estimation (MLE)       | MLE for mean and covariance               |
| **Best Use Case**     | When class distributions are unknown      | When data follows a Gaussian distribution |


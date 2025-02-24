# Test

> Author: Gavin ZHANG  
> Create Time: 2024-10-34


## Introduction

this is a test markdown notes file. 

## Python

```python
import pandas as pd
import numpy as np

print("Hello World")
data = pd.DataFrame(np.random.randn(10, 5))
print(data)
```

## JavaScripts

```javascript
console.log("Hello World")
let data = [1, 2, 3, 4, 5]
console.log(data)

const getCurrentUrl = () => {
    return window.location.href
}
```

## R

```r
library(ggplot2)
library(dplyr)

data = data.frame(x = rnorm(100), y = rnorm(100))
ggplot(data, aes(x = x, y = y)) + geom_point()
```


## SQL

```sql
SELECT * FROM table_name
WHERE column_name = 'value'
```

## Bash

```bash
echo "Hello World"
ls -l
```

![test image](../../image/NKY_BS_IV_Surface.png)

![test http image](https://gavin-op.github.io/image/price.png)

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
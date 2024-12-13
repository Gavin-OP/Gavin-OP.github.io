- Martingale Sequence $(S_n,\mathcal F_n)$, or another denotation $\{S_n,\mathcal F_n,n\ge 1\}$ is [extended](https://econweb.umd.edu/~chao/Teaching/Econ624/Econ624_Lecture_on_Mixing_Processes_and_Martingale_Difference_Arrays.pdf) to **martingale array** in Chapter 3, which is:
  $$
  \{S_{ni},\mathscr{F}_{ni},1\leqslant i\leqslant k_n,n\ge 1\}
  $$

  - we can imagine:
    $$
    \begin{bmatrix}
    S_{1,1}&S_{1,2},&...&S_{1,k_1}\\
    \cdots&\cdots&\cdots&\cdots\\
    S_{n,1}&S_{n,2},&...&S_{n,k_n}\\
    \cdots&\cdots&\cdots&\cdots\\
    \end{bmatrix},\quad
    \begin{bmatrix}
    \mathcal F_{1,1}&\mathcal F_{1,2},&...&\mathcal F_{1,k_1}\\
    \cdots&\cdots&\cdots&\cdots\\
    \mathcal F_{n,1}&\mathcal F_{n,2},&...&\mathcal F_{n,k_n}\\
    \cdots&\cdots&\cdots&\cdots\\
    \end{bmatrix}
    $$

  - For each row, we have $\mathcal F_{n,1}\subset\mathcal F_{n,2}\subset\cdots\subset \mathcal F_{n,k_n}$. So we can imagine each row to be information flow and price path of an asset. If $n_k=n_0$ as an constant, then we are comparing $n=1,2,...$ assets within same time period as $i=1,2,...,n_0$

  - Also, it could be assumed that $k_n=n$ (so triangular array), or in some cases, assume $k_n<n$ (it depends). Another general assumption is $k_n\to\infty$ as $n\to\infty$. Therefore, we can imagine the whole array represents one asset, but different row represents different samples (infill or long-span?)

  - When we assume the $\sigma$-fields are nested, we mean: $\mathcal F_{n,i}\subset\mathcal F_{n+1,i}$, i.e., $\mathcal F_{n+1,i}$ not only capture information in row $(n+1)$, but it also include information in previous rows

  - All scenarios above may reveal the role of martingale array: constraints are imposed when demanded in support of martingale theorems proof

  - There is also corresponding **martingale difference array (MDA)**:
    $$
    \begin{bmatrix}
    X_{1,1}&X_{1,2},&...&X_{1,k_1}\\
    \cdots&\cdots&\cdots&\cdots\\
    X_{n,1}&X_{n,2},&...&X_{n,k_n}\\
    \cdots&\cdots&\cdots&\cdots\\
    \end{bmatrix}
    $$

  - If we take certain row, we get **martingale difference sequence**
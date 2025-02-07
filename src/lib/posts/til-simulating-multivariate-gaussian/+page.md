---
title: "TIL: simulating Gaussian random vectors"
description: |
  
author: Andrew Moore
date: "2025-02-02"
categories: ["til", "statistics"]
format:
  gfm:
    variant: +yaml_metadata_block
---

As part of my senior project, I'm learning about Gaussian random vectors. Today, I was digging into an algorithm for *simulating* a draw from a specific multivariate Gaussian distribution. The algorithm can be described as the following, given a vector $\mathbf{\mu} \in \mathbb{R}^n$ and a positive-(semi)definite matrix $\mathbf{\Sigma} \in \mathbb{R}^{n \times n}$:

1. Compute the Cholesky decomposition of $\mathbf{\Sigma}$, $R^\top R = \mathbf{\Sigma}$.
2. Generate $\mathbf{z} = \begin{bmatrix} Z_1 \\ Z_2 \\ \vdots \\ Z_n \end{bmatrix}$ where $Z_1, Z_2, \dots, Z_n \overset{\text{i.i.d.}}{\sim} \mathcal{N}(0, 1)$.
3. Compute $\mathbf{x} = R\mathbf{z} + \mathbf{\mu}$.

The claim is that $\mathbf{x}$ is a draw from the multivariate Gaussian distribution parameterized by $\mathbf{\mu}$ and $\mathbf{\Sigma}$, i.e., $\mathbf{x} \sim \mathcal{N}(\mathbf{\mu}, \mathbf{\Sigma})$. So, why does this work? First, we can show that $\mathbb{E}(\mathbf{x}) = \mathbf{\mu}$:

$$
\begin{align*}
\mathbb{E}(\mathbf{x}) &= \mathbb{E}(R\mathbf{z} + \mathbf{\mu}) \\
  &= \mathbb{E}(R\mathbf{z}) + \mathbb{E}(\mathbf{\mu}) \\
  &= R \cdot \mathbb{E}(\mathbf{z}) + \mathbf{\mu} \\
  &= R \cdot 0 + \mathbf{\mu} \\
  &= \mathbf{\mu}.
\end{align*}
$$

Next, we can see that $Cov(\mathbf{x}) = Cov(\mathbf{x}, \mathbf{x}) = \mathbf{\Sigma}$:

$$
\begin{align*}
Cov(\mathbf{x}) &= Cov(R\mathbf{z} + \mathbf{\mu}) \\
  &= Cov(R\mathbf{z}) \\
  &= R^\top\ Cov(\mathbf{z})\ R \\
  &= R^\top I R \\
  &= R^\top R \\
  &= \mathbf{\Sigma}.
\end{align*}
$$

This hinges on the definition of covariance and the independence of the $Z_i$'s ($Cov(Z_i, Z_i) = Var(Z_i) = 1$ and $Cov(Z_i, Z_j) = 0$ for $i \neq j$ and $Z_i \perp Z_j$).

Having shown that the expectation and (co)variance of $\mathbf{x}$ are what we'd assume, we need to show that $\mathbf{x}$ qualifies as multivariate normal. A random vector is multivariate normal if any linear combination of its elements are normally distributed. From its construction, we know $\mathbf{x}$ is a linear transformation of a standard normal vector, i.e., $\mathbf{z}$. We can decompose $\mathbf{x}$'s $i$-th element, $X_i$, into the following:

$$
\begin{align*}
\sigma_i &= \sum_{j = 0}^n R_{i,j} \\
X_i &= Z_i \sigma_i + \mu_i.
\end{align*}
$$

We can then show that $X_i \sim \mathcal{N}(\sigma_i \cdot 0 + \mu_i, \sigma_i^2) \implies X_i \sim \mathcal{N}(\mu_i, \sigma_i^2)$. This follows from theorems regarding the transformation of random variables (Casella & Berger, 2002). I'll demonstrate it for an arbitrary $Z \sim \mathcal{N}(0, 1)$, $\mu$, and $\sigma > 0$ (omitting the subscript $i$ for brevity). The probability density function (pdf) of the standard normal $f_Z(z)$ is defined as 
$$
f_Z(z) = \frac{1}{\sqrt{2\pi}}\ e^{-z^2 / 2}.
$$

Define $X' = g(Z) = \sigma \cdot f_Z(Z)$. Then, $g^{-1}(x) = \frac{x}{\sigma}$, and $\frac{d}{dx}g^{-1}(x) = \frac{1}{\sigma}$. Thus, the probability density function $f_{X'}(x)$ is

$$
\begin{align*}
f_{X'}(x) &= f_Z(g^{-1}(x)) \frac{d}{dx}g^{-1}(x) \\
  &= f_Z \Bigl(\frac{x}{\sigma} \Bigr) \cdot \frac{1}{\sigma} \\
  &= \frac{1}{\sqrt{2\pi}}\ e^{-(\frac{x}{\sigma})^2 \cdot \frac{1}{2}} \cdot \frac{1}{\sigma} \\
  &= \frac{1}{\sqrt{2\pi} \sigma}\ e^{-\frac{x^2}{2\sigma^2}} 
\end{align*}
$$

This is the pdf for $\mathcal{N}(0, \sigma^2)$. Now, we find $X = h(X') = f_{X'}(X') + \mu$, where $h^{-1}(x) = x - \mu$ and $\frac{d}{dx}\ h^{-1}(x) = 1$. As with the above, we have
$$
f_X(x) = f_{X'}(h^{-1}(x)) \frac{d}{dx}\ h^{-1}(x) = f_{X'}(x - \mu) = \frac{1}{\sqrt{2\pi} \sigma}\ e^{-\frac{(x - \mu)^2}{2\sigma^2}},
$$

which is the classical definition of the normal distribution's probability density function. This means that scaling a normal variable by a constant, or adding a constant to a normal variable results in another normal variable. So, each $X_i$ is normal. Lastly, as one's intuition might suspect, the sum of two independent normal variables is also normal. I won't go through the proof here, but some versions can be found on [wikipedia.](https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables)

Thus, we can conclude that a linear combination $Y = a_1 X_1 + \cdots + a_n X_n$ is a normal variable, meaning $\mathbf{x}$ is a draw from the multivariate Gaussian distribution.

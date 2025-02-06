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

Having shown that the expectation and (co)variance of $\mathbf{x}$ are what we'd assume, we need to show that $\mathbf{x}$ qualifies as multivariate normal. A random vector is multivariate normal if any linear combination of its elements are normally distributed. From its construction, we know $\mathbf{x}$ is a linear transformation of a random vector, i.e., $\mathbf{z}$. That is, each $X_i$ can be written as


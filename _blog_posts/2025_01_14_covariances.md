---
title: Correlations of Phase Shift Keying ($N$-PSK)
date: "2025/01/14"
emoji: 🎛️
summary:
    Calculating expressions for the auto and crosscorrelation of the BPSK, QPSK, 8-PSK and QAM.
---

A common way to represent digital signals in communication schemes
is Phase-Shift Keying (PSK). Instead of encoding a binary digit as a low
or high voltage, PSK relies on a carrier phase, by modulating a cosine
frequency as a function of time, you can communicate a different bit.

PSK is widely used in many wireless schemes, including RFID, Bluetooth and WLAN. The correlation function applied to various PSKs can be a measure of extracting the ... add motivation

We will consider Coherent PSK (CPSK) schemes first and then show
equivalence with the much more widely used (and easier to implement)
Differential PSK (DPSK).

# BPSK (2-PSK)

The BPSK involves setting a constellation diagram (IQ-space diagram that shows a digital modulation schemes subspace) where the `0` and `1` states lie opposite each other on the in-phase component - i.e. it is the maximal separation 2-state PSK. 

To encode a bit $b$, our signal would follow

$$
\begin{align}
S = A \cos (\omega_c t + \pi \left(\frac{1}{2}-b\right)), \; \; b\in \mathbb{Z}_2
\end{align}
$$

where $A$ is the amplitude of our bit and $\omega_c$ is our carrier frequency.
<br/><br/>

Given a random sequence of bits $b=(b_1b_2\cdots b_n)$
where $b_i=1$ with a probability $p$, the encoded signal (when $A=1$) would be a random variable

$$
\begin{align}
X_2(t) &= \cos (\omega_c t + \Theta(t))\\
\Theta(t) &= \begin{cases}
        +\frac{1}{2}\pi \;\;\; \text{if }\, b_n=1\, \text{ for } \, nT < t < (n+1) T\\
        -\frac{1}{2}\pi \;\;\; \text{otherwise}\\
        \end{cases}
\end{align}
$$

or equivalently:
$$
\begin{align}
X_2(t) &= \cos \left(\omega_c t + \pi\left(b_n-\frac{1}{2}\right)\right)
\end{align}
$$

where $b_n$ is the bit at time $nT < t < (n+1) T$.

<br/><br/>

The EV of the process can be written as follows:

$$
\begin{align}
E[X_2(t)] &= E[\cos (\omega_c t + \Theta(t))]\\
&= E\left[\cos (\omega_c t) \cos(\Theta(t)) - \sin (\omega_c t) \sin(\Theta(t))\right]\\
&= \cos (\omega_c t) \cdot E\left[\cos(\Theta(t))\right] - \sin (\omega_c t) \cdot E\left[\sin(\Theta(t))\right]\\
&= 0 - \sin (\omega_c t) (1-2p) \label{eq:setting_trig_theta}
\end{align}
$$

Where \ref{eq:setting_trig_theta} can be derived from noticing that
$\cos\left(\Theta(t)\right) = 0$ or 
$\sin\left(\Theta(t)\right) = \pm 1$
(since $\Theta(t)$ is $\pm\frac{\pi}{2}$).
When $p=0.5$ then on average the sin is 0, but if $p$ is non-zero,
then $\sin$ will be $(+1)\cdotp+(-1)\cdot(1-p)=1-2p$.
<br/><br/>

To compute the autocorrelation $R_{X_2}(t_1, t_2)$, we can calculate 
$E[X(t_1)X(t_2)]$. We will set the terms $cos \Theta(t)=0$ (same reason as above) immediately to simplify the expression \ref{eq:rx2}:

$$
\begin{align}
R_{X_2}(t_1, t_2) &= E\left[\sin (\omega_c t_1) \sin(\Theta(t_1)) \sin (\omega_c t_2) \sin(\Theta(t_2))\right] \label{eq:rx2}\\
&= \sin (\omega_c t_1) \sin (\omega_c t_2) E\left[\sin(\Theta(t_1)) \sin(\Theta(t_2))\right]\\
&= \begin{cases}
\sin (\omega_c t_1) \sin (\omega_c t_2)\;\;\; \text{if }\, nT \leq t_1, t_2 < (n+1)T\\
\sin (\omega_c t_1) \sin (\omega_c t_2) (1-2p)^2 \;\;\; \text{otherwise}\\
\end{cases} 
\end{align}
$$
<br/><br/>

Getting the autocovariance 
$K_{X_2}(t_1, t_2) = R_{X_2}(t_1, t_2) - E[X_2] (t_1)E[X_2] (t_2)$

$$
\begin{align}
K_{X_2}(t_1, t_2) &= \begin{cases}
4p(1-p) \sin (\omega_c t_1) \sin (\omega_c t_2) \;\;\; \text{if }\, nT \leq t_1, t_2 < (n+1)T\\
0 \;\;\; \text{otherwise}\\
\end{cases} 
\end{align}
$$
<br/><br/>

We can now notice that when the bits being transmitted at $t_1$ and $t_2$ correspond to the same bit $b_i$ (not value!),
then the autocorrelation encodes $4p(1-p)$ 
(evals to $1$ if $p=0.5$) with a difference in visibility due to the phases. Otherwise, if the bits
don't correspond to the exact same bit, the autocovariance is $0$.


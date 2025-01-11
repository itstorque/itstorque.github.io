---
title: EspressoSimulations.jl
date: "2025/01/05"
emoji: ☕️
post_published: true
summary: 
    A mathematical exploration of different parameter regimes using coupled differential algebraic equations.
---

<style>
   // Adding 'Contents' headline to the TOC
   #markdown-toc::before {
      content: "Contents";
      font-weight: bold;
   }


   // Using numbers instead of bullets for listing
   #markdown-toc ul {
      list-style: decimal;
   }

   #markdown-toc {
      border: 1px solid #aaa;
      padding: 1.5em;
      list-style: decimal;
      display: inline-block;
   }
</style>


# Motivation(-ish)

I am by no means an expert on making or tasting coffee -- not a great start for this post! 
As an excitable nerdy researcher,
I resorted to using coffee as a means of fueling myself up. After spending time in multiple 
offices with other researchers, brewing a cup of espresso became a habit. 
I didn't really ever care for its taste beyond the "*shake-y* feeling" it provides, afterall,
I never had to brew a good cup of espresso if my drink had a generous serving of milk and sugar added.

After brewing an unexpectedly delicious cup of espresso at my office one morning, 
I couldn't help but wonder what could've changed to make this cup so much
better. I had used the same beans as any other day and proceeded with my usual espresso
brewing habit: use the same "parameters" as the previous person. Figuring out what could've changed
cemented my descend into madness.

This post is my attempt to organize my madness and talk about a Julia package I implemented inspired by 
the [various literature](#references) (especially [\[1\]](#references) for the model formulation) I ended up reading to simulate 
espresso brewing.

As an espresso novice who didn't know what the word tamp meant two weeks ago, I
realized I had to learn at least a few coffee brewing concepts to improve my
morning coffee ritual. I find it hard to trust random phenomenological advice that isn't 
backed by systematic/theoretic evidence. While the body of experimental and intuitive
knowledge on coffee extraction is broad, I ultimately decided to try to write my own simulator for 
coffee preparation -- I did say I went mad. This served as a means for me to be able to explore various
parameter regimes and have a deeper understanding of why people give various tidbits of advice,
things like: "the finer the grind, the more bitter the coffee is" or "the slower the flow, 
the more extraction there is."

> **Actual Motivation?**
> 
> Well, it also seemed natural to have an espresso simulator to complement my
> **baking simulator** (posts to come on this at some point 😀). 
> I may be fueling my escapist simulation-based bakery/café dream too much,
> but a person can only dream.

<!-- ## Previous work -->

<!-- I read a few articles that inspired this work, including using the formulation
for the homogenization problem as defined in [\[1\]](#references). -->

<!-- **[TODO]** -->

# Coffee Extraction

When making a cup of espresso, you can typically play with 2 classes of parameters:

1. Parameters of the Espresso Machine
   - Pressure
   - Grind size
   - Temperature of the Water
   - Preinfusion time
   - Brew time
2. Puck preparation
   - Tamping pressure
   - Number of clumps
   - Grain size and position distributions
   - Temperature of the puck
   - Pre-emptive planning for flow optimization

The things that differ in the output fall in 3 classes:

1. The good stuff: the flavors, aromas, maillard reaction products (from roasting)...
2. The shake-y stuff: the caffeine
3. The bad stuff: the bitter stuff, tannins

These different classes (and subclasses) have different characteristic extraction timescales
which is what optimized brewing takes advantage of. The ratio of all these (sub)classes is what
makes the ideal cup of espresso for a certain person - and just like with food, different latent
parameter regimes correspond to different favorability for a group of people.

I will focus on solving the problem of predictively simulating the resultant latent parameter regimes, 
all of which have extensive ways to be measured after a cup is brewed. The decision of the optimal cup
flavor profile is then dependent on the type of bean, the level of the roast, ..., and most importantly
the barista's preferences.


## Coffee Transport

When dealing with factors regarding espresso extraction, we are concerned with the 
transport of "coffee molecules" into the liquid drink. This extraction is a function
of parameters across multiple different scales.

<img src="espresso_sims_main_fig.png" width="100%"/>

We will be thinking about two main order of magnitudes of scales: the puck scale and 
the grain scale. 

At the puck scale, we will be concerning ourselves with a 1D reduction
of the cylindrical coordinate system of a double-shot-sized basket (these baskets have a
non-tapered profile but modifying the mass-matrices to handle non-uniform radius baskets
would be trivial). If we were to model the basket as a cylinder with constant pressure water
being applied above the basket, we can see that the angular component of the coordinate 
system is redundant due to the rotational symmetry of the basket. We can also take advantage of
the fact that (a) the primary mechanism of coffee extraction is advection [insert reference here]()
and (b) the flow regime in typical espresso brewing applications contains mostly local 
interactions independent on the radial position [insert reference here also](). We can therefore
drop the dimension along the radius and angle of the puck and average across them in our simulations.

At the grain scale, we are concerned with modelling the individual grains inside our 1D-reduced basket
to model how our "coffee molecules" are being extracted from within the grain into our liquid beverage.
We will be modelling this using a reduced 1D model as well such that we can drop the dependence of our
Differential Algebraic Equations (DAEs) on the two angular dimensions of a spherical coordinate system.

We will therefore end up with an equivalent multi-scale 2D model for an espresso puck where each dimension
concerns different scales ($\\mathrm{cm}$ for the puck scale vs.  $\\mathrm{\mu m}$ for the grain scale).


## Extraction Snobbery

<center>
<figure>
   <img src="espresso_sims_grind_sa_fig.png" width="75%"/>
  <figcaption>Figure from Uman et al. <a href="#references">[3]</a> showcasing the dependence of the grind distribution on temperature.
  The grind size typically features two peaks and the underlying surface area distribution directly effects
  the extraction quality <a href="#references">[4]</a>. This is typically the reason espresso connoisseurs chase high-end grinders for beans <a href="#references">[4]</a>.
  </figcaption>
</figure>
</center>

- add fig of coffee grind size spectrum

# TODO: baskets

- add blurb on precision baskets
- how to generaliz eemodel to bad baskets
- add pressure out from baskets -> basket size effects output pressure
- blurb on pressure chambered baskets for ground coffee https://www.youtube.com/watch?v=3oFV88PzEFE
- single shot baskets are harder to prep and make consistent. removal of z-symmetry
- smaller puck offers less resistance to water flow, so you need to grind finer to maintain extraction time

# Multi-Scale Homogenized Advection-Diffusion Setup

**TODO**: Multi-scale solving, cite papers etc.

## A Multi-Scale Problem



### Advection-Diffusion



### Mass-Matrices



- our mass matrix is singular (rank is always $2N^2$ and dim is always $2N^2+N$)
- Convinient way to write a DAE
- Finite differences -> tridiagoinal structure
- Boundary Value Problem

## Formalization


Enforcing mass conservation on the homogenised control volume, we find that the mass of coffee
absorbed in the liquid at time $t$ is:

<div>
   \begin{align}
      M_l(t) &= \pi R^2 \int_0^L (1-\phi_s)c_l(z, t) \; dz
      \newline
      \dfrac{dM_l(t)}{dt} &= \pi R^2 \cdot \left ( 
           \int_0^L D_{eff} \partialderivative{c_l(z, t)}{z} + \vec{b}_{et} \cdot \vec{G} \; dz
          \right)
      \newline
      \dfrac{dM_l(t)}{dt} &= \pi R^2 \cdot \left ( 
         -\dfrac{\kappa_{eff} P_{tot}}{\mu L} c_l(z=L, t) + \int_0^L \vec{b}_{et}\cdot \vec{G} \;dz 
         \right)
      \label{eq:mass}
   \end{align}
 </div>

 Assuming that at $t=0$, the concentration of coffee in the liquid is 0, we get that $M_l(t=0)=0$,
 which implies that

 <div>
   \begin{align}
   aaaa
   \end{align}
 </div>

I listed the assumptions that go into this model [here](#assumptions).

## Solving the ODE

> **TODO**: 
> 
> - ODE Definition

Using Julia's `DifferentialEquations.jl`{:.highlight .language-julia} package we can setup
a mass-matrix ODE to compute the flow of coffee sollubles similar to [**TODOTODOTODO**]().

- cite https://arxiv.org/pdf/2008.03883
- Rosenbrok23 p good - fast and high accuracy see above link.
- Rodas5P - A 5th order A-stable stiffly stable Rosenbrock method with a stiff-aware 4th order interpolant. Has improved stability in the adaptive time stepping embedding.
- Factor of 10 faster than default choice from DifferentialEquations.jl <- its important to know when to swap solvers :)
- list of solvers: https://docs.sciml.ai/OrdinaryDiffEq/stable/massmatrixdae/Rosenbrock/#OrdinaryDiffEqRosenbrock.Rosenbrock23-massmatrixdae-Rosenbrock


## The Julia Package

<center>
<figure>
  <img src="espresso_sims_logo_text.jpg" width="50%" style="max-width: 17em;"/>
  <figcaption>Logo of the EspressoSimulations.jl package <a href="#references">[0]</a>.
  </figcaption>
</figure>
</center>

Instructions on installing the package:
```
```

Basic use:
```
```

## Assumptions

- Incompressible flow, following reference [\[2\]](#references)
- Constant viscosity, following reference [\[2\]](#references)
- At $t=0$, wetting and pre-infusion stages are completed and the bed is filled with water, following reference [\[1\]](#references)
  - As a result, the flow is steady
  - Assume homogeneous flow where the two-phase flow is comprised of two well-mixed phases.
- At $t=0$, all of the coffee concentration is in the solids, none has diffused into the liquid yet
- Assuming radial symmetry within the puck, following reference [\[1\]](#references)
- Rate of transfer of coffee solubles is a local operator on top of the concentration field.
- The puck is treated isothermally
- Two distribution of particle sizes have dominant frequencies, following experimental evidence from **TODO**
- Static puck, i.e. parameters held constant are:
  - Diffusivity
  - Grain surface areas
  - Puck height
  - Puck geometry only depends on initial grind settings
  - Density of drink equal to density of water [**TODO: change this??**]

# References

TODOTODOTODOTODOTODOTODO

0. Github link to package (update this 1 later)
1. M. I. Cameron et al., “[Systematically Improving Espresso: Insights from Mathematical Modeling and Experiment](https://doi.org/10.1016/j.matt.2019.12.019),” Matter, vol. 2, no. 3, pp. 631–648, 2020.
2. K. M. Moroney, W. T. Lee, S. B. G. O׳Brien, F. Suijver, and J. Marra, “[Modelling of coffee extraction during brewing using multiscale methods: An experimentally validated model](https://doi.org/10.1016/j.ces.2015.06.003),” Chemical Engineering Science, vol. 137, pp. 216–234, 2015.
3. Uman, E., Colonna-Dashwood, M., Colonna-Dashwood, L. et al. [The effect of bean origin and temperature on grinding roasted coffee](https://www.nature.com/articles/srep24483). Sci Rep 6, 24483 (2016). https://doi.org/10.1038/srep24483
4. Hoffman, J., [The Best Espresso Grinder Under £250](https://www.youtube.com/watch?v=G7xGhGtvYIs&t=1104s). YouTube (2024).
5. Zeng control volume method (2013 MIT DSPace) for:

---
title: Cooking an Egg Optimally?
date: "2025/02/23"
emoji: 🥚
post_published: false
summary: 
    Reproducing the work of E. Di Lorenzo on the Periodic cooking of eggs in Julia 
    and using it to find cursed parameter regimes for egg cooking. 
---

I came across the Nature paper "[Periodic cooking of eggs](https://www.nature.com/articles/s44172-024-00334-w#Sec9)" 
on Friday and -- as an appreciator of simulation-based culinary arts and jammy yolks -- found it interesting. After chatting with 
my friend Rihn about the topic, they expressed their dissapointment
in the definition of optimality in this paper, as they personally prefer
a fully cooked yolk and slimey raw whites.

Their joking aside, I got sucked into the question of how hard
would it be for one to cook the egg yolks completely while having
the egg whites still not undergo gelation. As an obvious first step,
I had to reproduce the simulations of Di Lorenzo et al. in Julia
and then search the parameter space for these cursed regimes where
we can get Rihn's optimal egg.

# The model

Instead of using a Computational Fluid Dynamics (CFD) tool 
like they did in the Di Lorenzo paper,
I will instead be writing my own Julia simulation using [`OrdinaryDiffEq.jl`](https://docs.sciml.ai/OrdinaryDiffEq/stable/).

In the simulations, we will be interested in the thermal transport problem as well as the gelation (turning from goopy liquid egg into a cooked egg) problem. We will be modelling the
egg as having a Dirichlet boundary condition along the shell (since water has a high heat capacity and is assumed to be sitting at that temperature before eggs are placed in).

The assumptions in the Di Lorenzo paper are as follows:
1. 

I will further introduce one more assumption, that the problem
is reducible to 1D. If the egg were a perfect sphere, then this
is a gauranteed assumption - the symmetry along the sphere and BC ensures that there should be minimal components along the theta and phi directions inside the sphere. However, since our egg is oval shaped (reflective but not rotational 
symmetry), this is not a gaurantee, as various oval egg modes
might begin to appear. 

![alt text](egg_cell_loc_effect.png){:.small_figure}

Given that we are already ignoring the presence of an air cell
within the egg, which will greatly effect the thermal modes of 
the egg and that in an actual egg, we experience convection,
assuming the problem is 1D will be an okay assumption to make.
Since we will assume that gelation is also independent of nearby portions having been gelated, we can imagine that in the steady state operation of the egg, a single 1D slice of an egg will
be an averager over the modes to get the simulated slice.

The 1D slice we take goes from one edge of the egg through the yolk and out to the other egg edge, 
where both edges (referred to as left and right) are held at a constant temperature using a Dirichlet
boundary condition. This temperature refers to the temperature that is pulsed between boiling and cooling
in the periodic cooking of eggs paper. Our pulsing follows hard transitions in temperature due to the fact
the eggs are removed and submerged into baths held at a different temperature - we assume that the accessible
heat energy in the water bath overwhelms that of the egg, and as such it's constant.

The Julia code takes into account different geometric and thermal parameters of the yolk and albumen. 
The heat equation being solved is: $$\frac{\partial T}{\partial t} = \alpha \nabla^2 T + S(z)$$

Where the first term correspond to the typical thermal conduction model and the $S(z)$ allows us to
test various internal components for thermal generation. This can help us test other higher-dimensional
harmonics in the egg and what effect it may have on the egg (for instance, heat being injected from a 
slice above the one we took in). 

$\alpha$ as we defined it is temperature and material dependent, and as such, we will need two different variants, $\alpha_{\mathrm{albumen}}$ and $\alpha_{\mathrm{yolk}}$ corresponding to the two consistuent egg "materials".
We will also add temperature dependence to them 
($\alpha_{\mathrm{albumen}}(T)$ and $\alpha_{\mathrm{yolk}}(T)$) from the data presented in [2]

Defining the Laplacian operator in one dimension: $$\nabla^2 T = \frac{\partial^2 T}{\partial z^2}$$

We can then discretize it to get: $$\nabla^2 T_i = \frac{T_{i-1} - 2T_i + T_{i+1}}{\Delta z^2}$$

Finally translating this to an update function on the thermal state: $$T(t + \Delta t) = T(t) + \Delta t \left( \alpha \nabla^2 T + S(z) \right)$$

In the code, this is implemented using a `SplitODEProblem` that takes in a time evolving matrix $D(t)\sim D(\vec T)$ 
where $D(\vec T) = \vec\alpha(\vec T) \odot \nabla^2$ and a right hand side that sets the BCs and any other thermal inputs ($S(z)$). The BCs are set as $\alpha_{\mathrm{albumen}}(T_{\mathrm{drive}})\cdot T_{\mathrm{drive}} / \Delta z^2$, and unless otherwise stated, $S(z)=0$.

TODO: insert 1D chain thermal properties

TODO: insert parameters used for egg

TODO: insert reactivity equations

We will model done-ness (the process of having a node $i$ gone through gelation, $X_i(t) \in [0, 1]$) in a similar fashion to the paper
using the Arrhenius equation as they did in the paper:

$$ \frac{dX_i(t)}{dt} = A_i\cdot \exp\left(\frac{E_{a, i}}{R\cdot T_i(t)}\right) $$

Where $E_{a, i}$ is the activation energy for gelation for the node at 
$i$ (2 different values based on albumen or yolk) and similary $A_i$ for
the pre-exponential factor. 
$T_i(t)$ here is the temperature of node $i$ at a time $t$ from the thermal transport simulations
and $R$ is the universal gas constant. As the eggs cook, we expect this to go from $0$ to $1$, correpsonding
to how "done" the eggs are.

TODO: add note on how the two phases meet at 15mm

# Results

## Simulating "DC" Egg Cooking

Comparing the DC solution of the solver and paper, we see good agreement. Below is a julia simulated plot

<figure markdown="1">
   ![Hardboiled egg simulation](hard_boiled_egg.png)
   <figcaption>Simulation of hardboiling an egg at 100°C. The left plot is the temperature of different cross-sections of the egg. The right plot showcases the gelation/degree of cooking of the egg.</figcaption>
</figure>

<figure markdown="1">
   ![Softboiled egg simulation](soft_boiled_egg.png)
   <figcaption>Simulation of hardboiling an egg at 100°C. Identical to hardboiling an egg, except for a shorter total cooking time.</figcaption>
</figure>

<figure markdown="1">
   ![Sous-vide egg simulation](sous_vide_egg.png)
   <figcaption>Simulation of sous-vided egg at 65°C.</figcaption>
</figure>

## Pulsing the Egg

Reproducing the results from the Di Lorenzo paper:

<figure markdown="1">
   ![Pulsed egg](pulsing_egg.png)
   <figcaption></figcaption>
</figure>

This however, takes a lot of work swapping between two dishes for 32 minutes. In search of a method to speed this up, I resorted to running a simulation where the bath temperature is stepped between multiple fixed values, this in principle should help guage the discrepancy between yolk and white temperatures. By cooling down from 100°C to 50°C (instead of 20°C), we can
make the 2 egg phases match temperature before raising it to 100°C again.
To then further cook the yolk, we can use the swinging temperatures to
modulate the rate of cooking. The result below is showcased for a cook time of 10 minutes (and cool down of 2 minutes where it continues to cook), the temperature takes the following values $T_i \in [100\rm{°C}, 50\rm{°C}, 100\rm{°C}, 30\rm{°C}, 100\rm{°C}]$,
swapping between $i$ and $i+1$ every 2 minutes.

<figure markdown="1">
   ![Pulsed egg](faster_pulsing_egg.png)
   <figcaption></figcaption>
</figure>

This seems to result in the same done-ness in a matter that is thrice as fast.

## The Cursed Egg

With all these simulations, we still haven't verified Rihn's desire for a 
cursed egg. While I found multiple regimes of pulsing the egg that give us the desired outcome, I resorted to using a slow
sinusoidal varying drive temperature as its easy to implement -- an analogue to changing the dial on the stovetop 
as a function of time. Here is the solution I found.

<figure markdown="1">
   ![Cursed egg](cursed_sin_egg.png)
   <figcaption></figcaption>
</figure>

Notice how this egg has a fully cooked yolk while the whites are left pretty raw.

# Acknolwedgements

- **Rihn**
- **Sophia Diggs-Galligan**
- **Anders Olsen**

# Referneces

1. main paper
2. params paper
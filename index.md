---
title: Home
layout: default

color: default
---

<div id="header">
  <div id="header-indicator"></div>
  <div class="emoji-block" id="hello-emoji">
    <h1>👋</h1>
  </div>
  <div class="emoji-block mobile-only">
    <!-- this spacer is for phones, helps keep the correct spacing on top of the title after emoji-block jumps into menu icon -->
    <h1 style="opacity:0">o</h1>
  </div>
  <div>
    <h1 style="color: var(--c-font-muted)">
      <b style="color: var(--c-font)"><span style="opacity: 0">"</span>Hello! I'm</b> Tareq<br/> <span class="pop bold quote-it">Torque</span> El Dandachi</h1>
  </div>
</div>

Hey there! My name is Torque (<span class="fake_anchor" onclick="playAudio()"><span style="font-size: 15px; transform: translateY(-3px);display: inline-block;">🔉</span>/tɔɹk/</span>)
and I am a researcher at Microsoft working on developing a <span class="emoji-word topological">topological</span> quantum computer. 
{: .intro}

<div class="landscape">
  <img src="resources/portraits/portrait-main.jpg" alt="Image of Torque Dandachi" id="portrait" onclick="manualChangeImage()">
</div>

In my free time, you can catch me working on personal projects spanning: digital system architecture, <span class="emoji-word cv-ai">computer vision and AI</span>,
differentiable and verifiable programming, and superconducting devices. 
I enjoy reducing problems into math, proving designs and algorithms to be 
<span class="emoji-word optimal-stars">optimal</span> and reverse engineering hardware and software.
{: .intro}

I also love <span class="emoji-word frog">frogs</span>.
{: .intro}

<br/>

<!-- Outside of my research, you can find me designing my own microcontroller, going on hikes or fangirling about 
<span class="emoji-word julia">julia</span>.
{: .intro} -->

<!-- I did my Master and Undergrad at MIT where I got to do
cutting-edge <span class="emoji-word research">research</span> on building
<span class="emoji-word diamond">diamond</span>-based
quantum computers, develop high-performance simulators for superconducting devices and design
<span class="emoji-word glasses">glasses</span>
that filter out epileptic triggers with a team of product designers.
{: .intro} -->

### Check out my
{: .check_out_my}

<div id="check-out-my-container">
  <div id="resume"><a href="https://itstorque.github.io/resume-2022/main.pdf">
  {% include resume_icon.html %}
  <p>Resume</p>
  </a></div>
  <div id="github"><a href="https://github.com/itstorque">
  {% include github_icon.html %}
  <p>GitHub</p>
  </a></div>
  <div id="linkedin"><a href="https://www.linkedin.com/in/torqued/">
  {% include linkedin_icon.html %}
  <p>LinkedIn</p>
  </a></div>
</div>

{: #education.title_with_emoji}
## *📚* Education

I did my undergraduate studies at MIT in Electrical Engineering, Computer Science, Mechanical Engineering and 
Quantum Information and Computation.

I then followed up with an Electrical Engineering and Computer Science Masters focusing on Complexity Theory and Device Physics.

Over my time at MIT, I took a wide range of classes that cover language models and computer vision, quantum devices and computing,
complexity theory, FPGA and CPU design, semiconductor physics, image processing, control theory and product design.

{: #teaching.title_with_emoji}
## *🍎* Teaching Experience

I taught several courses during my time at MIT, including:

#### 2.00b - <span class="emoji-word toy-design">Toy Design</span>

I was a mentor MIT's Mechanical Engineering departments Toy Design class. In the class
students have to design and build toys using shop tools, circuits and microcontrollers.
{: .sectionHide.sectionTeaching}

#### 6.004 - <span class="emoji-word computation-structures">Computation Structures</span>

I was a lab assistant for "Computation Structures." The class covers assembly and the RISC-V processor architecture, the labs include HDL and assembly code where students get to build their own
RISC-V processor and run algorithms on it.
As an LA, I worked on testing labs and the backbones of the processor. I also helped teach students concepts
such as processor cycles and timing, combinatoric and sequential logic, memory hierarchy, processor pipelining and processor design tradeoffs.
{: .sectionHide.sectionTeaching}

#### 6.002 - <span class="emoji-word circuits-and-electronics">Circuits and Electronics</span>

I was a lab assistant for "Circuits and Electronics" where I got the chance to help students understand circuit analysis, op-amp applications, and transistors. As a lab assistant, testing out labs, debugging circuits, helping students understand concepts taught in class and giving them check-offs as they worked in lab were part of my duties.
{: .sectionHide.sectionTeaching}

#### MIT ESP class - <span class="emoji-word splash-class">Making Code Hard(ly Work)</span>

I also got the chance to teach a programming class to high schoolers with my friend Savoldy
in MIT's Educational Studies Program in a class we called (excuse the pun) "[Making Code Hard(ly Work)](https://github.com/itstorque/MIT-Splash-2019-Making-Code-Hardly-Work)."
In the class we teach good programming practices by showing them bad meme-y code, interesting debug problems that arise from poorly structured code,
and exercises where they get to write their own bad code.
{: .sectionHide.sectionTeaching}

{% include sectionToggle.html sectionName="sectionTeaching" %}

{: #research.title_with_emoji}
## *🔬* Research

I was involved in several research projects at Microsoft and MIT spanning AI, CS and Quantum Computing, including:

#### Language Models for Code, Predictive Simulations and Device Design


{: .sectionHide.sectionResearch}

#### Computer Vision Models for Quantum Device Characterization

Developing
{: .sectionHide.sectionResearch}

#### NN-based Interpolation using Frame Interpolation

{: .sectionHide.sectionResearch}

#### GPU Kernel Development for *QuantumClifford.jl*

I developed custom CUDA kernels to speed up quantum stabilizer formalism simulations by a factor of ~100 on GPUs
for [the Quantum Photonics Group's](https://www.rle.mit.edu/qp/) quantum simulation package [*QuantumClifford.jl*](https://github.com/Krastanov/QuantumClifford.jl).
{: .sectionHide.sectionResearch}

#### ML-based Control of Spin Quantum Memories

I developed an ML-based methodology for optimal control of spin-based qubits. This involved developing a fast physics-solver in tensorflow and a gradient optimization for continuous pulses. 
We published a paper showcasing the method working experimentally that enables us to scale the control 3 orders of magnitude larger than the previous state-of-the-art.
{: .sectionHide.sectionResearch}

#### Electro-Thermal Modeling of Superconducting Materials

At QNN, I developed mathematical methods and implemented an electro-thermal model
in Python to efficiently simulate superconducting wires and superconducting
nanowire single photon detector (SNSPDs). This is typically a hard problem since
these devices are highly non-linear and solving both the thermal and electrical
parts of a model is very complex - let alone making it fast.
{: .sectionHide.sectionResearch}

{% include sectionToggle.html sectionName="sectionResearch" %}

<!-- ### Quantum Julia -->

### Select Publications

{% assign publications = site.publications | sort: 'date' | reverse %}

{% for pub in publications %}

{{ pub }}

{% endfor %}

{: #projects.title_with_emoji}
## *🛠* Projects

### Highlighted Projects

<div class="individual-expands">

{% assign projects = site.projects | sort: 'priority' %}

{% for project in projects %}

{% if project.hide == false %}

{{ project | markdownify }}

{% endif %}

{% endfor %}

<!-- #### RISC V processor

#### Custom Dev Board -->


<!--

#### qasm circuit preview

#### qasm syntax highlighter

#### jekyll themes

#### iOS Security research

#### rrg website

#### QuickTime VNC

#### LIDAR PID sim

#### quackman

#### qupong

#### MASLAB? -->

</div>
<br/>

### A collection of other random projects

- [performer](https://github.com/itstorque/performer): Music, Instrument and MIDI synthesis tool in python. Supposed to be a python replacement for Max/MSP and puredata.
- [ltspice-tikz](https://github.com/itstorque/ltspice-tikz): A one-night project to convert LTspice circuit and symbol files into LaTeX pgp/tikz code. Hopefully people have no excuses to publish ugly looking circuits now.
- [spice-daemon](https://github.com/itstorque/spice-daemon): A toolkit that spawns alongside LTspice and adds functionality on top of LTspice. It can adds true noise generation, solve diff. eq.'s and adds a new level of parametrization not available in LTspice through python. Designed to suit the needs of people in my lab.
- [RCSJ-Washboard-Potential](https://github.com/itstorque/RCSJ-Washboard-Potential): A MATLAB visualization of washboard potentials you get by solving the RCSJ differential equation.
- [cookie-hijacker-chrome](https://github.com/itstorque/cookie-hijacker-chrome): A weekend project with a friend to develop a malicious chrome extension that steals a users cookies and passwords.
- [jekyll-shell-theme](https://github.com/itstorque/jekyll-shell-theme): A weekend project that makes jekyll webpages look like a shell. 
- [dumb-anyconnect](https://github.com/itstorque/dumb-anyconnect): A tweak that hooks into the Cisco AnyConnect app and adds a connection to the iOS keychain. A one-night project born out of the frustration of hacing to type my password everytime I want to use a VPN.
- [assistivetech.mit.edu](https://github.com/itstorque/assistivetech.mit.edu): A PHP website written from scratch for MIT's assistive technology hackathon with a hacker management backend.
- [QuickTimeVNC](https://github.com/itstorque/QuickTimeVNC): A python script that allows VNC like control of a jailbroken iPhone over QuickTime.
- [BetterCCBattery](https://github.com/itstorque/BetterCCBattery) and [OrientationControl](https://github.com/itstorque/OrientationControl): iOS tweaks that modify the user experience with the control center and orientation lock.
- [2086-WallFollower](https://github.com/itstorque/2086-WallFollower): A PID controlled robot simulator with visualization written in MATLAB.
- [quhackman](https://github.com/itstorque/quhackman): A quantum twist on pacman written in python and uses the IBM qiskit backend.
- [Turing-Machine-Simulator](https://github.com/itstorque/Turing-Machine-Simulator): A one-night project to simulate a turing machine tape in python.
- [rrg.mit.edu](https://github.com/itstorque/mit-rrg): I was hired to make a website for MIT ESI's Rapid Response Group.

{% include hello_ai.html %}
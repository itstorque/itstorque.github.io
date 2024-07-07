---
layout: project
priority: 5
hide: false
---
#### Glasses at a Picnic - _Digital Music Instrument_

Over Spring 2020, I took a digital instruments class where we got to design different musical
instruments out of electronic components and programming them in Arduino C++, Python, PureData
& Automatonism. For my final project, I built a Computer Vision based algorithm that performed
real-time analysis on a video feed to determine the placement of different wine glasses that
tagged with fiducial markers. The music generation part of the code has information on the
position, roll, pitch and yaw of the glasses at all times. The code also had a live audio stream
being frequency analyzed to detect the sounds of wine glasses clinking or resonating on their own.
This is what the setup looked like with a mic on the bottom side of the table:

<img src="" data-echo="/resources/21M_370_diagram.jpg" class="innerphoto" loading="lazy"/>

This all fed into a sound generating patch with different submodules that produced different
unique sounds for every glass. The position of the glass would change the position of the audio
in 3D space and change the "mood" of the glass. Resonances and clinking sounds would add effects
or help transition "scenes." Here is a [link to a write-up for the instrument](resources/21M_370_final_paper.pdf).

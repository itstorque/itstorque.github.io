---
layout: project
priority: 1
hide: false
---
#### FPGA Depth Estimation using a Camera Array

During the month of January 2022, I worked on developing a modular camera setup powered by an FPGA
that can support variable offsets on the x and z positions of the camera. Using two offset cameras,
the code is able to use color segmentation to determine an object of interest and estimate the
distance away from it using the center offset. It powers a VGA display that showcases the two images,
debug information and crosshairs that show the center of the object of interest. It was coded using
Verik, precompiled into SystemVerilog and then synthesized using vivado before being uploaded onto a
Xilinx A7. Here is a [link to the GitHub code](https://github.com/tareqdandachi/FPGA-Depth-Camera).

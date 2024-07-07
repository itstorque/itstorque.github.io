---
layout: project
priority: 5
hide: false
---
#### Computer Vision and LIDAR Based Obstacle Avoidance
In the spring of 2020, for _Robotics: Systems and Science_, we worked as a team to build a self-
driving car to perform in two types of races. **(1)** A regular race with who reaches the finish line
first where we know the race track configuration before hand and **(2)** an obstacle avoidance race
where we don't have a pre-determined map, and obstacles are placed randomly on the track. While the goal
of (1) is to reach the finish line first, in (2), it is a timing and number of obstacles hit race. Here is
the hardware that was on our car and what we simulated when we moved online.

<img src="" data-echo="/resources/rss_hardware.jpg" class="innerphoto"/>

This is a gif
(<a onclick="playAudioGif()"><span style="font-size: 15px; transform: translateY(-3px);display: inline-block;">🔉</span>/dʒɪf/</a>)
of the first iteration of our LIDAR-based code trying to path find!

<img src="" data-echo="/resources/rss_slow_drive.gif" class="innerphoto"/>

**(1)** For the regular race, I worked with my team to program SLAM with LIDAR data for localization and then implemented path finding to find the optimal path. We then had a micro-strategy that controlled steering
using PID controllers to control steering and the amount of acceleration the car is applying at all times.

**(2)** I was the one who primarily worked on the obstacle avoidance race. I chose to design a Computer Vision
based algorithm over just using LIDAR (we were the only team to use CV!). The car used image segmentation
and classification to build the navigation space and map roads vs. obstacles. It then would path find around
them locally using the segmented image stream and use LIDAR data to help it when objects are too close or
when distance information would be useful. Section 4 of the paper below details my work on the obstacle
avoidance race!

Here is our [final paper for the class](resources/rss_final_paper.pdf)

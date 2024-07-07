---
layout: project
priority: 2
hide: false
---
#### Eclipse - _glasses that modulate epileptic triggers_

In the Fall of 2021, with a team of product designers of different backgrounds, we went through the
process of generating ideas, mockups, testing, user interviewing and finally fabrication and coming
up with a plan to scale up. After mocking up different projects, we settled on developing a pair of
glasses intended for people with photosensitivity and photosensitive epilepsy. The glasses have
electrochromic lenses that darken automatically when a voltage is applied. Here's a photo of me
presenting at our product launch :)

<img src="" data-echo="/resources/2009prodlaunchphoto.JPG" class="innerphoto" loading="lazy"/>

We designed our custom PCB that houses an ATSAMD21G18A processor and programmed it to scan using RGB
photodiodes the incoming light and predicting when an epileptic trigger occur.
It then darkens and undarkens the lenses at a frequency that cancels out the trigger, allowing the user
to still see and protecting them from the flashing light. I personally worked on
the sensing and modulation code, prototyping on a Feather M0 dev board, designing user interaction, designing and performing EEG trials, coding in Atmel's Microchip Studio and choosing the PCB & circuit components.

<img src="" data-echo="/resources/2009glasses.svg" class="innerphoto" loading="lazy"/>

I was also responsible for documenting our entire process through multiple mediums including [our
instagram](https://www.instagram.com/2.009blue/).
<div style="text-align: center; margin-top: -5px 0">
{% include 2009insta.html %}

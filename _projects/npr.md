---
layout: project
priority: 5
hide: false
---
#### Non-Photorealistic Renderer - _Convert images to paintings_

During Spring 2020, I worked on a C++ project that processes images and converts them
into detailed multi-layered paintings with the ability to interpolate and incorporate
design styles from a reference image. Here are some example renderings:

<div>
<table id="nprtable">
<tbody>
<tr hidden>
<td>
<img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Input/unsplash_photos/unsplash_5.png"  alt="1" width="100%" loading="lazy"></td>

<td><img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Output/unsplash_5_gamma.png" alt="2" width="100%" loading="lazy"></td>
</tr>
<tr hidden>
<td> <img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Input/unsplash_photos/unsplash_6.png"  alt="1" width="100%" loading="lazy"></td>

<td><img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Output/unsplash_6_gamma.png" alt="2" width="100%" loading="lazy"></td>
</tr>
<tr hidden>
<td> <img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Input/unsplash_photos/unsplash_7.png"  alt="1" width="100%" loading="lazy"></td>

<td><img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Output/unsplash_7_gamma.png" alt="2" width="100%" loading="lazy"></td>
</tr>
<tr hidden>
<td> <img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Input/unsplash_photos/unsplash_3.png"  alt="1" width="100%" loading="lazy"></td>

<td><img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Output/unsplash_3_gamma.png" alt="2" width="100%" loading="lazy"></td>
</tr>
<tr hidden>
<td> <img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Input/unsplash_photos/unsplash_1.png"  alt="1" width="100%" loading="lazy"></td>

<td><img src="https://raw.githubusercontent.com/itstorque/Non-Photorealistic-Renderer/main/Output/unsplash_1_gamma.png" alt="2" width="100%" loading="lazy"></td>
</tr>
</tbody>
</table>
</div>

The code would study the structure of an image using tools built from scratch, it would
extract information such as the structure tensor and direction field (see all the details
and more examples in this [write-up](
  https://drive.google.com/file/d/1x5Y84A4EAHg7Zd1aBR3Q-ojyGOiilACJ/view
)).
This helps capture details in an image and make the brush strokes look realistic and
follow the seams and curves of an image.

The code also uses k-clustering to bin colors and produces gamma maps to change the feeling
behind a photo, making them more dramatic and scenic. The code can also take two inputs
and draw the first photo while using the style of another image. For example, feeding it a
night photo of a desert and a day photo of some other setting, the color mapping can interpolate
colors and produce a day photo of the desert. Here is a scene change example:

<img src="resources/npr_reference.jpg" class="innerphoto"/>

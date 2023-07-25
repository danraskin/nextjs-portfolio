---
title: 'Science Fair Synth'
index: '2'
image: '<Image src="/images/demopic2.png" height="150"/>'
description: 'Users control a simple browser interface to convert RGB color data into soothing and beautiful electronic music.'
date: 'December, 2022'
---

# Interactive "Light-to-Sound" Web Audio Synth
### With <a class='link' href='https://github.com/haley-r'>Haley Ryan</a>
### *"Science Fair Synth"*

First presentated Dec 18, 2022 @ Cyanotopia, Minneapolis, MN

- Check out the demo <a class='link' href='https://sci-fair-scum.herokuapp.com'>here</a>
- <a class='link' href='https://github.com/danraskin/sci-fair-scum'>Project Repo</a>

Users navigate a simple browser interface to convert RGB color data into electronic music. A light sensor (<a class='link' href='https://www.adafruit.com/product/1356'>Adafruit flora Color Sensor</a>) attached to a Raspberry Pi sends RGB color data to the cloud. Node.js server utilizes Server-Sent Events to forward RGB color data to clients. Mobile users control the browser synthesizer by selecting constantly changing color data, which is converted into sound using an experimental web audio library <a class='link' href='https://github.com/billorcutt/i_dropped_my_phone_the_screen_cracked'>i dropped my phone the screen cracked</a> by developer Bill Orcutt.

- Synth allows users to control three simultaneous signal chains, arranged as columns of three squares. 
- Top square in column generate sinewaves (osc and subosc) based on 'R' value of selected 'RBG' color.
- Middle squares modulate sine frequencies via an Low-Frequency Oscillator (LFO). LFO frequency and gain are set by ratios of R, G, and B values.
- Bottom squares are Low-Pass Filters (LPF); they are currently deactivated--I haven't figured out yet how to incorporate these into the signal chain!

This hosted demonstration runs a node.js script which randomly generates RBG values every other second, replicating the function of the Raspberry Pi controller.

<hr />

## How to use

<Image src="/images/demopic.png" alt="mobile home screen" width="200"/>

Top of interface displays current color. In hosted demo, color changes every other second. In a live interactive context, display changes when a user 'samples' a real-world color using the Adafruit color sensor.

No squares are selected, and no sound will play.

<Image src="/images/demopic2.png" alt="mobile home screen" width="200"/>

Two signal paths have been triggered. The middle oscillators are being modified by an LFO.

*If an LFO (middle square) is deactivated while app is running, either by clicking 'reset' on square (top right corner) or 'MUTE' at bottom, it will not restart. Refresh browser to continue modifying LFO.*

## APP IN ACTION!!! ###

<hr />

Explanatory Instagram posts by Haley Ryan

<Image src="/images/IMG_0341.jpg" alt="mobile home screen" width="400"/>

<Image src="/images/IMG_0343.jpg" alt="mobile home screen" width="400"/>

<Image src="/images/IMG_0361 (1).png" alt="mobile home screen" width="400"/>

<Image src="/images/IMG_0362 (1).PNG" alt="mobile home screen" width="400"/>

<Image src="/images/IMG_0363 (1).PNG" alt="mobile home screen" width="400"/>

<Image src="/images/IMG_0364.PNG" alt="mobile home screen" width="400"/>

<Image src="/images/IMG_0366.PNG" alt="mobile home screen" width="400"/>

<Image src="/images/IMG_0367.PNG" alt="mobile home screen" width="400"/>


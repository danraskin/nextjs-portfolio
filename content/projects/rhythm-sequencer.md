---
title: 'React Drum Machine'
index: 3
image: '<Image src="/images/rhythm-sequencer.png" height="150" />'
description: 'A full-stack, sample-based step sequencer built using React and Tone.js.'
---

# React/Tone.js Drum Machine

- [Project Repo](https://github.com/danraskin/rhythm-sequencer-solo-project/tree/main)

A full-stack, sample-based step sequencer built using React and Tone.js. I built this in a 2-week sprint. The sequencer integrates Tone.js web audio libarary into a react-redux-saga/node-postgreSQL. 

- Uses Tone.js web audio library to trigger samples.
- Registered users can save, access and edit stored beat sequences.
- Users can select from 4 sound libraries, two of which are custom percussion libararies recorded by me. They sound particularly nasty!
- Users can select sequence length.
- Users can set a "double-trigger" setting on each step for more complex patterns.

<Image src="/images/rhythm-sequencer.png" width=400 />

## Using the Sequencer

Check it out [here](https://rhythm-sequencer-solo-project.herokuapp.com)!

Any user can access the full functionality of the sequencer. To save a pattern, they must login or register an account. Once logged in, users can save, access, edit or delete patterns. Database stores sequence length, step status, pattern name, and most recently selected drumKit. BPM is automatically reset to 120 when navigating to either a new or saved pattern from any page.

  * SHIFT + CLICK to set step status to 'double trigger'
  * things might get freaky when users navigate to a new or saved pattern without *stopping* the clock/sequencer. if this happens, stop -> start or refresh.
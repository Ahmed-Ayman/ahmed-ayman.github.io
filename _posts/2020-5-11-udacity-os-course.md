---
layout: article

title: Intro to Operating Systems by Georgia Tech
tags: cloud os
mode: immersive
cover: assets/images/udacityos.jpg
header:
  theme: dark
  background: 'linear-gradient(135deg, rgb(34, 139, 87), rgb(139, 34, 139)'

show_excerpt: false
article_header:
  type: overlay
  theme: dark
  background_color: '#203028'
  background_image:
    gradient: 'linear-gradient(135deg, rgba(34, 139, 87 , .4), rgba(139, 34, 139, .4))'
    src: assets/images/udacityos.jpg
---

This is a summary of the [udacity's OS course](https://classroom.udacity.com/courses/ud923), I will
be trying to give you a good overview of what this course is talking about.

The instructor [Ada Gavrilovska](https://www.cc.gatech.edu/~ada/) uses a lot of visual metaphors. 
so, you will see me adding a lot of pics to illustrate the concepts.


## 1.1 prerequisites

Before starting this course, you should be familiar with C programming and Linux CMD since you will be doing projects 
related to threading with C.

## 2.1 Books 
- Modern Operating systems
- Operating System Concepts (The dinasurs book)
- Operating systems: three easy pieces.


## 3.1 What is an OS?

It's a piece of software that abstracts (simplifies) and arbitrates (control) the hardware of the computer system.

The Operatng system is responsible for the following (think of it as a store manager):
- **Direct operational resources:** control use of the tools. i.e, cpu, memory peripheral devices.
- **Enforce working policies:** fair resources access, limit the resource usage.
- **Mitigate difficulty of complext tasks:** abstract hardware details.

It setts betwen the Hardware that consists of a CPU, Memory, Disk, GPU, USB, Ethernet/Wifi card
and the software/apps.

### The deifnition:
It's a layer of system software that 
- Hides hardware complexity (system calls). 
- Does Resource management. 
- Proivde isolation and protection (eg, the memory of each app shouldn't be overlapping).
- directly has priviliged access to the underlying hardware.
- manages hardware on behalf of one or more applications according to some predefined policies.

it has components like scheduler (distribuing the access to the processing units), filesystem (simpler abstraction of file as a block of disk storage), device driver (making decisions on behalf of the driver).

## 2.2 OS elements
- Abstractions
  process, thread, file, socket, memory page.
- Mechanisms
  Create, schedule, write, open, allocate.
- Policies
  limit stuff and manage memeory for example using LRU (Least recently used ) Algorithm, earliest deadline first.

Example.

Memory page (Abstraction) is being allocated and maped to process (mechanism) which will be swapped to the Disk after 
bein a less important process using the LRU algorightm (policy).


## 2.3 OS Design principles
- seperation of mechanisms and policies
  - implement flexible mechanisms to support many policies.
  - LRU, LFU, random policies.
- Optimize for common case
  - Where will the os be used?
  - what will the user want to execute on that machine?
  - what are the workload requirments.
  
 ### Protection boundary
 there has to be levels of protection
 - user-level (applications) 
 - kernel-level privileged mode, hardware access, priviliged direct.
 
 Interactions betwheen user and kernel there is the 
 - trap instructions (mostly related to the direct access to hardware?, privilged bit for kernel level only then grant or no for the user).
 - the interactions should be by System calls Interface like open, send (socket), malloc (memory)
 - signals to pass notifications to the applications.
 
 ## 2.4 System calls
 
 

[![Star This Project](https://img.shields.io/github/stars/ahmed-ayman/jekyll-TeXt-theme.svg?label=Stars&style=social)](https://github.com/ahmed-ayman/ahmed-ayman.github.io/)

<!--  some custom styling. -->
<style>
.hero.hero--dark.overlay{
  background-size: contain;
}
  </style>

  <div id="gitalk-container"></div>

---
title: "Calm Store"
cover: "../../assets/hero-calm.webp"
coverAlt: "Image of storefront hero"
description: "A Shopify theme in Vue"
tags: ["shopify","vue", "tailwind"]
date: 2022-06-01
color: "#ccc"
order: 2
draft: false
---

## The brief

Working at Roswell Studios during the pandemic the company's focus was to transition their Shopify base theme to a Vue architecture to promote modularity and enhance performance.

As part of the development team I picked up tickets to work on features.  
These features were design implementations or functionality customizations that extended the  Roswell base Shopify theme to meet the client's brand needs.  

The ubiquitous Calm app had a store at that time and hired Roswell to build it.  
The ticket that I picked was to create an *Image or Video* component. 
Some of it's attributes were an overlay of content (header, paragraph, button), set auto playback, mute, loop, set poster image and to swap alternative mobile assets.


## The solution
It was my first taste of Vue and modern front end JavaScript.  
I admit it was difficult to pickup.  
Previously my JavaScript experience was mostly jQuery which had a lot more in common with CSS than a backend language in my opinion.

In the last few decades front end development has bloomed from the simplicity of HTML and CSS into an insanely complex JavScript ecosystem. 
I used to think like many others that the cost is too high  - more time spent on tooling than building.  
But as I get more experience it's hard not to be taken with the magic of these frameworks.

![screenshot of Vue code](../../assets/calm-inline.png "gratuitous code screenshot :)")

Using Vue 3 with the options API some concepts I learned were 
1. ##### Single file component structure 
    The template, script, and styles are clearly separated yet scoped within the same file.
2. ##### Two way interactions 
    @click directives trigger methods (playVideoForeground and playVideoForegroundMobile) updated the state dynamically.
3. ##### Props for customization
    `videoUrl`, `img`, and `overlayTitle` pass Shopify user customizer options to Vue.
4. ##### Lifecycle hooks
    The mounted lifecycle hook is used to set up an observer for the video elements.  




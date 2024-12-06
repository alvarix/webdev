---
title: "Calm Store"
cover: "../../assets/hero-calm.webp"
coverAlt: "Image of storefront hero"
description: "Portfolio WordPress Theme using Blocks"
tags: ["shopify","vue", "tailwind"]
date: 2022-06-01
color: "#ccc"
order: 2
draft: false
---

## A Shopify Theme in Vue

Working at Roswell Studios during the pandemic the company's focus was to transition their Shopify base theme to a Vue architecture to promote organization and modularity.

It was my first taste of Vue and modern front end JavaScript.  
It was difficult to pickup, coming from jQuery which made JS more like a behavioral extension of CSS. 

I've often pondered how Front End has bloomed from relative simplicity of HTML/CSS/jQuery to an insanely complex JavScript eco-system. I'm looking for my place in the **Middle of the Front End*, as examined by [Brad Frost](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) and [Chris Coyier](https://css-tricks.com/the-great-divide/) among others.  
With gratitude!  
The magic of this new paradigm has reignited my love of web development <3.

#### Vue takeaways 

1. ##### Single File Component structure 
    The template, script, and styles are clearly separated yet scoped within the same file.
1. ##### Dynamic Behavior
    The component manages different media types (videos and images) for both desktop and mobile devices. 
2. ##### Two way interactions 
    @click directives trigger methods (playVideoForeground and playVideoForegroundMobile) to update the state dynamically.
3. ##### Props for Customization
    `videoUrl`, `img`, and `overlayTitle` pass Shopify user customizer options to Vue.
4. ##### Lifecycle Hooks
    The mounted lifecycle hook is used to set up an observer for the video elements.  

### img-vid-overlay.vue
![screenshot of Vue code](../../assets/calm-inline.png "gratuitous code screenshot :)")

One of the components I created was an image/video player an optional overlay HTML.

#### Component features:
- editable title and subtitle  (Shopify Customizer)
- optional poster image for video (Shopify Customizer)
- color picker for text  (Shopify Customizer)
- optional mobile version of image/video  (Shopify Customizer)
- custom inline SVG play button


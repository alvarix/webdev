---
title: "PetPortraits.ink"
cover: "../../assets/pp2.png"
coverAlt: "Image of storefront hero"
description: "A Portfolio WordPress Theme using Blocks"
tags: ["wordpress","ajax","javascript","blocks"]
date: 2024-01-01
color: "#FEC97A"
order: 8
draft: false
---
[PetPortraits.ink](https://petportraits.ink)
---
## A Portfolio WordPress Theme using Blocks
Coding is just for fun - my real job is as a Pet Portrait artist.  
That's just a joke, but I do treat it as a real business.  
I coded and ran a Shopify store for a year but found the overhead too high so I decided to move to Etsy and a custom Portfolio website.

Like most FEDs I've resisted Gutenberg and fretted over the direction of WordPress.
I understand blocks can add powerful controls over atomic design but it's still difficult to work with. 
Classic is still a better choice for small and mid-sized clients.

But I don't want to fall behind so I decided to use this portfolio as a chance to dive in to Blocks (No Full Site Editing, thanks).  
This site had a pretty simple brief: a portfolio, links to my store and email and a Newsletter Sign Up form.  
This ACF based block was easy to setup - there are  2 inputs:
1. **Post Type**  
gather all the posts in this post type and output their thumbnail into a lightbox gallery.
2. **Top Images**  
I wanted to choose which posts would be at the front of the gallery.  
Instead of corrupting post dates I added a post chooser from within the block to move to the front.

I added a few more hand coded features:
1. Lightbox built from scratch
2. AJAX calls for full images to keep the Homepage light
3. Scrolling single page navigation
4. Animated header
5. Column count switcher 





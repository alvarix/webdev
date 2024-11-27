---
title: "PetPortraits.ink"
cover: "../../assets/pp.png"
coverAlt: "Image of storefront hero"
description: "A Portfolio WordPress Theme using Blocks"
tags: ["wordpress","ajax","javascript","blocks"]
date: 2024-01-01
color: "#FEC97A"
order: 8
draft: false
---

## A Portfolio WordPress Theme using Blocks
Coding is just for fun, my real job is as a Pet Portrait artist.  
After a period with Shopify I found the overhead too high so I decided to move to Etsy and a custom Portfolio.

Like most Front end people like myself I've resisted Gutenberg and fretted over the direction of WP.
I understand it can add powerful controls over atomic design it is still rather difficult to work with making Classic a much better choice for the mid-sized bread and butter clients.

Time waits for no man.
This site had a pretty simple brief: a portfolio, links to my store and email and a Newsletter Sign Up form.

The perfect opportunity to create a block. 
A native block didn’t seem worth it (who really *needs* a WYSIWYG?) so I opted for an ACF block. 
This was easy to setup - there are only 2 inputs.
### Post Type
this will gather all the posts in this post type and output their thumbnail into a lightbox gallery.
### Top Images
to add a modicum of flexibility I wanted to be able to choose which posts would start at the front of the gallery - so instead of corrupting post dates to affect the arrangement, I can choose which posts to highlight from within the block.

To stretch myself a bit further I added a few more hand coded features:
1. Custom Built Lightbox
2. AJAX calls to full images so the Homepage could stay light
3. Scrolling Nav
4. Shrinking Header
5. Column Count Switcher - just dropdown to change the amount of columns and thus the layout





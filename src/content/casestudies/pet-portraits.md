---
title: "Pet Portraits.ink"
cover: "../../assets/pp2.png"
coverAlt: "Image of storefront hero"
description: "A portfolio WordPress block theme"
tags: ["wordpress","ajax","javascript","blocks"]
date: 2024-01-01
color: "#FEC97A"
order: 8
draft: false
---
#### [Pet Portraits.ink](https://petportraits.ink)

## The brief
On top of web development I draw pet portraits in pen and ink
and over the last few years it's grown from a hobby into a (very) small business.  
Originally I created and administered a Shopify storefront.  
That was a lot of fun but the overhead was too high.   
I decided to move my store to Etsy and add a portfolio website to restore what was missing from the fully customizable Shopify website.

## The solution
Like most devs I've resisted Gutenberg and fretted over the direction of WordPress.  
I understand blocks can add powerful controls over atomic design – but unneccessary complexity added to both development and administration.  
Classic editor remains a better choice for most small and mid-sized clients.  

I decided to use this portfolio as a chance to explore Blocks.  
After boning up on native blocks I decided to go with the ACF based blocks.  
It's hard to justify building the UI twice in two seperate languages as native blocks will have you do.  
And though powerful it still seems like overkill for the majority of use cases.  

With the ACF blocks I was able to design and code the simple component quickly, which gave me some more time to play with some other features.


![screenshot of Wordpress block interface](../../assets/pp-inline-1.webp "gratuitous code screenshot :)")

I coded the following without any dependencies:
1. Lightbox with data fetched via AJAX 
1. Scrolling single page app with tracking navigation
1. Animated header
1. Column layout switcher 





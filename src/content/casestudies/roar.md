---
title: "ROAR Foundation Website"
cover: ../../assets/roar-h.png
description: "Using Bricks Builder to wrangle data"
tags: [WordPress, Brick Builder]
color: '#fcb5a9'
order: 9
---

## Using Bricks Builder to wrangle data
I built this website for my longtime collaborator *Serendipity Creative* studio.  

I’m not a fan of WP builders - bloated, unperformant and often make more problems than they solve. But they now are often a requirement.  
After evaluating a handful of contenders I was pleasantly surprised that Bricks has use for a developer as well as the WYSYWIGers.

With Bricks I was able to extend a **category archive** page into a tabbed layout of sub categories with a fraction of the coding.
 
### Bricks Extras Pro Tabs component config
Setting the Tab Item query type to *terms*, and Parent field as Bricks dynamic {term_id}.  
For the subcategory query The Child field is set to {term_id} to output a list of sub terms to feed into the shortcode.







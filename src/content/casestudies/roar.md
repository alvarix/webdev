---
title: "ROAR Foundation Website"
cover: ../../assets/roar-1.webp
description: "A Bricks Builder based WordPress theme"
tags: [WordPress, Brick Builder]
color: '#fcb5a9'
order: 9
---
#### [ROAR Foundation](https://roarcenter.org)


## The brief
To build out a medium sized highly bespoke website using a WordPress builder for modification by non-technical administrators, but that also minimized performance and development hits.  

This site was built for my long time collaborator, *Serendipity Creative*.  


## The solution
I’m not a fan of WordPress builders.  
This client had previously been using Divi which I was none too pleased about.  
They also came to realize the debt Divi incurred and we decided to find something better.
We settled on Bricks Builder which was a beta plugin at the time.

### Clever queries in tabs
One example of how this builder helped development:
the Resources post type [**category archive**](https://roarcenter.org/topic-area/emergency-needs/) page was designed to display a tabbed layout of sub-categories.


![screenshot of Bricks Builder interface](../../assets/roar-inline-2.webp )

Normally in a situation like this a shortcode would be injected, replacing the builder for that part of the page.  
As I experimented with *Pro Tabs from Bricks Extras* I found I was able to set the tabs titles **parent** and contents **child** to the main query term_ID and render this semi-complex UI directly within the builder tools, losing zero Bricks functionality.

![screenshot of Bricks Builder interface](../../assets/roar-inline1.webp )








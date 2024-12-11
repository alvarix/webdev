---
title: "Educare Microsite"
cover: ../../assets/eln.webp
description: "Quiz Based Resource Library Sorting"
tags: ["WordPress","Accessibility","Gravity Forms","PHP", "JavaScript"]
date: 2024-08-13
color: "#fffbf3"
order: 9
draft: false
---

### [Educare Quiz Website](https://familyleadership.educareschools.org/)

Web app that I built for my longtime collaborator *Serendipity Creative* studio based on their design.  


### The Brief
Create a paginated quiz with categorized questions.  
On submission show a Results page with global and per category scores, blurbs and images.  
Link to the Results page a Recommended resources page.  
This page displays posts per category filtered by quiz scores (see image below).  
Scores can also be toggled to change the query per section.

Other requirements:
- bookmarkable results
- PDF download of results
- WYSIWIG content/style editor

![screenshot of Results interface](../../assets/eln-inline-1.webp)
---

### Approach


Gravity Forms has a Quiz add-on that could handle pagination but could not categorize questions.   
I started digging into how to bolt on categories.  
I found in Gravity Forms Quiz configuration that you can setup the results page as a simple query string to hand off to custom code.  
By labeling each questions key with the category as value I was able to provide the app with the necessary data.  
Eg: `?cat1=10&cat1=20&cat2=20...`

Having the results in a key/value pair allowed me to execute the following in PHP:
 1. Calculate overall and category scores 
 1. Combine the scores array with the post type categories array
 1. Retreive posts filtered by the category scores
 1. Dynamically create second query string to return the *Recommendations* 
 1. Rewrite the query string client-side for bookmarkability 





---
title: "Educare Microsite"
cover: ../../assets/edu.webp
description: "Quiz Based Resource Library Sorting"
tags: ["WordPress","Gravity Forms","PHP", "JavaScript"]
date: 2024-08-13
color: "#fffbf3"
order: 9
draft: false
---

## [familyleadership.educareschools.org](https://familyleadership.educareschools.org/)

I built this website with my longtime collaborator *Serendipity Creative* studio.  




### The Brief: 
Create a paginated quiz with categorized questions.
Display a Results page and a Recommended Resources page per category based on the quiz scores.

Other requirements:
- bookmarkable results
- PDF download of results
- WYSIWIG content/style editor

---

### Approach


Gravity Forms has a Quiz add-on that could handle pagination, but could not categorize questions.   
I started digging into how to bolt on categories.  
I found in Gravity Forms Quiz configuration you can setup the results page as a simple query string to hand off to custom code.  
By labeling each questions key with the category = value.  
Eg: `?cat1=10&cat1=20&cat2=20...`

This give us our scores per category  
[IMAGE]

Having the results in a key/value pair allowed me to execute the following in PHP:
 - calculate overall and category scores 
 - combine the scores array with the post type categories array
 - retreiving posts filtered by the category scores
 - dynamically creating secon d query string to return the *Recommendations* 
 - Using Javascript to rewrite client-side of the query string in the select forms  for bookmarkability 





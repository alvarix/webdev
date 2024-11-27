---
title: "Educare Microsite"
description: "Quiz Based Resource Library Sorting"
tags: ["WordPress","Gravity Forms","PHP", "JavaScript"]
date: 2024-08-13
color: "#fffbf3"
order: 9
draft: false
---

I built this website for my longtime collaborator *Serendipity Creative* studio.  
The brief was to display a series of scores and recommended posts based on the results of a paginated Quiz whose questions are split into categories. Other requirements included bookmarkable results, PDF download of results and a WYSIWIG content editor.
There is an overall score but the results are also divided into four areas that each get their own score and dictate the output of posts in four categories. 


After some research I found Gravity Forms has a Quiz add-on that could handle pagination but could not categorize questions.   
Since the add-on handled so many of the specs I started digging into how to bolt on categories.  
I found that in the results page options Gravity Forms allows you to create a query string of the results.
By labeling each questions key wihth the category = value.  
Eg: `?cat1=10&cat1=20&cat2=20...`

This give us our scores per category  
[IMAGE]

This output the gravity forms data in a way that met the requirement and everything else could be handled in PHP.
Fun tasks like:
 - calculating scores 
 - combining the scores array with the post type categories array
 - retreiving posts based on the data
 - dynamically creating another query string to query a second related *Recommendations* post type 
 - Javascript client side rewriting of the query string for bookmarkability




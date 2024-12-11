---
title: "ROAR Foundation Website"
cover: ../../assets/roar-1.webp
description: "Using Bricks Builder to wrangle data"
tags: [WordPress, Brick Builder]
color: '#fcb5a9'
order: 9
---
### [ROAR Foundation](https://roarcenter.org)


## Wrangling data with Bricks Builder 
I’m not a fan of WordPress builders.  
But for Serendipty Creative, for whom I built this site, it wass a requirement.  
Previously using (and cursing Divi) we wanted to find a better solution.  
After evaluating a handful I was glad to find that Bricks had UI tools that can speed up WordPress API work as well as the usual style and layout tools. 

### Clever Queries built into Tabs component
For example:  
I extended a [**category archive**](https://roarcenter.org/topic-area/emergency-needs/) page into a tabbed layout of sub categories.
![screenshot of Bricks Builder interface](../../assets/roar-inline1.webp "gratuitous code screenshot :)")

Here's how I did it:  
- In the Query Module of *Pro Tabs from Bricks Extras*, I set the **Tab Item** query type to *terms*
  - The parent field is set as dynamic `{term_id}`
- For the subcategory query **The Child** field is set to `{term_id}` to output a list of sub terms







---
title: "ROAR Foundation Website"
cover: ../../assets/roar-1.webp
description: "Using Bricks Builder to wrangle data"
tags: [WordPress, Brick Builder]
color: '#fcb5a9'
order: 9
---
## [ROAR Foundation](https://roarcenter.org)

## Using Bricks Builder to wrangle data
I built this website with my longtime collaborator *Serendipity Creative* studio.  

### Builders
Like most devs I’m not a fan of WordPress builders, but for SC design studio it wass a requirement.
Previously using and cursing Divi, we wanted to find a more modern solution.  
After evaluating a handful of contenders I was surprised that Bricks has UI tools that can speed up advacned WordPress API work as well as layout. 

### Clever Queries built into Tabs component
One example of where Bricks cut down development time:
I extended a **category archive** page into a tabbed layout of sub categories as so:
 
- In the Query Module of Pro Tabs from Bricks Extras, set the **Tab Item** query type to *terms*
  - Parent field as Bricks dynamic {term_id}
- For the subcategory query **The Child** field is set to {term_id} to output a list of sub terms







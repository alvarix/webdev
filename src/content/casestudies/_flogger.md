---
title: "Flogger"
description: "Vue based Logger App"
tags: ["Vue","Pair Programming","Dropbox SDK", "TypeScript", "webapp"]
date: 2024-06-01
color: "canary"
order: 3
draft: true
---


[WIP Website](https://flogger.vercel.app)   
[Github](https://github.com/alvarix/FLogger)

## The brief
Inspired by [NVAlt](https://brettterpstra.com/projects/nvalt/) (RIP),  
a friend and I started this app to have some fun deepening our knowledge of Vue.  
There are plentuy of note apps but most seem over or under engineered.  
I currently use *SimpleNote* from *Automattic*. 
It's, well, simple. 

### Progressive enhancement for text files
Core concepts:
1. **Data Portability** - Apps come and go, the data shouldn't need a rosetta stone - it should be plain text, or at most Markdown. And it should by cross device so your data is always with you.
2. **Date Based** - If it can save me putting a date at the top of each entry that's worth the entry fee.
3. **Fun with Data** - See [Roadmap](#roadmap)

## The solution

### Status

1. Integrate Dropbox for cross-device access and authentication
2. Manage plain text files (flogs):  
create new flogs or entries and edit, copy, or delete flogs or entries
3. The UI splits a Flog into 2 parts:
    1. *Entries*  
  Any text that comes after a date in a specified format, up till the next date or EOF
    2. *Frontmatter*  
  Any text in the file before a date (flog metadata)

## Roadmap
- flog blending or comparison (compare flogs for correlation)
- key:value tags
- omni search/create box
- encryption
- web publishing
- geotagger
- time tracker
- siri/alexa



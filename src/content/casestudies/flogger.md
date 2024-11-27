---
title: "Flogger"
description: "Log style note taking app"
tags: ["Vue","Pair Programming","Dropbox SDK", "TypeScript"]
date: 2024-06-01
color: "canary"
order: 3
draft: false
---

## Vue based note taking app

[WIP Website](https://flogger.vercel.app)   
[Github](https://github.com/alvarix/FLogger)

Inspired by ~~NVAlt~~ (RIP), a friend and myself decided to start this App for fun and to get into Vue a bit more and to scratch an itch.
Note taking apps, Todo apps, time keeping apps - there are tons but most seem over or under engineered. 
I currently use SimpleNote from Automattic. 
It's, well simple. 

This is the first generation of the off-board brain - music, photos and most of all, notes.  
This is how we *know* things. 
But as apps come and go we wanted to create a notebook based around a few principals:
1. **Data Portability** - Apps come and go, the data shouldn't need a rosetta stone - it should be plain text, or at most Markdown. And it should by cross device so your data is always with you.
2. **Date Based** - If it can save me putting a date at the top of each entry that's worth the entry fee.
3. **Fun** - What else can we do? See [Roadmap](#roadmap)


## Status

- Flogger manages text files (*Flogs*) via Dropbox SDK.
- Add and manage notes:  
Users can create new text entries or flogs, and edit, copy, or delete entries or flogs.
- In the UI splits a Flog into 2 parts:
  - *Entries*  
  Any text that comes after a date in a specified format, up till the next date or EOF.
  - *Frontmatter*  
  Any text in the file before a date. 

## Roadmap
- flog blending or comparison (compare two or more logs)
- encryption
- web publishing
- Key:Value tags
- geotagger
- time tracker
- siri/alexa



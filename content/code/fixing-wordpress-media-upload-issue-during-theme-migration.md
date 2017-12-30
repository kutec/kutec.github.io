---
title: "Fixing WordPress Media Upload Issue During Theme Migration"
date: 2016-08-05

featuredImage: ""
categories: ['WordPress']
tags: ['WP', 'Bug', 'Defect']
author: ""
noSummary: false
---

<!--more-->

Recently I revamped <a href="http://teckstack.com" target="_blank">my blog</a> with fresh look and that’s <a href="http://materializecss.com/" target="_blank">Material Design</a>. There are still some bugs I am fixing off but overall it looks awesome. You can <a href="mailto:ku@kutec.co.in?subject=TeckStack Design Feedback (Fixing Wordpress Media Upload Issue During Theme Migration)">email me</a> your feedback or just <a target="_blank" href="http://ctt.ec/YhJj7">tweet me</a> your thoughts.

## The Issue
As mentioned in the title, the issue was about the upload functionality in Wordpress while moving a theme from local environment to the production. In the local everything works great without any malfunctioning but on production I was getting upload media error.

* I could click on the “Add Media” button (above the visual editor section) but when clicking on “Select Files” or dropped files there, nothing was happening!
* It was Tiny MCE script error in Chrome console, but not sure from which plugin it was…

## What I Did
1. I first took backup of the entire site (including the database)
2. Then I renamed the current theme folder name to see whether it’s issue from my theme or not. WordPress enables default theme if it didn’t get currently activated theme in the theme folder. So I tried that and upload was working. So it might be theme issue but yet we cannot say firmly. Hold on…
3. Then I again renamed the theme folder to it’s previously given name and appied it again. Later on, I started disabling all the plugins which were adding functionality to the control/admin panel. But yet upload didn’t work.
4. Finally I decided to disable all the plugins at once and check. Surprisingly the upload functionality started working. So that’s confirmed now that this is no more theme related issue from my code.
5. After that I started activating plugin one-by-one which infect helped me to find a root cuase of the issue.

The issue was coming from <strong>Tiny MCE</strong> script of <a href="https://wordpress.org/plugins/jetpack/" target="_blank">Jetpack plugin</a>. I disabled it and upload functinality has fixed now :).

It took my 3 hours :(

### Raised a ticket on WordPress Forum
<a href="http://bit.ly/2cqHSLx" target="_blank">http://bit.ly/2cqHSLx</a>
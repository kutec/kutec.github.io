---
title: "AngularJS - ngIf Vs. ngShow"
date: 2017-05-16

featuredImage: ""
categories: ['JavaScript']
tags: ['AngularJS', 'JS']
author: ""
noSummary: false
---

At a first look, `ng-if` and `ng-show` seems logically very similar except one major difference.

## ngShow (or ng-show)
`ng-show` will be generating the whole element at a time of rendering a web page. However, it will be hidden the element using angular class in case of `false` condition.

In simple words, the element, where the `ng-show` has been declared over that will be available on a web page (including its child elements) and can be seen by removing angular specific class that hides them.

<!--more-->

## ngIf (or ng-if)
As mentioned above, `ng-if` works in similar fashion but with little difference. `ng-if` doesn't generate the element on which the condition `ng-if` has applied. That means, it will be removed the element completely from the DOM tree structure, if condition is **not matched**.

## Why using `ng-if` is better than `ng-show`?
If you have used `ng-show` in your code, where you have `<img src='path-to-image' />` defined as a child element and that is unfortunately having *wrong path*, you might get *404 error*, even though the logical condition is `false`. The only reason is that the browser would scan the whole page available as DOM and so the elements inside `ng-show` DIV/P.

On the other hand, `ng-if` will be removed the DOM from the tree structure and hence we could fix a bug of getting 404 error. 404 error is a status error, if resource is *NOT FOUND*.

Below, I have put a [JSFIDDLE example](https://jsfiddle.net/kutec/4b66bte5/) to get a better idea:

<script async src="//jsfiddle.net/kutec/4b66bte5/embed/result/"></script>

Have a great coding and put your comments below for any discussion/confusion.

Thanks :)
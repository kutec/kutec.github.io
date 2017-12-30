---
title: "Defining JavaScript Functions with Namespace"
date: 2016-11-17

featuredImage: ""
categories: ['JavaScript']
tags: ['Namespace', 'JS']
author: ""
noSummary: false
---

<!--more-->

I was working on a small jQuery plugin, where I wanted to define a common jQuery `function` to be used multiple times as per requirement. This may be a nested function declarion at some point.

### Example: Nested JavaScript Function
~~~ javascript
// function 1
function x(){
	alert('function x fired');
}

// function 2
function y(){
	alert('function y fired');
    
    x();
}

// calling
x();
y();
~~~
Above code run `x()` first and then `y()`. `function y()` has a call of another function `x()` therefore it will be firing up `alert('function y fired')` first and then `alert('function x fired')`.

Now let's come to the main part! Below is a way to define functions more better way - using NAMESPACE.

### Example: Nested JavaScript Function using Namespace methodology
~~~ javascript
(function($) {
    
    var namespace;
    
    namespace = {
        something : function() {
            alert('hello there!');
        },
        bodyInfo : function() {
            alert($('body').attr('id'));
        }
    };
    
    window.ns = namespace;
    
})(this.jQuery);

$(function() {
    ns.something();
    ns.bodyInfo();
});
~~~

[Snippet Credit](http://www.sitepoint.com/community/t/jquery-calling-function-from-other-script/8006/4)

#### Further Reading
1. [Namespacing in JavaScript](https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/)
2. [Strict Mode Is Coming To Town](http://yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/)
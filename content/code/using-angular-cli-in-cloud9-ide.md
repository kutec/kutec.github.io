---
title: "Using @AngularCLI with Cloud9 IDE"
date: 2017-07-05

featuredImage: "/images/angular-cli.jpg"
categories: ['JavaScript']
tags: ['Angular', 'Node', 'NVM', 'Cloud9', 'IDE']
author: ""
noSummary: false
---

<!--more-->

_(The word "Angular" refers to Angular 2 or greater version.)_

I had to migrate a project from [AngularJS](https://angularjs.org/ "AngularJS") (1.x) to [Angular](http://angular.io/ "Angular 4") (4.x). For the purpose, I had to create a quick demo that can be accessible to client so that they can review and provide feedback instantly.

I am frequent user of [Cloud 9 IDE](https://c9.io "Cloud 9 IDE").


## What is Cloud9/C9 IDE
**C9** is a cloud based code editor and everything you need for development purpose. It also allows code to be synced from Github and Bitbucket. I love WordPress and found C9 very handy for demonstrating purpose. You can save numbers of FREE/PUBLIC projects online and can run from anywhere and though any device. I am personally very big fan of C9.


## Using Cloud9 for @Angular/CLI

### Node Version Issue

C9 has Nodejs 4.x by default installed and that's using [NVM](https://github.com/creationix/nvm "NVM"). I am not much familiar with NVM as I download Nodejs from [official Nodejs site](https://nodejs.org/en/ "Nodejs") to install it in my PC but NVM provides easy way to switch between different Nodejs versions. 

`@Angular/cli` required `Node 6.9.0` or higher. So it gave error while tried to run `ng serve`. 

I looked around into the IDE configuration and preferences but couldn't find any solution. Then I found very simple way to upgrade NVM to the latest version. I eagerly ran below command and that made my life easy :)

```
nvm install 6.11.0
```
Now `ng` command can be accessed inside Cloud9 IDE.

**Note**: You need to run above command each time you open a project from [C9 Dashboard](https://c9.io/dashboard.html "Cloud9 Dashboard").

### Cloud 9 IDE V/s Localhost
Could 9 is a web based IDE, which has it's own IP address. That obviosuly doesn't understand `localhost:8080`.

I tried out many ways but the simplest one is to update `package.json`. Replace,

```
"scripts": {
    "start": "ng serve",
  },
```

with...

```
"scripts": {
    "start": "ng serve --host 0.0.0.0 --port 8080  --public $C9_HOSTNAME",
  },
```
You might have noticed `--public $C9_HOSTNAME`. This is to avoid `invalid host error`.

With all above configuration, your project is good to run.

To run your app and preview in browser do as directed in below screenshot.
![Angular CLI](/images/c9-ide-preview-app.png)

Happy Coding :)
KaTeX for Meteor (cdn version) [![Build Status](https://travis-ci.org/zhouzhuojie/katex-cdn.svg?branch=master)](https://travis-ci.org/zhouzhuojie/katex-cdn)
================

`meteor add rexzh0u:katex-cdn`

## Usage

```
// on the client
katex.render("c = \\pm\\sqrt{a^2 + b^2}", element);

// on the client or server
var html = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}");
```

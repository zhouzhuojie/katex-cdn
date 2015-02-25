KaTeX for Meteor (cdn version)
================

`meteor add rexzh0u:katex-cdn`

## Usage

```
// on the client
katex.render("c = \\pm\\sqrt{a^2 + b^2}", element);

// on the client or server
var html = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}");
```

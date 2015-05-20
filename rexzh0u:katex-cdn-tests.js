Tinytest.add('katex can be initialized', function (test) {
    test.isNotNull(katex, 'katex should exist');
    test.isNotNull(katex.renderToString, 'katex renderToString should exist');
});

if (Meteor.isClient) {
    Tinytest.add('katex load css', function (test) {
        test.equal($('link[href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min.css"]').length, 1);
    });
}

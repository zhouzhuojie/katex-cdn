Package.describe({
  name: 'rexzh0u:katex-cdn',
  version: '0.1.1',
  summary: 'katex with cdn font loading',
  git: 'https://github.com/zhouzhuojie/katex-cdn.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('jquery@1.0.0', 'client');
  api.addFiles('loadcss.js', 'client');
  api.addFiles('katex.min.js');
  api.addFiles('main.js');
  api.export('katex');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rexzh0u:katex-cdn');
  api.addFiles('rexzh0u:katex-cdn-tests.js');
});

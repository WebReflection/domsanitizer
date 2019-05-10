const {default: sanitizer} = require('../cjs');

console.assert(sanitizer(['<test/>']) === '<test></test>', '<test/>');
console.assert(sanitizer(['<img/>']) === '<img/>', '<img/>');
console.assert(sanitizer(['<input type=password>']) === '<input type=password>', '<input type=password>');
console.assert(/^<input type="[^\"]+">$/.test(sanitizer(['<input type=', '>'])), '<input type=...>');
console.assert(
  /^<link rel=stylesheet type=text\/css href="[^"]+?">$$/.test(
    sanitizer(['<link rel=stylesheet type=text/css href=', '>'])
  ),
  '<link rel=stylesheet type=text/css href=...>'
);
console.assert(
  /^<link rel=stylesheet href="[^"]+?" type=text\/css>$$/.test(
    sanitizer(['<link rel=stylesheet href=', ' type=text/css>'])
  ),
  '<link rel=stylesheet href=... type=text/css>'
);

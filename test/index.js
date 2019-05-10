const {default: sanitizer} = require('../cjs');

console.assert(sanitizer(['<test/>']) === '<test></test>', '<test/>');
console.assert(sanitizer(['<img/>']) === '<img/>', '<img/>');
console.assert(sanitizer(['<input type=password>']) === '<input type=password>', '<input type=password>');
console.assert(/^<input type="[^\"]+">$/.test(sanitizer(['<input type=', '>'])), '<input type=...>');
console.assert(sanitizer(['<link type=text/css>']), '<link type=text/css>', '<link type=text/css>');

/* Whirlpool / test.js
 * echo 'test script for Whirlpool' && node test
 * fork of http://www.sunsean.com/Whirlpool.js for nodejs
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */ 

var Whirlpool = require('./whirlpool.min.js'),
	watch = require('stoptime')();

console.log('whirlpool.js test');
console.log(Whirlpool('the dark side of the whirlpool'));
console.log(Whirlpool(
[ 1952998688,
  1684107883,
  544434532,
  1696624486,
  544499813,
  544696425,
  1919709295,
  17594055393280 ]
));
console.log(watch.elapsed() + 'ms.');
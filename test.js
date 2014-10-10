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
console.log(Whirlpool('whirlpool.js test'));
console.log(watch.elapsed() + 'ms.');
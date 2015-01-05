// Module.exports are cached after the first load
var t1 = new Date().getTime();
var foo = require('./foo_export');
// This value should be higher than 0
console.log(new Date().getTime() - t1); 

var t2 = new Date().getTime();
foo = require('./foo_export');
// This value should be approx. equal to 0
console.log(new Date().getTime() - t2); 
